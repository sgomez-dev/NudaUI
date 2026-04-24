import Link from "next/link";

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
            nudaui.dev
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
            href="https://github.com/nudaui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Easter egg */}
        <p className="text-[10px] text-text-muted/30 font-mono select-none">
          &lt;/div&gt; &lt;!-- no webpack was harmed --&gt;
        </p>
      </div>
    </footer>
  );
}
