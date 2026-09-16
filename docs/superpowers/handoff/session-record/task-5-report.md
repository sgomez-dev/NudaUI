# Task 5 report: Usage instrumentation

## What changed

- Created `src/lib/mcp/log.ts` — `hashQuery()` (sha256, truncated to 12 hex
  chars, lowercased+trimmed input) and `logToolCall()` (one
  `console.log(JSON.stringify(...))` line tagged `evt: "mcp_tool"`, wrapped
  in try/catch so a logging failure can never break a tool call), exactly
  as specified in the brief's Step 3.
- Created `src/lib/mcp/log.test.ts` — the brief's Step 1 test file,
  verbatim.
- Modified `src/app/mcp/route.ts`:
  - Imports `hashQuery`, `logToolCall` from `@/lib/mcp/log`, and
    `type { McpServer }` from `@modelcontextprotocol/server`.
  - Added a `clientIdentity(server)` helper (see "Client identity"
    below).
  - Wrapped all three tool handler bodies (`list_categories`,
    `get_component`, `search_components`) in `try { ... } catch (err) {
    logToolCall({...ok:false}); throw err; }`, with the success-path log
    call placed right after the underlying tool function resolves. This
    goes one step beyond the brief's literal `search_components` example
    (which only shows the success-path log) — see "Exception path" below
    for why that was necessary.
  - `get_component` logs `componentId` and `ok: result.found` (a
    not-found lookup is `ok:false` but is a normal business result, not a
    caught exception — the `id` still comes from `result.id`/the raw
    input, never from component code).
  - `search_components` logs `queryHash` (never the raw `query`),
    `results`, `zeroResults`, `degraded`; on the exception path it logs
    only `queryHash` (no `results`/`degraded` — those don't exist if the
    call never completed).
  - `list_categories` logs `tool`, `ok`, `ms`, `client` only — nothing
    else to log for this endpoint.
  - No raw query text or component code is logged anywhere. No component
    total is hardcoded (the file already computed the description string
    via `totalCount.toLocaleString(...)`, unchanged).

## Test output

Before (Step 2, confirming the failing test):
```
npx vitest run src/lib/mcp/log.test.ts
FAIL  src/lib/mcp/log.test.ts [ src/lib/mcp/log.test.ts ]
Error: Cannot find package '@/lib/mcp/log' imported from .../log.test.ts
 Test Files  1 failed (1)
      Tests  no tests
```

After implementing `log.ts` (Step 4):
```
npx vitest run src/lib/mcp/log.test.ts
 Test Files  1 passed (1)
      Tests  4 passed (4)
```

Full suite after wiring `route.ts` and before committing:
```
npx vitest run
 Test Files  15 passed (15)
      Tests  215 passed (215)
```

## tsc result

```
npx tsc --noEmit
```
Clean, no output, exit 0. Run after the full implementation, before
committing.

## Live HTTP verification

Dev server started as a background process (`npm run dev`), confirmed
ready via its log (`✓ Ready in 487ms`).

### Three tool calls (one per tool), verbatim captured log lines

```
curl -sS -X POST http://localhost:3000/mcp -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"list_categories","arguments":{}}}'
```
→
```
{"evt":"mcp_tool","tool":"list_categories","ok":true,"ms":0,"day":"2026-09-16"}
```

```
curl ... -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"get_component","arguments":{"id":"toast-slide"}}}'
```
→
```
{"evt":"mcp_tool","tool":"get_component","ok":true,"ms":1,"componentId":"toast-slide","day":"2026-09-16"}
```

Also called `get_component` with a bad id to confirm the `found:false`
business-result path (still one line, `ok:false`, no exception):
```
curl ... -d '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"get_component","arguments":{"id":"nonexistent-xyz"}}}'
```
→
```
{"evt":"mcp_tool","tool":"get_component","ok":false,"ms":7,"componentId":"nonexistent-xyz","day":"2026-09-16"}
```

```
curl ... -d '{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"search_components","arguments":{"query":"accessible date picker","limit":3}}}'
```
→
```
{"evt":"mcp_tool","tool":"search_components","ok":true,"ms":4610,"queryHash":"a90f9f0763d1","results":3,"zeroResults":false,"degraded":false,"day":"2026-09-16"}
```

No raw query text (`"accessible date picker"`) appears anywhere in the log
line — only `queryHash`. No `client` key appears on plain curl calls,
because curl sends no MCP envelope and `console.log`/`JSON.stringify` drop
`undefined` values — confirmed correct per the interface (`client` is
optional).

Dev server was killed and port 3000 confirmed free before moving on.

## Client identity — investigation findings

**Reachable, and wired up.** Verified by reading the installed package
source, not assumed:

- `@modelcontextprotocol/server@2.0.0`'s dist
  (`dist/src-CX2iR2pK.mjs`, `dist/mcp-DXXb3Vv3.mjs`,
  `dist/createMcpHandler-CLhGwQTn.d.mts`) shows that under protocol
  revision 2026-07-28, `io.modelcontextprotocol/clientInfo` is one of the
  `RESERVED_ENVELOPE_META_KEYS` lifted out of a request's `_meta` by
  `liftWireOnlyMaterial`, surfaced at `ctx.mcpReq.envelope`. It is
  **not** required (`REQUIRED_ENVELOPE_KEYS` is only
  `[protocolVersion, clientCapabilities]` — spec PR #3002 demoted
  `clientInfo` from MUST to SHOULD), so a compliant client may omit it.
- Server-side, `serveModern()` (in `index.mjs`) calls
  `seedClientIdentityFromEnvelope(server, { clientInfo:
  meta[CLIENT_INFO_META_KEY], ... })` on the fresh `McpServer` instance
  it builds per request (via `factory()`), **before** invoking the tool
  handler. This backfills `server._clientVersion`, which
  `Server.getClientVersion(): Implementation | undefined` returns.
- Because this endpoint is genuinely stateless (a new `McpServer` per
  HTTP request, confirmed by the file's own doc comment and by tracing
  `serveModern`), there is no cross-request leakage from using an
  instance-scoped accessor — the instance itself is scoped to the one
  request being handled when the tool handler runs.
- `createMcpHandler`'s callback receives `server: McpServer` (per
  `mcp-handler`'s own `.d.ts`), and `McpServer.readonly server: Server`
  is public, so `server.server.getClientVersion()` is reachable from
  inside a tool handler's closure with no signature changes needed.

**One caveat, stated honestly**: `getClientVersion()` carries a
`@deprecated` tag recommending `ctx.mcpReq.envelope` on a handler's
second argument instead. I did not switch to that: the type of that
field, `RequestMetaEnvelope`, is bundled out to a bare `{}` in this
package's shipped `.d.mts` (confirmed by reading it directly — this
looks like a dts-bundler artifact on a mapped/computed-key type, since
the runtime value is real, populated data), so reading it back through
`ctx` would require an `as any` that `getClientVersion()` doesn't. The
deprecation note itself says the accessor "remains functional," so I used
it, and documented this whole chain in a comment on `clientIdentity()` in
`route.ts` for the next maintainer to re-evaluate once/if the SDK's typed
surface catches up.

**Real captured log line proving it works** — a plain curl POST doesn't
carry an MCP envelope at all (it lands on this endpoint's 2025-era
stateless fallback), so a bare `tools/call` never populates `client`. To
prove the mechanism, I sent a request that explicitly carries the
2026-07-28 envelope claim (`_meta` with `protocolVersion`,
`clientCapabilities: {}`, and `clientInfo`), plus the `Mcp-Method` /
`Mcp-Name` headers this SDK build's header/body cross-check requires for
a claimed envelope:

```
curl -sS -i -X POST http://localhost:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H 'Mcp-Method: tools/call' \
  -H 'Mcp-Name: list_categories' \
  -d '{"jsonrpc":"2.0","id":5,"method":"tools/call","params":{"name":"list_categories","arguments":{},"_meta":{"io.modelcontextprotocol/protocolVersion":"2026-07-28","io.modelcontextprotocol/clientCapabilities":{},"io.modelcontextprotocol/clientInfo":{"name":"probe-client","version":"9.9.9"}}}}'
```

→ HTTP 200, and the verbatim captured log line:
```
{"evt":"mcp_tool","tool":"list_categories","ok":true,"ms":0,"client":"probe-client/9.9.9","day":"2026-09-16"}
```

This is a real request through the actual route, not a mock. Note the
practical implication for the 4-week read: `client` will likely be
`undefined` for a large share of real calls, both because `clientInfo` is
optional on the envelope and because many current MCP clients may not yet
implement the 2026-07-28 per-request envelope at all and will hit the
legacy stateless fallback (which never populates `client`). Any
"distinct clients per day" read from these logs is a floor, not a
complete count.

## Exception path — investigation findings

**The brief's literal example did not cover this, and I fixed it rather
than shipping it as-is.** The brief's Step 5 example for
`search_components` places the `logToolCall(...)` call after `await
searchComponentsTool(args)` resolves, with no `try/catch`. If
`searchComponentsTool` throws (it does, for any error that isn't a
`RagError` or an abort — see `src/lib/mcp/tools.ts`'s catch-and-rethrow),
that log call is never reached, and the call goes completely unlogged —
directly contradicting "every path, success and error, must emit exactly
one line." I did not implement the brief's example literally for this
reason; I wrapped all three handler bodies in `try/catch`, logging
`ok:false` in the catch block before rethrowing (so the MCP SDK's own
error-to-JSON-RPC-error mapping is unchanged).

**Verified with a real thrown exception, not a mock.** `RAG_API_URL` is
computed once at module load from `NEXT_PUBLIC_RAG_API_URL`, and
`searchComponents()` in `src/lib/rag.ts` builds `new URL(...)` from it
*outside* its own try/catch (that try/catch only wraps the `fetch()`
call). Setting the env var to a schemeless string makes `new URL(...)`
throw a plain `TypeError`, which is neither a `RagError` nor an
`AbortError`, so `searchComponentsTool` rethrows it unmodified — a
genuine, uncontrived exception reaching the route handler.

Restarted the dev server with `NEXT_PUBLIC_RAG_API_URL=bad-url-no-scheme`,
then:
```
curl -sS -i -X POST http://localhost:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":9,"method":"tools/call","params":{"name":"search_components","arguments":{"query":"exception probe test"}}}'
```
→ `data: {"result":{"content":[{"type":"text","text":"Invalid URL"}],"isError":true},"jsonrpc":"2.0","id":9}`

Verbatim captured log line for that request:
```
{"evt":"mcp_tool","tool":"search_components","ok":false,"ms":0,"queryHash":"d821eb2b1f8e","day":"2026-09-16"}
```

One line, `ok:false`, no raw query text. Dev server killed afterward
(port 3000 confirmed free).

## Commit

SHA: `9a7399161206c0da9aab4ce7cc8735729e92256f` on branch `mcp`.
Files: `src/app/mcp/route.ts`, `src/lib/mcp/log.ts`,
`src/lib/mcp/log.test.ts`. No `Co-Authored-By` or "Generated with"
trailer.

An untracked `docs/superpowers/handoff/` directory was present in the
working tree but is unrelated to this task and was left out of the
commit.

---

# Fix round 1

Review verdict: APPROVED. Both prior deviations from the brief's literal
example (try/catch around each handler; the `client` field's wiring and
its doc comment) were confirmed correct. Two Important findings were sent
back anyway — both silent-data-loss risks on this specific instrument,
neither reachable today. Both addressed below.

## Important 1 — `clientIdentity()` sat outside `logToolCall`'s try/catch

**The failure this closes**: `clientIdentity(server)` was evaluated as an
argument expression at each of the (then) eight `logToolCall(...)` call
sites, including inside the `catch` block. If it ever threw there — it
can't today, since `getClientVersion()` is a trivial getter on the
installed SDK, but it is `@deprecated` and could change shape under a
future SDK bump — the sequence would be: tool throws → outer `catch`
entered → `logToolCall(clientIdentity(...))` evaluates `clientIdentity()`
first → it throws → the `catch` block itself throws before reaching
`logToolCall` or `throw err`. Net effect: zero log lines (not even the
`ok:false` one) and the *original* error replaced by this new one further
up the stack — the worst version of "instrumentation broke the call,"
compounded by "and now nobody can tell why the original request failed."

**Fix**: wrapped the accessor itself, once, in `src/app/mcp/route.ts`:

```ts
function clientIdentity(server: McpServer): string | undefined {
  try {
    const info = server.server.getClientVersion();
    return info ? `${info.name}/${info.version}` : undefined;
  } catch {
    return undefined;
  }
}
```

This makes the function itself unable to throw, which makes it safe to
call from anywhere (call-site location no longer matters) — the smaller
fix the coordinator asked for, done once rather than duplicated at every
call site.

**Covering test**: no new test targets `clientIdentity()` in isolation
(it has no reachable failure mode to simulate without mocking the SDK's
internal `Server` class, which would test a mock rather than the real
accessor). It is, however, exercised on every call in
`src/lib/mcp/instrument.test.ts` and by the live HTTP verification below
and in the original report — all pass with `client` correctly present or
absent.

## Important 2 — the exception-path invariant had no automated test

**Refactor**: extracted the try/catch-and-log pattern out of the three
duplicated per-tool blocks in `src/app/mcp/route.ts` into one shared,
directly-testable function, `runInstrumented()`, in new file
`src/lib/mcp/instrument.ts`. All three tool handlers in `route.ts` now
call it instead of hand-rolling their own try/catch — this is a
behavior-preserving refactor (verified by the live HTTP re-check below),
and it also cuts `route.ts` by about 30 lines despite the added
`get_component`/`search_components` `describeSuccess` callbacks.

`runInstrumented(tool, common, fn, describeSuccess?)`:
- Runs `fn`, logs exactly one line, returns or rethrows.
- `common` (client/queryHash/componentId) is attached to both the
  success and the failure line.
- `describeSuccess(result)` supplies success-only fields and may override
  `ok` from the resolved value (`get_component` logs `ok: result.found`,
  not `ok: true`, even though nothing threw); when omitted, `ok: true`.

**New test file**: `src/lib/mcp/instrument.test.ts`, four tests. The two
that matter for this finding:

```ts
it("logs exactly one ok:false line and still rethrows when the handler throws", async () => {
  const spy = vi.spyOn(console, "log").mockImplementation(() => {});
  const boom = new Error("boom");
  await expect(
    runInstrumented("test_tool", { queryHash: "abc123" }, () => {
      throw boom;
    }),
  ).rejects.toThrow(boom);
  expect(spy).toHaveBeenCalledTimes(1);
  const payload = JSON.parse(spy.mock.calls[0][0] as string);
  expect(payload.ok).toBe(false);
});
```
(and the same shape for a rejected async handler). Both assert
`toHaveBeenCalledTimes(1)` — exactly one line, not "at least one" — and
both assert `.rejects.toThrow(boom)`, i.e. the *original* error, proving
it isn't swallowed or replaced.

Command and output (current, correct implementation):
```
npx vitest run src/lib/mcp/instrument.test.ts
 Test Files  1 passed (1)
      Tests  4 passed (4)
```

**Evidence the guard bites**: temporarily reverted `runInstrumented`'s
body to the brief's original (buggy) shape — the success-path log call
placed after `await fn()` with no try/catch at all — backed up the
correct file first, then reran the exact same test file:

```
npx vitest run src/lib/mcp/instrument.test.ts
```
```
 ❯ src/lib/mcp/instrument.test.ts (4 tests | 2 failed) 9ms
     × logs exactly one ok:false line and still rethrows when the handler throws
     × logs exactly one ok:false line and rethrows for a rejected async handler

 FAIL  src/lib/mcp/instrument.test.ts > runInstrumented > logs exactly one ok:false line and still rethrows when the handler throws
AssertionError: expected "log" to be called 1 times, but got 0 times
 ❯ src/lib/mcp/instrument.test.ts:48:17

 FAIL  src/lib/mcp/instrument.test.ts > runInstrumented > logs exactly one ok:false line and rethrows for a rejected async handler
AssertionError: expected "log" to be called 1 times, but got 0 times

 Test Files  1 failed (1)
      Tests  2 failed | 2 passed (4)
```

Exactly the regression this test exists to catch: 0 calls instead of 1,
the two success-path tests still pass (irrelevant to this bug), and this
is precisely the shape a future "simplify away the try/catch" refactor
would produce. Restored the correct file from the backup immediately
after, then reran to confirm green again (4/4 passed, shown above).

## Full verification after both fixes

```
npx tsc --noEmit
```
Clean, no output, exit 0.

```
npx vitest run
 Test Files  16 passed (16)
      Tests  219 passed (219)
```
(219 = the prior 215 + 4 new tests in `instrument.test.ts`.)

**Live HTTP re-check** (dev server restarted, `✓ Ready`), same four calls
as the original report, to confirm the refactor didn't change runtime
behavior:

```
{"evt":"mcp_tool","tool":"list_categories","ok":true,"ms":0,"day":"2026-09-16"}
{"evt":"mcp_tool","tool":"get_component","ok":true,"componentId":"toast-slide","ms":0,"day":"2026-09-16"}
{"evt":"mcp_tool","tool":"get_component","ok":false,"componentId":"nonexistent-xyz","ms":3,"day":"2026-09-16"}
{"evt":"mcp_tool","tool":"search_components","ok":true,"queryHash":"a90f9f0763d1","results":3,"zeroResults":false,"degraded":false,"ms":3471,"day":"2026-09-16"}
```
All four calls returned HTTP 200 with the expected payload shapes.
Dev server killed afterward; port 3000 confirmed free.

## Commit

SHA: `3ff95cd53eeed5623aacc487d8744f6c375bf170` on branch `mcp`.
Files: `src/app/mcp/route.ts`, `src/lib/mcp/instrument.ts`,
`src/lib/mcp/instrument.test.ts`. No `Co-Authored-By` or "Generated
with" trailer.
