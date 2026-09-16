/**
 * /mcp — NudaUI's remote Model Context Protocol endpoint.
 *
 * Zero install: a user pastes this URL into their MCP client and gets
 * search, retrieval and browsing over the entire copy-paste component
 * catalog. There is deliberately no npm package — consistent with the
 * rest of the project, the scriptable interface is a URL.
 *
 * Stateless per MCP revision 2026-07-28: no handshake, no session id, so
 * any request can land on any Vercel instance with no shared storage.
 */
import { createMcpHandler } from "mcp-handler";
import { z } from "zod";
import { totalCount } from "@/components/showcase/registry/categories";
import {
  getComponent,
  listCategories,
  searchComponentsTool,
} from "@/lib/mcp/tools";

export const runtime = "nodejs";
export const maxDuration = 60;

const handler = createMcpHandler(
  (server) => {
    server.registerTool(
      "list_categories",
      {
        title: "List NudaUI categories",
        description:
          "List all NudaUI component categories with a description of when to use each one and how many components it holds. Call this first when a request is vague about what kind of UI is needed.",
        inputSchema: z.object({}),
      },
      async () => {
        const data = listCategories();
        return {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        };
      },
    );

    server.registerTool(
      "get_component",
      {
        title: "Get a NudaUI component",
        description:
          "Fetch the complete, paste-ready code for one NudaUI component by id: HTML, CSS, and JavaScript where the pattern needs it. Ids come from search_components or list_categories.",
        inputSchema: z.object({
          id: z
            .string()
            .min(1)
            .describe("Component id, e.g. 'toast-slide'. A trailing .json is accepted."),
        }),
      },
      async ({ id }) => {
        const result = getComponent(id);
        if (!result.found) {
          return {
            isError: true,
            content: [
              {
                type: "text",
                text: `No NudaUI component with id "${result.id}".${
                  result.suggestions.length
                    ? ` Did you mean: ${result.suggestions.map((s) => s.id).join(", ")}?`
                    : ""
                } ${result.hint}`,
              },
            ],
          };
        }
        return {
          content: [
            { type: "text", text: JSON.stringify(result.component, null, 2) },
          ],
        };
      },
    );

    server.registerTool(
      "search_components",
      {
        title: "Search NudaUI components",
        description:
          `Search ${totalCount.toLocaleString("en-US")} copy-paste CSS and JS UI components by natural-language description, e.g. 'accessible date picker' or 'toast that slides in'. Returns ids to pass to get_component. Optionally filter by category id or by whether the component needs JavaScript.`,
        inputSchema: z.object({
          query: z
            .string()
            .min(3)
            .describe("Natural-language description of the UI you need."),
          category: z
            .string()
            .optional()
            .describe("Restrict to one category id, from list_categories."),
          hasJS: z
            .boolean()
            .optional()
            .describe("true for components that ship JS; false for CSS-only."),
          limit: z.number().int().min(1).max(20).optional().default(8),
        }),
      },
      async (args) => {
        const result = await searchComponentsTool(args);
        const note = result.degraded
          ? "NOTE: the semantic index was unreachable; these results use basic keyword matching and may rank poorly.\n\n"
          : "";
        return {
          content: [
            { type: "text", text: note + JSON.stringify(result, null, 2) },
          ],
        };
      },
    );
  },
  {
    // Overrides mcp-handler's default ("mcp-typescript server on vercel",
    // 0.1.0) — that string is what every MCP client UI displays, and what
    // a future registry listing will carry.
    serverInfo: { name: "nudaui", version: "1.0.0" },
  },
);

export { handler as GET, handler as POST };
