/// <reference types="vite/client" />
/**
 * TEMPORARY verification harness used while growing the catalog 1022 -> 1500.
 *
 * Auto-discovers every `*-extra.tsx` registry batch and audits it BEFORE it is
 * wired into categories.ts, so a bad batch is caught early instead of at the
 * final integrity run. Enforces the house rules from
 * docs/superpowers/plans/2026-06-16-animations-to-1k.md §4 that the permanent
 * audit does not cover (prefix discipline, reduced-motion, GPU-only motion).
 *
 * DELETE THIS FILE once categories.ts wiring is complete — the permanent
 * `registry-integrity.test.ts` then covers everything.
 */
import { it, expect } from "vitest";
import { auditAll } from "@/lib/registry-audit";
import { reconcileComponents } from "@/components/showcase/registry/reconcile";
import { categories } from "@/components/showcase/registry/categories";
import type { NudaComponent } from "@/components/showcase/registry/types";

/** file basename -> { expected count, mandated id/class prefix } */
const PLAN: Record<string, { n: number; prefix: string }> = {
  // wave 1
  "cursors-extra": { n: 12, prefix: "cur2" },
  "three-d-extra": { n: 12, prefix: "td2" },
  "marquees-extra": { n: 12, prefix: "mq2" },
  "noise-grain-extra": { n: 12, prefix: "ng2" },
  "view-transitions-extra": { n: 12, prefix: "vt2" },
  "weather-ambient-extra": { n: 12, prefix: "wa2" },
  "avatars-extra": { n: 11, prefix: "av2" },
  "notifications-extra": { n: 11, prefix: "ta2" },
  // wave 2
  "breadcrumbs-extra": { n: 8, prefix: "bc2" },
  "pagination-extra": { n: 8, prefix: "pg2" },
  "empty-states-extra": { n: 8, prefix: "es2" },
  "particles-extra": { n: 8, prefix: "pt2" },
  "scroll-driven-extra": { n: 8, prefix: "sd2" },
  "css-only-interactions-extra": { n: 8, prefix: "co2" },
  "glitch-distortion-extra": { n: 8, prefix: "gd2" },
  "neon-glow-extra": { n: 8, prefix: "ne2" },
  // wave 3
  "morphing-shapes-extra": { n: 8, prefix: "ms2" },
  "confetti-celebration-extra": { n: 8, prefix: "cc2" },
  "animated-icons-extra": { n: 8, prefix: "ai2" },
  "stats-counters-extra": { n: 8, prefix: "sc2" },
  "form-states-extra": { n: 8, prefix: "fs2" },
  "image-effects-extra": { n: 8, prefix: "ie2" },
  "drag-drop-extra": { n: 8, prefix: "dd2" },
  "command-palette-extra": { n: 8, prefix: "cp2" },
  // wave 4
  "theme-toggle-extra": { n: 8, prefix: "tt2" },
  "pricing-extra": { n: 8, prefix: "pr2" },
  "video-player-extra": { n: 8, prefix: "vp2" },
  "onboarding-extra": { n: 8, prefix: "ob2" },
  "code-terminal-extra": { n: 8, prefix: "ct2" },
  "footers-extra": { n: 8, prefix: "ft2" },
  "auth-extra": { n: 8, prefix: "au2" },
  "calendars-extra": { n: 8, prefix: "ca2" },
  // wave 5
  "sidebars-extra": { n: 8, prefix: "sb2" },
  "steppers-extra": { n: 8, prefix: "st2" },
  "color-pickers-extra": { n: 8, prefix: "cpk2" },
  "galleries-carousels-extra": { n: 8, prefix: "gc2" },
  "maps-locations-extra": { n: 8, prefix: "ml2" },
  "cookie-consent-extra": { n: 8, prefix: "ck2" },
  "error-pages-extra": { n: 8, prefix: "ep2" },
};

/** Pre-existing `-extra` files that shipped before this effort — not under audit here. */
const LEGACY = new Set([
  "accordions-tabs-extra",
  "borders-outlines-extra",
  "countdowns-extra",
  "modals-overlays-extra",
  "navigation-extra",
  "scroll-effects-extra",
]);

const modules: Record<string, Record<string, unknown>> = import.meta.glob(
  "../components/showcase/registry/*-extra.tsx",
  { eager: true },
);

const batches: { label: string; list: NudaComponent[]; n: number; prefix: string }[] = [];
for (const [path, mod] of Object.entries(modules)) {
  const label = path.split("/").pop()!.replace(/\.tsx$/, "");
  if (LEGACY.has(label)) continue;
  const plan = PLAN[label];
  if (!plan) continue; // batch not yet planned — ignored rather than failing
  const list = Object.values(mod).find(Array.isArray) as NudaComponent[] | undefined;
  if (!list) throw new Error(`${label}: no NudaComponent[] export found`);
  batches.push({ label, list, ...plan });
}

const LAYOUT_PROPS =
  /(?:^|[;{\s])(width|height|top|left|right|bottom|margin(?:-[a-z]+)?|padding(?:-[a-z]+)?)\s*:/g;

function keyframeBodies(css: string): string[] {
  const out: string[] = [];
  const re = /@keyframes\s+[A-Za-z0-9_-]+\s*\{/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(css))) {
    let depth = 1;
    let i = re.lastIndex;
    for (; i < css.length && depth > 0; i++) {
      if (css[i] === "{") depth++;
      else if (css[i] === "}") depth--;
    }
    out.push(css.slice(re.lastIndex, i - 1));
  }
  return out;
}

it("every planned batch has landed", () => {
  const missing = Object.keys(PLAN).filter((k) => !batches.some((b) => b.label === k));
  expect(missing).toEqual([]);
});

for (const batch of batches) {
  const { label, list, prefix } = batch;

  it(`${label}: has exactly ${batch.n} components`, () => {
    expect(list.length).toBe(batch.n);
  });

  it(`${label}: passes the integrity audit after reconcile`, () => {
    const issues = auditAll(reconcileComponents(list));
    if (issues.length)
      console.error(
        `\n${label}:\n` + issues.map((i) => `  [${i.kind}] ${i.id} — ${i.detail}`).join("\n"),
      );
    expect(issues.map((i) => `${i.id}: ${i.kind}`)).toEqual([]);
  });

  it(`${label}: ids and classes use the mandated "${prefix}" prefix`, () => {
    const bad: string[] = [];
    for (const c of list) {
      if (!c.id.startsWith(`${prefix}-`)) bad.push(`id ${c.id}`);
      if (c.category === undefined) bad.push(`${c.id}: missing category`);
      for (const m of (c.cssInline ?? "").matchAll(/\.(nuda-[A-Za-z0-9_-]+)/g))
        if (!m[1].startsWith(`nuda-${prefix}-`)) bad.push(`${c.id}: .${m[1]}`);
    }
    expect([...new Set(bad)]).toEqual([]);
  });

  it(`${label}: every component ships a reduced-motion escape hatch`, () => {
    const bad = list
      .filter((c) => !/prefers-reduced-motion/.test(c.cssInline ?? ""))
      .map((c) => c.id);
    expect(bad).toEqual([]);
  });

  it(`${label}: @keyframes animate only compositor-friendly properties`, () => {
    const bad: string[] = [];
    for (const c of list)
      for (const body of keyframeBodies(c.cssInline ?? ""))
        for (const m of body.matchAll(LAYOUT_PROPS)) bad.push(`${c.id}: ${m[1]}`);
    expect([...new Set(bad)]).toEqual([]);
  });

  it(`${label}: no "transition: all"`, () => {
    expect(
      list.filter((c) => /transition\s*:\s*all\b/.test(c.cssInline ?? "")).map((c) => c.id),
    ).toEqual([]);
  });

  it(`${label}: HTML tabs are real HTML, not JSX`, () => {
    const bad: string[] = [];
    for (const c of list)
      for (const tab of c.code) {
        if (tab.language !== "html") continue;
        if (/className=|htmlFor=/.test(tab.code)) bad.push(`${c.id}: JSX attrs`);
        // The lookahead keeps `<p` from matching `<path/>`; inside <svg>,
        // self-closing syntax is legal, so strip svg subtrees first.
        const m = tab.code
          .replace(/<svg[\s\S]*?<\/svg>/g, "")
          .match(
            /<(div|span|p|section|article|header|footer|button|nav|ul|ol|li|a|label|table|tr|td|th|form|h[1-6]|strong|em|code|pre|figure|blockquote)(?=[\s/>])[^>]*\/>/,
          );
        if (m) bad.push(`${c.id}: self-closed <${m[1]}>`);
      }
    expect([...new Set(bad)]).toEqual([]);
  });
}

it("no id collides with the already-wired catalog", () => {
  const existing = new Set(categories.flatMap((c) => c.components).map((c) => c.id));
  const collisions: string[] = [];
  for (const b of batches) for (const c of b.list) if (existing.has(c.id)) collisions.push(c.id);
  expect(collisions).toEqual([]);
}, 60_000);

it("no id collides across the new batches", () => {
  const seen = new Map<string, string>();
  const collisions: string[] = [];
  for (const b of batches)
    for (const c of b.list) {
      const prev = seen.get(c.id);
      if (prev) collisions.push(`${c.id} (${prev} + ${b.label})`);
      else seen.set(c.id, b.label);
    }
  expect(collisions).toEqual([]);
});

it("no @keyframes name collides across the new batches", () => {
  const seen = new Map<string, string>();
  const collisions: string[] = [];
  for (const b of batches)
    for (const c of b.list)
      for (const m of (c.cssInline ?? "").matchAll(/@keyframes\s+([A-Za-z0-9_-]+)/g)) {
        const prev = seen.get(m[1]);
        if (prev && prev !== c.id) collisions.push(`${m[1]} (${prev} + ${c.id})`);
        else seen.set(m[1], c.id);
      }
  expect([...new Set(collisions)]).toEqual([]);
});

it("no @keyframes name collides with the already-wired catalog", () => {
  const existing = new Set<string>();
  for (const c of categories.flatMap((c) => c.components))
    for (const m of (c.cssInline ?? "").matchAll(/@keyframes\s+([A-Za-z0-9_-]+)/g))
      existing.add(m[1]);
  const collisions: string[] = [];
  for (const b of batches)
    for (const c of b.list)
      for (const m of (c.cssInline ?? "").matchAll(/@keyframes\s+([A-Za-z0-9_-]+)/g))
        if (existing.has(m[1])) collisions.push(`${c.id}: ${m[1]}`);
  expect([...new Set(collisions)]).toEqual([]);
}, 60_000);
