import { openApiDocument } from "@/lib/openapi";
import { JSON_HEADERS } from "@/lib/api-error";
import { absoluteUrl } from "@/lib/site";

/**
 * /openapi.json — the machine-readable contract for the NudaUI API.
 *
 * Published at the root (not under /api/) because that is the path tools and
 * audits probe first, and because it describes the whole site's programmatic
 * surface, not one endpoint family. It is also advertised as
 * `Link: <…>; rel="service-desc"` (RFC 8631) on every JSON response, and as a
 * `<link rel="service-desc">` in the document head.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET(): Response {
  return new Response(JSON.stringify(openApiDocument(), null, 2), {
    headers: {
      ...JSON_HEADERS,
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      Link: `<${absoluteUrl("/openapi.json")}>; rel="service-desc"`,
    },
  });
}
