"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const showcaseItems = [
  {
    name: "Ring Spinner",
    category: "Loaders",
    render: () => (
      <div className="relative w-12 h-12">
        <div
          className="absolute inset-0 rounded-full border-2 border-border border-t-accent"
          style={{ animation: "hs-spin 0.9s linear infinite" }}
        />
        <div
          className="absolute inset-2 rounded-full border-2 border-border border-b-accent/60"
          style={{ animation: "hs-spin 1.4s linear infinite reverse" }}
        />
      </div>
    ),
  },
  {
    name: "Dot Wave",
    category: "Loaders",
    render: () => (
      <div className="flex items-center gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-accent"
            style={{
              animation: "hs-dot-wave 1.6s ease-in-out infinite",
              animationDelay: `${i * 0.12}s`,
            }}
          />
        ))}
      </div>
    ),
  },
  {
    name: "Glitch Text",
    category: "Text Effects",
    render: () => (
      <span
        className="text-xl font-bold text-text-primary relative inline-block"
        style={{ animation: "hs-glitch 3s ease-in-out infinite" }}
      >
        NudaUI
      </span>
    ),
  },
  {
    name: "Gradient Spinner",
    category: "Loaders",
    render: () => (
      <div
        className="w-12 h-12 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, transparent, var(--color-accent))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
          animation: "hs-spin 0.9s linear infinite",
        }}
      />
    ),
  },
  {
    name: "Progress Bar",
    category: "Indicators",
    render: () => (
      <div className="w-32 h-1.5 rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full bg-accent"
          style={{
            animation: "hs-progress 2.5s ease-in-out infinite",
          }}
        />
      </div>
    ),
  },
  {
    name: "Typing",
    category: "Indicators",
    render: () => (
      <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-surface-light border border-border">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-text-muted"
            style={{
              animation: "hs-typing 1.4s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    ),
  },
  {
    name: "Morph Blob",
    category: "Loaders",
    render: () => (
      <div
        className="w-12 h-12 bg-accent/80"
        style={{ animation: "hs-morph 4s ease-in-out infinite" }}
      />
    ),
  },
  {
    name: "Skeleton",
    category: "Placeholders",
    render: () => (
      <div className="space-y-2 w-28">
        <div className="h-2 rounded-full bg-border" style={{ animation: "hs-shimmer 1.5s ease-in-out infinite" }} />
        <div className="h-2 rounded-full bg-border w-3/4" style={{ animation: "hs-shimmer 1.5s ease-in-out infinite", animationDelay: "0.15s" }} />
        <div className="h-2 rounded-full bg-border w-1/2" style={{ animation: "hs-shimmer 1.5s ease-in-out infinite", animationDelay: "0.3s" }} />
      </div>
    ),
  },
];

export function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothX = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]),
    { stiffness: 50, damping: 20 }
  );

  return (
    <section ref={containerRef} className="relative h-[150vh] sm:h-[200vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Label */}
        <div className="px-4 sm:px-6 mb-4 sm:mb-8 max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-3"
          >
            Gallery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight"
          >
            Scroll to explore.
          </motion.h2>
        </div>

        {/* Horizontal track */}
        <motion.div
          style={{ x: smoothX }}
          className="flex gap-3 sm:gap-4 pl-4 sm:pl-6 pr-[40vw]"
        >
          {showcaseItems.map((item, i) => (
            <div
              key={item.name}
              className="flex-shrink-0 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] rounded-2xl border border-border bg-surface-light/40 hover:bg-surface-light hover:border-border-light transition-all duration-300 flex flex-col items-center justify-center gap-3 sm:gap-4 relative group"
            >
              {item.render()}
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
                <p className="text-xs sm:text-sm font-medium text-text-primary">
                  {item.name}
                </p>
                <p className="text-[10px] font-mono text-text-muted mt-0.5">
                  {item.category}
                </p>
              </div>
              {/* Number */}
              <span className="absolute top-4 right-4 text-[10px] font-mono text-text-muted/40">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="px-6 mt-6 text-xs text-text-muted/40 font-mono"
        >
          ↓ keep scrolling
        </motion.p>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes hs-spin { to { transform: rotate(360deg); } }
        @keyframes hs-dot-wave { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes hs-glitch {
          0%, 90%, 100% { transform: none; text-shadow: none; }
          92% { transform: translate(-2px, 1px); text-shadow: 2px 0 #e4ff54, -2px 0 #ff5454; }
          94% { transform: translate(2px, -1px); text-shadow: -2px 0 #e4ff54, 2px 0 #54ff54; }
          96% { transform: translate(-1px, 2px); text-shadow: 1px 0 #e4ff54, -1px 0 #5454ff; }
        }
        @keyframes hs-progress { 0% { width: 0%; } 50% { width: 100%; } 100% { width: 0%; } }
        @keyframes hs-typing { 0%, 60%, 100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-6px); opacity: 1; } }
        @keyframes hs-morph {
          0%, 100% { border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%; }
          25% { border-radius: 76% 24% 65% 35% / 36% 27% 73% 64%; }
          50% { border-radius: 50%; }
          75% { border-radius: 35% 65% 24% 76% / 64% 73% 27% 36%; }
        }
        @keyframes hs-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `,
        }}
      />
    </section>
  );
}
