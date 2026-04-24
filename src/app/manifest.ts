import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Web App Manifest.
 *
 * Exposed at /manifest.webmanifest by Next's file-convention — the
 * icons point at the dynamic `icon.tsx` and `apple-icon.tsx` routes so
 * the PWA install card inherits the same generated artwork.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.shortDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: site.theme.background,
    theme_color: site.theme.background,
    lang: site.language,
    dir: "ltr",
    categories: ["developer", "productivity", "utilities"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Browse components",
        short_name: "Components",
        description: "Open the full component gallery",
        url: "/components",
      },
    ],
  };
}
