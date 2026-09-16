# Task 2 report — `/mcp` route with `list_categories`

## Status: DONE

Commit: `cd56f7d` on branch `mcp`.

## What changed

- Installed `mcp-handler@^2`, `@modelcontextprotocol/server@^2`, `zod@^4` (see resolved versions below).
- Created `src/lib/mcp/tools.ts` — pure `listCategories()` returning `{ total, categoryCount, categories: CategorySummary[] }`, reading `categories`/`totalCount` from `@/components/showcase/registry/categories` in process and `categoryDescriptions` from `@/lib/category-meta`, verbatim per the brief.
- Created `src/lib/mcp/tools.test.ts` — the brief's two tests unmodified.
- Created `src/app/mcp/route.ts` — `createMcpHandler` registering the `list_categories` tool, exported as both `GET` and `POST`, `runtime = "nodejs"`, `maxDuration = 60`. **Per the ruling in the task brief, the `import { site } from "@/lib/site"` line was omitted** — nothing in this task's route body uses `site`, only `listCategories` (which itself imports `absoluteUrl` from `@/lib/site`). Keeping the unused import would have been dead code.
  - *Correction (fix round 1):* the original version of this line additionally claimed the unused import "would also have failed lint/tsc's unused-import checks." That's inaccurate — `tsconfig.json` sets no `noUnusedLocals`, so `tsc` would not have flagged it, and this was never actually run to confirm. The only real reason to omit it was that it was dead code.
- Modified `next.config.ts` — added `{ source: "/api/mcp", destination: "/mcp", permanent: true }` as the final entry in `redirects()`.
- Modified `package.json` / `package-lock.json` via `npm install`.

## Deviation not anticipated by the brief: content-negotiation proxy blocked the endpoint

While running the Step 9 HTTP verification, the first `tools/list` call returned **HTTP 406** with a plain-text body ("This resource is available in: text/html, text/markdown... You requested: application/json, text/event-stream") instead of reaching the MCP handler at all.

Root cause: this repo's Next.js 16 request proxy (`src/proxy.ts`, the renamed `middleware.ts`) performs RFC 9110 Accept-header content negotiation on every page path that isn't explicitly excluded (`src/lib/negotiation-routes.ts`). `/mcp` has no file extension and isn't under any of the existing opaque prefixes/paths (`/api/`, `/.well-known/`, `/openapi.json`, etc.), so it fell through to `isNegotiablePagePath() === true`. A real MCP client's mandatory `Accept: application/json, text/event-stream` header matches neither `text/html` nor `text/markdown`, so `negotiate()` returned `null` and the proxy answered 406 *before* the request ever reached `src/app/mcp/route.ts`. This is a structural problem, not a session/protocol-version issue, so the brief's suggested `_meta.protocolVersion` workaround would not have helped.

Fix (minimal, one file, not in the brief's file list but necessary for the endpoint to function for any real client): added `"/mcp"` to `OPAQUE_PATHS` in `src/lib/negotiation-routes.ts`, alongside the existing single-representation entries (`/openapi.json`, `/llms.txt`, etc.), with a comment explaining why. Confirmed `isApiPath()` in `proxy.ts` does *not* match `/mcp` (it only matches `/api/*` and `/openapi.json`), so the read-only-method guard that would otherwise 405 a POST does not apply — no further proxy changes were needed. Re-ran the full suite and both curl checks after the fix; both passed clean.

This file is included in the commit alongside the brief's listed files.

## Installed package versions

- `mcp-handler`: `2.1.1`
- `@modelcontextprotocol/server`: `2.0.0`
- `zod`: `4.6.5`

## SDK call-shape check (brief vs. installed package)

The brief's `mcp-handler` v2 usage was verified against the actually-installed package's `.d.ts`/source, not assumed:

- `createMcpHandler(initializeServer, options?)` — exported name `createMcpHandler` (alias of `createMcpRouteHandler`) in `mcp-handler`'s `dist/index.d.ts`. Matches the brief exactly; no change needed.
- `server.registerTool(name, config, cb)` in `@modelcontextprotocol/server`'s `mcp-DXXb3Vv3.mjs`: `config` destructures `{ title, description, inputSchema, outputSchema, annotations, icons, _meta }`, and `inputSchema` is passed through `normalizeRawShapeSchema`, which accepts either a raw Zod shape object or an already-built Standard Schema (e.g. `z.object({})`). The brief's `inputSchema: z.object({})` is accepted as-is.
- **No deviation was needed in the route's SDK call shape.** The brief's snippet for `src/app/mcp/route.ts` (minus the `site` import per the ruling) matches the installed v2 API verbatim.

## Test output

Before implementation (Step 3, confirming the red test):
```
FAIL  src/lib/mcp/tools.test.ts [ src/lib/mcp/tools.test.ts ]
Error: Cannot find package '@/lib/mcp/tools' imported from C:/Users/santiago.gomez/Desktop/Repos/NudaUI/src/lib/mcp/tools.test.ts
 ❯ src/lib/mcp/tools.test.ts:2:1
Test Files  1 failed (1)
     Tests  no tests
```

After implementing `tools.ts` (Step 5):
```
 RUN  v4.1.8 C:/Users/santiago.gomez/Desktop/Repos/NudaUI

 Test Files  1 passed (1)
      Tests  2 passed (2)
```

Full suite after all changes (Step 8, run twice — once before and once after the `negotiation-routes.ts` fix, both identical):
```
 RUN  v4.1.8 C:/Users/santiago.gomez/Desktop/Repos/NudaUI

 Test Files  14 passed (14)
      Tests  199 passed (199)
```

## tsc result

`npx tsc --noEmit` — clean, no output, exit 0. Run both before and after the `negotiation-routes.ts` fix.

## HTTP verification (dev server run as background process, killed after)

Dev server started with `npm run dev` in the background (Next.js 16.2.6, Turbopack, "Ready in 1188ms" on `http://localhost:3000`). Initial curl attempts hit the 406 described above; after the `negotiation-routes.ts` fix, both checks below passed. Verified the server was stopped afterward (`curl` to `localhost:3000` returned "Failed to connect... Could not connect to server").

### Check 1 — `tools/list` (verbatim response body)

Request:
```
curl -sS -X POST http://localhost:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

Response (status `200 OK`, `content-type: text/event-stream`):
```
event: message
data: {"result":{"tools":[{"name":"list_categories","title":"List NudaUI categories","description":"List all NudaUI component categories with a description of when to use each one and how many components it holds. Call this first when a request is vague about what kind of UI is needed.","inputSchema":{"type":"object","$schema":"https://json-schema.org/draft/2020-12/schema","properties":{}}}]},"jsonrpc":"2.0","id":1}
```

No `_meta.protocolVersion` was needed — the request succeeded without it.

### Check 2 — `tools/call` for `list_categories` (verbatim response body)

Request:
```
curl -sS -X POST http://localhost:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"list_categories","arguments":{}}}'
```

Response (status `200 OK`, `content-type: text/event-stream`) — the SSE `data:` line's JSON-RPC `result.content[0].text` field, decoded, begins:
```json
{
  "total": 1503,
  "categoryCount": 81,
  "categories": [
    {
      "id": "loaders",
      "label": "Loaders",
      "description": "Loading state animations — pulse dots, orbits, ripples, bars, waves. Used while async work is in flight to signal progress without committing to a percentage.",
      "componentCount": 23,
      "url": "https://nudaui.dev/components#section-loaders"
    },
    {
      "id": "spinners",
      ...
```
...and ends (last entry):
```json
    {
      "id": "social-share",
      "label": "Social Share",
      "description": "Social share UI — horizontal rows, floating bars, copy-link pills, share counts, popover menus, native-style sheets, QR cards, like/share/bookmark bars. Inline-SVG glyphs, no external scripts.",
      "componentCount": 18,
      "url": "https://nudaui.dev/components#section-social-share"
    }
  ]
}
```

`"total": 1503` and `"categoryCount": 81` both match the registry's authoritative values exactly. Every `url` field points to `https://nudaui.dev/components#section-<id>`, confirming absolute nudaui.dev URLs via `absoluteUrl()`. The full raw SSE payload (all 81 categories) was inspected in full during verification; only the first/last entries are reproduced here for brevity.

## Commit

`cd56f7d` — "feat: add /mcp endpoint with list_categories tool" (branch `mcp`). 7 files changed: `next.config.ts`, `package.json`, `package-lock.json`, `src/app/mcp/route.ts` (new), `src/lib/mcp/tools.ts` (new), `src/lib/mcp/tools.test.ts` (new), `src/lib/negotiation-routes.ts`.

---

## Fix round 1 (review: CHANGES REQUESTED)

### Important 1 — the proxy fix was untested

**Change:** Added `"/mcp"` to the "leaves %s alone" `it.each` table in `src/lib/negotiation-routes.test.ts`, in the "Single-representation documents" group, with a one-line comment ("JSON-RPC endpoint — no HTML or Markdown representation.").

**Covering test file:** `src/lib/negotiation-routes.test.ts` (the `describe("isNegotiablePagePath")` block).

**Command run:**
```
npx vitest run src/lib/negotiation-routes.test.ts
```

**Output:**
```
 RUN  v4.1.8 C:/Users/santiago.gomez/Desktop/Repos/NudaUI

 Test Files  1 passed (1)
      Tests  ... passed
```
(Run together with `src/lib/mcp/tools.test.ts` in one invocation — see combined output below — both files passed.) Reverting the `"/mcp"` line in `src/lib/negotiation-routes.ts` now fails this test (confirmed the assertion is load-bearing before restoring the fix), so an accidental regression can no longer pass silently.

### Important 2 — the server had no identity

**Change:** Verified the option shape directly against the installed package rather than assuming. `node_modules/mcp-handler/dist/index.mjs` (`initializeMcpApiHandler`, lines 13-23) destructures `serverInfo` out of the **second** argument (`options`) passed to `createMcpHandler`, defaulting to `{ name: "mcp-typescript server on vercel", version: "0.1.0" }`, and passes it straight into `new McpServer(serverInfo, mcpServerOptions)`. So `serverInfo` is a second, sibling argument to `createMcpHandler(initializeServer, options)` — not a field inside the tool config, and not part of the `initializeServer` callback.

Updated `src/app/mcp/route.ts` to pass it:
```ts
const handler = createMcpHandler(
  (server) => { /* ...registerTool... */ },
  {
    serverInfo: { name: "nudaui", version: "1.0.0" },
  },
);
```

**Covering verification:** no unit test covers wire-level `initialize` responses in this codebase (they're all pure-function tests), so this was verified live over HTTP per the reviewer's request, not by unit test.

**Command run** (dev server started as a background process, killed afterward):
```
curl -sS -X POST http://localhost:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2026-07-28","capabilities":{},"clientInfo":{"name":"verify-client","version":"1.0.0"}}}'
```

**Verbatim response:**
```
event: message
data: {"result":{"protocolVersion":"2025-11-25","capabilities":{"tools":{"listChanged":true}},"serverInfo":{"name":"nudaui","version":"1.0.0"}},"jsonrpc":"2.0","id":1}
```

`serverInfo.name` is `"nudaui"` and `serverInfo.version` is `"1.0.0"` — the package default no longer appears. (Aside, not requested: the server negotiated down to protocol `2025-11-25` since the request declared `2026-07-28` in `params` rather than as the `_meta.protocolVersion` the brief mentioned; this didn't block the check and is unrelated to the `serverInfo` fix.)

### Minor 3 — hardcoded total in a doc comment

**Change:** Reworded the header comment in `src/app/mcp/route.ts` from "search, retrieval and browsing over 1,503 copy-paste components" to "search, retrieval and browsing over the entire copy-paste component catalog" — no number, so it can't drift from the registry.

**Covering test:** none applicable (a doc comment carries no runtime behavior); confirmed by `grep -rn "1,503" src/app/mcp/route.ts` returning no matches, and by re-running `npx tsc --noEmit` and the full suite (below) to confirm the file still compiles and nothing depended on the comment text.

### Minor 4 — vacuous-pass gap in `tools.test.ts`

**Change:** Added `expect(categories.length).toBeGreaterThan(0);` immediately before the `for` loop in the first `it` block of `src/lib/mcp/tools.test.ts`, so an empty registry can no longer pass the surrounding assertions vacuously. Left the `description.length > 0` assertion and the `??` fallback as instructed.

**Covering test file:** `src/lib/mcp/tools.test.ts`.

**Command run:**
```
npx vitest run src/lib/negotiation-routes.test.ts src/lib/mcp/tools.test.ts
```

**Output:**
```
 RUN  v4.1.8 C:/Users/santiago.gomez/Desktop/Repos/NudaUI

 Test Files  2 passed (2)
      Tests  39 passed (39)
```

### Full verification after all four fixes

```
npx tsc --noEmit
```
→ clean, no output, exit 0.

```
npx vitest run
```
```
 RUN  v4.1.8 C:/Users/santiago.gomez/Desktop/Repos/NudaUI

 Test Files  14 passed (14)
      Tests  200 passed (200)
```
(200 vs. the original 199 — the one new row added to the `negotiation-routes.test.ts` `it.each` table.)

Dev server was started as a background process for the `initialize` check above and confirmed stopped afterward (`curl` to `localhost:3000` returned "Failed to connect... Could not connect to server").

### Fix-round-1 commit

Committed on branch `mcp`, no `Co-Authored-By` trailer. See the top of this file for status; the commit SHA for this round is recorded in the coordinator's return message.
