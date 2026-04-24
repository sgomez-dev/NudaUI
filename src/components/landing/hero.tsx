"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

/* ── Word-masked reveal ── */
function MaskedReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: delay + i * 0.06,
              duration: 0.7,
              ease,
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ── Floating animation card (parallax) ── */
function FloatingCard({
  label,
  children,
  className,
  yRange,
  rotateRange,
  delay,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  yRange: [number, number];
  rotateRange: [number, number];
  delay: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], yRange), {
    stiffness: 60,
    damping: 20,
  });
  const rotate = useTransform(scrollYProgress, [0, 1], rotateRange);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, ease }}
      className={className}
    >
      <div className="relative p-5 rounded-xl border border-border bg-surface-light/60 backdrop-blur-sm flex flex-col items-center justify-center gap-3 min-w-[120px] min-h-[120px]">
        {children}
        <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Ambient glow — offset, not centered */}
      <div className="absolute -top-32 -left-32 w-[min(600px,80vw)] h-[min(600px,80vw)] bg-accent/[0.05] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[min(400px,60vw)] h-[min(400px,60vw)] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-20 grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-8 items-center min-h-screen">
        {/* ── Left: Editorial copy ── */}
        <div className="max-w-2xl">
          {/* Opinionated tagline — not a badge */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease }}
            className="text-sm font-mono text-text-muted mb-6 tracking-wide"
          >
            Your stack doesn&apos;t need another npm install.
          </motion.p>

          {/* Headline — left aligned, big, punchy */}
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
            <MaskedReveal text="Copy it." />
            <br />
            <MaskedReveal text="Paste it." delay={0.25} />
            <br />
            <span className="text-accent">
              <MaskedReveal text="Ship it." delay={0.5} />
            </span>
          </h1>

          {/* Sub — developer voice */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease }}
            className="mt-6 sm:mt-8 text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg"
          >
            We got tired of importing 200kb for a spinner.
            <br />
            NudaUI is a collection of{" "}
            <span className="text-text-primary font-medium">
              framework-agnostic
            </span>{" "}
            animations — pure HTML, CSS, and a sprinkle of vanilla JS. No
            build step. No config. Works with Laravel, Django, Rails, Go, or
            a plain <code className="text-accent/80 font-mono text-sm">.html</code> file.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4"
          >
            <MagneticButton>
              <Link
                href="/components"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-surface font-semibold text-sm rounded-xl hover:bg-accent-dim transition-colors"
              >
                Browse Components
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </MagneticButton>
            <a
              href="https://github.com/nudaui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Star on GitHub
            </a>
          </motion.div>
        </div>

        {/* ── Right: Floating animated elements (parallax) ── */}
        <div className="relative h-[500px] lg:h-[600px] hidden md:block">
          {/* Staggered cards at different depths */}
          <FloatingCard
            label="Pulse"
            className="absolute top-8 left-12"
            yRange={[40, -40]}
            rotateRange={[-2, 2]}
            delay={1.0}
          >
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-3 h-3 rounded-full bg-accent"
                  style={{
                    animation: "hero-pulse 1.4s ease-in-out infinite",
                    animationDelay: `${i * 0.16}s`,
                  }}
                />
              ))}
            </div>
          </FloatingCard>

          <FloatingCard
            label="Spinner"
            className="absolute top-32 right-4"
            yRange={[60, -30]}
            rotateRange={[3, -1]}
            delay={1.2}
          >
            <div
              className="w-9 h-9 rounded-full border-2 border-border border-t-accent"
              style={{ animation: "hero-spin 0.8s linear infinite" }}
            />
          </FloatingCard>

          <FloatingCard
            label="Wave"
            className="absolute top-[55%] left-0"
            yRange={[30, -50]}
            rotateRange={[-1, 3]}
            delay={1.4}
          >
            <div className="flex items-end gap-1 h-7">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="w-1.5 bg-accent rounded-full"
                  style={{
                    animation: "hero-wave 1.2s ease-in-out infinite",
                    animationDelay: `${i * 0.1}s`,
                    height: "50%",
                  }}
                />
              ))}
            </div>
          </FloatingCard>

          <FloatingCard
            label="Morph"
            className="absolute bottom-16 right-16"
            yRange={[50, -20]}
            rotateRange={[2, -2]}
            delay={1.6}
          >
            <div
              className="w-10 h-10 bg-accent/80"
              style={{ animation: "hero-morph 4s ease-in-out infinite" }}
            />
          </FloatingCard>

          <FloatingCard
            label="Skeleton"
            className="absolute top-[40%] left-[40%]"
            yRange={[20, -60]}
            rotateRange={[-3, 1]}
            delay={1.8}
          >
            <div className="space-y-2 w-20">
              <div
                className="h-2 rounded-full bg-border"
                style={{ animation: "hero-shimmer 2s ease-in-out infinite" }}
              />
              <div
                className="h-2 rounded-full bg-border w-3/4"
                style={{
                  animation: "hero-shimmer 2s ease-in-out infinite",
                  animationDelay: "0.3s",
                }}
              />
            </div>
          </FloatingCard>

          {/* Connecting lines (decorative) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]"
            viewBox="0 0 500 600"
          >
            <motion.line
              x1="80" y1="80" x2="380" y2="200"
              stroke="currentColor"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 2, duration: 1.5, ease }}
            />
            <motion.line
              x1="60" y1="340" x2="350" y2="450"
              stroke="currentColor"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 2.3, duration: 1.5, ease }}
            />
          </svg>
        </div>
      </div>

      {/* Keyframes for hero cards */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes hero-pulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
        @keyframes hero-spin { to { transform: rotate(360deg); } }
        @keyframes hero-wave {
          0%, 100% { height: 30%; }
          50% { height: 100%; }
        }
        @keyframes hero-morph {
          0%, 100% { border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%; }
          25% { border-radius: 76% 24% 65% 35% / 36% 27% 73% 64%; }
          50% { border-radius: 50%; }
          75% { border-radius: 35% 65% 24% 76% / 64% 73% 27% 36%; }
        }
        @keyframes hero-shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
      `,
        }}
      />
    </section>
  );
}
