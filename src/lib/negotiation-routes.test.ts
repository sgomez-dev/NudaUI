import { describe, expect, it } from "vitest";
import {
  MARKDOWN_ROUTE_PREFIX,
  PAGE_MEDIA_TYPES,
  isNegotiablePagePath,
  markdownRouteFor,
  normalizePath,
  pagePathForMarkdownRoute,
} from "./negotiation-routes";

describe("PAGE_MEDIA_TYPES", () => {
  it("lists HTML first so browsers and */* clients keep getting HTML", () => {
    expect(PAGE_MEDIA_TYPES[0]).toBe("text/html");
    expect(PAGE_MEDIA_TYPES).toContain("text/markdown");
  });
});

describe("normalizePath", () => {
  it("drops a single trailing slash but keeps the root", () => {
    expect(normalizePath("/about/")).toBe("/about");
    expect(normalizePath("/about")).toBe("/about");
    expect(normalizePath("/")).toBe("/");
  });
});

describe("isNegotiablePagePath", () => {
  it.each([
    "/",
    "/components",
    "/components/toast-slide",
    "/developers",
    "/about",
    "/contact",
    "/changelog",
    "/about.md",
    "/index.md",
    // Unknown paths negotiate too, so agents get a Markdown 404 rather than
    // an HTML app shell they cannot parse.
    "/this-page-does-not-exist",
  ])("negotiates %s", (path) => {
    expect(isNegotiablePagePath(path)).toBe(true);
  });

  it.each([
    // Framework internals and the JSON API.
    "/_next/static/chunk.js",
    "/_vercel/insights",
    "/api/catalog.json",
    "/api/markdown/about",
    "/.well-known/ai.txt",
    // Single-representation documents — negotiating these is a category error.
    "/llms.txt",
    "/llms-full.txt",
    "/robots.txt",
    "/sitemap.xml",
    "/feed.xml",
    "/openapi.json",
    "/agent-instructions.md",
    "/opensearch.xml",
    "/humans.txt",
    // Generated images.
    "/opengraph-image",
    "/components/toast-slide/opengraph-image",
    "/icon",
    "/banner.png",
    // No Markdown twin exists for the legal pages yet.
    "/privacy",
    "/terms",
  ])("leaves %s alone", (path) => {
    expect(isNegotiablePagePath(path)).toBe(false);
  });
});

describe("markdownRouteFor", () => {
  it("maps the homepage and its .md sibling to the bare prefix", () => {
    expect(markdownRouteFor("/")).toBe(MARKDOWN_ROUTE_PREFIX);
    expect(markdownRouteFor("/index.md")).toBe(MARKDOWN_ROUTE_PREFIX);
  });

  it("prefixes normal page paths", () => {
    expect(markdownRouteFor("/developers")).toBe(
      "/api/markdown/developers"
    );
    expect(markdownRouteFor("/components/toast-slide")).toBe(
      "/api/markdown/components/toast-slide"
    );
  });

  it("strips the .md suffix so both URLs hit one handler", () => {
    expect(markdownRouteFor("/developers.md")).toBe(
      markdownRouteFor("/developers")
    );
  });
});

describe("pagePathForMarkdownRoute", () => {
  it("round-trips with markdownRouteFor", () => {
    for (const path of ["/", "/developers", "/components/toast-slide"]) {
      const slug = markdownRouteFor(path)
        .slice(MARKDOWN_ROUTE_PREFIX.length)
        .split("/")
        .filter(Boolean);
      expect(pagePathForMarkdownRoute(slug)).toBe(path);
    }
  });
});
