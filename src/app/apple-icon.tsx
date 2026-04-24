import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: site.theme.background,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Soft accent glow behind the glyph */}
        <div
          style={{
            position: "absolute",
            width: 180,
            height: 180,
            background: `radial-gradient(circle, ${site.theme.accent}55 0%, transparent 60%)`,
          }}
        />
        <div
          style={{
            position: "relative",
            width: 128,
            height: 128,
            background: site.theme.accent,
            color: site.theme.background,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 96,
            fontWeight: 900,
            borderRadius: 32,
            letterSpacing: -4,
          }}
        >
          N
        </div>
      </div>
    ),
    { ...size }
  );
}
