import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

/**
 * Homepage OG image. Rendered at the edge per request so any tweak to
 * `site.ts` (wordmark, tagline, colours) shows up immediately in shared
 * links — no image pipeline to maintain.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: site.theme.background,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient accent glow — top-right */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -160,
            width: 720,
            height: 720,
            background: `radial-gradient(circle, ${site.theme.accent}22 0%, transparent 65%)`,
          }}
        />
        {/* Secondary glow — bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -120,
            width: 620,
            height: 620,
            background: `radial-gradient(circle, ${site.theme.accent}15 0%, transparent 70%)`,
          }}
        />

        {/* Top row — logo mark + tagline */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: site.theme.accent,
              color: site.theme.background,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 900,
              letterSpacing: -2,
            }}
          >
            N
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: site.theme.textPrimary,
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: -0.5,
              }}
            >
              {site.name}
            </span>
            <span
              style={{
                color: site.theme.textMuted,
                fontSize: 18,
                fontFamily: "ui-monospace, Menlo, monospace",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginTop: 2,
              }}
            >
              nudaui.dev
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              color: site.theme.textPrimary,
              fontSize: 108,
              fontWeight: 900,
              letterSpacing: -5,
              lineHeight: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Animations</span>
            <span style={{ color: site.theme.textMuted }}>without the</span>
            <span style={{ color: site.theme.accent }}>baggage.</span>
          </div>
        </div>

        {/* Bottom row — badges */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {[
            "Zero deps",
            "≤ 1kb per component",
            "Copy → paste → ship",
            "MIT",
          ].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 18px",
                borderRadius: 999,
                border: `1px solid ${site.theme.border}`,
                background: site.theme.surface,
                color: site.theme.textPrimary,
                fontSize: 20,
                fontFamily: "ui-monospace, Menlo, monospace",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: site.theme.accent,
                }}
              />
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
