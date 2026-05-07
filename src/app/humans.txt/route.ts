import { site } from "@/lib/site";
import { categories, totalCount } from "@/components/showcase/registry/categories";

/**
 * /humans.txt — the original "credits page for the people behind the
 * site" file from humanstxt.org. We use it for: who built it, what
 * powered it, and a tip of the hat to the open-source stack.
 */
export const dynamic = "force-static";
export const revalidate = 86400;

export function GET(): Response {
  const lines = [
    "/* TEAM */",
    "  Author:   Santiago Gómez de la Torre Romero",
    `  Site:     ${site.url}`,
    `  Source:   ${site.social.github}`,
    "",
    "/* THANKS */",
    "  Every framework that lets us paste plain HTML and CSS.",
    "  Every browser that ships smoother animations every release.",
    "  Every developer who reported a bug, sent a PR, or starred the repo.",
    "",
    "/* SITE */",
    `  Name:        ${site.name}`,
    `  Tagline:     ${site.tagline}`,
    `  Components:  ${totalCount} across ${categories.length} categories`,
    "  Stack:       Next.js 16, React 19, TypeScript, Tailwind v4",
    "  Animations:  Pure CSS, vanilla JS where needed, framer-motion on the marketing site",
    "  Standards:   prefers-reduced-motion respected, ARIA-correct, semantic HTML",
    "  Components:  Are *not* an npm package. Copy-paste, you own the code.",
    "",
    "/* DEPENDENCIES (THE FEW WE HAVE) */",
    "  Next.js, React, framer-motion, lucide-react, tailwindcss, clsx, tailwind-merge.",
    "  Components themselves: zero npm dependencies — that's the whole point.",
    "",
    `Last edit: ${new Date().toISOString().slice(0, 10)}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
