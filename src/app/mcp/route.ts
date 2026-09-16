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
import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { totalCount } from "@/components/showcase/registry/categories";
import { hashQuery } from "@/lib/mcp/log";
import { runInstrumented } from "@/lib/mcp/instrument";
import {
  getComponent,
  listCategories,
  searchComponentsTool,
} from "@/lib/mcp/tools";

export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * Best-effort caller identity for the usage log.
 *
 * Investigated against the installed `mcp-handler@2.1.1` /
 * `@modelcontextprotocol/server@2.0.0`: protocol revision 2026-07-28 moved
 * client identity off the (now-removed) `initialize` session and onto a
 * per-request `_meta` envelope (`io.modelcontextprotocol/clientInfo`), sent
 * as a claim on every request, tools/call included — see
 * `RESERVED_ENVELOPE_META_KEYS` / `seedClientIdentityFromEnvelope` in
 * `@modelcontextprotocol/server/dist/src-*.mjs`. Confirmed reachable here:
 * for each request this endpoint's stateless HTTP entry builds a fresh
 * `McpServer` (`factory()` in `serveModern`), seeds it from that request's
 * envelope, and only then invokes the tool handler — so `server.server
 * .getClientVersion()` reflects the correct request's `clientInfo` at the
 * time a handler runs, with no cross-request leakage despite being
 * instance-scoped, because the instance itself is per-request. That
 * accessor is `@deprecated` in favor of reading `ctx.mcpReq.envelope`
 * directly on a handler's second argument, but the recommended replacement
 * is not practically usable at this SDK build: `RequestMetaEnvelope` (the
 * type of that field) is bundled out to a bare `{}` in the shipped
 * `.d.mts`, so reading it back requires an `as any` the deprecated
 * accessor doesn't. `getClientVersion()` remains functional per its own
 * doc comment, so it is used here instead.
 *
 * `clientInfo` on the envelope is optional (spec PR #3002 demoted it from
 * MUST to SHOULD), so a compliant client may legitimately omit it — expect
 * `client` to be `undefined` for some, possibly most, real callers.
 *
 * Defensive on purpose: `getClientVersion()` is a trivial getter on the
 * installed SDK today, but it is `@deprecated` and could change shape
 * under us. This call happens at each tool's log call site, outside
 * `runInstrumented`'s own try/catch — if it ever threw there, the catch
 * branch's own `logToolCall(...)` call would throw a second time before
 * reaching `throw err`, which would drop the log line entirely *and* mask
 * the original error. Swallowing failures here, once, keeps that
 * impossible regardless of what this accessor does in a future SDK.
 */
function clientIdentity(server: McpServer): string | undefined {
  try {
    const info = server.server.getClientVersion();
    return info ? `${info.name}/${info.version}` : undefined;
  } catch {
    return undefined;
  }
}

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
        const data = await runInstrumented(
          "list_categories",
          { client: clientIdentity(server) },
          () => listCategories(),
        );
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
        const result = await runInstrumented(
          "get_component",
          { client: clientIdentity(server), componentId: id },
          () => getComponent(id),
          (r) => ({ ok: r.found }),
        );
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
        const result = await runInstrumented(
          "search_components",
          { client: clientIdentity(server), queryHash: hashQuery(args.query) },
          () => searchComponentsTool(args),
          (r) => ({
            results: r.count,
            zeroResults: r.count === 0,
            degraded: r.degraded,
          }),
        );
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
