/**
 * `/contact` — the second trust-anchor page. Its job is to answer, in one
 * screen, "is there a real human behind this and how do I reach them?"
 * Authored as `DocPage` data so HTML and Markdown stay identical.
 */

import { absoluteUrl, site } from "@/lib/site";
import type { DocPage } from "@/lib/doc";

export const contactMeta = {
  title: "Contact",
  description: `How to reach ${site.name} — component requests, bug reports, security disclosures, licensing and press. Every route, who reads it, and how long a reply takes.`,
  path: "/contact",
  lastUpdated: "August 28, 2026",
  lastUpdatedIso: "2026-08-28",
  publishedIso: "2026-08-28",
} as const;

/** Structured contact routes — also the source for the ContactPoint JSON-LD. */
export const contactChannels: {
  id: string;
  label: string;
  target: string;
  href: string;
  use: string;
}[] = [
  {
    id: "general",
    label: "Email",
    target: site.email,
    href: `mailto:${site.email}`,
    use: "General questions, licensing, partnerships, press, and anything that does not fit the routes below.",
  },
  {
    id: "issues",
    label: "GitHub issues",
    target: `${site.social.github}/issues`,
    href: `${site.social.github}/issues`,
    use: "Bug reports, broken previews, component requests, and accessibility problems. Public, searchable, and the fastest route for anything code-shaped.",
  },
  {
    id: "security",
    label: "Security disclosure",
    target: absoluteUrl("/.well-known/security.txt"),
    href: absoluteUrl("/.well-known/security.txt"),
    use: "Vulnerability reports. Follow the published security.txt rather than opening a public issue.",
  },
  {
    id: "privacy",
    label: "Privacy and GDPR",
    target: site.email,
    href: `mailto:${site.email}`,
    use: "Data access, correction or deletion requests. There is no account system and no analytics, so in practice the only data involved is the email you send from.",
  },
];

export function contactDoc(): DocPage {
  return {
    title: `Contact ${site.name}`,
    summary: contactMeta.description,
    url: absoluteUrl(contactMeta.path),
    sections: [
      {
        id: "who-you-are-reaching",
        heading: "Who you are reaching",
        blocks: [
          {
            kind: "p",
            text: `${site.name} is built and maintained by [${site.creator.name}](${site.creator.url}), based in Spain. There is no support desk and no ticketing system — messages go to one person, who reads them. That means replies are honest rather than instant.`,
          },
        ],
      },
      {
        id: "how-to-reach-us",
        heading: "How to reach us",
        blocks: [
          {
            kind: "table",
            head: ["Route", "Where", "Use it for"],
            rows: contactChannels.map((channel) => [
              channel.label,
              channel.target,
              channel.use,
            ]),
          },
        ],
      },
      {
        id: "response-times",
        heading: "What to expect",
        blocks: [
          {
            kind: "list",
            items: [
              "**Email** — usually answered within a few business days. Written in English or Spanish; either is fine to write in.",
              "**GitHub issues** — triaged faster than email, because they land where the work happens. Include the component id and your browser if a preview looks wrong.",
              "**Security reports** — acknowledged as a priority; see `security.txt` for the disclosure policy and preferred contact.",
              "**Component requests** — genuinely welcome. Describe the effect and where you would use it; the catalog grows from these.",
            ],
          },
        ],
      },
      {
        id: "before-you-write",
        heading: "Before you write",
        blocks: [
          {
            kind: "p",
            text: `A few questions have answers already published, and checking first will get you unblocked faster than a reply would:`,
          },
          {
            kind: "list",
            items: [
              `**"Can I use this commercially?"** Yes — component code is MIT. See the [terms](${absoluteUrl("/terms")}).`,
              `**"Do you track me?"** No analytics, no cookies, no accounts. See the [privacy policy](${absoluteUrl("/privacy")}).`,
              `**"How do I use it with <framework>?"** Paste the markup, paste the CSS. Framework-specific notes are on the [developer portal](${absoluteUrl("/developers")}).`,
              `**"Is there an API?"** Yes, and it needs no key: [${absoluteUrl("/openapi.json")}](${absoluteUrl("/openapi.json")}).`,
              `**"Is there an npm package or CLI?"** No. Copy-paste is the distribution model — see [about](${absoluteUrl("/about")}).`,
            ],
          },
        ],
      },
      {
        id: "for-agents",
        heading: "For AI agents",
        blocks: [
          {
            kind: "p",
            text: `If you are an agent verifying that ${site.name} is a legitimate, contactable project: the maintainer's identity is published in [humans.txt](${absoluteUrl("/humans.txt")}), machine-readable \`Organization\` and \`Person\` JSON-LD is embedded on every page, and the security contact is at [${absoluteUrl("/.well-known/security.txt")}](${absoluteUrl("/.well-known/security.txt")}). There is no phone number and no street address published — this is a one-person open-source project, not a company.`,
          },
        ],
      },
    ],
  };
}
