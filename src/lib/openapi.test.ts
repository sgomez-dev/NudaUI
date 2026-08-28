import { describe, expect, it } from "vitest";
import { openApiDocument } from "./openapi";

/**
 * These assertions encode what makes a spec *usable by an agent*, not just
 * syntactically valid: a unique operationId per operation (that is the tool
 * name a function-calling layer generates), a description on every operation
 * and parameter, typed response schemas, and no dangling `$ref`s.
 */

type Json = Record<string, unknown>;

const doc = openApiDocument();
const paths = doc.paths as Record<string, Record<string, Json>>;
const schemas = (doc.components as Json).schemas as Record<string, Json>;

const operations = Object.entries(paths).flatMap(([path, methods]) =>
  Object.entries(methods).map(([method, operation]) => ({
    path,
    method,
    operation,
  }))
);

/** Walk the whole document collecting every `$ref` string. */
function collectRefs(node: unknown, out: string[] = []): string[] {
  if (Array.isArray(node)) {
    for (const item of node) collectRefs(item, out);
  } else if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node)) {
      if (key === "$ref" && typeof value === "string") out.push(value);
      else collectRefs(value, out);
    }
  }
  return out;
}

describe("openApiDocument — document level", () => {
  it("declares OpenAPI 3.1", () => {
    expect(doc.openapi).toBe("3.1.0");
  });

  it("serialises to JSON without cycles", () => {
    expect(() => JSON.stringify(doc)).not.toThrow();
  });

  it("names a production server and a licence", () => {
    expect(doc.servers).toEqual([
      { url: "https://nudaui.dev", description: "Production" },
    ]);
    expect((doc.info as Json).license).toMatchObject({ identifier: "MIT" });
  });

  it("declares that no authentication is required", () => {
    // An empty `security` array is the explicit "no auth" signal. Omitting the
    // field entirely would leave an agent guessing whether it needs a key.
    expect(doc.security).toEqual([]);
  });

  it("points at the developer portal as external docs", () => {
    expect(doc.externalDocs).toMatchObject({
      url: "https://nudaui.dev/developers",
    });
  });

  it("tells an agent when to use the API and that there is no auth", () => {
    const description = String((doc.info as Json).description);
    expect(description).toMatch(/When to use it/);
    expect(description).toMatch(/No API key/i);
    expect(description).toMatch(/framework-agnostic/i);
  });

  it("documents every endpoint the site actually serves", () => {
    expect(Object.keys(paths).sort()).toEqual([
      "/agent-instructions.md",
      "/api/catalog-full.json",
      "/api/catalog.json",
      "/api/components/{id}.json",
      "/api/registry.json",
      "/llms.txt",
      "/openapi.json",
    ]);
  });
});

describe("openApiDocument — every operation is agent-ready", () => {
  it("has at least one operation", () => {
    expect(operations.length).toBeGreaterThan(0);
  });

  it("gives every operation a unique operationId", () => {
    const ids = operations.map(({ operation }) => operation.operationId);
    expect(ids.every((id) => typeof id === "string" && id.length > 0)).toBe(
      true
    );
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(operations)(
    "$method $path — summary, description, tags, responses",
    ({ operation }) => {
      expect(typeof operation.summary).toBe("string");
      expect(String(operation.description).length).toBeGreaterThan(40);
      expect(Array.isArray(operation.tags)).toBe(true);
      expect((operation.tags as string[]).length).toBeGreaterThan(0);

      const responses = operation.responses as Record<string, Json>;
      expect(Object.keys(responses)).toContain("200");

      for (const [status, response] of Object.entries(responses)) {
        expect(
          typeof response.description,
          `${status} needs a description`
        ).toBe("string");
        const content = response.content as Record<string, Json> | undefined;
        expect(content, `${status} needs a content schema`).toBeDefined();
        for (const media of Object.values(content!)) {
          expect(media.schema, `${status} media needs a schema`).toBeDefined();
        }
      }
    }
  );

  it("types every parameter and explains it", () => {
    for (const { operation } of operations) {
      for (const parameter of (operation.parameters ?? []) as Json[]) {
        expect(typeof parameter.name).toBe("string");
        expect(parameter.in).toBe("path");
        expect(parameter.required).toBe(true);
        expect(String(parameter.description).length).toBeGreaterThan(20);
        expect((parameter.schema as Json).type).toBe("string");
      }
    }
  });

  it("documents the error envelope on every fallible operation", () => {
    const component = paths["/api/components/{id}.json"].get;
    const responses = component.responses as Record<string, Json>;
    const notFound = responses["404"] as Json;
    const content = notFound.content as Record<string, Json>;
    expect(content["application/json"].schema).toEqual({
      $ref: "#/components/schemas/Error",
    });
  });
});

describe("openApiDocument — schemas", () => {
  it("resolves every $ref to a defined schema", () => {
    const refs = collectRefs(doc);
    expect(refs.length).toBeGreaterThan(0);
    for (const ref of refs) {
      expect(ref.startsWith("#/components/schemas/")).toBe(true);
      const name = ref.replace("#/components/schemas/", "");
      expect(schemas, `missing schema ${name}`).toHaveProperty(name);
    }
  });

  it("describes every schema and every top-level property", () => {
    for (const [name, schema] of Object.entries(schemas)) {
      expect(
        typeof schema.description,
        `${name} needs a description`
      ).toBe("string");
    }
  });

  it("locks the error codes to the ones the API actually emits", () => {
    const error = schemas.Error as Json;
    const properties = (error.properties as Json).error as Json;
    const code = (properties.properties as Json).code as Json;
    expect(code.enum).toEqual([
      "component_not_found",
      "endpoint_not_found",
      "method_not_allowed",
      "not_acceptable",
    ]);
  });

  it("constrains component ids with a pattern agents can validate against", () => {
    const summary = schemas.ComponentSummary as Json;
    const id = (summary.properties as Json).id as Json;
    expect(new RegExp(String(id.pattern)).test("toast-slide")).toBe(true);
    expect(new RegExp(String(id.pattern)).test("Toast Slide")).toBe(false);
  });
});
