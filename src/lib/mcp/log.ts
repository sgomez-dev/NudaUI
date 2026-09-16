/**
 * Minimal usage instrumentation for the MCP endpoint.
 *
 * One structured JSON line per call to stdout, read through Vercel logs.
 * No database and no analytics dependency: the questions this has to answer
 * — which tools get called, which components get asked for, which queries
 * return nothing — are all answerable from a log drain.
 *
 * Query text is hashed, never stored. `zeroResults` is kept in the clear
 * because "queries that return nothing" is the metric worth acting on and
 * it needs no user text to be useful.
 *
 * A note on sessions: MCP revision 2026-07-28 removed session tracking from
 * the protocol, so there is no session to count. `client` is the nearest
 * honest proxy and must be reported as distinct clients per day.
 */
import { createHash } from "node:crypto";

/** Short, stable, non-reversible digest of a query string. */
export function hashQuery(q: string): string {
  return createHash("sha256")
    .update(q.trim().toLowerCase())
    .digest("hex")
    .slice(0, 12);
}

export interface ToolCallEvent {
  tool: string;
  ok: boolean;
  ms: number;
  client?: string;
  queryHash?: string;
  componentId?: string;
  results?: number;
  zeroResults?: boolean;
  degraded?: boolean;
}

/** Emit one line. Never throws — instrumentation must not break a tool call. */
export function logToolCall(e: ToolCallEvent): void {
  try {
    console.log(
      JSON.stringify({
        evt: "mcp_tool",
        ...e,
        day: new Date().toISOString().slice(0, 10),
      }),
    );
  } catch {
    // Logging is best-effort by design.
  }
}
