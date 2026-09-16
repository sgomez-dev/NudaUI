import { describe, expect, it } from "vitest";
import {
  getComponent,
  listCategories,
  localSearch,
  searchComponentsTool,
} from "@/lib/mcp/tools";
import {
  categories,
  totalCount,
} from "@/components/showcase/registry/categories";
import { allComponents } from "@/lib/component-payload";

describe("listCategories", () => {
  it("returns every category with a description and a count", () => {
    const result = listCategories();
    expect(result.categoryCount).toBe(categories.length);
    expect(result.total).toBe(totalCount);
    expect(result.categories).toHaveLength(categories.length);
    expect(categories.length).toBeGreaterThan(0);
    for (const c of result.categories) {
      expect(c.id).toBeTruthy();
      expect(c.label).toBeTruthy();
      expect(c.description.length).toBeGreaterThan(0);
      expect(c.componentCount).toBeGreaterThan(0);
      expect(c.url).toContain("/components#section-");
    }
  });

  it("counts sum to the registry total", () => {
    const sum = listCategories().categories.reduce(
      (acc, c) => acc + c.componentCount,
      0,
    );
    expect(sum).toBe(totalCount);
  });
});

describe("getComponent", () => {
  it("returns paste-ready code for a real id", () => {
    const realId = allComponents()[0].component.id;
    const result = getComponent(realId);
    expect(result.found).toBe(true);
    if (!result.found) throw new Error("unreachable");
    expect(result.component.id).toBe(realId);
    expect(result.component.code.length).toBeGreaterThan(0);
    expect(result.component.page).toContain("/components/");
    expect(result.component.license).toBe("MIT");
  });

  it("tolerates a trailing .json the way the REST endpoint does", () => {
    const realId = allComponents()[0].component.id;
    expect(getComponent(`${realId}.json`).found).toBe(true);
  });

  it("suggests near matches instead of failing bare", () => {
    const result = getComponent("toast-slide-xyz-nope");
    expect(result.found).toBe(false);
    if (result.found) throw new Error("unreachable");
    expect(result.suggestions.length).toBeGreaterThan(0);
    expect(result.suggestions.length).toBeLessThanOrEqual(5);
  });

  it("points recovery at the JSON registry, not the unscrapable gallery, even with no near matches", () => {
    const result = getComponent("nope-not-real");
    expect(result.found).toBe(false);
    if (result.found) throw new Error("unreachable");
    expect(result.suggestions).toHaveLength(0);
    expect(result.hint).toContain("/api/registry.json");
    expect(result.hint).not.toContain("/components");
  });
});

describe("localSearch (fallback ranking)", () => {
  it("finds components by a word in their name", () => {
    const hits = localSearch("toast", 5);
    expect(hits.length).toBeGreaterThan(0);
    expect(
      hits.some(
        (h) =>
          h.name.toLowerCase().includes("toast") ||
          h.id.includes("toast") ||
          h.category.toLowerCase().includes("toast"),
      ),
    ).toBe(true);
  });

  it("respects the limit", () => {
    expect(localSearch("card", 3).length).toBeLessThanOrEqual(3);
  });

  it("returns nothing for a query that matches nothing", () => {
    expect(localSearch("zzzqqqxxnotathing", 5)).toHaveLength(0);
  });
});

describe("searchComponentsTool", () => {
  it("degrades to local ranking when the RAG service is unreachable", async () => {
    const original = process.env.NEXT_PUBLIC_RAG_API_URL;
    process.env.NEXT_PUBLIC_RAG_API_URL = "http://127.0.0.1:9";
    try {
      const result = await searchComponentsTool({ query: "toast", limit: 5 });
      expect(result.degraded).toBe(true);
      expect(result.results.length).toBeGreaterThan(0);
    } finally {
      process.env.NEXT_PUBLIC_RAG_API_URL = original;
    }
  });

  it("filters to CSS-only components when hasJS is false", async () => {
    // Pinned to an unreachable host: this assertion is about the FILTER,
    // which runs identically on the RAG and fallback paths, not about
    // ranking quality — so it must not depend on a live network call to
    // rag.nudaui.dev. The live RAG path is covered by the HTTP
    // verification step in the task report instead.
    const original = process.env.NEXT_PUBLIC_RAG_API_URL;
    process.env.NEXT_PUBLIC_RAG_API_URL = "http://127.0.0.1:9";
    try {
      const result = await searchComponentsTool({
        query: "button",
        hasJS: false,
        limit: 10,
      });
      for (const hit of result.results) expect(hit.hasJS).toBe(false);
    } finally {
      process.env.NEXT_PUBLIC_RAG_API_URL = original;
    }
  });
});
