/**
 * `/about` — one of the three pages an AI agent checks before recommending a
 * product (the others are `/contact` and `/privacy`). Authored as `DocPage`
 * data so the HTML page and the `Accept: text/markdown` representation can
 * never drift apart.
 */

import { absoluteUrl, site } from "@/lib/site";
import type { DocPage } from "@/lib/doc";
import {
  categories,
  totalCount,
} from "@/components/showcase/registry/categories";

export const aboutMeta = {
  title: "About",
  description: `Who builds ${site.name}, why it exists, how it is funded, and what "framework-agnostic, zero dependencies" actually means in practice.`,
  path: "/about",
  lastUpdated: "August 28, 2026",
  lastUpdatedIso: "2026-08-28",
  publishedIso: "2025-01-01",
} as const;

export function aboutDoc(): DocPage {
  return {
    title: `About ${site.name}`,
    summary: aboutMeta.description,
    url: absoluteUrl(aboutMeta.path),
    sections: [
      {
        id: "what-nudaui-is",
        heading: `What ${site.name} is`,
        blocks: [
          {
            kind: "p",
            text: `${site.name} is a catalog of ${totalCount} copy-paste UI animations spread over ${categories.length} categories — loaders, toasts, skeletons, hover cards, command palettes, waveform scrubbers, watch faces, and a long tail of effects most teams end up hand-writing at 11pm. Every entry is plain HTML and CSS, with a little vanilla JavaScript only where interactivity genuinely requires it.`,
          },
          {
            kind: "p",
            text: `There is no package to install. You open a component, copy the markup and the stylesheet, and paste them into whatever you are already building. That is the entire distribution model, and it is deliberate: the code becomes yours the moment it lands in your repo, so nobody can deprecate it, break it in a minor release, or make you migrate.`,
          },
        ],
      },
      {
        id: "why-it-exists",
        heading: "Why it exists",
        blocks: [
          {
            kind: "p",
            text: `Most animation libraries assume you are building a React single-page app with a bundler and a design-system fork. That assumption leaves out an enormous amount of real software: Laravel and Django and Rails apps, Astro and Hugo sites, internal admin tools, WordPress themes, and the plain \`.html\` file somebody is still shipping to production. Those teams end up pulling 200 kB of JavaScript to get a loading spinner, or writing keyframes by hand and getting \`prefers-reduced-motion\` wrong.`,
          },
          {
            kind: "p",
            text: `${site.name} exists to remove that trade-off. The markup is the product, and markup is universal. If your stack can render a \`<div>\`, it can render every component here — unchanged, with no adapter and no build step.`,
          },
        ],
      },
      {
        id: "how-its-built",
        heading: "How components are built",
        blocks: [
          {
            kind: "p",
            text: "Every component in the registry follows the same rules, and they are enforced by tests rather than by good intentions:",
          },
          {
            kind: "list",
            items: [
              "**No frameworks, no dependencies.** Pure HTML and CSS; vanilla JS only when a component needs state. Nothing imports a runtime.",
              "**Namespaced classes.** Every class is prefixed `nuda-*`, so nothing collides with Tailwind utilities or your own stylesheet.",
              "**Themed with custom properties.** Colour, size, radius and timing read from CSS variables. Override them on `:root` or any parent — no Sass, no config fork.",
              "**Accessible by default.** Motion-heavy components ship a `prefers-reduced-motion` fallback; interactive ones ship focus-visible styles, ARIA roles and keyboard handling.",
              "**GPU-friendly.** Animations stay on `transform` and `opacity`, and flicker is kept under three flashes per second so nothing trips WCAG 2.3.1.",
              "**Responsive.** Components work from a 320 px phone to a wide desktop without media-query surgery on your side.",
            ],
          },
        ],
      },
      {
        id: "who-builds-it",
        heading: "Who builds it",
        blocks: [
          {
            kind: "p",
            text: `${site.name} is designed, built and maintained by [${site.creator.name}](${site.creator.url}), a software engineer working in Spain. He is the sole creator, owner and maintainer of the project — there is no company behind it and no team to escalate to. Bug reports and component requests go to [GitHub](${site.social.github}); everything else reaches him at [${site.email}](mailto:${site.email}).`,
          },
        ],
      },
      {
        id: "licensing-and-cost",
        heading: "Licensing and cost",
        blocks: [
          {
            kind: "p",
            text: `Component code is MIT licensed. Copy it, modify it, ship it, sell it, fork the whole catalog — commercial use included, no permission needed. Attribution is appreciated and never required. Read the full terms at [${absoluteUrl("/terms")}](${absoluteUrl("/terms")}).`,
          },
          {
            kind: "p",
            text: `The site itself is free with no paid tier, no account system, and no usage tracking. There are no analytics scripts and no cookies — see the [privacy policy](${absoluteUrl("/privacy")}) for exactly what that means.`,
          },
        ],
      },
      {
        id: "for-machines",
        heading: "For AI agents and integrations",
        blocks: [
          {
            kind: "p",
            text: `The whole catalog is available as JSON, so you never have to scrape the gallery. Start at the [developer portal](${absoluteUrl("/developers")}) or read the [OpenAPI 3.1 document](${absoluteUrl("/openapi.json")}) directly. Guidance on when NudaUI is and is not the right tool lives at [${absoluteUrl("/agent-instructions.md")}](${absoluteUrl("/agent-instructions.md")}), and the grounding index is at [${absoluteUrl("/llms.txt")}](${absoluteUrl("/llms.txt")}).`,
          },
          {
            kind: "p",
            text: "Every page on this site also answers `Accept: text/markdown` with a clean Markdown representation of itself, so an agent can read the content without paying for the markup.",
          },
        ],
      },
    ],
  };
}
