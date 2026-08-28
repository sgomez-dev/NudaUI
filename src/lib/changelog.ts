/**
 * Changelog entries, lifted out of `app/changelog/page.tsx` so the rendered
 * page and the `Accept: text/markdown` representation read from one list.
 *
 * Manually maintained so the human story stays human-shaped. Each entry is a
 * date plus short bullets of what shipped. Keep newest first.
 */

import {
  categories,
  totalCount,
} from "@/components/showcase/registry/categories";

export interface ChangelogEntry {
  /** Human label, e.g. "June 2026". */
  date: string;
  /** ISO date used for `<time datetime>`, JSON-LD, and sorting. */
  iso: string;
  bullets: string[];
}

export const changelogEntries: ChangelogEntry[] = [
  {
    date: "August 2026",
    iso: "2026-08-28",
    bullets: [
      "Published an OpenAPI 3.1 description of the JSON API at /openapi.json — typed schemas, unique operationIds, and a documented error envelope on every operation.",
      "Every /api/* failure now answers with structured JSON (code, message, hint, docs) instead of an HTML error page.",
      "Opened a developer portal at /developers with a quickstart, endpoint reference, error codes, caching rules, and framework recipes.",
      "Added /about and /contact pages, and an /agent-instructions.md brief telling AI agents when NudaUI is — and is not — the right tool.",
      "Pages now content-negotiate: send Accept: text/markdown (or append .md) to any page URL and get clean Markdown with Vary: Accept.",
      "404s return a real 404 with a recovery map, and a Markdown body for clients that ask for one.",
    ],
  },
  {
    date: "June 2026",
    iso: "2026-06-16",
    bullets: [
      `Crossed 1,000 — the catalog now spans ${totalCount} components across ${categories.length} categories.`,
      "Added 12 categories: Glassmorphism, Animated Gradients, Noise & Grain, Scroll-Driven, View Transitions, CSS-Only Interactions, Glitch & Distortion, Neon & Glow, Morphing Shapes, Confetti & Celebration, Animated Icons, Weather & Ambient.",
      "Deepened Loaders, Spinners, Progress, Skeletons, Buttons, Micro-interactions, Toggles & Inputs, Text Effects, Cards & Hover, Badges, Backgrounds, Borders, Dividers, Hero Sections, Tooltips.",
      "Every new animation ships GPU-only motion, prefers-reduced-motion fallbacks, and WCAG-safe flicker (≤3 flashes/sec).",
    ],
  },
  {
    date: "May 2026",
    iso: "2026-05-08",
    bullets: [
      "Catalog grew to 802 components across 70 categories.",
      "Added Watch Faces, Quotes & Testimonials, Comments & Reactions, Profile Headers, Settings, File Upload, Tags & Chips Input, Mobile Patterns, Notification Center, and Skeleton Variants.",
      "Expanded Spinners, Dividers, Avatars, Badges, Indicators, Marquees, Empty States.",
      "Shipped /api/catalog.json — machine-readable mirror of the entire registry for AI agents, MCP servers, and RAG.",
      "Shipped /.well-known/ai.txt with explicit AI training/grounding permissions.",
      "Enriched JSON-LD: per-category ItemLists, Article schema for legal pages, Speakable for voice search, accessibility metadata on SoftwareApplication.",
    ],
  },
  {
    date: "May 2026",
    iso: "2026-05-07",
    bullets: [
      "Catalog reached 452 components across 51 categories.",
      "Added Color Pickers, Galleries & Carousels, Maps & Locations.",
      "Expanded Buttons (+5), Backgrounds (+5), Cursors (+4), Tooltips (+4), Notifications (+4).",
      "Added Terms of use and Privacy policy pages with breadcrumb JSON-LD.",
      "Contact dialog with copy-to-clipboard replaces the mailto: link in the footer.",
    ],
  },
  {
    date: "May 2026",
    iso: "2026-05-06",
    bullets: [
      "Catalog reached 400 components across 48 categories.",
      "Added Search & Autocomplete, Sliders & Ranges, Audio & Waveforms.",
      "GEO/SEO santo grial: ItemList JSON-LD for every component, HowTo schema, DefinedTermSet category glossary.",
      "Shipped /llms.txt, /llms-full.txt, /feed.xml, /humans.txt, /.well-known/security.txt.",
      "Expanded robots.txt with 25+ AI/LLM crawler allowlist.",
      "Sitemap now generates per-category deep links automatically.",
    ],
  },
  {
    date: "May 2026",
    iso: "2026-05-05",
    bullets: [
      "Domain migrated from nudaui.vercel.app to nudaui.dev.",
      "Added Footers, Login & Auth, Calendars & Date Pickers, Sidebars & Docks, Steppers & Wizards — 50 components, 5 categories.",
    ],
  },
  {
    date: "Earlier",
    iso: "2025-01-01",
    bullets: [
      "NudaUI was born. First 303 components shipped across 40 categories.",
      "MIT license, framework-agnostic, zero dependencies. Built with Next.js 16, React 19, TypeScript, Tailwind v4.",
    ],
  },
];

/** Newest entry — drives `dateModified` and the page header. */
export const latestChangelogEntry: ChangelogEntry = changelogEntries[0];
