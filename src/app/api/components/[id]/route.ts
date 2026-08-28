import { site, absoluteUrl } from "@/lib/site";
import {
  allComponents,
  findComponent,
  componentPayload,
} from "@/lib/component-payload";
import { JSON_HEADERS, componentNotFound } from "@/lib/api-error";

/**
 * /api/components/{id}.json — the full, paste-ready code for a single component.
 *
 * This is the endpoint the rest of the ecosystem was missing: catalog.json lists
 * components but omits their code, and the gallery is a client-rendered SPA an
 * agent can't scrape. Here an AI agent (or any tool) fetches one URL and gets
 * the complete HTML + CSS (+ optional JS), CORS-open and CDN-cached.
 *
 * URL shape mirrors catalog.json: `/api/components/toast-slide.json`. The id
 * param therefore carries a trailing `.json`, which the lookup strips.
 *
 * `dynamicParams` is deliberately `true`: every known id is prerendered by
 * `generateStaticParams`, but an *unknown* id must still reach this handler so
 * it gets the JSON 404 envelope below. With `dynamicParams = false` Next would
 * answer with the site's HTML 404 page, which an agent cannot parse.
 */
export const dynamicParams = true;
export const revalidate = 3600;

export function generateStaticParams(): { id: string }[] {
  return allComponents().map((f) => ({ id: `${f.component.id}.json` }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  const { id } = await params;
  const flat = findComponent(id);

  if (!flat) {
    return componentNotFound(
      id.replace(/\.json$/i, ""),
      `/api/components/${id}`
    );
  }

  const payload = {
    schemaVersion: "1.0",
    library: site.name,
    homepage: site.url,
    ...componentPayload(flat),
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      ...JSON_HEADERS,
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      Link: `<${absoluteUrl("/openapi.json")}>; rel="service-desc"`,
    },
  });
}
