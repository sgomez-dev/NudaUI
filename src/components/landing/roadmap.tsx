"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type Status = "shipped" | "in-progress" | "planned";

const milestones: {
  quarter: string;
  date: string;
  title: string;
  body: string;
  status: Status;
  count: string;
}[] = [
  {
    quarter: "01",
    date: "Foundation",
    title: "The core kit.",
    body:
      "Loaders, spinners, text effects, buttons, cards, indicators, tooltips, micro-interactions — the building blocks every UI needs. a11y baseline and reduced-motion enforced from day one.",
    status: "shipped",
    count: "157",
  },
  {
    quarter: "02",
    date: "Data & visuals",
    title: "Charts and atmosphere.",
    body:
      "Charts, sparklines, gauges, KPI cards, particle systems (confetti, fireflies, snow, rain), image effects (Ken Burns, glitch, mask reveal), counters, empty states.",
    status: "shipped",
    count: "56",
  },
  {
    quarter: "03",
    date: "Power-user UX",
    title: "AI, drag, and Cmd-K.",
    body:
      "AI / chat UI primitives (streaming dots, prompt composer, citations), drag & drop with native events, command palette with kbd hints, theme toggles.",
    status: "shipped",
    count: "40",
  },
  {
    quarter: "04",
    date: "Marketing & flows",
    title: "Hero to onboarding.",
    body:
      "Hero sections, pricing tables with billing toggles, video player UI, onboarding spotlights and checklists, code & terminal snippets — the full landing-page surface area.",
    status: "shipped",
    count: "50",
  },
  {
    quarter: "Next",
    date: "Looking ahead",
    title: "A CLI and theme tokens.",
    body:
      "A small CLI to copy components into your repo (still no runtime), and a tokens.css system so a single CSS variables override can rebrand the whole catalog.",
    status: "planned",
    count: "—",
  },
];

export function Roadmap() {
  const outerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(outerRef, { once: true, margin: "-80px" });

  // Scroll-hijack: track the tall outer, animate horizontal translate inside
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  // Translate the whole track: from 0 → -( tracks width - viewport )
  // Track contains 5 cards side-by-side, each roughly 82vw incl gap, plus
  // intro card, so we move a little more than 5x. We use a CSS calc to
  // make it adapt to viewport width.
  const trackX = useTransform(smoothProgress, [0, 1], ["0vw", "-420vw"]);

  // Progress bar at top
  const progressScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={outerRef}
      aria-labelledby="roadmap-heading"
      className="relative"
      style={{ height: "420vh" }} // tall outer for hijack; tune for feel
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden bg-surface">
        {/* Top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

        {/* Scroll progress bar */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-accent origin-left z-20"
          style={{ scaleX: progressScale, width: "100%" }}
        />

        {/* Ambient parallax orbs */}
        <ParallaxOrb
          progress={smoothProgress}
          range={[0, 1]}
          from="-10%"
          to="40%"
          className="top-[20%] left-[10%] w-[300px] h-[300px] bg-accent/[0.05]"
        />
        <ParallaxOrb
          progress={smoothProgress}
          range={[0, 1]}
          from="20%"
          to="-30%"
          className="bottom-[10%] right-[10%] w-[420px] h-[420px] bg-accent/[0.04]"
        />

        {/* Header */}
        <div className="relative pt-16 sm:pt-24 px-4 sm:px-6 z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-16 items-end"
            >
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-4">
                  Roadmap
                </p>
                <h2
                  id="roadmap-heading"
                  className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]"
                >
                  Where
                  <br />
                  <span className="text-text-muted">we&apos;re going.</span>
                </h2>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-lg">
                Scroll to travel through the quarters. No wizards, no pricing
                tiers — just a tiny library growing on purpose.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Horizontal track */}
        <div className="relative flex-1 overflow-hidden">
          <motion.div
            style={{ x: trackX }}
            className="absolute top-1/2 -translate-y-1/2 flex items-stretch gap-6 sm:gap-8 pl-4 sm:pl-8 md:pl-16"
          >
            {/* Intro panel — instructions */}
            <div className="shrink-0 w-[70vw] sm:w-[56vw] md:w-[40vw] lg:w-[28vw] flex flex-col justify-center pr-6">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted mb-3">
                Scroll →
              </div>
              <p className="text-xl sm:text-2xl font-semibold leading-snug tracking-tight text-text-primary">
                Five quarters, five checkpoints.
              </p>
              <p className="mt-3 text-sm text-text-secondary">
                Keep scrolling to move the timeline sideways. Shipped items
                glow; in-flight work pulses.
              </p>
            </div>

            {/* SVG connector — draws with scroll progress */}
            <SvgConnector progress={smoothProgress} />

            {/* Milestone cards */}
            {milestones.map((m, i) => (
              <MilestoneCard
                key={m.quarter}
                m={m}
                i={i}
                total={milestones.length}
                progress={smoothProgress}
              />
            ))}

            {/* End cap */}
            <div className="shrink-0 w-[50vw] flex items-center justify-start pl-4">
              <div className="text-xs font-mono text-text-muted">
                end of timeline · keep building →
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom keyboard hint */}
        <div className="relative px-4 sm:px-6 pb-6 sm:pb-10 z-10">
          <div className="max-w-6xl mx-auto flex items-center justify-between text-[11px] font-mono text-text-muted">
            <span className="flex items-center gap-2">
              <KeyCap>scroll</KeyCap>
              or
              <KeyCap>↓</KeyCap>
              to advance
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent"
                style={{ animation: "glow-pulse 2.4s ease-in-out infinite" }}
              />
              live
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────

function ParallaxOrb({
  progress,
  range,
  from,
  to,
  className,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  from: string;
  to: string;
  className?: string;
}) {
  const x = useTransform(progress, range, [from, to]);
  return (
    <motion.div
      aria-hidden
      style={{ x }}
      className={`pointer-events-none absolute rounded-full blur-[120px] ${className ?? ""}`}
    />
  );
}

function SvgConnector({ progress }: { progress: MotionValue<number> }) {
  // Visual-only connector that sits behind cards; we render a wavy path
  // whose pathLength is driven by scroll progress.
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-0 w-[500vw] h-full"
      preserveAspectRatio="none"
      viewBox="0 0 5000 400"
    >
      <motion.path
        d="M 0 200 C 400 140, 800 260, 1200 200 S 2000 140, 2400 200 S 3200 260, 3600 200 S 4400 140, 5000 200"
        fill="none"
        stroke="var(--color-accent)"
        strokeOpacity="0.25"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        style={{ pathLength: progress }}
      />
    </svg>
  );
}

function MilestoneCard({
  m,
  i,
  total,
  progress,
}: {
  m: (typeof milestones)[number];
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Each card "activates" when the scroll progress reaches its slot.
  const start = (i / (total + 1)) * 0.9 + 0.05;
  const end = start + 0.1;
  const cardOpacity = useTransform(progress, [start - 0.05, start], [0.45, 1]);
  const cardY = useTransform(progress, [start - 0.05, start], [24, 0]);
  const cardScale = useTransform(progress, [start - 0.05, start, end], [0.95, 1, 1]);

  const isShipped = m.status === "shipped";
  const isActive = m.status === "in-progress";

  return (
    <motion.article
      style={{ opacity: cardOpacity, y: cardY, scale: cardScale }}
      className="shrink-0 w-[78vw] sm:w-[60vw] md:w-[44vw] lg:w-[30vw] max-w-[480px] relative"
    >
      {/* Gradient border wrapper */}
      <div className="relative p-[1px] rounded-2xl overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-80"
          style={{
            background: isActive
              ? "conic-gradient(from 0deg, var(--color-accent), transparent 40%, var(--color-accent) 80%, transparent 100%)"
              : "linear-gradient(135deg, var(--color-border-light), transparent 60%)",
            animation: isActive ? "conic-spin 6s linear infinite" : undefined,
          }}
        />

        <div className="relative rounded-[15px] bg-surface-light p-7 sm:p-9">
          {/* Top row: quarter + status */}
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted">
                {m.date}
              </div>
              <div className="text-[clamp(2.25rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-none text-accent tabular-nums mt-1">
                {m.quarter}
              </div>
            </div>

            <StatusChip status={m.status} />
          </div>

          {/* Title + body */}
          <h3 className="text-xl sm:text-2xl font-semibold leading-snug tracking-tight mb-3">
            {m.title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed max-w-[42ch] mb-6">
            {m.body}
          </p>

          {/* Footer: count + milestone dot */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-[11px] font-mono text-text-muted uppercase tracking-[0.18em]">
              components
            </span>
            <span className="text-xl font-bold tabular-nums text-text-primary">
              {m.count}
            </span>
          </div>

          {/* Milestone dot — pulses if active, solid if shipped, dim if planned */}
          <span
            aria-hidden
            className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5"
          >
            <span
              className={`absolute inset-0 rounded-full ${
                isShipped
                  ? "bg-accent"
                  : isActive
                  ? "bg-accent"
                  : "bg-border-light"
              }`}
            />
            {isActive && (
              <span
                className="absolute inset-0 rounded-full bg-accent/60"
                style={{ animation: "ring-pulse 2.2s ease-out infinite" }}
              />
            )}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function StatusChip({ status }: { status: Status }) {
  const map: Record<
    Status,
    { label: string; dot: string; text: string; bg: string }
  > = {
    shipped: {
      label: "Shipped",
      dot: "bg-accent",
      text: "text-accent",
      bg: "bg-accent/10 border-accent/30",
    },
    "in-progress": {
      label: "In flight",
      dot: "bg-accent",
      text: "text-accent",
      bg: "bg-accent/10 border-accent/30",
    },
    planned: {
      label: "Planned",
      dot: "bg-text-muted",
      text: "text-text-secondary",
      bg: "bg-surface border-border-light",
    },
  };
  const s = map[status];
  const pulse = status === "in-progress";

  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-[10px] font-mono uppercase tracking-[0.15em] ${s.bg} ${s.text}`}
    >
      <span className={`relative inline-flex w-1.5 h-1.5 rounded-full ${s.dot}`}>
        {pulse && (
          <span
            className="absolute inset-0 rounded-full bg-accent"
            style={{ animation: "ring-pulse 2.2s ease-out infinite" }}
          />
        )}
      </span>
      {s.label}
    </span>
  );
}

function KeyCap({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center min-w-[1.6rem] px-1.5 py-0.5 border border-border-light rounded bg-surface-light text-text-primary">
      {children}
    </span>
  );
}
