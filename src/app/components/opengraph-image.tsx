import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} components gallery`;

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
        {/* Ambient accent glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -140,
            width: 620,
            height: 620,
            background: `radial-gradient(circle, ${site.theme.accent}22 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -100,
            width: 520,
            height: 520,
            background: `radial-gradient(circle, ${site.theme.accent}12 0%, transparent 70%)`,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: site.theme.accent,
              color: site.theme.background,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 900,
              letterSpacing: -2,
            }}
          >
            N
          </div>
          <span
            style={{
              color: site.theme.textMuted,
              fontSize: 22,
              fontFamily: "ui-monospace, Menlo, monospace",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {site.name} / components
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: site.theme.textPrimary,
              fontSize: 104,
              fontWeight: 900,
              letterSpacing: -5,
              lineHeight: 0.95,
            }}
          >
            <span>28+ animations.</span>
            <span style={{ color: site.theme.accent }}>Zero installs.</span>
          </div>
          <p
            style={{
              color: site.theme.textMuted,
              fontSize: 28,
              maxWidth: 900,
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Loaders, text effects, toggles, buttons, indicators and
            micro-interactions. Copy-paste, framework-agnostic.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            maxWidth: 980,
          }}
        >
          {[
            "loaders",
            "text",
            "buttons",
            "toggles",
            "indicators",
            "entrances",
            "backgrounds",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 16px",
                borderRadius: 999,
                border: `1px solid ${site.theme.border}`,
                background: site.theme.surface,
                color: site.theme.textPrimary,
                fontSize: 20,
                fontFamily: "ui-monospace, Menlo, monospace",
              }}
            >
              #{tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
