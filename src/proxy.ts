import { NextResponse, type NextRequest } from "next/server";
import { appendVary, negotiate, notAcceptableBody } from "@/lib/accept";
import { methodNotAllowed, optionsResponse } from "@/lib/api-error";
import {
  PAGE_MEDIA_TYPES,
  isNegotiablePagePath,
  markdownRouteFor,
  normalizePath,
} from "@/lib/negotiation-routes";

/**
 * Request proxy (Next.js 16's replacement for `middleware`).
 *
 * Two jobs, both of which have to happen before a route is matched:
 *
 * 1. **Markdown content negotiation.** Server Components render HTML
 *    unconditionally, so this is the only place an App Router page can answer
 *    `Accept: text/markdown`. We rewrite to `/api/markdown/<path>`, 406 when
 *    nothing we produce is acceptable, and append `Accept` to `Vary` on every
 *    branch so a CDN never replays the wrong representation.
 *    Follows https://acceptmarkdown.com/recipes/nextjs/ (RFC 9110 §12.5.1 for
 *    ranking, RFC 7763 for the media type).
 *
 * 2. **Read-only method enforcement on the API.** Doing it here rather than
 *    as extra handler exports keeps `/api/catalog.json` and friends
 *    statically generated — a route file with a POST export can't be
 *    prerendered — while still answering a write attempt with the same JSON
 *    error envelope as every other failure.
 */

/** Methods the read-only API accepts. Everything else gets a JSON 405. */
const READ_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);

/** Paths that belong to the JSON API surface. */
function isApiPath(pathname: string): boolean {
  return pathname.startsWith("/api/") || pathname === "/openapi.json";
}

export function proxy(request: NextRequest): NextResponse | Response {
  const pathname = normalizePath(request.nextUrl.pathname);

  if (isApiPath(pathname)) {
    if (request.method === "OPTIONS") return optionsResponse();
    if (!READ_METHODS.has(request.method)) {
      return methodNotAllowed(request.method, pathname);
    }
    return NextResponse.next();
  }

  // React Server Component payload requests (client-side navigation and
  // prefetch) are not document requests. Leave them completely alone.
  if (
    request.headers.has("rsc") ||
    request.headers.has("next-router-prefetch")
  ) {
    return NextResponse.next();
  }

  if (!isNegotiablePagePath(pathname)) return NextResponse.next();

  // Explicit `.md` sibling: always Markdown, whatever the Accept header says.
  // This is the URL `<link rel="alternate">` points at, and crawlers that
  // follow it may send no Accept header at all.
  if (pathname.endsWith(".md")) {
    const url = request.nextUrl.clone();
    url.pathname = markdownRouteFor(pathname);
    const rewritten = NextResponse.rewrite(url);
    appendVary(rewritten.headers, "Accept", "Accept-Encoding");
    return rewritten;
  }

  const accept = request.headers.get("accept");
  const chosen = negotiate(accept, PAGE_MEDIA_TYPES);

  if (chosen === "text/markdown") {
    const url = request.nextUrl.clone();
    url.pathname = markdownRouteFor(pathname);
    const rewritten = NextResponse.rewrite(url);
    appendVary(rewritten.headers, "Accept", "Accept-Encoding");
    return rewritten;
  }

  if (chosen === null) {
    // RFC 9110 §15.5.7 — list what we *can* produce so the client can retry.
    const headers = new Headers({
      "Content-Type": "text/plain; charset=utf-8",
      // 406 depends entirely on the request header; never let it be cached.
      "Cache-Control": "no-store",
    });
    appendVary(headers, "Accept");
    return new Response(notAcceptableBody(PAGE_MEDIA_TYPES, accept), {
      status: 406,
      headers,
    });
  }

  // HTML branch.
  //
  // `Vary` is appended here for completeness, but be aware of a Next.js
  // limitation: prerendered pages replay the `Vary` captured in their build
  // metadata, which overwrites anything set upstream — by this proxy or by
  // `headers()` in next.config. (Other headers, `Link` included, survive
  // fine; `Vary` specifically does not.) Cache correctness does not depend
  // on it: Markdown requests are *rewritten* to `/api/markdown/…`, so the two
  // representations occupy different cache entries, and the Markdown response
  // — the one that actually varies — carries `Vary: Accept` itself.
  const response = NextResponse.next();
  appendVary(response.headers, "Accept", "Accept-Encoding");
  // Advertise the Markdown sibling and the API contract to link-aware agents
  // (RFC 8288 for `alternate`, RFC 8631 for `service-desc`).
  response.headers.set(
    "Link",
    [
      `<${request.nextUrl.origin}${pathname === "/" ? "/index" : pathname}.md>; rel="alternate"; type="text/markdown"`,
      `<${request.nextUrl.origin}/openapi.json>; rel="service-desc"`,
    ].join(", ")
  );
  return response;
}

export const config = {
  /**
   * Everything except framework internals and the single-representation
   * machine files, which have nothing to negotiate. `/api/` *is* matched —
   * that is where the method guard runs. `isNegotiablePagePath()` does the
   * fine-grained filtering for pages.
   */
  matcher: [
    "/((?!_next/|_vercel/|\\.well-known/|favicon\\.ico|robots\\.txt|sitemap\\.xml|llms\\.txt|llms-full\\.txt|feed\\.xml|humans\\.txt|opensearch\\.xml|agent-instructions\\.md).*)",
  ],
};
