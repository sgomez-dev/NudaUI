/**
 * Client for the NudaUI semantic-search API (RAG).
 *
 * This is a thin fetch wrapper — there is NO LLM here. The API takes a
 * natural-language query and returns the component ids that best match it;
 * the UI then renders the real registry previews for those ids.
 *
 * The base URL is env-driven so it can be pointed at a staging deployment
 * without touching code. Defaults to the production deployment.
 */

/** Base URL of the search API. Override with `NEXT_PUBLIC_RAG_API_URL`. */
export const RAG_API_URL = (
  process.env.NEXT_PUBLIC_RAG_API_URL ?? "https://rag.nudaui.dev"
).replace(/\/$/, "");

/** Minimum query length before a search is allowed to fire. */
export const MIN_QUERY_LENGTH = 3;

/** Default number of results to request. */
export const DEFAULT_K = 8;

/** A single result row as returned by `GET /search`. */
export interface RagResult {
  id: string;
  name: string;
  category: string;
  anchor: string;
  score: number;
}

/** The full response envelope from `GET /search`. */
export interface RagResponse {
  query: string;
  count: number;
  results: RagResult[];
}

/** Error thrown when the API call fails or returns an unexpected shape. */
export class RagError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RagError";
  }
}

function isRagResult(value: unknown): value is RagResult {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === "string" &&
    typeof v.name === "string" &&
    typeof v.category === "string"
  );
}

/**
 * Search the registry semantically.
 *
 * Deliberately has NO client-side timeout: the API is serverless and the
 * first request after a period of inactivity can cold-start for several
 * seconds. Callers cancel a stale request by aborting `signal` instead.
 *
 * @param query   Natural-language description of the component.
 * @param k       How many results to request (clamped to 1..20).
 * @param signal  Optional AbortSignal to cancel an in-flight request.
 */
export async function searchComponents(
  query: string,
  k: number = DEFAULT_K,
  signal?: AbortSignal
): Promise<RagResponse> {
  const q = query.trim();
  const clampedK = Math.min(20, Math.max(1, Math.round(k)));

  const url = new URL(`${RAG_API_URL}/search`);
  url.searchParams.set("q", q);
  url.searchParams.set("k", String(clampedK));

  let res: Response;
  try {
    res = await fetch(url, { signal, headers: { Accept: "application/json" } });
  } catch (err) {
    // AbortError is expected on cancellation — re-throw so callers can ignore it.
    if (err instanceof DOMException && err.name === "AbortError") throw err;
    throw new RagError("Could not reach the search service. Check your connection and try again.");
  }

  if (!res.ok) {
    throw new RagError(`The search service returned an error (${res.status}). Please try again.`);
  }

  let data: unknown;
  try {
    data = await res.json();
  } catch {
    throw new RagError("The search service returned an unexpected response.");
  }

  const payload = data as Partial<RagResponse>;
  const results = Array.isArray(payload.results)
    ? payload.results.filter(isRagResult)
    : [];

  return {
    query: typeof payload.query === "string" ? payload.query : q,
    count: typeof payload.count === "number" ? payload.count : results.length,
    results,
  };
}
