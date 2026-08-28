/**
 * The recovery map printed on a 404.
 *
 * A 404 that only says "not found" is a dead end for an agent: it has no way
 * to tell a typo from a moved page from a site that never had the resource.
 * So every 404 — the HTML one and the `text/markdown` one — carries a short
 * Markdown site map instead, pointing at the sitemap, llms.txt and the docs
 * index so the next request can succeed.
 *
 * Deliberately free of registry imports so the statically-rendered 404 page
 * stays cheap.
 */

import { absoluteUrl, site } from "@/lib/site";

export interface RecoveryLink {
  label: string;
  href: string;
  note: string;
}

export const recoveryLinks: RecoveryLink[] = [
  {
    label: "Component gallery",
    href: absoluteUrl("/components"),
    note: "every component, with live previews",
  },
  {
    label: "Developer portal",
    href: absoluteUrl("/developers"),
    note: "the JSON API — no key required",
  },
  {
    label: "llms.txt",
    href: absoluteUrl("/llms.txt"),
    note: "grounding index for language models",
  },
  {
    label: "agent-instructions.md",
    href: absoluteUrl("/agent-instructions.md"),
    note: "when to use NudaUI, and how to call it",
  },
  {
    label: "openapi.json",
    href: absoluteUrl("/openapi.json"),
    note: "OpenAPI 3.1 description of every endpoint",
  },
  {
    label: "sitemap.xml",
    href: absoluteUrl("/sitemap.xml"),
    note: "every indexable URL on the site",
  },
];

/**
 * A compact Markdown recovery map, embedded verbatim in the HTML 404 so a
 * client that did not ask for `text/markdown` still gets something parseable.
 */
export function recoveryMarkdown(): string {
  const lines = [
    "# 404 — page not found",
    "",
    `This URL does not exist on ${site.url}. Where to look instead:`,
    "",
    ...recoveryLinks.map(
      (link) => `- [${link.label}](${link.href}) — ${link.note}`
    ),
    "",
    "Component pages live at `/components/{id}`; their JSON at `/api/components/{id}.json`.",
  ];
  return lines.join("\n");
}
