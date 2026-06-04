import type { NudaComponent } from "./types";
import { auditComponent } from "@/lib/registry-audit";
import { prettifyCss } from "@/lib/css-format";

/**
 * `cssInline` is the single source of truth for a component's styles — it's what
 * renders the live preview, so it is always complete and correct. Some
 * components historically shipped an incomplete/drifted copy-paste CSS tab.
 *
 * This heals them: if a component fails the integrity audit and has a
 * `cssInline`, its CSS code tab is regenerated (pretty-printed) from `cssInline`
 * so the code you copy reproduces exactly what you see. Components that already
 * pass the audit are returned untouched, preserving their hand-curated CSS tabs
 * (comments, friendly variable names, etc.).
 *
 * Net effect: preview and copyable code can no longer diverge. New components
 * only need to author `cssInline` + the HTML tab; the CSS tab self-heals.
 */
export function reconcileComponent(c: NudaComponent): NudaComponent {
  if (!c.cssInline) return c;
  if (auditComponent(c).length === 0) return c;

  const pretty = prettifyCss(c.cssInline);
  const hasCss = c.code.some((t) => t.language === "css");
  const code = hasCss
    ? c.code.map((t) => (t.language === "css" ? { ...t, code: pretty } : t))
    : [...c.code, { label: "CSS", language: "css", code: pretty }];

  return { ...c, code };
}

export function reconcileComponents(list: NudaComponent[]): NudaComponent[] {
  return list.map(reconcileComponent);
}
