"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, Mail, X } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Footer "Contact" trigger + dialog.
 *
 * We deliberately don't use `mailto:` directly: many users browse on
 * machines without a mail client wired up, and the link silently fails.
 * Instead we show the address in a copy-able panel — works the same on
 * desktop, mobile, and inside webviews.
 *
 * Lives as a tiny client island so the rest of the footer stays a server
 * component. Reuses the framer-motion timing curve and surface tokens
 * from the gallery modal so both dialogs feel like the same family.
 */
export function ContactDialog() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Esc to close — modeled after the gallery's modal UX so users learn one
  // dialog convention across the site.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll while dialog is open. Avoids the "scroll behind the
  // backdrop" feel that suggests the dialog isn't really modal.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail in non-secure contexts or when the user
      // denied permission. Fall back to selecting the text in the input
      // so they can copy manually.
      const input = document.getElementById(
        "contact-dialog-email"
      ) as HTMLInputElement | null;
      input?.select();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hover:text-text-primary transition-colors cursor-pointer"
      >
        Contact
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-surface-light border border-border rounded-2xl overflow-hidden mx-2 sm:mx-auto"
            >
              <div className="flex items-start justify-between p-5 border-b border-border">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3
                      id="contact-dialog-title"
                      className="font-semibold text-sm text-text-primary"
                    >
                      Get in touch
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5">
                      Drop us a line — we read every message.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-2 -m-1 rounded-lg hover:bg-surface-hover text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 space-y-4">
                <label
                  htmlFor="contact-dialog-email"
                  className="block text-[10px] font-mono uppercase tracking-widest text-text-muted"
                >
                  Email address
                </label>

                <div className="flex items-stretch gap-2">
                  <input
                    id="contact-dialog-email"
                    type="email"
                    value={site.email}
                    readOnly
                    onFocus={(e) => e.currentTarget.select()}
                    className="flex-1 min-w-0 px-3 py-2.5 rounded-lg bg-surface border border-border text-sm font-mono text-text-primary outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/20 transition-all selection:bg-accent/30"
                    aria-label="Contact email — click to select, or use the copy button"
                  />
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-accent text-surface text-xs font-semibold hover:bg-accent-dim transition-colors flex-shrink-0"
                    aria-label={copied ? "Email copied" : "Copy email to clipboard"}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-text-muted leading-relaxed">
                  For security reports, please use the dedicated channel in{" "}
                  <a
                    href="/.well-known/security.txt"
                    className="text-accent hover:underline"
                  >
                    security.txt
                  </a>
                  .
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
