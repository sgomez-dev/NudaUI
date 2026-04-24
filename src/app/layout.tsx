import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
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
    site: site.social.twitter,
    creator: site.social.twitter,
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
    "copyright": `© ${new Date().getFullYear()} ${site.name}`,
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
      <body className="min-h-screen bg-surface text-text-primary antialiased">
        {/* Accessible skip link — first focusable element on every page. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-surface focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/60"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
