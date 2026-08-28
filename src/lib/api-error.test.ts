import { describe, expect, it } from "vitest";
import {
  API_ERROR_CODES,
  apiErrorBody,
  componentNotFound,
  endpointNotFound,
  methodNotAllowed,
  optionsResponse,
} from "./api-error";

async function json(response: Response): Promise<Record<string, never>> {
  return JSON.parse(await response.text());
}

describe("apiErrorBody", () => {
  it("always carries a branchable code, a message, a hint and docs", () => {
    const body = apiErrorBody({
      code: "component_not_found",
      message: "m",
      hint: "h",
      status: 404,
    });
    expect(body.error).toEqual({
      code: "component_not_found",
      message: "m",
      hint: "h",
      status: 404,
      documentation: "https://nudaui.dev/developers",
    });
  });

  it("omits `path` rather than emitting an empty one", () => {
    expect(
      apiErrorBody({ code: "not_acceptable", message: "m", hint: "h", status: 406 })
        .error
    ).not.toHaveProperty("path");
  });
});

describe("componentNotFound", () => {
  it("is a JSON 404 that names the id and where to find real ones", async () => {
    const response = componentNotFound("nope", "/api/components/nope.json");
    expect(response.status).toBe(404);
    expect(response.headers.get("content-type")).toBe(
      "application/json; charset=utf-8"
    );
    const body = await json(response);
    expect(body).toMatchObject({
      error: {
        code: "component_not_found",
        status: 404,
        path: "/api/components/nope.json",
      },
    });
    expect(body.error["message"]).toContain("nope");
    expect(body.error["hint"]).toContain("/api/registry.json");
  });

  it("is never cached — the id may exist after the next deploy", () => {
    expect(componentNotFound("nope").headers.get("cache-control")).toBe(
      "no-store"
    );
  });

  it("is CORS-open like every other API response", () => {
    expect(
      componentNotFound("nope").headers.get("access-control-allow-origin")
    ).toBe("*");
  });
});

describe("endpointNotFound", () => {
  it("points at the OpenAPI document rather than a 404 page", async () => {
    const response = endpointNotFound("/api/nope");
    expect(response.status).toBe(404);
    const body = await json(response);
    expect(body.error["code"]).toBe("endpoint_not_found");
    expect(body.error["hint"]).toContain("/openapi.json");
  });
});

describe("methodNotAllowed", () => {
  it("sends the Allow header RFC 9110 §15.5.6 requires", async () => {
    const response = methodNotAllowed("POST", "/api/catalog.json");
    expect(response.status).toBe(405);
    expect(response.headers.get("allow")).toBe("GET, HEAD, OPTIONS");
    const body = await json(response);
    expect(body.error["code"]).toBe("method_not_allowed");
    expect(body.error["message"]).toContain("POST");
    expect(body.error["hint"]).toMatch(/read-only/i);
  });
});

describe("optionsResponse", () => {
  it("is an empty 204 preflight with the CORS grant", () => {
    const response = optionsResponse();
    expect(response.status).toBe(204);
    expect(response.headers.get("allow")).toBe("GET, HEAD, OPTIONS");
    expect(response.headers.get("access-control-allow-methods")).toBe(
      "GET, HEAD, OPTIONS"
    );
    expect(response.headers.get("access-control-max-age")).toBe("86400");
    // 204 carries no body, so it must not claim a content type.
    expect(response.headers.get("content-type")).toBeNull();
  });
});

describe("API_ERROR_CODES", () => {
  it("is the published contract — additions are fine, renames are not", () => {
    expect([...API_ERROR_CODES]).toEqual([
      "component_not_found",
      "endpoint_not_found",
      "method_not_allowed",
      "not_acceptable",
    ]);
  });
});
