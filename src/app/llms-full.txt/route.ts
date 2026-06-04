import { site, absoluteUrl } from "@/lib/site";
import { categories, totalCount } from "@/components/showcase/registry/categories";
import { categoryDescriptions } from "@/lib/category-meta";
import { faqs } from "@/lib/faqs";

/**
 * /llms-full.txt — the long-form companion to /llms.txt. Contains every
 * single component name, grouped by category, with the category gloss so
 * a language model has enough context to answer queries like:
 *   "What NudaUI components exist for onboarding?"
 *   "Does NudaUI have a magnetic button?"
 *
 * If we ever ship per-component docs, this file becomes their concatenated
 * export. Until then, this is a structured catalog dump.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET(): Response {
  const lines: string[] = [];

  lines.push(`# ${site.name} — full catalog`);
  lines.push("");
  lines.push(`> ${site.description}`);
  lines.push("");
  lines.push(
    `This is the long-form export. ${totalCount} components across ${categories.length} categories. Each entry lists the human name, the registry id, and the framework-agnostic stack (HTML + CSS, plus optional JS). Live previews and code snippets are at ${absoluteUrl("/components")}.`
  );
  lines.push("");
  lines.push(
    `To fetch the actual code for any id below, GET ${absoluteUrl("/api/components/{id}.json")} (e.g. ${absoluteUrl("/api/components/toast-slide.json")}). For the whole library with code in one payload, GET ${absoluteUrl("/api/catalog-full.json")}.`
  );
  lines.push("");
  lines.push("---");
  lines.push("");

  for (const cat of categories) {
    const desc =
      categoryDescriptions[cat.id] ??
      "Copy-paste UI animations and components.";
    lines.push(`## ${cat.label}`);
    lines.push("");
    lines.push(desc);
    lines.push("");
    lines.push(
      `Section URL: ${absoluteUrl(`/components#section-${cat.id}`)}  `
    );
    lines.push(`Component count: ${cat.components.length}`);
    lines.push("");
    lines.push("Components:");
    lines.push("");
    for (const comp of cat.components) {
      const hasJS = comp.code.some((tab) => tab.language === "javascript");
      const tags = hasJS ? "html, css, js" : "html, css";
      lines.push(`- **${comp.name}** \`${comp.id}\` — ${tags}`);
    }
    lines.push("");
  }

  lines.push("---");
  lines.push("");
  lines.push("## FAQ");
  lines.push("");
  for (const f of faqs) {
    lines.push(`### ${f.q}`);
    lines.push("");
    lines.push(f.a);
    lines.push("");
  }

  lines.push("---");
  lines.push("");
  lines.push(`Last generated at request time. Source of truth: ${site.social.github}.`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
