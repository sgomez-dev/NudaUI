/**
 * Which URLs take part in Markdown content negotiation, and where the
 * Markdown representation lives.
 *
 * Split out from `markdown-pages.ts` on purpose: this module is imported by
 * `src/middleware.ts`, which runs on the Edge runtime. It must therefore stay
 * dependency-free — no registry import, no Node built-ins, no React.
 */

/**
 * Representations every negotiable page can produce, most-preferred first.
 * HTML leads so browsers, `curl` (`Accept: *​/*`) and crawlers without an
 * opinion keep getting exactly what they get today.
 */
export const PAGE_MEDIA_TYPES = ["text/html", "text/markdown"] as const;

/** Internal route that renders the Markdown representation of a page. */
export const MARKDOWN_ROUTE_PREFIX = "/api/markdown";

/**
 * Path prefixes that are never HTML pages: framework internals, the JSON API,
 * and the `.well-known` tree (each of those URLs has exactly one
 * representation, so negotiating them would be wrong).
 */
const OPAQUE_PREFIXES = [
  "/_next/",
  "/_vercel/",
  "/api/",
  "/.well-known/",
] as const;

/**
 * Single-representation files served from the app router or `public/`.
 * `/llms.txt` is already Markdown, `/openapi.json` is already JSON — asking
 * either of them for a "Markdown variant" is a category error.
 */
const OPAQUE_PATHS = new Set([
  "/agent-instructions.md",
  "/apple-icon",
  "/favicon.ico",
  "/feed.xml",
  "/humans.txt",
  "/icon",
  "/llms-full.txt",
  "/llms.txt",
  "/manifest.webmanifest",
  "/opengraph-image",
  "/openapi.json",
  "/opensearch.xml",
  "/robots.txt",
  "/sitemap.xml",
  "/twitter-image",
]);

/**
 * Metadata routes that hang off a page path (`/components/<id>/icon`, …).
 * They are images, not documents.
 */
const METADATA_SUFFIXES = [
  "/opengraph-image",
  "/twitter-image",
  "/icon",
  "/apple-icon",
] as const;

/**
 * HTML pages we deliberately keep out of negotiation because no Markdown
 * representation exists for them yet. Serving HTML from a URL that never
 * varies is correct; promising a variant we cannot produce is not.
 */
const HTML_ONLY_PATHS = new Set(["/privacy", "/terms"]);

/** Strip a single trailing slash so `/about/` and `/about` behave alike. */
export function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

/**
 * True when `pathname` addresses an HTML document that also has a Markdown
 * representation — including paths that do not exist, so agents asking for
 * Markdown get a Markdown 404 instead of an HTML app shell.
 */
export function isNegotiablePagePath(pathname: string): boolean {
  const path = normalizePath(pathname);

  if (!path.startsWith("/")) return false;
  if (OPAQUE_PREFIXES.some((prefix) => path.startsWith(prefix))) return false;
  if (OPAQUE_PATHS.has(path)) return false;
  if (HTML_ONLY_PATHS.has(path)) return false;
  if (METADATA_SUFFIXES.some((suffix) => path.endsWith(suffix))) return false;

  // `/foo.md` is the Markdown sibling of `/foo` — negotiable by definition.
  if (path.endsWith(".md")) return true;

  // Anything else carrying a file extension is an asset, not a document.
  if (/\.[a-z0-9]+$/i.test(path)) return false;

  return true;
}

/**
 * `/components/pulse-dots` → `/api/markdown/components/pulse-dots`.
 *
 * The homepage has no path segment to append `.md` to, so its Markdown
 * sibling is `/index.md` — both it and `/` map to the bare prefix, which the
 * optional catch-all route receives as an empty slug.
 */
export function markdownRouteFor(pathname: string): string {
  const path = normalizePath(pathname);
  const withoutSuffix = path.endsWith(".md") ? path.slice(0, -3) : path;
  if (
    withoutSuffix === "" ||
    withoutSuffix === "/" ||
    withoutSuffix === "/index"
  ) {
    return MARKDOWN_ROUTE_PREFIX;
  }
  return `${MARKDOWN_ROUTE_PREFIX}${withoutSuffix}`;
}

/** `/api/markdown/components/pulse-dots` → `/components/pulse-dots`. */
export function pagePathForMarkdownRoute(slug: readonly string[]): string {
  if (slug.length === 0) return "/";
  return `/${slug.join("/")}`;
}
