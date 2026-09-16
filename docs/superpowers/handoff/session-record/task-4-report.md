# Task 4 report: `search_components` MCP tool

## What changed

- `src/lib/mcp/tools.ts` — added `componentHasJS` to the existing import from
  `@/components/showcase/registry/categories` (no other imports duplicated;
  `absoluteUrl`, `allComponents`, `componentPayload`, `findComponent`,
  `ComponentPayload` were already present from Tasks 2/3 and were reused).
  Appended: `SearchHit` interface, `RAG_TIMEOUT_MS`, `ragBaseUrl()` (reads
  `process.env.NEXT_PUBLIC_RAG_API_URL` at call time, not at module load, so
  a test can flip it mid-run), `toHit()`, `localSearch()`, and
  `searchComponentsTool()` — exactly the code in task-4-brief.md Step 3.
- `src/lib/mcp/tools.test.ts` — added `localSearch` and `searchComponentsTool`
  to the existing import from `@/lib/mcp/tools` (new imports placed with the
  existing ones at the top, not mid-file, per instructions). Appended the
  brief's `localSearch` describe block verbatim, and the
  `searchComponentsTool` describe block **with one deviation from the
  brief, per the orchestrator's ruling**: the "filters to CSS-only
  components when hasJS is false" test now pins
  `process.env.NEXT_PUBLIC_RAG_API_URL = "http://127.0.0.1:9"` for its
  duration (restored in a `finally`), identical in shape to the
  degraded-path test above it. Rationale: the assertion is about the
  filter, which runs identically on the RAG and fallback code paths, not
  about ranking quality, so it should not depend on a live call to
  `rag.nudaui.dev`. The live RAG path is covered instead by the HTTP
  verification step below.
- `src/app/mcp/route.ts` — imported `searchComponentsTool` and registered
  the `search_components` tool inside the same `createMcpHandler` callback
  as `list_categories` and `get_component`, matching their shape.
  **One deviation from the brief's literal Step 5 code**: the brief hardcodes
  `"Search 1,503 copy-paste CSS and JS UI components..."` in the tool
  description. That violates the global constraint "Never hardcode a
  component total anywhere, including comments." Instead the description is
  built from `` `Search ${totalCount.toLocaleString("en-US")} copy-paste CSS
  and JS UI components...` `` using `totalCount` imported from
  `@/components/showcase/registry/categories` (the same source `tools.ts`'s
  `listCategories()` already uses for its total) — text and formatting are
  otherwise identical to the brief's string.

## Test output — before (Step 2, confirming the new tests fail first)

```
FAIL  src/lib/mcp/tools.test.ts > localSearch (fallback ranking) > returns nothing for a query that matches nothing
FAIL  src/lib/mcp/tools.test.ts > searchComponentsTool > degrades to local ranking when the RAG service is unreachable
TypeError: searchComponentsTool is not a function
FAIL  src/lib/mcp/tools.test.ts > searchComponentsTool > filters to CSS-only components when hasJS is false
TypeError: searchComponentsTool is not a function

 Test Files  1 failed (1)
      Tests  5 failed | 6 passed (11)
```

(`localSearch is not exported` failures manifested as `ReferenceError`-style
failures across the `localSearch` describe block plus the two
`searchComponentsTool is not a function` failures — 5 of 11 new/existing
tests failed as expected before implementation.)

## Test output — after (Step 4 / Step 6)

```
npx vitest run src/lib/mcp/tools.test.ts
 Test Files  1 passed (1)
      Tests  11 passed (11)
```

Note: 11 tests, not the brief's stated "10" — the pre-existing file already
had 6 tests (2 in `listCategories`, 4 in `getComponent`), and the brief adds
5 more (3 `localSearch` + 2 `searchComponentsTool`) = 11. This is a count
discrepancy in the brief's own arithmetic, not a deviation on my part.

Full suite:

```
npx vitest run
 Test Files  14 passed (14)
      Tests  209 passed (209)
```

## tsc result

```
npx tsc --noEmit
```
Clean — no output, exit 0. Run twice (once mid-task, once as the final
pre-commit check); both clean.

## Live HTTP verification

Dev server started as a background process (`npm run dev`), confirmed ready
via its log (`✓ Ready in 585ms`), then:

```
curl -sS -X POST http://localhost:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"search_components","arguments":{"query":"accessible date picker","limit":3}}}'
```

Verbatim response:

```
event: message
data: {"result":{"content":[{"type":"text","text":"{\n  \"query\": \"accessible date picker\",\n  \"degraded\": false,\n  \"count\": 3,\n  \"results\": [\n    {\n      \"id\": \"date-input-pop\",\n      \"name\": \"Date Input Popover\",\n      \"category\": \"Calendars & Date Pickers\",\n      \"categoryId\": \"calendars\",\n      \"languages\": [\n        \"html\",\n        \"javascript\",\n        \"css\"\n      ],\n      \"hasJS\": true,\n      \"page\": \"https://nudaui.dev/components/date-input-pop\",\n      \"anchor\": \"https://nudaui.dev/components#date-input-pop\"\n    },\n    {\n      \"id\": \"date-range\",\n      \"name\": \"Date Range Selector\",\n      \"category\": \"Calendars & Date Pickers\",\n      \"categoryId\": \"calendars\",\n      \"languages\": [\n        \"html\",\n        \"css\"\n      ],\n      \"hasJS\": false,\n      \"page\": \"https://nudaui.dev/components/date-range\",\n      \"anchor\": \"https://nudaui.dev/components#date-range\"\n    },\n    {\n      \"id\": \"time-wheel\",\n      \"name\": \"Time Picker Wheel\",\n      \"category\": \"Calendars & Date Pickers\",\n      \"categoryId\": \"calendars\",\n      \"languages\": [\n        \"html\",\n        \"css\"\n      ],\n      \"hasJS\": false,\n      \"page\": \"https://nudaui.dev/components/time-wheel\",\n      \"anchor\": \"https://nudaui.dev/components#time-wheel\"\n    }\n  ]\n}"}]},"jsonrpc":"2.0","id":4}
```

`degraded: false` confirms the live `rag.nudaui.dev` index answered
successfully. Ids returned: `date-input-pop`, `date-range`, `time-wheel` —
all in the "Calendars & Date Pickers" category, on point for the
"accessible date picker" query. Every result carries `page` and `anchor`
URLs rooted at `https://nudaui.dev`.

Dev server was then killed (its listener on port 3000 confirmed gone) so no
background process was left running.

## Commit

SHA: `bd0333ed7d82594721c54bf878bb77f55df4849e` on branch `mcp`.
Files: `src/app/mcp/route.ts`, `src/lib/mcp/tools.test.ts`,
`src/lib/mcp/tools.ts`. No `Co-Authored-By` or "Generated with" trailer.

## Deviations from the brief (both required by explicit instructions)

1. Pinned `NEXT_PUBLIC_RAG_API_URL` to `http://127.0.0.1:9` in the
   "filters to CSS-only" test — per the orchestrator's explicit ruling,
   to keep the suite offline and deterministic.
2. Replaced the brief's hardcoded `"1,503"` in the `search_components` tool
   description with `totalCount.toLocaleString("en-US")` — per the global
   constraint against hardcoding a component total anywhere, including
   comments. No other text in the description was changed.

---

# Fix round 1

Review returned CHANGES REQUESTED: one Critical, two Important, one Minor.
All four addressed below.

## Critical 1 — over-fetch collapses to no headroom at high `limit`; docstring overstated it

**Probe of the real service ceiling**, run against the live `rag.nudaui.dev`
(not a local mock):

```
curl -sS -i "https://rag.nudaui.dev/search?q=button&k=20"   -> HTTP/1.1 200, 20 results
curl -sS -i "https://rag.nudaui.dev/search?q=button&k=21"   -> HTTP/1.1 422 Unprocessable Entity
curl -sS -i "https://rag.nudaui.dev/search?q=button&k=40"   -> HTTP/1.1 422 Unprocessable Entity
```

Verbatim 422 body (identical for k=21 and k=40):

```
{"detail":[{"type":"less_than_equal","loc":["query","k"],"msg":"Input should be less than or equal to 20","input":"21","ctx":{"le":20}}]}
```

**Finding: the service genuinely hard-caps `k` at 20** (a pydantic/FastAPI
`le=20` validation, confirmed by the 422 status and error shape) — this is
not merely `src/lib/rag.ts`'s own client-side clamp. Since the tool's own
`limit` also maxes out at 20, there is no way to "raise the cap" and get
real over-fetch headroom at `limit: 20`: 20 is the most candidates the
index will ever return, period.

**Fix chosen**: kept `k = min(20, limit * 2)` exactly as-is (already the
best achievable request), and rewrote the docstring on
`searchComponentsTool` in `src/lib/mcp/tools.ts` to state the real
constraint honestly — over-fetch headroom only exists below `limit: 10`;
at `limit >= 10` the doubled request collapses to exactly `limit`
candidates with zero filtering headroom; and that ceiling is the index's
(citing the live 422 probe above), not a choice made in this code. No
behavior change — the code was already correct; only the doc was lying, so
only the doc changed.

## Important 2 — reuse `@/lib/rag`'s client instead of reimplementing fetch

Changed in `src/lib/mcp/tools.ts`:
- Added `import { searchComponents as ragSearch, RagError } from "@/lib/rag";`
- Removed the inline `ragBaseUrl()` helper and the raw `fetch`/`URL`
  construction inside `searchComponentsTool`.
- Replaced the raw call with `await ragSearch(args.query, k,
  AbortSignal.timeout(RAG_TIMEOUT_MS))`, keeping the same 6-second budget by
  passing the timeout as `ragSearch`'s `signal` argument (its own default
  has no timeout). This also inherits `@/lib/rag`'s existing `isRagResult`
  shape validation, which the old inline code had none of.
- The catch block now narrows to `err instanceof RagError ||
  (err instanceof DOMException && err.name === "AbortError")` before
  degrading, rethrowing anything else — `ragSearch` only ever throws one of
  those two, so this is an explicit contract, not a behavior change.

Testing fix, per the ruling: replaced both tests that pinned
`process.env.NEXT_PUBLIC_RAG_API_URL` to an unreachable host with
`vi.spyOn(globalThis, "fetch")` stubs in `src/lib/mcp/tools.test.ts`
(`afterEach(() => vi.restoreAllMocks())` added to the `searchComponentsTool`
describe block). The "unreachable" test now mocks a rejected fetch
(`TypeError("network error")`) instead of relying on a refused TCP
connection; the "filters to CSS-only" test now mocks a successful
`/search` response via a new `mockRagOk(ids)` helper, selecting one real
CSS-only id and one real JS id from the registry (via `componentHasJS`) so
the filter assertion no longer touches the network at all.

Command:
```
npx vitest run src/lib/mcp/tools.test.ts
```
Output:
```
Test Files  1 passed (1)
     Tests  13 passed (13)
```

## Important 3 — distinguish real-empty from index/registry drift

Changed in `src/lib/mcp/tools.ts`: after hydrating `response.results`
against the local registry, if `response.results.length > 0 &&
hydrated.length === 0`, the index returned hits but none resolved — treated
as drift (`ranked = null`, i.e. `degraded: true`, falls back to
`localSearch`). If the index returned zero raw hits, `hydrated` is also
`[]` but `ranked = hydrated` — a real empty result (`degraded: false`,
`count: 0`).

Covering tests added in `src/lib/mcp/tools.test.ts`, both using the
`mockRagOk` fetch stub from finding 2:
- `"reports a real empty result, not degraded, when the index legitimately
  finds nothing"` — `mockRagOk([])`, asserts `degraded: false`, `count: 0`,
  `results: []`.
- `"reports degraded when the index's hits no longer resolve against the
  registry (drift)"` — `mockRagOk(["this-id-does-not-exist-in-the-registry"])`,
  asserts `degraded: true` and `results.length > 0` (recovers via
  `localSearch` rather than returning nothing).

Command / output: included in the 13/13 pass above (both new tests present
and green).

## Minor 4 — near-vacuous hasJS test

Added `expect(result.results.length).toBeGreaterThan(0);` immediately
before the per-item loop in the "filters to CSS-only components when hasJS
is false" test, so it can no longer pass vacuously on an empty result set.
(This test was also rewritten under finding 2 to use `mockRagOk` with two
real registry ids — one CSS-only, one JS — instead of the old env-pinned
fallback path, so the non-empty assertion is now meaningful against a
deterministic fixture.)

## Full verification before commit

```
npx tsc --noEmit
```
Clean, no output.

```
npx vitest run
```
```
Test Files  14 passed (14)
     Tests  211 passed (211)
```
(211 = the prior 209 + the 2 new drift tests.)

## Fresh live HTTP verification

Dev server restarted as a background process, confirmed ready
(`✓ Ready in 1370ms`), then the same curl as before:

```
curl -sS -X POST http://localhost:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"search_components","arguments":{"query":"accessible date picker","limit":3}}}'
```

Verbatim response:

```
event: message
data: {"result":{"content":[{"type":"text","text":"{\n  \"query\": \"accessible date picker\",\n  \"degraded\": false,\n  \"count\": 3,\n  \"results\": [\n    {\n      \"id\": \"date-input-pop\",\n      \"name\": \"Date Input Popover\",\n      \"category\": \"Calendars & Date Pickers\",\n      \"categoryId\": \"calendars\",\n      \"languages\": [\n        \"html\",\n        \"javascript\",\n        \"css\"\n      ],\n      \"hasJS\": true,\n      \"page\": \"https://nudaui.dev/components/date-input-pop\",\n      \"anchor\": \"https://nudaui.dev/components#date-input-pop\"\n    },\n    {\n      \"id\": \"date-range\",\n      \"name\": \"Date Range Selector\",\n      \"category\": \"Calendars & Date Pickers\",\n      \"categoryId\": \"calendars\",\n      \"languages\": [\n        \"html\",\n        \"css\"\n      ],\n      \"hasJS\": false,\n      \"page\": \"https://nudaui.dev/components/date-range\",\n      \"anchor\": \"https://nudaui.dev/components#date-range\"\n    },\n    {\n      \"id\": \"time-wheel\",\n      \"name\": \"Time Picker Wheel\",\n      \"category\": \"Calendars & Date Pickers\",\n      \"categoryId\": \"calendars\",\n      \"languages\": [\n        \"html\",\n        \"css\"\n      ],\n      \"hasJS\": false,\n      \"page\": \"https://nudaui.dev/components/time-wheel\",\n      \"anchor\": \"https://nudaui.dev/components#time-wheel\"\n    }\n  ]\n}"}]},"jsonrpc":"2.0","id":4}
```

`degraded: false`, same sensible ids as before this fix round
(`date-input-pop`, `date-range`, `time-wheel`, all in "Calendars & Date
Pickers"). Dev server killed afterward; port 3000 confirmed no longer
listening.

## Files touched this round

- `src/lib/mcp/tools.ts` (docstring rewrite, RAG client reuse, drift
  detection)
- `src/lib/mcp/tools.test.ts` (fetch-stub tests replacing env-pinning, two
  new drift tests, non-empty assertion added)
- `src/app/mcp/route.ts` — untouched this round; none of the four findings
  required a route change.

## Commit (fix round 1)

SHA: `16d3011e6d367aa4377ca23ef6a1a33c069599d9` on branch `mcp`.
Files: `src/lib/mcp/tools.ts`, `src/lib/mcp/tools.test.ts`. No
`Co-Authored-By` or "Generated with" trailer.
