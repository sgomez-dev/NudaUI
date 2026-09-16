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
import { listCategories } from "@/lib/mcp/tools";

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
  },
  {
    // Overrides mcp-handler's default ("mcp-typescript server on vercel",
    // 0.1.0) — that string is what every MCP client UI displays, and what
    // a future registry listing will carry.
    serverInfo: { name: "nudaui", version: "1.0.0" },
  },
);

export { handler as GET, handler as POST };
