import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { categories } from "@/components/showcase/registry/categories";
import { allComponents, findComponent } from "@/lib/component-payload";
import { describeCategory } from "@/lib/category-meta";
import { absoluteUrl, site } from "@/lib/site";
import {
  graph,
  breadcrumbSchema,
  componentSourceCodeSchema,
  founderSchema,
} from "@/lib/jsonld";
import { CopyButton } from "./copy-button";
import { PreviewById } from "./preview-by-id";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams(): { id: string }[] {
  return allComponents().map(({ component }) => ({ id: component.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const flat = findComponent(id);
  if (!flat) return {};
  const { component: c, categoryLabel } = flat;
  const hasJS = c.code.some((t) => t.language === "javascript");
  const stack = hasJS ? "HTML, CSS & vanilla JS" : "HTML & CSS";
  const title = `${c.name} — ${categoryLabel} component`;
  const description = `${c.name}: a copy-paste ${categoryLabel.toLowerCase()} UI component in pure ${stack}. Zero dependencies, framework-agnostic (React, Vue, Svelte, Astro, Laravel, Django, Rails, plain HTML). Free, MIT-licensed.`;
  const path = `/components/${c.id}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${c.name} — ${site.name}`,
      description,
      url: absoluteUrl(path),
      type: "article",
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${c.name} — ${site.name}`,
      description,
    },
    keywords: [
      c.name,
      `${c.name} CSS`,
      `${categoryLabel} component`,
      "copy paste UI",
      "css animation",
      "framework agnostic",
    ],
  };
}

const LANG_LABEL: Record<string, string> = {
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
};

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const flat = findComponent(id);
  if (!flat) notFound();

  const { component: c, categoryId, categoryLabel } = flat;
  const hasJS = c.code.some((t) => t.language === "javascript");
  const stack = hasJS ? "HTML, CSS & vanilla JS" : "HTML & CSS";
  const pageUrl = absoluteUrl(`/components/${c.id}`);

  // Related components: others in the same category.
  const related =
    categories
      .find((cat) => cat.id === categoryId)
      ?.components.filter((x) => x.id !== c.id)
      .slice(0, 8) ?? [];

  // The full snippet text used both for the JSON-LD `text` and as a single
  // "copy everything" affordance.
  const fullCode = c.code.map((t) => `/* ${t.label} */\n${t.code}`).join("\n\n");

  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Components", url: "/components" },
      { name: categoryLabel, url: `/components#section-${categoryId}` },
      { name: c.name, url: `/components/${c.id}` },
    ]),
    componentSourceCodeSchema({
      id: c.id,
      name: c.name,
      category: categoryLabel,
      pageUrl,
      languages: c.code.map((t) => t.language),
      codeText: fullCode,
    }),
    founderSchema()
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Preview styles for this component only. */}
      {c.cssInline && (
        <style dangerouslySetInnerHTML={{ __html: c.cssInline }} />
      )}
      <Navbar />
      <main id="main" className="pt-20 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-text-muted mb-6">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-text-secondary">Home</Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/components" className="hover:text-text-secondary">Components</Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={`/components#section-${categoryId}`}
                className="hover:text-text-secondary"
              >
                {categoryLabel}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-text-secondary" aria-current="page">{c.name}</li>
          </ol>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            {c.name}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-text-muted max-w-2xl">
            A copy-paste <Link href={`/components#section-${categoryId}`} className="text-accent hover:underline">{categoryLabel.toLowerCase()}</Link>{" "}
            component in pure {stack}. Zero dependencies, framework-agnostic, MIT-licensed.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-mono">
            <span className="px-2 py-1 rounded border border-border bg-surface-light text-text-secondary">{categoryLabel}</span>
            {c.code.map((t) => (
              <span key={t.label} className="px-2 py-1 rounded border border-border bg-surface-light text-text-secondary">
                {LANG_LABEL[t.language] ?? t.label}
              </span>
            ))}
            <span className="px-2 py-1 rounded border border-accent/20 bg-accent/5 text-accent">any framework</span>
          </div>
        </header>

        {/* Live preview */}
        <section aria-label="Live preview" className="mb-10">
          <div className="rounded-xl border border-border bg-surface-light/30 p-8 sm:p-12 flex items-center justify-center min-h-[220px] overflow-hidden">
            <PreviewById id={c.id} />
          </div>
        </section>

        {/* Code — rendered server-side as plain HTML so it is fully indexable. */}
        <section aria-label="Source code" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-mono uppercase tracking-wider text-text-muted">
              Copy into your project
            </h2>
            <CopyButton text={fullCode} label="Copy all" />
          </div>
          {c.code.map((tab) => (
            <div key={tab.label} className="rounded-xl border border-border bg-surface-light overflow-hidden">
              <div className="flex items-center justify-between border-b border-border px-4 py-2">
                <span className="text-xs font-medium tracking-wide uppercase text-accent">
                  {LANG_LABEL[tab.language] ?? tab.label}
                </span>
                <CopyButton text={tab.code} label={`Copy ${LANG_LABEL[tab.language] ?? tab.label}`} />
              </div>
              <pre className="p-5 overflow-x-auto text-[13px] leading-relaxed">
                <code className="text-text-secondary">{tab.code}</code>
              </pre>
            </div>
          ))}
        </section>

        {/* How to use */}
        <section aria-label="Usage" className="mt-12 text-sm text-text-muted space-y-2">
          <h2 className="text-base font-semibold text-text-primary">How to use {c.name}</h2>
          <p>
            Paste the HTML where you need it and the CSS into a global stylesheet
            (or a <code className="text-text-secondary">&lt;style&gt;</code> tag). Every class is
            prefixed <code className="text-text-secondary">nuda-</code> so it never collides with
            Tailwind or your own styles. Tweak the CSS custom properties to match your design system.
          </p>
          <p>
            Works in React, Vue, Svelte, Astro, Next.js, Nuxt, Laravel Blade, Django, Rails — or a
            single <code className="text-text-secondary">.html</code> file. No npm install, no build step.
          </p>
        </section>

        {/* Related — internal links spread ranking signal across the category. */}
        {related.length > 0 && (
          <section aria-label="Related components" className="mt-14">
            <h2 className="text-base font-semibold text-text-primary mb-4">
              More {categoryLabel.toLowerCase()} components
            </h2>
            <ul className="flex flex-wrap gap-2">
              {related.map((r) => (
                <li key={r.id}>
                  <Link
                    href={`/components/${r.id}`}
                    className="inline-block px-3 py-1.5 rounded-lg border border-border bg-surface-light/40 text-sm text-text-secondary hover:border-accent/30 hover:text-text-primary transition-colors"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm">
              <Link href="/components" className="text-accent hover:underline">
                ← Browse all {site.name} components
              </Link>
            </p>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
