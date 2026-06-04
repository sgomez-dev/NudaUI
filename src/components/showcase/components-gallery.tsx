"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";
import { X, Search } from "lucide-react";

import type { NudaComponent } from "./registry/types";
import {
  categories,
  totalCount,
  componentHasJS,
  allInlineCss,
  type CategoryConfig,
} from "./registry/categories";

/* ── Pre-compute search index ──
   One pass at module load instead of `n × 3` toLowerCase() calls per keystroke. */
type IndexedComponent = NudaComponent & {
  __search: string;
  __hasJS: boolean;
};
type IndexedCategory = Omit<CategoryConfig, "components"> & {
  components: IndexedComponent[];
};
const indexed: IndexedCategory[] = categories.map((cat) => ({
  ...cat,
  components: cat.components.map((c) => ({
    ...c,
    __search: `${c.name} ${c.category} ${c.id}`.toLowerCase(),
    __hasJS: componentHasJS(c),
  })),
}));

/* ── Scroll spy hook ── */
function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/* ── Lazy section ──
   Section content is a *lot* of DOM with live CSS animations. Skip the
   rendering work until it's near the viewport so the initial paint stays
   cheap. Once mounted, we keep it mounted so scrolling back doesn't re-init
   animations. */
function LazyGrid({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" } // pre-render before user reaches the section
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  return (
    <div ref={ref}>
      {visible ? (
        children
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              aria-hidden="true"
              className="aspect-square rounded-xl border border-border bg-surface-light/20"
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Gallery ── */
export function ComponentsGallery() {
  const [search, setSearch] = useState("");
  const [noJSOnly, setNoJSOnly] = useState(false);
  const [selected, setSelected] = useState<NudaComponent | null>(null);

  const sectionIds = useMemo(
    () => indexed.map((c) => `section-${c.id}`),
    []
  );
  const activeSection = useScrollSpy(sectionIds);

  const filteredCategories = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q && !noJSOnly) return indexed;
    return indexed
      .map((cat) => ({
        ...cat,
        components: cat.components.filter((c) => {
          if (noJSOnly && c.__hasJS) return false;
          if (q && !c.__search.includes(q)) return false;
          return true;
        }),
      }))
      .filter((cat) => cat.components.length > 0);
  }, [search, noJSOnly]);

  const filteredCount = filteredCategories.reduce(
    (acc, cat) => acc + cat.components.length,
    0
  );

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* All component CSS hoisted into one tag — class names are uniquely
          prefixed (`nuda-*`), so a single global block is safe and avoids
          mounting 300+ <style> tags. */}
      <style dangerouslySetInnerHTML={{ __html: allInlineCss }} />

      {/* Header */}
      <div className="mb-6 sm:mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.02em] leading-[1.05]"
        >
          Components
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-3 text-text-secondary max-w-xl"
        >
          <span className="text-accent font-semibold">{totalCount}</span>{" "}
          animations across {indexed.length} categories.
          <br />
          <span className="text-text-muted text-sm">
            Pure HTML + CSS + vanilla JS — zero dependencies, zero build tools.
          </span>
          <span className="flex flex-wrap gap-1 sm:gap-1.5 mt-2">
            {[
              "React",
              "Vue",
              "Svelte",
              "Angular",
              "Laravel",
              "Django",
              "Rails",
              "Go",
              "PHP",
              "Astro",
              "HTML",
            ].map((fw) => (
              <span
                key={fw}
                className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-md text-[8px] sm:text-[10px] font-mono font-medium bg-accent/8 text-accent/80 border border-accent/15"
              >
                {fw}
              </span>
            ))}
            <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-md text-[8px] sm:text-[10px] font-mono text-text-muted">
              + any stack
            </span>
          </span>
        </motion.p>
      </div>

      <div className="flex gap-4 sm:gap-6 lg:gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="sticky top-24 space-y-1 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 scrollbar-thin">
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-surface-light border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/40 transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Filters */}
            <label className="flex items-center gap-2 px-3 py-1.5 text-[11px] text-text-muted hover:text-text-secondary cursor-pointer select-none mb-3">
              <input
                type="checkbox"
                checked={noJSOnly}
                onChange={(e) => setNoJSOnly(e.target.checked)}
                className="accent-accent"
              />
              <span>CSS-only (no JS)</span>
            </label>

            {indexed.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeSection === `section-${cat.id}`;
              return (
                <a
                  key={cat.id}
                  href={`#section-${cat.id}`}
                  className={cn(
                    "flex items-center gap-2.5 px-3 py-1.5 text-xs rounded-lg transition-all",
                    isActive
                      ? "bg-accent/10 text-accent border border-accent/20"
                      : "text-text-muted hover:text-text-secondary hover:bg-surface-hover border border-transparent"
                  )}
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{cat.label}</span>
                  <span className="ml-auto text-[10px] opacity-60">
                    {cat.components.length}
                  </span>
                </a>
              );
            })}

            <div className="pt-4 mt-4 border-t border-border">
              <p className="text-[10px] font-mono text-text-muted/50 px-3">
                {totalCount} components · 0 dependencies
              </p>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          {/* Mobile search */}
          <div className="lg:hidden relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search components..."
              className="w-full pl-10 pr-4 py-3 text-sm bg-surface-light border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/40 transition-colors"
            />
          </div>

          {/* Mobile filter */}
          <label className="lg:hidden flex items-center gap-2 mb-4 px-3 py-1.5 text-[11px] text-text-muted bg-surface-light border border-border rounded-lg w-fit cursor-pointer select-none">
            <input
              type="checkbox"
              checked={noJSOnly}
              onChange={(e) => setNoJSOnly(e.target.checked)}
              className="accent-accent"
            />
            <span>CSS-only (no JS)</span>
          </label>

          {/* Mobile pills */}
          <div className="lg:hidden flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2">
            {indexed.map((cat) => (
              <a
                key={cat.id}
                href={`#section-${cat.id}`}
                className="flex-shrink-0 px-3 py-1 text-xs border border-border rounded-lg text-text-muted hover:text-text-secondary hover:border-border-light transition-colors whitespace-nowrap"
              >
                {cat.label}
              </a>
            ))}
          </div>

          {(search || noJSOnly) && (
            <p className="text-xs text-text-muted mb-6 font-mono">
              {filteredCount} result{filteredCount !== 1 ? "s" : ""}
              {search && <> for &quot;{search}&quot;</>}
              {noJSOnly && <> · CSS-only</>}
            </p>
          )}

          {/* Sections */}
          {filteredCategories.map((cat) => (
            <section
              key={cat.id}
              id={`section-${cat.id}`}
              className="mb-10 sm:mb-16 scroll-mt-20 sm:scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-lg font-semibold">{cat.label}</h2>
                <span className="text-xs font-mono text-text-muted bg-surface-light px-2 py-0.5 rounded">
                  {cat.components.length}
                </span>
              </div>

              <LazyGrid count={cat.components.length}>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
                  {cat.components.map((comp) => (
                    // role=button (not <button>) because component previews may
                    // themselves contain <button> elements — a button inside a
                    // button is invalid HTML and breaks hydration + click handling.
                    <div
                      key={comp.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelected(comp)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelected(comp);
                        }
                      }}
                      className="group w-full relative flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 md:p-8 rounded-xl border border-border bg-surface-light/30 hover:bg-surface-light hover:border-accent/20 transition-all duration-300 aspect-square text-left overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                    >
                      <div className="flex items-center justify-center flex-1">
                        {comp.preview}
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
                        <p className="text-[10px] sm:text-xs font-medium text-text-primary truncate">
                          {comp.name}
                        </p>
                        <div className="flex items-center gap-1.5">
                          <p className="text-[8px] sm:text-[10px] text-text-muted font-mono truncate">
                            {comp.category}
                          </p>
                          <span className="text-[7px] sm:text-[8px] text-accent/60 font-mono hidden sm:inline flex-shrink-0">
                            · any stack
                          </span>
                        </div>
                      </div>
                      {comp.__hasJS && (
                        <span
                          className="absolute top-2 right-2 text-[8px] font-mono font-bold text-accent/60 bg-accent/5 border border-accent/15 px-1.5 py-0.5 rounded"
                          title="Includes a JS snippet"
                        >
                          JS
                        </span>
                      )}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-accent/[0.03] to-transparent" />
                    </div>
                  ))}
                </div>
              </LazyGrid>

              <div className="mt-8 sm:mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </section>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted">
                {search ? (
                  <>No components match &quot;{search}&quot;</>
                ) : (
                  <>No components match the current filters</>
                )}
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setNoJSOnly(false);
                }}
                className="mt-3 text-xs text-accent hover:text-accent-dim transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] sm:max-h-[90vh] bg-surface-light border border-border rounded-2xl overflow-hidden flex flex-col mx-2 sm:mx-auto"
            >
              <div className="flex items-center justify-between p-3 sm:p-5 border-b border-border flex-shrink-0">
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm sm:text-base truncate">
                    {selected.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-0.5">
                    <p className="text-[10px] sm:text-xs text-text-muted font-mono">
                      {selected.category}
                    </p>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8px] sm:text-[10px] font-mono font-medium bg-accent/10 text-accent/80 border border-accent/20">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="hidden sm:inline">
                        Works with any framework
                      </span>
                      <span className="sm:hidden">Any stack</span>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-lg hover:bg-surface-hover text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="overflow-y-auto flex-1">
                <div className="flex items-center justify-center p-6 sm:p-12 border-b border-border bg-surface/50 min-h-[150px] sm:min-h-[200px]">
                  {/* The component's CSS is already hoisted globally, so no
                      need to inject it here again. */}
                  {selected.preview}
                </div>

                <div className="p-3 sm:p-4">
                  <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-text-muted mb-3 px-1">
                    Copy into your project — any language, any template engine
                  </p>
                  <CodeBlock tabs={selected.code} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
