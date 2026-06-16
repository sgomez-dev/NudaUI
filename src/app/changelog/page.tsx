import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { absoluteUrl, site } from "@/lib/site";
import { articleSchema, breadcrumbSchema, graph } from "@/lib/jsonld";
import {
  categories,
  totalCount,
} from "@/components/showcase/registry/categories";

const pageTitle = "Changelog";
const pageDescription = `What's new in ${site.name}. Component additions, category expansions, infrastructure improvements. The temporal anchor for crawlers and LLMs deciding how fresh this catalog is.`;
const pageUrl = absoluteUrl("/changelog");

// Manually maintained so the human story stays human-shaped. Each entry
// is a date + a short bullet of what shipped. Keep newest first.
const entries: { date: string; iso: string; bullets: string[] }[] = [
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

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/changelog" },
  openGraph: {
    title: `${pageTitle} — ${site.name}`,
    description: pageDescription,
    url: pageUrl,
    type: "article",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: `${pageTitle} — ${site.name}`,
    description: pageDescription,
  },
};

export default function ChangelogPage() {
  const latest = entries[0];

  const jsonLd = graph(
    articleSchema({
      url: pageUrl,
      headline: `${pageTitle} — ${site.name}`,
      description: pageDescription,
      datePublished: "2025-01-01",
      dateModified: latest.iso,
      type: "TechArticle",
      sections: entries.map((e) => e.date),
    }),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Changelog", url: "/changelog" },
    ])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main
        id="main"
        className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-3xl mx-auto"
      >
        <header className="mb-10 border-b border-border pb-8">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted mb-3">
            What&apos;s new · Last updated {latest.iso}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
            Changelog
          </h1>
          <p className="text-text-secondary mt-4 leading-relaxed">
            A running log of what shipped, when. Newest at the top.
          </p>
        </header>

        <div className="space-y-10">
          {entries.map((entry) => (
            <section key={entry.iso} className="relative">
              <div className="flex items-baseline gap-3 mb-4">
                <time
                  dateTime={entry.iso}
                  className="text-xs font-mono uppercase tracking-[0.18em] text-accent"
                >
                  {entry.date}
                </time>
                <span className="text-[10px] font-mono text-text-muted">
                  {entry.iso}
                </span>
              </div>
              <ul className="space-y-2.5 pl-4 border-l border-border">
                {entry.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="relative text-sm sm:text-base text-text-secondary leading-relaxed -ml-px before:absolute before:left-[-17px] before:top-[10px] before:w-2 before:h-2 before:rounded-full before:bg-accent/40 pl-4"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
