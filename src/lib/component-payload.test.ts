import { describe, it, expect } from "vitest";
import { allComponents, findComponent, componentPayload } from "./component-payload";

describe("component-payload", () => {
  it("flattens every component with a category id", () => {
    const all = allComponents();
    expect(all.length).toBeGreaterThan(600);
    expect(all.every((f) => f.categoryId && f.component.id)).toBe(true);
  });

  it("looks up by id with and without a .json suffix", () => {
    const a = findComponent("toast-slide");
    const b = findComponent("toast-slide.json");
    expect(a?.component.id).toBe("toast-slide");
    expect(b?.component.id).toBe("toast-slide");
  });

  it("returns undefined for unknown ids", () => {
    expect(findComponent("does-not-exist")).toBeUndefined();
  });

  it("builds a complete, paste-ready payload", () => {
    const flat = findComponent("toast-slide")!;
    const p = componentPayload(flat);
    expect(p.id).toBe("toast-slide");
    expect(p.categoryId).toBe("notifications");
    expect(p.code.some((t) => t.language === "html")).toBe(true);
    const css = p.code.find((t) => t.language === "css")?.code ?? "";
    expect(css).toContain(".nuda-toast"); // real CSS, not a stub
    expect(p.license).toBe("MIT");
    expect(p.attribution.required).toBe(false);
  });

  it("every component id is unique (no collisions for URLs/endpoints)", () => {
    const ids = allComponents().map((f) => f.component.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
