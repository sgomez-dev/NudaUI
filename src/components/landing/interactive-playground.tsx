"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

// ─────────────────────────────────────────────────────────
// 1. Cursor spotlight card — radial gradient follows mouse
// ─────────────────────────────────────────────────────────
function SpotlightCard() {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 150, damping: 18 });
  const sy = useSpring(my, { stiffness: 150, damping: 18 });
  const bg = useMotionTemplate`radial-gradient(220px circle at ${sx}% ${sy}%, rgba(228,255,84,0.25), transparent 60%)`;

  return (
    <PlaygroundCard label="Spotlight" name="cursor-spotlight">
      <div
        className="relative w-full h-full"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set(((e.clientX - r.left) / r.width) * 100);
          my.set(((e.clientY - r.top) / r.height) * 100);
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ background: bg }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
            move&nbsp;your&nbsp;cursor
          </span>
        </div>
      </div>
    </PlaygroundCard>
  );
}

// ─────────────────────────────────────────────────────────
// 2. 3D tilt card — perspective rotate following cursor
// ─────────────────────────────────────────────────────────
function TiltCard() {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sRx = useSpring(rx, { stiffness: 150, damping: 14 });
  const sRy = useSpring(ry, { stiffness: 150, damping: 14 });

  return (
    <PlaygroundCard label="3D tilt" name="perspective-tilt">
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ perspective: 600 }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          ry.set(px * 24);
          rx.set(-py * 24);
        }}
        onMouseLeave={() => {
          rx.set(0);
          ry.set(0);
        }}
      >
        <motion.div
          className="relative w-24 h-24 rounded-xl border border-border-light overflow-hidden"
          style={{
            rotateX: sRx,
            rotateY: sRy,
            transformStyle: "preserve-3d",
            background:
              "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dim) 100%)",
          }}
        >
          <div
            className="absolute inset-0 mix-blend-overlay opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.5), transparent 60%)",
            }}
          />
          <span className="absolute bottom-2 left-2 text-[9px] font-mono text-surface/70 uppercase tracking-wider">
            depth
          </span>
        </motion.div>
      </div>
    </PlaygroundCard>
  );
}

// ─────────────────────────────────────────────────────────
// 3. Magnetic dot grid — dots repelled by cursor
// ─────────────────────────────────────────────────────────
function MagneticGridCard() {
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const cols = 9;
  const rows = 5;

  return (
    <PlaygroundCard label="Magnetic grid" name="magnetic-grid">
      <div
        className="relative w-full h-full"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setCursor({ x: e.clientX - r.left, y: e.clientY - r.top });
        }}
        onMouseLeave={() => setCursor(null)}
      >
        <div
          className="absolute inset-4 grid"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {Array.from({ length: cols * rows }).map((_, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            return (
              <div key={i} className="relative flex items-center justify-center">
                <Dot col={col} row={row} cols={cols} rows={rows} cursor={cursor} />
              </div>
            );
          })}
        </div>
      </div>
    </PlaygroundCard>
  );
}

function Dot({
  col,
  row,
  cols,
  rows,
  cursor,
}: {
  col: number;
  row: number;
  cols: number;
  rows: number;
  cursor: { x: number; y: number } | null;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16 });
  const sy = useSpring(y, { stiffness: 180, damping: 16 });

  useEffect(() => {
    if (!cursor || !ref.current) {
      x.set(0);
      y.set(0);
      return;
    }
    const parent = ref.current.parentElement?.parentElement;
    if (!parent) return;
    const parentRect = parent.getBoundingClientRect();
    const cellW = parentRect.width / cols;
    const cellH = parentRect.height / rows;
    const cx = (col + 0.5) * cellW;
    const cy = (row + 0.5) * cellH;
    const dx = cursor.x - cx;
    const dy = cursor.y - cy;
    const dist = Math.hypot(dx, dy);
    const max = 60;
    if (dist < max) {
      const force = (1 - dist / max) * 18;
      x.set((dx / (dist || 1)) * force);
      y.set((dy / (dist || 1)) * force);
    } else {
      x.set(0);
      y.set(0);
    }
  }, [cursor, col, row, cols, rows, x, y]);

  return (
    <motion.span
      ref={ref}
      style={{ x: sx, y: sy }}
      className="w-1 h-1 rounded-full bg-text-muted"
    />
  );
}

// ─────────────────────────────────────────────────────────
// 4. Text scramble on hover
// ─────────────────────────────────────────────────────────
const GLYPHS = "!<>-_\\/[]{}—=+*^?#________";

function ScrambleCard() {
  const target = "NUDAUI";
  const [output, setOutput] = useState(target);
  const frameRef = useRef<number | null>(null);

  const scramble = () => {
    let start = performance.now();
    const duration = 700;
    const step = () => {
      const t = Math.min(1, (performance.now() - start) / duration);
      const out = target
        .split("")
        .map((ch, i) => {
          const reveal = t * target.length;
          if (i < reveal - 1) return ch;
          if (ch === " ") return " ";
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      setOutput(out);
      if (t < 1) frameRef.current = requestAnimationFrame(step);
      else setOutput(target);
    };
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <PlaygroundCard label="Scramble" name="text-scramble">
      <div
        className="w-full h-full flex items-center justify-center cursor-pointer"
        onMouseEnter={scramble}
      >
        <span className="text-3xl font-black font-mono tracking-[-0.02em] text-text-primary">
          {output}
        </span>
      </div>
    </PlaygroundCard>
  );
}

// ─────────────────────────────────────────────────────────
// 5. Morphing blob — CSS keyframe border-radius
// ─────────────────────────────────────────────────────────
function BlobCard() {
  return (
    <PlaygroundCard label="Blob morph" name="border-radius-morph">
      <div className="w-full h-full flex items-center justify-center">
        <div
          className="w-24 h-24 relative"
          style={{
            background:
              "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dim) 100%)",
            animation: "blob-morph 12s ease-in-out infinite",
            filter: "drop-shadow(0 0 24px rgba(228,255,84,0.25))",
          }}
        >
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay"
            style={{
              animation: "blob-morph 9s ease-in-out infinite reverse",
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), transparent 60%)",
            }}
          />
        </div>
      </div>
    </PlaygroundCard>
  );
}

// ─────────────────────────────────────────────────────────
// 6. Aurora / holographic gradient backdrop
// ─────────────────────────────────────────────────────────
function AuroraCard() {
  return (
    <PlaygroundCard label="Aurora" name="holographic-shift">
      <div className="w-full h-full relative overflow-hidden">
        <div
          className="absolute -inset-1/4"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(228,255,84,0.35), transparent 30%, rgba(228,255,84,0.15) 55%, transparent 80%, rgba(228,255,84,0.35) 100%)",
            animation: "aurora 10s linear infinite",
            filter: "blur(24px)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(228,255,84,0.08), transparent 40%, rgba(228,255,84,0.08))",
            backgroundSize: "200% 200%",
            animation: "holo-shift 8s ease-in-out infinite",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">
            holographic
          </span>
        </div>
      </div>
    </PlaygroundCard>
  );
}

// ─────────────────────────────────────────────────────────
// 7. Constellation — twinkling dots with connecting lines
// ─────────────────────────────────────────────────────────
function ConstellationCard() {
  const dots = [
    { x: 18, y: 28, d: 0 },
    { x: 42, y: 18, d: 0.4 },
    { x: 72, y: 32, d: 0.8 },
    { x: 86, y: 62, d: 1.2 },
    { x: 55, y: 70, d: 0.6 },
    { x: 28, y: 62, d: 1.4 },
    { x: 62, y: 46, d: 0.2 },
  ];
  const links: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 6],
    [6, 4],
    [4, 5],
    [5, 0],
    [2, 3],
    [3, 4],
  ];

  return (
    <PlaygroundCard label="Constellation" name="constellation">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        {links.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={dots[a].x}
            y1={dots[a].y}
            x2={dots[b].x}
            y2={dots[b].y}
            stroke="var(--color-accent)"
            strokeOpacity="0.3"
            strokeWidth="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 1, ease }}
          />
        ))}
        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r="1"
            fill="var(--color-accent)"
            style={{
              animation: `constellation 3s ease-in-out infinite`,
              animationDelay: `${dot.d}s`,
              transformOrigin: `${dot.x}px ${dot.y}px`,
            }}
          />
        ))}
      </svg>
    </PlaygroundCard>
  );
}

// ─────────────────────────────────────────────────────────
// 8. Typing / caret
// ─────────────────────────────────────────────────────────
function TypingCard() {
  const words = ["copy.", "paste.", "ship."];
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    const speed = deleting ? 60 : 110;
    const timeout = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 900);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIdx((p) => (p + 1) % words.length);
        return;
      }
      setText(
        deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
      );
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return (
    <PlaygroundCard label="Typing" name="typing-caret">
      <div className="w-full h-full flex items-center justify-center gap-0.5">
        <span className="text-xl font-semibold text-text-primary">{text}</span>
        <span
          className="inline-block w-[2px] h-5 bg-accent translate-y-[1px]"
          style={{ animation: "blink-caret 1.1s steps(2) infinite" }}
        />
      </div>
    </PlaygroundCard>
  );
}

// ─────────────────────────────────────────────────────────
// Card shell
// ─────────────────────────────────────────────────────────
function PlaygroundCard({
  children,
  label,
  name,
}: {
  children: ReactNode;
  label: string;
  name: string;
}) {
  return (
    <div className="group relative border border-border rounded-2xl bg-surface-light overflow-hidden aspect-[1.3/1]">
      {/* Animated conic gradient border ring on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(228,255,84,0.5) 15%, transparent 30%)",
          animation: "conic-spin 5s linear infinite",
          WebkitMask:
            "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: 1,
        }}
      />
      {/* Stage */}
      <div className="absolute inset-0">{children}</div>
      {/* Label */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-muted">
          {label}
        </span>
        <span className="text-[10px] font-mono text-text-muted/60 opacity-0 group-hover:opacity-100 transition-opacity">
          .{name}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Section root
// ─────────────────────────────────────────────────────────
export function InteractivePlayground() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      aria-labelledby="playground-heading"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      {/* Ambient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(700px,80vw)] h-[min(500px,60vw)] bg-accent/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-end mb-10 sm:mb-14"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-4">
              Playground
            </p>
            <h2
              id="playground-heading"
              className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]"
            >
              Touch them.
              <br />
              <span className="text-text-muted">They respond.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg">
            Eight micro-interactions — hover, move your cursor, let the grid
            do its thing. All under 1kb each, all without a runtime.
          </p>
        </motion.div>

        {/* 4-column responsive grid, 8 cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {[
            SpotlightCard,
            TiltCard,
            MagneticGridCard,
            ScrambleCard,
            BlobCard,
            AuroraCard,
            ConstellationCard,
            TypingCard,
          ].map((Card, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
              }}
            >
              <Card />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
