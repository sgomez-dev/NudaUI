import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { MotionProvider } from "@/components/motion-provider";
import { FloatingSearchChatbot } from "@/components/search/floating-search-chatbot";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    // %s is replaced by the page's own title — keeps the brand suffix
    // consistent across every route without repeating strings.
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  category: "technology",
  authors: [{ name: site.author.name, url: site.author.url }],
  creator: site.name,
  publisher: site.name,
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: `${site.name} updates` },
      ],
      "application/json": [
        { url: "/api/catalog.json", title: `${site.name} catalog JSON` },
      ],
      "application/opensearchdescription+xml": [
        { url: "/opensearch.xml", title: `Search ${site.name}` },
      ],
      // Markdown sibling of the homepage. Every page also answers
      // `Accept: text/markdown` on its canonical URL.
      "text/markdown": [
        { url: "/index.md", title: `${site.name} as Markdown` },
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: site.title,
    description: site.shortDescription,
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    // opengraph-image.tsx is auto-picked up by Next — listing it here keeps
    // the canonical path explicit for anyone inspecting the compiled HTML.
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.shortDescription,
    images: [
      {
        url: "/twitter-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: "black-translucent",
  },
  // Verification stubs — populate once the webmaster consoles confirm
  // ownership; keeping the field present makes it copy-paste trivial.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION ?? "",
    },
  },
  other: {
    // Tell Search Console the preferred copyright handler.
    copyright: `© ${new Date().getFullYear()} ${site.name}`,
    // Explicit human-curation declaration for AI/LLM training pipelines.
    // Not a hard-blocked standard yet, but a signal we'd rather over-declare.
    "ai-content-declaration": "human-authored",
    "ai-licensing": "https://nudaui.dev/.well-known/ai.txt",
    "ai-catalog": "https://nudaui.dev/api/catalog.json",
    // OpenGraph article fields read by Slack/Discord/iMessage previews
    "article:publisher": site.url,
    // Pinterest rich preview hint
    "pinterest-rich-pin": "true",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: site.theme.background },
    { media: "(prefers-color-scheme: light)", color: site.theme.background },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={site.language}
      dir="ltr"
      className={`${inter.variable} ${jetbrains.variable}`}
      // A small render-blocking hint to avoid the FOUC on the dark surface.
      style={{ colorScheme: "dark" }}
    >
      <head>
        {/* Preconnect to font origins so the first paint isn't blocked
            on DNS + TLS. next/font self-hosts the *.woff2 files, but the
            initial Inter / JetBrains Mono download still benefits. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Browser search-box integration (Firefox / Chrome / Edge / Safari). */}
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title={site.name}
          href="/opensearch.xml"
        />
        {/* Identity verification — IndieWeb rel=me hooks. Used by Mastodon,
            GitHub, and other tools to validate "this profile owns this site". */}
        <link rel="me" href={site.social.github} />
        <link rel="me" href={`mailto:${site.email}`} />
        {/* Author entity discovery for crawlers and AI agents. */}
        <link
          rel="author"
          href={`${site.url}/.well-known/security.txt`}
          type="text/plain"
        />
        {/* Machine-readable catalog discovery (consumed by /api/catalog.json
            alternates above; explicit <link> makes it visible to dumb crawlers). */}
        <link
          rel="alternate"
          type="application/json"
          title={`${site.name} catalog JSON`}
          href="/api/catalog.json"
        />
        {/* RFC 8631 — the machine-readable description of this site's API.
            Also sent as a `Link: …; rel="service-desc"` response header. */}
        <link
          rel="service-desc"
          type="application/json"
          title={`${site.name} OpenAPI 3.1 specification`}
          href="/openapi.json"
        />
        {/* Agent operating manual: when to use NudaUI and how to call it. */}
        <link
          rel="help"
          type="text/markdown"
          title={`${site.name} agent instructions`}
          href="/agent-instructions.md"
        />
        {/* Markdown sibling of the current document, for link-aware agents
            that discover representations instead of negotiating them. The
            per-page value is also sent as a `Link: …; rel="alternate"`
            header by the content-negotiation middleware. */}
        <link
          rel="alternate"
          type="text/markdown"
          title={`${site.name} as Markdown`}
          href="/index.md"
        />

        {/*
          Progressive enhancement fallback.

          Scroll-reveal sections are server rendered with framer-motion's
          entry state inlined (`opacity:0; transform: translateY(...)`), and
          the animation that clears it only runs once JavaScript hydrates.
          With JS unavailable — a text-mode browser, a crawler that renders
          without scripts, a user who blocks it — the page would arrive
          effectively blank below the hero.

          This block resets exactly those entry states and nothing else: the
          selector only matches elements whose *inline* style sets an opacity
          below 1, which is precisely what framer-motion writes. Keyframe
          animations (marquees, spinners) are untouched, and with JS enabled
          the rule never applies at all, so the designed motion is unchanged.
        */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: [
                '[style*="opacity:0"],',
                '[style*="opacity: 0"],',
                '[style*="opacity:0."],',
                '[style*="opacity: 0."] {',
                "  opacity: 1 !important;",
                "  transform: none !important;",
                "}",
              ].join("\n"),
            }}
          />
        </noscript>
      </head>
      <body className="min-h-screen bg-surface text-text-primary antialiased">
        {/* Accessible skip link — first focusable element on every page. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-surface focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/60"
        >
          Skip to content
        </a>
        <MotionProvider>
          {children}
          {/* Global floating search — a mini chatbot available on every page. */}
          <FloatingSearchChatbot />
        </MotionProvider>
      </body>
    </html>
  );
}
