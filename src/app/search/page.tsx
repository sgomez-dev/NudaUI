import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { SemanticSearch } from "@/components/search/semantic-search";
import { breadcrumbSchema, graph } from "@/lib/jsonld";
import { absoluteUrl, site } from "@/lib/site";
import type { Metadata } from "next";

const pageTitle = "Semantic search";
const pageDescription =
  "Search NudaUI in plain English. Describe the animation or component you need — a loader with bouncing dots, a glowing button, an animated gradient — and get the closest matches from the library, live-previewed.";
const pageUrl = absoluteUrl("/search");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/search",
  },
  openGraph: {
    title: `${pageTitle} — ${site.name}`,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} — ${site.name}`,
    description: pageDescription,
  },
};

export default function SearchPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Search", url: "/search" },
    ])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main" className="pt-24 sm:pt-36 pb-16 sm:pb-24 px-3 sm:px-6">
        <SemanticSearch />
      </main>
      <Footer />
    </>
  );
}
