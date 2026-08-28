import type { Metadata } from "next";
import { DocPageView } from "@/components/docs/doc-page-view";
import { absoluteUrl, site } from "@/lib/site";
import {
  articleSchema,
  breadcrumbSchema,
  founderSchema,
  graph,
  organizationSchema,
} from "@/lib/jsonld";
import { aboutDoc, aboutMeta } from "@/lib/pages/about";

const pageUrl = absoluteUrl(aboutMeta.path);

export const metadata: Metadata = {
  title: `About ${site.name}`,
  description: aboutMeta.description,
  alternates: {
    canonical: aboutMeta.path,
    types: {
      "text/markdown": [
        { url: `${aboutMeta.path}.md`, title: `About ${site.name} (Markdown)` },
      ],
    },
  },
  openGraph: {
    title: `About ${site.name}`,
    description: aboutMeta.description,
    url: pageUrl,
    type: "article",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: `About ${site.name}`,
    description: aboutMeta.description,
  },
};

export default function AboutPage() {
  const doc = aboutDoc();

  const jsonLd = graph(
    articleSchema({
      url: pageUrl,
      headline: `About ${site.name}`,
      description: aboutMeta.description,
      datePublished: aboutMeta.publishedIso,
      dateModified: aboutMeta.lastUpdatedIso,
      type: "TechArticle",
      sections: doc.sections.map((section) => section.heading),
    }),
    // The About page is where an agent verifies the organisation exists, so
    // the full Organization + Person records travel with it.
    organizationSchema(),
    founderSchema(),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "About", url: aboutMeta.path },
    ])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DocPageView
        eyebrow={`About · Last updated ${aboutMeta.lastUpdated}`}
        heading={`About ${site.name}`}
        lead="Copy-paste UI animations that work in any stack, built by one person, given away under MIT. Here is what that means in practice — and who is behind it."
        page={doc}
      />
    </>
  );
}
