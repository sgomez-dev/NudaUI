import { afterEach, describe, expect, it, vi } from "vitest";
import { GET, OPTIONS, POST } from "@/app/mcp/route";
import { allComponents } from "@/lib/component-payload";

function rpcRequest(
  body: unknown,
  headers: Record<string, string> = {},
): Request {
  return new Request("http://localhost/mcp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

/** Extract and parse the JSON-RPC `result` from an SSE-framed response body. */
async function rpcResult(response: Response): Promise<unknown> {
  const raw = await response.text();
  const dataLine = raw.split("\n").find((line) => line.startsWith("data: "));
  if (!dataLine) throw new Error(`No SSE data line in response: ${raw}`);
  return JSON.parse(dataLine.slice("data: ".length)).result;
}

/** Parse a tool call's `content[0].text` as JSON — the assertion at the
 * heart of this file: every tool, on every path, must produce parseable JSON,
 * never prose. */
async function toolPayload(response: Response): Promise<{
  isError?: boolean;
  data: Record<string, unknown>;
}> {
  const result = (await rpcResult(response)) as {
    isError?: boolean;
    content: { type: string; text: string }[];
  };
  return { isError: result.isError, data: JSON.parse(result.content[0].text) };
}

afterEach(() => vi.restoreAllMocks());

describe("POST /mcp", () => {
  it("list_categories returns parseable JSON", async () => {
    const response = await POST(
      rpcRequest({
        jsonrpc: "2.0",
        id: 1,
        method: "tools/call",
        params: { name: "list_categories", arguments: {} },
      }),
    );
    expect(response.status).toBe(200);
    const { data } = await toolPayload(response);
    expect((data as { categoryCount: number }).categoryCount).toBeGreaterThan(
      0,
    );
  });

  it("get_component returns parseable JSON on the found path", async () => {
    const realId = allComponents()[0].component.id;
    const response = await POST(
      rpcRequest({
        jsonrpc: "2.0",
        id: 2,
        method: "tools/call",
        params: { name: "get_component", arguments: { id: realId } },
      }),
    );
    const { isError, data } = await toolPayload(response);
    expect(isError).toBeUndefined();
    expect((data as { found: boolean }).found).toBe(true);
    expect((data as { component: { id: string } }).component.id).toBe(realId);
  });

  it("get_component returns parseable, structured JSON on the not-found path — suggestions and hint intact, not prose", async () => {
    const response = await POST(
      rpcRequest({
        jsonrpc: "2.0",
        id: 3,
        method: "tools/call",
        params: {
          name: "get_component",
          arguments: { id: "toast-slide-xyz-nope" },
        },
      }),
    );
    const { isError, data } = await toolPayload(response);
    expect(isError).toBe(true);
    const notFound = data as {
      found: boolean;
      suggestions: { id: string }[];
      hint: string;
    };
    expect(notFound.found).toBe(false);
    expect(Array.isArray(notFound.suggestions)).toBe(true);
    expect(notFound.suggestions.length).toBeGreaterThan(0);
    expect(notFound.hint).toContain("/api/registry.json");
  });

  it("search_components returns parseable JSON on the happy path", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ query: "toast", count: 0, results: [] }),
    } as Response);

    const response = await POST(
      rpcRequest({
        jsonrpc: "2.0",
        id: 4,
        method: "tools/call",
        params: {
          name: "search_components",
          arguments: { query: "toast", limit: 5 },
        },
      }),
    );
    const { data } = await toolPayload(response);
    expect((data as { degraded: boolean }).degraded).toBe(false);
    expect((data as { note?: string }).note).toBeUndefined();
  });

  it("search_components returns one parseable JSON object — not prose + JSON — when the index is unreachable", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(
      new TypeError("network error"),
    );

    const response = await POST(
      rpcRequest({
        jsonrpc: "2.0",
        id: 5,
        method: "tools/call",
        params: {
          name: "search_components",
          arguments: { query: "toast", limit: 5 },
        },
      }),
    );
    const { data } = await toolPayload(response);
    const degraded = data as { degraded: boolean; note: string };
    expect(degraded.degraded).toBe(true);
    // The degraded note is a field inside the object, not text prepended
    // before it — this is the exact regression #2 exists to guard: the old
    // shape was `"NOTE: …\n\n" + JSON.stringify(result)`, which failed
    // `JSON.parse` on exactly this path.
    expect(typeof degraded.note).toBe("string");
    expect(degraded.note.toLowerCase()).toContain("did not respond in time");
    expect(degraded.note.toLowerCase()).not.toContain("unreachable");
  });

  it("logs a tools/list event distinct from a tool call", async () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const response = await POST(
      rpcRequest({ jsonrpc: "2.0", id: 6, method: "tools/list", params: {} }),
    );
    expect(response.status).toBe(200);
    const line = spy.mock.calls
      .map((c) => c[0] as string)
      .find((l) => typeof l === "string" && l.includes('"tools/list"'));
    expect(line).toBeDefined();
    const payload = JSON.parse(line as string);
    expect(payload.evt).toBe("mcp_tool");
    expect(payload.tool).toBe("tools/list");
    expect(payload.ok).toBe(true);
  });

  it("carries CORS headers on the actual response", async () => {
    const response = await POST(
      rpcRequest({ jsonrpc: "2.0", id: 7, method: "tools/list", params: {} }),
    );
    expect(response.headers.get("access-control-allow-origin")).toBe("*");
    expect(response.headers.get("access-control-expose-headers")).toBe(
      "Mcp-Protocol-Version",
    );
  });
});

describe("OPTIONS /mcp", () => {
  it("answers a CORS preflight with 204 and the required headers", () => {
    const response = OPTIONS();
    expect(response.status).toBe(204);
    expect(response.headers.get("access-control-allow-origin")).toBe("*");
    expect(response.headers.get("access-control-allow-methods")).toContain(
      "POST",
    );
    expect(response.headers.get("access-control-expose-headers")).toBe(
      "Mcp-Protocol-Version",
    );
  });
});

describe("GET /mcp", () => {
  it("is exported and carries CORS headers too", async () => {
    // A bare GET with no body opens an SSE stream in real usage; here we
    // only assert it doesn't throw and still carries CORS headers.
    const response = await GET(
      new Request("http://localhost/mcp", {
        method: "GET",
        headers: { Accept: "text/event-stream" },
      }),
    );
    expect(response.headers.get("access-control-allow-origin")).toBe("*");
  });
});
