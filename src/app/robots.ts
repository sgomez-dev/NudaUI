import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

/**
 * Robots policy.
 *
 * NudaUI is an open, public reference for animations — discoverability is
 * a feature, not a leak. So we open the site to:
 *   1. Every classic web crawler (Google, Bing, DuckDuckGo, Yandex, …)
 *   2. Every major AI/search bot from foundation-model providers
 *      (OpenAI, Anthropic, Perplexity, Apple, Google AI, Meta, ByteDance, …)
 *
 * Tighten this ruleset only if our stance on AI training/grounding ever
 * changes. The `/_next/` and `/private/` disallows are defensive; the
 * `/api/markdown/` one is real — that path is the internal destination the
 * content-negotiation middleware rewrites to, so it must never be indexed
 * as a URL in its own right.
 *
 * The host + sitemap fields tell crawlers the canonical origin and where
 * the up-to-date URL list lives. We deliberately don't set Crawl-delay:
 * Googlebot ignores it and we want fast re-indexing for the catalog.
 */
export default function robots(): MetadataRoute.Robots {
  // The JSON API is *deliberately* crawlable: /api/catalog.json and friends
  // are the canonical machine-readable view of the catalog, and blocking them
  // would hide the very resources llms.txt and openapi.json point at. Only
  // framework internals and the Markdown negotiation target — an internal
  // rewrite destination, never a canonical URL — stay closed.
  const disallowDefault = ["/_next/", "/private/", "/api/markdown/"];

  return {
    rules: [
      // ── Catch-all wildcard. Anything not matched below inherits this. ──
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowDefault,
      },

      // ── Classic search & web crawlers. Listed explicitly so any future
      //    wildcard tightening doesn't accidentally lock them out. ──
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-News",
          "Googlebot-Video",
          "Bingbot",
          "Slurp", // Yahoo
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "Yeti", // Naver
          "SeznamBot",
          "Mojeekbot",
          "Qwantify",
          "Sogou web spider",
        ],
        allow: "/",
        disallow: disallowDefault,
      },

      // ── AI / LLM grounding & training crawlers. We allow them on
      //    purpose — see header comment. Bots are grouped by vendor for
      //    easy individual revocation later. ──
      {
        userAgent: [
          // OpenAI
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          // Anthropic
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          // Perplexity
          "PerplexityBot",
          "Perplexity-User",
          // Google AI
          "Google-Extended",
          // Apple AI
          "Applebot",
          "Applebot-Extended",
          // Common Crawl (dataset upstream of many models)
          "CCBot",
          // Cohere
          "cohere-ai",
          // Diffbot
          "Diffbot",
          // ByteDance / TikTok
          "Bytespider",
          // Meta
          "FacebookBot",
          "Meta-ExternalAgent",
          "meta-externalfetcher",
          // Microsoft Copilot
          "MSNBot",
          "MSNBot-Media",
          "BingPreview",
          // LinkedIn
          "LinkedInBot",
          // Pinterest
          "Pinterestbot",
          // Other training/embedding crawlers
          "Amazonbot",
          "YouBot",
          "Webzio-Extended",
          "Timpibot",
          "ImagesiftBot",
          "ai2bot",
          "Bytespider",
          "Kagibot",
          "PetalBot",
        ],
        allow: "/",
        disallow: disallowDefault,
      },
    ],
    sitemap: [absoluteUrl("/sitemap.xml")],
    host: site.url,
  };
}
