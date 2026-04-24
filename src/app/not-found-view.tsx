"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ── Dev jokes that rotate ── */
const jokes = [
  "This page has zero dependencies. Including content.",
  "Looks like this div forgot to display: flex; itself into existence.",
  "Error 404: animation-name not found. Just like this page.",
  "We checked node_modules. It's not there either. (Nothing ever is.)",
  "This route is more agnostic than our components — it doesn't believe in anything.",
  "The CSS was perfect. The URL was not.",
  "Somebody set visibility: hidden; on this page and forgot to undo it.",
  "This page has position: absolute; — absolutely nowhere.",
  "We'd blame the framework, but we don't use one.",
  "The intern pushed to main again.",
  "git blame says this is your fault.",
  "z-index: -9999; — this page is behind everything.",
];

export function NotFoundView() {
  const [joke, setJoke] = useState("");
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
  }, []);

  // Random glitch every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* ── Background chaos ── */}
      {/* Floating broken elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orbiting spinner that's "lost" */}
        <div
          className="absolute top-[15%] left-[10%] w-8 h-8 rounded-full border-2 border-border border-t-accent opacity-30"
          style={{ animation: "nf-spin 2s linear infinite" }}
        />

        {/* Confused dots */}
        <div className="absolute top-[25%] right-[15%] flex gap-1.5 opacity-20">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-accent"
              style={{
                animation: "nf-confused 2s ease-in-out infinite",
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* Falling bars */}
        <div className="absolute bottom-[20%] left-[20%] flex items-end gap-1 opacity-15">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="w-1.5 bg-text-muted rounded-full"
              style={{
                animation: "nf-fall 3s ease-in infinite",
                animationDelay: `${i * 0.4}s`,
                height: "20px",
              }}
            />
          ))}
        </div>

        {/* Glitching skeleton lines */}
        <div className="absolute top-[60%] right-[10%] space-y-2 opacity-15">
          <div
            className="h-2 w-24 rounded-full bg-border"
            style={{ animation: "nf-shimmer-break 2s ease-in-out infinite" }}
          />
          <div
            className="h-2 w-16 rounded-full bg-border"
            style={{
              animation: "nf-shimmer-break 2s ease-in-out infinite",
              animationDelay: "0.3s",
            }}
          />
        </div>

        {/* Morphing blob that's broken */}
        <div
          className="absolute bottom-[30%] right-[30%] w-12 h-12 bg-accent/10"
          style={{ animation: "nf-broken-morph 5s ease-in-out infinite" }}
        />

        {/* A spinner going the wrong way */}
        <div
          className="absolute top-[40%] left-[8%] w-6 h-6 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent, var(--color-accent))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
            animation: "nf-spin 1.5s linear infinite reverse",
            opacity: 0.2,
          }}
        />

        {/* Pulsing rings */}
        <div className="absolute bottom-[15%] left-[45%]">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute w-6 h-6 rounded-full border border-accent/20"
              style={{
                animation: "nf-ring-expand 3s ease-out infinite",
                animationDelay: `${i * 1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Ambient glow ── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 text-center max-w-lg">
        {/* Glitchy 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="relative mb-6"
        >
          <h1
            className={`text-[clamp(8rem,20vw,14rem)] font-black leading-none tracking-[-0.06em] text-accent/90 select-none ${glitchActive ? "nf-glitch-active" : ""}`}
          >
            404
          </h1>
          {/* Glitch layers */}
          <span
            className="absolute inset-0 text-[clamp(8rem,20vw,14rem)] font-black leading-none tracking-[-0.06em] text-accent/40 select-none pointer-events-none"
            aria-hidden="true"
            style={{
              animation: "nf-glitch-1 4s ease-in-out infinite",
              clipPath: "inset(20% 0 60% 0)",
            }}
          >
            404
          </span>
          <span
            className="absolute inset-0 text-[clamp(8rem,20vw,14rem)] font-black leading-none tracking-[-0.06em] text-accent/30 select-none pointer-events-none"
            aria-hidden="true"
            style={{
              animation: "nf-glitch-2 4s ease-in-out infinite",
              clipPath: "inset(60% 0 10% 0)",
            }}
          >
            404
          </span>
        </motion.div>

        {/* Page not found text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease }}
          className="text-xl font-semibold text-text-primary mb-3"
        >
          Page not found
        </motion.p>

        {/* The joke */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease }}
          className="text-sm text-text-muted leading-relaxed mb-10 font-mono"
        >
          {joke}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-surface font-semibold text-sm rounded-xl hover:bg-accent-dim transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to home
          </Link>
          <Link
            href="/components"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary text-sm rounded-xl hover:bg-surface-hover hover:text-text-primary transition-all"
          >
            Browse components
          </Link>
        </motion.div>

        {/* Console-style hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 inline-block"
        >
          <div className="px-4 py-2.5 rounded-lg bg-surface-light/50 border border-border font-mono text-xs text-text-muted">
            <span className="text-accent/60">$</span> curl nudaui.dev
            <span className="inline-block w-1.5 h-3.5 bg-accent/60 ml-1 align-middle" style={{ animation: "nf-blink 1s step-end infinite" }} />
          </div>
        </motion.div>
      </div>

      {/* ── Keyframes ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes nf-spin { to { transform: rotate(360deg); } }

        @keyframes nf-confused {
          0%, 100% { transform: translateY(0) rotate(0); }
          25% { transform: translateY(-12px) rotate(90deg); }
          50% { transform: translateY(4px) rotate(180deg); }
          75% { transform: translateY(-8px) rotate(270deg); }
        }

        @keyframes nf-fall {
          0% { transform: translateY(0); opacity: 0.3; }
          100% { transform: translateY(60px); opacity: 0; }
        }

        @keyframes nf-shimmer-break {
          0%, 100% { opacity: 0.2; transform: translateX(0); }
          30% { opacity: 0.5; transform: translateX(4px); }
          60% { opacity: 0.1; transform: translateX(-6px); }
        }

        @keyframes nf-broken-morph {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(0deg); }
          25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; transform: rotate(180deg); }
          75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
        }

        @keyframes nf-ring-expand {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(4); opacity: 0; }
        }

        @keyframes nf-glitch-1 {
          0%, 90%, 100% { transform: none; }
          92% { transform: translate(3px, -2px) skewX(2deg); }
          94% { transform: translate(-3px, 1px) skewX(-1deg); }
          96% { transform: translate(2px, 2px); }
        }

        @keyframes nf-glitch-2 {
          0%, 90%, 100% { transform: none; }
          91% { transform: translate(-2px, 1px) skewX(-2deg); }
          93% { transform: translate(3px, -2px) skewX(1deg); }
          95% { transform: translate(-1px, -1px); }
        }

        @keyframes nf-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .nf-glitch-active {
          animation: nf-glitch-shake 0.2s linear;
        }

        @keyframes nf-glitch-shake {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 2px); }
          40% { transform: translate(3px, -2px); }
          60% { transform: translate(-2px, -1px); }
          80% { transform: translate(2px, 1px); }
          100% { transform: translate(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `,
        }}
      />
    </div>
  );
}
