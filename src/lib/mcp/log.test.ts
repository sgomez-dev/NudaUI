import { describe, expect, it, vi, afterEach } from "vitest";
import {
  hashQuery,
  hashUserAgent,
  logToolCall,
  normalizeComponentId,
} from "@/lib/mcp/log";

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

describe("hashUserAgent", () => {
  it("is stable for the same input", () => {
    expect(hashUserAgent("claude-code/2.1")).toBe(
      hashUserAgent("claude-code/2.1"),
    );
  });

  it("differs for different inputs", () => {
    expect(hashUserAgent("claude-code/2.1")).not.toBe(
      hashUserAgent("Mozilla/5.0"),
    );
  });

  it("never returns the raw user agent", () => {
    expect(hashUserAgent("claude-code/2.1")).not.toContain("claude");
  });

  it("returns undefined for a missing or blank header instead of hashing it", () => {
    expect(hashUserAgent(undefined)).toBeUndefined();
    expect(hashUserAgent(null)).toBeUndefined();
    expect(hashUserAgent("")).toBeUndefined();
    expect(hashUserAgent("   ")).toBeUndefined();
  });
});

describe("normalizeComponentId", () => {
  it("strips a trailing .json", () => {
    expect(normalizeComponentId("toast-slide.json")).toBe("toast-slide");
  });

  it("lowercases", () => {
    expect(normalizeComponentId("Toast-Slide")).toBe("toast-slide");
  });

  it("aggregates all three call-site variants to the same bucket", () => {
    const variants = ["toast-slide", "toast-slide.json", "Toast-Slide"];
    const normalized = new Set(variants.map(normalizeComponentId));
    expect(normalized.size).toBe(1);
    expect([...normalized][0]).toBe("toast-slide");
  });

  it("only strips a trailing .json, not an incidental mid-string occurrence", () => {
    expect(normalizeComponentId("toast.json-slide")).toBe(
      "toast.json-slide",
    );
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
