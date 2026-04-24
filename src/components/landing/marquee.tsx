"use client";

import { motion } from "framer-motion";

const stacks = [
  "Laravel",
  "Django",
  "Rails",
  "Go",
  "Flask",
  "Express",
  "Spring",
  "Next.js",
  "Nuxt",
  "Astro",
  "Hugo",
  "Jekyll",
  "WordPress",
  "Vanilla HTML",
  "PHP",
  "Jinja",
  "Blade",
  "ERB",
  "Twig",
  "Handlebars",
];

export function Marquee() {
  const doubled = [...stacks, ...stacks];

  return (
    <section className="relative py-10 sm:py-16 border-y border-border overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-surface to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-surface to-transparent z-10" />

      <motion.div
        className="flex gap-4 sm:gap-8 w-max"
        animate={{ x: [0, "-50%"] }}
        transition={{
          x: {
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {doubled.map((stack, i) => (
          <span
            key={`${stack}-${i}`}
            className="flex-shrink-0 text-xs sm:text-sm font-mono text-text-muted/60 whitespace-nowrap tracking-wide"
          >
            {stack}
            <span className="ml-8 text-border">·</span>
          </span>
        ))}
      </motion.div>

      {/* Label */}
      <p className="absolute top-3 left-4 sm:top-4 sm:left-6 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-text-muted/40">
        Works with everything
      </p>
    </section>
  );
}
