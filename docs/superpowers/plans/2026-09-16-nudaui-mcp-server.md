# NudaUI Remote MCP Server — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a remote, zero-install MCP endpoint at `https://nudaui.dev/mcp` exposing three read-only tools over the existing component registry, instrumented from the first deploy.

**Architecture:** One Next.js App Router route (`src/app/mcp/route.ts`) built on `mcp-handler` v2, stateless per MCP revision 2026-07-28. Tool logic lives in pure, unit-testable functions in `src/lib/mcp/` that import the registry **in process** — the same code path `/api/catalog.json` already uses — never by self-fetching the public API. Semantic ranking delegates to the existing `rag.nudaui.dev` service with a local token-match fallback.

**Tech Stack:** Next.js 16, React 19, TypeScript 6, vitest 4, `mcp-handler@^2`, `@modelcontextprotocol/server@^2`, `zod@^4`. Deployed on Vercel.

**Spec:** `docs/superpowers/specs/2026-09-16-nudaui-mcp-server-design.md`

## Global Constraints

- Branch is `mcp`. Never commit to `main`.
- Commits are authored by the repo owner. **Do not add a `Co-Authored-By` trailer.**
- Registry access is **in process** (`import { categories } from "@/components/showcase/registry/categories"`). Never `fetch()` nudaui.dev from inside the app.
- Authoritative totals: **1,503 components, 81 categories**. Never hardcode a total in prose or JSON that is not derived from, or guarded against, `totalCount`.
- The claim "there is no npm package and no CLI" in `public/.well-known/ai.txt` stays true and unedited in substance.
- Node 20+. `zod@^4.2.0` is required by `mcp-handler@2`.
- Every tool result must carry `page`/`anchor` URLs back to nudaui.dev.
- Never log raw user query text. Hash it.
- Run `npx vitest run` and `npx tsc --noEmit` before every commit; both must be clean.

---

### Task 1: Catalog claim integrity

The registry says 1,503; the README says 1,516 in two places. Fix the prose and make the drift impossible to reintroduce.

**Files:**
- Modify: `README.md:35`, `README.md:40`
- Create: `src/lib/readme-claims.test.ts`

**Interfaces:**
- Consumes: `totalCount`, `categories` from `@/components/showcase/registry/categories`
- Produces: nothing other tasks depend on

- [ ] **Step 1: Write the failing test**

Create `src/lib/readme-claims.test.ts`:

```ts
/**
 * The README is marketing copy that quotes registry facts. Prose drifts;
 * the registry does not. This test makes a stale claim fail `prebuild`
 * instead of shipping — the counts are what feed server.json and every
 * directory listing.
 */
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import {
  categories,
  totalCount,
} from "@/components/showcase/registry/categories";

const README = readFileSync(
  new URL("../../README.md", import.meta.url),
  "utf8",
);

describe("README claims match the registry", () => {
  it("quotes the real component total everywhere it appears", () => {
    const claims = [...README.matchAll(/([\d,]+) components/g)].map(
      (m) => m[1],
    );
    expect(claims.length).toBeGreaterThan(0);
    const expected = totalCount.toLocaleString("en-US");
    for (const claim of claims) expect(claim).toBe(expected);
  });

  it("quotes the real category total everywhere it appears", () => {
    const claims = [...README.matchAll(/(\d+) categories/g)].map((m) => m[1]);
    expect(claims.length).toBeGreaterThan(0);
    for (const claim of claims) expect(claim).toBe(String(categories.length));
  });
});
```

- [ ] **Step 2: Run it to confirm it fails**

Run: `npx vitest run src/lib/readme-claims.test.ts`
Expected: FAIL — `expected '1,516' to be '1,503'`.

- [ ] **Step 3: Fix the README**

In `README.md` line 35 and line 40, replace `1,516` with `1,503`. Both lines currently read `1,516 components`; the category count `81` is already correct and must not change.

- [ ] **Step 4: Run it to confirm it passes**

Run: `npx vitest run src/lib/readme-claims.test.ts`
Expected: PASS, 2 tests.

- [ ] **Step 5: Confirm the whole suite is still green**

Run: `npx vitest run`
Expected: all tests pass.

- [ ] **Step 6: Commit**

```bash
git add README.md src/lib/readme-claims.test.ts
git commit -m "fix: correct README component count and guard it against drift

The registry computes 1503 components; the README claimed 1516 in two
places with nothing checking it. Since that number feeds server.json and
every MCP directory listing, a test now asserts the README's quoted
totals equal the registry's, so a stale claim fails prebuild."
```

---

### Task 2: `/mcp` route with `list_categories` — CORE

First end-to-end vertical slice: dependencies, route, handler, one working tool. Everything later plugs into this shape.

**Files:**
- Create: `src/lib/mcp/tools.ts`
- Create: `src/lib/mcp/tools.test.ts`
- Create: `src/app/mcp/route.ts`
- Modify: `next.config.ts` (add the `/api/mcp` → `/mcp` redirect inside the existing `redirects()` array)
- Modify: `package.json` (dependencies, via npm)

**Interfaces:**
- Consumes: `categories`, `totalCount` from `@/components/showcase/registry/categories`; `categoryDescriptions` from `@/lib/category-meta`; `absoluteUrl`, `site` from `@/lib/site`
- Produces:
  - `export interface CategorySummary { id: string; label: string; description: string; componentCount: number; url: string }`
  - `export function listCategories(): { total: number; categoryCount: number; categories: CategorySummary[] }`

- [ ] **Step 1: Install dependencies**

```bash
npm install mcp-handler@^2 @modelcontextprotocol/server@^2 zod@^4
```

- [ ] **Step 2: Write the failing test**

Create `src/lib/mcp/tools.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { listCategories } from "@/lib/mcp/tools";
import {
  categories,
  totalCount,
} from "@/components/showcase/registry/categories";

describe("listCategories", () => {
  it("returns every category with a description and a count", () => {
    const result = listCategories();
    expect(result.categoryCount).toBe(categories.length);
    expect(result.total).toBe(totalCount);
    expect(result.categories).toHaveLength(categories.length);
    for (const c of result.categories) {
      expect(c.id).toBeTruthy();
      expect(c.label).toBeTruthy();
      expect(c.description.length).toBeGreaterThan(0);
      expect(c.componentCount).toBeGreaterThan(0);
      expect(c.url).toContain("/components#section-");
    }
  });

  it("counts sum to the registry total", () => {
    const sum = listCategories().categories.reduce(
      (acc, c) => acc + c.componentCount,
      0,
    );
    expect(sum).toBe(totalCount);
  });
});
```

- [ ] **Step 3: Run it to confirm it fails**

Run: `npx vitest run src/lib/mcp/tools.test.ts`
Expected: FAIL — cannot resolve `@/lib/mcp/tools`.

- [ ] **Step 4: Implement `listCategories`**

Create `src/lib/mcp/tools.ts`:

```ts
/**
 * Pure tool logic for the MCP endpoint.
 *
 * Kept free of HTTP and of the MCP SDK so it can be unit-tested directly
 * and so the route stays a thin adapter. Reads the registry in process —
 * the same path /api/catalog.json uses — so the endpoint can never serve
 * a CDN-stale view of the catalog.
 */
import {
  categories,
  totalCount,
} from "@/components/showcase/registry/categories";
import { categoryDescriptions } from "@/lib/category-meta";
import { absoluteUrl } from "@/lib/site";

export interface CategorySummary {
  id: string;
  label: string;
  description: string;
  componentCount: number;
  url: string;
}

/** Every category, with the copy that explains when to reach for it. */
export function listCategories(): {
  total: number;
  categoryCount: number;
  categories: CategorySummary[];
} {
  return {
    total: totalCount,
    categoryCount: categories.length,
    categories: categories.map((cat) => ({
      id: cat.id,
      label: cat.label,
      description:
        categoryDescriptions[cat.id] ??
        "Copy-paste UI animations and components.",
      componentCount: cat.components.length,
      url: absoluteUrl(`/components#section-${cat.id}`),
    })),
  };
}
```

- [ ] **Step 5: Run it to confirm it passes**

Run: `npx vitest run src/lib/mcp/tools.test.ts`
Expected: PASS, 2 tests.

- [ ] **Step 6: Create the route**

Create `src/app/mcp/route.ts`:

```ts
/**
 * /mcp — NudaUI's remote Model Context Protocol endpoint.
 *
 * Zero install: a user pastes this URL into their MCP client and gets
 * search, retrieval and browsing over 1,503 copy-paste components. There
 * is deliberately no npm package — consistent with the rest of the
 * project, the scriptable interface is a URL.
 *
 * Stateless per MCP revision 2026-07-28: no handshake, no session id, so
 * any request can land on any Vercel instance with no shared storage.
 */
import { createMcpHandler } from "mcp-handler";
import { z } from "zod";
import { listCategories } from "@/lib/mcp/tools";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const maxDuration = 60;

const handler = createMcpHandler((server) => {
  server.registerTool(
    "list_categories",
    {
      title: "List NudaUI categories",
      description:
        "List all NudaUI component categories with a description of when to use each one and how many components it holds. Call this first when a request is vague about what kind of UI is needed.",
      inputSchema: z.object({}),
    },
    async () => {
      const data = listCategories();
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    },
  );
});

export { handler as GET, handler as POST };
```

- [ ] **Step 7: Add the alias redirect**

In `next.config.ts`, inside the array returned by `redirects()`, add as the final entry:

```ts
      { source: "/api/mcp", destination: "/mcp", permanent: true },
```

- [ ] **Step 8: Typecheck and run the suite**

Run: `npx tsc --noEmit && npx vitest run`
Expected: both clean.

- [ ] **Step 9: Verify the endpoint answers over HTTP**

Start the dev server (`npm run dev`), then in a second shell:

```bash
curl -sS -X POST http://localhost:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | head -40
```

Expected: a JSON-RPC result listing `list_categories`. Then call it:

```bash
curl -sS -X POST http://localhost:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"list_categories","arguments":{}}}' | head -30
```

Expected: JSON containing `"categoryCount": 81` and `"total": 1503`.

If the handler rejects the request for a missing protocol version, add `"_meta":{"protocolVersion":"2026-07-28"}` to `params` and record the working invocation in the task report.

- [ ] **Step 10: Commit**

```bash
git add package.json package-lock.json next.config.ts src/app/mcp/route.ts src/lib/mcp/
git commit -m "feat: add /mcp endpoint with list_categories tool

Stateless streamable-HTTP MCP server on the existing Next app. Tool
logic is pure and unit-tested; the route is a thin adapter. Reads the
registry in process so the endpoint cannot serve a CDN-stale catalog."
```

---

### Task 3: `get_component` tool

**Files:**
- Modify: `src/lib/mcp/tools.ts`
- Modify: `src/lib/mcp/tools.test.ts`
- Modify: `src/app/mcp/route.ts`

**Interfaces:**
- Consumes: `findComponent`, `componentPayload`, `allComponents` from `@/lib/component-payload`; `listCategories` from Task 2
- Produces:
  - `export function getComponent(id: string): { found: true; component: ReturnType<typeof componentPayload> } | { found: false; id: string; suggestions: { id: string; name: string; category: string }[] }`

- [ ] **Step 1: Write the failing test**

Append to `src/lib/mcp/tools.test.ts`:

```ts
import { getComponent } from "@/lib/mcp/tools";
import { allComponents } from "@/lib/component-payload";

describe("getComponent", () => {
  it("returns paste-ready code for a real id", () => {
    const realId = allComponents()[0].component.id;
    const result = getComponent(realId);
    expect(result.found).toBe(true);
    if (!result.found) throw new Error("unreachable");
    expect(result.component.id).toBe(realId);
    expect(result.component.code.length).toBeGreaterThan(0);
    expect(result.component.page).toContain("/components/");
    expect(result.component.license).toBe("MIT");
  });

  it("tolerates a trailing .json the way the REST endpoint does", () => {
    const realId = allComponents()[0].component.id;
    expect(getComponent(`${realId}.json`).found).toBe(true);
  });

  it("suggests near matches instead of failing bare", () => {
    const result = getComponent("toast-slide-xyz-nope");
    expect(result.found).toBe(false);
    if (result.found) throw new Error("unreachable");
    expect(result.suggestions.length).toBeGreaterThan(0);
    expect(result.suggestions.length).toBeLessThanOrEqual(5);
  });
});
```

- [ ] **Step 2: Run it to confirm it fails**

Run: `npx vitest run src/lib/mcp/tools.test.ts`
Expected: FAIL — `getComponent` is not exported.

- [ ] **Step 3: Implement `getComponent`**

Append to `src/lib/mcp/tools.ts`:

```ts
import {
  allComponents,
  componentPayload,
  findComponent,
  type ComponentPayload,
} from "@/lib/component-payload";

export interface ComponentSuggestion {
  id: string;
  name: string;
  category: string;
}

export type GetComponentResult =
  | { found: true; component: ComponentPayload }
  | { found: false; id: string; suggestions: ComponentSuggestion[] };

/**
 * Score an id against a query by shared hyphen-delimited tokens, then by
 * substring containment. Cheap, dependency-free, and good enough to turn a
 * typo into a usable suggestion — which is the whole job here.
 */
function similarity(candidate: string, query: string): number {
  const a = new Set(candidate.split("-").filter(Boolean));
  const b = query.split("-").filter(Boolean);
  let score = b.reduce((acc, token) => acc + (a.has(token) ? 2 : 0), 0);
  if (candidate.includes(query) || query.includes(candidate)) score += 1;
  return score;
}

/** One component's full paste-ready payload, or the nearest ids to it. */
export function getComponent(rawId: string): GetComponentResult {
  const flat = findComponent(rawId);
  if (flat) return { found: true, component: componentPayload(flat) };

  const id = rawId.replace(/\.json$/i, "").toLowerCase();
  const suggestions = allComponents()
    .map((f) => ({
      id: f.component.id,
      name: f.component.name,
      category: f.categoryLabel,
      score: similarity(f.component.id.toLowerCase(), id),
    }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(({ id, name, category }) => ({ id, name, category }));

  return { found: false, id: rawId, suggestions };
}
```

If `ComponentPayload` is not currently exported from `src/lib/component-payload.ts`, it already is (`export interface ComponentPayload`) — import it directly, do not redeclare it.

- [ ] **Step 4: Run it to confirm it passes**

Run: `npx vitest run src/lib/mcp/tools.test.ts`
Expected: PASS, 5 tests.

- [ ] **Step 5: Register the tool**

In `src/app/mcp/route.ts`, import `getComponent` alongside `listCategories` and register inside the same `createMcpHandler` callback:

```ts
  server.registerTool(
    "get_component",
    {
      title: "Get a NudaUI component",
      description:
        "Fetch the complete, paste-ready code for one NudaUI component by id: HTML, CSS, and JavaScript where the pattern needs it. Ids come from search_components or list_categories.",
      inputSchema: z.object({
        id: z
          .string()
          .min(1)
          .describe("Component id, e.g. 'toast-slide'. A trailing .json is accepted."),
      }),
    },
    async ({ id }) => {
      const result = getComponent(id);
      if (!result.found) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `No NudaUI component with id "${result.id}".${
                result.suggestions.length
                  ? ` Did you mean: ${result.suggestions.map((s) => s.id).join(", ")}?`
                  : ""
              } Browse ${site.url}/components to enumerate ids.`,
            },
          ],
        };
      }
      return {
        content: [
          { type: "text", text: JSON.stringify(result.component, null, 2) },
        ],
      };
    },
  );
```

- [ ] **Step 6: Typecheck, test, and verify over HTTP**

Run: `npx tsc --noEmit && npx vitest run`

With `npm run dev` running:

```bash
curl -sS -X POST http://localhost:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"get_component","arguments":{"id":"nope-not-real"}}}' | head -20
```

Expected: an error result naming near-match ids, not a stack trace.

- [ ] **Step 7: Commit**

```bash
git add src/lib/mcp/ src/app/mcp/route.ts
git commit -m "feat: add get_component MCP tool

Returns the same payload shape as /api/components/{id}.json so an agent
that has seen one understands the other. An unknown id answers with the
nearest ids rather than a bare failure."
```

---

### Task 4: `search_components` tool with RAG fallback

**Files:**
- Modify: `src/lib/mcp/tools.ts`
- Modify: `src/lib/mcp/tools.test.ts`
- Modify: `src/app/mcp/route.ts`

**Interfaces:**
- Consumes: `searchComponents as ragSearch`, `RagError` from `@/lib/rag`; `allComponents` from `@/lib/component-payload`; `componentHasJS` from the registry
- Produces:
  - `export interface SearchHit { id: string; name: string; category: string; categoryId: string; languages: string[]; hasJS: boolean; page: string; anchor: string }`
  - `export function localSearch(query: string, limit: number): SearchHit[]`
  - `export async function searchComponentsTool(args: { query: string; category?: string; hasJS?: boolean; limit?: number }): Promise<{ query: string; degraded: boolean; count: number; results: SearchHit[] }>`

- [ ] **Step 1: Write the failing test**

Append to `src/lib/mcp/tools.test.ts`:

```ts
import { localSearch, searchComponentsTool } from "@/lib/mcp/tools";

describe("localSearch (fallback ranking)", () => {
  it("finds components by a word in their name", () => {
    const hits = localSearch("toast", 5);
    expect(hits.length).toBeGreaterThan(0);
    expect(
      hits.some(
        (h) =>
          h.name.toLowerCase().includes("toast") ||
          h.id.includes("toast") ||
          h.category.toLowerCase().includes("toast"),
      ),
    ).toBe(true);
  });

  it("respects the limit", () => {
    expect(localSearch("card", 3).length).toBeLessThanOrEqual(3);
  });

  it("returns nothing for a query that matches nothing", () => {
    expect(localSearch("zzzqqqxxnotathing", 5)).toHaveLength(0);
  });
});

describe("searchComponentsTool", () => {
  it("degrades to local ranking when the RAG service is unreachable", async () => {
    const original = process.env.NEXT_PUBLIC_RAG_API_URL;
    process.env.NEXT_PUBLIC_RAG_API_URL = "http://127.0.0.1:9";
    try {
      const result = await searchComponentsTool({ query: "toast", limit: 5 });
      expect(result.degraded).toBe(true);
      expect(result.results.length).toBeGreaterThan(0);
    } finally {
      process.env.NEXT_PUBLIC_RAG_API_URL = original;
    }
  });

  it("filters to CSS-only components when hasJS is false", async () => {
    const result = await searchComponentsTool({
      query: "button",
      hasJS: false,
      limit: 10,
    });
    for (const hit of result.results) expect(hit.hasJS).toBe(false);
  });
});
```

Note: `RAG_API_URL` in `src/lib/rag.ts` is read at module load, so the tool must read the env var at call time for this test to bite. Implement `ragBaseUrl()` as shown in Step 3 rather than importing the constant.

- [ ] **Step 2: Run it to confirm it fails**

Run: `npx vitest run src/lib/mcp/tools.test.ts`
Expected: FAIL — `localSearch` is not exported.

- [ ] **Step 3: Implement search**

Append to `src/lib/mcp/tools.ts`:

```ts
import { componentHasJS } from "@/components/showcase/registry/categories";

export interface SearchHit {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  languages: string[];
  hasJS: boolean;
  page: string;
  anchor: string;
}

/** How long we wait on the semantic index before falling back. */
const RAG_TIMEOUT_MS = 6000;

function ragBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_RAG_API_URL ?? "https://rag.nudaui.dev"
  ).replace(/\/$/, "");
}

function toHit(f: ReturnType<typeof allComponents>[number]): SearchHit {
  return {
    id: f.component.id,
    name: f.component.name,
    category: f.categoryLabel,
    categoryId: f.categoryId,
    languages: f.component.code.map((t) => t.language),
    hasJS: componentHasJS(f.component),
    page: absoluteUrl(`/components/${f.component.id}`),
    anchor: absoluteUrl(`/components#${f.component.id}`),
  };
}

/**
 * Dependency-free ranking over names, ids and category labels. This is the
 * fallback, not the primary path: it exists so a search tool degrades to
 * worse results instead of to an error when the index is unreachable.
 */
export function localSearch(query: string, limit: number): SearchHit[] {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  return allComponents()
    .map((f) => {
      const haystack =
        `${f.component.name} ${f.component.id} ${f.categoryLabel}`.toLowerCase();
      const score = tokens.reduce(
        (acc, t) => acc + (haystack.includes(t) ? 1 : 0),
        0,
      );
      return { f, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => toHit(x.f));
}

/**
 * Semantic search with graceful degradation.
 *
 * Over-fetches from the index so that post-filtering by category/hasJS can
 * still fill a page, then hydrates every hit from the local registry — the
 * index only supplies ranking, never content.
 */
export async function searchComponentsTool(args: {
  query: string;
  category?: string;
  hasJS?: boolean;
  limit?: number;
}): Promise<{
  query: string;
  degraded: boolean;
  count: number;
  results: SearchHit[];
}> {
  const limit = Math.min(20, Math.max(1, args.limit ?? 8));
  const filter = (hits: SearchHit[]): SearchHit[] =>
    hits
      .filter((h) => (args.category ? h.categoryId === args.category : true))
      .filter((h) => (args.hasJS === undefined ? true : h.hasJS === args.hasJS))
      .slice(0, limit);

  let ranked: SearchHit[] | null = null;
  try {
    const url = new URL(`${ragBaseUrl()}/search`);
    url.searchParams.set("q", args.query);
    url.searchParams.set("k", String(Math.min(20, limit * 2)));

    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(RAG_TIMEOUT_MS),
    });
    if (res.ok) {
      const data = (await res.json()) as { results?: { id: string }[] };
      const byId = new Map(allComponents().map((f) => [f.component.id, f]));
      ranked = (data.results ?? [])
        .map((r) => byId.get(r.id))
        .filter((f): f is NonNullable<typeof f> => Boolean(f))
        .map(toHit);
    }
  } catch {
    // Index unreachable or slow — fall through to local ranking below.
    ranked = null;
  }

  const degraded = ranked === null;
  const results = filter(ranked ?? localSearch(args.query, limit * 3));

  return { query: args.query, degraded, count: results.length, results };
}
```

- [ ] **Step 4: Run it to confirm it passes**

Run: `npx vitest run src/lib/mcp/tools.test.ts`
Expected: PASS, 10 tests.

- [ ] **Step 5: Register the tool**

In `src/app/mcp/route.ts`, import `searchComponentsTool` and register:

```ts
  server.registerTool(
    "search_components",
    {
      title: "Search NudaUI components",
      description:
        "Search 1,503 copy-paste CSS and JS UI components by natural-language description, e.g. 'accessible date picker' or 'toast that slides in'. Returns ids to pass to get_component. Optionally filter by category id or by whether the component needs JavaScript.",
      inputSchema: z.object({
        query: z
          .string()
          .min(3)
          .describe("Natural-language description of the UI you need."),
        category: z
          .string()
          .optional()
          .describe("Restrict to one category id, from list_categories."),
        hasJS: z
          .boolean()
          .optional()
          .describe("true for components that ship JS; false for CSS-only."),
        limit: z.number().int().min(1).max(20).optional().default(8),
      }),
    },
    async (args) => {
      const result = await searchComponentsTool(args);
      const note = result.degraded
        ? "NOTE: the semantic index was unreachable; these results use basic keyword matching and may rank poorly.\n\n"
        : "";
      return {
        content: [
          { type: "text", text: note + JSON.stringify(result, null, 2) },
        ],
      };
    },
  );
```

- [ ] **Step 6: Typecheck, test, and verify against the live index**

Run: `npx tsc --noEmit && npx vitest run`

With `npm run dev` running:

```bash
curl -sS -X POST http://localhost:3000/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"search_components","arguments":{"query":"accessible date picker","limit":3}}}' | head -40
```

Expected: `"degraded": false` and calendar/date-picker components. Record the actual ids returned in the task report.

- [ ] **Step 7: Commit**

```bash
git add src/lib/mcp/ src/app/mcp/route.ts
git commit -m "feat: add search_components MCP tool with graceful degradation

Delegates ranking to the existing rag.nudaui.dev index and hydrates hits
from the local registry. If the index is unreachable the tool falls back
to keyword matching and says so, rather than failing the call."
```

---

### Task 5: Usage instrumentation

**Files:**
- Create: `src/lib/mcp/log.ts`
- Create: `src/lib/mcp/log.test.ts`
- Modify: `src/app/mcp/route.ts`

**Interfaces:**
- Produces:
  - `export function hashQuery(q: string): string`
  - `export function logToolCall(e: { tool: string; ok: boolean; ms: number; client?: string; queryHash?: string; results?: number; zeroResults?: boolean }): void`

- [ ] **Step 1: Write the failing test**

Create `src/lib/mcp/log.test.ts`:

```ts
import { describe, expect, it, vi, afterEach } from "vitest";
import { hashQuery, logToolCall } from "@/lib/mcp/log";

afterEach(() => vi.restoreAllMocks());

describe("hashQuery", () => {
  it("is stable for the same input", () => {
    expect(hashQuery("date picker")).toBe(hashQuery("date picker"));
  });

  it("differs for different inputs", () => {
    expect(hashQuery("date picker")).not.toBe(hashQuery("toast"));
  });

  it("never returns the raw query", () => {
    expect(hashQuery("date picker")).not.toContain("date");
  });
});

describe("logToolCall", () => {
  it("emits one parseable JSON line tagged mcp_tool", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    logToolCall({ tool: "search_components", ok: true, ms: 12, results: 3 });
    expect(spy).toHaveBeenCalledTimes(1);
    const payload = JSON.parse(spy.mock.calls[0][0] as string);
    expect(payload.evt).toBe("mcp_tool");
    expect(payload.tool).toBe("search_components");
    expect(payload.ok).toBe(true);
    expect(payload.day).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
```

- [ ] **Step 2: Run it to confirm it fails**

Run: `npx vitest run src/lib/mcp/log.test.ts`
Expected: FAIL — cannot resolve `@/lib/mcp/log`.

- [ ] **Step 3: Implement the logger**

Create `src/lib/mcp/log.ts`:

```ts
/**
 * Minimal usage instrumentation for the MCP endpoint.
 *
 * One structured JSON line per call to stdout, read through Vercel logs.
 * No database and no analytics dependency: the questions this has to answer
 * — which tools get called, which components get asked for, which queries
 * return nothing — are all answerable from a log drain.
 *
 * Query text is hashed, never stored. `zeroResults` is kept in the clear
 * because "queries that return nothing" is the metric worth acting on and
 * it needs no user text to be useful.
 *
 * A note on sessions: MCP revision 2026-07-28 removed session tracking from
 * the protocol, so there is no session to count. `client` is the nearest
 * honest proxy and must be reported as distinct clients per day.
 */
import { createHash } from "node:crypto";

/** Short, stable, non-reversible digest of a query string. */
export function hashQuery(q: string): string {
  return createHash("sha256")
    .update(q.trim().toLowerCase())
    .digest("hex")
    .slice(0, 12);
}

export interface ToolCallEvent {
  tool: string;
  ok: boolean;
  ms: number;
  client?: string;
  queryHash?: string;
  componentId?: string;
  results?: number;
  zeroResults?: boolean;
  degraded?: boolean;
}

/** Emit one line. Never throws — instrumentation must not break a tool call. */
export function logToolCall(e: ToolCallEvent): void {
  try {
    console.log(
      JSON.stringify({
        evt: "mcp_tool",
        ...e,
        day: new Date().toISOString().slice(0, 10),
      }),
    );
  } catch {
    // Logging is best-effort by design.
  }
}
```

- [ ] **Step 4: Run it to confirm it passes**

Run: `npx vitest run src/lib/mcp/log.test.ts`
Expected: PASS, 4 tests.

- [ ] **Step 5: Wire the logger into all three tools**

In `src/app/mcp/route.ts`, import `hashQuery` and `logToolCall`, then wrap each handler body so every path — success and error — emits exactly one line. For example, `search_components` becomes:

```ts
    async (args) => {
      const started = Date.now();
      const result = await searchComponentsTool(args);
      logToolCall({
        tool: "search_components",
        ok: true,
        ms: Date.now() - started,
        queryHash: hashQuery(args.query),
        results: result.count,
        zeroResults: result.count === 0,
        degraded: result.degraded,
      });
      const note = result.degraded
        ? "NOTE: the semantic index was unreachable; these results use basic keyword matching and may rank poorly.\n\n"
        : "";
      return {
        content: [
          { type: "text", text: note + JSON.stringify(result, null, 2) },
        ],
      };
    },
```

`get_component` logs `componentId` and `ok: result.found`. `list_categories` logs `tool`, `ok: true` and `ms`. Do not log raw queries or component code anywhere.

- [ ] **Step 6: Typecheck, test, and confirm lines appear**

Run: `npx tsc --noEmit && npx vitest run`

With `npm run dev` running, call any tool and confirm a line matching `{"evt":"mcp_tool",...}` appears in the dev server's output.

- [ ] **Step 7: Commit**

```bash
git add src/lib/mcp/ src/app/mcp/route.ts
git commit -m "feat: instrument MCP tool calls

One structured JSON line per call, read through Vercel logs — no database
and no analytics dependency. Queries are hashed; zero-result calls are
flagged in the clear because that is the metric worth acting on."
```

---

### Task 6: `server.json`, `mcp-name:` line, README section

Registry publication reads the `mcp-name:` line from the root README to validate ownership, so it must land before publishing.

**Files:**
- Create: `server.json`
- Modify: `README.md` (add a server section after the `## 🤖 For AI agents and integrations` section, which begins at line 150)

**Interfaces:** none — documentation and metadata only.

- [ ] **Step 1: Create `server.json`**

```json
{
  "$schema": "https://static.modelcontextprotocol.io/schemas/2025-07-09/server.schema.json",
  "name": "io.github.sgomez-dev/nudaui",
  "description": "Search 1,503 copy-paste CSS and JS UI components with zero dependencies and no build step. Loaders, buttons, charts, date pickers, command palettes, auth screens and 75 more categories, returned as paste-ready HTML, CSS and JS.",
  "status": "active",
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

Leave the `description` exactly as written unless the maintainer has chosen a different option — it is drafted for search, and the component count must match `totalCount`.

- [ ] **Step 2: Add the `mcp-name:` validation line and server section to README**

Insert after the existing `## 🤖 For AI agents and integrations` section:

````markdown
## 🔌 MCP server

NudaUI runs a remote [Model Context Protocol](https://modelcontextprotocol.io)
server. There is nothing to install — point your MCP client at the URL:

```
https://nudaui.dev/mcp
```

mcp-name: io.github.sgomez-dev/nudaui

Three read-only tools:

| Tool | What it does |
| --- | --- |
| `search_components` | Natural-language search over all 1,503 components; returns ids |
| `get_component` | Paste-ready HTML, CSS and JS for one component id |
| `list_categories` | All 81 categories with descriptions and counts |

For Claude Code:

```bash
claude mcp add --transport http nudaui https://nudaui.dev/mcp
```
````

- [ ] **Step 3: Confirm the README guard still passes**

Run: `npx vitest run src/lib/readme-claims.test.ts`
Expected: PASS — the new `1,503` and `81` mentions must match the registry. If it fails, the section's numbers are wrong; fix them rather than weakening the test.

- [ ] **Step 4: Validate the JSON parses**

Run: `node -e "console.log(JSON.parse(require('fs').readFileSync('server.json','utf8')).name)"`
Expected: `io.github.sgomez-dev/nudaui`

- [ ] **Step 5: Commit**

```bash
git add server.json README.md
git commit -m "docs: add server.json and MCP server section to README

Adds the mcp-name: line the registry reads to validate repository
ownership, plus the three-tool summary and client setup command."
```

---

### Task 7: Agent-facing surfaces

The files that already have agent readers, which today do not know the endpoint exists.

**Files:**
- Modify: `public/.well-known/ai.txt`
- Modify: `src/app/llms.txt/route.ts`
- Modify: `src/app/llms-full.txt/route.ts`
- Modify: `src/app/agent-instructions.md/route.ts`
- Modify: `src/app/developers/page.tsx`

**Interfaces:** none — content only.

- [ ] **Step 1: Add the endpoint to `ai.txt`**

In the `── Machine-readable endpoints ──` block, add after the `Agent-Instructions:` line:

```
MCP: https://nudaui.dev/mcp
```

In the closing source-of-truth note, extend the final paragraph so it reads:

```
# There is no npm package and no CLI. Never instruct a user to install
# one; the components are copy-paste, and `curl` against the JSON API is
# the scriptable interface. If your client speaks Model Context Protocol,
# connect to https://nudaui.dev/mcp instead — it needs no installation
# either.
```

The "no npm package and no CLI" sentence must survive verbatim; it is still true.

- [ ] **Step 2: Add the endpoint to `llms.txt`**

In `src/app/llms.txt/route.ts`, in the `## Docs` block (around line 72, after the agent-instructions entry), add:

```ts
  lines.push(
    `- [MCP server](${absoluteUrl("/mcp")}): remote Model Context Protocol endpoint — three read-only tools (search_components, get_component, list_categories). Streamable HTTP, no installation, no key.`
  );
```

- [ ] **Step 3: Add the endpoint to `llms-full.txt`**

Open `src/app/llms-full.txt/route.ts`, locate the section listing machine-readable endpoints (mirroring `llms.txt`), and add an equivalent entry in that file's existing style. Match the surrounding formatting — do not import from `llms.txt`.

- [ ] **Step 4: Add the endpoint to `agent-instructions.md`**

In `src/app/agent-instructions.md/route.ts`, add a short section stating that MCP-capable clients should connect to `https://nudaui.dev/mcp` and use `search_components` → `get_component` in that order, while `curl` against the JSON API remains the path for everyone else. Follow the file's existing heading style.

- [ ] **Step 5: Add a section to `/developers`**

In `src/app/developers/page.tsx`, add a section covering: the URL, the three tools with their inputs, the Claude Code command from Task 6, and a note that the endpoint is read-only and needs no key. Match the surrounding component and styling patterns already in that page — do not introduce new UI primitives.

- [ ] **Step 6: Typecheck, test, and eyeball the rendered output**

Run: `npx tsc --noEmit && npx vitest run`

With `npm run dev` running, confirm each surface actually contains the endpoint:

```bash
curl -sS http://localhost:3000/llms.txt | grep -i "mcp"
curl -sS http://localhost:3000/agent-instructions.md | grep -i "mcp"
curl -sS http://localhost:3000/developers | grep -io "nudaui.dev/mcp" | head -3
```

Expected: a hit from each. Then load `http://localhost:3000/developers` in a browser and confirm the new section renders correctly and is not visually broken.

- [ ] **Step 7: Commit**

```bash
git add public/.well-known/ai.txt src/app/llms.txt/route.ts src/app/llms-full.txt/route.ts src/app/agent-instructions.md/route.ts src/app/developers/page.tsx
git commit -m "docs: announce the MCP endpoint on every agent-facing surface

ai.txt, llms.txt, llms-full.txt, agent-instructions.md and /developers
already have agent readers; none of them knew the server existed. The
'no npm package, no CLI' statement stays — it remains accurate."
```

---

## Self-Review

**Spec coverage.** Goal 1 (endpoint, three tools) → Tasks 2, 3, 4. Goal 2 (instrumentation) → Task 5. Goal 3 (registry prep) → Task 6. Goal 4 (agent surfaces) → Task 7. Goal 5 (non-drifting claims) → Task 1. Spec's *Verification* section → the HTTP steps inside Tasks 2, 3, 4 and 7, plus the desktop-client step which the spec assigns to the maintainer and is therefore excluded here by design. Spec's *Out of scope* (publication, demo, distribution) has no task, correctly.

**Placeholder scan.** No TBD/TODO. Tasks 7.3–7.5 describe content to match against file styles the implementer must read rather than quoting code verbatim; these are documentation edits in files too long to reproduce here, and each carries an explicit grep-based acceptance check in Step 6.

**Type consistency.** `listCategories`/`CategorySummary` (Task 2) are consumed unchanged in Task 7. `getComponent`/`GetComponentResult` (Task 3) uses `ComponentPayload` imported from `component-payload.ts`, which does export it. `searchComponentsTool`/`SearchHit` (Task 4) is consumed by Task 5's logging wrapper using the field names `count` and `degraded` as defined. `hashQuery`/`logToolCall` (Task 5) match their call sites. `allComponents()` returns `FlatComponent[]` whose members are `component`, `categoryId`, `categoryLabel` — used consistently in Tasks 3 and 4.
