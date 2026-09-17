# SDD ledger — plan: docs/superpowers/plans/2026-09-16-nudaui-mcp-server.md

Spec: docs/superpowers/specs/2026-09-16-nudaui-mcp-server-design.md (read)
Branch: mcp. BASE at start: d3264e5
Models: sonnet implementers; opus review on Task 2 (core) and final branch review.

## Pre-flight conflict scan

### Cross-task rows (tasks sharing a file or interface)

| Tasks | Shared | Produced vs consumed | Finding |
|---|---|---|---|
| T1 ↔ T6 | README.md | T1 adds guard asserting README counts == registry; T6 adds a section quoting "1,503 components" and "81 categories" | CONSISTENT — T6's strings match the regexes and the registry. T6 Step 3 re-runs the guard. |
| T2 ↔ T3 ↔ T4 ↔ T5 | src/lib/mcp/tools.ts | T2 listCategories; T3 getComponent; T4 searchComponentsTool/localSearch/SearchHit; T5 wraps handlers | Sequential appends, no overlap. FINDING: T4 uses `allComponents` which T3 already imports — duplicate-import risk. |
| T2 ↔ T3 ↔ T4 ↔ T5 | src/app/mcp/route.ts | each registers one more tool / wraps handlers | FINDING: T2's route.ts imports `site` but nothing uses it until T3's error message. |
| T4 ↔ T5 | search handler | T4 returns {query,degraded,count,results}; T5 logs count/degraded | CONSISTENT — field names match. |
| T3 ↔ T4 | @/lib/component-payload | both consume allComponents/FlatComponent (component, categoryId, categoryLabel) | CONSISTENT — verified against src/lib/component-payload.ts. |
| T2 ↔ T7 | /mcp endpoint | T2 creates route; T7 documents URL | CONSISTENT — no code overlap. |

### Per-task self-consistency rows

| Task | Tests vs code | Files created vs later touched | Finding |
|---|---|---|---|
| T1 | guard regex captures "1,516" on both README lines (verified by grep: exactly 2 component claims, 2 category claims) | README.md, new test | CONSISTENT |
| T2 | test imports listCategories; impl exports it | tools.ts created here, appended by T3/T4 | FINDING: unused `site` import (see above) |
| T3 | "PASS, 5 tests" = T2's 2 + 3 new | appends tools.ts / route.ts | CONSISTENT |
| T4 | "PASS, 10 tests" = 5 + 3 localSearch + 2 searchComponentsTool | appends tools.ts / route.ts | FINDING: the hasJS test reaches the live rag.nudaui.dev — slow and network-dependent |
| T5 | "PASS, 4 tests" = 3 hashQuery + 1 logToolCall | new log.ts, appends route.ts | CONSISTENT |
| T6 | no tests of its own; reuses T1's guard | server.json, README | FINDING: server.json `$schema` URL is unverified |
| T7 | grep-based acceptance in Step 6 | 5 content files | CONSISTENT — prose steps acknowledged in plan self-review, each has an acceptance check |

### Rulings (made before dispatch)

Ruling: T2 omits the `site` import from route.ts; T3 adds it when registering get_component — tsconfig has no noUnusedLocals so it would not fail the build, but it would ship dead code through a review. Cost if wrong: none, trivially reversible.

Ruling: T4's "filters to CSS-only components when hasJS is false" test pins NEXT_PUBLIC_RAG_API_URL to the unreachable 127.0.0.1:9 for its duration. The assertion is about filtering, not ranking, and the filter runs identically on both paths — pinning makes it deterministic and offline-safe instead of depending on a live external service. Cost if wrong: the test no longer exercises filtering over real RAG output; the live path is still covered by Task 4 Step 6's HTTP check.

Ruling: T4 must reuse the `allComponents` import T3 added rather than re-importing it. Cost if wrong: a duplicate-identifier compile error, caught immediately by tsc.

Ruling: server.json's `$schema` URL is kept as written and flagged for the maintainer to confirm at publish time. Publishing is out of scope for this branch and `mcp-publisher` validates the document before upload, so an unverified URL cannot ship silently. Cost if wrong: one edit before publishing.

## Progress

Task 1: complete (commits d3264e5..46b9c6f, review clean)
Task 1: minor (deferred): guard test's toLocaleString("en-US") grouping would stop matching if totalCount ever dropped below 1,000. Theoretical at 1,503; not actionable now.
Task 2: opus review = CHANGES REQUESTED. 2 Important (untested /mcp entry in OPAQUE_PATHS; missing serverInfo so clients display "mcp-typescript server on vercel"/0.1.0), 3 Minor.
Task 2: Ruling: the implementer's out-of-brief edit to negotiation-routes.ts stands. src/proxy.ts is Next 16's middleware — it was 406ing every MCP client before the request reached the route, so without this the endpoint does not work at all. Reviewer verified the alternative (isApiPath) would 405 every POST, and that OPAQUE_PATHS has exactly one consumer. Cost if wrong: a one-line revert.
Task 2: Ruling: promoting the reviewer's "hardcoded 1,503 in route.ts comment" Minor into fix round 1. It violates the plan's Global Constraint against un-guarded totals, and constraint violations should not be deferred. Cost if wrong: one comment edit.
Task 2: minor (deferred): no OPTIONS export / CORS headers on /mcp — browser-hosted clients such as MCP Inspector will fail preflight. Out of plan scope; flagged for final-review triage.
Task 2: fix round 1/5 (4 addressed, 0 open; commits cd56f7d..9723b70)
Task 2: complete (commits 46b9c6f..9723b70, review clean). Server identity is serverInfo {name:"nudaui",version:"1.0.0"}. /mcp added to OPAQUE_PATHS in negotiation-routes.ts and covered by negotiation-routes.test.ts.
Task 3: review = CHANGES REQUESTED. 2 Important (one root cause: unknown-id recovery points at /components, the client-rendered SPA the repo's own code documents as unscrapable by agents, instead of /api/registry.json; and it hand-rolls a message diverging from the shared componentNotFound envelope), 1 Minor.
Task 3: Ruling: the finding wins over the plan text. The plan's Task 3 Step 5 literally specifies the "/components" message, so this finding conflicts with what the plan mandates — but the spec's stated intent for the unknown-id path is that an agent can RECOVER, and /components cannot be enumerated by a text-only agent (see the comment in src/app/api/components/[id]/route.ts saying exactly that). /api/registry.json exists for this purpose and is what api-error.ts's componentNotFound already points to. Fixing to match the spec's intent over the plan's letter. Cost if wrong: a one-line string change, trivially reverted.
Task 3: minor (deferred): tools.test.ts hardcodes "toast-slide-xyz-nope", coupling the suggestion test to the continued existence of a toast-slide-family id. Came verbatim from the brief, not the implementer's choice.
Task 3: fix round 1/5 (6 addressed, 0 open; commits 8324821..2b19438)
Task 3: complete (commits 9723b70..2b19438, review clean). Unknown-id recovery now returns a `hint` field built in tools.ts, wording identical to componentNotFound() in api-error.ts, pointing at /api/registry.json. The dead `site` import was removed from route.ts as a result.
Task 4: review = CHANGES REQUESTED. 1 Critical (k = min(20, limit*2) collapses to limit for limit>=10, so the over-fetch the function's own docstring promises does not happen at the top of the allowed range), 1 Important (unused @/lib/rag client — the brief's Interfaces block says consume it, its Step 3 code reimplements fetch inline), 1 Important (2xx with unusable body or all-stale ids reports degraded:false, masking index/registry drift as a healthy empty result), 1 Minor.
Task 4: Ruling: the brief contradicts itself on @/lib/rag and I am resolving it in favour of the Interfaces block — reuse the hardened client. It already validates response shape via isRagResult, which also fixes part of the degraded-accuracy finding, and it accepts an AbortSignal so the spec's 6s budget survives. The reason the brief wrote a local ragBaseUrl() was to let tests pin the env var at call time, since rag.ts captures RAG_API_URL at module load; that is a testing problem, so it gets a testing fix — stub fetch instead of the env var. Cost if wrong: the tool keeps its own fetch and we lose shape validation; ~30 lines to revert.
Task 4: Ruling: "degraded" must distinguish registry drift from a genuinely empty search. If the index returns zero raw hits that is a real empty result (degraded:false); if it returns hits but none resolve against the registry, that is drift and must report degraded:true. Cost if wrong: an over-eager degraded flag on a rare edge, visible in logs.
Task 4: fix round 1/5 (4 addressed, 0 open; commits bd0333e..16d3011)
Task 4: complete (commits 2b19438..16d3011, review clean). Confirmed empirically: rag.nudaui.dev hard-caps k at 20 (k=21 -> HTTP 422), so no over-fetch headroom exists at limit>=10; docstring now states this rather than overpromising. Tool reuses ragSearch/RagError from @/lib/rag with AbortSignal.timeout(6000). degraded:true now also signals index/registry drift.
Task 5: review = APPROVED with 2 Important flagged as non-blocking (clientIdentity() evaluated outside logToolCall's try/catch could yield ZERO lines if it ever threw; no automated test for the exactly-one-line-on-throw invariant).
Task 5: Ruling: running the fix loop anyway despite the APPROVED verdict. Both findings are silent-data-loss risks on the instrument whose four-week readout decides whether the project continues, and both are small. The reviewer confirmed neither is reachable today, so this is cheap insurance, not a disputed defect. Cost if wrong: one extra fix round on an already-approved task.
Task 5: Client identity IS reachable: server.server.getClientVersion(), fed per-request from _meta. Legacy clients leave it unset, so client counts are a FLOOR, not complete — this is disclosed in route.ts and must be carried into any reporting.
Task 5: fix round 1/5 (2 addressed, 0 open; commits 9a73991..3ff95cd)
Task 5: complete (commits 16d3011..3ff95cd, review clean). Shared runInstrumented() helper in src/lib/mcp/instrument.ts wraps all three tools; exactly-one-line-on-throw is now covered by a test proven to fail without it. 219 tests passing.
Task 6: review = APPROVED (re-dispatched after the first reviewer was lost to a session restart). Both disclosed deviations independently verified correct: the 2025-12-11 schema is current, and `status` is genuinely absent from its valid top-level properties (registry-managed, returned only in API responses).
Task 6: complete (commits 3ff95cd..f91423e, review clean).
Task 6: Important (informational, nothing to fix in shipped files): the brief's premise for the `mcp-name:` README line is wrong for THIS publish path. README-token scanning validates ownership only for PyPI/NuGet/Cargo package ownership; a GitHub-namespace, remote-only, package-less server is verified purely by OAuth device flow. The line is harmless and correctly formatted, but it is not doing the job the brief claimed. Correct the claim in the spec/plan prose, not in server.json or README.
Task 7: review = APPROVED. 1 Minor (the implementer's deviation write-up claimed neither wrapper file contains prose; developers/page.tsx does carry a hardcoded `lead` string — harmless, report-accuracy nit only, nothing to fix in code).
Task 7: complete (commits adfe84b..b63a2b0, review clean). Content landed in src/lib/agent-guidance.ts and src/lib/pages/developers.ts rather than the route/page wrappers the brief named; reviewer verified that is the correct layer.
Task 7: minor (deferred): pre-existing stale literal `"components": 1022` in a JSON example at src/lib/pages/developers.ts:166,196 — untouched by this branch, but it is the same stale figure that misled the originating brief. Worth fixing; flagged for final-review triage.

## Final whole-branch review (opus)

Verdict: CHANGES REQUESTED. 1 Critical, 7 Important, ~7 Minor. Cross-task coherence judged good, not sediment; the remaining seams are all in the three tools' OUTPUT CONTRACT, not their internals.
Critical #1: the pre-declared stopping criterion is structurally unmeasurable. `client` comes only from _meta clientInfo, which is SHOULD-not-MUST, with NO fallback identity — so "distinct clients per day" can collapse into a single `undefined` bucket and the four-week go/no-go loses one of its four metrics. Found only because the reviewer read the spec's experiment design against the log shape; no per-task review was positioned to see it.
Important #4 is the clearest cross-task gap in the branch: Task 1 built the README total guard, Task 6 then wrote an unguarded "1,503" into server.json, and neither task's reviewer saw both halves.
Final review: ONE fix wave dispatched covering #1-#6 plus the cheap minors. #7 (cold-start behaviour on real Vercel) cannot be closed without a preview deployment and is surfaced to the maintainer. #8 (abuse ceiling / spend limit) is a maintainer console action, not code.
Deferred-minor triage from the final review: T1 toLocaleString grouping -> leave; T2 CORS -> fix now; T3 hardcoded toast-slide-xyz-nope -> leave; T7 stale 1022 -> fix now, blocking.
Final fix wave: ALL 14 FINDINGS ADDRESSED (commits b63a2b0..43e8275, 4 commits). Re-review on opus independently reproduced 240/240 tests, clean tsc, successful next build, and verified live over HTTP: CORS preflight 204 with all four headers, /api/mcp -> 308 -> /mcp, a captured log line carrying uaHash with client absent (proving the metric gap was real and is now covered), componentId normalization, and that the tools/list request-body tee does not consume the stream the handler needs.
Final fix wave: Ruling: parking the one residual finding rather than opening a second fix wave. Two places still say the semantic index was "unreachable" instead of "did not respond in time" — src/lib/pages/developers.ts:281 (public surface) and the src/lib/mcp/tools.ts:141 docstring. The shipped tool response itself was corrected and is asserted by a test, so the user-visible contract is right; these two are prose that now lags it. The process allows exactly one fix wave after the final review, and a one-word cosmetic inconsistency does not justify reopening it. Cost if wrong: a two-word edit on a page nobody has read yet.
