import { describe, it, expect } from "vitest";
import {
  classesInHtml,
  classesInCss,
  keyframesInCss,
  animationsInCss,
  auditComponent,
} from "./registry-audit";
import type { NudaComponent } from "@/components/showcase/registry/types";

describe("extractors", () => {
  it("pulls nuda- classes from class and className attrs", () => {
    const html = `<div class="nuda-x nuda-y other"><span className="nuda-z"></span></div>`;
    expect([...classesInHtml(html)].sort()).toEqual(["nuda-x", "nuda-y", "nuda-z"]);
  });
  it("pulls class selectors from CSS including pseudos and compounds", () => {
    const css = `.nuda-a{color:red}.nuda-a:hover{}.nuda-b .nuda-c{}`;
    expect([...classesInCss(css)].sort()).toEqual(["nuda-a", "nuda-b", "nuda-c"]);
  });
  it("pulls keyframes names", () => {
    expect([...keyframesInCss(`@keyframes spin{}@keyframes _x{}`)].sort()).toEqual(["_x", "spin"]);
  });
  it("pulls animation names from shorthand and longhand, ignoring keywords/times/functions", () => {
    const css = `.a{animation:spin 2s linear infinite}.b{animation-name:fade, _y}.c{animation:.4s cubic-bezier(.1,.2,.3,.4) slide both}`;
    expect([...animationsInCss(css)].sort()).toEqual(["_y", "fade", "slide", "spin"]);
  });
});

function comp(partial: Partial<NudaComponent>): NudaComponent {
  return {
    id: "t", name: "T", category: "Test", preview: null,
    code: [], cssInline: undefined, ...partial,
  } as NudaComponent;
}

describe("auditComponent", () => {
  it("passes a self-contained component", () => {
    const c = comp({
      cssInline: `.nuda-t{animation:_a .3s}@keyframes _a{to{}}`,
      code: [
        { label: "HTML", language: "html", code: `<div class="nuda-t"></div>` },
        { label: "CSS", language: "css", code: `.nuda-t{animation:slide .3s}@keyframes slide{to{}}` },
      ],
    });
    expect(auditComponent(c)).toEqual([]);
  });
  it("flags a class used in HTML but missing from the CSS tab", () => {
    const c = comp({
      code: [
        { label: "HTML", language: "html", code: `<div class="nuda-t nuda-missing"></div>` },
        { label: "CSS", language: "css", code: `.nuda-t{}` },
      ],
    });
    expect(auditComponent(c).map(i => i.kind)).toContain("html-class-undefined");
  });
  it("flags an incomplete copy CSS that omits classes the preview styles", () => {
    const c = comp({
      cssInline: `.nuda-t{}.nuda-bar{}`,
      code: [
        { label: "HTML", language: "html", code: `<div class="nuda-t"><span class="nuda-bar"></span></div>` },
        { label: "CSS", language: "css", code: `.nuda-bar{}` },
      ],
    });
    expect(auditComponent(c).map(i => i.kind)).toContain("preview-class-undefined");
  });
  it("flags an animation with no keyframes in the same CSS tab", () => {
    const c = comp({
      code: [
        { label: "HTML", language: "html", code: `<div class="nuda-t"></div>` },
        { label: "CSS", language: "css", code: `.nuda-t{animation:ghost 1s}` },
      ],
    });
    expect(auditComponent(c).map(i => i.kind)).toContain("animation-undefined");
  });
});
