# Task 3 Report — `get_component` MCP tool

## Changes

- `src/lib/mcp/tools.ts` — appended `ComponentSuggestion`, `GetComponentResult`, the `similarity()` scorer, and `getComponent(rawId)`. Imports `allComponents`, `componentPayload`, `findComponent`, and the `ComponentPayload` type from `@/lib/component-payload` (not redeclared).
- `src/lib/mcp/tools.test.ts` — appended a `describe("getComponent", ...)` block with 3 `it` blocks (real id, `.json`-suffixed id, near-match suggestions on an unknown id). Also imports `getComponent` and `allComponents`.
- `src/app/mcp/route.ts` — added the `import { site } from "@/lib/site"` that Task 2 had deliberately omitted, imported `getComponent` alongside `listCategories`, and registered a second tool, `get_component`, inside the same `createMcpHandler` callback as `list_categories`. Unknown ids return `isError: true` with a text message naming near-match ids (when any) and a link to browse `/components`; known ids return the full `ComponentPayload` as pretty-printed JSON.

Diff for all three files matches the brief's Step 1/3/5 code verbatim.

## Test output — before (Step 2, confirming failure)

```
 ❯ src/lib/mcp/tools.test.ts (5 tests | 3 failed) 22ms
     × returns paste-ready code for a real id
     × tolerates a trailing .json the way the REST endpoint does
     × suggests near matches instead of failing bare
TypeError: getComponent is not a function
 Test Files  1 failed (1)
      Tests  3 failed | 2 passed (5)
```

## Test output — after (Step 4, scoped) and full suite (Step 6)

Scoped run:
```
 Test Files  1 passed (1)
      Tests  5 passed (5)
```

Full suite (`npx vitest run`):
```
 Test Files  14 passed (14)
      Tests  203 passed (203)
```

## tsc result

`npx tsc --noEmit` — clean, no output, exit 0.

## HTTP verification

Dev server started as a background process (`npm run dev`, Next.js 16.2.6 / Turbopack, ready in 858ms on `http://localhost:3000`), verified reachable with `curl -sS -o /dev/null -w "%{http_code}" http://localhost:3000` → `200`, then killed by PID after the checks (confirmed down: connection timed out on a follow-up curl).

### Brief's literal Step 6 curl (`id: "nope-not-real"`) — VERBATIM

```
event: message
data: {"result":{"content":[{"type":"text","text":"No NudaUI component with id \"nope-not-real\". Browse https://nudaui.dev/components to enumerate ids."}],"isError":true},"jsonrpc":"2.0","id":3}
```

This id shares no hyphen-tokens and no substring overlap with any real component id, so `suggestions` is empty and the message falls back to the browse link. `isError: true`, no stack trace — matches the brief's acceptance ("an error result … not a stack trace").

### Near-match case (`id: "toast-slide-xyz-nope"`, same id the unit test uses) — VERBATIM, showing suggestions

```
event: message
data: {"result":{"content":[{"type":"text","text":"No NudaUI component with id \"toast-slide-xyz-nope\". Did you mean: toast-slide, gradient-slide, fill-slide, underline-slide, arrow-slide? Browse https://nudaui.dev/components to enumerate ids."}],"isError":true},"jsonrpc":"2.0","id":4}
```

### Known-id sanity check (`id: "toast-slide"`) — first 800 chars, confirming payload shape

```
event: message
data: {"result":{"content":[{"type":"text","text":"{\n  \"id\": \"toast-slide\",\n  \"name\": \"Toast Slide\",\n  \"category\": \"Toasts & Alerts\",\n  \"categoryId\": \"notifications\",\n  \"languages\": [\n    \"html\",\n    \"css\"\n  ],\n  \"hasJS\": false,\n  \"code\": [\n    {\n      \"label\": \"HTML\",\n      \"language\": \"html\",\n      \"code\": \"<div class=\\\"nuda-toast\\\" role=\\\"alert\\\" aria-live=\\\"polite\\\">\\n  <div class=\\\"nuda-toast__icon\\\">&#10003;</div>\\n  <div class=\\\"nuda-toast__content\\\">\\n    <p class=\\\"nuda-toast__title\\\">Saved successfully</p>\\n    <p class=\\\"nuda-toast__desc\\\">Your changes have been saved.</p>\\n  </div>\\n  <button class=\\\"nuda-toast__close\\\" aria-label=\\\"Dismiss\\\">&times;</button>\\n</div>\"\n
```

## Commit

`8324821` on branch `mcp`:

```
feat: add get_component MCP tool

Returns the same payload shape as /api/components/{id}.json so an agent
that has seen one understands the other. An unknown id answers with the
nearest ids rather than a bare failure.
```

3 files changed, 118 insertions(+), 2 deletions(-). No `Co-Authored-By` or "Generated with" trailer added.

## Notes / concerns

- Registry access remained in-process throughout (no `fetch()` to nudaui.dev anywhere).
- No component total was hardcoded anywhere.
- Both the success payload (`page`/`anchor`) and the brief's own curl example carry `nudaui.dev` URLs back, satisfying the "every result carries page/anchor URLs" constraint for the found case; the not-found case links to `/components` for browsing rather than a specific component.
- The brief's literal Step 6 example id (`nope-not-real`) does not itself exercise the suggestion path — it only exercises the empty-suggestions fallback. I additionally verified the suggestion path with the same near-miss id the unit test uses, to have direct evidence of that behavior over HTTP.

---

## Fix round 1 — unknown-id recovery pointed at an unscrapable page

**Problem (from review).** The not-found message built in `src/app/mcp/route.ts` told the agent to "Browse `{site.url}/components` to enumerate ids" — but `/components` is the client-rendered SPA gallery, which this repo's own `src/app/api/components/[id]/route.ts` comment says an agent cannot scrape. The one path whose job is recovering a stuck agent handed it a dead end. This was visible in the original report's own verbatim curl output for the no-suggestions case.

**Fix.** Moved the recovery pointer into `src/lib/mcp/tools.ts` rather than leaving it inline in the route, so it is unit-testable without simulating MCP transport:

- `GetComponentResult`'s `found: false` branch gained a `hint: string` field, built in `getComponent()` as `` `Enumerate valid ids at ${absoluteUrl("/api/registry.json")}, then retry with one of them.` `` — using `absoluteUrl()` from `@/lib/site`, not string concatenation onto `site.url`.
- This phrasing is deliberately identical to `componentNotFound()`'s hint in `src/lib/api-error.ts` (the REST 404 for the same failure), so both surfaces recover an agent the same way.
- `src/app/mcp/route.ts` now interpolates `${result.hint}` after the optional "Did you mean: …" suggestion list, covering both the with-suggestions and without-suggestions branches from one source of truth. The now-unused `import { site } from "@/lib/site"` was removed.
- Left the existing `"toast-slide-xyz-nope"` literal in `tools.test.ts` untouched, per instruction.

**Covering test.** Added one `it` to the existing `describe("getComponent", ...)` block in `src/lib/mcp/tools.test.ts`:

```ts
it("points recovery at the JSON registry, not the unscrapable gallery, even with no near matches", () => {
  const result = getComponent("nope-not-real");
  expect(result.found).toBe(false);
  if (result.found) throw new Error("unreachable");
  expect(result.suggestions).toHaveLength(0);
  expect(result.hint).toContain("/api/registry.json");
  expect(result.hint).not.toContain("/components");
});
```

**Command run and output** (`npx vitest run src/lib/mcp/tools.test.ts`):

```
 Test Files  1 passed (1)
      Tests  6 passed (6)
```

Full suite (`npx vitest run`):

```
 Test Files  14 passed (14)
      Tests  204 passed (204)
```

`npx tsc --noEmit` — clean, no output, exit 0.

**HTTP verification.** Dev server started as a background process again, confirmed reachable, checked, then killed by PID (confirmed down afterward).

No-suggestions case (`id: "nope-not-real"`) — VERBATIM, showing the new pointer:

```
event: message
data: {"result":{"content":[{"type":"text","text":"No NudaUI component with id \"nope-not-real\". Enumerate valid ids at https://nudaui.dev/api/registry.json, then retry with one of them."}],"isError":true},"jsonrpc":"2.0","id":6}
```

With-suggestions case (`id: "toast-slide-xyz-nope"`), confirming the same pointer is appended after the "Did you mean" list:

```
event: message
data: {"result":{"content":[{"type":"text","text":"No NudaUI component with id \"toast-slide-xyz-nope\". Did you mean: toast-slide, gradient-slide, fill-slide, underline-slide, arrow-slide? Enumerate valid ids at https://nudaui.dev/api/registry.json, then retry with one of them."}],"isError":true},"jsonrpc":"2.0","id":7}
```

**Commit.** `2b19438` on branch `mcp`:

```
fix: point get_component's unknown-id recovery at the JSON registry

The recovery hint sent an agent to /components, the client-rendered
gallery an agent cannot scrape. Point it at /api/registry.json instead,
with wording matching componentNotFound()'s REST 404 hint, so both
surfaces recover an agent the same way. Applies to both the with- and
without-suggestions branches.
```

3 files changed, 25 insertions(+), 4 deletions(-). No `Co-Authored-By` or "Generated with" trailer added.
