import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Marquee } from "@/components/landing/marquee";
import { StatsSection } from "@/components/landing/stats-section";
import { FeaturesGrid } from "@/components/landing/features-grid";
import { LiveMetrics } from "@/components/landing/live-metrics";
import { CodeReveal } from "@/components/landing/code-reveal";
import { InteractivePlayground } from "@/components/landing/interactive-playground";
import { HorizontalShowcase } from "@/components/landing/horizontal-showcase";
import { HowItWorks } from "@/components/landing/how-it-works";
import { WhyNuda } from "@/components/landing/why-nuda";
import { Roadmap } from "@/components/landing/roadmap";
import { FAQ } from "@/components/landing/faq";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import {
  breadcrumbSchema,
  categoryGlossarySchema,
  faqPageSchema,
  graph,
  howToUseSchema,
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "@/lib/jsonld";
import { site } from "@/lib/site";
import { categories } from "@/components/showcase/registry/categories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Keep the homepage title flat (no template) so search results show the
  // cleanest possible title. Every other route inherits the "— NudaUI"
  // suffix from the template defined in layout.tsx.
  title: {
    absolute: site.title,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.shortDescription,
    url: site.url,
    type: "website",
  },
};

export default function Home() {
  const jsonLd = graph(
    websiteSchema(),
    organizationSchema(),
    softwareApplicationSchema({
      features: categories.map((c) => c.label),
    }),
    howToUseSchema(),
    categoryGlossarySchema(),
    faqPageSchema(),
    breadcrumbSchema([{ name: "Home", url: "/" }])
  );

  return (
    <>
      <script
        type="application/ld+json"
        // The graph is a single, pre-escaped payload — stringify once, inject
        // once. Google prefers consolidated @graph blocks over many scripts.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <StatsSection />
        <FeaturesGrid />
        <LiveMetrics />
        <CodeReveal />
        <InteractivePlayground />
        <HorizontalShowcase />
        <HowItWorks />
        <WhyNuda />
        <Roadmap />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
