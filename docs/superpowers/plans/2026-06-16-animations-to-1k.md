# NudaUI → 1k Animations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Grow the NudaUI catalog from 802 to ~1,050+ self-contained copy-paste animations by adding 12 new categories and deepening 14 existing ones, then flip every public "800+" surface to "1,000+".

**Architecture:** Each animation is a `NudaComponent` object (`id`, `name`, `category`, `preview` JSX, `cssInline`, `code[]` tabs). All UI/SEO/AI surfaces derive from the `categories` array in `categories.ts`. New components only need a correct `cssInline` + HTML tab; `reconcile.ts` regenerates the CSS tab so preview and copyable code can't drift. Tests in `registry-audit.ts` enforce self-containment on `prebuild`.

**Tech Stack:** Next.js 16 + React 19, TypeScript, Tailwind v4 (site chrome only), lucide-react (category icons), vitest. **Components themselves use ZERO dependencies** — plain HTML + CSS (+ optional vanilla JS). No GSAP/Framer/Three.

---

## Reference inspiration (read once, do not copy deps)

Local skill library under `.claude/skills/web/` and `.claude/skills/accessibility/` is an **idea catalog only**. Mine it for effect concepts (aurora, meteors, scramble text, letter glitch, magnetic, spotlight, tilt, click-spark, number ticker, grain, gradient mesh, scroll-driven CSS `animation-timeline`) and for the principles below. **Ignore every library install** — NudaUI ships dependency-free copy-paste code.

---

## Global Quality Bar (applies to EVERY new component)

Author the subagent prompts so each component satisfies all of these. A component that violates any of these must not be committed.

1. **Brand aesthetic:** dark surface `#09090b`, lime accent `#e4ff54`. Match the visual language of neighboring components in the same file. Secondary accents allowed when the effect needs them (e.g. RGB split, weather), but lime is the house color.
2. **Self-contained:** author `cssInline` (minified, drives the live preview) + an HTML code tab using plain `class="nuda-…"`. The CSS code tab self-heals from `cssInline` via `reconcile.ts`; you MAY also hand-write a commented CSS tab (friendly `--var` names) like the existing curated components — if you do, it must pass the audit on its own.
3. **Unique prefix:** every class is `nuda-<slug>` / `nuda-<slug>__part` / `nuda-<slug>--state`, and every `@keyframes` is `nuda-<slug>-<x>` or `_<slug>x`. The `<style>` tag is global and shared — a collision corrupts other components. `id` must be globally unique across all 1,000+ components.
4. **GPU-only motion:** animate `transform`, `opacity`, `filter`, `clip-path`, `background-position` only. NEVER animate `width`/`height`/`top`/`left`/`margin`/`padding`. NEVER use `transition: all`. Add `will-change` on the animated property where it helps.
5. **Accessibility (WCAG 2.1):**
   - End every `cssInline` and CSS tab with `@media (prefers-reduced-motion: reduce){…}` that stops/!-attenuates the motion (settle to a static, legible end-state).
   - **No flashing > 3 times/second** (seizure safety) — caps the strobe rate on glitch/neon/flicker/scanline effects; keep flicker subtle and slow, and kill it entirely under reduced-motion.
   - Interactive demos: `role`/`aria-*` as appropriate, keyboard reachable, visible focus, touch target ≥ 44×44px, status text via `aria-live` where relevant.
   - Text contrast ≥ 4.5:1 against its background.
6. **No deps, no framework JS in copy code:** copyable code is HTML + CSS, plus a vanilla-JS tab (`language: "javascript"`) ONLY when the pattern truly needs it. Preview JSX may use inline React handlers (see existing `micro-interactions.tsx`) but the copyable HTML/JS must be framework-free.
7. **Passes the audit:** `npm run audit` reports zero issues for the file.

---

## File Structure

**New registry files** (one per new category), each `export const <camelId>: NudaComponent[] = [...]`:

```
src/components/showcase/registry/glassmorphism.tsx          → glassmorphism
src/components/showcase/registry/gradient-animations.tsx    → gradientAnimations
src/components/showcase/registry/noise-grain.tsx            → noiseGrain
src/components/showcase/registry/scroll-driven.tsx          → scrollDriven
src/components/showcase/registry/view-transitions.tsx       → viewTransitions
src/components/showcase/registry/css-only-interactions.tsx  → cssOnlyInteractions
src/components/showcase/registry/glitch-distortion.tsx      → glitchDistortion
src/components/showcase/registry/neon-glow.tsx              → neonGlow
src/components/showcase/registry/morphing-shapes.tsx        → morphingShapes
src/components/showcase/registry/confetti-celebration.tsx   → confettiCelebration
src/components/showcase/registry/animated-icons.tsx         → animatedIcons
src/components/showcase/registry/weather-ambient.tsx        → weatherAmbient
```

**Modified files:**
- `src/components/showcase/registry/categories.ts` — 12 imports + 12 rows.
- 14 existing registry files (deepening) — append components.
- `src/app/components/opengraph-image.tsx` — "800+" → "1,000+".
- `src/components/landing/roadmap.tsx` — milestone/counts.
- `README.md`, `src/app/changelog/page.tsx` — count + changelog entry.

**Untouched (auto-derive from `categories`/`totalCount`):** `live-metrics.tsx`, `/api/registry.json`, `/api/catalog.json`, `/api/catalog-full.json`, `/llms.txt`, `/llms-full.txt`, sidebar, search, JSON-LD.

---

## ANCHOR: a fully-worked reference component

Every new component follows this exact shape. This is the quality target — study it, then produce siblings.

```tsx
// inside src/components/showcase/registry/glassmorphism.tsx
import type { NudaComponent } from "./types";

export const glassmorphism: NudaComponent[] = [
  /* ─────────────── Glass Card ─────────────── */
  {
    id: "glass-card",
    name: "Glass Card",
    category: "Glassmorphism",
    preview: (
      <div className="nuda-glass-card">
        <div className="nuda-glass-card__sheen" aria-hidden="true" />
        <p className="nuda-glass-card__title">Frosted</p>
        <p className="nuda-glass-card__sub">backdrop-filter glass</p>
      </div>
    ),
    cssInline: `
      .nuda-glass-card{position:relative;width:200px;padding:20px;border-radius:16px;overflow:hidden;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(12px) saturate(140%);-webkit-backdrop-filter:blur(12px) saturate(140%);box-shadow:0 8px 32px rgba(0,0,0,.35)}
      .nuda-glass-card__sheen{position:absolute;inset:0;background:linear-gradient(115deg,transparent 30%,rgba(228,255,84,.18) 50%,transparent 70%);transform:translateX(-100%);animation:nuda-glass-card-sheen 4s ease-in-out infinite}
      .nuda-glass-card__title{margin:0;color:#fafafa;font:700 1.1rem ui-sans-serif,system-ui;letter-spacing:-.02em}
      .nuda-glass-card__sub{margin:.25rem 0 0;color:rgba(250,250,250,.6);font:500 .75rem ui-sans-serif,system-ui}
      @keyframes nuda-glass-card-sheen{0%,100%{transform:translateX(-100%)}50%{transform:translateX(100%)}}
      @media (prefers-reduced-motion:reduce){.nuda-glass-card__sheen{animation:none;opacity:.4}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glass-card">
  <div class="nuda-glass-card__sheen" aria-hidden="true"></div>
  <p class="nuda-glass-card__title">Frosted</p>
  <p class="nuda-glass-card__sub">backdrop-filter glass</p>
</div>`,
      },
      // CSS tab self-heals from cssInline via reconcile.ts — optional to hand-write.
    ],
  },
  // … more components
];
```

Why this passes the audit: every `nuda-glass-card*` class used in HTML is defined in `cssInline`; the `nuda-glass-card-sheen` animation has a matching `@keyframes`; reduced-motion is handled; lime accent present; GPU-only (`transform`); unique prefix.

---

## Task 0: Pre-flight — confirm green baseline

**Files:** none (verification only)

- [ ] **Step 1: Install dependencies (node_modules is absent)**

Run: `npm install`
Expected: completes; `node_modules/` populated. Required before any `audit`/`test`/`build`.

- [ ] **Step 1b: Verify the lucide icon names this plan uses actually exist in the installed version**

Run: `node -e "const i=require('lucide-react'); ['Layers','Blend','Grip','ArrowDownUp','Replace','Pointer','ZapOff','Lightbulb','Shapes','PartyPopper','WandSparkles','CloudRain'].forEach(n=>console.log(n, n in i))"`
Expected: all `true`. If any is `false` (lucide renames icons between versions — e.g. `Wand2`→`WandSparkles`), pick the nearest existing export and use it in the corresponding category row.

- [ ] **Step 2: Record current totals and green tests**

Run: `npm run audit`
Expected: PASS, 0 integrity issues.

- [ ] **Step 2: Note the starting count**

Add a temporary check — run:
`node -e "import('./src/components/showcase/registry/categories.ts')" ` is not available (TS); instead trust the test. Confirm baseline by running `npm run test` and seeing it green. Starting count is 802.

Expected: all tests PASS. Do not proceed until green.

---

## Tasks 1–12: New categories (one task = one file = one commit)

Each task below has the same shape. **For each:** create the file with the listed components (each following the ANCHOR + Global Quality Bar), wire it into `categories.ts`, run the audit, commit.

**Shared wiring procedure (do this as the last steps of every Task 1–12):**

- [ ] Add the import to `categories.ts` alphabetically near related imports:
  ```ts
  import { <camelId> } from "./<file>";
  ```
- [ ] Add a row to the `rawCategories` array (pick the listed lucide icon; import it in the icon block at top if not already imported):
  ```ts
  { id: "<cat-id>", label: "<Label>", icon: <Icon>, components: <camelId> },
  ```
  Place new rows in a sensible cluster (e.g. visual-effect categories near `particles`/`image-effects`).
- [ ] Run: `npm run audit` → Expected: PASS, 0 issues.
- [ ] Commit:
  ```bash
  git add src/components/showcase/registry/<file> src/components/showcase/registry/categories.ts
  git commit -m "feat(registry): add <Label> category (N animations)"
  ```

### Task 1: Glassmorphism (`glassmorphism.tsx`, icon `Layers`, ~12)
Components (id — name — concept):
- `glass-card` — Glass Card — frosted card w/ animated sheen (ANCHOR)
- `glass-nav` — Glass Navbar — blurred sticky nav, lime active pill
- `glass-toggle` — Glass Toggle — frosted switch, glow thumb
- `glass-modal` — Glass Modal — backdrop-blur dialog, scale-in
- `glass-pricing` — Glass Pricing Card — tier card w/ shine on hover
- `glass-notification` — Glass Toast — frosted toast slide-in
- `glass-tabs` — Glass Tabs — pill tabs w/ sliding glass indicator
- `glass-search` — Glass Search Bar — frosted input, focus glow
- `glass-badge` — Glass Badge — translucent status chip, pulse dot
- `glass-blur-reveal` — Blur Reveal — content sharpens from blur on hover
- `glass-dock` — Glass Dock — frosted bottom dock, hover magnify
- `glass-stat` — Glass Stat Tile — KPI tile w/ frosted backdrop

### Task 2: Animated Gradients (`gradient-animations.tsx`, icon `Blend`, ~12)
- `gradient-aurora` — Aurora — drifting aurora background bands
- `gradient-mesh` — Mesh Gradient — multi-blob mesh (blurred radial blobs)
- `gradient-conic` — Conic Spin — rotating conic gradient ring
- `gradient-border-flow` — Flowing Border — animated gradient border
- `gradient-text-shimmer` — Text Shimmer — gradient sweep over heading
- `gradient-blob` — Gradient Blob — morphing gradient blob (border-radius)
- `gradient-hue` — Hue Cycle — hue-rotate full-spectrum panel
- `gradient-button` — Gradient Button — animated gradient fill + hover shift
- `gradient-duotone` — Duotone Shift — image-style duotone color shift
- `gradient-progress` — Gradient Progress — bar w/ animated gradient fill
- `gradient-noise-mesh` — Mesh + Grain — mesh gradient w/ subtle grain overlay
- `gradient-spotlight` — Spotlight Gradient — cursor-follow radial (vanilla JS)

### Task 3: Noise & Grain (`noise-grain.tsx`, icon `Grip`, ~8)
- `grain-overlay` — Film Grain — animated SVG-noise overlay (steps())
- `grain-card` — Grainy Card — card w/ static noise texture
- `grain-tv-static` — TV Static — flickering static panel (subtle, a11y-safe)
- `grain-scanlines` — Scanlines — slow-drifting scanline overlay
- `grain-dither` — Dither Fade — dithered gradient transition
- `grain-paper` — Paper Texture — animated paper-fiber noise
- `grain-reveal` — Grain Reveal — content emerges through dissolving grain
- `grain-vignette` — Grain Vignette — grain + breathing vignette

### Task 4: Scroll-Driven (`scroll-driven.tsx`, icon `MousePointSquare`→use `ArrowDownUp`, ~10)
Native CSS `animation-timeline: scroll()/view()`. Each preview shows a small scrollable container demonstrating the effect.
- `scroll-progress-bar` — Reading Progress — `scroll()` top progress bar
- `scroll-reveal` — Reveal on View — `view()` fade+rise as it enters
- `scroll-parallax` — Parallax Layer — `scroll()` translate at different rates
- `scroll-sticky-stack` — Sticky Stack — stacking cards on scroll
- `scroll-image-reveal` — Image Wipe Reveal — clip-path wipe on `view()`
- `scroll-counter` — Scroll Counter — number tween linked to scroll
- `scroll-color-shift` — Scroll Color Shift — bg hue changes with scroll
- `scroll-rotate` — Scroll Rotate — element rotates with scroll progress
- `scroll-scale-in` — Scale In on View — `view()` scale entrance
- `scroll-horizontal-snap` — Horizontal Snap — scroll-snap gallery row

### Task 5: View Transitions (`view-transitions.tsx`, icon `Replace`, ~8)
CSS `@view-transition` / `::view-transition-*` + `view-transition-name`. Vanilla JS to trigger `document.startViewTransition` where needed.
- `vt-crossfade` — Cross Fade — default cross-fade between two states
- `vt-shared-element` — Shared Element — element morphs between states
- `vt-slide-page` — Slide Page — directional page slide transition
- `vt-expand-card` — Expand Card — card expands into detail panel
- `vt-tab-morph` — Tab Morph — active tab content morph
- `vt-list-reorder` — List Reorder — items animate to new positions
- `vt-theme-swipe` — Theme Swipe — circular reveal theme switch
- `vt-image-grid` — Grid → Detail — gallery thumb expands to hero

### Task 6: CSS-Only Interactions (`css-only-interactions.tsx`, icon `MousePointerClick`→use `Pointer`, ~10)
Zero JS — `:checked`, `:target`, `focus-within`, `:has()`, scroll-snap.
- `css-accordion` — Pure CSS Accordion — `<details>`/checkbox accordion
- `css-tabs` — Pure CSS Tabs — radio-driven tabs
- `css-modal` — Pure CSS Modal — `:target` dialog
- `css-dropdown` — Pure CSS Dropdown — `focus-within` menu
- `css-tooltip` — Pure CSS Tooltip — hover/focus tooltip
- `css-carousel` — Pure CSS Carousel — scroll-snap slides
- `css-rating` — Pure CSS Star Rating — radio stars w/ hover fill
- `css-stepper` — Pure CSS Stepper — radio step indicator
- `css-toggle-card` — Expandable Card — checkbox expand w/ `:has()`
- `css-filter-chips` — Filter Chips — checkbox chip filtering demo

### Task 7: Glitch & Distortion (`glitch-distortion.tsx`, icon `Zap`→use `ZapOff`, ~10)
**Seizure-safe:** flicker ≤ 3/s, killed under reduced-motion.
- `glitch-rgb-text` — RGB Split Text — chromatic-aberration text glitch
- `glitch-hover` — Glitch on Hover — clip-path slice glitch on hover
- `glitch-datamosh` — Datamosh — blocky displacement sweep
- `glitch-scanline` — Scanline Glitch — rolling scanline distortion
- `glitch-distort-hover` — Distort Hover — skew/blur distortion on hover
- `glitch-jitter` — Jitter — micro-jitter text (subtle)
- `glitch-vhs` — VHS — VHS tracking-error overlay
- `glitch-pixel-sort` — Pixel Sort — vertical streak displacement
- `glitch-text-corrupt` — Corrupt Text — char-swap corruption (vanilla JS)
- `glitch-button` — Glitch Button — CTA w/ glitch hover state

### Task 8: Neon & Glow (`neon-glow.tsx`, icon `Lightbulb`, ~10)
- `neon-sign` — Neon Sign — flickering neon text (a11y-safe flicker)
- `neon-button` — Neon Button — pulsing glow CTA
- `neon-border` — Neon Border — animated glowing outline
- `neon-text` — Glow Text — soft breathing text glow
- `neon-loader` — Neon Loader — glowing ring spinner
- `neon-card` — Glow Card — hover-lit card edge
- `neon-toggle` — Neon Toggle — switch w/ glow track
- `neon-tube` — Tube Light — animated neon tube fill
- `neon-pulse-dot` — Pulse Beacon — glowing status beacon
- `neon-grid` — Neon Grid — retro glowing grid floor

### Task 9: Morphing Shapes (`morphing-shapes.tsx`, icon `Shapes`, ~10)
- `morph-blob` — Blob Morph — border-radius blob morph
- `morph-clip` — Clip-Path Morph — polygon→circle clip morph
- `morph-svg-path` — SVG Path Morph — `<animate>` path morph
- `morph-liquid-button` — Liquid Button — gooey hover (SVG filter)
- `morph-loader` — Shape Shifter — loader cycling shapes
- `morph-menu-icon` — Morph Menu Icon — hamburger→X (CSS)
- `morph-blob-bg` — Blob Background — slow morphing backdrop blob
- `morph-card-expand` — Card Morph — square→rounded expand
- `morph-wave` — Wave Morph — animated SVG wave divider
- `morph-toggle-shape` — Shape Toggle — circle↔square toggle

### Task 10: Confetti & Celebration (`confetti-celebration.tsx`, icon `PartyPopper`, ~10)
CSS-driven particles (no canvas). Use multiple `box-shadow`/pseudo particles + transforms.
- `confetti-burst` — Confetti Burst — radial confetti pop (vanilla JS trigger)
- `confetti-checkmark` — Success Check — checkmark draw + burst
- `confetti-fireworks` — Fireworks — staggered firework bursts
- `confetti-sparkle-trail` — Sparkle Trail — sparkles trailing an element
- `confetti-party-popper` — Party Popper — corner popper streamers
- `confetti-emoji-rain` — Emoji Rain — falling emoji celebration
- `confetti-coin-shower` — Coin Shower — falling coins (reward)
- `confetti-ribbon` — Ribbon Drop — falling ribbon strips
- `confetti-badge-unlock` — Badge Unlock — badge pop + shine
- `confetti-clap` — Applause Burst — clap reaction burst

### Task 11: Animated Icons (`animated-icons.tsx`, icon `Sparkle`→use `Wand2`, ~10)
CSS/SVG icon state morphs. Interactive previews toggle state.
- `icon-hamburger-x` — Menu → Close — bars morph to X
- `icon-play-pause` — Play → Pause — triangle↔bars morph
- `icon-plus-close` — Plus → Close — rotate-morph
- `icon-search-back` — Search → Back — magnifier morph to arrow
- `icon-heart-fill` — Heart Fill — outline→filled w/ pop
- `icon-bell-ring` — Bell Ring — shake + clapper
- `icon-copy-check` — Copy → Check — clipboard to checkmark
- `icon-sun-moon` — Sun → Moon — theme morph
- `icon-arrow-morph` — Arrow Morph — direction transitions
- `icon-download-done` — Download → Done — arrow to check

### Task 12: Weather & Ambient (`weather-ambient.tsx`, icon `CloudRain`, ~8)
- `weather-rain` — Rain — falling rain streaks
- `weather-snow` — Snow — drifting snowflakes
- `weather-sun-rays` — Sun Rays — rotating god-rays
- `weather-clouds` — Drifting Clouds — parallax cloud layers
- `weather-lightning` — Lightning — occasional flash (a11y-safe, slow)
- `weather-fog` — Fog — rolling fog layers
- `weather-stars` — Starfield — twinkling stars
- `weather-aurora-sky` — Aurora Sky — ambient aurora curtain

---

## Tasks 13–17: Deepen existing categories (~90 components)

Append to existing files (or their `-extra` variant). Same Global Quality Bar. Group into 5 commits by theme. For each: append components, run audit, commit `feat(registry): deepen <categories> (+N animations)`.

### Task 13: Loaders cluster (+30)
- `loaders.tsx` +8: orbit-dots, bouncing-ball, morphing-square, ripple-rings, gradient-spinner-bar, dna-helix, pendulum, comet-trail
- `spinners.tsx` +8: dual-ring-glow, segment-spinner, gradient-conic-spin, dots-circle, square-flip, arc-pulse, pinwheel, gooey-spinner
- `progress.tsx` +7: striped-flow, segmented-steps, indeterminate-sweep, circular-percent, gradient-shimmer-bar, liquid-fill, dotted-progress
- `placeholders.tsx`/`skeleton-variants.tsx` +7: shimmer-card, avatar-line-skeleton, table-skeleton, chart-skeleton, image-skeleton, wave-skeleton, pulse-grid

### Task 14: Buttons & micro-interactions (+24)
- `buttons.tsx` +8: magnetic-pull (vanilla JS), liquid-fill-hover, border-draw, icon-slide, gradient-sweep, press-3d, shine-sweep, ripple-ink
- `micro-interactions.tsx` +8: spotlight-card, tilt-card (vanilla JS), click-spark, checkbox-pop, switch-bounce, copy-feedback, save-heartbeat, thumbs-react
- `toggles-inputs.tsx` +8: ios-switch-glow, segmented-toggle, floating-label, focus-underline, checkbox-draw, radio-pop, otp-inputs, password-meter

### Task 15: Text & cards (+20)
- `text-effects.tsx` +8: scramble-decode (vanilla JS), gradient-wave, typewriter-caret, char-stagger-rise, glitch-hover-text, neon-flicker-text, blur-in, underline-grow
- `cards-hover.tsx` +8: spotlight-follow (vanilla JS), tilt-3d, border-gradient-rotate, lift-shadow, image-zoom-mask, flip-card, reveal-content, shine-sweep
- `badges-tags.tsx` +4: pulse-live, gradient-shine, count-pop, status-breathing

### Task 16: Backgrounds & borders & dividers (+16)
- `backgrounds.tsx` +6: animated-grid, floating-orbs, dot-drift, gradient-wave-bg, noise-field, beam-sweep
- `borders-outlines.tsx`/`borders-outlines-extra.tsx` +6: rotating-gradient, dashed-march, glow-trace, corner-draw, double-pulse, neon-frame
- `dividers.tsx` +4: animated-dash, gradient-flow-line, wave-divider, sparkle-line

### Task 17: Heroes & tooltips (+12)
- `hero-sections.tsx` +6: aurora-hero, grain-gradient-hero, spotlight-hero, marquee-hero, split-reveal-hero, glass-hero
- `tooltips.tsx` +6: glow-tooltip, slide-arrow-tip, follow-cursor-tip (vanilla JS), typewriter-tip, glass-tip, step-coachmark

---

## Task 18: Flip public count surfaces to "1,000+"

**Files:**
- Modify: `src/app/components/opengraph-image.tsx`
- Modify: `src/components/landing/roadmap.tsx`
- Modify: `README.md`
- Modify: `src/app/changelog/page.tsx`

- [ ] **Step 1: Find every hardcoded count**

Run: `grep -rn "800+\|800 \|802\|750" src README.md` and review each hit. Skip CSS sizes (`800px`, path coords) — only flip human-facing animation counts.

- [ ] **Step 2: Update opengraph image**

In `src/app/components/opengraph-image.tsx`, change `<span>800+ animations.</span>` → `<span>1,000+ animations.</span>`.

- [ ] **Step 3: Update roadmap**

In `src/components/landing/roadmap.tsx`, update milestone `count` values and mark the 1,000 milestone reached (match the existing milestone object shape; adjust the relevant `count` string and any "done/current/upcoming" status field used by the component).

- [ ] **Step 4: Update README + changelog**

Bump any animation-count mention in `README.md` to "1,000+". Add a changelog entry in `src/app/changelog/page.tsx` following the existing entry shape: date `2026-06-16`, headline "Crossed 1,000 animations", note the 12 new categories.

- [ ] **Step 5: Verify nothing stale remains**

Run: `grep -rn "800+\|802 animations" src README.md` → Expected: no human-facing matches.

- [ ] **Step 6: Commit**
```bash
git add -A
git commit -m "feat(landing): flip count surfaces to 1,000+ animations"
```

---

## Task 19: Final verification

**Files:** none (verification only)

- [ ] **Step 1: Full audit + tests**

Run: `npm run test`
Expected: ALL PASS (includes `registry-integrity` and `registry-audit`). Zero integrity issues.

- [ ] **Step 2: Confirm count ≥ 1,000**

Inspect the integrity test output or add a one-off assertion temporarily in a scratch test: `expect(totalCount).toBeGreaterThanOrEqual(1000)`. Confirm, then remove the scratch test.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: build succeeds (`prebuild` runs vitest first — must be green). New categories render; `/api/registry.json`, `/api/catalog-full.json`, `/llms.txt` include the new components.

- [ ] **Step 4: Spot-check AI fetch path**

Run: `npm run dev` and `curl` (or browser) `http://localhost:3000/api/registry.json` → confirm `totals.components ≥ 1000` and a new id (e.g. `glass-card`) is enumerated with a per-component fetch URL; fetch that URL and confirm the code is present. Confirm `/api/catalog-full.json` embeds the new components' code.

- [ ] **Step 5: Final commit (if any verification fixups were needed)**
```bash
git add -A
git commit -m "chore: verify 1k catalog — audit, build, AI endpoints green"
```

---

## Execution notes

- **Parallelism:** Tasks 1–12 are independent (new files) — ideal to dispatch one subagent per category. The only shared file is `categories.ts`; serialize the wiring edits (or let one integrator apply all 12 rows after the files land) to avoid edit conflicts. Tasks 13–17 touch existing files — serialize per-file.
- **Order:** Task 0 → Tasks 1–12 → Tasks 13–17 → Task 18 → Task 19.
- **Commit cadence:** one commit per task (per file for deepening). Keep the tree green after each.

---

## Self-Review

**Spec coverage:**
- 12 new categories → Tasks 1–12 ✓
- Deepen 14 existing high-value categories → Tasks 13–17 cover buttons, loaders, text-effects, hero-sections, cards-hover, backgrounds, micro-interactions, toggles-inputs, spinners, badges-tags, progress, borders-outlines, tooltips, dividers ✓ (skeletons/placeholders added as bonus within loaders cluster)
- ~205 floor, stretch to ~1,050+ → 12 categories (~118) + deepening (~102) = ~220 new → ~1,022 floor, headroom to add more per category where impact holds ✓
- Quality bar (brand, self-contained, a11y/reduced-motion, no-flash, GPU-only, audit) → Global Quality Bar + ANCHOR ✓
- Landing + AI fetch → Task 18 (hardcoded) + Task 19 step 4 (verify auto-derived endpoints) ✓

**Placeholder scan:** No "TBD"/"implement later". Component manifests give concrete ids+names+concepts (generative content authored to the ANCHOR contract, which is the correct altitude for a 200-item catalog). Wiring/edit steps show exact code/commands.

**Type consistency:** Export names match `categories.ts` import convention (camelCase of file). `NudaComponent` shape matches `types.ts`. Category `id`/`label`/`icon` match `CategoryConfig`. Icons referenced (`Layers`, `Blend`, `Grip`, `ArrowDownUp`, `Replace`, `Pointer`, `ZapOff`, `Lightbulb`, `Shapes`, `PartyPopper`, `Wand2`, `CloudRain`) are lucide-react exports to import in the icon block.

**Math check:** New categories 12+12+8+10+8+10+10+10+10+10+10+8 = 118. Deepening 30+24+20+16+12 = 102. Total +220 → 802 + 220 = 1,022 (floor). Stretch room documented.
