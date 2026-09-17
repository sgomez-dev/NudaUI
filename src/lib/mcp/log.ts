/**
 * Minimal usage instrumentation for the MCP endpoint.
 *
 * One structured JSON line per call to stdout, read through Vercel logs.
 * No database and no analytics dependency: the questions this has to answer
 * — which tools get called, which components get asked for, which queries
 * return nothing — are all answerable from a log drain.
 *
 * Query text is hashed, never stored. `zeroResults` is kept in the clear
 * because "queries that return nothing" is the metric worth acting on and
 * it needs no user text to be useful.
 *
 * A note on sessions: MCP revision 2026-07-28 removed session tracking from
 * the protocol, so there is no session to count. `client` is the nearest
 * honest proxy — but it is read from an optional `_meta` claim (spec PR #3002
 * demoted `clientInfo` from MUST to SHOULD) and is `undefined` for a fully
 * compliant client that omits it. `uaHash` is a secondary identity bucket
 * derived from the request's `User-Agent` header, present on every real HTTP
 * request regardless of `clientInfo`, so "distinct clients per day" stays
 * measurable even when `client` collapses to `undefined`. It complements
 * `client` and never replaces it: several different MCP clients can share
 * one HTTP library's User-Agent and so hash to the same bucket, which is why
 * `client` remains the more precise signal whenever it is present.
 */
import { createHash } from "node:crypto";

/** Short, stable, non-reversible digest of a query string. */
export function hashQuery(q: string): string {
  return createHash("sha256")
    .update(q.trim().toLowerCase())
    .digest("hex")
    .slice(0, 12);
}

/**
 * Short, stable, non-reversible digest of a raw `User-Agent` header.
 *
 * Sibling to {@link hashQuery}: same construction, same guarantee — the raw
 * string is never logged, only this digest. Returns `undefined` for a
 * missing or blank header rather than hashing an empty string, so the log
 * line omits the field instead of carrying a misleading constant hash.
 */
export function hashUserAgent(ua: string | null | undefined): string | undefined {
  if (!ua || !ua.trim()) return undefined;
  return createHash("sha256")
    .update(ua.trim().toLowerCase())
    .digest("hex")
    .slice(0, 12);
}

/**
 * Normalize a component id before it is logged, so `toast-slide`,
 * `toast-slide.json` and `Toast-Slide` all aggregate under one bucket in the
 * usage log — the trailing `.json` and casing are call-site noise, not
 * distinct components.
 */
export function normalizeComponentId(id: string): string {
  return id.replace(/\.json$/i, "").toLowerCase();
}

export interface ToolCallEvent {
  tool: string;
  ok: boolean;
  ms: number;
  client?: string;
  uaHash?: string;
  queryHash?: string;
  componentId?: string;
  results?: number;
  hydratedCount?: number;
  zeroResults?: boolean;
  degraded?: boolean;
}

/** Emit one line. Never throws — instrumentation must not break a tool call. */
export function logToolCall(e: ToolCallEvent): void {
  try {
    console.log(
      JSON.stringify({
        evt: "mcp_tool",
        ...e,
        day: new Date().toISOString().slice(0, 10),
      }),
    );
  } catch {
    // Logging is best-effort by design.
  }
}
