# Phase 1 — Quality & Single Source of Truth — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Detect and fix every component whose copy-paste code is broken (incomplete/drifted CSS), and install a permanent automated guard so it can't regress.

**Architecture:** A pure, unit-tested audit library (`src/lib/registry-audit.ts`) inspects each `NudaComponent`'s code strings (HTML tab classes vs CSS tab selectors, animation vs `@keyframes`, preview `cssInline` vs copy CSS). A Vitest integrity test runs it over the whole registry and fails on any issue — this is the durable guard. A visual pass (Playwright MCP, at execution time) catches issues that pass static checks but render wrong.

**Tech Stack:** Vitest + vite-tsconfig-paths (new devDeps), existing TS registry, Playwright MCP for visual verification.

---

### Task 1: Add the Vitest test harness

**Files:**
- Modify: `package.json` (scripts + devDeps)
- Create: `vitest.config.ts`

- [ ] **Step 1: Install dev dependencies**

Run:
```bash
npm i -D vitest vite-tsconfig-paths
```
Expected: both added under devDependencies; `node_modules/.bin/vitest` exists.

- [ ] **Step 2: Create `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

// Node environment is enough — the audit reads registry data as plain
// objects; previews are never rendered. tsconfig's "jsx": "react-jsx"
// lets esbuild transpile the registry's JSX without a DOM.
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
```

- [ ] **Step 3: Add scripts to `package.json`**

Add to the `"scripts"` block:
```json
    "test": "vitest run",
    "test:watch": "vitest",
    "audit": "vitest run src/lib/registry-audit.test.ts src/components/showcase/registry/registry-integrity.test.ts"
```

- [ ] **Step 4: Verify the runner boots**

Run: `npx vitest run --reporter=dot`
Expected: exits 0 with "No test files found" (no tests yet) — confirms config loads.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json vitest.config.ts
git commit -m "chore: add vitest harness for registry integrity"
```

---

### Task 2: Audit library + unit tests (TDD)

**Files:**
- Test: `src/lib/registry-audit.test.ts`
- Create: `src/lib/registry-audit.ts`

- [ ] **Step 1: Write the failing unit tests**

`src/lib/registry-audit.test.ts`:
```ts
import { describe, it, expect } from "vitest";
import {
  classesInHtml,
  classesInCss,
  keyframesInCss,
  animationsInCss,
  auditComponent,
} from "./registry-audit";
import type { NudaComponent } from "@/components/showcase/registry/types";

describe("extractors", () => {
  it("pulls nuda- classes from class and className attrs", () => {
    const html = `<div class="nuda-x nuda-y other"><span className="nuda-z"></span></div>`;
    expect([...classesInHtml(html)].sort()).toEqual(["nuda-x", "nuda-y", "nuda-z"]);
  });
  it("pulls class selectors from CSS including pseudos and compounds", () => {
    const css = `.nuda-a{color:red}.nuda-a:hover{}.nuda-b .nuda-c{}`;
    expect([...classesInCss(css)].sort()).toEqual(["nuda-a", "nuda-b", "nuda-c"]);
  });
  it("pulls keyframes names", () => {
    expect([...keyframesInCss(`@keyframes spin{}@keyframes _x{}`)].sort()).toEqual(["_x", "spin"]);
  });
  it("pulls animation names from shorthand and longhand, ignoring keywords/times/functions", () => {
    const css = `.a{animation:spin 2s linear infinite}.b{animation-name:fade, _y}.c{animation:.4s cubic-bezier(.1,.2,.3,.4) slide both}`;
    expect([...animationsInCss(css)].sort()).toEqual(["_y", "fade", "slide", "spin"]);
  });
});

function comp(partial: Partial<NudaComponent>): NudaComponent {
  return {
    id: "t", name: "T", category: "Test", preview: null,
    code: [], cssInline: undefined, ...partial,
  } as NudaComponent;
}

describe("auditComponent", () => {
  it("passes a self-contained component", () => {
    const c = comp({
      cssInline: `.nuda-t{animation:_a .3s}@keyframes _a{to{}}`,
      code: [
        { label: "HTML", language: "html", code: `<div class="nuda-t"></div>` },
        { label: "CSS", language: "css", code: `.nuda-t{animation:slide .3s}@keyframes slide{to{}}` },
      ],
    });
    expect(auditComponent(c)).toEqual([]);
  });
  it("flags a class used in HTML but missing from the CSS tab", () => {
    const c = comp({
      code: [
        { label: "HTML", language: "html", code: `<div class="nuda-t nuda-missing"></div>` },
        { label: "CSS", language: "css", code: `.nuda-t{}` },
      ],
    });
    expect(auditComponent(c).map(i => i.kind)).toContain("html-class-undefined");
  });
  it("flags an incomplete copy CSS that omits classes the preview styles", () => {
    const c = comp({
      cssInline: `.nuda-t{}.nuda-bar{}`,
      code: [
        { label: "HTML", language: "html", code: `<div class="nuda-t"><span class="nuda-bar"></span></div>` },
        { label: "CSS", language: "css", code: `.nuda-bar{}` },
      ],
    });
    expect(auditComponent(c).map(i => i.kind)).toContain("preview-class-undefined");
  });
  it("flags an animation with no keyframes in the same CSS tab", () => {
    const c = comp({
      code: [
        { label: "HTML", language: "html", code: `<div class="nuda-t"></div>` },
        { label: "CSS", language: "css", code: `.nuda-t{animation:ghost 1s}` },
      ],
    });
    expect(auditComponent(c).map(i => i.kind)).toContain("animation-undefined");
  });
});
```

- [ ] **Step 2: Run to verify failure**

Run: `npx vitest run src/lib/registry-audit.test.ts`
Expected: FAIL — cannot resolve `./registry-audit`.

- [ ] **Step 3: Implement `src/lib/registry-audit.ts`**

```ts
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
  | "preview-class-undefined"
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
]);

function nameFromShorthand(value: string): string | null {
  // Strip functions like cubic-bezier(...) / steps(...) so their args don't leak.
  const cleaned = value.replace(/[a-z-]+\([^)]*\)/gi, " ");
  for (const raw of cleaned.trim().split(/\s+/)) {
    const t = raw.trim();
    if (!t) continue;
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
    for (const piece of m[1].split(",")) {
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

  if (htmlTab) {
    for (const cls of classesInHtml(htmlTab.code)) {
      if (!defined.has(cls))
        issues.push({ ...base, kind: "html-class-undefined", detail: `.${cls} used in HTML, not defined in CSS tab` });
    }
  }

  if (c.cssInline) {
    for (const cls of classesInCss(c.cssInline)) {
      if (!defined.has(cls))
        issues.push({ ...base, kind: "preview-class-undefined", detail: `.${cls} styled in preview (cssInline) but missing from CSS tab` });
    }
  }

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
```

- [ ] **Step 4: Run to verify pass**

Run: `npx vitest run src/lib/registry-audit.test.ts`
Expected: PASS (all unit tests green).

- [ ] **Step 5: Commit**

```bash
git add src/lib/registry-audit.ts src/lib/registry-audit.test.ts
git commit -m "feat: registry integrity audit library with unit tests"
```

---

### Task 3: Integrity test over the real registry (reveals the broken list)

**Files:**
- Test: `src/components/showcase/registry/registry-integrity.test.ts`

- [ ] **Step 1: Write the integrity test**

```ts
import { it, expect } from "vitest";
import { categories } from "./categories";
import { auditAll, type AuditIssue } from "@/lib/registry-audit";

it("every registry component is self-contained (preview === copyable code)", () => {
  const all = categories.flatMap((c) => c.components);
  const issues = auditAll(all);
  if (issues.length) {
    const grouped = issues.reduce<Record<string, AuditIssue[]>>((acc, i) => {
      (acc[i.id] ??= []).push(i);
      return acc;
    }, {});
    console.error(`\n${issues.length} integrity issue(s) across ${Object.keys(grouped).length} component(s):`);
    for (const [id, list] of Object.entries(grouped)) {
      console.error(`\n• ${id} (${list[0].category})`);
      for (const i of list) console.error(`    [${i.kind}] ${i.detail}`);
    }
  }
  expect(issues).toEqual([]);
});
```

- [ ] **Step 2: Run to reveal offenders (expected RED)**

Run: `npx vitest run src/components/showcase/registry/registry-integrity.test.ts 2>&1 | tee /tmp/audit-report.txt`
Expected: FAIL. The console output lists every broken component grouped by id (e.g. `undo-toast`, `level-up`, `system-alert`, `achievement-unlock`, and any others across the registry). **This list is the work queue for Task 4.**

- [ ] **Step 3: Commit the test (still red — that's intentional; it documents the invariant)**

```bash
git add src/components/showcase/registry/registry-integrity.test.ts
git commit -m "test: registry integrity invariant (currently failing — see Task 4)"
```

---

### Task 4: Fix every flagged component (data fixes, loop until green)

**Files:**
- Modify: each flagged `src/components/showcase/registry/*.tsx` (driven by Task 3 output)

**Procedure (apply to each component in the Task 3 list):** the CSS `code` tab must
define **every** class the HTML tab and the preview (`cssInline`) use, and define a
`@keyframes` for every animation it references. The fix is to expand the CSS tab so it
is a complete, pretty-printed equivalent of `cssInline` (keeping the friendlier
keyframe/variable names already used in the copy tab).

**Worked example — `undo-toast` in `src/components/showcase/registry/notifications.tsx`:**

The CSS tab currently only defines `.nuda-undotoast__bar` + keyframes. Replace it with
the complete stylesheet derived from `cssInline`:

- [ ] **Step 1: Replace the `undo-toast` CSS tab code** with the full ruleset:

```css
.nuda-undotoast {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px 10px 14px;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: #fafafa;
  width: 100%;
  max-width: 280px;
  overflow: hidden;
  animation: nuda-undot-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
  box-shadow: 0 14px 36px -10px rgba(0, 0, 0, 0.5);
}

.nuda-undotoast__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #ff5e7a;
  flex-shrink: 0;
}

.nuda-undotoast__icon svg { width: 14px; height: 14px; }

.nuda-undotoast__text {
  flex: 1;
  font-size: 12px;
  color: #a0a0a8;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nuda-undotoast__btn {
  padding: 5px 10px;
  background: transparent;
  border: 0;
  color: #e4ff54;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s;
}

.nuda-undotoast__btn:hover { background: rgba(228, 255, 84, 0.1); color: #fafafa; }

.nuda-undotoast__bar {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  background: #ff5e7a;
  animation: nuda-undot-bar 5s linear forwards;
}

@keyframes nuda-undot-in {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: none; }
}

@keyframes nuda-undot-bar {
  from { width: 100%; }
  to   { width: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-undotoast, .nuda-undotoast__bar { animation: none; }
  .nuda-undotoast__bar { width: 100%; }
}
```

- [ ] **Step 2: Repeat the same completion** for every other component the Task 3
  report flagged (`level-up`, `system-alert`, `achievement-unlock`, and any others
  surfaced across the registry). For each: read its `cssInline`, write the equivalent
  full, pretty-printed CSS into the CSS `code` tab, normalising minified keyframe names
  (`_xxx`) to the readable `nuda-*` names already used in copy tabs.

- [ ] **Step 3: Re-run the integrity test after each batch**

Run: `npx vitest run src/components/showcase/registry/registry-integrity.test.ts`
Expected: issue count drops toward 0; iterate until PASS.

- [ ] **Step 4: Run the full suite**

Run: `npm test`
Expected: PASS (unit + integrity).

- [ ] **Step 5: Commit (one commit per registry file, or per logical batch)**

```bash
git add src/components/showcase/registry/notifications.tsx
git commit -m "fix(registry): complete copy CSS for notifications (working paste)"
```

---

### Task 5: Visual verification pass (Playwright MCP, execution-time)

**Goal:** catch components that pass static audit but render or copy wrong in the real UI.

- [ ] **Step 1: Start the dev server**

Run: `npm run dev` (background) and confirm it serves `http://localhost:3000/components`.

- [ ] **Step 2: Drive the gallery with the Playwright MCP browser**

Navigate to `/components`, take a full-page screenshot, and scan for previews that are
blank, clipped, off-canvas, or invisible (color-on-color). For a sample across
categories — and for every component fixed in Task 4 — open its modal/expanded code,
click the **Copy** button, and assert the copied string is the complete CSS (matches the
CSS tab now containing all classes).

- [ ] **Step 3: Fix any visual-only defects** found (e.g. overflow clipping an
  animation, a preview that needs `min-height`). Edit the relevant registry file; if a
  fix changes classes/animations, re-run `npm test` to keep the guard green.

- [ ] **Step 4: Stop the dev server and commit any visual fixes**

```bash
git add src/components/showcase/registry/<file>.tsx
git commit -m "fix(registry): visual corrections from Playwright review"
```

---

### Task 6: Make the audit a required guard

**Files:**
- Modify: `package.json` (prebuild hook)
- Create/Modify: CI workflow if one exists (otherwise document)

- [ ] **Step 1: Gate the build on the audit**

Add to `package.json` scripts so a broken paste can never ship:
```json
    "prebuild": "vitest run"
```

- [ ] **Step 2: Verify the gate**

Run: `npm run build`
Expected: tests run first and pass, then Next builds successfully.

- [ ] **Step 3: Commit**

```bash
git add package.json
git commit -m "chore: gate build on registry integrity audit"
```

---

## Self-Review

- **Spec coverage:** 1a audit script → Tasks 2–3; 1b visual review → Task 5; 1c fix
  offenders → Task 4; 1d durable de-drift → the integrity test + build gate (Tasks 3, 6)
  is the durable mechanism that prevents future divergence (preferred over forced
  cssInline rewriting, which risks altering previews; deeper unification can be a
  follow-up if a component still drifts).
- **Placeholders:** Task 4's per-component fixes are runtime-discovered (the exact
  offender list comes from Task 3); the methodology + one fully-worked example
  (`undo-toast`) are concrete, not placeholders.
- **Type consistency:** `AuditIssue`/`AuditKind`/`auditComponent`/`auditAll` names are
  consistent across library, unit test, and integrity test.
