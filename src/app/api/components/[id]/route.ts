import { site } from "@/lib/site";
import {
  allComponents,
  findComponent,
  componentPayload,
} from "@/lib/component-payload";

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
 */
export const dynamic = "force-static";
export const dynamicParams = false;
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
    return new Response(
      JSON.stringify({ error: "not_found", id: id.replace(/\.json$/i, "") }, null, 2),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      }
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
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
