import { describe, it, expect } from "vitest";
import { prettifyCss } from "./css-format";

describe("prettifyCss", () => {
  it("formats a simple rule with indented declarations", () => {
    expect(prettifyCss(`.a{color:red;display:flex}`)).toBe(
      `.a {\n  color: red;\n  display: flex;\n}\n`
    );
  });

  it("keeps selector pseudos intact (no space after their colon)", () => {
    expect(prettifyCss(`.a:hover{color:blue}`)).toBe(
      `.a:hover {\n  color: blue;\n}\n`
    );
  });

  it("handles nested @keyframes", () => {
    const out = prettifyCss(`@keyframes spin{from{opacity:0}to{opacity:1}}`);
    expect(out).toBe(
      `@keyframes spin {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n`
    );
  });

  it("handles @media and normalizes the space after @media", () => {
    const out = prettifyCss(`@media(prefers-reduced-motion:reduce){.a{animation:none}}`);
    expect(out).toContain(`@media (prefers-reduced-motion:reduce) {`);
    expect(out).toContain(`  .a {`);
    expect(out).toContain(`    animation: none;`);
  });

  it("preserves custom properties and function values", () => {
    const out = prettifyCss(`.a{--c:#e4ff54;animation:_x .3s cubic-bezier(.1,.2,.3,.4)}`);
    expect(out).toContain(`--c: #e4ff54;`);
    expect(out).toContain(`animation: _x .3s cubic-bezier(.1,.2,.3,.4);`);
  });

  it("is idempotent on already-formatted output", () => {
    const once = prettifyCss(`.a{color:red}@keyframes k{to{opacity:1}}`);
    expect(prettifyCss(once)).toBe(once);
  });
});
