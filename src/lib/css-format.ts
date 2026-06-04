/**
 * Minimal, dependency-free CSS pretty-printer.
 *
 * The registry stores a compact, single-line `cssInline` per component (the
 * authoritative styles that render the live preview). When a component's
 * copy-paste CSS tab is incomplete, we regenerate it from `cssInline` — and it
 * needs to read nicely. This formatter is brace-depth aware so it handles
 * nested at-rules (`@keyframes`, `@media`) correctly.
 *
 * It is intentionally simple: it assumes the well-formed, brace-balanced CSS we
 * author by hand (no data-URIs with stray braces, no comments inside values).
 */

const PROP = /^-{0,2}[a-z][a-z0-9-]*$/i;

/** Format a single `prop:value` declaration, adding a space after the colon
 *  only when the left side is a real property name (never a selector pseudo). */
function formatDeclaration(decl: string): string {
  const trimmed = decl.trim().replace(/;+$/, "");
  if (!trimmed) return "";
  const idx = trimmed.indexOf(":");
  if (idx > 0) {
    const prop = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    if (PROP.test(prop)) return `${prop}: ${value};`;
  }
  return `${trimmed};`;
}

export function prettifyCss(input: string): string {
  const src = input.replace(/\s+/g, " ").trim();
  let out = "";
  let depth = 0;
  let buf = "";
  const pad = (n: number) => "  ".repeat(Math.max(0, n));

  for (const ch of src) {
    if (ch === "{") {
      out += `${pad(depth)}${buf.trim().replace(/@media\(/i, "@media (")} {\n`;
      buf = "";
      depth++;
    } else if (ch === "}") {
      if (buf.trim()) out += `${pad(depth)}${formatDeclaration(buf)}\n`;
      buf = "";
      depth = Math.max(0, depth - 1);
      out += `${pad(depth)}}\n`;
      if (depth === 0) out += "\n";
    } else if (ch === ";") {
      out += `${pad(depth)}${formatDeclaration(buf)}\n`;
      buf = "";
    } else {
      buf += ch;
    }
  }

  return out.replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
