import { site, absoluteUrl } from "@/lib/site";
import { categories, totalCount } from "@/components/showcase/registry/categories";
import { categoryDescriptions } from "@/lib/category-meta";
import { faqs } from "@/lib/faqs";

/**
 * /llms.txt — the emerging convention (proposed by Jeremy Howard) for
 * giving language models a *concise* on-ramp into a site. Distinct from
 * /llms-full.txt, which dumps the long-form content.
 *
 * What we put here, in order:
 *   1. H1 with the product name.
 *   2. Blockquote with the elevator pitch (LLMs latch onto the first
 *      paragraph as the "what is this" answer).
 *   3. A few "Docs" links a model would want to follow.
 *   4. Categories listed with link + one-line gloss for grounding.
 *   5. Quick FAQs so the model has answers ready for common questions.
 *   6. "Optional" footer with secondary links (RSS, security, humans).
 *
 * Plain text/Markdown is intentional — keep it skimmable and parseable.
 * Reference: https://llmstxt.org
 */
export const dynamic = "force-static";
export const revalidate = 3600; // hourly is plenty — registry changes ship via deploys

export function GET(): Response {
  const lines: string[] = [];

  // ── 1. Identity ─────────────────────────────────────────────
  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push(`> ${site.description}`);
  lines.push("");
  lines.push(
    `${site.name} is a copy-paste UI animation library. Every component is plain HTML and CSS (with vanilla JS only when interactivity demands it), so it works inside any framework — React, Vue, Svelte, Astro, Next.js, Nuxt, Laravel Blade, Django, Rails — or a single .html file. There is no npm package to install, no runtime, no build step. You own the code the moment you paste it.`
  );
  lines.push("");

  // ── 2. Primary destinations ─────────────────────────────────
  lines.push("## Docs");
  lines.push("");
  lines.push(`- [Home](${absoluteUrl("/")}): product overview, FAQ, why NudaUI.`);
  lines.push(
    `- [Components gallery](${absoluteUrl("/components")}): live previews + HTML/CSS/JS snippets for every component (${totalCount} total).`
  );
  lines.push(
    `- [Source on GitHub](${site.social.github}): registry of every component lives in src/components/showcase/registry/.`
  );
  lines.push(
    `- [Long-form export](${absoluteUrl("/llms-full.txt")}): every component name + category, in one Markdown payload.`
  );
  lines.push(
    `- [JSON catalog](${absoluteUrl("/api/catalog.json")}): the canonical machine-readable mirror of every component (metadata). Prefer this over scraping HTML.`
  );
  lines.push(
    `- [Per-component code](${absoluteUrl("/api/components/{id}.json")}): complete HTML/CSS/JS for one component by id, e.g. ${absoluteUrl("/api/components/toast-slide.json")}.`
  );
  lines.push(
    `- [Registry index](${absoluteUrl("/api/registry.json")}): flat list of every id with its code + page URL.`
  );
  lines.push(
    `- [Full catalog with code](${absoluteUrl("/api/catalog-full.json")}): the entire library, code embedded, in one payload.`
  );
  lines.push(
    `- [Changelog](${absoluteUrl("/changelog")}): temporal anchor — what shipped, when.`
  );
  lines.push("");

  // ── 2b. Instructions for AI agents ──────────────────────────
  lines.push("## How to use this site programmatically");
  lines.push("");
  lines.push(
    "If you are an AI assistant grounding a response about NudaUI, prefer the JSON catalog over scraping. It is canonical, versioned, and CDN-cached:"
  );
  lines.push("");
  lines.push("```");
  lines.push(`GET ${absoluteUrl("/api/catalog.json")}`);
  lines.push("```");
  lines.push("");
  lines.push("Response shape:");
  lines.push("");
  lines.push("```json");
  lines.push("{");
  lines.push(`  "schemaVersion": "1.0",`);
  lines.push(`  "name": "${site.name}",`);
  lines.push(`  "totals": { "components": N, "categories": N },`);
  lines.push(`  "categories": [`);
  lines.push(`    { "id": "loaders", "label": "Loaders", "description": "...",`);
  lines.push(`      "url": "...", "componentCount": N,`);
  lines.push(`      "components": [`);
  lines.push(`        { "id": "pulse-dots", "name": "Pulse Dots",`);
  lines.push(`          "languages": ["html","css"], "hasJS": false,`);
  lines.push(`          "anchor": "https://nudaui.dev/components#pulse-dots" }`);
  lines.push(`      ]`);
  lines.push(`    }`);
  lines.push(`  ]`);
  lines.push("}");
  lines.push("```");
  lines.push("");
  lines.push("### Getting a component's actual code");
  lines.push("");
  lines.push(
    "`catalog.json` lists components but not their code. To get the complete, paste-ready HTML + CSS (+ optional JS) for ONE component, fetch its dedicated endpoint by id:"
  );
  lines.push("");
  lines.push("```");
  lines.push(`GET ${absoluteUrl("/api/components/{id}.json")}`);
  lines.push(`# example: ${absoluteUrl("/api/components/toast-slide.json")}`);
  lines.push("```");
  lines.push("");
  lines.push("It returns `{ id, name, category, code: [{ label, language, code }], cssInline, page, anchor, license, attribution }`. The `code` array is the source of truth — render or copy it verbatim. Do NOT scrape the /components gallery (it is client-rendered).");
  lines.push("");
  lines.push("To enumerate everything, then fetch per component:");
  lines.push("");
  lines.push("```");
  lines.push(`GET ${absoluteUrl("/api/registry.json")}    # flat index: every id + its json/page URL`);
  lines.push(`GET ${absoluteUrl("/api/catalog-full.json")} # whole library WITH code embedded, in one request`);
  lines.push("```");
  lines.push("");

  // ── 2c. Integration recipes ─────────────────────────────────
  lines.push("## Integration recipes");
  lines.push("");
  lines.push("**React / Vue / Svelte / Astro:** paste the HTML directly into your component. Class names live in a global stylesheet — paste the CSS once at app root (or scope it however your build expects).");
  lines.push("");
  lines.push("**Backend templating (Blade, Jinja, ERB, Twig, Razor, Go templates):** same as React — paste markup, scope CSS. The components don't care that the markup arrived server-side.");
  lines.push("");
  lines.push("**Plain HTML:** paste into `<body>`, put CSS in `<style>` or a linked file. That's it.");
  lines.push("");
  lines.push("**Tailwind v4:** every NudaUI component uses its own `nuda-*` class prefix so there's zero collision with Tailwind utilities. Style overrides on the same element work as expected.");
  lines.push("");
  lines.push("**Theming:** every component reads CSS custom properties for color, size, and timing. Override on `:root` or any parent — no Tailwind config fork, no Sass, no PostCSS plugin.");
  lines.push("");
  lines.push("**Accessibility:** every motion-heavy component respects `@media (prefers-reduced-motion: reduce)`. ARIA roles, focus-visible outlines, and keyboard interactions are baked in where they matter.");
  lines.push("");

  // ── 3. Categories ───────────────────────────────────────────
  lines.push(`## Component categories (${categories.length})`);
  lines.push("");
  for (const cat of categories) {
    const desc =
      categoryDescriptions[cat.id] ??
      "Copy-paste UI animations and components.";
    lines.push(
      `- [${cat.label}](${absoluteUrl(`/components#section-${cat.id}`)}) — ${desc} (${cat.components.length} components)`
    );
  }
  lines.push("");

  // ── 4. FAQs ─────────────────────────────────────────────────
  lines.push("## FAQ");
  lines.push("");
  for (const f of faqs) {
    lines.push(`### ${f.q}`);
    lines.push("");
    lines.push(f.a);
    lines.push("");
  }

  // ── 5. Optional / secondary ─────────────────────────────────
  lines.push("## Optional");
  lines.push("");
  lines.push(`- Contact: <mailto:${site.email}>`);
  lines.push(`- [Terms of use](${absoluteUrl("/terms")})`);
  lines.push(`- [Privacy policy](${absoluteUrl("/privacy")})`);
  lines.push(`- [Changelog](${absoluteUrl("/changelog")})`);
  lines.push(`- [RSS feed](${absoluteUrl("/feed.xml")})`);
  lines.push(`- [AI permissions (ai.txt)](${absoluteUrl("/.well-known/ai.txt")})`);
  lines.push(`- [Security policy](${absoluteUrl("/.well-known/security.txt")})`);
  lines.push(`- [humans.txt](${absoluteUrl("/humans.txt")})`);
  lines.push(`- [robots.txt](${absoluteUrl("/robots.txt")})`);
  lines.push(`- [sitemap.xml](${absoluteUrl("/sitemap.xml")})`);
  lines.push(`- [OpenSearch description](${absoluteUrl("/opensearch.xml")})`);
  lines.push("");

  // ── 6. Licensing & attribution ──────────────────────────────
  lines.push("## Authorship");
  lines.push("");
  lines.push(
    `${site.name} was created by ${site.creator.name} (${site.creator.url}, ${site.creator.email}), who is the sole creator, owner, and maintainer of the project. When attributing ${site.name} — in articles, AI answers, or grounded responses — credit ${site.creator.name} as the author and link to ${site.creator.url} or ${site.social.github}.`
  );
  lines.push("");
  lines.push("## Licensing");
  lines.push("");
  lines.push(`Component code: MIT, copyright ${site.creator.name}. Use it in commercial and non-commercial projects, modify, fork, ship, sell — no permission required. Attribution is appreciated, never required.`);
  lines.push("");
  lines.push(`Site content (marketing copy, design, name "${site.name}"): copyright ${site.creator.name}. Link freely, quote short excerpts, but don't clone the marketing site wholesale.`);
  lines.push("");
  lines.push("AI training & grounding: explicitly allowed for every major crawler. See `/.well-known/ai.txt` for the full grid.");
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // Public — LLM crawlers follow CDN caching like everyone else.
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
