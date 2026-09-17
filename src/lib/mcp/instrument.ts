/**
 * Shared try/catch-and-log wrapper for MCP tool handlers.
 *
 * Guarantees exactly one `mcp_tool` log line per call, on both the success
 * path and the exception path, and that a thrown error is always rethrown
 * after logging rather than swallowed.
 *
 * Pulled out as one shared function, instead of a try/catch duplicated per
 * tool in the route, specifically so this invariant is unit-testable in
 * one place. The brief this endpoint was originally built from showed the
 * success-only shape (a `logToolCall` call placed after the awaited
 * result, no try/catch) — that shape silently drops the log line entirely
 * whenever the tool throws, since the log call is never reached. See
 * `instrument.test.ts` for a regression test of exactly that failure mode.
 */
import { logToolCall, type ToolCallEvent } from "@/lib/mcp/log";

type CommonFields = Pick<
  ToolCallEvent,
  "client" | "uaHash" | "queryHash" | "componentId"
>;

/**
 * Runs `fn`, logging exactly one line before returning or rethrowing.
 *
 * `common` fields (client, uaHash, queryHash, componentId) are attached to
 * both the success and the failure line. `describeSuccess` derives the
 * success-only fields from the resolved value and may override `ok`
 * (e.g. `get_component` logs `ok: result.found`, not `ok: true`, even
 * though no exception was thrown); when it doesn't set `ok`, the call is
 * logged as `ok: true`.
 */
export async function runInstrumented<T>(
  tool: string,
  common: Partial<CommonFields>,
  fn: () => Promise<T> | T,
  describeSuccess: (result: T) => Partial<ToolCallEvent> = () => ({}),
): Promise<T> {
  const started = Date.now();
  try {
    const result = await fn();
    logToolCall({
      tool,
      ok: true,
      ...common,
      ...describeSuccess(result),
      ms: Date.now() - started,
    });
    return result;
  } catch (err) {
    logToolCall({
      tool,
      ok: false,
      ...common,
      ms: Date.now() - started,
    });
    throw err;
  }
}
