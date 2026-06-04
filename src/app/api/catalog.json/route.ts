import { site, absoluteUrl } from "@/lib/site";
import {
  categories,
  totalCount,
  componentHasJS,
} from "@/components/showcase/registry/categories";
import { categoryDescriptions } from "@/lib/category-meta";

/**
 * /api/catalog.json — machine-readable mirror of the entire NudaUI registry.
 *
 * Why this exists:
 *   - AI agents, MCP servers, RAG pipelines, and integrations need a stable,
 *     structured source of truth they can fetch without scraping HTML.
 *   - Search engines that index JSON (Google does) get a second indexable
 *     view of every component, with rich metadata.
 *   - Anyone building "search NudaUI from your editor" can hit one URL.
 *
 * Stable contract:
 *   - Top-level `schemaVersion` lets us evolve safely.
 *   - Categories preserve registry order (mirrors UI).
 *   - Each component exposes: id, name, category, languages, sectionUrl.
 *     We deliberately DON'T include cssInline or code tabs here — those
 *     are large and they're rendered on /components. Future versions may
 *     expose them under a `?include=code` query parameter.
 *
 * Cache: 1h public revalidation. Components change with deploys, not
 * runtime — there's no reason to hit origin on every request.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET(): Response {
  const payload = {
    schemaVersion: "1.0",
    name: site.name,
    tagline: site.tagline,
    description: site.shortDescription,
    homepage: site.url,
    repository: site.social.github,
    license: "MIT",
    generatedAt: new Date().toISOString(),
    totals: {
      components: totalCount,
      categories: categories.length,
    },
    categories: categories.map((cat) => ({
      id: cat.id,
      label: cat.label,
      description:
        categoryDescriptions[cat.id] ??
        "Copy-paste UI animations and components.",
      url: absoluteUrl(`/components#section-${cat.id}`),
      componentCount: cat.components.length,
      components: cat.components.map((c) => ({
        id: c.id,
        name: c.name,
        languages: c.code.map((t) => t.language),
        hasJS: componentHasJS(c),
        anchor: `${absoluteUrl("/components")}#${c.id}`,
      })),
    })),
    links: {
      gallery: absoluteUrl("/components"),
      registry: absoluteUrl("/api/registry.json"),
      catalogFull: absoluteUrl("/api/catalog-full.json"),
      component: absoluteUrl("/api/components/{id}.json"),
      sitemap: absoluteUrl("/sitemap.xml"),
      llms: absoluteUrl("/llms.txt"),
      llmsFull: absoluteUrl("/llms-full.txt"),
      ai: absoluteUrl("/.well-known/ai.txt"),
      changelog: absoluteUrl("/changelog"),
    },
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      // CORS: this is meant to be consumed by any tool, anywhere.
      "Access-Control-Allow-Origin": "*",
      // Hint to LLM-aware proxies about content type
      "X-Catalog-Schema": "https://nudaui.dev/api/catalog.json",
    },
  });
}
