"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { findComponent } from "@/lib/component-payload";
import type { RagResult } from "@/lib/rag";

/**
 * One search result rendered as a component card.
 *
 * The API only gives us an id + metadata. We map that id back to the real
 * registry entry and render its live animated `preview` — the same node the
 * gallery shows. If the id can't be resolved (e.g. registry drift), we fall
 * back to a plain card that links out to the component's anchor.
 */
export function SearchResultCard({ result }: { result: RagResult }) {
  const flat = findComponent(result.id);

  // ── Fallback: id not found in the registry ──
  if (!flat) {
    return (
      <a
        href={result.anchor}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col justify-between gap-6 p-4 sm:p-6 rounded-xl border border-border bg-surface-light/30 hover:bg-surface-light hover:border-accent/20 transition-all duration-300 aspect-square overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
      >
        <span className="inline-flex items-center gap-1 self-end text-[10px] font-mono text-text-muted group-hover:text-accent transition-colors">
          Open <ArrowUpRight className="w-3 h-3" />
        </span>
        <div>
          <p className="text-sm font-medium text-text-primary truncate">
            {result.name}
          </p>
          <p className="text-[10px] text-text-muted font-mono truncate">
            {result.category}
          </p>
        </div>
      </a>
    );
  }

  // ── Resolved: render the real animated preview ──
  const { component } = flat;
  return (
    <Link
      href={`/components/${component.id}`}
      className="group relative flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 md:p-8 rounded-xl border border-border bg-surface-light/30 hover:bg-surface-light hover:border-accent/20 transition-all duration-300 aspect-square text-left overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
    >
      <div className="flex items-center justify-center flex-1">
        {component.preview}
      </div>
      <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
        <p className="text-[10px] sm:text-xs font-medium text-text-primary truncate">
          {component.name}
        </p>
        <p className="text-[8px] sm:text-[10px] text-text-muted font-mono truncate">
          {component.category}
        </p>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-accent/[0.03] to-transparent" />
    </Link>
  );
}
