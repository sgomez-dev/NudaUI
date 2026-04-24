"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const codeLines = [
  { text: '<div class="nuda-loader"', color: "text-text-secondary" },
  { text: '  role="status"', color: "text-text-muted" },
  { text: '  aria-label="Loading">', color: "text-text-muted" },
  { text: "  <span></span>", color: "text-text-secondary" },
  { text: "  <span></span>", color: "text-text-secondary" },
  { text: "  <span></span>", color: "text-text-secondary" },
  { text: "</div>", color: "text-text-secondary" },
];

const cssLines = [
  { text: ".nuda-loader {", color: "text-text-secondary" },
  { text: "  --color: #e4ff54;", color: "text-accent/70" },
  { text: "  display: flex;", color: "text-text-muted" },
  { text: "  gap: 6px;", color: "text-text-muted" },
  { text: "}", color: "text-text-secondary" },
];

export function CodeReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  // Animation preview fades in and scales as you scroll
  const previewOpacity = useTransform(smoothProgress, [0.2, 0.45], [0, 1]);
  const previewScale = useTransform(smoothProgress, [0.2, 0.45], [0.8, 1]);

  // Code lines reveal progressively
  const codeOpacity = useTransform(smoothProgress, [0.1, 0.35], [0, 1]);
  const codeY = useTransform(smoothProgress, [0.1, 0.35], [40, 0]);

  return (
    <section ref={containerRef} className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section label — offset left */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-4"
        >
          How it works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-10 sm:mb-16 md:mb-20 max-w-xl"
        >
          The code appears.
          <br />
          <span className="text-accent">The animation follows.</span>
        </motion.h2>

        {/* Two-column: code left, preview right */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: code block */}
          <motion.div
            style={{ opacity: codeOpacity, y: codeY }}
            className="rounded-xl border border-border bg-surface-light overflow-hidden"
          >
            {/* Tab bar */}
            <div className="flex items-center gap-0 border-b border-border px-4">
              <span className="px-4 py-3 text-xs font-medium tracking-wide uppercase text-accent relative">
                HTML
                <span className="absolute bottom-0 left-4 right-4 h-px bg-accent" />
              </span>
              <span className="px-4 py-3 text-xs font-medium tracking-wide uppercase text-text-muted">
                CSS
              </span>
            </div>
            {/* Code */}
            <div className="p-3 sm:p-5 font-mono text-[11px] sm:text-[13px] leading-[1.8]">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease }}
                  className={line.color}
                >
                  {line.text}
                </motion.div>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                {cssLines.map((line, i) => (
                  <motion.div
                    key={`css-${i}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + i * 0.08,
                      duration: 0.4,
                      ease,
                    }}
                    className={line.color}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: animation materializes */}
          <motion.div
            style={{ opacity: previewOpacity, scale: previewScale }}
            className="flex items-center justify-center p-8 sm:p-12 md:p-16 rounded-xl border border-border bg-surface-light/40"
          >
            <div className="flex flex-col items-center gap-6">
              {/* The actual animation */}
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full bg-accent"
                    style={{
                      animation: "cr-pulse 1.4s ease-in-out infinite",
                      animationDelay: `${i * 0.16}s`,
                    }}
                  />
                ))}
              </div>
              {/* Arrow pointing to code */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-xs font-mono text-text-muted"
              >
                ← That&apos;s it. Just paste it.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes cr-pulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `,
        }}
      />
    </section>
  );
}
