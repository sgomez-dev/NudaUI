import { site, absoluteUrl } from "@/lib/site";
import { JSON_HEADERS } from "@/lib/api-error";
import { totalCount, categories } from "@/components/showcase/registry/categories";
import { allComponents } from "@/lib/component-payload";

/**
 * /api/registry.json — a flat, shadcn-style index of every component with the
 * URL to fetch its full code. This is the cheap fan-out entry point: an agent
 * grabs this once to enumerate everything, then GETs `json` per component as
 * needed. Static + CDN-cached.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET(): Response {
  const payload = {
    schemaVersion: "1.0",
    name: site.name,
    homepage: site.url,
    license: "MIT",
    totals: { components: totalCount, categories: categories.length },
    components: allComponents().map(({ component: c, categoryId }) => ({
      id: c.id,
      name: c.name,
      categoryId,
      languages: c.code.map((t) => t.language),
      json: absoluteUrl(`/api/components/${c.id}.json`),
      page: absoluteUrl(`/components/${c.id}`),
    })),
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      ...JSON_HEADERS,
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      // RFC 8631: point every consumer at the machine-readable contract.
      Link: `<${absoluteUrl("/openapi.json")}>; rel="service-desc"`,
    },
  });
}
