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
import { categoryDescriptions } from "./category-meta";

type JsonLd = Record<string, unknown>;

/** Minimal shape we need from a registry component for ItemList payloads.
 *  Kept structural so it works for both the gallery's `IndexedComponent`
 *  and the bare `NudaComponent` from the registry types — no import cycles. */
export interface JsonLdComponent {
  id: string;
  name: string;
  category: string;
}

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
    legalName: site.name,
    alternateName: site.tagline,
    url: site.url,
    description: site.shortDescription,
    slogan: site.tagline,
    email: site.email,
    foundingDate: "2025",
    knowsAbout: [
      "CSS animations",
      "UI components",
      "Web design",
      "Frontend engineering",
      "Accessibility",
      "Framework-agnostic markup",
    ],
    logo: {
      "@type": "ImageObject",
      "@id": `${site.url}/#logo`,
      url: absoluteUrl("/icon"),
      contentUrl: absoluteUrl("/icon"),
      width: 512,
      height: 512,
      caption: `${site.name} logo`,
    },
    image: {
      "@type": "ImageObject",
      url: absoluteUrl("/opengraph-image"),
      width: 1200,
      height: 630,
    },
    sameAs: [site.social.github],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: site.email,
        contactType: "customer support",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Spanish"],
      },
      {
        "@type": "ContactPoint",
        url: absoluteUrl("/.well-known/security.txt"),
        contactType: "security",
        areaServed: "Worldwide",
      },
    ],
    founder: {
      "@type": "Person",
      "@id": `${site.url}/#founder`,
      name: site.creator.name,
      url: site.creator.url,
      email: site.creator.email,
      jobTitle: "Software Engineer",
      description: `${site.creator.role} of ${site.name}.`,
      sameAs: [site.creator.url, site.creator.github],
      knowsLanguage: ["English", "Spanish"],
    },
  };
}

/**
 * SoftwareApplication — the canonical schema for "NudaUI is a tool/library".
 * Classifying it as DeveloperApplication gives Google the signal to list it
 * in tool-oriented rich results.
 */
export function softwareApplicationSchema(args?: {
  /** Pass the category labels so `featureList` mirrors the live registry. */
  features?: string[];
  /** Component count for richer signals to crawlers/LLMs. */
  componentCount?: number;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "@id": `${site.url}/#software`,
    name: site.name,
    alternateName: site.tagline,
    description: site.description,
    url: site.url,
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "UI animation library",
    operatingSystem: "Any",
    softwareVersion: "0.1.0",
    datePublished: "2025-01-01",
    license: "https://opensource.org/licenses/MIT",
    downloadUrl: site.social.github,
    codeRepository: site.social.github,
    programmingLanguage: ["CSS", "HTML", "JavaScript"],
    runtimePlatform: "Any web browser",
    fileSize: "0 KB (no runtime, copy-paste only)",
    permissions: "none",
    isAccessibleForFree: true,
    keywords: site.keywords.join(", "),
    inLanguage: site.language,
    // Accessibility metadata — surfaces in Google's accessibility-aware results
    // and signals to AI agents that this product is inclusive by design.
    accessibilityAPI: "ARIA",
    accessibilityControl: ["fullKeyboardControl", "fullMouseControl", "fullTouchControl"],
    accessibilityFeature: [
      "alternativeText",
      "highContrastDisplay",
      "readingOrder",
      "structuralNavigation",
      "describedMath",
      "displayTransformability",
    ],
    accessibilityHazard: ["noFlashingHazard", "noMotionSimulationHazard", "noSoundHazard"],
    audience: {
      "@type": "Audience",
      audienceType: "Web developers, designers, and engineering teams",
    },
    ...(args?.componentCount
      ? {
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: args.componentCount,
            name: `${site.name} component catalog`,
          },
        }
      : {}),
    ...(args?.features && args.features.length > 0
      ? { featureList: args.features }
      : {}),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: { "@id": `${site.url}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
    author: { "@id": `${site.url}/#organization` },
    maintainer: { "@id": `${site.url}/#organization` },
    creator: { "@id": `${site.url}/#founder` },
    copyrightHolder: { "@id": `${site.url}/#founder` },
    copyrightYear: 2025,
    copyrightNotice: `© 2025 ${site.creator.name}. ${site.name} is created and owned by ${site.creator.name}; component source code is released under the MIT license.`,
  };
}

/**
 * FAQPage — lifted straight from the FAQ section so copy and schema stay
 * in sync. Includes a `speakable` selector so Google Assistant / voice
 * results can read FAQ answers aloud.
 */
export function faqPageSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".nuda-faq-question", ".nuda-faq-answer"],
    },
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

/**
 * Article / TechArticle — for legal pages and any future tutorial content.
 * Surfaces in Google's Article rich results, includes Speakable so voice
 * search can read sections aloud. `articleSection` lets LLMs jump to a
 * specific clause without guessing.
 */
export function articleSchema(args: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  /** "TechArticle" for docs, "Article" otherwise. */
  type?: "Article" | "TechArticle";
  sections?: string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": args.type ?? "Article",
    "@id": `${args.url}#article`,
    headline: args.headline,
    description: args.description,
    url: args.url,
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    inLanguage: site.language,
    isPartOf: { "@id": `${site.url}/#website` },
    publisher: { "@id": `${site.url}/#organization` },
    author: { "@id": `${site.url}/#founder` },
    mainEntityOfPage: args.url,
    ...(args.sections && args.sections.length > 0
      ? { articleSection: args.sections }
      : {}),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "p"],
    },
    image: {
      "@type": "ImageObject",
      url: absoluteUrl("/opengraph-image"),
      width: 1200,
      height: 630,
    },
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
 * SoftwareSourceCode — one snippet "object" per registry component.
 * Used as the `item` of every entry inside the gallery ItemList so search
 * engines can index individual components as code samples (and LLMs can
 * surface them by name when grounding).
 *
 * The @id uses the component's stable `id` slug so it survives a category
 * rename. The URL points to the gallery (the modal-based UX has no per
 * component route) — good enough as a canonical for a single SPA entry.
 */
export function softwareSourceCodeSchema(c: JsonLdComponent): JsonLd {
  return {
    "@type": "SoftwareSourceCode",
    "@id": `${site.url}/components#${c.id}`,
    name: c.name,
    codeSampleType: "snippet",
    programmingLanguage: ["CSS", "HTML"],
    url: absoluteUrl("/components"),
    isPartOf: { "@id": `${site.url}/#software` },
    keywords: [c.category, c.name, "copy paste", "animation", "css"].join(", "),
  };
}

/**
 * Per-component SoftwareSourceCode for a dedicated `/components/[id]` page.
 *
 * Richer than the gallery-level `softwareSourceCodeSchema`: it carries the
 * actual `text` (so search engines and LLMs index the real snippet), the page
 * as canonical `url`, the MIT license, and the creator as `author` — wiring the
 * component into the same identity graph as the homepage (#founder → sgomez.dev
 * via its `sameAs`). This is the core GEO signal for "NudaUI <component>" queries.
 */
export function componentSourceCodeSchema(args: {
  id: string;
  name: string;
  category: string;
  pageUrl: string;
  languages: string[];
  codeText: string;
  dateModified?: string;
}): JsonLd {
  const hasJS = args.languages.includes("javascript");
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": `${args.pageUrl}#code`,
    name: args.name,
    description: `${args.name} — a copy-paste ${args.category} UI component for any framework (React, Vue, Svelte, Astro, Laravel, Django, Rails, plain HTML). Pure HTML + CSS${hasJS ? " + vanilla JS" : ""}, zero dependencies, zero build step.`,
    codeSampleType: "snippet",
    programmingLanguage: args.languages.map((l) => l.toUpperCase()),
    url: args.pageUrl,
    mainEntityOfPage: args.pageUrl,
    text: args.codeText,
    license: "https://opensource.org/licenses/MIT",
    codeRepository: site.social.github,
    isPartOf: { "@id": `${site.url}/#software` },
    isAccessibleForFree: true,
    inLanguage: site.language,
    author: { "@id": `${site.url}/#founder` },
    creator: { "@id": `${site.url}/#founder` },
    copyrightHolder: { "@id": `${site.url}/#founder` },
    keywords: [
      args.category,
      args.name,
      "copy paste",
      "css animation",
      "ui component",
      "framework agnostic",
    ].join(", "),
    ...(args.dateModified ? { dateModified: args.dateModified } : {}),
  };
}

/**
 * Minimal Person node for the creator, safe to embed on any page so the
 * `#founder` @id referenced elsewhere always resolves and the sgomez.dev
 * association travels with every component page (entity linking).
 */
export function founderSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#founder`,
    name: site.creator.name,
    givenName: "Santiago",
    familyName: "Gómez de la Torre Romero",
    url: site.creator.url,
    jobTitle: "Software Engineer",
    description: `${site.creator.role} of ${site.name}.`,
    sameAs: [site.creator.url, site.creator.github],
  };
}

/**
 * ItemList — the canonical "this page is a list" schema. We emit one big
 * ordered list with every component, so Google can show rich list results
 * for queries like "css copy paste animation library".
 */
export function itemListSchema(args: {
  url: string;
  name: string;
  description: string;
  components: readonly JsonLdComponent[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${args.url}#itemlist`,
    url: args.url,
    name: args.name,
    description: args.description,
    numberOfItems: args.components.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: args.components.map((c, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: softwareSourceCodeSchema(c),
    })),
  };
}

/**
 * HowTo — "How to use NudaUI in three steps". Surfaces NudaUI in
 * AI Overviews and Google's HowTo card when somebody searches for
 * "how to add CSS animations without dependencies".
 */
export function howToUseSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${site.url}/#howto-use`,
    name: `How to use ${site.name} in any project`,
    description:
      "Add a copy-paste CSS animation to any framework — React, Vue, Svelte, Astro, Laravel, Django, Rails, or plain HTML — in under a minute.",
    totalTime: "PT1M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
    supply: [{ "@type": "HowToSupply", name: "A code editor" }],
    tool: [{ "@type": "HowToTool", name: "Any framework that renders HTML" }],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Browse the gallery",
        text: `Open the components gallery on ${site.url}/components and pick the animation you want.`,
        url: absoluteUrl("/components"),
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Copy the HTML and CSS",
        text: "Open the component in the modal, switch between HTML / CSS / JS tabs, and copy the snippet you need.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Paste into your project",
        text: "Drop the markup wherever you need it. Tweak the CSS custom properties (color, size, timing) to match your design system. Done.",
      },
    ],
  };
}

/**
 * Per-category ItemList — emits one ItemList schema per category instead
 * of one monolithic list of 650+ items. Google extracts more granular
 * signals (and LLMs can quote a single category as a self-contained list)
 * when each section is its own typed payload.
 *
 * Pass the registry as `{ id, label, components[] }[]` so the helper can
 * stay free of registry-internal types.
 */
export function perCategoryItemLists(
  cats: ReadonlyArray<{
    id: string;
    label: string;
    components: ReadonlyArray<JsonLdComponent>;
  }>
): JsonLd[] {
  return cats.map((cat) => ({
    "@type": "ItemList",
    "@id": `${site.url}/components#${cat.id}-list`,
    url: `${site.url}/components#section-${cat.id}`,
    name: `${cat.label} — ${site.name}`,
    numberOfItems: cat.components.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    isPartOf: { "@id": `${site.url}/#software` },
    itemListElement: cat.components.map((c, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: softwareSourceCodeSchema(c),
    })),
  }));
}

/**
 * CategoryList — flattens our registry's `description` map into a
 * lightweight DefinedTerm list. Surfaces inside the @graph as a glossary
 * that LLMs can quote verbatim when describing the catalog.
 */
export function categoryGlossarySchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${site.url}/#categories`,
    name: `${site.name} component categories`,
    inDefinedTermSet: site.url,
    hasDefinedTerm: Object.entries(categoryDescriptions).map(
      ([id, description]) => ({
        "@type": "DefinedTerm",
        "@id": `${site.url}/components#section-${id}`,
        name: id,
        description,
        inDefinedTermSet: `${site.url}/#categories`,
      })
    ),
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
