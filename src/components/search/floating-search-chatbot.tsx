"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, RotateCw, Sparkles, X, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { allInlineCss } from "@/components/showcase/registry/categories";
import { findComponent } from "@/lib/component-payload";
import {
  searchComponents,
  MIN_QUERY_LENGTH,
  DEFAULT_K,
  RagError,
  type RagResult,
} from "@/lib/rag";
import { SearchResultCard } from "./search-result-card";

const ease = [0.16, 1, 0.3, 1] as const;

type TurnStatus = "loading" | "success" | "error";

/**
 * One exchange in the conversation: the user's query plus the assistant's
 * response (loading / matched components / error). The chatbot keeps a list
 * of these so it reads like a real chat thread rather than a single search.
 */
interface Turn {
  id: number;
  query: string;
  status: TurnStatus;
  results: RagResult[];
  errorMsg: string;
}

/* Dogfooding: the loading indicator is a real NudaUI loader pulled straight
   from the registry, so the chatbot runs on the same components it serves. */
const LOADER_ID = "pulse-dots";

/* Example prompts to prime an empty conversation — click fills + fires. */
const EXAMPLES = [
  "loader with dots",
  "glowing neon button",
  "gradient background",
  "confetti celebration",
];

export function FloatingSearchChatbot() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const turnSeq = useRef(0);

  const trimmed = query.trim();
  const busy = turns.some((t) => t.status === "loading");
  const canSearch = trimmed.length >= MIN_QUERY_LENGTH && !busy;

  // Focus the input when the panel opens.
  useEffect(() => {
    if (open) {
      const id = window.setTimeout(() => inputRef.current?.focus(), 250);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Keep the thread scrolled to the newest turn.
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [turns]);

  // Cancel any in-flight request when the component unmounts.
  useEffect(() => () => abortRef.current?.abort(), []);

  function patchTurn(id: number, patch: Partial<Turn>) {
    setTurns((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...patch } : t))
    );
  }

  async function runSearch(raw: string) {
    const q = raw.trim();
    if (q.length < MIN_QUERY_LENGTH || busy) return;

    // Cancel any in-flight request so a slow cold-start can't overwrite a
    // newer query's results.
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const id = ++turnSeq.current;
    setTurns((prev) => [
      ...prev,
      { id, query: q, status: "loading", results: [], errorMsg: "" },
    ]);
    setQuery("");

    try {
      const res = await searchComponents(q, DEFAULT_K, controller.signal);
      if (controller.signal.aborted) return;
      patchTurn(id, { status: "success", results: res.results });
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      patchTurn(id, {
        status: "error",
        errorMsg:
          err instanceof RagError
            ? err.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSearch) return;
    runSearch(query);
  }

  function onExample(example: string) {
    setQuery(example);
    inputRef.current?.focus();
    runSearch(example);
  }

  const loaderPreview = findComponent(LOADER_ID)?.component.preview;

  return (
    <>
      {/* All registry CSS hoisted once — class names are `nuda-*` prefixed, so
          a single global block safely powers every preview (and the loader). */}
      <style dangerouslySetInnerHTML={{ __html: allInlineCss }} />

      {/* ── Floating trigger ── */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease }}
        aria-label={open ? "Close component search" : "Search components"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center w-14 h-14 rounded-2xl bg-accent text-surface shadow-2xl shadow-accent-glow hover:bg-accent-dim transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── Chat panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            role="dialog"
            aria-label="Component search"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease }}
            className="fixed z-40 flex flex-col overflow-hidden bg-surface-light/95 backdrop-blur-xl border border-border shadow-2xl shadow-black/40 inset-x-3 bottom-24 top-20 rounded-2xl sm:inset-x-auto sm:top-auto sm:bottom-24 sm:right-6 sm:w-[400px] sm:h-[min(600px,75vh)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border flex-shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-text-primary leading-tight">
                    Semantic search
                  </p>
                  <p className="text-[11px] text-text-muted font-mono truncate">
                    Describe it. Find it.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex items-center justify-center w-8 h-8 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-hover transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
            >
              {turns.length === 0 && (
                <div className="flex flex-col items-center text-center py-6">
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent mb-4">
                    <MessageSquare className="w-6 h-6" />
                  </span>
                  <p className="text-sm text-text-secondary max-w-[16rem]">
                    Describe the component you need in plain English — I&apos;ll
                    surface the closest matches from the library.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {EXAMPLES.map((ex) => (
                      <button
                        key={ex}
                        type="button"
                        onClick={() => onExample(ex)}
                        className="px-3 py-1.5 text-xs rounded-full border border-border text-text-muted hover:text-text-primary hover:border-accent/30 hover:bg-surface-hover transition-colors"
                      >
                        {ex}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {turns.map((turn) => (
                <div key={turn.id} className="space-y-3">
                  {/* User query, aligned right */}
                  <div className="flex justify-end">
                    <p className="max-w-[85%] px-3.5 py-2 rounded-2xl rounded-br-sm bg-accent/10 border border-accent/20 text-sm text-text-primary break-words">
                      {turn.query}
                    </p>
                  </div>

                  {/* Response, aligned left */}
                  <div className="flex justify-start">
                    <div className="w-full px-3.5 py-3 rounded-2xl rounded-bl-sm bg-surface/60 border border-border">
                      {turn.status === "loading" && (
                        <div className="flex items-center gap-3 py-1">
                          <span className="flex items-center scale-90">
                            {loaderPreview}
                          </span>
                          <span className="text-xs text-text-secondary">
                            Searching the library…
                          </span>
                        </div>
                      )}

                      {turn.status === "error" && (
                        <div>
                          <p className="text-sm text-text-secondary">
                            {turn.errorMsg}
                          </p>
                          <button
                            type="button"
                            onClick={() => runSearch(turn.query)}
                            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-surface-hover text-text-primary hover:bg-surface-light border border-border transition-colors"
                          >
                            <RotateCw className="w-3.5 h-3.5" />
                            Try again
                          </button>
                        </div>
                      )}

                      {turn.status === "success" &&
                        turn.results.length === 0 && (
                          <p className="text-sm text-text-secondary">
                            No matching components found. Try describing it
                            differently — mention the shape, motion, or use
                            case.
                          </p>
                        )}

                      {turn.status === "success" &&
                        turn.results.length > 0 && (
                          <div>
                            <p className="text-xs text-text-secondary mb-3">
                              Found{" "}
                              <span className="text-text-primary font-medium">
                                {turn.results.length}
                              </span>{" "}
                              matching component
                              {turn.results.length === 1 ? "" : "s"}:
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              {turn.results.map((r) => (
                                <SearchResultCard key={r.id} result={r} />
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Screen-reader live region */}
            <div
              className="sr-only"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {(() => {
                const last = turns[turns.length - 1];
                if (!last) return "";
                if (last.status === "loading")
                  return "Searching for matching components…";
                if (last.status === "error")
                  return `Search failed. ${last.errorMsg}`;
                return last.results.length > 0
                  ? `${last.results.length} component${last.results.length === 1 ? "" : "s"} found for “${last.query}”.`
                  : `No components found for “${last.query}”.`;
              })()}
            </div>

            {/* Input */}
            <form
              onSubmit={onSubmit}
              className="flex-shrink-0 p-3 border-t border-border"
            >
              <div className="flex items-center gap-2 p-1.5 pl-3.5 rounded-xl border border-border bg-surface/60 focus-within:border-accent/40 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Describe a component…"
                  autoComplete="off"
                  className="flex-1 min-w-0 bg-transparent text-sm text-text-primary placeholder:text-text-muted focus:outline-none py-1.5"
                />
                <button
                  type="submit"
                  disabled={!canSearch}
                  aria-label="Search"
                  className={cn(
                    "flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 transition-all",
                    canSearch
                      ? "bg-accent text-surface hover:bg-accent-dim"
                      : "bg-surface-hover text-text-muted cursor-not-allowed"
                  )}
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
