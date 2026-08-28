import type { Metadata } from "next";
import Link from "next/link";
import { NotFoundView } from "./not-found-view";
import { recoveryLinks, recoveryMarkdown } from "@/lib/not-found-map";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you're looking for doesn't exist. Head back to the homepage or browse the component gallery.",
  // Crawlers should skip 404 responses but still follow the CTAs we render
  // so link equity flows back to canonical routes.
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <NotFoundView />

      {/*
        Recovery map — server rendered, below the animated 404.

        Two audiences read a 404 body. A human wants a way back, which the
        view above already gives them. An agent wants to know what *does*
        exist, and it will not execute the JavaScript that draws the buttons.
        So the same map is printed here as literal Markdown: present in the
        raw HTML, styled to match the terminal block the view already uses,
        and mirrored by the `text/markdown` representation of this URL.
      */}
      <section
        aria-labelledby="recovery-heading"
        className="border-t border-border px-4 sm:px-6 py-12 sm:py-16"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            id="recovery-heading"
            className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted mb-5"
          >
            Where to look instead
          </h2>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
            {recoveryLinks.map((link) => (
              <li key={link.href} className="text-sm leading-relaxed">
                <Link
                  href={link.href}
                  className="text-accent hover:underline font-medium"
                >
                  {link.label}
                </Link>
                <span className="text-text-muted"> — {link.note}</span>
              </li>
            ))}
          </ul>

          <pre className="overflow-x-auto rounded-lg bg-surface-light/50 border border-border p-4 font-mono text-[11px] leading-relaxed text-text-muted">
            {recoveryMarkdown()}
          </pre>
        </div>
      </section>
    </>
  );
}
