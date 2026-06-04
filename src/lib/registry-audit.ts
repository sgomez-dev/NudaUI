/**
 * Static integrity audit for the component registry. Operates purely on the
 * code STRINGS (no rendering) so it runs in a plain Node test. The invariant
 * it enforces: whatever the preview shows, the copy-paste code reproduces.
 */
import type { NudaComponent } from "@/components/showcase/registry/types";

const PREFIX = "nuda-";

export type AuditKind =
  | "empty-code"
  | "bad-language"
  | "duplicate-id"
  | "html-class-undefined"
  | "animation-undefined";

export interface AuditIssue {
  id: string;
  name: string;
  category: string;
  kind: AuditKind;
  detail: string;
}

export function classesInHtml(html: string): Set<string> {
  const out = new Set<string>();
  const re = /class(?:Name)?\s*=\s*["'`]([^"'`]+)["'`]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    for (const tok of m[1].split(/\s+/)) if (tok.startsWith(PREFIX)) out.add(tok);
  }
  return out;
}

export function classesInCss(css: string): Set<string> {
  const out = new Set<string>();
  const re = /\.(nuda-[A-Za-z0-9_-]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(css))) out.add(m[1]);
  return out;
}

export function keyframesInCss(css: string): Set<string> {
  const out = new Set<string>();
  const re = /@keyframes\s+([A-Za-z0-9_-]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(css))) out.add(m[1]);
  return out;
}

// Keywords that can appear in the `animation` shorthand and are NOT the name.
const ANIM_KEYWORDS = new Set([
  "none", "linear", "ease", "ease-in", "ease-out", "ease-in-out",
  "step-start", "step-end", "infinite", "normal", "reverse",
  "alternate", "alternate-reverse", "forwards", "backwards", "both",
  "running", "paused",
  // CSS-wide keywords that can appear as a value
  "inherit", "initial", "unset", "revert", "revert-layer",
]);

function nameFromShorthand(piece: string): string | null {
  for (const raw of piece.trim().split(/\s+/)) {
    const t = raw.trim();
    if (!t) continue;
    if (t.startsWith("!")) continue; // !important
    if (ANIM_KEYWORDS.has(t.toLowerCase())) continue;
    if (/^-?[\d.]+m?s$/i.test(t)) continue; // time
    if (/^-?[\d.]+$/.test(t)) continue; // iteration count / number
    return t; // first custom-ident wins
  }
  return null;
}

export function animationsInCss(css: string): Set<string> {
  const out = new Set<string>();
  let m: RegExpExecArray | null;
  const longhand = /animation-name\s*:\s*([^;}]+)[;}]/g;
  while ((m = longhand.exec(css))) {
    for (const n of m[1].split(",")) {
      const t = n.trim();
      if (t && t.toLowerCase() !== "none") out.add(t);
    }
  }
  const shorthand = /(?<!-)animation\s*:\s*([^;}]+)[;}]/g;
  while ((m = shorthand.exec(css))) {
    // Strip functions like cubic-bezier(...) / steps(...) BEFORE splitting on
    // commas, so a function's internal commas don't fragment the value.
    const cleaned = m[1].replace(/[a-z-]+\([^)]*\)/gi, " ");
    for (const piece of cleaned.split(",")) {
      const name = nameFromShorthand(piece);
      if (name) out.add(name);
    }
  }
  return out;
}

const LANGS = new Set(["html", "css", "javascript"]);

export function auditComponent(c: NudaComponent): AuditIssue[] {
  const issues: AuditIssue[] = [];
  const base = { id: c.id, name: c.name, category: c.category };

  if (!c.code.length) issues.push({ ...base, kind: "empty-code", detail: "no code tabs" });
  for (const t of c.code) {
    if (!LANGS.has(t.language))
      issues.push({ ...base, kind: "bad-language", detail: t.language });
  }

  const cssTab = c.code.find((t) => t.language === "css");
  const htmlTab = c.code.find((t) => t.language === "html");
  const copyCss = cssTab?.code ?? "";
  const defined = classesInCss(copyCss);
  const keyframes = keyframesInCss(copyCss);

  // A class is "broken" only when the PREVIEW proves it needs styling
  // (cssInline defines it) yet the copyable CSS omits it. An HTML class with
  // no rule anywhere is a valid unstyled semantic wrapper — not a defect.
  // When a component ships no cssInline we have no proof, so fall back to the
  // stricter "HTML class must exist in the CSS tab".
  const proof = c.cssInline ? classesInCss(c.cssInline) : null;
  if (htmlTab) {
    for (const cls of classesInHtml(htmlTab.code)) {
      if (defined.has(cls)) continue;
      if (proof && !proof.has(cls)) continue; // preview doesn't style it → fine
      issues.push({ ...base, kind: "html-class-undefined", detail: `.${cls} used in HTML and styled in preview, but missing from CSS tab` });
    }
  }

  // NOTE: we deliberately do NOT require the preview's cssInline classes to
  // appear in the copy CSS. Many components render a deliberately simplified
  // *demo* in the gallery (its own `nuda-*-demo` classes) while the copyable
  // code is the full production component. Preview↔copy class parity is a
  // soft concern; the hard invariant is that the COPYABLE code is
  // self-contained (every HTML class + animation it references is defined).
  for (const anim of animationsInCss(copyCss)) {
    if (!keyframes.has(anim))
      issues.push({ ...base, kind: "animation-undefined", detail: `animation "${anim}" referenced in CSS tab but no matching @keyframes` });
  }

  return issues;
}

export function auditAll(components: NudaComponent[]): AuditIssue[] {
  const issues: AuditIssue[] = [];
  const counts = new Map<string, number>();
  for (const c of components) {
    counts.set(c.id, (counts.get(c.id) ?? 0) + 1);
    issues.push(...auditComponent(c));
  }
  for (const [id, n] of counts) {
    if (n > 1) issues.push({ id, name: id, category: "—", kind: "duplicate-id", detail: `id appears ${n}×` });
  }
  return issues;
}
