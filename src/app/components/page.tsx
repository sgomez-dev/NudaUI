import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ComponentsGallery } from "@/components/showcase/components-gallery";
import {
  breadcrumbSchema,
  collectionPageSchema,
  graph,
} from "@/lib/jsonld";
import { absoluteUrl, site } from "@/lib/site";
import type { Metadata } from "next";

const pageTitle = "Components gallery";
const pageDescription =
  "Browse 28+ copy-paste UI animations and components. Loaders, spinners, progress indicators, text effects, buttons, toggles, notifications, tooltips, cursors, 3D effects, scroll-driven animations and more. Zero dependencies, framework-agnostic.";
const pageUrl = absoluteUrl("/components");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/components",
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

export default function ComponentsPage() {
  const jsonLd = graph(
    collectionPageSchema({
      url: pageUrl,
      name: `${pageTitle} — ${site.name}`,
      description: pageDescription,
      itemCount: 28,
    }),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Components", url: "/components" },
    ])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main" className="pt-20 sm:pt-28 pb-12 sm:pb-20 px-3 sm:px-6">
        <ComponentsGallery />
      </main>
      <Footer />
    </>
  );
}
