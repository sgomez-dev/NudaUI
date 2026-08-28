import type { Metadata } from "next";
import { DocPageView } from "@/components/docs/doc-page-view";
import { absoluteUrl, site } from "@/lib/site";
import {
  articleSchema,
  breadcrumbSchema,
  contactPageSchema,
  graph,
  organizationSchema,
} from "@/lib/jsonld";
import { contactDoc, contactMeta } from "@/lib/pages/contact";

const pageUrl = absoluteUrl(contactMeta.path);

export const metadata: Metadata = {
  title: `Contact ${site.name}`,
  description: contactMeta.description,
  alternates: {
    canonical: contactMeta.path,
    types: {
      "text/markdown": [
        {
          url: `${contactMeta.path}.md`,
          title: `Contact ${site.name} (Markdown)`,
        },
      ],
    },
  },
  openGraph: {
    title: `Contact ${site.name}`,
    description: contactMeta.description,
    url: pageUrl,
    type: "article",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: `Contact ${site.name}`,
    description: contactMeta.description,
  },
};

export default function ContactPage() {
  const doc = contactDoc();

  const jsonLd = graph(
    contactPageSchema(),
    articleSchema({
      url: pageUrl,
      headline: `Contact ${site.name}`,
      description: contactMeta.description,
      datePublished: contactMeta.publishedIso,
      dateModified: contactMeta.lastUpdatedIso,
      type: "TechArticle",
      sections: doc.sections.map((section) => section.heading),
    }),
    organizationSchema(),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Contact", url: contactMeta.path },
    ])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DocPageView
        eyebrow={`Contact · Last updated ${contactMeta.lastUpdated}`}
        heading={`Contact ${site.name}`}
        lead="One maintainer, four routes, no ticketing system. Pick the one that matches what you need and you will get a real answer."
        page={doc}
      />
    </>
  );
}
