"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  {
    number: "0",
    unit: "dependencies",
    detail: "No npm install. No node_modules. Just code.",
  },
  {
    number: "0",
    unit: "build steps",
    detail: "No webpack. No vite config. Copy, paste, done.",
  },
  {
    number: "3s",
    unit: "to integrate",
    detail: "From our gallery to your production app.",
  },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Asymmetric layout: text left, stats right-ish */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left: editorial statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-4">
              The numbers
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              We removed everything
              <br />
              <span className="text-text-muted">that wasn&apos;t the animation.</span>
            </h2>
          </motion.div>

          {/* Right: big numbers */}
          <div className="space-y-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.unit}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease }}
                className="flex items-baseline gap-4 sm:gap-6 py-6 sm:py-8 border-b border-border last:border-0"
              >
                <span className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-[-0.05em] leading-none text-accent tabular-nums">
                  {stat.number}
                </span>
                <div>
                  <p className="text-lg font-semibold text-text-primary">
                    {stat.unit}
                  </p>
                  <p className="text-sm text-text-muted mt-1">{stat.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
