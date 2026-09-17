# MCP server — session handoff

**Written:** 16 September 2026, mid-execution.
**Branch:** `mcp` (never commit this work to `main`).
**Purpose:** everything a fresh session needs to finish this work without
re-deriving it. Read this first, then the spec, then the plan.

| Document | Path |
| --- | --- |
| Design / spec (the binding authority) | `docs/superpowers/specs/2026-09-16-nudaui-mcp-server-design.md` |
| Implementation plan (7 tasks) | `docs/superpowers/plans/2026-09-16-nudaui-mcp-server.md` |
| Session record: ledger + per-task reports | `docs/superpowers/handoff/session-record/` |
| Originating brief | the MCP project document in `CLAUDE.md` |

---

## 1. How to resume

The execution ledger is `session-record/progress.md`. It is the recovery map:
tasks with a `Task <N>: complete` line are done, and the commits it names
exist in git even if nothing else survives. Trust it and `git log` over any
recollection.

Work is executed with the `superpowers:subagent-driven-development` skill:
one fresh subagent per task, a review after each, a fix loop of at most five
rounds, then a whole-branch review at the end. A live copy of the ledger and
the briefs sits in `.superpowers/sdd/2026-09-16-nudaui-mcp-server/`, which is
git-ignored — `session-record/` is the committed snapshot of it.

**Model policy in force** (from the user's global preferences): sonnet for
implementers, **opus for reviews of core tasks and for the final branch
review**. Always name the model explicitly when dispatching; omitting it
inherits the most expensive one.

---

## 2. State as of this writing

Commits on the branch, oldest first:

```
237fd62 docs: design for the NudaUI remote MCP server
d3264e5 docs: implementation plan for the remote MCP server
46b9c6f fix: correct README component count and guard it against drift
cd56f7d feat: add /mcp endpoint with list_categories tool
9723b70 fix: /mcp review round 1 — server identity, test coverage, drift-proof comment
8324821 feat: add get_component MCP tool
2b19438 fix: point get_component's unknown-id recovery at the JSON registry
bd0333e feat: add search_components MCP tool with graceful degradation
16d3011 fix: honest over-fetch docstring, reuse RAG client, detect index drift
edff06a docs: commit the MCP session handoff and decision trail
9a73991 feat: instrument MCP tool calls
3ff95cd fix: make MCP client-identity lookup failure-safe, test exception-path logging
f91423e docs: add server.json and MCP server section to README
```

| Task | Status |
| --- | --- |
| 1 — README count fix + drift-guard test | complete, review clean |
| 2 — `/mcp` route + `list_categories` (core) | complete, opus review, 1 fix round |
| 3 — `get_component` | complete, 1 fix round |
| 4 — `search_components` | complete, 1 fix round |
| 5 — instrumentation | complete, 1 fix round |
| 6 — `server.json`, `mcp-name:`, README section | complete, review clean |
| 7 — agent-facing surfaces | complete, review clean |
| Final whole-branch review (opus) | complete — 14 findings, all fixed and re-verified |

Suite: **219 tests passing**, `npx tsc --noEmit` clean.

`npm run build` was run against this state and succeeded: `/mcp` compiles as
`ƒ (Dynamic)` — server-rendered on demand, which is correct for an MCP
endpoint. Everything before that had only been verified against `next dev`, so
this is the first confirmation the route survives a production build.

**All seven tasks and the final whole-branch review are complete.** The final
review raised 14 findings and every one was fixed in a single wave and
re-verified on a more capable model, including live HTTP checks. Suite:
**240 passing**, `tsc` clean, `next build` succeeds.

The finding worth knowing about: **the project's own stopping criterion was
unmeasurable.** `client` identity came only from `_meta` clientInfo, which the
spec is SHOULD-not-MUST about, with no fallback — so "distinct clients per day"
could have collapsed into a single `undefined` bucket and the four-week go/no-go
would have lost one of its four metrics. A hashed `uaHash` bucket now
complements it. No per-task review was positioned to catch this; it took
reading the experiment's design against the log shape.

**One residual, deliberately parked.** Two places still say the semantic index
was "unreachable" rather than "did not respond in time":
`src/lib/pages/developers.ts:281` and the `src/lib/mcp/tools.ts:141` docstring.
The shipped tool response itself was corrected and is asserted by a test, so
the user-visible contract is right and only the prose lags. Two words, whenever
convenient.

**Still open for the maintainer, and not closable from a session:** cold-start
behaviour on a real Vercel deployment. Everything is verified against
`next dev` and a successful production build, but the index itself cold-starts
for several seconds against a 6-second budget, so expect a burst of
`degraded: true` on cold paths. Check this on a preview deployment before
announcing. Also set a Vercel spend limit or firewall rule before
distribution — this is the site's first unauthenticated, uncached POST
endpoint that fans out to an external service per call.

**Previously: where work stopped.** Task 6 is complete and its review came back clean.
Both of its deviations were independently verified: the `2025-12-11` schema is
current (the plan's `2025-07-09` was stale), and `status` is genuinely not a
publisher-submitted property — it is registry-managed and appears only in API
responses.

That review also corrected a premise carried from the originating brief: the
`mcp-name:` README line does **not** validate ownership for this server.
README-token scanning is the mechanism for PyPI/NuGet/Cargo *package*
ownership only. A GitHub-namespace, remote-only, package-less server is
verified purely through the OAuth device flow, with a token that needs no
repository scopes. The line is correctly formatted and harmless, so it stays —
but do not rely on it, and do not repeat the claim.

Work stopped before Task 7 and the final whole-branch review.

The branch is **not merged to main**. Merging triggers a Vercel deploy and puts
`/mcp` live, which is a deliberate decision left to the maintainer.

---

## 3. Corrections to the originating brief

Two premises in the project document were false by the time work started.
They were verified against the live deployment, not assumed.

**The catalog debt was already fixed.** The brief says `catalog.json` reports
1,022 components dated 31 August 2026 and calls regenerating it the blocking
first task. In fact `/api/catalog.json` is not a checked-in file — it is a
`force-static` route computed from the registry at build time. The live
endpoint answers `"generatedAt": "2026-09-16T08:48:39.781Z"` with
`{"components": 1503, "categories": 81}`. Nothing needed regenerating.

**The README was the artifact that had drifted.** The registry computes
`totalCount = 1503`; the README claimed **1,516** in two places with no test
guarding it. Since that number feeds `server.json` and every directory
listing, Task 1 was repointed at fixing the README and adding
`src/lib/readme-claims.test.ts`, which fails `prebuild` if prose and registry
ever disagree again.

**A third change, from outside the repo.** MCP reached revision
**2026-07-28**, which removes session tracking from the protocol core — no
`initialize`/`initialized` handshake, no `Mcp-Session-Id`. Good for a Vercel
deployment, but it invalidates a metric the brief asks for. See §6.

---

## 4. Discoveries that were in no plan

These came out of review and would not have been found by reading the brief.

**The endpoint did not work for real MCP clients.** In Next 16 the middleware
is `src/proxy.ts`, and its `Accept`-header content negotiation returned **406**
to any client sending `Accept: application/json, text/event-stream` — which is
every MCP client — before the request ever reached the route. Fixed by adding
`/mcp` to `OPAQUE_PATHS` in `src/lib/negotiation-routes.ts`. The alternative
(`isApiPath()`) was checked and would have 405'd every POST. A test in
`src/lib/negotiation-routes.test.ts` now fails if that line is removed; without
it, deleting one line would silently kill the whole server with a green suite.

**The server had no identity.** `createMcpHandler` was called without
`serverInfo`, so `initialize` reported the package default
`"mcp-typescript server on vercel"` version `0.1.0`. That string is what every
client UI and the registry listing displays — on a project whose entire
purpose is discovery. Now `{ name: "nudaui", version: "1.0.0" }`.

**The semantic index hard-caps `k` at 20.** Probed directly: `k=20` succeeds,
`k=21` and `k=40` return HTTP 422 `"Input should be less than or equal to 20"`.
So `search_components` cannot over-fetch at `limit >= 10`, and its docstring
now says so instead of promising headroom that does not exist.

**`/components` is useless to an agent.** The unknown-id recovery path
originally pointed there, but it is a client-rendered SPA — this repo's own
comment in `src/app/api/components/[id]/route.ts` says an agent cannot scrape
it. Recovery now points at `/api/registry.json`, wording identical to
`componentNotFound()` in `src/lib/api-error.ts`.

---

## 5. Architecture as built

```
src/app/mcp/route.ts          createMcpHandler + 3 registerTool calls
src/lib/mcp/tools.ts          pure tool logic, no HTTP, no SDK — unit-tested
src/lib/mcp/tools.test.ts     13 tests
src/lib/mcp/log.ts            (Task 5, in progress)
```

Route config: `runtime = "nodejs"`, `maxDuration = 60`, handler exported as
both `GET` and `POST`. Stateless — no session storage, any request can land on
any instance. `/api/mcp` 308-redirects to `/mcp` via `next.config.ts`.

Exported interfaces other tasks consume:

- `listCategories(): { total, categoryCount, categories: CategorySummary[] }`
- `getComponent(id): { found: true, component } | { found: false, id, hint, suggestions }`
- `localSearch(query, limit): SearchHit[]`
- `searchComponentsTool(args): Promise<{ query, degraded, count, results }>`

**Data access is in process.** The route imports the registry directly, the
same path `/api/catalog.json` uses. It must never `fetch()` nudaui.dev from
inside itself — a function calling its own deployment adds latency, cold
starts and CDN staleness. The one permitted outbound call is to
`rag.nudaui.dev` for ranking, via the hardened client in `src/lib/rag.ts`
with `AbortSignal.timeout(6000)`. That call supplies ranking only; content is
always hydrated from the local registry.

`degraded: true` means either the index was unreachable **or** it returned
hits that no longer resolve against the registry (drift). Zero raw hits is a
legitimate empty result and reports `degraded: false`.

---

## 6. The metric that changed, and why it matters

The brief's §7 asks the four-week readout to report **unique sessions**.
Revision 2026-07-28 deleted sessions from the protocol, so that quantity does
not exist to be counted. The nearest honest proxy is distinct client identity
bucketed by day.

This is not a footnote. The project's §10 defines a stopping criterion — if
neither referrers nor sessions move in four weeks, the experiment has answered
its question and stops. A readout that silently substitutes a different metric
would undermine the one thing that separates this attempt from the previous
three. **Report it as "distinct clients per day", never as sessions.**

Task 5 is additionally checking whether client identity is reachable at all
from `mcp-handler@2.1.1`. If it is not, the field stays unset and the report
says so rather than fabricating it.

---

## 7. What remains

**Task 6 review — do this first.** The code is committed at `f91423e` but was
never reviewed; see §2 for the two unverified deviations.

**A `description` decision for the maintainer.** `server.json`'s `description`
is the highest-return text in the project — in several MCP directories it is
the only indexed string. The committed value is the plan's default. Task 6's
report (`session-record/task-6-report.md`) contains one alternative with
reasoning. This should be chosen deliberately rather than inherited.

**Task 7 — agent-facing surfaces.** Add the endpoint to `ai.txt`, `llms.txt`,
`llms-full.txt`, `agent-instructions.md` and `/developers`. These files already
have agent readers that do not know the server exists. Keep the "no npm
package and no CLI" sentence in `ai.txt` — it stays true; a server-side
dependency is not something a user installs.

**Final whole-branch review on opus**, then
`superpowers:finishing-a-development-branch`.

---

## 8. Explicitly NOT in this branch

These need the maintainer's hands or accounts, and the user scoped them out:

- Publishing to the MCP registry (`mcp-publisher init` / `publish` — interactive GitHub auth).
- Recording the demo clip.
- Capturing the traffic baseline immediately before distribution.
- Any distribution: newsletter, LinkedIn, Instagram, Reddit, X.
- Setting GitHub repo topics and the `awesome-mcp-servers` PR.

Also deliberately out of scope per the spec: authentication, writes of any
kind, component generation, rendered preview, sophisticated caching, and any
claim of support for MCP clients that were not actually tested.

**Verification honesty:** the endpoint has been exercised over real HTTP
against `next dev` — `tools/list` plus each of the three tools, including the
unknown-id path and a forced index outage. It has **not** been connected to a
desktop MCP client, because that needs the maintainer's machine and a public
URL. Do not record client verification that was not run.

---

## 9. Deferred minor findings

Carried forward for the final review to triage; none block merge on their own.

- No `OPTIONS` export or CORS headers on `/mcp` — browser-hosted clients such
  as MCP Inspector will fail preflight. Out of plan scope; worth deciding
  before publishing, since Inspector is a likely first test client.
- `tools.test.ts` hardcodes `"toast-slide-xyz-nope"`, coupling the suggestion
  test to the continued existence of a `toast-slide`-family id.
- The README guard's `toLocaleString("en-US")` grouping would stop matching if
  `totalCount` ever fell below 1,000. Theoretical at 1,503.

---

## 10. Verification commands

```bash
npx vitest run          # full suite — 211 passing at last green point
npx tsc --noEmit        # must be silent

# exercise the endpoint (start `npm run dev` in the BACKGROUND first, then kill it)
curl -sS -X POST http://localhost:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

Never run `npm run dev` in the foreground from an agent session — it does not
exit and will hang the turn.
