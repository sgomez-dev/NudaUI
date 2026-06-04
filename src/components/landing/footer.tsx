import Link from "next/link";
import { site } from "@/lib/site";
import { ContactDialog } from "@/components/landing/contact-dialog";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 sm:px-6 py-6 sm:py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
        {/* Logo + tagline */}
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded bg-accent flex items-center justify-center">
            <span className="text-surface text-[10px] font-black">N</span>
          </div>
          <span className="text-xs text-text-muted font-mono">
            {site.url.replace(/^https?:\/\//, "")}
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-text-muted">
          <Link
            href="/components"
            className="hover:text-text-primary transition-colors"
          >
            Components
          </Link>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
          <ContactDialog />
          <Link
            href="/terms"
            className="hover:text-text-primary transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="hover:text-text-primary transition-colors"
          >
            Privacy
          </Link>
        </div>

        {/* Easter egg */}
        <p className="text-[10px] text-text-muted/30 font-mono select-none">
          &lt;/div&gt; &lt;!-- no webpack was harmed --&gt;
        </p>
      </div>

      {/* Creator credit — bidirectional entity link to the maintainer's site.
          rel="author" + a real, followable link tells search/LLM engines that
          NudaUI and sgomez.dev are one identity, so NudaUI inherits its trust. */}
      <div className="max-w-6xl mx-auto mt-6 pt-5 border-t border-border/60 text-[11px] text-text-muted">
        Created &amp; maintained by{" "}
        <a
          href={site.creator.url}
          rel="author"
          target="_blank"
          className="text-text-secondary hover:text-accent transition-colors"
        >
          {site.creator.name}
        </a>{" "}
        ({site.creator.url.replace(/^https?:\/\//, "")}). Component code is MIT
        licensed — free for any project.
      </div>
    </footer>
  );
}
