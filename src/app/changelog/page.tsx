import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { absoluteUrl, site } from "@/lib/site";
import { articleSchema, breadcrumbSchema, graph } from "@/lib/jsonld";
import {
  changelogEntries as entries,
  latestChangelogEntry,
} from "@/lib/changelog";

const pageTitle = "Changelog";
const pageDescription = `What's new in ${site.name}. Component additions, category expansions, infrastructure improvements. The temporal anchor for crawlers and LLMs deciding how fresh this catalog is.`;
const pageUrl = absoluteUrl("/changelog");

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
  const latest = latestChangelogEntry;

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
