"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const points = [
  {
    title: "Framework lock-in is a tax on your time.",
    body: "Every animation library ties you to React, Vue, or whatever's trending. Switch frameworks? Rewrite everything. NudaUI animations are just HTML and CSS — they outlive your framework choices.",
  },
  {
    title: "200kb for a loading spinner is insane.",
    body: "Most animation libraries ship entire runtime engines. Our components are typically under 1kb each. No JavaScript runtime. No bundle size anxiety. Just CSS keyframes that browsers already know how to optimize.",
  },
  {
    title: "Backend developers deserve nice things too.",
    body: "If you write Go, PHP, Python, or Rust — you've been left out of the animation conversation. Server-rendered templates don't need React. Blade, Jinja, ERB can all use NudaUI with zero configuration.",
  },
  {
    title: "Accessible from day one, not as an afterthought.",
    body: "Every component ships with ARIA attributes, prefers-reduced-motion support, and semantic HTML. Accessibility isn't a feature — it's the baseline.",
  },
];

export function WhyNuda() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Header — editorial, opinionated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-10 sm:mb-16 md:mb-20"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-4">
            Manifesto
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl">
            We have opinions.
          </h2>
        </motion.div>

        {/* Points — editorial list, not a card grid */}
        <div className="space-y-0">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.7, ease }}
              className="grid md:grid-cols-[1fr_1.2fr] gap-3 sm:gap-6 md:gap-12 py-6 sm:py-8 md:py-10 border-b border-border last:border-0"
            >
              <h3 className="text-lg md:text-xl font-semibold leading-snug">
                {point.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
