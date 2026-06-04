# NudaUI — AI Consumption, GEO/SEO, Consolidation & 750 Components

**Date:** 2026-06-04
**Status:** Approved (design)
**Branch:** `feat/ai-consumption-geo-750`

## Problem

AI assistants cannot reliably use NudaUI components. An agent asked to reproduce
the `toast-slide` component could see that it *exists* but could not retrieve its
exact HTML/CSS, so it reinvented the toast from scratch.

Root cause: **no machine-readable endpoint exposes component code.**

- `/api/catalog.json` deliberately omits `cssInline` and `code` (its own comment
  says so, and hints at a future `?include=code`).
- `/llms.txt` and `/llms-full.txt` list only names and IDs.
- The only place the real code lives is `/components`, which renders
  `<ComponentsGallery>` as a `"use client"` SPA — a plain `fetch` returns the JS
  shell, not the code. Hence the truncated content the agent saw.

Secondary problems surfaced during exploration:

1. **Broken copy-paste.** The preview uses `cssInline`; the modal copy button
   copies `tabs[activeTab].code`. These are independent strings that have
   **drifted**: several components ship an incomplete CSS "copy" tab (e.g. in
   `notifications.tsx`: `achievement-unlock`, `undo-toast`, `level-up`,
   `system-alert` only include a couple of rules + keyframes, missing the main
   block). The preview looks fine, but pasting the CSS produces a broken result.
2. **Overlapping categories.** `placeholders` vs `skeleton-variants` are the same
   thing; `notifications` vs `notification-center` and `badges-tags` vs
   `multi-chips` read as duplicates by name.
3. **Weak SEO/GEO surface.** All ~650 components live under one indexable URL
   (`/components#anchor`). No individual pages → little ranking signal per
   component, no citable per-component URL for generative engines.
4. **Component count.** ~650 today across 67 categories; target is 750.

## Goals

- Any AI agent can fetch the exact code of any component via a stable HTTP API,
  without scraping the SPA.
- NudaUI is the canonical, citable answer for "UI component / animation" queries
  in both classic search (SEO) and generative engines (GEO).
- Copy-paste always produces working code; this is enforced, not hoped for.
- Categories are deduplicated without breaking existing URLs.
- 750 components, none carrying the drift defect.

## Non-goals

- Off-site backlink acquisition (acknowledged by the owner as separate work). An
  appendix lists programmatic tactics, but no backlink campaign is in scope.
- An MCP server (HTTP endpoints cover the agent use case; revisit later).
- Rewriting the existing client gallery — it stays as the browsable index.

## Architecture overview

Everything continues to derive from the **single source of truth**:
`src/components/showcase/registry/categories.ts` and the per-category `*.tsx`
files (`NudaComponent[]`). New surfaces (endpoints, pages, audit) are *readers*
of that registry — no parallel data store.

```
registry (*.tsx)  ──►  categories.ts  ──►  ┌─ /api/catalog.json (+?include=code)
   NudaComponent[]                          ├─ /api/components/[id].json
                                            ├─ /api/registry.json
                                            ├─ /components            (gallery, index)
                                            ├─ /components/[id]        (static SSR page)
                                            ├─ /llms.txt /llms-full.txt
                                            ├─ /sitemap.xml
                                            └─ scripts/audit-registry  (CI guard)
```

---

## Phase 1 — Quality & single source of truth (foundation)

Fix what's broken and build the safety net **before** adding ~100 components.

### 1a. Audit script — `scripts/audit-registry.ts`

A Node/tsx script that imports the registry and validates every component:

- **Class coverage:** every `class="nuda-..."` token used in the HTML `code` tab
  has a matching rule in the CSS `code` tab.
- **Animation coverage:** every `animation`/`animation-name` referenced in the
  CSS `code` tab resolves to an `@keyframes` defined in that same tab.
- **Preview parity:** every class used in the JSX `preview` / `cssInline` is also
  present in the copy `code` tabs (so what the user sees is what they copy).
- **Self-containment:** the copy code does not reference undefined custom
  properties without a fallback or a `:root`/local definition.
- **Schema sanity:** unique `id`s, non-empty `code`, `category` matches the
  registry label, languages ∈ {html, css, javascript}.

Output: a human-readable report + non-zero exit on failure. Wire as
`npm run audit` and run it in CI / pre-build. This is the durable guard against
re-introducing drift.

### 1b. Visual review (Playwright)

Drive the live gallery: screenshot each preview, open each component's modal,
assert the copy button yields code whose classes match the rendered preview.
Catches components that pass static validation but render wrong (z-index,
overflow, color-on-color, animation that visually does nothing).

### 1c. Fix detected offenders

For every component the audit/visual pass flags, complete the copy `code` tabs so
they are self-contained and consistent with the preview.

### 1d. Durable de-drift (where feasible)

Add a helper that derives `cssInline` by minifying the canonical copy CSS, so the
preview and the copyable code share one source and **cannot diverge again**.
Where a component intentionally differs (e.g. shorthand class names in the
preview), document why; otherwise unify. Prefer unification.

**Done when:** `npm run audit` is green for all components and the visual pass
shows no broken previews/modals.

---

## Phase 2 — AI code access (endpoints with code)

- `GET /api/components/[id].json` → one component, full payload:
  `{ id, name, category, code[], cssInline, hasJS, frameworks, page, anchor,
  license, attribution }`. `force-static` + `generateStaticParams`, CORS `*`,
  CDN cache. 404 JSON for unknown ids.
- `GET /api/catalog.json?include=code` → existing catalog, now with `code` +
  `cssInline` embedded per component. Without the flag, byte-for-byte the current
  contract (`schemaVersion` stays `"1.0"` for the default; bump to `"1.1"` only
  when `include=code` is present, documented in the payload).
- `GET /api/registry.json` → shadcn-style flat index: every id with its
  `/api/components/[id].json` URL and its page URL. Cheap fan-out entry point.
- **`llms.txt` / `llms-full.txt`:** add an explicit "How to get a component's
  code" block with a concrete `GET /api/components/{id}.json` example and the
  response shape. Point agents at `registry.json` for enumeration.

**Done when:** `curl /api/components/toast-slide.json` returns complete,
paste-ready HTML+CSS; `?include=code` works; llms docs reference them.

---

## Phase 3 — Per-component static pages (primary SEO/GEO lever)

- `/components/[id]` via `generateStaticParams` for all components. Server-rendered:
  preview (the registry `preview` JSX is server-safe) + code in plain HTML + a
  copy control + a "Related components" block (same-category interlinking).
- Per page: unique `<title>`/meta, canonical, **JSON-LD `SoftwareSourceCode`**
  (with `programmingLanguage`, `license`, `isPartOf` the collection, `author` =
  site.creator), breadcrumb schema, and a dynamic per-component OG image.
- `generateMetadata` derives everything from the registry + `category-meta`.
- **Sitemap:** add all ~750 component URLs (currently only top-level routes).
- The existing `/components` gallery remains the index and links each card to its
  page; deep-link anchors (`#id`) keep working.

**Done when:** every component has a statically-rendered, indexable page whose raw
HTML contains the full code, valid JSON-LD, and is present in the sitemap.

---

## Phase 4 — Category consolidation (conservative)

- **Merge** `placeholders` → `skeleton-variants`, relabel the result **"Skeletons"**.
- **Relabel for disambiguation:** `notifications` → **"Toasts & Alerts"**;
  keep `notification-center` as **"Notification Center"**; tighten the
  `badges-tags` vs `multi-chips` descriptions so scope is unambiguous.
- **No URL breakage:** add 301 redirects / anchor aliases from old category ids
  (`#section-placeholders`) to the new ones, and from any removed page URLs.
  Update `category-meta`, sitemap, JSON-LD accordingly.

**Done when:** no two categories describe the same thing; old links still resolve.

---

## Phase 5 — Grow to 750

- **Level up sparse categories** (countdowns=4, scroll-effects=4, accordions=5,
  modals=5, navigation=5, borders=5, …) toward ~10–12 each.
- **Add 3–5 high-demand categories**, filled to ~10–12: candidates →
  **Tables / Data Grids, Dropdowns & Menus, Breadcrumbs, Cookie & Consent
  Banners, Pagination**.
- Every new component is born **passing the Phase 1 audit** (preview/copy parity,
  self-contained CSS, reduced-motion respected, `nuda-*` prefix). New categories
  get `category-meta` descriptions and flow automatically into all surfaces via
  `categories.ts`.

**Done when:** `totalCount === 750` (or just above), audit green, all surfaces
(gallery, endpoints, pages, sitemap, llms) reflect the new set automatically.

---

## Cross-cutting: GEO/SEO

- Citable per-component URLs + JSON-LD `SoftwareSourceCode` (Phase 3).
- Machine-readable code endpoints so generative engines ground on exact code
  rather than hallucinate (Phase 2).
- `llms.txt`/`llms-full.txt` explicit programmatic instructions (Phase 2).
- Internal linking (related components, category pages) to spread ranking signal.
- Keep `ai.txt` permission grid (already allows training/grounding/rag).
- **Appendix (non-code, owner-driven):** submit to `llms.txt` directories and
  `awesome-*` lists, dev.to/blog posts per category, GitHub topics, ProductHunt —
  documented as a checklist, not implemented here.

## Risks & mitigations

- **URL/SEO regression from merges** → 301s + anchor aliases; verify in sitemap.
- **Build size / time from ~750 static pages** → all static, generated at build;
  acceptable for a static export. Monitor build duration.
- **`include=code` payload size** → gated behind the query flag; default catalog
  unchanged; CDN-cached.
- **New components reintroducing drift** → impossible to merge if `npm run audit`
  is a required check.
- **Preview JSX not server-safe** → previews are presentational markup; if any
  uses client-only APIs, render a static snapshot for the page.

## Sequencing

Strictly 1 → 5. Phase 1 is mandatory first: it fixes the reported breakage and
creates the guard that keeps Phases 2–5 honest.
