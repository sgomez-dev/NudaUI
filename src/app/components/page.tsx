import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ComponentsGallery } from "@/components/showcase/components-gallery";
import {
  breadcrumbSchema,
  collectionPageSchema,
  graph,
  perCategoryItemLists,
  type JsonLdComponent,
} from "@/lib/jsonld";
import {
  categories,
  totalCount,
} from "@/components/showcase/registry/categories";
import { absoluteUrl, site } from "@/lib/site";
import type { Metadata } from "next";

const pageTitle = "Components gallery";
const pageDescription = `Browse ${totalCount}+ copy-paste UI animations and components across ${categories.length} categories. Loaders, spinners, progress, text effects, buttons, toggles, hero sections, footers, login forms, calendars, sidebars, steppers, AI/chat UIs, command palettes, video player UI, watch faces, testimonials, comments, profile headers, file upload, mobile patterns, skeletons and more. Zero dependencies, framework-agnostic.`;
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
  // Reshape the registry into the structural form perCategoryItemLists wants.
  // Avoids pulling React preview nodes into the schema payload.
  const catsForSchema: ReadonlyArray<{
    id: string;
    label: string;
    components: ReadonlyArray<JsonLdComponent>;
  }> = categories.map((cat) => ({
    id: cat.id,
    label: cat.label,
    components: cat.components.map((c) => ({
      id: c.id,
      name: c.name,
      category: c.category,
    })),
  }));

  const jsonLd = graph(
    collectionPageSchema({
      url: pageUrl,
      name: `${pageTitle} — ${site.name}`,
      description: pageDescription,
      itemCount: totalCount,
    }),
    // Per-category ItemLists — one schema per category instead of a single
    // 650-item monster. Google extracts more granular signals and LLMs can
    // quote a single category as a self-contained list payload.
    ...perCategoryItemLists(catsForSchema),
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
