import { describe, expect, it } from "vitest";
import {
  apiReferenceSchema,
  contactPageSchema,
  graph,
  organizationSchema,
} from "./jsonld";
import { site } from "./site";

type Json = Record<string, unknown>;

describe("organizationSchema", () => {
  const org = organizationSchema();

  it("carries both halves of the business-verification pair", () => {
    // AI agents check for `address` *and* `contactPoint` before treating an
    // organisation as legitimate. Having only one is what left this at 50%.
    expect(org.address).toBeDefined();
    expect(org.contactPoint).toBeDefined();
  });

  it("publishes a typed PostalAddress with a country", () => {
    const address = org.address as Json;
    expect(address["@type"]).toBe("PostalAddress");
    expect(address.addressCountry).toBe(site.address.addressCountry);
    expect(String(address.addressCountry)).toMatch(/^[A-Z]{2}$/);
  });

  it("never invents address fields that site.ts does not declare", () => {
    // Fabricating a street address would be worse than publishing none.
    const address = org.address as Json;
    const declared = new Set(["@type", ...Object.keys(site.address)]);
    for (const key of Object.keys(address)) {
      expect(declared.has(key), `undeclared address field ${key}`).toBe(true);
    }
  });

  it("keeps a reachable support contact point", () => {
    const contactPoints = org.contactPoint as Json[];
    const support = contactPoints.find(
      (point) => point.contactType === "customer support"
    );
    expect(support).toBeDefined();
    expect(support!.email).toBe(site.email);
  });
});

describe("contactPageSchema", () => {
  const contact = contactPageSchema();

  it("is a ContactPage bound to the organisation node", () => {
    expect(contact["@type"]).toBe("ContactPage");
    expect(contact.url).toBe(`${site.url}/contact`);
    expect(contact.mainEntity).toEqual({ "@id": `${site.url}/#organization` });
  });

  it("surfaces the real reporting routes", () => {
    expect(contact.significantLink).toEqual([
      `${site.social.github}/issues`,
      `${site.url}/.well-known/security.txt`,
    ]);
  });
});

describe("apiReferenceSchema", () => {
  const reference = apiReferenceSchema({
    url: `${site.url}/developers`,
    name: "NudaUI developer portal",
    description: "…",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    sections: ["Overview", "Endpoints"],
  });

  it("types the developer portal as API documentation, not marketing", () => {
    expect(reference["@type"]).toBe("APIReference");
    expect(reference.programmingModel).toBe("REST");
  });

  it("links the machine-readable spec as the encoding", () => {
    expect(reference.encoding).toMatchObject({
      encodingFormat: "application/json",
      contentUrl: `${site.url}/openapi.json`,
    });
  });
});

describe("graph", () => {
  it("hoists @context to the wrapper and drops it from each node", () => {
    const packed = graph(organizationSchema(), contactPageSchema());
    expect(packed["@context"]).toBe("https://schema.org");
    for (const node of packed["@graph"] as Json[]) {
      expect(node).not.toHaveProperty("@context");
    }
  });

  it("stays JSON-serialisable for the <script> tag", () => {
    expect(() =>
      JSON.stringify(graph(organizationSchema(), contactPageSchema()))
    ).not.toThrow();
  });
});
