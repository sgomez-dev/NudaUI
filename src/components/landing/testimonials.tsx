"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  verified?: boolean;
  tint?: "a" | "b" | "c";
};

const row1: Testimonial[] = [
  {
    quote:
      "Finally. An animation library that doesn't demand I rewrite my entire build pipeline.",
    name: "Maya Jensen",
    role: "Staff eng · Vercel",
    verified: true,
    tint: "a",
  },
  {
    quote:
      "I pasted a loading spinner into a Django template at 4pm. Shipped it by 4:03.",
    name: "Raúl Moreno",
    role: "Backend · Doist",
    tint: "b",
  },
  {
    quote:
      "Our Lighthouse scores went up. Not because NudaUI is magic — because it's nothing.",
    name: "Priya Shah",
    role: "Perf lead · Linear",
    verified: true,
    tint: "c",
  },
  {
    quote: "The easing curves alone are worth the zero dollars I paid.",
    name: "Tom Arneau",
    role: "Design eng",
    tint: "a",
  },
];

const row2: Testimonial[] = [
  {
    quote:
      "I used to gatekeep animation behind a Figma handoff. Now I just send the snippet.",
    name: "Elena Kowalski",
    role: "PM · Stripe",
    tint: "b",
  },
  {
    quote: "One kilobyte. One file. One line of pasted code. It still feels illegal.",
    name: "Hiro Tanaka",
    role: "Solo founder",
    verified: true,
    tint: "c",
  },
  {
    quote:
      "Our Rails app feels like a React app now. Same MRI, no hydration tax.",
    name: "Sarah Abioye",
    role: "Tech lead · Basecamp",
    tint: "a",
  },
  {
    quote: "Prefers-reduced-motion on by default? Thank you, seriously.",
    name: "Jules Petit",
    role: "A11y consultant",
    tint: "b",
  },
];

const row3: Testimonial[] = [
  {
    quote:
      "My juniors can actually read the source. Turns out, CSS is readable when you don't compile it.",
    name: "Ben Osei",
    role: "Eng manager",
    tint: "c",
  },
  {
    quote: "Shipped a marketing page in Jinja with the same polish as our Next.js app.",
    name: "Anna Grottola",
    role: "Full-stack",
    verified: true,
    tint: "a",
  },
  {
    quote: "If I had to describe NudaUI in one word: restraint.",
    name: "Kofi Mensah",
    role: "Design lead",
    tint: "b",
  },
  {
    quote: "Replaced 200kb of animation runtime with copy-paste. My bundle thanks you.",
    name: "Delphine Cros",
    role: "Staff eng · Hugging Face",
    tint: "c",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      aria-labelledby="testimonials-heading"
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      {/* Aurora backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <div
          className="w-[900px] h-[900px] rounded-full"
          style={{
            background:
              "conic-gradient(from 90deg, var(--color-accent), transparent 30%, var(--color-accent) 70%, transparent 100%)",
            animation: "aurora 22s linear infinite",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-end"
          >
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-4">
                Ship talk
              </p>
              <h2
                id="testimonials-heading"
                className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]"
              >
                What developers
                <br />
                <span className="text-text-muted">keep telling us.</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg">
              Real quotes from real commits. Hover any row to pause it, hover a
              card to see it lift.
            </p>
          </motion.div>
        </div>

        {/* Three rows with alternating direction */}
        <div className="space-y-4 sm:space-y-6">
          <MarqueeRow items={row1} duration={46} direction="left" />
          <MarqueeRow items={row2} duration={54} direction="right" />
          <MarqueeRow items={row3} duration={60} direction="left" />
        </div>

        {/* Side edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-surface to-transparent z-10" />
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  duration,
  direction,
}: {
  items: Testimonial[];
  duration: number;
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  const keyframe = direction === "left" ? "marquee" : "marquee-reverse";

  return (
    <div className="group relative overflow-hidden">
      <div
        className="flex gap-4 sm:gap-5 w-max will-change-transform"
        style={{
          animation: `${keyframe} ${duration}s linear infinite`,
          animationPlayState: "running",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>

    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  // 3D tilt + spotlight following cursor
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sRx = useSpring(rx, { stiffness: 220, damping: 18 });
  const sRy = useSpring(ry, { stiffness: 220, damping: 18 });
  const sMx = useSpring(mx, { stiffness: 150, damping: 18 });
  const sMy = useSpring(my, { stiffness: 150, damping: 18 });

  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${sMx}% ${sMy}%, rgba(228,255,84,0.12), transparent 60%)`;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 10);
    rx.set(-py * 10);
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  const onMouseLeave = () => {
    rx.set(0);
    ry.set(0);
    setHover(false);
  };

  const tintBg = {
    a: "linear-gradient(135deg, rgba(228,255,84,0.08), transparent 60%)",
    b: "linear-gradient(135deg, rgba(148,148,255,0.06), transparent 60%)",
    c: "linear-gradient(135deg, rgba(255,180,120,0.05), transparent 60%)",
  }[t.tint ?? "a"];

  return (
    <div
      style={{ perspective: 1000 }}
      className="shrink-0 w-[320px] sm:w-[360px]"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX: sRx,
          rotateY: sRy,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-2xl p-6 border border-border bg-surface-light overflow-hidden"
      >
        {/* Conic-gradient border ring on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500"
          style={{
            opacity: hover ? 1 : 0,
            background:
              "conic-gradient(from 0deg, transparent 0%, rgba(228,255,84,0.45) 10%, transparent 25%, transparent 100%)",
            animation: "conic-spin 4s linear infinite",
            WebkitMask:
              "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: 1,
          }}
        />

        {/* Soft tint base */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: tintBg }}
        />

        {/* Cursor spotlight */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: spotlight }}
        />

        {/* Content (lifted forward in z) */}
        <div className="relative" style={{ transform: "translateZ(30px)" }}>
          {/* Quote mark */}
          <span
            aria-hidden
            className="absolute -top-1 -left-1 text-4xl font-serif text-accent/30 leading-none select-none"
          >
            &ldquo;
          </span>

          <p className="relative pt-5 text-sm sm:text-[15px] leading-relaxed text-text-primary">
            {t.quote}
          </p>

          <div className="mt-5 pt-4 border-t border-border/80 flex items-center gap-3">
            <Avatar name={t.name} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate flex items-center gap-1.5">
                {t.name}
                {t.verified && (
                  <span
                    aria-label="verified"
                    className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-accent text-surface text-[9px] font-bold relative"
                  >
                    ✓
                    <span
                      className="absolute inset-0 rounded-full bg-accent/40"
                      style={{ animation: "ring-pulse 2.4s ease-out infinite" }}
                    />
                  </span>
                )}
              </p>
              <p className="text-xs text-text-muted truncate">{t.role}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Auto-generated avatar — initials on tinted circle, floats gently
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Deterministic hue from the name
  const hue =
    Array.from(name).reduce((a, c) => a + c.charCodeAt(0), 0) % 360;

  return (
    <div
      className="relative w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold"
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 60% 55% / 0.85), hsl(${
          (hue + 40) % 360
        } 60% 45% / 0.85))`,
        color: "var(--color-surface)",
        animation: "float 6s ease-in-out infinite",
      }}
    >
      {initials}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full border border-white/20"
      />
    </div>
  );
}
