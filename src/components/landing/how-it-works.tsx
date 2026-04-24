"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    n: "01",
    label: "Browse",
    title: "Find the animation you actually need.",
    body: "A curated gallery — not 400 variations of the same spinner. Preview, tweak speed, compare side by side.",
    code: "→ nudaui.dev/components",
  },
  {
    n: "02",
    label: "Copy",
    title: "Grab the snippet. That's the whole install.",
    body: "One file, zero imports, one click. What you copy is what you ship. No hidden peer deps, no build configuration.",
    code: "⌘  Copy to clipboard",
  },
  {
    n: "03",
    label: "Paste",
    title: "Paste into any stack that renders HTML.",
    body: "Next, Nuxt, Laravel, Django, a <script> tag on a static page — it doesn't matter. It works on the first try.",
    code: "<div class=\"nuda-pulse\" />",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Scroll-driven progress for the connecting line
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.6"],
  });
  const lineScale = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    { stiffness: 80, damping: 22 }
  );

  return (
    <section
      ref={ref}
      aria-labelledby="how-it-works-heading"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 -left-32 w-[min(500px,70vw)] h-[min(500px,70vw)] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="grid lg:grid-cols-[1fr_1.4fr] gap-6 sm:gap-10 items-end mb-12 sm:mb-16 md:mb-20"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-4">
              The flow
            </p>
            <h2
              id="how-it-works-heading"
              className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]"
            >
              Three steps.
              <br />
              <span className="text-text-muted">No install wizard.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg">
            Most UI libraries ask you to read docs, run migrations, and learn
            a new dialect. We ask you to copy something.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-10 sm:pl-16 md:pl-20">
          {/* Rail — static track */}
          <div
            aria-hidden
            className="absolute left-4 sm:left-6 md:left-8 top-2 bottom-2 w-px bg-border"
          />
          {/* Rail — animated progress */}
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute left-4 sm:left-6 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/60 to-transparent"
          />

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.18, duration: 0.7, ease }}
                className="relative"
              >
                {/* Node dot */}
                <span
                  aria-hidden
                  className="absolute -left-10 sm:-left-16 md:-left-20 top-1 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
                >
                  <span className="absolute inset-0 rounded-full border border-border-light bg-surface" />
                  <span
                    className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-accent"
                    style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
                  />
                  <span className="absolute inset-0 rounded-full border border-accent/30 opacity-0 sm:opacity-100 scale-110" />
                </span>

                {/* Content */}
                <div className="grid md:grid-cols-[auto_1fr] gap-4 sm:gap-8 items-start">
                  <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-1 min-w-[5rem]">
                    <span className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.04em] leading-none text-accent tabular-nums">
                      {step.n}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted">
                      {step.label}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold leading-snug tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl mb-5">
                      {step.body}
                    </p>

                    {/* Inline mini code pill */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border bg-surface-light">
                      <span className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-border-light" />
                        <span className="w-1.5 h-1.5 rounded-full bg-border-light" />
                        <span className="w-1.5 h-1.5 rounded-full bg-border-light" />
                      </span>
                      <code className="text-[12px] text-text-secondary">
                        {step.code}
                      </code>
                      <span
                        aria-hidden
                        className="inline-block w-[7px] h-3 bg-accent/80 translate-y-[1px]"
                        style={{ animation: "blink-caret 1.1s steps(2) infinite" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
