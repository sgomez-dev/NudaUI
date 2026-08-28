import { endpointNotFound } from "@/lib/api-error";

/**
 * Catch-all for `/api/*` URLs that are not endpoints.
 *
 * Without this, a typo'd API path falls through to the App Router's HTML 404
 * page — which an agent cannot parse and will usually mis-read as "the API is
 * down". Here it gets the same JSON envelope as every other failure, with a
 * hint pointing at the OpenAPI document.
 *
 * More specific routes (`/api/catalog.json`, `/api/components/[id]`,
 * `/api/markdown/[[...slug]]`) match first; this only sees what they don't.
 * Non-read methods never reach here — `src/proxy.ts` answers those with a
 * JSON 405 before routing.
 */
export const dynamic = "force-dynamic";

async function pathOf(
  params: Promise<{ unknown?: string[] }>
): Promise<string> {
  const { unknown = [] } = await params;
  return `/api/${unknown.join("/")}`;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ unknown?: string[] }> }
): Promise<Response> {
  return endpointNotFound(await pathOf(params));
}

export async function HEAD(
  _request: Request,
  { params }: { params: Promise<{ unknown?: string[] }> }
): Promise<Response> {
  const response = endpointNotFound(await pathOf(params));
  return new Response(null, {
    status: response.status,
    headers: response.headers,
  });
}
