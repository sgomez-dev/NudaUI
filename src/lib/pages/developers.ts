/**
 * `/developers` — the developer portal.
 *
 * Everything a human or an agent needs to consume NudaUI programmatically:
 * auth (there is none), the four endpoints, the error envelope, caching,
 * CORS, content negotiation, and the framework recipes. Authored as
 * `DocPage` data so the HTML page and the Markdown representation are the
 * same document.
 */

import { absoluteUrl, site } from "@/lib/site";
import type { DocPage } from "@/lib/doc";
import {
  categories,
  totalCount,
} from "@/components/showcase/registry/categories";
import { agentRules, poorFitJobs } from "@/lib/agent-guidance";
import { API_ERROR_CODES } from "@/lib/api-error";

export const developersMeta = {
  title: "Developer portal",
  description: `The ${site.name} API: four read-only JSON endpoints, no API key, no rate limit, CORS open to everyone. Quickstart, response shapes, error codes, and the OpenAPI 3.1 spec.`,
  path: "/developers",
  lastUpdated: "August 28, 2026",
  lastUpdatedIso: "2026-08-28",
  publishedIso: "2026-08-28",
} as const;

/** Endpoint table — the same rows drive the HTML page and the Markdown. */
export const endpoints: {
  operationId: string;
  method: "GET";
  path: string;
  summary: string;
  size: string;
}[] = [
  {
    operationId: "getRegistry",
    method: "GET",
    path: "/api/registry.json",
    summary: "Flat index: every component id, name, category and fetch URL.",
    size: "small",
  },
  {
    operationId: "getCatalog",
    method: "GET",
    path: "/api/catalog.json",
    summary:
      "Every category with its description and component list. Metadata only, no code.",
    size: "medium",
  },
  {
    operationId: "getComponent",
    method: "GET",
    path: "/api/components/{id}.json",
    summary:
      "One component's complete, paste-ready HTML + CSS (+ vanilla JS when needed).",
    size: "tiny",
  },
  {
    operationId: "getCatalogFull",
    method: "GET",
    path: "/api/catalog-full.json",
    summary: "The entire library with every component's code embedded.",
    size: "large",
  },
];

export function developersDoc(): DocPage {
  return {
    title: `${site.name} developer portal`,
    summary: developersMeta.description,
    url: absoluteUrl(developersMeta.path),
    sections: [
      {
        id: "overview",
        heading: "Overview",
        blocks: [
          {
            kind: "p",
            text: `The ${site.name} API exposes the whole component registry — ${totalCount} components across ${categories.length} categories — as static JSON. It is read-only, public, and served from a CDN. Use it to search the catalog, resolve a description to a component id, and pull the paste-ready source code for that component.`,
          },
          {
            kind: "table",
            head: ["", ""],
            rows: [
              ["Base URL", `\`${site.url}\``],
              ["Authentication", "None. No API key, no account, no signup."],
              ["Rate limits", "None enforced. Responses are CDN-cached for one hour."],
              ["CORS", "`Access-Control-Allow-Origin: *` on every endpoint."],
              ["Methods", "`GET`, `HEAD`, `OPTIONS`. The API is read-only."],
              ["Machine contract", `[OpenAPI 3.1](${absoluteUrl("/openapi.json")})`],
              ["Licence", "MIT — component code is yours to ship and sell."],
            ],
          },
        ],
      },

      {
        id: "quickstart",
        heading: "Quickstart",
        blocks: [
          {
            kind: "p",
            text: "Three requests take you from nothing to pasted code. No key, no headers, no setup.",
          },
          {
            kind: "code",
            language: "bash",
            code: [
              "# 1. What exists? (flat index of every id)",
              `curl -s ${absoluteUrl("/api/registry.json")} | jq '.totals'`,
              "",
              "# 2. Narrow it down — every id in the Toasts & Alerts category",
              `curl -s ${absoluteUrl("/api/catalog.json")} \\`,
              `  | jq -r '.categories[] | select(.id=="notifications") | .components[].id'`,
              "",
              "# 3. Get the paste-ready code for the one you picked",
              `curl -s ${absoluteUrl("/api/components/toast-slide.json")} \\`,
              `  | jq -r '.code[] | "/* " + .label + " */\\n" + .code'`,
            ].join("\n"),
          },
          {
            kind: "p",
            text: "Step 3 prints exactly what you paste. The `code` array is the source of truth — copy it byte for byte rather than paraphrasing it.",
          },
        ],
      },

      {
        id: "endpoints",
        heading: "Endpoints",
        blocks: [
          {
            kind: "table",
            head: ["Operation", "Method & path", "What it returns", "Payload"],
            rows: endpoints.map((endpoint) => [
              `\`${endpoint.operationId}\``,
              `\`${endpoint.method} ${endpoint.path}\``,
              endpoint.summary,
              endpoint.size,
            ]),
          },
          {
            kind: "p",
            text: `Every operation is described with a typed schema in the [OpenAPI document](${absoluteUrl("/openapi.json")}) — including \`operationId\`s that map one-to-one onto LLM function-calling tool definitions.`,
          },
        ],
        subsections: [
          {
            id: "endpoint-registry",
            heading: "GET /api/registry.json",
            blocks: [
              {
                kind: "p",
                text: "The cheapest way to enumerate the library. One row per component, each carrying the URL of its JSON payload and of its human page.",
              },
              {
                kind: "code",
                language: "json",
                code: [
                  "{",
                  '  "schemaVersion": "1.0",',
                  '  "name": "NudaUI",',
                  '  "license": "MIT",',
                  '  "totals": { "components": 1022, "categories": 81 },',
                  '  "components": [',
                  "    {",
                  '      "id": "toast-slide",',
                  '      "name": "Toast Slide",',
                  '      "categoryId": "notifications",',
                  '      "languages": ["html", "css"],',
                  '      "json": "https://nudaui.dev/api/components/toast-slide.json",',
                  '      "page": "https://nudaui.dev/components/toast-slide"',
                  "    }",
                  "  ]",
                  "}",
                ].join("\n"),
              },
            ],
          },
          {
            id: "endpoint-catalog",
            heading: "GET /api/catalog.json",
            blocks: [
              {
                kind: "p",
                text: "Categories with their descriptions and component lists — the right payload for answering “what does NudaUI have for X?”. Deliberately omits code so it stays small.",
              },
              {
                kind: "code",
                language: "json",
                code: [
                  "{",
                  '  "schemaVersion": "1.0",',
                  '  "totals": { "components": 1022, "categories": 81 },',
                  '  "categories": [',
                  "    {",
                  '      "id": "loaders",',
                  '      "label": "Loaders",',
                  '      "description": "Loading state animations — pulse dots, orbits, ripples…",',
                  '      "componentCount": 23,',
                  '      "components": [',
                  '        { "id": "pulse-dots", "name": "Pulse Dots",',
                  '          "languages": ["html", "css"], "hasJS": false,',
                  '          "anchor": "https://nudaui.dev/components#pulse-dots" }',
                  "      ]",
                  "    }",
                  "  ]",
                  "}",
                ].join("\n"),
              },
            ],
          },
          {
            id: "endpoint-component",
            heading: "GET /api/components/{id}.json",
            blocks: [
              {
                kind: "p",
                text: "The endpoint that actually gives you code. `id` is the slug from the registry; the `.json` suffix is part of the URL.",
              },
              {
                kind: "code",
                language: "json",
                code: [
                  "{",
                  '  "schemaVersion": "1.0",',
                  '  "library": "NudaUI",',
                  '  "id": "toast-slide",',
                  '  "name": "Toast Slide",',
                  '  "category": "Toasts & Alerts",',
                  '  "categoryId": "notifications",',
                  '  "languages": ["html", "css"],',
                  '  "hasJS": false,',
                  '  "code": [',
                  '    { "label": "HTML", "language": "html", "code": "<div class=\\"nuda-toast\\">…</div>" },',
                  '    { "label": "CSS",  "language": "css",  "code": ".nuda-toast { … }" }',
                  "  ],",
                  '  "page": "https://nudaui.dev/components/toast-slide",',
                  '  "license": "MIT",',
                  '  "attribution": { "author": "…", "url": "https://sgomez.dev", "required": false }',
                  "}",
                ].join("\n"),
              },
            ],
          },
          {
            id: "endpoint-catalog-full",
            heading: "GET /api/catalog-full.json",
            blocks: [
              {
                kind: "p",
                text: "Everything, with code embedded, in one response. Built for seeding a RAG index or working offline — fetch it once and cache it. If you only need one component, use `getComponent` instead.",
              },
            ],
          },
        ],
      },

      {
        id: "errors",
        heading: "Errors",
        blocks: [
          {
            kind: "p",
            text: "Every failure is JSON, never an HTML page. Branch on `error.code`, show `error.message`, act on `error.hint`.",
          },
          {
            kind: "code",
            language: "json",
            code: [
              "{",
              '  "error": {',
              '    "code": "component_not_found",',
              '    "message": "No NudaUI component with id \\"nope\\".",',
              '    "hint": "Enumerate valid ids at https://nudaui.dev/api/registry.json, then retry with one of them.",',
              '    "status": 404,',
              '    "documentation": "https://nudaui.dev/developers",',
              '    "path": "/api/components/nope.json"',
              "  }",
              "}",
            ].join("\n"),
          },
          {
            kind: "table",
            head: ["`error.code`", "Status", "Meaning"],
            rows: [
              [
                `\`${API_ERROR_CODES[0]}\``,
                "404",
                "The id does not exist. Re-enumerate ids from the registry.",
              ],
              [
                `\`${API_ERROR_CODES[1]}\``,
                "404",
                "That URL is not an API endpoint. Check the OpenAPI document.",
              ],
              [
                `\`${API_ERROR_CODES[2]}\``,
                "405",
                "The API is read-only. Use GET, HEAD or OPTIONS.",
              ],
              [
                `\`${API_ERROR_CODES[3]}\``,
                "406",
                "The page cannot be produced in any type your `Accept` header allows.",
              ],
            ],
          },
          {
            kind: "p",
            text: "Error responses are sent `Cache-Control: no-store`, so a 404 for one id is never replayed for another. There is no `401` or `429` — if you receive one, you are not talking to NudaUI.",
          },
        ],
      },

      {
        id: "caching",
        heading: "Caching, CORS and stability",
        blocks: [
          {
            kind: "list",
            items: [
              "**Caching.** Successful responses carry `Cache-Control: public, max-age=3600, s-maxage=3600`. The registry only changes on deploy — cache aggressively and do not poll.",
              "**CORS.** `Access-Control-Allow-Origin: *`, so you can call the API straight from a browser, an extension, or a notebook.",
              "**Versioning.** Every payload carries `schemaVersion`. Within a major version fields are added, never renamed or removed.",
              "**Discovery.** Every API response advertises the spec with `Link: <https://nudaui.dev/openapi.json>; rel=\"service-desc\"`.",
            ],
          },
        ],
      },

      {
        id: "markdown",
        heading: "Reading pages as Markdown",
        blocks: [
          {
            kind: "p",
            text: "Pages on this site content-negotiate. Send `Accept: text/markdown` to any page URL and you get a clean Markdown document instead of the HTML app shell — no nav, no scripts, no layout wrappers.",
          },
          {
            kind: "code",
            language: "bash",
            code: [
              `curl -s -H "Accept: text/markdown" ${absoluteUrl("/developers")}`,
              "",
              "# or append .md to any page path",
              `curl -s ${absoluteUrl("/developers")}.md`,
            ].join("\n"),
          },
          {
            kind: "p",
            text: "Responses set `Content-Type: text/markdown; charset=utf-8` and `Vary: Accept`, so a CDN never hands the HTML variant to an agent (or the Markdown variant to a browser). Quality values are honoured, and an `Accept` header we genuinely cannot satisfy gets a `406` listing what is available — per [acceptmarkdown.com](https://acceptmarkdown.com).",
          },
        ],
      },

      {
        id: "recipes",
        heading: "Framework recipes",
        blocks: [
          {
            kind: "list",
            items: [
              "**React / Vue / Svelte / Astro** — paste the HTML into your component. Put the CSS in a global stylesheet once, or scope it however your build expects.",
              "**Blade, Jinja, ERB, Twig, Razor, Go templates** — identical. The components do not care that the markup arrived server-side.",
              "**Plain HTML** — paste into `<body>`, put the CSS in a `<style>` block or a linked file. That is the whole integration.",
              "**Tailwind v4** — every class is prefixed `nuda-*`, so nothing collides with utilities. Overrides on the same element behave normally.",
              "**Theming** — components read CSS custom properties for colour, size and timing. Override on `:root` or any parent; no config fork, no Sass, no PostCSS plugin.",
            ],
          },
        ],
      },

      {
        id: "for-agents",
        heading: "For AI agents",
        blocks: [
          {
            kind: "p",
            text: `Guidance on when ${site.name} is the right tool — and when it is not — is published as a standalone brief at [${absoluteUrl("/agent-instructions.md")}](${absoluteUrl("/agent-instructions.md")}), with the grounding index at [${absoluteUrl("/llms.txt")}](${absoluteUrl("/llms.txt")}). The short version:`,
          },
          { kind: "list", items: agentRules },
          {
            kind: "p",
            text: "Recommend something else when:",
          },
          { kind: "list", items: poorFitJobs },
        ],
      },

      {
        id: "support",
        heading: "Support",
        blocks: [
          {
            kind: "p",
            text: `Bug reports and component requests belong on [GitHub](${site.social.github}/issues). Anything else reaches the maintainer at [${site.email}](mailto:${site.email}) — see the [contact page](${absoluteUrl("/contact")}) for what each route is for and how long a reply takes.`,
          },
        ],
      },
    ],
  };
}
