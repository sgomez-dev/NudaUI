import { site, absoluteUrl } from "@/lib/site";
import { categories, totalCount } from "@/components/showcase/registry/categories";
import { categoryDescriptions } from "@/lib/category-meta";
import { allComponents, componentPayload } from "@/lib/component-payload";

/**
 * /api/catalog-full.json — the code-bearing companion to /api/catalog.json.
 *
 * `catalog.json` stays lean (metadata only) for cheap discovery. This endpoint
 * embeds the COMPLETE code (HTML + CSS + optional JS) and `cssInline` for every
 * component, so an agent that wants the whole library in one request — to seed a
 * RAG index or answer offline — fetches this once. Static + CDN-cached; the
 * registry only changes on deploy.
 *
 * (The original design floated `catalog.json?include=code`, but this site is
 * force-static — query-string variants aren't honored in a static render — so a
 * dedicated static route is the correct, cacheable shape.)
 */
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET(): Response {
  const flat = allComponents();
  const byCategory = new Map<string, ReturnType<typeof componentPayload>[]>();
  for (const f of flat) {
    const list = byCategory.get(f.categoryId) ?? [];
    list.push(componentPayload(f));
    byCategory.set(f.categoryId, list);
  }

  const payload = {
    schemaVersion: "1.1",
    name: site.name,
    description: site.shortDescription,
    homepage: site.url,
    repository: site.social.github,
    license: "MIT",
    generatedAt: new Date().toISOString(),
    totals: { components: totalCount, categories: categories.length },
    note: "Full mirror with complete code per component. For metadata only, use /api/catalog.json.",
    categories: categories.map((cat) => ({
      id: cat.id,
      label: cat.label,
      description:
        categoryDescriptions[cat.id] ?? "Copy-paste UI animations and components.",
      url: absoluteUrl(`/components#section-${cat.id}`),
      componentCount: cat.components.length,
      components: byCategory.get(cat.id) ?? [],
    })),
    links: {
      catalog: absoluteUrl("/api/catalog.json"),
      registry: absoluteUrl("/api/registry.json"),
      component: absoluteUrl("/api/components/{id}.json"),
      gallery: absoluteUrl("/components"),
      llms: absoluteUrl("/llms.txt"),
    },
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
