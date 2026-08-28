import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { DocSections } from "@/components/docs/doc-sections";
import type { DocPage } from "@/lib/doc";

/**
 * Page shell for the document-shaped routes (`/about`, `/contact`,
 * `/developers`).
 *
 * Layout is copied from `/terms` and `/privacy` — same column width, same
 * header treatment, same prose styling — so the new pages read as part of the
 * site rather than as bolted-on docs. Everything below the header is server
 * rendered from `DocPage` data, which means the content is fully present in
 * the raw HTML with no JavaScript required.
 */
export function DocPageView({
  eyebrow,
  heading,
  lead,
  page,
}: {
  /** Small mono label above the title, e.g. "Docs · Last updated …". */
  eyebrow: string;
  /** The visible `<h1>`. */
  heading: string;
  /** One-paragraph lead under the title. */
  lead: string;
  page: DocPage;
}) {
  return (
    <>
      <Navbar />
      <main
        id="main"
        className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-3xl mx-auto"
      >
        <header className="mb-10 border-b border-border pb-8">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted mb-3">
            {eyebrow}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
            {heading}
          </h1>
          <p className="text-text-secondary mt-4 leading-relaxed">{lead}</p>
        </header>

        <DocSections page={page} />
      </main>
      <Footer />
    </>
  );
}
