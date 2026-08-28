/**
 * The Markdown representation of every negotiable page.
 *
 * `src/middleware.ts` rewrites a request that prefers `text/markdown` to
 * `/api/markdown/<path>`, and that route handler calls `markdownForPath()`.
 * Unknown paths resolve to a Markdown 404 that hands the agent a site map so
 * it can recover in one more request instead of giving up.
 *
 * This module imports the registry, so it must stay out of the Edge runtime —
 * `negotiation-routes.ts` holds the path predicates the middleware needs.
 */

import { absoluteUrl, site } from "@/lib/site";
import { renderDocMarkdown } from "@/lib/doc";
import { faqs } from "@/lib/faqs";
import { categoryDescriptions } from "@/lib/category-meta";
import {
  categories,
  totalCount,
} from "@/components/showcase/registry/categories";
import { findComponent, componentPayload } from "@/lib/component-payload";
import { changelogEntries } from "@/lib/changelog";
import {
  featureCards,
  howItWorksSteps,
  manifestoPoints,
} from "@/lib/landing-content";
import { aboutDoc } from "@/lib/pages/about";
import { contactDoc } from "@/lib/pages/contact";
import { developersDoc } from "@/lib/pages/developers";
import { agentInstructionsDoc } from "@/lib/agent-guidance";
import { normalizePath } from "@/lib/negotiation-routes";

export interface MarkdownResult {
  body: string;
  status: 200 | 404;
}

/* ── Homepage ────────────────────────────────────────────────────────── */

function homeMarkdown(): string {
  const out: string[] = [];

  out.push(`# ${site.name} — ${site.tagline}`, "");
  out.push(`> ${site.description}`, "");
  out.push(
    `Copy it. Paste it. Ship it. ${site.name} is a collection of ${totalCount} framework-agnostic animations across ${categories.length} categories — pure HTML, CSS, and a sprinkle of vanilla JS. No build step. No config. Works with Laravel, Django, Rails, Go, or a plain \`.html\` file.`,
    ""
  );

  out.push("## At a glance", "");
  out.push("| | |", "| --- | --- |");
  out.push(`| Components | ${totalCount} |`);
  out.push(`| Categories | ${categories.length} |`);
  out.push("| Dependencies | none |");
  out.push("| Install step | none — copy and paste |");
  out.push("| Licence | MIT (component code) |");
  out.push(`| Gallery | ${absoluteUrl("/components")} |`);
  out.push(`| JSON API | ${absoluteUrl("/openapi.json")} |`);
  out.push("");

  out.push("## Six principles. One tiny library.", "");
  for (const feature of featureCards) {
    out.push(`### ${feature.title}`, "", feature.body, "");
  }

  out.push("## Three steps. No install wizard.", "");
  for (const step of howItWorksSteps) {
    out.push(`${Number(step.n)}. **${step.title}** ${step.body}`);
  }
  out.push("");

  out.push("## We have opinions.", "");
  for (const point of manifestoPoints) {
    out.push(`### ${point.title}`, "", point.body, "");
  }

  out.push(`## The catalog, at a glance (${categories.length} categories)`, "");
  for (const category of categories) {
    const description =
      categoryDescriptions[category.id] ??
      "Copy-paste UI animations and components.";
    out.push(
      `- [${category.label}](${absoluteUrl(`/components#section-${category.id}`)}) — ${description} (${category.components.length} components)`
    );
  }
  out.push("");

  out.push("## Questions, honestly answered", "");
  for (const faq of faqs) {
    out.push(`### ${faq.q}`, "", faq.a, "");
  }

  out.push("## Where to go next", "");
  out.push(
    `- [Component gallery](${absoluteUrl("/components")}) — live previews and snippets for all ${totalCount} components`,
    `- [Developer portal](${absoluteUrl("/developers")}) — the JSON API, no key required`,
    `- [Agent instructions](${absoluteUrl("/agent-instructions.md")}) — when to use ${site.name}, and when not to`,
    `- [llms.txt](${absoluteUrl("/llms.txt")}) — grounding index for language models`,
    `- [About](${absoluteUrl("/about")}) · [Contact](${absoluteUrl("/contact")}) · [Changelog](${absoluteUrl("/changelog")}) · [Terms](${absoluteUrl("/terms")}) · [Privacy](${absoluteUrl("/privacy")})`,
    ""
  );

  out.push("---", "");
  out.push(`Canonical HTML version: ${site.url}`, "");

  return out.join("\n");
}

/* ── Gallery index ───────────────────────────────────────────────────── */

function componentsIndexMarkdown(): string {
  const out: string[] = [];

  out.push(`# ${site.name} component gallery`, "");
  out.push(
    `> Every one of the ${totalCount} components in the ${site.name} registry, grouped into ${categories.length} categories. Each entry links to its own page; each page carries the paste-ready HTML and CSS.`,
    ""
  );
  out.push(
    `The HTML gallery is client-rendered, so scraping it returns an empty shell. Use this document, or the JSON API at ${absoluteUrl("/api/catalog.json")}.`,
    ""
  );

  for (const category of categories) {
    const description =
      categoryDescriptions[category.id] ??
      "Copy-paste UI animations and components.";
    out.push(`## ${category.label} (${category.components.length})`, "");
    out.push(description, "");
    for (const component of category.components) {
      out.push(
        `- [${component.name}](${absoluteUrl(`/components/${component.id}`)}) — \`${component.id}\``
      );
    }
    out.push("");
  }

  out.push("---", "");
  out.push(`Canonical HTML version: ${absoluteUrl("/components")}`, "");

  return out.join("\n");
}

/* ── One component ───────────────────────────────────────────────────── */

function componentMarkdown(id: string): MarkdownResult {
  const flat = findComponent(id);
  if (!flat) return { body: notFoundMarkdown(`/components/${id}`), status: 404 };

  const payload = componentPayload(flat);
  const out: string[] = [];

  out.push(`# ${payload.name}`, "");
  out.push(
    `> A copy-paste ${payload.category} component from ${site.name}. Pure HTML + CSS${payload.hasJS ? " + vanilla JS" : ""}, zero dependencies, MIT licensed.`,
    ""
  );
  out.push("| | |", "| --- | --- |");
  out.push(`| Id | \`${payload.id}\` |`);
  out.push(`| Category | ${payload.category} (\`${payload.categoryId}\`) |`);
  out.push(`| Languages | ${payload.languages.join(", ")} |`);
  out.push(`| Needs JavaScript | ${payload.hasJS ? "yes" : "no"} |`);
  out.push(`| Licence | MIT |`);
  out.push(`| JSON | ${absoluteUrl(`/api/components/${payload.id}.json`)} |`);
  out.push("");

  out.push("## Code", "");
  out.push("Paste this verbatim. Nothing here needs a build step.", "");
  for (const tab of payload.code) {
    out.push(`### ${tab.label}`, "");
    out.push("```" + tab.language, tab.code, "```", "");
  }

  if (payload.cssInline) {
    out.push("### Preview-only CSS", "");
    out.push(
      "Extra styling the live preview injects. Copy it only if you want the demo's exact framing.",
      ""
    );
    out.push("```css", payload.cssInline, "```", "");
  }

  out.push("## Using it", "");
  out.push(
    "- Drop the HTML wherever you need it — JSX, Blade, Jinja, ERB, or a plain `.html` file.",
    "- Put the CSS in a global stylesheet, a `<style>` block, or whatever your build expects.",
    "- Colour, size and timing read from CSS custom properties: override them on `:root` or any parent.",
    "- Class names are prefixed `nuda-*`, so nothing collides with Tailwind utilities.",
    ""
  );

  out.push("---", "");
  out.push(`Canonical HTML version: ${payload.page}`, "");

  return { body: out.join("\n"), status: 200 };
}

/* ── Changelog ───────────────────────────────────────────────────────── */

function changelogMarkdown(): string {
  const out: string[] = [];

  out.push(`# ${site.name} changelog`, "");
  out.push(
    "> A running log of what shipped, when. Newest at the top. Use it to judge how fresh this catalog is.",
    ""
  );

  for (const entry of changelogEntries) {
    out.push(`## ${entry.date} (${entry.iso})`, "");
    for (const bullet of entry.bullets) out.push(`- ${bullet}`);
    out.push("");
  }

  out.push("---", "");
  out.push(`Canonical HTML version: ${absoluteUrl("/changelog")}`, "");

  return out.join("\n");
}

/* ── 404 ─────────────────────────────────────────────────────────────── */

/**
 * The Markdown 404 body. Short on apology, long on recovery: an agent that
 * lands here should be able to reach the thing it actually wanted in one
 * more request.
 */
export function notFoundMarkdown(requestedPath?: string): string {
  const out: string[] = [];

  out.push(`# 404 — page not found`, "");
  out.push(
    `> ${requestedPath ? `\`${requestedPath}\` does not exist on ${site.url}.` : `That path does not exist on ${site.url}.`} Nothing was moved; this URL was never a page. Here is where to look instead.`,
    ""
  );

  out.push("## Start here", "");
  out.push(
    `- [Home](${site.url}) — what ${site.name} is`,
    `- [Component gallery](${absoluteUrl("/components")}) — all ${totalCount} components across ${categories.length} categories`,
    `- [Developer portal](${absoluteUrl("/developers")}) — the JSON API, no key required`,
    `- [About](${absoluteUrl("/about")}) · [Contact](${absoluteUrl("/contact")}) · [Changelog](${absoluteUrl("/changelog")})`,
    ""
  );

  out.push("## Machine-readable index", "");
  out.push(
    `- [/llms.txt](${absoluteUrl("/llms.txt")}) — grounding index for language models`,
    `- [/agent-instructions.md](${absoluteUrl("/agent-instructions.md")}) — when to use ${site.name}, and how to call it`,
    `- [/openapi.json](${absoluteUrl("/openapi.json")}) — OpenAPI 3.1 description of every endpoint`,
    `- [/api/registry.json](${absoluteUrl("/api/registry.json")}) — flat index of every component id`,
    `- [/api/catalog.json](${absoluteUrl("/api/catalog.json")}) — categories and components, metadata only`,
    `- [/sitemap.xml](${absoluteUrl("/sitemap.xml")}) — every indexable URL`,
    ""
  );

  out.push("## Looking for a component?", "");
  out.push(
    `Component pages live at \`/components/{id}\` and their JSON at \`/api/components/{id}.json\`. Ids are lower-case and hyphenated, e.g. \`toast-slide\`. Enumerate valid ids at ${absoluteUrl("/api/registry.json")} rather than guessing.`,
    ""
  );

  return out.join("\n");
}

/* ── Resolver ────────────────────────────────────────────────────────── */

/** Resolve a *page* path (not the `/api/markdown` proxy path) to Markdown. */
export function markdownForPath(pathname: string): MarkdownResult {
  const path = normalizePath(pathname);

  switch (path) {
    case "":
    case "/":
      return { body: homeMarkdown(), status: 200 };
    case "/components":
      return { body: componentsIndexMarkdown(), status: 200 };
    case "/developers":
      return { body: renderDocMarkdown(developersDoc()), status: 200 };
    case "/about":
      return { body: renderDocMarkdown(aboutDoc()), status: 200 };
    case "/contact":
      return { body: renderDocMarkdown(contactDoc()), status: 200 };
    case "/changelog":
      return { body: changelogMarkdown(), status: 200 };
    case "/agent-instructions":
      return { body: renderDocMarkdown(agentInstructionsDoc()), status: 200 };
  }

  const component = /^\/components\/([^/]+)$/.exec(path);
  if (component) return componentMarkdown(component[1]);

  return { body: notFoundMarkdown(path), status: 404 };
}
