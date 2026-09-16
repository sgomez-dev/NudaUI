/**
 * The README is marketing copy that quotes registry facts. Prose drifts;
 * the registry does not. This test makes a stale claim fail `prebuild`
 * instead of shipping — the counts are what feed server.json and every
 * directory listing.
 */
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import {
  categories,
  totalCount,
} from "@/components/showcase/registry/categories";

const README = readFileSync(
  new URL("../../README.md", import.meta.url),
  "utf8",
);

describe("README claims match the registry", () => {
  it("quotes the real component total everywhere it appears", () => {
    const claims = [...README.matchAll(/([\d,]+) components/g)].map(
      (m) => m[1],
    );
    expect(claims.length).toBeGreaterThan(0);
    const expected = totalCount.toLocaleString("en-US");
    for (const claim of claims) expect(claim).toBe(expected);
  });

  it("quotes the real category total everywhere it appears", () => {
    const claims = [...README.matchAll(/(\d+) categories/g)].map((m) => m[1]);
    expect(claims.length).toBeGreaterThan(0);
    for (const claim of claims) expect(claim).toBe(String(categories.length));
  });
});
