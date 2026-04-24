"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/faqs";

const ease = [0.16, 1, 0.3, 1] as const;

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      aria-labelledby="faq-heading"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 sm:gap-14 lg:gap-20 items-start">
          {/* Left — sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-4">
              Frequently asked
            </p>
            <h2
              id="faq-heading"
              className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]"
            >
              Questions,
              <br />
              <span className="text-text-muted">honestly answered.</span>
            </h2>
            <p className="mt-6 text-sm sm:text-base text-text-secondary leading-relaxed max-w-sm">
              Still curious? The source is the docs — every component ships
              with inline comments explaining the why.
            </p>
          </motion.div>

          {/* Right — accordion list */}
          <div className="relative">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease }}
                  className="border-b border-border first:border-t"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group w-full flex items-center justify-between gap-6 py-5 sm:py-6 text-left"
                  >
                    <span className="text-base sm:text-lg font-semibold leading-snug tracking-tight pr-2 transition-colors group-hover:text-accent">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className="relative flex items-center justify-center w-9 h-9 rounded-full border border-border-light bg-surface-light shrink-0 transition-colors group-hover:border-accent/60"
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="inline-flex"
                      >
                        <Plus
                          className={`w-4 h-4 transition-colors ${
                            isOpen ? "text-accent" : "text-text-secondary"
                          }`}
                          strokeWidth={1.75}
                        />
                      </motion.span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-10 text-sm sm:text-base text-text-secondary leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
