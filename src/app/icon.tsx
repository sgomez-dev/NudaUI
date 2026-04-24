import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Dynamically generated favicon.
 *
 * Using a tsx icon route (instead of a static file in /public) lets the brand
 * colour and glyph stay in one place — `site.theme` drives both this and the
 * apple-icon, manifest, and OG images below.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: site.theme.accent,
          color: site.theme.background,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          borderRadius: 8,
          letterSpacing: -1,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        N
      </div>
    ),
    { ...size }
  );
}
