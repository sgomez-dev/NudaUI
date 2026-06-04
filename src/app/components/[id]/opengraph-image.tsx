import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
import { findComponent } from "@/lib/component-payload";

// nodejs (not edge): we import the full registry to resolve the component,
// which is larger than the edge bundle budget.
export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} component`;

export default async function OgImage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const flat = findComponent(id);
  const name = flat?.component.name ?? "Component";
  const category = flat?.categoryLabel ?? "UI component";
  const hasJS = flat?.component.code.some((t) => t.language === "javascript");

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
            {site.name} / {category}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: site.theme.textPrimary,
              fontSize: 96,
              fontWeight: 900,
              letterSpacing: -4,
              lineHeight: 1,
              display: "flex",
            }}
          >
            {name}
          </div>
          <p style={{ color: site.theme.textMuted, fontSize: 28, margin: 0, lineHeight: 1.3, maxWidth: 900 }}>
            Copy-paste {category.toLowerCase()} component. Pure HTML + CSS
            {hasJS ? " + JS" : ""}. Zero dependencies, any framework.
          </p>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          {["HTML", "CSS", ...(hasJS ? ["JS"] : []), "MIT", "no-deps"].map((tag) => (
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
                display: "flex",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
