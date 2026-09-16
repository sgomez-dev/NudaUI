import { describe, expect, it } from "vitest";
import { getComponent, listCategories } from "@/lib/mcp/tools";
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
});
