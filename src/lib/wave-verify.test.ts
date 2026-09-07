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
  // wave 6
  "ai-chat-extra": { n: 10, prefix: "ac2" },
  "charts-extra": { n: 10, prefix: "ch2" },
  "indicators-extra": { n: 7, prefix: "in2" },
  "dropdowns-menus-extra": { n: 6, prefix: "dm2" },
  "glassmorphism-extra": { n: 6, prefix: "gl2" },
  "gradient-animations-extra": { n: 6, prefix: "ga2" },
  "notification-center-extra": { n: 6, prefix: "nc2" },
};

/**
 * Wave 7: pre-existing `-extra` files that GAIN new components. These hold legacy
 * entries under their own prefixes, so only the newly-prefixed subset is audited.
 */
const APPEND: Record<string, { n: number; prefix: string }> = {
  "navigation-extra": { n: 6, prefix: "nv3" },
  "countdowns-extra": { n: 6, prefix: "cd3" },
  "scroll-effects-extra": { n: 6, prefix: "se3" },
  "modals-overlays-extra": { n: 6, prefix: "mo3" },
  "accordions-tabs-extra": { n: 6, prefix: "at3" },
};

/** Pre-existing `-extra` file that gains nothing — already at target. */
const LEGACY = new Set(["borders-outlines-extra"]);

const modules: Record<string, Record<string, unknown>> = import.meta.glob(
  "../components/showcase/registry/*-extra.tsx",
  { eager: true },
);

const batches: { label: string; list: NudaComponent[]; n: number; prefix: string }[] = [];
for (const [path, mod] of Object.entries(modules)) {
  const label = path.split("/").pop()!.replace(/\.tsx$/, "");
  if (LEGACY.has(label)) continue;
  const plan = PLAN[label] ?? APPEND[label];
  if (!plan) continue; // batch not yet planned — ignored rather than failing
  const full = Object.values(mod).find(Array.isArray) as NudaComponent[] | undefined;
  if (!full) throw new Error(`${label}: no NudaComponent[] export found`);
  // Appended files mix legacy entries with new ones; audit only the new subset.
  const list = APPEND[label] ? full.filter((c) => c.id.startsWith(`${plan.prefix}-`)) : full;
  batches.push({ label: APPEND[label] ? `${label} (+${plan.prefix})` : label, list, ...plan });
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

/**
 * The catalog growth is still in progress, so "not authored yet" must NOT fail the
 * build — only *authored* work is held to the quality bar. Run with
 * `NUDA_AUDIT_COMPLETE=1` to additionally assert the whole plan has landed.
 */
const REQUIRE_COMPLETE = process.env.NUDA_AUDIT_COMPLETE === "1";

const landed = batches.filter((b) => b.list.length > 0);
const pending = [
  ...Object.keys(PLAN).filter((k) => !batches.some((b) => b.label === k)),
  ...batches.filter((b) => b.list.length === 0).map((b) => b.label),
];

it("plan progress", () => {
  const done = landed.reduce((n, b) => n + b.list.length, 0);
  const target = Object.values(PLAN).reduce((n, p) => n + p.n, 0) +
    Object.values(APPEND).reduce((n, p) => n + p.n, 0);
  console.info(
    `\ncatalog growth: ${done}/${target} new components across ${landed.length} batches` +
      (pending.length ? `\npending (${pending.length}): ${pending.join(", ")}` : "\nplan complete"),
  );
  if (REQUIRE_COMPLETE) expect(pending).toEqual([]);
});

for (const batch of landed) {
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
  for (const b of landed) for (const c of b.list) if (existing.has(c.id)) collisions.push(c.id);
  expect(collisions).toEqual([]);
}, 60_000);

it("no id collides across the new batches", () => {
  const seen = new Map<string, string>();
  const collisions: string[] = [];
  for (const b of landed)
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
  for (const b of landed)
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
  for (const b of landed)
    for (const c of b.list)
      for (const m of (c.cssInline ?? "").matchAll(/@keyframes\s+([A-Za-z0-9_-]+)/g))
        if (existing.has(m[1])) collisions.push(`${c.id}: ${m[1]}`);
  expect([...new Set(collisions)]).toEqual([]);
}, 60_000);
