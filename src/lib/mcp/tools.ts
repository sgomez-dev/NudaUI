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
  componentHasJS,
  totalCount,
} from "@/components/showcase/registry/categories";
import { categoryDescriptions } from "@/lib/category-meta";
import { absoluteUrl } from "@/lib/site";
import {
  allComponents,
  componentPayload,
  findComponent,
  type ComponentPayload,
} from "@/lib/component-payload";
import { searchComponents as ragSearch, RagError } from "@/lib/rag";

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

export interface ComponentSuggestion {
  id: string;
  name: string;
  category: string;
}

export type GetComponentResult =
  | { found: true; component: ComponentPayload }
  | {
      found: false;
      id: string;
      suggestions: ComponentSuggestion[];
      /**
       * Where to recover: the JSON id-enumeration endpoint, never the
       * client-rendered `/components` gallery an agent cannot scrape.
       * Phrased to match `componentNotFound()` in `@/lib/api-error` — the
       * REST 404 for the same failure — so both surfaces recover an agent
       * the same way.
       */
      hint: string;
    };

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

  const hint = `Enumerate valid ids at ${absoluteUrl("/api/registry.json")}, then retry with one of them.`;
  return { found: false, id: rawId, suggestions, hint };
}

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
 * Requests up to double the page size from the index (`k = min(20, limit *
 * 2)`) so post-filtering by category/hasJS still has headroom to fill a
 * page — but only below `limit: 10`. The service (verified live against
 * `rag.nudaui.dev`: `k > 20` returns 422 "Input should be less than or
 * equal to 20") hard-caps `k` at 20, the same value as the tool's own max
 * `limit`, so at `limit >= 10` the doubled request collapses to exactly
 * `limit` candidates and filtering gets no extra headroom — that ceiling
 * is the index's, not a choice made here. Every hit is hydrated from the
 * local registry — the index only supplies ranking, never content.
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
    const k = Math.min(20, limit * 2);
    const response = await ragSearch(
      args.query,
      k,
      AbortSignal.timeout(RAG_TIMEOUT_MS),
    );
    const byId = new Map(allComponents().map((f) => [f.component.id, f]));
    const hydrated = response.results
      .map((r) => byId.get(r.id))
      .filter((f): f is NonNullable<typeof f> => Boolean(f))
      .map(toHit);

    if (response.results.length > 0 && hydrated.length === 0) {
      // The index returned hits, but none resolve against the current
      // registry — that's drift between the index and the catalog, not a
      // legitimate empty result. Report it as degraded and fall back.
      ranked = null;
    } else {
      // Either the index found real, resolvable hits, or it legitimately
      // found nothing at all (an empty array is a real empty result).
      ranked = hydrated;
    }
  } catch (err) {
    // Index unreachable, erroring, or our own timeout — fall through to
    // local ranking below rather than failing the call.
    if (
      err instanceof RagError ||
      (err instanceof DOMException && err.name === "AbortError")
    ) {
      ranked = null;
    } else {
      throw err;
    }
  }

  const degraded = ranked === null;
  const results = filter(ranked ?? localSearch(args.query, limit * 3));

  return { query: args.query, degraded, count: results.length, results };
}
