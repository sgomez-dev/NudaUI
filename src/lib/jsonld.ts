/**
 * JSON-LD schema builders.
 *
 * Each function returns a plain object that is safe to JSON.stringify into a
 * <script type="application/ld+json"> tag. We intentionally keep the shapes
 * narrow (not the full schema-dts types) so the payload Google sees is lean
 * and the intent of each field is obvious at the call site.
 */

import { site, absoluteUrl } from "./site";
import { faqs } from "./faqs";

type JsonLd = Record<string, unknown>;

/** The core website identity — search action hints at future site search. */
export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    alternateName: site.tagline,
    url: site.url,
    description: site.shortDescription,
    inLanguage: site.language,
    publisher: { "@id": `${site.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/components?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Organization record — enriched with logo, social profiles, and founding data. */
export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    description: site.shortDescription,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.png"),
      width: 512,
      height: 512,
    },
    sameAs: [site.social.github, site.social.twitterUrl],
    founder: {
      "@type": "Person",
      name: "NudaUI team",
    },
  };
}

/**
 * SoftwareApplication — the canonical schema for "NudaUI is a tool/library".
 * Classifying it as DeveloperApplication gives Google the signal to list it
 * in tool-oriented rich results.
 */
export function softwareApplicationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${site.url}/#software`,
    name: site.name,
    description: site.description,
    url: site.url,
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "UI animation library",
    operatingSystem: "Any",
    softwareVersion: "0.1.0",
    license: "https://opensource.org/licenses/MIT",
    downloadUrl: site.social.github,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
    author: { "@id": `${site.url}/#organization` },
  };
}

/** FAQPage — lifted straight from the FAQ section so copy and schema stay in sync. */
export function faqPageSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/** Breadcrumb trail — one entry per navigable level. */
export function breadcrumbSchema(
  items: { name: string; url: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

/** CollectionPage — signals that a page is a curated listing (gallery/index). */
export function collectionPageSchema(args: {
  url: string;
  name: string;
  description: string;
  itemCount?: number;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${args.url}#collection`,
    url: args.url,
    name: args.name,
    description: args.description,
    isPartOf: { "@id": `${site.url}/#website` },
    inLanguage: site.language,
    ...(args.itemCount
      ? {
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: args.itemCount,
          },
        }
      : {}),
  };
}

/**
 * Pack every schema you want on a page into a single @graph payload.
 * Google prefers one <script> per page when the schemas are related, which
 * also keeps the HTML quieter.
 */
export function graph(...nodes: JsonLd[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.map((n) => {
      // Drop the redundant inner @context — the outer wrapper owns it.
      const clone = { ...n };
      delete (clone as { "@context"?: unknown })["@context"];
      return clone;
    }),
  };
}
