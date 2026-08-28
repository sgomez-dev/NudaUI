import { describe, expect, it } from "vitest";
import {
  appendVary,
  negotiate,
  notAcceptableBody,
  parseAccept,
} from "./accept";

const PRODUCES = ["text/html", "text/markdown"] as const;

describe("parseAccept", () => {
  it("defaults q to 1 and records client order", () => {
    expect(parseAccept("text/markdown, text/html;q=0.8")).toEqual([
      { type: "text/markdown", q: 1, specificity: 2, index: 0 },
      { type: "text/html", q: 0.8, specificity: 2, index: 1 },
    ]);
  });

  it("classifies wildcard specificity", () => {
    const parsed = parseAccept("text/markdown, text/*, */*");
    expect(parsed.map((e) => e.specificity)).toEqual([2, 1, 0]);
  });

  it("lower-cases types and tolerates whitespace", () => {
    expect(parseAccept("  TEXT/Markdown ; Q=0.5 ")[0]).toMatchObject({
      type: "text/markdown",
      q: 0.5,
    });
  });

  it("clamps q outside [0,1] and ignores unparsable q", () => {
    expect(parseAccept("text/html;q=9")[0].q).toBe(1);
    expect(parseAccept("text/html;q=-4")[0].q).toBe(0);
    expect(parseAccept("text/html;q=abc")[0].q).toBe(1);
  });

  it("drops malformed entries instead of throwing", () => {
    expect(parseAccept("garbage, , text/html")).toHaveLength(1);
  });
});

describe("negotiate — acceptmarkdown.com test vectors", () => {
  // https://acceptmarkdown.com/guides/accept-parsing/ — "Test vectors"
  it.each([
    ["text/markdown", PRODUCES, "text/markdown"],
    ["text/markdown, text/html;q=0.8", PRODUCES, "text/markdown"],
    ["text/html", PRODUCES, "text/html"],
    ["text/markdown;q=0, text/html", PRODUCES, "text/html"],
    ["text/markdown;q=0", ["text/markdown"], null],
    ["*/*", PRODUCES, "text/html"],
  ] as const)("Accept: %s → %s", (header, produces, expected) => {
    expect(negotiate(header, produces)).toBe(expected);
  });

  it("serves the default when the header is absent", () => {
    expect(negotiate(null, PRODUCES)).toBe("text/html");
    expect(negotiate(undefined, PRODUCES)).toBe("text/html");
  });

  it("406s on an empty Accept value (not the same as a missing header)", () => {
    expect(negotiate("", PRODUCES)).toBeNull();
    expect(negotiate("   ", PRODUCES)).toBeNull();
  });
});

describe("negotiate — real-world headers", () => {
  it("gives Chrome HTML, not Markdown", () => {
    const chrome =
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8";
    expect(negotiate(chrome, PRODUCES)).toBe("text/html");
  });

  it("honours the agent convention with a plain-text fallback", () => {
    expect(
      negotiate("text/markdown, text/plain;q=0.5, */*;q=0.1", PRODUCES)
    ).toBe("text/markdown");
  });

  it("406s when the client only wants something we cannot produce", () => {
    expect(negotiate("application/pdf", PRODUCES)).toBeNull();
  });

  it("lets a specific q=0 override a permissive wildcard (RFC 9110 §12.5.1)", () => {
    // The wildcard would otherwise resurrect the explicitly rejected type.
    expect(negotiate("text/html;q=0, */*", PRODUCES)).toBe("text/markdown");
  });

  it("breaks equal-q, equal-specificity ties in client order", () => {
    expect(negotiate("text/markdown, text/html", PRODUCES)).toBe(
      "text/markdown"
    );
    expect(negotiate("text/html, text/markdown", PRODUCES)).toBe("text/html");
  });

  it("prefers a specific range over a subtype wildcard at equal q", () => {
    expect(negotiate("text/*, text/markdown", PRODUCES)).toBe("text/markdown");
  });

  it("falls back to server preference for a subtype wildcard", () => {
    expect(negotiate("text/*", PRODUCES)).toBe("text/html");
  });

  it("returns null when the server produces nothing", () => {
    expect(negotiate("*/*", [])).toBeNull();
  });
});

describe("appendVary", () => {
  it("sets Vary when absent", () => {
    const headers = new Headers();
    appendVary(headers, "Accept", "Accept-Encoding");
    expect(headers.get("Vary")).toBe("Accept, Accept-Encoding");
  });

  it("appends to the Vary header Next.js already set", () => {
    const headers = new Headers({
      Vary: "rsc, next-router-state-tree, next-router-prefetch",
    });
    appendVary(headers, "Accept");
    expect(headers.get("Vary")).toBe(
      "rsc, next-router-state-tree, next-router-prefetch, Accept"
    );
  });

  it("is idempotent and case-insensitive", () => {
    const headers = new Headers({ Vary: "accept" });
    appendVary(headers, "Accept");
    expect(headers.get("Vary")).toBe("accept");
  });

  it("leaves Vary: * alone", () => {
    const headers = new Headers({ Vary: "*" });
    appendVary(headers, "Accept");
    expect(headers.get("Vary")).toBe("*");
  });
});

describe("notAcceptableBody", () => {
  it("lists the available representations and echoes the request", () => {
    const body = notAcceptableBody(PRODUCES, "application/pdf");
    expect(body).toContain("- text/html");
    expect(body).toContain("- text/markdown");
    expect(body).toContain("You requested: application/pdf");
  });

  it("labels an empty Accept header explicitly", () => {
    expect(notAcceptableBody(PRODUCES, "  ")).toContain(
      "(empty Accept header)"
    );
  });
});
