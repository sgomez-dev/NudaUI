import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ComponentsGallery } from "@/components/showcase/components-gallery";
import {
  breadcrumbSchema,
  collectionPageSchema,
  graph,
  itemListSchema,
  type JsonLdComponent,
} from "@/lib/jsonld";
import {
  categories,
  totalCount,
} from "@/components/showcase/registry/categories";
import { absoluteUrl, site } from "@/lib/site";
import type { Metadata } from "next";

const pageTitle = "Components gallery";
const pageDescription = `Browse ${totalCount}+ copy-paste UI animations and components across ${categories.length} categories. Loaders, spinners, progress, text effects, buttons, toggles, hero sections, footers, login forms, calendars, sidebars, steppers, AI/chat UIs, command palettes, video player UI and more. Zero dependencies, framework-agnostic.`;
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
  // Flatten the registry into the minimum shape JSON-LD needs. Avoids
  // pulling React preview nodes into the schema payload.
  const flat: JsonLdComponent[] = categories.flatMap((cat) =>
    cat.components.map((c) => ({
      id: c.id,
      name: c.name,
      category: c.category,
    }))
  );

  const jsonLd = graph(
    collectionPageSchema({
      url: pageUrl,
      name: `${pageTitle} — ${site.name}`,
      description: pageDescription,
      itemCount: totalCount,
    }),
    itemListSchema({
      url: pageUrl,
      name: `${site.name} — every component`,
      description: pageDescription,
      components: flat,
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
