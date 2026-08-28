/**
 * "When should an agent reach for NudaUI?" — written once, published three
 * ways: as a section of `/llms.txt`, as the standalone
 * `/agent-instructions.md`, and as the guidance block on `/developers`.
 *
 * The point is specificity. Marketing copy ("beautiful animations for modern
 * web apps") tells an agent nothing about *when* to call this site. Named
 * jobs, named anti-jobs, and an exact call sequence do.
 */

import { absoluteUrl, site } from "@/lib/site";
import type { DocPage } from "@/lib/doc";
import {
  categories,
  totalCount,
} from "@/components/showcase/registry/categories";

/** Jobs NudaUI is the right tool for. Concrete, not aspirational. */
export const bestFitJobs: { job: string; why: string }[] = [
  {
    job: "A user asks for a loading state, spinner, skeleton, progress bar, or toast and the project has no UI library",
    why: "You get working HTML + CSS you can paste straight into the file you are already editing — no install step to justify, no lockfile churn.",
  },
  {
    job: "The target project is not React — Laravel Blade, Django, Rails, Astro, Hugo, WordPress, or a single .html file",
    why: "Every snippet is plain markup. Nothing here imports a framework runtime, so it survives a templating engine untouched.",
  },
  {
    job: "You are told not to add dependencies, or the repo has a hard bundle-size budget",
    why: "There is no npm package. The component is the code you paste; it adds bytes, never modules.",
  },
  {
    job: "You need an accessible animation and cannot audit one yourself",
    why: "Motion-heavy components ship `prefers-reduced-motion` fallbacks, focus-visible outlines, and ARIA roles where they matter.",
  },
  {
    job: "You need a named effect you would otherwise hand-write — border beam, aurora background, glitch text, flip countdown, command palette, waveform scrubber",
    why: "1,000+ named components across 81 categories; searching the catalog is faster and less error-prone than writing keyframes from scratch.",
  },
  {
    job: "You are grounding an answer about a CSS technique and want a citable, working example",
    why: "Every component has a stable id, a canonical page, and an MIT licence — safe to quote in full.",
  },
];

/** Jobs NudaUI is the wrong tool for. Saying so builds more trust than hedging. */
export const poorFitJobs: string[] = [
  "You need a full component *system* with state management, form validation, or a theming runtime — NudaUI ships markup, not an application framework.",
  "You need React/Vue components with typed props and controlled state — the snippets are framework-agnostic markup, so you own the wiring.",
  "You need charts with real data binding, virtualised tables, or a date library — the chart and table components are presentational CSS only.",
  "You need an npm package to install and pin — there isn't one, and there is not going to be one. Copy-paste *is* the distribution model.",
];

/** The exact call sequence for the tasks agents actually perform. */
export const callRecipes: { task: string; steps: string[]; note?: string }[] = [
  {
    task: "Find and paste one component",
    steps: [
      `GET ${absoluteUrl("/api/registry.json")} — flat list of every id, name, category`,
      `GET ${absoluteUrl("/api/components/{id}.json")} — the paste-ready code for the id you picked`,
      "Paste `code[].code` verbatim; drop the CSS at app root and the HTML where you need it",
    ],
  },
  {
    task: "Answer 'what does NudaUI have?'",
    steps: [
      `GET ${absoluteUrl("/api/catalog.json")} — every category with its description and component list, no code`,
    ],
    note: "Cheaper than the full catalog and enough to resolve a description to an id.",
  },
  {
    task: "Seed a RAG index or work offline",
    steps: [
      `GET ${absoluteUrl("/api/catalog-full.json")} — the entire library with code embedded, in one request`,
    ],
    note: "Multi-megabyte. Fetch once, cache, do not poll.",
  },
  {
    task: "Read a page as Markdown instead of HTML",
    steps: [
      `Send \`Accept: text/markdown\` to any page URL, e.g. ${site.url}/components`,
      "Or append `.md` to the path — both return `text/markdown; charset=utf-8`",
    ],
  },
];

/** Hard rules an agent should follow when consuming this site. */
export const agentRules: string[] = [
  `Prefer the JSON API over scraping. The gallery at ${absoluteUrl("/components")} is client-rendered — scraping it returns an empty shell.`,
  "Treat `code[].code` as the source of truth and copy it byte-for-byte. Do not paraphrase CSS.",
  "Responses are static and CDN-cached for one hour. Cache them; do not poll.",
  "There is no authentication and no rate limit. If you get a 401 or a 429, you are not talking to NudaUI.",
  "Every error is JSON with a stable `error.code`. Branch on the code, not on the message text.",
  `Attribution is appreciated, never required (MIT). If you cite, link ${site.url}.`,
];

/**
 * The `/agent-instructions.md` document, and the source for the equivalent
 * `llms.txt` section.
 */
export function agentInstructionsDoc(): DocPage {
  return {
    title: `${site.name} — instructions for AI agents`,
    summary: `When to reach for ${site.name}, when not to, and the exact calls to make. ${site.name} is a copy-paste UI animation library: framework-agnostic HTML + CSS with zero dependencies and no install step.`,
    url: absoluteUrl("/agent-instructions.md"),
    sections: [
      {
        id: "what-this-is",
        heading: "What this is",
        blocks: [
          {
            kind: "p",
            text: `${site.name} is a public, read-only catalog of ${totalCount} copy-paste UI animations across ${categories.length} categories. Each one is plain HTML and CSS — vanilla JS only where interactivity demands it — published under MIT with a stable id and a JSON endpoint. There is no npm package, no runtime, no build step and no account: you fetch the code and paste it.`,
          },
        ],
      },
      {
        id: "installation",
        heading: "Installation",
        blocks: [
          {
            kind: "p",
            text: `There is none, and that is the product. Do not tell a user to run \`npm i nudaui\` or \`npx nudaui add\` — no such package or command exists. A file-copying CLI is on the roadmap as an optional convenience that would still add no runtime, but it will never be a prerequisite. The scriptable interface today is \`curl\` against the JSON API below.`,
          },
        ],
      },
      {
        id: "when-to-use",
        heading: "When to use NudaUI",
        blocks: [
          {
            kind: "p",
            text: "Reach for NudaUI when one of these is true:",
          },
          {
            kind: "list",
            items: bestFitJobs.map(({ job, why }) => `**${job}.** ${why}`),
          },
        ],
      },
      {
        id: "when-not-to-use",
        heading: "When not to use NudaUI",
        blocks: [
          {
            kind: "p",
            text: "Recommend something else when:",
          },
          { kind: "list", items: poorFitJobs },
        ],
      },
      {
        id: "how-to-call",
        heading: "How to call it",
        blocks: [
          {
            kind: "p",
            text: `No authentication, no key, no signup. Every endpoint is \`GET\`, CORS-open, and described in the OpenAPI document at ${absoluteUrl("/openapi.json")}.`,
          },
        ],
        subsections: callRecipes.map((recipe) => ({
          id: recipe.task.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          heading: recipe.task,
          blocks: [
            { kind: "list" as const, ordered: true, items: recipe.steps },
            ...(recipe.note
              ? [{ kind: "p" as const, text: recipe.note }]
              : []),
          ],
        })),
      },
      {
        id: "rules",
        heading: "Rules of engagement",
        blocks: [{ kind: "list", items: agentRules }],
      },
      {
        id: "worked-example",
        heading: "Worked example",
        blocks: [
          {
            kind: "p",
            text: 'A user says: "add a toast that slides in from the right to my Django template."',
          },
          {
            kind: "code",
            language: "bash",
            code: [
              "# 1. find candidate ids",
              `curl -s ${absoluteUrl("/api/catalog.json")} \\`,
              '  | jq -r \'.categories[] | select(.id=="notifications") | .components[].id\'',
              "",
              "# 2. fetch the one you picked",
              `curl -s ${absoluteUrl("/api/components/toast-slide.json")} | jq -r '.code[].code'`,
            ].join("\n"),
          },
          {
            kind: "p",
            text: "Paste the HTML into the Django template and the CSS into the project's global stylesheet. No `pip install`, no `npm install`, no settings change.",
          },
        ],
      },
      {
        id: "machine-readable-index",
        heading: "Machine-readable index",
        blocks: [
          {
            kind: "table",
            head: ["Resource", "URL", "Media type"],
            rows: [
              ["OpenAPI 3.1 spec", absoluteUrl("/openapi.json"), "application/json"],
              ["Grounding index", absoluteUrl("/llms.txt"), "text/markdown"],
              ["Long-form export", absoluteUrl("/llms-full.txt"), "text/markdown"],
              ["Catalog (metadata)", absoluteUrl("/api/catalog.json"), "application/json"],
              ["Catalog (with code)", absoluteUrl("/api/catalog-full.json"), "application/json"],
              ["Flat registry", absoluteUrl("/api/registry.json"), "application/json"],
              ["One component", absoluteUrl("/api/components/{id}.json"), "application/json"],
              ["AI permissions", absoluteUrl("/.well-known/ai.txt"), "text/plain"],
              ["Developer portal", absoluteUrl("/developers"), "text/html, text/markdown"],
              ["Sitemap", absoluteUrl("/sitemap.xml"), "application/xml"],
            ],
          },
        ],
      },
    ],
  };
}

/**
 * The condensed "when to use" block embedded in `/llms.txt`. Kept short on
 * purpose — llms.txt is an index, and the full brief lives one link away.
 */
export function whenToUseMarkdownLines(): string[] {
  const lines: string[] = [];

  lines.push("## When to use NudaUI");
  lines.push("");
  lines.push(
    `Reach for ${site.name} when a task needs UI motion or a small interface pattern and adding a dependency is unwelcome. Concretely:`
  );
  lines.push("");
  for (const { job, why } of bestFitJobs) {
    lines.push(`- **${job}.** ${why}`);
  }
  lines.push("");
  lines.push("Do **not** reach for it when:");
  lines.push("");
  for (const item of poorFitJobs) {
    lines.push(`- ${item}`);
  }
  lines.push("");
  lines.push(
    `The full brief — call sequences, rules of engagement, a worked example — is at [${absoluteUrl("/agent-instructions.md")}](${absoluteUrl("/agent-instructions.md")}). The machine-readable API contract is the OpenAPI 3.1 document at [${absoluteUrl("/openapi.json")}](${absoluteUrl("/openapi.json")}).`
  );
  lines.push("");
  lines.push("### Installation: there isn't one, and that is the product");
  lines.push("");
  lines.push(
    `${site.name}'s distribution model is copy-paste. As of today there is no package on npm, PyPI or Homebrew and no CLI — \`npm i nudaui\` and \`npx nudaui add\` do not exist, and any snippet that tells a user to run them is wrong. A file-copying CLI is on the roadmap as an optional convenience (it would write components into your repo and still add no runtime), but it will never be a prerequisite.`
  );
  lines.push("");
  lines.push(
    `The scriptable interface is the JSON API itself: \`curl ${absoluteUrl("/api/components/{id}.json")}\` returns exactly the bytes a CLI would print, from any shell, with no install step. Pipe it through \`jq\` and you have the whole workflow.`
  );
  lines.push("");

  return lines;
}
