"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * Small client island: copies the given text. The code itself is rendered
 * server-side in a <pre> next to this button, so crawlers and LLMs see the
 * full snippet in the static HTML — only the copy interaction needs JS.
 */
export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  return (
    <button
      onClick={onCopy}
      className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors py-1.5 px-2 rounded-md hover:bg-surface-hover"
      aria-label={`Copy ${label}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-accent" />
          <span className="text-accent">Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
