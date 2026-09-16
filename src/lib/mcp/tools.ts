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
