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
  it("flags a class used in HTML but missing from the CSS tab (no cssInline → strict)", () => {
    const c = comp({
      code: [
        { label: "HTML", language: "html", code: `<div class="nuda-t nuda-missing"></div>` },
        { label: "CSS", language: "css", code: `.nuda-t{}` },
      ],
    });
    expect(auditComponent(c).map(i => i.kind)).toContain("html-class-undefined");
  });
  it("flags a class the preview styles + HTML uses but the copy CSS omits (incomplete copy)", () => {
    const c = comp({
      cssInline: `.nuda-t{}.nuda-bar{height:2px}`,
      code: [
        { label: "HTML", language: "html", code: `<div class="nuda-t"><span class="nuda-bar"></span></div>` },
        { label: "CSS", language: "css", code: `.nuda-t{}` },
      ],
    });
    expect(auditComponent(c).map(i => i.kind)).toContain("html-class-undefined");
  });
  it("does NOT flag an unstyled semantic wrapper class (no rule anywhere)", () => {
    const c = comp({
      cssInline: `.nuda-t{color:red}`,
      code: [
        { label: "HTML", language: "html", code: `<div class="nuda-t"><span class="nuda-t__label">x</span></div>` },
        { label: "CSS", language: "css", code: `.nuda-t{color:red}` },
      ],
    });
    expect(auditComponent(c)).toEqual([]);
  });
  it("does NOT flag a deliberate demo preview whose classes differ from the self-contained copy", () => {
    // Preview uses nuda-demo-*; the copyable HTML+CSS is fully self-contained.
    const c = comp({
      cssInline: `.nuda-demo-box{color:red}`,
      code: [
        { label: "HTML", language: "html", code: `<div class="nuda-real"><span class="nuda-real__x"></span></div>` },
        { label: "CSS", language: "css", code: `.nuda-real{}.nuda-real__x{}` },
      ],
    });
    expect(auditComponent(c)).toEqual([]);
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
