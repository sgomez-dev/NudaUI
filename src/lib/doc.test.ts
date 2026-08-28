import { describe, expect, it } from "vitest";
import {
  docTextLength,
  parseInline,
  renderDocMarkdown,
  type DocPage,
} from "./doc";

const page: DocPage = {
  title: "Title",
  summary: "Summary line.",
  url: "https://nudaui.dev/example",
  sections: [
    {
      id: "one",
      heading: "One",
      blocks: [
        { kind: "p", text: "A paragraph with a [link](https://example.com)." },
        { kind: "list", items: ["first", "second"] },
        { kind: "list", ordered: true, items: ["step one", "step two"] },
        { kind: "code", language: "bash", code: "curl https://nudaui.dev" },
        { kind: "table", head: ["A", "B"], rows: [["1", "2"]] },
      ],
      subsections: [
        { id: "one-a", heading: "One A", blocks: [{ kind: "p", text: "Sub." }] },
      ],
    },
  ],
};

describe("renderDocMarkdown", () => {
  const markdown = renderDocMarkdown(page);

  it("opens with an H1 and a blockquote summary", () => {
    expect(markdown.startsWith("# Title\n\n> Summary line.")).toBe(true);
  });

  it("nests sections under H2 and subsections under H3", () => {
    expect(markdown).toContain("\n## One\n");
    expect(markdown).toContain("\n### One A\n");
  });

  it("renders unordered and ordered lists", () => {
    expect(markdown).toContain("- first\n- second");
    expect(markdown).toContain("1. step one\n2. step two");
  });

  it("fences code with its language", () => {
    expect(markdown).toContain("```bash\ncurl https://nudaui.dev\n```");
  });

  it("renders a GFM table with a separator row", () => {
    expect(markdown).toContain("| A | B |\n| --- | --- |\n| 1 | 2 |");
  });

  it("closes with the canonical HTML URL", () => {
    expect(markdown.trimEnd().endsWith(
      "Canonical HTML version: https://nudaui.dev/example"
    )).toBe(true);
  });
});

describe("docTextLength", () => {
  it("counts prose without the link syntax", () => {
    const length = docTextLength(page);
    expect(length).toBeGreaterThan(40);
    // "[link](https://example.com)" collapses to "link" — the URL is markup.
    expect(length).toBeLessThan(renderDocMarkdown(page).length);
  });
});

describe("parseInline", () => {
  it("returns plain text untouched", () => {
    expect(parseInline("just text")).toEqual([
      { kind: "text", value: "just text" },
    ]);
  });

  it("splits links out of surrounding text", () => {
    expect(parseInline("see [docs](https://nudaui.dev/developers) now")).toEqual(
      [
        { kind: "text", value: "see " },
        {
          kind: "link",
          value: "docs",
          href: "https://nudaui.dev/developers",
        },
        { kind: "text", value: " now" },
      ]
    );
  });

  it("recognises inline code and bold", () => {
    expect(parseInline("run `curl` and **stop**")).toEqual([
      { kind: "text", value: "run " },
      { kind: "code", value: "curl" },
      { kind: "text", value: " and " },
      { kind: "strong", value: "stop" },
    ]);
  });

  it("handles several markers in one string", () => {
    const nodes = parseInline("**A** then `b` then [c](/d)");
    expect(nodes.map((n) => n.kind)).toEqual([
      "strong",
      "text",
      "code",
      "text",
      "link",
    ]);
  });

  it("leaves an unclosed marker as literal text", () => {
    expect(parseInline("a **dangling")).toEqual([
      { kind: "text", value: "a **dangling" },
    ]);
  });

  it("round-trips the visible text of any input", () => {
    const input = "mix **bold**, `code`, and [a link](https://x.test) together";
    const visible = parseInline(input)
      .map((n) => n.value)
      .join("");
    expect(visible).toBe("mix bold, code, and a link together");
  });
});
