import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

/**
 * Robots policy.
 *
 * We permit every classic search crawler, and explicitly opt major AI
 * scrapers in since this is a public open-source reference site — the
 * whole point is discoverability, including via LLMs. Tighten this
 * ruleset if that stance ever changes.
 *
 * The `/api/` disallow is defensive: we don't have API routes today,
 * but listing it now avoids a missed edge later.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      // Explicit allow-list for AI training/search crawlers. Being explicit
      // (vs relying on the wildcard) survives future policy debates cleanly.
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "Applebot",
          "Applebot-Extended",
          "CCBot",
          "Google-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: site.url,
  };
}
