import { describe, expect, it } from "vitest";
import { listCategories } from "@/lib/mcp/tools";
import {
  categories,
  totalCount,
} from "@/components/showcase/registry/categories";

describe("listCategories", () => {
  it("returns every category with a description and a count", () => {
    const result = listCategories();
    expect(result.categoryCount).toBe(categories.length);
    expect(result.total).toBe(totalCount);
    expect(result.categories).toHaveLength(categories.length);
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
