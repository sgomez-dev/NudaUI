# Task 7 report — Agent-facing surfaces

Commit: `b63a2b04bcefa34ab8b3363740c1dc2beae5af7e` on branch `mcp`.

## Deviation from the brief's file list, and why

The brief's Step 5 names `src/app/developers/page.tsx` and Step 4 names
`src/app/agent-instructions.md/route.ts` as the files to modify. I read both
fully before editing anything. Neither file contains prose: both are thin
wrappers —

- `agent-instructions.md/route.ts` just calls
  `renderDocMarkdown(agentInstructionsDoc())`, where `agentInstructionsDoc()`
  lives in `src/lib/agent-guidance.ts`.
- `developers/page.tsx` just renders `<DocPageView page={developersDoc()} />`,
  where `developersDoc()` lives in `src/lib/pages/developers.ts`.

Both files already generate identical HTML and Markdown from one `DocPage`
data structure (see `src/lib/doc.ts`). Editing the route/page files directly
would have meant duplicating content outside that shared model, which is
exactly the drift the file's own doc comments warn against. So I added the
new content to the two `lib` files that actually own it, and left
`agent-instructions.md/route.ts` and `developers/page.tsx` untouched (verified:
no diff needed in either — confirmed via `git status` before commit, both
absent from the changed-files list). The commit message documents this.

## What changed, per file

### `public/.well-known/ai.txt`
- Added `MCP: https://nudaui.dev/mcp` to the "Machine-readable endpoints"
  block, directly after the `Agent-Instructions:` line.
- Extended the closing "no npm package and no CLI" paragraph verbatim as
  specified in the brief, appending: "If your client speaks Model Context
  Protocol, connect to https://nudaui.dev/mcp instead — it needs no
  installation either." The original "no npm package and no CLI" sentence is
  unchanged, word for word.

### `src/app/llms.txt/route.ts`
- Added one `lines.push(...)` entry to the `## Docs` block, right after the
  agent-instructions entry, exactly as specified in the brief:
  `- [MCP server](.../mcp): remote Model Context Protocol endpoint — three
  read-only tools (search_components, get_component, list_categories).
  Streamable HTTP, no installation, no key.`

### `src/app/llms-full.txt/route.ts`
- This file has no "Docs"-style bullet list (unlike llms.txt) — its
  machine-readable mentions are narrative sentences pointing at
  `/api/components/{id}.json` and `/api/catalog-full.json`. I added a
  matching narrative sentence in the same paragraph block, right after the
  existing "To fetch the actual code..." line: "If your client speaks Model
  Context Protocol, connect to .../mcp instead of calling the JSON endpoints
  directly — three read-only tools (search_components, get_component,
  list_categories) over streamable HTTP, no installation, no key." Did not
  import from llms.txt; formatting matches the file's own `lines.push` style.

### `src/lib/agent-guidance.ts` (content for `agent-instructions.md`)
- Added a new `## MCP server` section to `agentInstructionsDoc()`, placed
  after "How to call it" and before "Rules of engagement": states that
  MCP-capable clients should connect to `https://nudaui.dev/mcp` (streamable
  HTTP, no installation, no key), call `search_components` first then
  `get_component` with the returned id, while `curl` against the JSON API
  remains the path for everyone else.
- Added a row to the existing "Machine-readable index" table: `MCP server |
  https://nudaui.dev/mcp | Model Context Protocol (streamable HTTP)`, for
  consistency with the other endpoint rows already listed there.

### `src/lib/pages/developers.ts` (content for `/developers`)
- Added a new `## MCP server` section to `developersDoc()`, placed after
  "Endpoints" and before "Errors":
  - Paragraph: URL, transport (streamable HTTP), no auth/no key/no account,
    same read-only registry as the JSON API.
  - Table with the three tools and their exact inputs, read from
    `src/app/mcp/route.ts`'s `registerTool` calls (not invented): `list_categories`
    (no inputs), `search_components` (`query` required string min 3,
    `category` optional string, `hasJS` optional boolean, `limit` 1–20
    default 8), `get_component` (`id` required string). The `search_components`
    description explicitly states it falls back to keyword matching — and
    says so in the response — when the semantic index is unreachable; it is
    never described as always-semantic.
  - Code block with the Task 6 setup command:
    `claude mcp add --transport http nudaui https://nudaui.dev/mcp`.
  - Closing note: read-only, needs no key, nothing to configure or revoke.
  - Component count derives from the already-imported `totalCount` (renders
    as "1503"), not a typed literal.

No new UI primitives were introduced — the section is built entirely from
existing `DocBlock` kinds (`p`, `table`, `code`) already used throughout the
file, rendered by the existing `<DocSections>` / `<Block>` components.

## mcp-name / ownership claim check

Grepped the diff and the whole of `README.md` for `mcp-name` — the only
occurrence is the pre-existing `mcp-name: io.github.sgomez-dev/nudaui` line
from an earlier task; none of the Task 7 content mentions `mcp-name` or
makes any claim about README-token scanning validating repository/package
ownership. No such claim was introduced anywhere.

## Verification

### `npx tsc --noEmit`
Clean, no output.

### `npx vitest run`
```
Test Files  16 passed (16)
     Tests  219 passed (219)
```
All passing, including `src/lib/pages/trust-pages.test.ts` (which exercises
both `developersDoc()` and `agentInstructionsDoc()`) and
`src/lib/readme-claims.test.ts`.

### Brief's grep acceptance checks (dev server on localhost:3000)

```
$ curl -sS http://localhost:3000/llms.txt | grep -i "mcp"
- [MCP server](https://nudaui.dev/mcp): remote Model Context Protocol endpoint — three read-only tools (search_components, get_component, list_categories). Streamable HTTP, no installation, no key.

$ curl -sS http://localhost:3000/agent-instructions.md | grep -i "mcp"
## MCP server
If your client speaks Model Context Protocol, connect to https://nudaui.dev/mcp instead of calling the JSON endpoints above by hand — streamable HTTP, no installation, no key. Call `search_components` first, then `get_component` with the id it returns, in that order; `curl` against the JSON API remains the path for everyone else.
| MCP server | https://nudaui.dev/mcp | Model Context Protocol (streamable HTTP) |

$ curl -sS http://localhost:3000/developers | grep -io "nudaui.dev/mcp" | head -3
nudaui.dev/mcp
nudaui.dev/mcp
nudaui.dev/mcp
```

Bonus checks (not required by the brief's Step 6 list, run anyway since the
files were touched):

```
$ curl -sS http://localhost:3000/llms-full.txt | grep -i "mcp"
If your client speaks Model Context Protocol, connect to https://nudaui.dev/mcp instead of calling the JSON endpoints directly — three read-only tools (search_components, get_component, list_categories) over streamable HTTP, no installation, no key.

$ curl -sS http://localhost:3000/.well-known/ai.txt | grep -i "mcp"
MCP: https://nudaui.dev/mcp
# connect to https://nudaui.dev/mcp instead — it needs no installation
```

All five surfaces produced a hit, as expected.

### Visual confirmation of `/developers`

Started `npm run dev` as a detached background process (never in the
foreground), waited for `http://localhost:3000/` to return `200`, then used
the Playwright MCP tool to navigate to `http://localhost:3000/developers#mcp`
and took two screenshots (viewport, then scrolled ~550px) covering the full
new "MCP server" section.

Confirmed visually:
- The section heading, intro paragraph and inline code/links render with the
  same styling as neighboring sections (navbar overlay is just a fixed header
  artifact of the anchor-jump, not a layout bug).
- The three-column tool table (`Tool` / `Inputs` / `What it does`) renders
  correctly, wraps its long "Inputs" cell content sanely, and shows "Searches
  1503 components..." — the interpolated `totalCount`.
- The `claude mcp add --transport http nudaui https://nudaui.dev/mcp` code
  block renders in the same `<pre><code>` box style as every other code
  sample on the page.
- The closing "read-only, needs no key" paragraph and the following "Errors"
  section render immediately after with normal spacing — nothing overlaps or
  clips.

Screenshots were temporary (saved under the repo root by the Playwright tool
default), reviewed via the Read tool, then deleted along with the
`.playwright-mcp/` scratch directory before committing — not part of the
commit.

After confirming, the dev server was killed: found the listener on port 3000
via `netstat -ano`, `taskkill //PID <pid> //F //T`, then re-curled
`localhost:3000` and confirmed connection refused.

## Commit

```
b63a2b04bcefa34ab8b3363740c1dc2beae5af7e
docs: announce the MCP endpoint on every agent-facing surface
```

5 files changed, 67 insertions(+), 1 deletion(-):
`public/.well-known/ai.txt`, `src/app/llms.txt/route.ts`,
`src/app/llms-full.txt/route.ts`, `src/lib/agent-guidance.ts`,
`src/lib/pages/developers.ts`.

No `Co-Authored-By` or "Generated with" trailer added, per global instructions.
Committed on branch `mcp`; `main` untouched.
