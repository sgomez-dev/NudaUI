"use client";

import { MotionConfig } from "framer-motion";

/**
 * App-wide motion policy. `reducedMotion="user"` makes every framer-motion
 * animation honor the OS "reduce motion" setting (transforms/opacity snap to
 * their end state instead of animating). NudaUI promises accessibility-first
 * motion, so the marketing site must practice it too — not just the components.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
