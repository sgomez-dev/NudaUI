/**
 * Single source of truth for site-level SEO metadata.
 *
 * Reference this instead of hardcoding the URL, name, or description anywhere
 * else. Keeping it here makes the canonical values auditable in one file and
 * trivially overridable via env vars without chasing strings around the code.
 */

const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://nudaui.dev";

export const site = {
  name: "NudaUI",
  shortName: "NudaUI",
  url: rawUrl,
  locale: "en_US",
  language: "en",
  tagline: "Animations without the baggage",
  title: "NudaUI — Animations without the baggage",
  description:
    "Copy-paste CSS & JS animations that work everywhere. Zero dependencies, zero npm installs, zero build steps. Framework-agnostic UI components for React, Vue, Svelte, Astro, Laravel, Django, Rails and plain HTML.",
  shortDescription:
    "Copy-paste CSS & JS animations that work everywhere. Zero dependencies.",
  keywords: [
    "CSS animations",
    "copy paste UI components",
    "framework agnostic animations",
    "zero dependencies",
    "lightweight animation library",
    "loaders and spinners",
    "web micro-interactions",
    "vanilla CSS components",
    "HTML animations",
    "tailwind animations",
    "no runtime animation library",
    "accessibility first animations",
    "prefers-reduced-motion",
    "reactjs animations",
    "vuejs animations",
    "svelte animations",
    "astro animations",
  ],
  author: {
    name: "NudaUI",
    url: "https://nudaui.dev",
  },
  // The human behind NudaUI. Project ownership, copyright, and the canonical
  // "creator" identity for schema.org/JSON-LD and humans.txt live here.
  // Distinct from `email` below, which is the project's own inbox.
  creator: {
    name: "Santiago Gómez de la Torre Romero",
    role: "Creator, owner, and maintainer",
    email: "contact@sgomez.dev",
    url: "https://sgomez.dev",
    github: "https://github.com/sgomez-dev",
  },
  social: {
    github: "https://github.com/sgomez-dev/nudaui",
  },
  // Inbox for press, partnership, and general contact. Security reports go
  // through .well-known/security.txt instead — keep this address spam-soft.
  email: "contact@nudaui.dev",
  // OG colors — kept here so the dynamic OG image and the manifest share tokens.
  theme: {
    background: "#09090b",
    surface: "#111113",
    accent: "#e4ff54",
    accentDim: "#b8cc43",
    textPrimary: "#fafafa",
    textMuted: "#63636e",
    border: "#222228",
  },
} as const;

export type SiteConfig = typeof site;

/** Resolve a relative path to an absolute URL on the canonical origin. */
export function absoluteUrl(path: string = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalized}`;
}
