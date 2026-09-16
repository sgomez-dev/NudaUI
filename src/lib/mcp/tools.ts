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
import {
  allComponents,
  componentPayload,
  findComponent,
  type ComponentPayload,
} from "@/lib/component-payload";

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
