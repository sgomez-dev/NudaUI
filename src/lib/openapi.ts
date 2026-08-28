/**
 * The OpenAPI 3.1 description of the NudaUI read-only API.
 *
 * This is the file that lets an agent use NudaUI without being told how:
 * every operation carries a unique `operationId`, a one-line `summary`, a
 * `description` that says when to reach for it, typed parameters, and a full
 * response schema. That is exactly the shape an LLM function-calling layer
 * needs to generate a tool definition automatically.
 *
 * Kept as a pure builder (no `Response`, no Next imports) so the spec can be
 * asserted in tests without booting a server.
 *
 * Spec: https://spec.openapis.org/oas/v3.1.0
 */

import { absoluteUrl, site } from "@/lib/site";

/** Bumped when the response shapes change in a breaking way. */
export const OPENAPI_API_VERSION = "1.0.0";

type Json = Record<string, unknown>;

const errorSchemaRef = { $ref: "#/components/schemas/Error" } as const;

/** `application/json` response body wrapper — used by every 2xx/4xx entry. */
function jsonBody(schemaRef: Json, description: string): Json {
  return {
    description,
    content: { "application/json": { schema: schemaRef } },
  };
}

function errorResponse(description: string): Json {
  return jsonBody(errorSchemaRef, description);
}

/** Responses every endpoint can return, so no failure mode is undocumented. */
const commonErrors: Json = {
  "405": errorResponse(
    "The request method is not supported. The API is read-only."
  ),
};

export function openApiDocument(): Json {
  return {
    openapi: "3.1.0",

    info: {
      title: "NudaUI Component API",
      version: OPENAPI_API_VERSION,
      summary:
        "Read-only JSON access to every NudaUI copy-paste UI animation and its source code.",
      description: [
        "The NudaUI API exposes the entire component registry as static, CDN-cached JSON.",
        "",
        "**When to use it.** Reach for this API when you need production-ready HTML/CSS",
        "(plus occasional vanilla JS) for a UI animation — a loader, toast, skeleton,",
        "hover card, stepper, chart, empty state — and you do not want to add a runtime",
        "dependency to the target project. The code returned is framework-agnostic: it",
        "pastes unchanged into React, Vue, Svelte, Astro, Blade, Jinja, ERB, or a single",
        ".html file.",
        "",
        "**How to use it.** Call `getRegistry` (or `getCatalog`) once to enumerate ids,",
        "then `getComponent` for the paste-ready code of the one you picked. If you need",
        "the whole library in a single request — seeding a RAG index, working offline —",
        "call `getCatalogFull`.",
        "",
        "**Auth.** None. No API key, no account, no signup. Every endpoint is public,",
        "`Access-Control-Allow-Origin: *`, and safe to call from a browser.",
        "",
        "**Rate limits.** None enforced. Responses are static and served from a CDN with",
        "a one-hour TTL; please cache them rather than polling.",
        "",
        "**Stability.** Every payload carries a `schemaVersion`. Fields are added, never",
        "renamed or removed, within a major version.",
      ].join("\n"),
      termsOfService: absoluteUrl("/terms"),
      contact: {
        name: `${site.name} maintainer`,
        email: site.email,
        url: absoluteUrl("/contact"),
      },
      license: {
        name: "MIT",
        identifier: "MIT",
      },
    },

    externalDocs: {
      description: "NudaUI developer portal — quickstart, recipes, examples",
      url: absoluteUrl("/developers"),
    },

    servers: [{ url: site.url, description: "Production" }],

    // No authentication anywhere. Declaring it explicitly stops agents from
    // hunting for a key that does not exist.
    security: [],

    tags: [
      {
        name: "Discovery",
        description:
          "Enumerate the catalog: what components exist, in which categories.",
      },
      {
        name: "Components",
        description: "Fetch the paste-ready source code of a component.",
      },
      {
        name: "Agents",
        description:
          "Documents written for machine consumption: this spec, llms.txt, and the agent instructions.",
      },
    ],

    paths: {
      "/api/catalog.json": {
        get: {
          operationId: "getCatalog",
          tags: ["Discovery"],
          summary: "List every component and category (metadata only)",
          description:
            "The canonical, lean index of the library: every category with its description and every component id, display name and language mix — but no source code. Use this to answer 'what does NudaUI have?' and to resolve a human description ('a toast that slides in') to a component id. Roughly 200 KB; prefer it over scraping the client-rendered gallery.",
          responses: {
            "200": jsonBody(
              { $ref: "#/components/schemas/Catalog" },
              "The full catalog, metadata only."
            ),
            ...commonErrors,
          },
        },
      },

      "/api/catalog-full.json": {
        get: {
          operationId: "getCatalogFull",
          tags: ["Discovery", "Components"],
          summary: "List every component with its complete source code",
          description:
            "Everything `getCatalog` returns, plus the complete HTML/CSS/JS of every component inlined. One request for the entire library — the right call when seeding a RAG index or working offline. Multi-megabyte; if you only need one component, call `getComponent` instead.",
          responses: {
            "200": jsonBody(
              { $ref: "#/components/schemas/CatalogFull" },
              "The full catalog with code embedded."
            ),
            ...commonErrors,
          },
        },
      },

      "/api/registry.json": {
        get: {
          operationId: "getRegistry",
          tags: ["Discovery"],
          summary: "Flat index of every component id and its fetch URLs",
          description:
            "A shadcn-style flat list: one entry per component with its id, category, languages, the URL of its JSON payload, and the URL of its human page. The cheapest way to enumerate ids before fanning out to `getComponent`.",
          responses: {
            "200": jsonBody(
              { $ref: "#/components/schemas/Registry" },
              "Flat component index."
            ),
            ...commonErrors,
          },
        },
      },

      "/api/components/{id}.json": {
        get: {
          operationId: "getComponent",
          tags: ["Components"],
          summary: "Fetch one component's paste-ready source code",
          description:
            "Returns the complete, paste-ready HTML + CSS (+ vanilla JS when the component needs it) for a single component. The `code` array is the source of truth — copy it verbatim. Ids come from `getRegistry` or `getCatalog`.",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description:
                "Component id slug, e.g. `toast-slide`. Lower-case, hyphen-separated. Do not include the `.json` suffix — it is part of the URL template.",
              schema: {
                type: "string",
                pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$",
                examples: ["toast-slide", "pulse-dots"],
              },
            },
          ],
          responses: {
            "200": jsonBody(
              { $ref: "#/components/schemas/Component" },
              "The component and its complete code."
            ),
            "404": errorResponse(
              "No component with that id. `error.code` is `component_not_found`."
            ),
            ...commonErrors,
          },
        },
      },

      "/openapi.json": {
        get: {
          operationId: "getOpenApiDocument",
          tags: ["Agents"],
          summary: "Fetch this OpenAPI document",
          description:
            "This specification, self-hosted so a tool can bootstrap from a single known URL. Also advertised as `Link: <…>; rel=\"service-desc\"` on every API response.",
          responses: {
            "200": {
              description: "The OpenAPI 3.1 document.",
              content: {
                "application/json": {
                  schema: { type: "object", additionalProperties: true },
                },
              },
            },
            ...commonErrors,
          },
        },
      },

      "/llms.txt": {
        get: {
          operationId: "getLlmsIndex",
          tags: ["Agents"],
          summary: "Fetch the llms.txt grounding index",
          description:
            "The llmstxt.org index: what NudaUI is, when to use it, every category with a one-line gloss, the FAQ, and the licensing stance — in Markdown, ready to drop into a context window.",
          responses: {
            "200": {
              description: "Markdown index for language models.",
              content: { "text/markdown": { schema: { type: "string" } } },
            },
          },
        },
      },

      "/agent-instructions.md": {
        get: {
          operationId: "getAgentInstructions",
          tags: ["Agents"],
          summary: "Fetch the when-to-use guidance for agents",
          description:
            "A short Markdown brief telling an agent which jobs NudaUI is the right tool for, which jobs it is not, and the exact call sequence for each supported task.",
          responses: {
            "200": {
              description: "Markdown agent instructions.",
              content: { "text/markdown": { schema: { type: "string" } } },
            },
          },
        },
      },
    },

    components: {
      schemas: {
        Error: {
          type: "object",
          description:
            "Every non-2xx response from the NudaUI API uses this shape. Branch on `error.code`, show `error.message`, act on `error.hint`.",
          required: ["error"],
          additionalProperties: false,
          properties: {
            error: {
              type: "object",
              required: ["code", "message", "hint", "status", "documentation"],
              additionalProperties: false,
              properties: {
                code: {
                  type: "string",
                  description:
                    "Stable machine-readable code. Safe to branch on; never renamed.",
                  enum: [
                    "component_not_found",
                    "endpoint_not_found",
                    "method_not_allowed",
                    "not_acceptable",
                  ],
                },
                message: {
                  type: "string",
                  description: "One-sentence human-readable explanation.",
                },
                hint: {
                  type: "string",
                  description:
                    "What to do next to turn this into a successful request.",
                },
                status: {
                  type: "integer",
                  description: "HTTP status code, mirrored in the body.",
                  examples: [404],
                },
                documentation: {
                  type: "string",
                  format: "uri",
                  description: "Where to read more.",
                },
                path: {
                  type: "string",
                  description: "The request path that failed.",
                },
              },
            },
          },
        },

        Totals: {
          type: "object",
          description: "Catalog size at the time the payload was generated.",
          required: ["components", "categories"],
          additionalProperties: false,
          properties: {
            components: { type: "integer", description: "Total components." },
            categories: { type: "integer", description: "Total categories." },
          },
        },

        CodeTab: {
          type: "object",
          description:
            "One tab of a component's source. Copy `code` verbatim — it is already paste-ready.",
          required: ["label", "language", "code"],
          additionalProperties: false,
          properties: {
            label: {
              type: "string",
              description: "Tab label as shown in the gallery.",
              examples: ["HTML", "CSS"],
            },
            language: {
              type: "string",
              description: "Language of this tab.",
              enum: ["html", "css", "javascript"],
            },
            code: { type: "string", description: "The source itself." },
          },
        },

        Attribution: {
          type: "object",
          description:
            "Who wrote the component. `required` is always false — MIT, attribution appreciated but optional.",
          required: ["author", "url", "required"],
          additionalProperties: false,
          properties: {
            author: { type: "string" },
            url: { type: "string", format: "uri" },
            required: { type: "boolean", const: false },
          },
        },

        ComponentSummary: {
          type: "object",
          description: "A component as it appears in the metadata catalog.",
          required: ["id", "name", "languages", "hasJS", "anchor"],
          additionalProperties: false,
          properties: {
            id: {
              type: "string",
              description: "Stable slug. Pass this to `getComponent`.",
              pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$",
              examples: ["toast-slide"],
            },
            name: { type: "string", description: "Human display name." },
            languages: {
              type: "array",
              description: "Languages present in this component's code tabs.",
              items: { type: "string", enum: ["html", "css", "javascript"] },
            },
            hasJS: {
              type: "boolean",
              description:
                "True when the component needs vanilla JS to work. False means pure HTML + CSS.",
            },
            anchor: {
              type: "string",
              format: "uri",
              description: "Deep link to this component in the gallery.",
            },
          },
        },

        Component: {
          type: "object",
          description:
            "One component with its complete, paste-ready source code.",
          required: [
            "schemaVersion",
            "library",
            "homepage",
            "id",
            "name",
            "category",
            "categoryId",
            "languages",
            "hasJS",
            "code",
            "page",
            "anchor",
            "license",
            "attribution",
          ],
          additionalProperties: false,
          properties: {
            schemaVersion: { type: "string", const: "1.0" },
            library: { type: "string", const: "NudaUI" },
            homepage: { type: "string", format: "uri" },
            id: {
              type: "string",
              pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$",
              examples: ["toast-slide"],
            },
            name: { type: "string" },
            category: {
              type: "string",
              description: "Human category label, e.g. `Toasts & Alerts`.",
            },
            categoryId: {
              type: "string",
              description: "Category slug, e.g. `notifications`.",
            },
            languages: {
              type: "array",
              items: { type: "string", enum: ["html", "css", "javascript"] },
            },
            hasJS: { type: "boolean" },
            code: {
              type: "array",
              description: "The source tabs. This is what you paste.",
              items: { $ref: "#/components/schemas/CodeTab" },
            },
            cssInline: {
              type: "string",
              description:
                "Optional extra CSS the live preview injects. Present only on components that need it.",
            },
            page: {
              type: "string",
              format: "uri",
              description: "Human-readable page for this component.",
            },
            anchor: {
              type: "string",
              format: "uri",
              description: "Deep link into the gallery.",
            },
            license: { type: "string", const: "MIT" },
            attribution: { $ref: "#/components/schemas/Attribution" },
          },
        },

        CategorySummary: {
          type: "object",
          description: "A category and the components inside it (metadata).",
          required: [
            "id",
            "label",
            "description",
            "url",
            "componentCount",
            "components",
          ],
          additionalProperties: false,
          properties: {
            id: { type: "string", examples: ["loaders"] },
            label: { type: "string", examples: ["Loaders"] },
            description: {
              type: "string",
              description: "One-line gloss of what the category is for.",
            },
            url: { type: "string", format: "uri" },
            componentCount: { type: "integer" },
            components: {
              type: "array",
              items: { $ref: "#/components/schemas/ComponentSummary" },
            },
          },
        },

        CategoryWithCode: {
          type: "object",
          description: "A category whose components carry their full code.",
          required: [
            "id",
            "label",
            "description",
            "url",
            "componentCount",
            "components",
          ],
          additionalProperties: false,
          properties: {
            id: { type: "string" },
            label: { type: "string" },
            description: { type: "string" },
            url: { type: "string", format: "uri" },
            componentCount: { type: "integer" },
            components: {
              type: "array",
              items: { $ref: "#/components/schemas/Component" },
            },
          },
        },

        Links: {
          type: "object",
          description:
            "Sibling endpoints, so one response is enough to discover the rest.",
          additionalProperties: { type: "string" },
        },

        Catalog: {
          type: "object",
          description: "Metadata mirror of the entire registry.",
          required: [
            "schemaVersion",
            "name",
            "description",
            "homepage",
            "license",
            "generatedAt",
            "totals",
            "categories",
          ],
          properties: {
            schemaVersion: { type: "string", const: "1.0" },
            name: { type: "string", const: "NudaUI" },
            tagline: { type: "string" },
            description: { type: "string" },
            homepage: { type: "string", format: "uri" },
            repository: { type: "string", format: "uri" },
            license: { type: "string", const: "MIT" },
            generatedAt: {
              type: "string",
              format: "date-time",
              description: "When this payload was rendered.",
            },
            totals: { $ref: "#/components/schemas/Totals" },
            categories: {
              type: "array",
              items: { $ref: "#/components/schemas/CategorySummary" },
            },
            links: { $ref: "#/components/schemas/Links" },
          },
        },

        CatalogFull: {
          type: "object",
          description: "The entire registry with every component's code.",
          required: [
            "schemaVersion",
            "name",
            "homepage",
            "license",
            "generatedAt",
            "totals",
            "categories",
          ],
          properties: {
            schemaVersion: { type: "string", const: "1.1" },
            name: { type: "string", const: "NudaUI" },
            description: { type: "string" },
            homepage: { type: "string", format: "uri" },
            repository: { type: "string", format: "uri" },
            license: { type: "string", const: "MIT" },
            generatedAt: { type: "string", format: "date-time" },
            totals: { $ref: "#/components/schemas/Totals" },
            note: { type: "string" },
            categories: {
              type: "array",
              items: { $ref: "#/components/schemas/CategoryWithCode" },
            },
            links: { $ref: "#/components/schemas/Links" },
          },
        },

        RegistryEntry: {
          type: "object",
          description: "One row of the flat registry index.",
          required: ["id", "name", "categoryId", "languages", "json", "page"],
          additionalProperties: false,
          properties: {
            id: { type: "string", pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$" },
            name: { type: "string" },
            categoryId: { type: "string" },
            languages: {
              type: "array",
              items: { type: "string", enum: ["html", "css", "javascript"] },
            },
            json: {
              type: "string",
              format: "uri",
              description: "Call this URL to get the component's code.",
            },
            page: {
              type: "string",
              format: "uri",
              description: "Human-readable page for this component.",
            },
          },
        },

        Registry: {
          type: "object",
          description: "Flat index of every component.",
          required: [
            "schemaVersion",
            "name",
            "homepage",
            "license",
            "totals",
            "components",
          ],
          additionalProperties: false,
          properties: {
            schemaVersion: { type: "string", const: "1.0" },
            name: { type: "string", const: "NudaUI" },
            homepage: { type: "string", format: "uri" },
            license: { type: "string", const: "MIT" },
            totals: { $ref: "#/components/schemas/Totals" },
            components: {
              type: "array",
              items: { $ref: "#/components/schemas/RegistryEntry" },
            },
          },
        },
      },
    },
  };
}
