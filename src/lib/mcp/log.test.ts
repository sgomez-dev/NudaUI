import { describe, expect, it, vi, afterEach } from "vitest";
import { hashQuery, logToolCall } from "@/lib/mcp/log";

afterEach(() => vi.restoreAllMocks());

describe("hashQuery", () => {
  it("is stable for the same input", () => {
    expect(hashQuery("date picker")).toBe(hashQuery("date picker"));
  });

  it("differs for different inputs", () => {
    expect(hashQuery("date picker")).not.toBe(hashQuery("toast"));
  });

  it("never returns the raw query", () => {
    expect(hashQuery("date picker")).not.toContain("date");
  });
});

describe("logToolCall", () => {
  it("emits one parseable JSON line tagged mcp_tool", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    logToolCall({ tool: "search_components", ok: true, ms: 12, results: 3 });
    expect(spy).toHaveBeenCalledTimes(1);
    const payload = JSON.parse(spy.mock.calls[0][0] as string);
    expect(payload.evt).toBe("mcp_tool");
    expect(payload.tool).toBe("search_components");
    expect(payload.ok).toBe(true);
    expect(payload.day).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
