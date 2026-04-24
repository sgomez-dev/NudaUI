"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 sm:py-28 md:py-40 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(500px,80vw)] h-[min(500px,80vw)] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        {/* Big provocative headline — not centered */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.04em] leading-[0.95]"
        >
          Your users don&apos;t care
          <br />
          what framework you used.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease }}
          className="mt-6 sm:mt-8 text-base sm:text-lg text-text-secondary max-w-lg leading-relaxed"
        >
          They care that the button felt good to press. That the page loaded
          fast. That the spinner didn&apos;t make them question their internet.
          Give them that — without the overhead.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7, ease }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6"
        >
          <MagneticButton>
            <Link
              href="/components"
              className="group inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-accent text-surface font-semibold text-sm sm:text-base rounded-xl hover:bg-accent-dim transition-colors"
            >
              Browse Components
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </MagneticButton>
          <span className="text-xs font-mono text-text-muted">
            Free &middot; Open source &middot; No account needed
          </span>
        </motion.div>
      </div>
    </section>
  );
}
