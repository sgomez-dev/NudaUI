# Final whole-branch review — fix wave report

Branch `mcp`. Starting point `b63a2b0` (clean). Commit range covering this
report: `b63a2b0..43e8275`.

```
3ea0813 fix: measurable client identity, parseable tool output, MCP CORS
0f9874c fix: derive every component-count claim from totalCount, guard server.json
ef726ae perf: memoize allComponents() over the 5.1 MB registry
43e8275 docs: reconcile MCP spec/plan prose with what shipped
```

No second fix wave follows this one, so every BLOCKING item was fixed
properly rather than patched around, and every ALSO-FIX item was done too.

---

## 1. (Critical) Unmeasurable stopping criterion — no fallback client identity

**Change.** Added `hashUserAgent()` (sibling to `hashQuery()`, same
construction: SHA-256, truncated to 12 hex chars, never returns the raw
string) in `src/lib/mcp/log.ts`. Added a `uaHash` field to `ToolCallEvent`
and to `runInstrumented`'s `CommonFields` in `src/lib/mcp/instrument.ts`, so
it is logged on both the success and the failure line of every tool call,
the same way `client` already is.

In `src/app/mcp/route.ts`, added `currentUaHash()`:

```ts
async function currentUaHash(): Promise<string | undefined> {
  try {
    const { headers } = await import("next/headers");
    const h = await headers();
    return hashUserAgent(h.get("user-agent"));
  } catch {
    return undefined;
  }
}
```

**How the reachability question was resolved.** The task named two
candidates: `headers()` from `next/headers`, or the tool handler's own
context argument. I did not assume either worked — I instrumented
`list_categories`'s handler with a temporary `console.log` of
`(await headers()).get("user-agent")`, started `next dev`, and sent a real
`tools/call` HTTP request carrying `User-Agent: ExperimentUA/1.0`. It
printed `EXPERIMENT headers() ua= ExperimentUA/1.0` — proof `headers()` is
reachable from inside a `registerTool` callback, several `await`s below the
exported `POST` function, through `mcp-handler`'s own dispatch. This works
because that whole call chain is plain `async`/`await` (no bare callbacks or
timers that would drop out of Next's request-scoped `AsyncLocalStorage`).
Once this was confirmed, the second candidate (the handler's `ctx` argument)
was not tried — introducing a second mechanism for the same fact would be
redundant, and `next/headers` is the framework's own supported primitive for
exactly this.

`uaHash` is deliberately additive, not a replacement for `client`: it
complements it (a secondary, coarser bucket — several different MCP clients
sharing one HTTP library's User-Agent will hash to the same bucket), so
`client` remains the more precise signal whenever `clientInfo` is present.

**Covering test.** `src/lib/mcp/log.test.ts` — `hashUserAgent` is stable,
differs per input, never contains the raw string, and returns `undefined`
for missing/blank input. `src/app/mcp/route.test.ts` exercises the real
route handler and (indirectly, via the captured log lines below) confirms
`uaHash` reaches the log line in a live server.

**Command run:** `npx vitest run src/lib/mcp/log.test.ts` — 8/8 passed.

**Captured log line (real HTTP request, `next dev`, built code, not the
experiment above):**

```
curl -s -X POST http://localhost:3000/mcp \
  -H "Content-Type: application/json" -H "Accept: application/json, text/event-stream" \
  -H "User-Agent: FinalVerification/1.0" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"list_categories","arguments":{}}}'

{"evt":"mcp_tool","tool":"list_categories","ok":true,"uaHash":"c3df4895ef8a","ms":0,"day":"2026-09-17"}
```

`client` is absent (curl sends no `clientInfo` envelope — exactly the
real-world gap this fix closes) and `uaHash` is present, hashed, never the
raw `User-Agent` string.

---

## 2. (Important) Unparseable output on the exact paths that need structure most

**Change.** `src/app/mcp/route.ts`:

- `search_components`: dropped the `"NOTE: …\n\n" + JSON.stringify(result)`
  prefix. The degraded note is now a `note` field added to the same object
  when `result.degraded` is true — one `JSON.stringify()` call, one
  parseable object, on every path.
- `get_component`: the not-found branch now returns
  `JSON.stringify(result, null, 2)` — the full `{ found: false, id,
  suggestions, hint }` object — instead of a prose sentence that discarded
  `suggestions`/`hint`. `isError: true` is kept (still semantically a
  tool-level failure) but the body underneath it is now structured data an
  agent can act on programmatically.

**Covering tests.** New `src/app/mcp/route.test.ts`: asserts
`JSON.parse(content[0].text)` succeeds for `list_categories`,
`get_component` (found and not-found paths), and `search_components`
(happy path and index-unreachable/degraded path), and specifically asserts
the not-found payload's `suggestions`/`hint` survive as structured fields.

**Command run:** `npx vitest run src/app/mcp/route.test.ts` — 9/9 passed.

**Live verification** (`next dev`, built code) — not-found path, response
body (SSE-unwrapped):

```json
{
  "found": false,
  "id": "Toast-Slide.JSON-nope-xyz",
  "suggestions": [
    { "id": "toast-slide", "name": "Toast Slide", "category": "Toasts & Alerts" },
    { "id": "undo-toast", "name": "Undo Toast", "category": "Toasts & Alerts" }
  ],
  "hint": "Enumerate valid ids at https://nudaui.dev/api/registry.json, then retry with one of them."
}
```
`isError: true` at the protocol level; the body parses cleanly as JSON.

---

## 3. (Important) No CORS, no OPTIONS on `/mcp`

**Change.** `src/app/mcp/route.ts`: added `MCP_CORS_HEADERS` (Origin `*`,
Methods `GET, POST, OPTIONS`, Headers `Content-Type, Accept,
Mcp-Protocol-Version, Mcp-Session-Id, Last-Event-ID`, Expose-Headers
`Mcp-Protocol-Version`), an exported `OPTIONS()` returning 204 with those
headers plus `Access-Control-Max-Age: 86400`, and a `withCors()` wrapper
applied to every GET/POST response so the actual response — not just the
preflight — carries the CORS headers too. Kept local to the route rather
than imported from `src/lib/api-error.ts`: that module's `JSON_HEADERS`
assumes GET/HEAD/OPTIONS and a JSON body, neither of which fits a
streamable-HTTP MCP endpoint that also accepts POST and can answer with
`text/event-stream`.

**Covering test.** `src/app/mcp/route.test.ts` — `OPTIONS /mcp` returns 204
with `Access-Control-Allow-Origin: *`, `Allow-Methods` containing `POST`,
and the `Expose-Headers` value; `POST /mcp` and `GET /mcp` both carry
`Access-Control-Allow-Origin: *` on the real response.

**Preflight over real HTTP** (`next dev`, built code):

```
$ curl -s -i -X OPTIONS http://localhost:3000/mcp \
    -H "Origin: https://inspector.example" \
    -H "Access-Control-Request-Method: POST" \
    -H "Access-Control-Request-Headers: content-type"

HTTP/1.1 204 No Content
access-control-allow-headers: Content-Type, Accept, Mcp-Protocol-Version, Mcp-Session-Id, Last-Event-ID
access-control-allow-methods: GET, POST, OPTIONS
access-control-allow-origin: *
access-control-expose-headers: Mcp-Protocol-Version
access-control-max-age: 86400
```

---

## 4. (Important) `server.json`'s "1,503" has no guard

**Change.** `src/lib/readme-claims.test.ts`: added a `describe("server.json
claims match the registry")` block that reads `server.json`, regexes its
`description` for `([\d,]+) copy-paste`, and asserts the captured count
equals `totalCount.toLocaleString("en-US")`. The two existing README
assertions are untouched.

**Command run:** `npx vitest run src/lib/readme-claims.test.ts` — 3/3
passed (2 pre-existing README assertions + the new server.json assertion).

---

## 5. (Important) Stale `"components": 1022` in `/developers`

**Change.** `src/lib/pages/developers.ts` lines 166 and 196: the two JSON
example code blocks now read
`` `  "totals": { "components": ${totalCount}, "categories": ${categories.length} },` ``
instead of the literal `1022`/`81`, matching the derived `totalCount` used
~90 lines away in the same file.

**Command run:** `npx tsc --noEmit` clean (confirms the template-literal
conversion type-checks); no dedicated test exists for this page's prose
(none existed before this change either), so this was verified by reading
the rendered strings and by the full `npx vitest run` pass (240/240,
nothing regressed).

---

## 6. (Important) Category filtering corrupts the `zeroResults` metric

**Change.** `src/lib/mcp/tools.ts` — `searchComponentsTool()`:

- Returns a new `hydratedCount` field: the number of hits resolved from the
  index (or the local fallback) *before* `category`/`hasJS` filtering and
  the `limit` slice.
- When the post-filter result is empty (`results.length === 0`) but the
  pre-filter pool was not (`hydratedCount > 0`) and a `category` was
  requested, it tops up from a fresh `localSearch()` pass restricted to
  that category (and `hasJS`), rather than returning a bare zero.

`src/app/mcp/route.ts`'s `describeSuccess` callback for `search_components`
now logs `hydratedCount` alongside `results`/`zeroResults`/`degraded`, so
"the index found nothing" (`hydratedCount: 0`) and "a category filter
emptied a real result" (`hydratedCount > 0`, `count` smaller than
requested) are distinguishable in the log.

**Covering tests.** `src/lib/mcp/tools.test.ts`, four new cases: a genuine
empty result reports `hydratedCount: 0`; a `hasJS` narrowing reports
`hydratedCount: 2` alongside `count: 1`; a category filter that would empty
an otherwise-real result gets topped up (`count > 0`, every returned hit in
the requested category); and — the negative case — a non-category (`hasJS`
only) narrowing does *not* get topped up, confirming the rescue is scoped
to category filtering as specified.

**Command run:** `npx vitest run src/lib/mcp/tools.test.ts` — 25/25 passed.

**Live verification** (`next dev`, real `rag.nudaui.dev` call, query "toast
that slides in", `category: "loaders"` — a category with no real overlap
with "toast"):

```json
{
  "degraded": false,
  "count": 5,
  "results": [
    { "id": "bouncing-balls", "categoryId": "loaders", ... },
    { "id": "rotating-squares", "categoryId": "loaders", ... }
  ],
  "hydratedCount": 10
}
```
The index hydrated 10 real hits (none in `loaders`); the category filter
would have emptied the page; the top-up returned 5 usable `loaders`
results instead of a bare zero. Log line:
```
{"evt":"mcp_tool","tool":"search_components","ok":true,"queryHash":"cfb6ff103d8d","results":5,"zeroResults":false,"degraded":false,"hydratedCount":10,"ms":520,"day":"2026-09-17"}
```

---

## 7. Memoize `allComponents()`

**Change.** `src/lib/component-payload.ts`: `allComponents()` now caches its
flattened result in a module-scope `let cached` on first call and returns
the cached array thereafter. The registry (`categories`) is generated code,
immutable after build, so this is safe.

**Covering test.** No behavior changed (same output, same reference after
the first call), so the existing `tools.test.ts`/`route.test.ts` suites
that call `allComponents()` repeatedly continue to pass and implicitly
exercise the memoized path. `npx vitest run` — 240/240 passed.

---

## 8. Soften the degraded wording

**Change.** `src/app/mcp/route.ts` — the `note` field added on the degraded
path (see item 2) now reads *"The semantic index did not respond in time,
so these results use basic keyword matching and may rank poorly."*
— replacing the old *"the semantic index was unreachable"* wording, which
read as an outage when `rag.nudaui.dev`'s few-second cold start (well within
the tool's 6s budget in `tools.ts`) is the far more common cause.

**Covering test.** `src/app/mcp/route.test.ts` — asserts the degraded
payload's `note` contains `"did not respond in time"` and does **not**
contain `"unreachable"`.

**Command run:** `npx vitest run src/app/mcp/route.test.ts` — 9/9 passed.

---

## 9. Normalize `componentId` before logging

**Change.** `src/lib/mcp/log.ts`: added `normalizeComponentId(id)` — strips
a trailing `.json` (case-insensitive) and lowercases. `src/app/mcp/route.ts`
calls it when building the `get_component` log event:
`componentId: normalizeComponentId(id)`. The actual lookup (`getComponent(id)`)
is unchanged — only the logged key is normalized.

**Covering test.** `src/lib/mcp/log.test.ts` — strips `.json`, lowercases,
collapses all three call-site variants (`toast-slide`,
`toast-slide.json`, `Toast-Slide`) to one bucket, and does **not** strip an
incidental mid-string `.json` (only a genuine trailing extension).

**Command run:** `npx vitest run src/lib/mcp/log.test.ts` — 8/8 passed.

**Captured log lines** (`next dev`, built code, three separate requests):

```
{"evt":"mcp_tool","tool":"get_component","ok":true, "componentId":"toast-slide", ...}   # id: "toast-slide"
{"evt":"mcp_tool","tool":"get_component","ok":true, "componentId":"toast-slide", ...}   # id: "toast-slide.json"
{"evt":"mcp_tool","tool":"get_component","ok":false,"componentId":"toast-slide", ...}   # id: "Toast-Slide"
```
All three aggregate under `componentId: "toast-slide"`. (The third is
`ok:false` because the underlying lookup is still case-sensitive — that is
existing, unchanged behavior; item 9 only asked to normalize the *logged*
key, not the lookup.)

---

## 10. Reduce `maxDuration` from 60 to 20

**Change.** `src/app/mcp/route.ts`: `export const maxDuration = 20;` with a
comment noting the ~6s actual work budget (`RAG_TIMEOUT_MS` in
`tools.ts` plus in-process registry work).

**Command run:** `npm run build` succeeded with the new value in place (see
the final build output below).

---

## 11. Reconcile spec/plan prose with what shipped

**Change** (`docs/superpowers/specs/2026-09-16-nudaui-mcp-server-design.md`,
`docs/superpowers/plans/2026-09-16-nudaui-mcp-server.md`):

- (a) Both documents' claims that the `mcp-name:` README line "validates
  ownership" are corrected in place: for this publish path (GitHub
  namespace, remote-only, package-less) that line is not load-bearing —
  verification happens purely through the OAuth device flow. This matches
  the correction already recorded in the Task 6 handoff note
  (`docs/superpowers/handoff/2026-09-16-mcp-server-handoff.md`, commit
  `adfe84b`) but had never been applied to the spec/plan text itself.
- (b) The spec's Instrumentation example (`q_hash`/`zero_results`) is
  replaced with the actual shipped field names (`queryHash`, `zeroResults`)
  plus the fields it omitted entirely (`degraded`, `componentId`, and — new
  this wave — `uaHash`, `hydratedCount`), with a note telling the maintainer
  to write the four-week queries against these names.
- (c) The plan's `server.json` example is updated from the stale
  `2025-07-09` schema URL and `"status": "active"` field to what actually
  shipped (`2025-12-11`, no `status`), with a note explaining why.

No production code changed in this commit — documentation only.

**Command run:** none applicable (prose-only change); `npx vitest run` and
`npx tsc --noEmit` were re-run after this commit as part of the final full
suite pass below, to confirm nothing regressed.

---

## 12. Instrument `tools/list`

**Reachability.** `mcp-handler`'s `createMcpHandler()` returns a plain
`(request: Request) => Promise<Response>` — there is no `registerTool`-style
hook for `tools/list` (it is answered entirely inside the SDK's own
dispatch, and the two ways to reach into that — a protected
`_getRequestHandler` on the underlying `Server` class, or a `private
_registeredTools` field on `McpServer` — are not part of the public,
typed API surface; using either would require an `as any`/protected-access
cast the codebase's own conventions avoid). So this was instrumented at the
HTTP boundary instead, in `src/app/mcp/route.ts`: `withInstrumentation()`
clones the incoming request, best-effort parses its body for
`method === "tools/list"`, delegates to the real `handler`, and logs an
`mcp_tool` event (`tool: "tools/list"`, `ok`, `ms`, `uaHash`) only for that
method. A bodyless GET (SSE stream open) fails the `.json()` parse, is
caught, and logs nothing — this can never break a real request.

**Covering test.** `src/app/mcp/route.test.ts` — sends a `tools/list`
request, spies on `console.log`, and asserts a matching `mcp_tool` line
with `tool: "tools/list"` was emitted.

**Captured log line** (`next dev`, built code):
```
{"evt":"mcp_tool","tool":"tools/list","ok":true,"ms":7,"uaHash":"f7116ca3f173","day":"2026-09-17"}
```

---

## 13. `toLocaleString` consistency on `/developers`

**Change.** `src/lib/pages/developers.ts` lines 81 and 281:
`${totalCount}` → `${totalCount.toLocaleString("en-US")}`, matching the
`1,503` formatting used everywhere else on the site.

**Command run:** `npx tsc --noEmit` clean; `npx vitest run` 240/240 (no
test asserted the old unformatted string, so nothing needed updating).

---

## 14. Verify the `/api/mcp` → `/mcp` redirect over HTTP

**Command run and output** (`next dev`, built code):

```
$ curl -s -i http://localhost:3000/api/mcp
HTTP/1.1 308 Permanent Redirect
location: /mcp
Refresh: 0;url=/mcp
```

Confirmed working exactly as configured in `next.config.ts:76`. No code
change was needed — this item was verification-only.

---

## Full-suite verification

```
$ npx tsc --noEmit
(clean, no output)

$ npx vitest run
 Test Files  17 passed (17)
      Tests  240 passed (240)

$ npm run build
> prebuild: vitest run — 17 files / 240 tests passed
> next build
✓ Compiled successfully in 72s
✓ Generating static pages using 7 workers (3030/3030) in 103s
...
├ ƒ /mcp
...
(build succeeded; /mcp listed as a dynamic (ƒ) route, as expected for a
runtime: "nodejs" route handler)
```

Dev server was run only as a background process for the live HTTP checks
above (`next dev` on port 3000) and was killed (`taskkill /F`) immediately
after each verification pass; nothing was left running.

## Items not in scope (unchanged from the task's exclusion list)

Verifying cold-start behavior on a real Vercel deployment, setting a Vercel
spend limit or firewall rule, registry publication, and desktop-MCP-client
verification — none of these were attempted, per the task's explicit
exclusion.
