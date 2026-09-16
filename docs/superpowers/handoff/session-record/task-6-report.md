# Task 6 report: server.json, mcp-name: line, README section

## What changed

- **Created `server.json`** at repo root, per the brief, with two deviations from the
  brief's literal text (both explained below, both verified against live sources):
  1. `$schema` updated from the brief's `2025-07-09` dated URL to the current
     `2025-12-11` dated URL.
  2. The brief's `"status": "active"` field was dropped — it is no longer part of
     the publisher-submitted `server.json` schema (see below).
- **Modified `README.md`**: inserted the `## 🔌 MCP server` section verbatim from the
  brief, immediately after `## 🤖 For AI agents and integrations` and before
  `## 🤔 Why NudaUI?`. Table content checked against the registered tool
  titles/descriptions in `src/app/mcp/route.ts` — no discrepancies found (see
  cross-check below).

## Full final `server.json`

```json
{
  "$schema": "https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json",
  "name": "io.github.sgomez-dev/nudaui",
  "description": "Search 1,503 copy-paste CSS and JS UI components with zero dependencies and no build step. Loaders, buttons, charts, date pickers, command palettes, auth screens and 75 more categories, returned as paste-ready HTML, CSS and JS.",
  "repository": {
    "url": "https://github.com/sgomez-dev/nudaui",
    "source": "github"
  },
  "version": "1.0.0",
  "remotes": [
    {
      "type": "streamable-http",
      "url": "https://nudaui.dev/mcp"
    }
  ]
}
```

## `$schema` URL — investigation and verdict: VERIFIED, and changed

The brief's URL (`https://static.modelcontextprotocol.io/schemas/2025-07-09/server.schema.json`)
was flagged as unverified, so I checked it rather than pasting it blindly:

1. `WebSearch` and a `WebFetch` of
   `https://raw.githubusercontent.com/modelcontextprotocol/registry/refs/heads/main/docs/reference/server-json/generic-server-json.md`
   (the canonical spec doc in the `modelcontextprotocol/registry` repo, `main` branch)
   both independently point to
   `https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json`
   as the current example `$schema` value.
2. I fetched that exact URL directly. It resolves to a real, valid draft-07 JSON
   Schema, `$id` matching the URL, titled *"server.json defining a Model Context
   Protocol (MCP) server"*, with `name`, `description`, `version` as the only
   required top-level properties.
3. On that basis I used `2025-12-11`, not the brief's `2025-07-09`, in the shipped
   file. This is a change from the brief, made because the brief itself instructed
   verifying rather than pasting blindly, and I was able to reach and confirm a
   current, authoritative value — so I did not fall back to "keep the brief's value
   and flag it."

**Secondary finding from the same verification pass:** the live `2025-12-11` schema
has no `status` property anywhere (confirmed by an explicit full-text search of the
schema for the string "status" — zero occurrences), and `ServerDetail`'s only
required fields are `name`, `description`, `version`. A follow-up search found the
registry's own docs/discussion history: the `status` field was removed from the
publisher-controlled `server.json` and is now registry-managed, returned only in
API *responses* (alongside `publishedAt`, `updatedAt`, `isLatest` under a
registry-owned `_meta`), not something a publisher sets in the file they submit.
Since the schema has no `additionalProperties: false` at the top level, keeping
`"status": "active"` would not have been schema-invalid — it would just have been
inert, ignored data. I removed it rather than ship dead data whose presence could
read as a (false) claim that this field is a supported input. **If the maintainer
wants it kept for some registry-specific reason I'm not aware of, it's a one-line
add-back** — flagging this explicitly rather than silently deciding it doesn't
matter.

Also spot-checked (no issues): `remotes[].type: "streamable-http"` is a valid enum
member (`StreamableHttpTransport` vs. `SseTransport`'s `"sse"`); `repository.source:
"github"` has no enum constraint (plain string, `"github"` is the documented
example anyway); the `io.github.sgomez-dev/nudaui` name and
`https://github.com/sgomez-dev/nudaui` URL are fine using a lowercase repo-name
segment even though the actual GitHub repo is `sgomez-dev/NudaUI` — GitHub repo
paths are case-insensitive, and the registry's own examples lowercase the
repo-name portion of `io.github.*` names by convention.

## Tool description cross-check (README table vs. `src/app/mcp/route.ts`)

| Tool | Registered title/description (route.ts) | README row | Match? |
| --- | --- | --- | --- |
| `search_components` | "Search NudaUI components" — natural-language search over `totalCount` (1,503) components, returns ids, optional category/hasJS filters | "Natural-language search over all 1,503 components; returns ids" | Consistent. Row does not claim "semantic" search, so it does not oversell the keyword-degradation behavior (`degraded` flag / note in the tool's actual response) that the brief called out as a caution. |
| `get_component` | "Get a NudaUI component" — fetch complete paste-ready HTML/CSS/JS "where the pattern needs it," by id | "Paste-ready HTML, CSS and JS for one component id" | Consistent with how the rest of the README already describes the catalog collectively (same "HTML, CSS and JS" shorthand used elsewhere, e.g. the Features section); not read as a per-component guarantee that JS is always present. |
| `list_categories` | "List NudaUI categories" — all categories with descriptions and counts, call first when request is vague | "All 81 categories with descriptions and counts" | Consistent. 81 matches `categories.length`. |

No changes made to the brief's table text — it held up under the cross-check.

## README guard test result

```
npx vitest run src/lib/readme-claims.test.ts
```
Result: **PASS** — 1 test file, 2 tests passed. Both the "N components" and
"N categories" claims in the new section (1,503 / 81) match the registry
(`totalCount` / `categories.length`).

## Full suite result

```
npx vitest run
```
Result: **PASS** — 16 test files, 219 tests passed, 0 failed.

```
npx tsc --noEmit
```
Result: **PASS** — no output, exit clean.

```
node -e "console.log(JSON.parse(require('fs').readFileSync('server.json','utf8')).name)"
```
Result: `io.github.sgomez-dev/nudaui` (matches brief's Step 4 expectation).

## One alternative `description` (not applied — maintainer's choice)

Shipped as-is, per the brief's instruction to leave it exactly as written unless the
maintainer picks something else. One concrete alternative worth considering, since
this string is, per the brief, the single highest-return piece of text in the
project because several MCP directories index only it:

> "Search, filter and fetch 1,503 zero-dependency, copy-paste CSS/JS UI components
> across 81 categories — buttons, loaders, charts, date pickers, command palettes,
> auth screens and more — returned as paste-ready HTML, CSS and JS with no npm
> install."

Reasoning: the shipped description leads with "Search 1,503... components," which
is good, but buries "no build step" / "zero dependencies" (NudaUI's actual
differentiator versus every other component-snippet MCP server) after the count,
and never mentions "copy-paste" and "no npm install" together, which is the exact
phrase pattern someone frustrated with a heavy component library is likely to
type into a directory's search box. The alternative front-loads the differentiator
words ("zero-dependency," "no npm install") that map to that searcher's intent,
while keeping the same component/category counts and category examples so the
`readme-claims`-style consistency (if that guard is ever extended to `server.json`)
still holds. This is a judgment call, not a correctness fix — the shipped version
is fine and I did not touch the file.

## Commit

```
f91423ea8db03fb73fdab96a7b75624261560e36
```
On branch `mcp` (confirmed via `git branch --show-current` before committing — did
not touch `main`). No `Co-Authored-By` or "Generated with" trailer added, per
constraints. Commit message documents the two deviations from the brief's literal
`server.json` text (schema date, dropped `status`) inline so the history is
self-explanatory.

## Concerns for the maintainer

1. Confirm you're fine with the `2025-12-11` schema and the dropped `status` field —
   both are deviations from the brief's literal text, made because verification
   surfaced a newer/authoritative value, per the brief's own instruction to verify
   rather than paste blindly.
2. The `server.json` file itself is not covered by any automated guard (unlike the
   README's component/category counts) — if the registry-visible `1,503` count in
   its `description` ever drifts from `totalCount`, nothing in this repo's test
   suite will catch it. Worth a follow-up ticket if that risk matters.
