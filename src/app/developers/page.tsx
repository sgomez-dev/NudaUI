import type { Metadata } from "next";
import { DocPageView } from "@/components/docs/doc-page-view";
import { absoluteUrl, site } from "@/lib/site";
import {
  apiReferenceSchema,
  breadcrumbSchema,
  graph,
  organizationSchema,
} from "@/lib/jsonld";
import { developersDoc, developersMeta } from "@/lib/pages/developers";

const pageUrl = absoluteUrl(developersMeta.path);

export const metadata: Metadata = {
  // Product name in the title so name-based searches ("NudaUI API",
  // "NudaUI developer docs") resolve to this page.
  title: `${site.name} developer portal — API docs & OpenAPI spec`,
  description: developersMeta.description,
  keywords: [
    `${site.name} API`,
    `${site.name} developer portal`,
    `${site.name} OpenAPI`,
    `${site.name} JSON catalog`,
    "component API",
    "UI animation API",
  ],
  alternates: {
    canonical: developersMeta.path,
    types: {
      "text/markdown": [
        {
          url: `${developersMeta.path}.md`,
          title: `${site.name} developer portal (Markdown)`,
        },
      ],
      "application/json": [
        { url: "/openapi.json", title: `${site.name} OpenAPI 3.1 document` },
      ],
    },
  },
  openGraph: {
    title: `${site.name} developer portal`,
    description: developersMeta.description,
    url: pageUrl,
    type: "article",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: `${site.name} developer portal`,
    description: developersMeta.description,
  },
};

export default function DevelopersPage() {
  const doc = developersDoc();

  const jsonLd = graph(
    apiReferenceSchema({
      url: pageUrl,
      name: `${site.name} developer portal`,
      description: developersMeta.description,
      datePublished: developersMeta.publishedIso,
      dateModified: developersMeta.lastUpdatedIso,
      sections: doc.sections.map((section) => section.heading),
    }),
    organizationSchema(),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Developers", url: developersMeta.path },
    ])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DocPageView
        eyebrow={`Docs · Last updated ${developersMeta.lastUpdated}`}
        heading={`${site.name} developer portal`}
        lead="Four read-only JSON endpoints, no API key, no rate limit, CORS open to everyone. Everything below works from a terminal in the next thirty seconds."
        page={doc}
      />
    </>
  );
}
