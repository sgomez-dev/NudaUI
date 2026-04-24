"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  tabs: { label: string; code: string; language: string }[];
  className?: string;
}

export function CodeBlock({ tabs, className }: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  async function copyCode() {
    await navigator.clipboard.writeText(tabs[activeTab].code);
    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface-light overflow-hidden",
        className
      )}
    >
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-border px-4">
        <div className="flex gap-0">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={cn(
                "px-4 py-3 text-xs font-medium tracking-wide uppercase transition-colors relative",
                activeTab === i
                  ? "text-accent"
                  : "text-text-muted hover:text-text-secondary"
              )}
            >
              {tab.label}
              {activeTab === i && (
                <span className="absolute bottom-0 left-4 right-4 h-px bg-accent" />
              )}
            </button>
          ))}
        </div>
        <button
          onClick={copyCode}
          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors py-2 px-2 rounded-md hover:bg-surface-hover"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-accent" />
              <span className="text-accent">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code area */}
      <div className="p-5 overflow-x-auto">
        <pre className="text-[13px] leading-relaxed">
          <code className="text-text-secondary">{tabs[activeTab].code}</code>
        </pre>
      </div>
    </div>
  );
}
