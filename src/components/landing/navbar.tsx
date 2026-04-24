"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-2 py-2 rounded-2xl transition-all duration-500",
          scrolled
            ? "bg-surface-light/80 backdrop-blur-xl border border-border shadow-2xl shadow-black/20"
            : "bg-transparent"
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-surface-hover transition-colors"
        >
          <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
            <span className="text-surface text-xs font-black">N</span>
          </div>
          <span className="font-semibold text-sm tracking-tight text-text-primary">
            NudaUI
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-0.5 ml-2">
          <Link
            href="/components"
            className="px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-hover transition-all"
          >
            Components
          </Link>
          <a
            href="https://github.com/nudaui"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="hidden md:flex items-center ml-2">
          <Link
            href="/components"
            className="px-4 py-1.5 text-sm font-medium bg-accent text-surface rounded-lg hover:bg-accent-dim transition-colors"
          >
            Browse
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden px-3 py-1.5 text-text-secondary"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-3 sm:inset-x-4 top-16 sm:top-20 z-40 bg-surface-light/95 backdrop-blur-xl border border-border rounded-2xl p-3 sm:p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              <Link
                href="/components"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm text-text-secondary hover:text-text-primary rounded-xl hover:bg-surface-hover transition-colors"
              >
                Components
              </Link>
              <Link
                href="/components"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 text-sm font-medium text-center bg-accent text-surface rounded-xl"
              >
                Browse Components
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
