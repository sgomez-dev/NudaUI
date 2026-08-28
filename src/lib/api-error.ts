/**
 * One error envelope for every JSON endpoint.
 *
 * Agents cannot parse an HTML error page, and they cannot branch on prose.
 * So every failure on `/api/*` (and `/openapi.json`) answers with the same
 * machine-readable shape:
 *
 *   {
 *     "error": {
 *       "code": "component_not_found",   // stable, branchable
 *       "message": "…",                  // human-readable, one sentence
 *       "hint": "…",                     // what to do next
 *       "status": 404,
 *       "documentation": "https://nudaui.dev/developers",
 *       "path": "/api/components/nope.json"
 *     }
 *   }
 *
 * The same `Error` schema is published in `/openapi.json`, so a function-
 * calling model knows the failure shape before it ever sees one.
 */

import { absoluteUrl } from "@/lib/site";

/** Stable, documented error codes. Never renamed — only added to. */
export const API_ERROR_CODES = [
  "component_not_found",
  "endpoint_not_found",
  "method_not_allowed",
  "not_acceptable",
] as const;

export type ApiErrorCode = (typeof API_ERROR_CODES)[number];

export interface ApiErrorBody {
  error: {
    code: ApiErrorCode;
    message: string;
    hint: string;
    status: number;
    documentation: string;
    path?: string;
  };
}

/** Headers every JSON response shares: CORS-open, never cached wrong. */
export const JSON_HEADERS: Record<string, string> = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Accept, Content-Type",
};

/** Build the error body without sending it — handy for tests and for OPTIONS. */
export function apiErrorBody(args: {
  code: ApiErrorCode;
  message: string;
  hint: string;
  status: number;
  path?: string;
}): ApiErrorBody {
  return {
    error: {
      code: args.code,
      message: args.message,
      hint: args.hint,
      status: args.status,
      documentation: absoluteUrl("/developers"),
      ...(args.path ? { path: args.path } : {}),
    },
  };
}

/**
 * Send a structured JSON error.
 *
 * Errors are explicitly `no-store`: a 404 for one id must never be cached
 * and replayed for another, and a 405 depends on the request method.
 */
export function apiError(args: {
  code: ApiErrorCode;
  message: string;
  hint: string;
  status: number;
  path?: string;
  headers?: Record<string, string>;
}): Response {
  return new Response(JSON.stringify(apiErrorBody(args), null, 2), {
    status: args.status,
    headers: {
      ...JSON_HEADERS,
      "Cache-Control": "no-store",
      ...args.headers,
    },
  });
}

/** 404 for an unknown component id. */
export function componentNotFound(id: string, path?: string): Response {
  return apiError({
    code: "component_not_found",
    message: `No NudaUI component with id "${id}".`,
    hint: `Enumerate valid ids at ${absoluteUrl("/api/registry.json")}, then retry with one of them.`,
    status: 404,
    path,
  });
}

/** 404 for a URL under /api that isn't an endpoint at all. */
export function endpointNotFound(path: string): Response {
  return apiError({
    code: "endpoint_not_found",
    message: `${path} is not a NudaUI API endpoint.`,
    hint: `Every endpoint is described in the OpenAPI document at ${absoluteUrl("/openapi.json")}.`,
    status: 404,
    path,
  });
}

/** 405 with the `Allow` header RFC 9110 §15.5.6 requires. */
export function methodNotAllowed(method: string, path: string): Response {
  return apiError({
    code: "method_not_allowed",
    message: `${method} is not supported on ${path}.`,
    hint: "The NudaUI API is read-only. Use GET, HEAD, or OPTIONS.",
    status: 405,
    path,
    headers: { Allow: "GET, HEAD, OPTIONS" },
  });
}

/** Shared CORS preflight / discovery response for read-only endpoints. */
export function optionsResponse(): Response {
  // 204 has no body, so it carries no Content-Type — only the CORS and
  // method-advertisement headers a preflight actually needs.
  const { "Content-Type": _contentType, ...corsHeaders } = JSON_HEADERS;
  return new Response(null, {
    status: 204,
    headers: {
      ...corsHeaders,
      Allow: "GET, HEAD, OPTIONS",
      "Access-Control-Max-Age": "86400",
    },
  });
}
