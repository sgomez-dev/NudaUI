"use client";

import { useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, RotateCw, Sparkles } from "lucide-react";
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

type Status = "idle" | "loading" | "success" | "error";

/* Dogfooding: the loading indicator is a real NudaUI loader pulled straight
   from the registry, so the search page runs on the same components it serves. */
const LOADER_ID = "pulse-dots";

/* Example prompts to prime an empty search — click fills + fires a query. */
const EXAMPLES = [
  "loader with dots",
  "glowing neon button",
  "animated gradient background",
  "credit card checkout form",
  "confetti celebration",
];

export function SemanticSearch({ className }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [results, setResults] = useState<RagResult[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const inputId = useId();
  const hintId = useId();

  const trimmed = query.trim();
  const canSearch = trimmed.length >= MIN_QUERY_LENGTH && status !== "loading";

  async function runSearch(raw: string) {
    const q = raw.trim();
    if (q.length < MIN_QUERY_LENGTH) return;

    // Cancel any in-flight request so a slow cold-start can't overwrite a
    // newer query's results.
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setSubmittedQuery(q);
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await searchComponents(q, DEFAULT_K, controller.signal);
      if (controller.signal.aborted) return;
      setResults(res.results);
      setStatus("success");
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      setErrorMsg(
        err instanceof RagError
          ? err.message
          : "Something went wrong. Please try again."
      );
      setStatus("error");
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

  // Message announced to screen readers for the current state.
  const liveMessage =
    status === "loading"
      ? "Searching for matching components…"
      : status === "success"
        ? results.length > 0
          ? `${results.length} component${results.length === 1 ? "" : "s"} found for “${submittedQuery}”.`
          : `No components found for “${submittedQuery}”.`
        : status === "error"
          ? `Search failed. ${errorMsg}`
          : "";

  const loaderPreview = findComponent(LOADER_ID)?.component.preview;

  return (
    <div className={cn("relative", className)}>
      {/* All registry CSS hoisted once — class names are `nuda-*` prefixed, so
          a single global block safely powers every preview (and the loader). */}
      <style dangerouslySetInnerHTML={{ __html: allInlineCss }} />

      {/* Ambient glow, matching the landing hero. */}
      <div className="absolute -top-32 left-1/4 w-[min(500px,70vw)] h-[min(500px,70vw)] bg-accent/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        {/* ── Intro ── */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-accent bg-accent/8 border border-accent/15 mb-5"
          >
            <Sparkles className="w-3 h-3" />
            Semantic search
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6, ease }}
            className="text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-[-0.03em] leading-[1.05]"
          >
            Describe it. <span className="text-accent">Find it.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5, ease }}
            className="mt-3 text-text-secondary max-w-lg mx-auto"
          >
            Describe the component you need in plain English — we&apos;ll surface
            the closest matches from the library.
          </motion.p>
        </div>

        {/* ── Chat-style input (CTA) ── */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6, ease }}
          onSubmit={onSubmit}
          className="relative"
        >
          <label htmlFor={inputId} className="sr-only">
            Describe the component you are looking for
          </label>
          <div className="group flex items-center gap-2 p-2 pl-4 sm:pl-5 rounded-2xl border border-border bg-surface-light/70 backdrop-blur-sm shadow-2xl shadow-black/20 focus-within:border-accent/40 transition-colors">
            <input
              ref={inputRef}
              id={inputId}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. a loader with bouncing dots…"
              aria-describedby={hintId}
              autoComplete="off"
              className="flex-1 min-w-0 bg-transparent text-sm sm:text-base text-text-primary placeholder:text-text-muted focus:outline-none py-2"
            />
            <button
              type="submit"
              disabled={!canSearch}
              aria-label="Search"
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 transition-all",
                canSearch
                  ? "bg-accent text-surface hover:bg-accent-dim"
                  : "bg-surface-hover text-text-muted cursor-not-allowed"
              )}
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
          <p
            id={hintId}
            className="mt-2 px-1 text-[11px] text-text-muted font-mono"
          >
            {trimmed.length > 0 && trimmed.length < MIN_QUERY_LENGTH
              ? `Type at least ${MIN_QUERY_LENGTH} characters, then press Enter.`
              : "Press Enter to search — no query runs while you type."}
          </p>
        </motion.form>

        {/* ── Example chips (only before the first search) ── */}
        {status === "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-5 flex flex-wrap justify-center gap-2"
          >
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => onExample(ex)}
                className="px-3 py-1.5 text-xs rounded-full border border-border text-text-muted hover:text-text-primary hover:border-accent/30 hover:bg-surface-light transition-colors"
              >
                {ex}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* ── Screen-reader live region: announces result counts / state ── */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {liveMessage}
      </div>

      {/* ── Conversation area ── */}
      <div className="relative max-w-5xl mx-auto mt-10 sm:mt-14">
        <AnimatePresence mode="wait">
          {status !== "idle" && (
            <motion.div
              key={submittedQuery + status}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease }}
              className="space-y-5"
            >
              {/* User's query, as a chat bubble aligned right */}
              <div className="flex justify-end">
                <p className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-br-sm bg-accent/10 border border-accent/20 text-sm text-text-primary">
                  {submittedQuery}
                </p>
              </div>

              {/* Response, aligned left */}
              <div className="flex justify-start">
                <div className="w-full max-w-full px-4 py-3 rounded-2xl rounded-bl-sm bg-surface-light/50 border border-border">
                  {status === "loading" && (
                    <div className="flex items-center gap-3 py-2">
                      <span className="flex items-center scale-90">
                        {loaderPreview}
                      </span>
                      <span className="text-sm text-text-secondary">
                        Searching the library…{" "}
                        <span className="text-text-muted">
                          the first search can take a few seconds to warm up.
                        </span>
                      </span>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="py-2">
                      <p className="text-sm text-text-secondary">{errorMsg}</p>
                      <button
                        type="button"
                        onClick={() => runSearch(submittedQuery)}
                        className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-surface-hover text-text-primary hover:bg-surface-light border border-border transition-colors"
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                        Try again
                      </button>
                    </div>
                  )}

                  {status === "success" && results.length === 0 && (
                    <p className="text-sm text-text-secondary py-2">
                      No matching components found. Try describing it
                      differently — mention the shape, motion, or use case.
                    </p>
                  )}

                  {status === "success" && results.length > 0 && (
                    <div>
                      <p className="text-sm text-text-secondary mb-4">
                        Found{" "}
                        <span className="text-text-primary font-medium">
                          {results.length}
                        </span>{" "}
                        matching component{results.length === 1 ? "" : "s"}:
                      </p>
                      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
                        {results.map((r) => (
                          <SearchResultCard key={r.id} result={r} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
