import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { absoluteUrl, site } from "@/lib/site";
import { articleSchema, breadcrumbSchema, graph } from "@/lib/jsonld";

const pageTitle = "Terms of use";
const pageDescription = `Terms governing the use of ${site.name} — the website, the component code, and the people behind it. MIT-licensed code, plain-English clauses, no hidden traps.`;
const pageUrl = absoluteUrl("/terms");
const lastUpdated = "May 7, 2026";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/terms" },
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

export default function TermsPage() {
  const jsonLd = graph(
    articleSchema({
      url: pageUrl,
      headline: `${pageTitle} — ${site.name}`,
      description: pageDescription,
      datePublished: "2026-05-07",
      dateModified: lastUpdated,
      type: "TechArticle",
      sections: [
        "The site and the code are different things",
        "License for the Code",
        "License for the Site Content",
        "Acceptable use",
        "No warranty",
        "Limitation of liability",
        "Third-party services",
        "Changes",
        "Governing law",
        "Contact",
      ],
    }),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Terms", url: "/terms" },
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
            Legal · Last updated {lastUpdated}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
            Terms of use
          </h1>
          <p className="text-text-secondary mt-4 leading-relaxed">
            The short version: the code is yours under the MIT license, the
            site is provided as-is, and we&apos;ll act in good faith. The
            rest is detail.
          </p>
        </header>

        <article className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:tracking-tight prose-headings:font-bold prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-base sm:prose-h3:text-lg prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-li:text-text-secondary prose-code:text-accent prose-code:font-mono prose-code:before:content-none prose-code:after:content-none">
          <h2>1. The site and the code are different things</h2>
          <p>
            <strong>{site.name}</strong> ({site.url}) is a marketing and
            documentation site. The components it showcases — the HTML, CSS
            and JavaScript snippets — are the &quot;Code&quot;. Everything
            else (the site copy, design, screenshots, animations of the site
            itself) is the &quot;Site Content&quot;.
          </p>

          <h2>2. License for the Code</h2>
          <p>
            The Code is released under the{" "}
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
            . You can copy, modify, ship, sell, fork, sublicense, and use the
            snippets in commercial and non-commercial projects without asking
            for permission. Attribution is appreciated, never required.
          </p>

          <h2>3. License for the Site Content</h2>
          <p>
            The Site Content (including the {site.name} name, logo, marketing
            copy, illustrations, and the design of nudaui.dev itself) is
            copyright {site.author.name}. You can link to the site, share
            screenshots for review purposes, and quote short excerpts. You
            cannot clone the marketing site wholesale or pass it off as your
            own.
          </p>

          <h2>4. Acceptable use</h2>
          <p>
            Use the site for what it&apos;s built for: browsing components,
            copying snippets, learning. Don&apos;t:
          </p>
          <ul>
            <li>Hammer the site with automated scrapers in a way that
              degrades it for other users (a polite crawler is fine — see{" "}
              <a href="/robots.txt">robots.txt</a>).</li>
            <li>Attempt to compromise the site, bypass security measures, or
              upload malicious content.</li>
            <li>Use the {site.name} name or marks in a way that suggests we
              endorse your product when we don&apos;t.</li>
          </ul>

          <h2>5. No warranty</h2>
          <p>
            The Code and the Site are provided <strong>as-is</strong>,
            without warranty of any kind, express or implied. That includes
            warranties of merchantability, fitness for a particular purpose,
            and non-infringement. If a snippet has a bug, an accessibility
            edge case we missed, or behaves oddly in a browser we don&apos;t
            test, that&apos;s on you to validate before shipping it.
          </p>

          <h2>6. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by applicable law, {site.author.name}{" "}
            and contributors are not liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of your
            use of the Site or the Code — including but not limited to lost
            profits, lost data, or business interruption — even if we&apos;ve
            been advised of the possibility of such damages. The total
            liability is capped at the amount you paid to use the Site,
            which is zero.
          </p>

          <h2>7. Third-party services</h2>
          <p>
            The Site is hosted on third-party infrastructure and serves
            assets through a CDN. We don&apos;t embed analytics, advertising
            networks, or third-party trackers — see the{" "}
            <a href="/privacy">privacy policy</a> for the full list of what
            does and doesn&apos;t happen on a page view.
          </p>

          <h2>8. Changes</h2>
          <p>
            We may update these terms when the site changes materially.
            We&apos;ll bump the &quot;last updated&quot; date at the top of
            the page. Continuing to use the site after a change means you
            accept the new terms.
          </p>

          <h2>9. Governing law</h2>
          <p>
            These terms are governed by the laws of Spain. Any dispute that
            can&apos;t be resolved amicably will be settled in the courts
            with jurisdiction over the registered address of the site
            operator.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms?{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. Security
            reports go through{" "}
            <a href="/.well-known/security.txt">security.txt</a> instead.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
