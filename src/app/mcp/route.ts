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
import { hashQuery, hashUserAgent, logToolCall, normalizeComponentId } from "@/lib/mcp/log";
import { runInstrumented } from "@/lib/mcp/instrument";
import {
  getComponent,
  listCategories,
  searchComponentsTool,
} from "@/lib/mcp/tools";

export const runtime = "nodejs";
// The work budget is ~6s (RAG_TIMEOUT_MS in tools.ts, the only outbound
// fetch this endpoint makes) plus registry work that is in-process and
// fast. 60s was copied from a template default and never sized to this
// endpoint's actual budget.
export const maxDuration = 20;

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
 * `client` to be `undefined` for some, possibly most, real callers. That is
 * exactly the gap `currentUaHash()` below exists to cover: it never
 * replaces `client`, only backstops it so "distinct clients per day" stays
 * answerable even when this accessor comes back empty.
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

/**
 * Best-effort, hashed User-Agent for the usage log — the secondary identity
 * bucket the stopping criterion needs when `clientIdentity()` comes back
 * `undefined` (see the note there).
 *
 * `headers()` from `next/headers` is a Next.js App Router primitive backed
 * by request-scoped `AsyncLocalStorage`, populated for the whole lifetime of
 * a Route Handler invocation — including code reached only through nested
 * `await`s, which is exactly the shape here: this function is called from
 * inside a `registerTool` callback several layers below the exported
 * `GET`/`POST` functions, through `mcp-handler`'s own dispatch. That chain
 * is plain `async`/`await` throughout (no bare callbacks or timers that
 * would drop out of the async context), so Node's `AsyncLocalStorage`
 * propagates correctly through it.
 *
 * Verified live, not assumed: a `tools/call` request sent with
 * `User-Agent: ExperimentUA/1.0` against `next dev` produced
 * `EXPERIMENT headers() ua= ExperimentUA/1.0` from inside this exact call
 * site before this function existed in its final form — see the captured
 * log line in the final fix report. `ctx`, the handler's second argument,
 * was the other candidate raised for this; it was not tried once `headers()`
 * was confirmed working, since introducing a second mechanism for the same
 * fact would be redundant.
 *
 * Wrapped in try/catch for the same reason as `clientIdentity()`: this must
 * never throw into `runInstrumented`'s own catch block, which would mask
 * the original error and drop the log line.
 */
async function currentUaHash(): Promise<string | undefined> {
  try {
    const { headers } = await import("next/headers");
    const h = await headers();
    return hashUserAgent(h.get("user-agent"));
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
          { client: clientIdentity(server), uaHash: await currentUaHash() },
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
          {
            client: clientIdentity(server),
            uaHash: await currentUaHash(),
            componentId: normalizeComponentId(id),
          },
          () => getComponent(id),
          (r) => ({ ok: r.found }),
        );
        // One parseable JSON object on every path, success or not-found:
        // the not-found branch's `suggestions` and `hint` are structured
        // data an agent can act on programmatically, not prose to parse.
        // `isError` stays true for this branch — it is a real tool-level
        // failure — but the body underneath it is still valid JSON.
        return {
          ...(result.found ? {} : { isError: true as const }),
          content: [
            { type: "text", text: JSON.stringify(result, null, 2) },
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
          {
            client: clientIdentity(server),
            uaHash: await currentUaHash(),
            queryHash: hashQuery(args.query),
          },
          () => searchComponentsTool(args),
          (r) => ({
            results: r.count,
            zeroResults: r.count === 0,
            degraded: r.degraded,
            hydratedCount: r.hydratedCount,
          }),
        );
        // Same rule as get_component: one parseable JSON object on every
        // path. The degraded note is a field inside that object, not prose
        // prepended before it — the old `"NOTE: …\n\n" + JSON.stringify(...)`
        // shape parsed on the happy path and threw on exactly the path an
        // agent most needs structured data: when the index is down.
        const payload = result.degraded
          ? {
              ...result,
              note:
                "The semantic index did not respond in time, so these results use basic keyword matching and may rank poorly.",
            }
          : result;
        return {
          content: [
            { type: "text", text: JSON.stringify(payload, null, 2) },
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

/**
 * CORS for `/mcp`, matching the rest of the project's machine-readable
 * surface (`JSON_HEADERS` in `@/lib/api-error`): every endpoint here is
 * deliberately CORS-open so a browser-hosted client — MCP Inspector chief
 * among them — doesn't fail preflight. Kept local to this route rather than
 * imported from `api-error.ts`: that module's headers assume GET/HEAD/OPTIONS
 * and a JSON response body, neither of which fits a streamable-HTTP MCP
 * endpoint that also accepts POST and can answer with `text/event-stream`.
 *
 * `Access-Control-Expose-Headers: Mcp-Protocol-Version` lets a browser-hosted
 * client read that response header cross-origin — without it, the header
 * arrives but JS in the page cannot see it.
 */
const MCP_CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Accept, Mcp-Protocol-Version, Mcp-Session-Id, Last-Event-ID",
  "Access-Control-Expose-Headers": "Mcp-Protocol-Version",
};

/** Attach the CORS headers to an actual GET/POST response without touching its body or status. */
function withCors(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(MCP_CORS_HEADERS)) {
    headers.set(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

/** CORS preflight. `mcp-handler` exports no OPTIONS of its own for this endpoint. */
export function OPTIONS(): Response {
  return new Response(null, {
    status: 204,
    headers: { ...MCP_CORS_HEADERS, "Access-Control-Max-Age": "86400" },
  });
}

/**
 * Instruments `tools/list` and applies CORS to every GET/POST response.
 *
 * `tools/list` has no `registerTool` callback to hook into runInstrumented
 * from — it is answered entirely inside the SDK's own dispatch — so it is
 * instrumented here instead, at the HTTP boundary, by peeking at a cloned
 * request body for its JSON-RPC `method` before delegating to `handler`.
 * Without this, "found the server but never called a tool" is
 * indistinguishable from "never found the server at all" in the logs, which
 * matters for a go/no-go read on discovery. Cloning + a failed `.json()`
 * parse (e.g. a bodyless GET opening an SSE stream) is cheap and always
 * caught, so this can never break a real request.
 */
async function withInstrumentation(request: Request): Promise<Response> {
  const started = Date.now();
  let isToolsList = false;
  try {
    const body = (await request.clone().json()) as { method?: string } | null;
    isToolsList = body?.method === "tools/list";
  } catch {
    // No JSON body (a GET stream-open, or a non-JSON-RPC request) — not a
    // tools/list call.
  }

  const response = await handler(request);

  if (isToolsList) {
    logToolCall({
      tool: "tools/list",
      ok: response.ok,
      ms: Date.now() - started,
      uaHash: hashUserAgent(request.headers.get("user-agent")),
    });
  }

  return withCors(response);
}

export { withInstrumentation as GET, withInstrumentation as POST };
