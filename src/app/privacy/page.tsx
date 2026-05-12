import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { absoluteUrl, site } from "@/lib/site";
import { articleSchema, breadcrumbSchema, graph } from "@/lib/jsonld";

const pageTitle = "Privacy policy";
const pageDescription = `What data ${site.name} collects, what it doesn't, and how to reach us about it. Spoiler: we don't run analytics, we don't set cookies, and we don't have an account system.`;
const pageUrl = absoluteUrl("/privacy");
const lastUpdated = "May 7, 2026";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/privacy" },
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

export default function PrivacyPage() {
  const jsonLd = graph(
    articleSchema({
      url: pageUrl,
      headline: `${pageTitle} — ${site.name}`,
      description: pageDescription,
      datePublished: "2026-05-07",
      dateModified: lastUpdated,
      type: "TechArticle",
      sections: [
        "Who we are",
        "What data we collect",
        "What we don't do",
        "Third parties",
        "Your rights (GDPR)",
        "Children",
        "Data security",
        "International transfers",
        "Changes to this policy",
        "Contact",
      ],
    }),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Privacy", url: "/privacy" },
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
            Privacy policy
          </h1>
          <p className="text-text-secondary mt-4 leading-relaxed">
            The short version: we don&apos;t run analytics, we don&apos;t
            set cookies, we don&apos;t have user accounts, and the only
            personal data we ever see is the email of someone who chose to
            email us.
          </p>
        </header>

        <article className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:tracking-tight prose-headings:font-bold prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-base sm:prose-h3:text-lg prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-li:text-text-secondary prose-code:text-accent prose-code:font-mono prose-code:before:content-none prose-code:after:content-none">
          <h2>1. Who we are</h2>
          <p>
            {site.name} ({site.url}) is operated by {site.author.name}. For
            anything privacy-related you can reach us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>2. What data we collect</h2>
          <p>
            <strong>From you, on the site:</strong> nothing. We don&apos;t
            ask for your name, email, IP, or anything else to browse the
            site or copy a component. There&apos;s no signup, no login, no
            shopping cart, no comment system.
          </p>
          <p>
            <strong>From you, when you contact us:</strong> if you email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>, we receive
            your message and your email address. We use that strictly to
            reply to you.
          </p>
          <p>
            <strong>Automatically, in server logs:</strong> our hosting
            provider keeps standard request logs for a short retention
            window (typically 30 days). These contain IP addresses,
            user-agent strings, and request paths. We don&apos;t pull
            them into a profile or join them with anything else — they
            exist for debugging and abuse prevention. The legal basis is
            our legitimate interest in keeping the site available.
          </p>

          <h2>3. What we don&apos;t do</h2>
          <ul>
            <li>
              <strong>No analytics.</strong> No Google Analytics, Plausible,
              Posthog, Mixpanel, Umami, Fathom, or anything similar.
            </li>
            <li>
              <strong>No third-party trackers.</strong> No Facebook Pixel,
              no advertising SDKs, no fingerprinting.
            </li>
            <li>
              <strong>No cookies.</strong> The site doesn&apos;t set any
              first-party cookies. (Your browser may cache fonts and
              images, but that&apos;s not the same thing.)
            </li>
            <li>
              <strong>No selling data.</strong> Even if we had data to sell
              — and we don&apos;t — we wouldn&apos;t.
            </li>
            <li>
              <strong>No newsletter.</strong> When we add one, this policy
              will explain how it works <em>before</em> it ships.
            </li>
          </ul>

          <h2>4. Third parties</h2>
          <p>
            The site relies on a small number of providers, each with their
            own privacy policy:
          </p>
          <ul>
            <li>
              <strong>Hosting / CDN.</strong> Standard request logs as
              described above.
            </li>
            <li>
              <strong>Fonts.</strong> Inter and JetBrains Mono are loaded
              via Next.js&apos; <code>next/font</code> mechanism, which
              self-hosts the font files. Google Fonts servers are not
              contacted from the user&apos;s browser.
            </li>
            <li>
              <strong>GitHub.</strong> The footer links out to the source
              repo. If you click through, GitHub&apos;s privacy policy
              applies.
            </li>
          </ul>

          <h2>5. Your rights (GDPR)</h2>
          <p>
            If you&apos;re in the EU/UK, you have the right to access,
            rectify, erase, restrict, port, and object to processing of
            your personal data. Since the only personal data we hold is
            email correspondence you initiated, exercising those rights is
            usually as simple as emailing us and asking. We&apos;ll respond
            within 30 days.
          </p>
          <p>
            You also have the right to lodge a complaint with your national
            data protection authority. In Spain that&apos;s the{" "}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agencia Española de Protección de Datos
            </a>
            .
          </p>

          <h2>6. Children</h2>
          <p>
            The site is intended for developers. We don&apos;t knowingly
            collect data from children under 13 (or the equivalent minimum
            age in your jurisdiction). Since we collect almost nothing from
            anyone, this rarely comes up in practice.
          </p>

          <h2>7. Data security</h2>
          <p>
            Email is delivered over TLS where supported by the receiving
            server. The site itself is served over HTTPS only. We don&apos;t
            store user data in any database we control — there is no
            database to breach.
          </p>

          <h2>8. International transfers</h2>
          <p>
            Our hosting provider may serve the site from data centers
            outside your country. The data being transferred is your
            request URL and IP — no personal data beyond what&apos;s
            required to deliver a web page.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>
            We&apos;ll bump the &quot;last updated&quot; date at the top
            whenever this policy changes materially. We won&apos;t reduce
            your rights without notifying you first.
          </p>

          <h2>10. Contact</h2>
          <p>
            Privacy questions, GDPR requests, or just curious?{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
