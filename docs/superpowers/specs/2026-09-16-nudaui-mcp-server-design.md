# NudaUI — Remote MCP Server

**Status: design approved, not yet implemented.**
Branch: `mcp`. Target: `https://nudaui.dev/mcp`.

---

## Problem

NudaUI has a discovery problem, not a product problem. Over the 14 days closing
14 September 2026 the repository saw 40 views from 20 unique visitors, and the
single largest referrer was `chatgpt.com` (16 views, 8 unique). No platform from
the previous two launches — LinkedIn, Reddit, Product Hunt, DEV.to, daily.dev —
appears in the referrer table at all.

The 97 clones from 62 unique cloners are not adoption. Nobody clones a
repository they never visited; most of that is mirrors, indexers and foreign CI.

The one channel showing real signal is assistants. The hypothesis this project
tests: if assistants are the channel that works, investment belongs where
assistants and their users look for tools, not in another round of posts.

The MCP server is not the product. It is the channel.

## Corrections to the originating brief

Two premises in the working document were verified against the live deployment
on 16 September 2026 and no longer hold. They are recorded here so the plan is
not built on them.

**The catalog debt described as blocking is already resolved.** The brief states
that `catalog.json` reports 1,022 components with a `generatedAt` of 31 August
2026 while the project stands at 1,503. In fact `/api/catalog.json` is not a
checked-in artifact — it is a `force-static` route computed from the registry at
build time (`src/app/api/catalog.json/route.ts`). The live endpoint currently
answers:

```json
"generatedAt": "2026-09-16T08:48:39.781Z",
"totals": { "components": 1503, "categories": 81 }
```

Regeneration is therefore already automatic and already correct. Work item 1 of
the brief's order of work is complete as written.

**The README is the artifact that is now wrong.** The registry computes
`totalCount = 1503` across 81 categories with 1,503 unique ids. `README.md`
claims **1,516** at lines 35 and 40, and no test guards the claim. Since that
number feeds the `server.json` description — which the brief correctly
identifies as the highest-return text in the project — the drift has to be
fixed before publishing, and prevented from recurring.

**One further change, from outside the repository.** The MCP specification
reached revision **2026-07-28**, which removes session tracking from the
protocol core: no `initialize`/`initialized` handshake, no `Mcp-Session-Id`.
Protocol version, client identity and capabilities now travel in a `_meta`
parameter on each request. This is favourable for a Vercel deployment, but it
invalidates one metric the brief asks for. See *Instrumentation*.

## Goals

1. A remote MCP endpoint at `https://nudaui.dev/mcp`, zero installation, three
   read-only tools.
2. Usage instrumentation from the first deploy.
3. The repository prepared for registry publication: `server.json`, the
   `mcp-name:` line, a README section. (Correction recorded during the final
   review: for this publish path — GitHub namespace, remote-only,
   package-less — the `mcp-name:` line is not what validates ownership;
   that happens purely through the OAuth device flow. README-token scanning
   validates ownership only for PyPI/NuGet/Cargo *package* publishes. The
   line is still correctly formatted and worth keeping, just not
   load-bearing the way earlier drafts of this document claimed.)
4. The endpoint present on every agent-facing surface the project already
   owns.
5. Catalog claims that cannot drift from the registry again.

## Non-goals

Authentication. Writes of any kind. Component generation. Rendered preview.
Sophisticated caching. An npm package. Declared support for every MCP client —
we verify a small number and document exactly which.

## Architecture

The endpoint is a route in the existing Next.js 16 application, deployed on
Vercel (confirmed via `Server: Vercel` and `X-Nextjs-Prerender` response
headers). There is no `output: "export"`, so a server runtime is available and
streamable HTTP is viable. This resolves the brief's pending runtime decision.

```
src/app/mcp/route.ts        createMcpHandler, three tools, logging
src/lib/mcp/tools.ts        pure tool logic, unit-testable without HTTP
src/lib/mcp/log.ts          one structured JSON line per call
```

Dependencies: `mcp-handler@^2`, `@modelcontextprotocol/server@^2`, `zod@^4`.
These are server-side only and never reach a user's clipboard, so the
zero-dependency promise in `ai.txt` — which is about what you paste — remains
true and its wording stays unchanged.

### Data access

Tools read the registry **in process**, importing `categories`,
`componentPayload` and `categoryDescriptions` exactly as
`/api/catalog.json` and `/api/components/[id]` already do.

The brief specifies "leyendo de la API existente". This design deviates on that
one point: a function fetching its own deployment over HTTP adds latency, cold
starts and a failure mode, and can be served a stale copy by the CDN — the very
class of bug the brief's section 2 is about. In-process import is the same data
produced by the same code path with fewer ways to fail. Approved deviation.

### Route configuration

```ts
export const runtime = "nodejs";
export const maxDuration = 60;
export { handler as GET, handler as POST };
```

Path is `/mcp`, not `mcp-handler`'s conventional `/api/mcp`, because
`server.json` and every directory listing will carry that URL. A 308 redirect
`/api/mcp → /mcp` is added to `next.config.ts`, matching the existing alias
pattern for `/docs`, `/developer` and `/api`.

Being stateless under 2026-07-28, the route holds no shared state and needs no
session storage; any request can land on any instance.

## Tools

### `search_components`

| Input | Type | Notes |
| --- | --- | --- |
| `query` | string, min 3 | natural language |
| `category` | string, optional | category id |
| `hasJS` | boolean, optional | filter to CSS-only or JS-bearing |
| `limit` | int 1–20, default 8 | |

Calls `rag.nudaui.dev/search?q=&k=`, the semantic index already backing the
site's `/search` page and verified live during design. It over-fetches roughly
2× so post-filtering still returns a full page, hydrates every hit from the
local registry, applies `category`/`hasJS`, then truncates to `limit`.

The RAG service is a separate deployment and therefore a real dependency. On
error or timeout (6s budget) the tool falls back to local token matching over
component names, ids and categories, and states in its response that ranking was
degraded. A search tool that returns worse results beats one that returns an
error.

Returns id, name, category, languages, `hasJS`, `page` and `anchor` per hit.

### `get_component`

Input `id`. Returns `componentPayload()`: every code tab, `cssInline`, page URL,
license and attribution — identical in shape to `/api/components/{id}.json`, so
an agent that has seen one already understands the other.

An unknown id returns near-matches rather than a bare failure, reusing
`not-found-map.ts`, which already performs that job for the HTML 404.

### `list_categories`

No input. All 81 categories with id, label, description, `componentCount` and
URL. The `categoryDescriptions` copy explains when to reach for each family,
which is what an agent needs to choose well on a vague request.

Three tools. A fourth is declined by default until real usage asks for it.

### Link-back

Every result carries `page` and `anchor` URLs to nudaui.dev. This pre-empts the
brief's section 7 outcome "hay sesiones pero cero referrers", whose prescribed
remedy is exactly this — applied from day one rather than after four weeks of
measurement.

## Instrumentation

One structured JSON line per invocation to stdout, read through Vercel logs. No
new dependency, no database.

```json
{"evt":"mcp_tool","tool":"search_components","ok":true,"ms":142,
 "client":"claude-code/2.1","uaHash":"464fb1912d16","queryHash":"a3f1c9e02b7d",
 "results":8,"hydratedCount":8,"zeroResults":false,"degraded":false,
 "day":"2026-09-16"}
```

(Corrected from an earlier draft's `q_hash`/`zero_results`: the shipped field
names are camelCase — `queryHash`, `zeroResults` — matching the rest of the
codebase's convention, not the snake_case this document originally showed.
The shipped event also carries fields this draft omitted: `uaHash` — see the
*Metric correction* below — `degraded` (the RAG index was unreachable or
timed out and the tool fell back to local ranking), `hydratedCount` (hits
found before category/hasJS filtering, so "the index found nothing" can be
told apart from "a category filter emptied an otherwise-real result"), and
`componentId` on `get_component` calls, normalized — trailing `.json`
stripped, lowercased — so `toast-slide`, `toast-slide.json` and
`Toast-Slide` aggregate as one bucket. Write the four-week queries against
these field names, not the ones originally drafted here.)

Query text is hashed, never stored raw. `zeroResults` is kept in the clear
because "consultas que no devuelven resultados" is a metric the brief explicitly
wants, and it is answerable without retaining user text.

**Metric correction.** The brief asks for *sesiones únicas*. Revision
2026-07-28 removed sessions from the protocol, so that quantity no longer
exists to be counted. The nearest honest proxy is distinct client identity from
`_meta`, bucketed by day. It is logged as `client` and must be reported as
**distinct clients per day**, not as sessions — otherwise the four-week readout
measures something other than what was defined in advance, which would
undermine the stopping criterion the whole experiment rests on.

**Second correction, from the final whole-branch review.** `client` alone
turned out to be unmeasurable in practice: `clientInfo` on the `_meta`
envelope is optional (spec PR #3002 demoted it from MUST to SHOULD), so a
compliant client can legitimately omit it, and with no fallback "distinct
clients per day" would collapse into one `undefined` bucket for most real
callers. `uaHash` — a hashed, never-raw digest of the request's `User-Agent`
header — was added as a secondary identity bucket that complements `client`
rather than replacing it: several different MCP clients can share one HTTP
library's User-Agent and hash to the same bucket, so `client` stays the more
precise signal whenever it is present, and `uaHash` is the floor underneath
it. Report both, not just `client`, over the four weeks.

## Catalog integrity

Regeneration is already automatic, so the residual risk is prose drifting from
the registry.

1. Correct README `1,516` → `1,503` at both occurrences.
2. Add a vitest that extracts the count from README and asserts equality with
   `totalCount`.

`prebuild` already runs `vitest run`, so from then on a stale claim fails the
build instead of shipping. This is the brief's "automatizar la regeneración en
el build" intent redirected at the thing actually capable of breaking.

## Publication surface

Prepared in this branch, published by the maintainer:

- `server.json` — official schema, namespace `io.github.sgomez-dev/*` (GitHub
  auth, no DNS verification), `remotes` entry of type `streamable-http` pointing
  at `https://nudaui.dev/mcp`.
- `mcp-name:` line in the root README, plus a short server section. (Not the
  ownership check for this publish path — see the correction under *Goals*.)
- The endpoint added to `ai.txt`, `llms.txt`, `llms-full.txt`,
  `agent-instructions.md` and `/developers`. The sentence stating there is no
  npm package and no CLI stays — it remains accurate.

The `description` field is drafted as options for the maintainer to choose
rather than settled unilaterally, since it is the single most load-bearing
string in the project and is the only indexed text in several directories.

## Verification

Lint, types and review measure whether code is well written, not whether it
runs. The endpoint is therefore exercised for real before it is called done:
`next dev`, raw JSON-RPC over HTTP against `/mcp`, asserting `tools/list` and a
successful call of each of the three tools, including the unknown-id path and a
forced RAG outage to prove the fallback.

Connecting a desktop client requires the maintainer's machine and a public URL.
The config snippet is prepared here; the connection is theirs to make. No claim
of client verification is recorded for a client not actually run.

## Risks

| Risk | Mitigation |
| --- | --- |
| `rag.nudaui.dev` down or slow | local token-match fallback, degradation stated in response |
| Vercel function duration limits | stateless request/response; no long-lived stream |
| Client still expects 2025 session semantics | `mcp-handler` 2.x serves both generations |
| Registry drift from README claims | build-failing equality test |
| Endpoint ships but nobody finds it | out of scope here; addressed by the publication surface |

## Out of scope for this branch

Registry publication (`mcp-publisher`), the demo recording, baseline capture and
all distribution. Those require the maintainer's accounts and hands.

## Sequencing

1. Catalog integrity — README fix plus drift-guard test.
2. Dependencies and `/mcp` route skeleton; `tools/list` answering.
3. `list_categories`, then `get_component`, then `search_components`.
4. Instrumentation.
5. Live verification against `next dev`.
6. `server.json`, `mcp-name:`, README section.
7. Agent-facing surfaces: `ai.txt`, `llms.txt`, `llms-full.txt`,
   `agent-instructions.md`, `/developers`.
