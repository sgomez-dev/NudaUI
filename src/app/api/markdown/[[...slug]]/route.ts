import {
  MARKDOWN_CONTENT_TYPE,
  appendVary,
} from "@/lib/accept";
import { markdownForPath } from "@/lib/markdown-pages";
import { pagePathForMarkdownRoute } from "@/lib/negotiation-routes";
import { absoluteUrl } from "@/lib/site";

/**
 * The Markdown representation of any page on the site.
 *
 * Never linked and never navigated to directly — `src/middleware.ts` rewrites
 * here when a client prefers `text/markdown` (or asks for the `.md` sibling),
 * so the canonical URL an agent knows is the one it keeps using.
 *
 * `Vary: Accept` is set here as well as in the middleware because this
 * response is the one a CDN stores: without it, the Markdown variant could be
 * replayed to a browser that asked for HTML.
 */
export const dynamic = "force-dynamic";

function markdownHeaders(pagePath: string, status: number): Headers {
  const headers = new Headers({
    "Content-Type": MARKDOWN_CONTENT_TYPE,
    "Cache-Control":
      status === 404
        ? // Never cache a miss: the id may exist after the next deploy, and a
          // cached 404 would keep answering for it.
          "no-store"
        : // Same one-hour TTL as the JSON API — the registry changes on deploy.
          "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    "Access-Control-Allow-Origin": "*",
    // Point back at the HTML representation (RFC 8288).
    Link: `<${absoluteUrl(pagePath)}>; rel="canonical"`,
  });
  appendVary(headers, "Accept", "Accept-Encoding");
  return headers;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug?: string[] }> }
): Promise<Response> {
  const { slug = [] } = await params;
  const pagePath = pagePathForMarkdownRoute(slug);
  const { body, status } = markdownForPath(pagePath);

  return new Response(body, {
    status,
    headers: markdownHeaders(pagePath, status),
  });
}

export async function HEAD(
  request: Request,
  context: { params: Promise<{ slug?: string[] }> }
): Promise<Response> {
  const response = await GET(request, context);
  return new Response(null, {
    status: response.status,
    headers: response.headers,
  });
}
