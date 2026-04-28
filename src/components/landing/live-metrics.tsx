"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

// ─────────────────────────────────────────────────────────
// Animated counter: springs from 0 → target when in view
// ─────────────────────────────────────────────────────────
function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  active,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const controls = animate(0, value, {
      duration,
      ease,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [active, value, duration]);

  return (
    <span className="tabular-nums">
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// ─────────────────────────────────────────────────────────
// Circular progress ring — strokeDashoffset tween
// ─────────────────────────────────────────────────────────
function Ring({
  percent,
  active,
  label,
}: {
  percent: number;
  active: boolean;
  label: string;
}) {
  const r = 34;
  const circumference = 2 * Math.PI * r;
  const dashoffset = useMotionValue(circumference);
  const smoothOffset = useSpring(dashoffset, { stiffness: 60, damping: 22 });

  useEffect(() => {
    if (active) dashoffset.set(circumference * (1 - percent / 100));
  }, [active, percent, circumference, dashoffset]);

  return (
    <div className="relative w-[90px] h-[90px]">
      <svg
        viewBox="0 0 80 80"
        className="-rotate-90 w-full h-full"
        aria-hidden
      >
        <circle
          cx="40"
          cy="40"
          r={r}
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          className="text-border"
        />
        <motion.circle
          cx="40"
          cy="40"
          r={r}
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          className="text-accent"
          strokeDasharray={circumference}
          style={{ strokeDashoffset: smoothOffset }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm font-bold tabular-nums">
          <Counter value={percent} suffix="%" active={active} duration={1.6} />
        </span>
        <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-text-muted mt-0.5">
          {label}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Sparkline — path length reveal
// ─────────────────────────────────────────────────────────
function Sparkline({ active }: { active: boolean }) {
  const points = [8, 14, 11, 20, 17, 26, 22, 34, 30, 42, 38, 52, 48, 60];
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * 100;
      const y = 40 - (p / 60) * 32;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 44" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={`${d} L100,40 L0,40 Z`}
        fill="url(#sparkFill)"
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      />
      <motion.path
        d={d}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={active ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.8, ease }}
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────
// Bar race — horizontal bars that fill on reveal
// ─────────────────────────────────────────────────────────
function BarRace({ active }: { active: boolean }) {
  // Every framework is fully supported because the snippets are plain HTML +
  // CSS — there's nothing framework-specific in the output. Bars all fill 100%.
  const bars = [
    { label: "React" },
    { label: "Vue" },
    { label: "Svelte" },
    { label: "Astro" },
    { label: "Plain HTML" },
  ];
  return (
    <div className="space-y-3">
      {bars.map((b, i) => (
        <div key={b.label} className="flex items-center gap-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-text-muted w-20 shrink-0">
            {b.label}
          </span>
          <div className="relative flex-1 h-1.5 bg-border rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={active ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 0.2 + i * 0.12, duration: 1.2, ease }}
              className="absolute inset-y-0 left-0 bg-accent rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-dim) 100%)",
              }}
            />
          </div>
          <span className="text-[11px] font-mono tabular-nums text-accent w-10 text-right">
            ✓
          </span>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Fluid gauge — animated SVG wave inside a circle
// ─────────────────────────────────────────────────────────
function FluidGauge({ active }: { active: boolean }) {
  return (
    <div className="relative w-[88px] h-[88px] rounded-full border border-border-light overflow-hidden bg-surface-light">
      {/* Wave layer 1 */}
      <div
        className="absolute inset-x-[-50%] bottom-0 h-[38%]"
        style={{
          background:
            "linear-gradient(180deg, var(--color-accent) 0%, rgba(228,255,84,0.5) 100%)",
          animation: active
            ? "wave-fluid 5s ease-in-out infinite"
            : undefined,
          borderTopLeftRadius: "44%",
          borderTopRightRadius: "44%",
        }}
      />
      {/* Wave layer 2 (offset) */}
      <div
        className="absolute inset-x-[-50%] bottom-0 h-[34%] opacity-60"
        style={{
          background:
            "linear-gradient(180deg, var(--color-accent-dim) 0%, transparent 100%)",
          animation: active
            ? "wave-fluid 7s ease-in-out infinite reverse"
            : undefined,
          borderTopLeftRadius: "40%",
          borderTopRightRadius: "40%",
        }}
      />
      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center mix-blend-difference">
        <span className="text-sm font-bold tabular-nums text-text-primary">
          0<span className="text-[11px]">kb</span>
        </span>
        <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-text-muted">
          runtime
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Live ticker — infinite scrolling status strip
// ─────────────────────────────────────────────────────────
function Ticker() {
  // Showcase the breadth of the catalog — categories, not made-up sizes.
  const items = [
    "loaders",
    "ai / chat",
    "command palette",
    "charts",
    "drag & drop",
    "hero sections",
    "pricing",
    "video player",
    "onboarding",
    "code & terminal",
    "particles",
    "form states",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border py-3">
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 text-[12px] font-mono text-text-secondary"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent"
              style={{ animation: "glow-pulse 2s ease-in-out infinite" }}
            />
            {item}
          </span>
        ))}
      </div>
      {/* Edge fade */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent pointer-events-none" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Section root
// ─────────────────────────────────────────────────────────
export function LiveMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  // Scroll-velocity reactive hero number
  const scrollY = useMotionValue(0);
  useEffect(() => {
    const onScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY]);
  const heroBlur = useTransform(scrollY, [0, 3000], [0, 0.4]);

  return (
    <section
      ref={ref}
      aria-labelledby="live-metrics-heading"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      {/* Aurora backdrop — conic gradient that slowly rotates */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
        <div
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, var(--color-accent), transparent 40%, var(--color-accent) 60%, transparent 100%)",
            animation: "aurora 18s linear infinite",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header with live dot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-end mb-10 sm:mb-14"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="relative inline-flex w-2 h-2">
                <span
                  className="absolute inset-0 rounded-full bg-accent"
                  style={{ animation: "ring-pulse 2.4s ease-out infinite" }}
                />
                <span className="relative inline-block w-2 h-2 rounded-full bg-accent" />
              </span>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
                What&apos;s shipped
              </p>
            </div>
            <h2
              id="live-metrics-heading"
              className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]"
            >
              The catalog,
              <br />
              <span className="text-text-muted">at a glance.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg">
            Real numbers from the repo. Every component ships with the same
            baseline: zero dependencies, semantic markup, and reduced-motion
            handling.
          </p>
        </motion.div>

        {/* Hero big-number with scroll-velocity blur */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease }}
          className="relative border-y border-border py-10 sm:py-14 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <motion.div style={{ filter: useTransform(heroBlur, (v) => `blur(${v}px)`) }}>
            <span className="block text-[clamp(4rem,14vw,10rem)] font-black tracking-[-0.06em] leading-[0.85] text-text-primary">
              <Counter value={303} active={isInView} duration={2.2} />
            </span>
            <span className="block mt-2 text-sm text-text-muted font-mono uppercase tracking-[0.2em]">
              Components shipped — across 40 categories
            </span>
          </motion.div>

          <div className="flex gap-4">
            <Ring percent={100} label="a11y" active={isInView} />
            <Ring percent={100} label="reduced-motion" active={isInView} />
            <FluidGauge active={isInView} />
          </div>
        </motion.div>

        {/* Grid — categories card + frameworks card */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {/* Categories card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7, ease }}
            className="relative border border-border rounded-2xl p-5 bg-surface-light overflow-hidden"
          >
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-text-muted">
                Categories
              </span>
              <span className="text-xs font-mono text-accent">∼7 / cat</span>
            </div>
            <div className="text-3xl font-black tracking-tight tabular-nums mb-2">
              <Counter value={40} active={isInView} duration={2.2} />
            </div>
            <div className="h-12 -mx-2">
              <Sparkline active={isInView} />
            </div>
          </motion.div>

          {/* Bar race card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7, ease }}
            className="md:col-span-2 border border-border rounded-2xl p-5 bg-surface-light"
          >
            <div className="flex items-baseline justify-between mb-5">
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-text-muted">
                Works with
              </span>
              <span className="text-xs font-mono text-text-muted">
                zero install · the snippets are plain HTML
              </span>
            </div>
            <BarRace active={isInView} />
          </motion.div>
        </div>

        {/* Bottom ticker */}
        <Ticker />
      </div>
    </section>
  );
}
