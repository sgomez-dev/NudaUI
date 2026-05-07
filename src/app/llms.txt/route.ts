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
  lines.push(`- [RSS feed](${absoluteUrl("/feed.xml")})`);
  lines.push(`- [Security policy](${absoluteUrl("/.well-known/security.txt")})`);
  lines.push(`- [humans.txt](${absoluteUrl("/humans.txt")})`);
  lines.push(`- [robots.txt](${absoluteUrl("/robots.txt")})`);
  lines.push(`- [sitemap.xml](${absoluteUrl("/sitemap.xml")})`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // Public — LLM crawlers follow CDN caching like everyone else.
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
