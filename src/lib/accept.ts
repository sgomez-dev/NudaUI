/**
 * Proactive content negotiation for the `Accept` request header.
 *
 * Implements RFC 9110 §12.5.1 the way acceptmarkdown.com specifies it:
 *
 *   1. Parse `Accept` into an ordered list of media ranges + q-values.
 *   2. For each type WE can produce, find the *most specific* matching range
 *      (`text/markdown` beats `text/*` beats `*​/*`), regardless of q — so
 *      `text/html;q=0, *​/*` correctly rejects HTML instead of letting the
 *      wildcard resurrect it.
 *   3. Rank the candidates by q desc → specificity desc → client order →
 *      server preference order.
 *   4. Return `null` when nothing is acceptable, which the caller turns into
 *      a 406.
 *
 * Deliberately dependency-free and side-effect-free: `src/middleware.ts` runs
 * on the Edge runtime, so this module must stay importable there.
 *
 * Reference: https://acceptmarkdown.com/guides/accept-parsing/
 */

/** A single parsed entry of an `Accept` header. */
export interface AcceptEntry {
  /** Lower-cased media range, e.g. `text/markdown`, `text/*`, `*​/*`. */
  type: string;
  /** Quality factor, clamped to [0, 1]. Absent `q` means 1. */
  q: number;
  /** 2 = fully specified, 1 = subtype wildcard, 0 = `*​/*`. */
  specificity: 0 | 1 | 2;
  /** Position in the header, used to break exact ties in client order. */
  index: number;
}

/** IANA media type for Markdown (RFC 7763). Never `text/x-markdown`. */
export const MARKDOWN_MEDIA_TYPE = "text/markdown";
/** Content-Type we send when we serve the Markdown representation. */
export const MARKDOWN_CONTENT_TYPE = "text/markdown; charset=utf-8";

/**
 * Parse an `Accept` header into entries, preserving client order.
 *
 * Malformed entries (no `/`, empty) are dropped rather than throwing — a
 * broken header should degrade to "fewer options", never to a 500.
 */
export function parseAccept(header: string): AcceptEntry[] {
  const entries: AcceptEntry[] = [];

  for (const raw of header.split(",")) {
    const parts = raw.trim().split(";");
    const type = parts[0]?.trim().toLowerCase() ?? "";
    if (!type || !type.includes("/")) continue;

    let q = 1;
    for (const param of parts.slice(1)) {
      const eq = param.indexOf("=");
      if (eq === -1) continue;
      const name = param.slice(0, eq).trim().toLowerCase();
      if (name !== "q") continue;
      const parsed = Number(param.slice(eq + 1).trim());
      if (!Number.isNaN(parsed)) q = Math.max(0, Math.min(1, parsed));
    }

    const specificity: 0 | 1 | 2 =
      type === "*/*" ? 0 : type.endsWith("/*") ? 1 : 2;

    entries.push({ type, q, specificity, index: entries.length });
  }

  return entries;
}

/** Does a media range cover a concrete media type? */
function matches(entry: AcceptEntry, candidate: string): boolean {
  if (entry.type === "*/*") return true;
  if (entry.type.endsWith("/*")) {
    return candidate.startsWith(entry.type.slice(0, -1));
  }
  return entry.type === candidate;
}

/**
 * Pick the representation to serve.
 *
 * @param header   Raw `Accept` value. `null`/`undefined` means the header was
 *                 absent — "no constraint", so we serve the default.
 * @param produces Types this resource can emit, most-preferred first.
 * @returns The chosen media type, or `null` when the client accepts none of
 *          them (the caller should answer 406).
 *
 * Note the deliberate asymmetry between a *missing* header and an *empty*
 * one: RFC 9110 treats "no Accept" as "anything goes", while an empty field
 * value lists zero acceptable types. acceptmarkdown.com calls this out
 * explicitly, so we honour it.
 */
export function negotiate(
  header: string | null | undefined,
  produces: readonly string[]
): string | null {
  if (produces.length === 0) return null;
  if (header === null || header === undefined) return produces[0];

  const entries = parseAccept(header);
  if (entries.length === 0) return null;

  let best: { type: string; entry: AcceptEntry } | null = null;

  for (const candidate of produces) {
    // Most specific matching range wins for THIS candidate, ties broken by
    // client order. Specificity is checked before q so an explicit
    // `type;q=0` is honoured even when a wildcard would score higher.
    let matched: AcceptEntry | null = null;
    for (const entry of entries) {
      if (!matches(entry, candidate)) continue;
      if (matched === null || entry.specificity > matched.specificity) {
        matched = entry;
      }
    }

    if (matched === null) continue;
    if (matched.q <= 0) continue; // explicit rejection

    if (
      best === null ||
      matched.q > best.entry.q ||
      (matched.q === best.entry.q &&
        matched.specificity > best.entry.specificity) ||
      (matched.q === best.entry.q &&
        matched.specificity === best.entry.specificity &&
        matched.index < best.entry.index)
    ) {
      best = { type: candidate, entry: matched };
    }
  }

  return best?.type ?? null;
}

/**
 * Append tokens to a `Vary` header without duplicating what's already there.
 *
 * Next.js already sets `Vary: rsc, next-router-state-tree, …` on App Router
 * responses, so we must *append* rather than overwrite — clobbering it would
 * break client-side navigation caching.
 */
export function appendVary(headers: Headers, ...tokens: string[]): void {
  const existing = headers.get("Vary");

  if (existing === "*") return; // `Vary: *` already disables shared caching.

  const present = new Set(
    (existing ?? "")
      .split(",")
      .map((token) => token.trim().toLowerCase())
      .filter(Boolean)
  );

  const additions = tokens.filter(
    (token) => !present.has(token.toLowerCase())
  );
  if (additions.length === 0) return;

  headers.set(
    "Vary",
    existing ? `${existing}, ${additions.join(", ")}` : additions.join(", ")
  );
}

/**
 * RFC 9110 §15.5.7 recommends a 406 body that lists the representations the
 * client could ask for instead. Plain text is the most broadly parseable.
 */
export function notAcceptableBody(
  produces: readonly string[],
  requested: string | null | undefined
): string {
  const lines = ["This resource is available in:"];
  for (const type of produces) lines.push(`- ${type}`);
  lines.push("");
  lines.push(`You requested: ${requested?.trim() || "(empty Accept header)"}`);
  lines.push("");
  return lines.join("\n");
}
