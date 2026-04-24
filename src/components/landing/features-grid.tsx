"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Feather,
  Sparkles,
  Accessibility,
  Code2,
  Scale,
  Infinity as InfinityIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

type Feature = {
  icon: LucideIcon;
  label: string;
  title: string;
  body: string;
};

const features: Feature[] = [
  {
    icon: Feather,
    label: "Weightless",
    title: "Typically under 1kb.",
    body: "Single-file snippets with no runtime. Drop them in and forget the bundle size conversation.",
  },
  {
    icon: InfinityIcon,
    label: "Portable",
    title: "Works everywhere HTML works.",
    body: "React, Vue, Svelte, Astro, Blade, Jinja, plain HTML. If it renders markup, it runs NudaUI.",
  },
  {
    icon: Accessibility,
    label: "Accessible",
    title: "Respects the user.",
    body: "Semantic HTML, ARIA attributes and prefers-reduced-motion shipped by default, not added later.",
  },
  {
    icon: Code2,
    label: "Readable",
    title: "Code you can actually debug.",
    body: "No transpiled blobs, no minified monsters. The source is the same code you paste.",
  },
  {
    icon: Scale,
    label: "Unopinionated",
    title: "Your design system, your rules.",
    body: "Tokens, not themes. Restyle anything with CSS variables — we don't ship a brand for you.",
  },
  {
    icon: Sparkles,
    label: "Crafted",
    title: "Easing curves, not defaults.",
    body: "Every animation is hand-tuned. No bouncing for the sake of bouncing. No motion for motion's sake.",
  },
];

export function FeaturesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      aria-labelledby="features-heading"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 -right-32 w-[min(500px,70vw)] h-[min(500px,70vw)] bg-accent/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-4">
            The kit
          </p>
          <h2
            id="features-heading"
            className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]"
          >
            Six principles.
            <br />
            <span className="text-text-muted">One tiny library.</span>
          </h2>
        </motion.div>

        {/* Grid — 2 → 3 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-light/50 border border-border-light/50 rounded-2xl overflow-hidden">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.15 + i * 0.07,
                  duration: 0.7,
                  ease,
                }}
                className="group relative bg-surface p-8 sm:p-10 transition-colors hover:bg-surface-light"
              >
                {/* Orbit dot on hover */}
                <span
                  aria-hidden
                  className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-accent/60 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ animation: "orbit 6s linear infinite" }}
                />

                {/* Icon tile */}
                <div className="relative inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border-light bg-surface-light mb-6 overflow-hidden">
                  <Icon
                    className="w-5 h-5 text-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]"
                    strokeWidth={1.75}
                  />
                  {/* Soft sweep on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-[900ms] bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                  />
                </div>

                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted mb-3">
                  {feature.label}
                </p>
                <h3 className="text-lg font-semibold leading-snug mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
