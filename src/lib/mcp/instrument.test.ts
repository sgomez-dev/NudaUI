import { describe, expect, it, vi, afterEach } from "vitest";
import { runInstrumented } from "@/lib/mcp/instrument";

afterEach(() => vi.restoreAllMocks());

describe("runInstrumented", () => {
  it("logs exactly one ok:true line and returns the result on success", async () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    const result = await runInstrumented("test_tool", { client: "x/1" }, () => "value");

    expect(result).toBe("value");
    expect(spy).toHaveBeenCalledTimes(1);
    const payload = JSON.parse(spy.mock.calls[0][0] as string);
    expect(payload.evt).toBe("mcp_tool");
    expect(payload.tool).toBe("test_tool");
    expect(payload.ok).toBe(true);
    expect(payload.client).toBe("x/1");
  });

  it("lets describeSuccess override ok from the resolved value", async () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    await runInstrumented(
      "test_tool",
      {},
      () => ({ found: false }),
      (r) => ({ ok: r.found }),
    );

    const payload = JSON.parse(spy.mock.calls[0][0] as string);
    expect(payload.ok).toBe(false);
  });

  it("logs exactly one ok:false line and still rethrows when the handler throws", async () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const boom = new Error("boom");

    await expect(
      runInstrumented("test_tool", { queryHash: "abc123" }, () => {
        throw boom;
      }),
    ).rejects.toThrow(boom);

    // The invariant this test exists to guard: exactly one line, not zero
    // (dropped because the log call was never reached) and not more than
    // one (double-logged by a retry or a second catch).
    expect(spy).toHaveBeenCalledTimes(1);
    const payload = JSON.parse(spy.mock.calls[0][0] as string);
    expect(payload.evt).toBe("mcp_tool");
    expect(payload.tool).toBe("test_tool");
    expect(payload.ok).toBe(false);
    expect(payload.queryHash).toBe("abc123");
  });

  it("logs exactly one ok:false line and rethrows for a rejected async handler", async () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const boom = new Error("async boom");

    await expect(
      runInstrumented("test_tool", {}, async () => {
        throw boom;
      }),
    ).rejects.toThrow(boom);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(JSON.parse(spy.mock.calls[0][0] as string).ok).toBe(false);
  });
});
