import { describe, expect, it } from "vitest";
import { markdownForPath, notFoundMarkdown } from "./markdown-pages";
import { headingLevels } from "./markdown-outline";
import { categories, totalCount } from "@/components/showcase/registry/categories";

/** Assert the document is not "flat": one H1, then real nesting under it. */
function expectHierarchy(markdown: string) {
  const levels = headingLevels(markdown);
  expect(levels[0]).toBe(1);
  expect(levels.filter((l) => l === 1)).toHaveLength(1);
  expect(levels).toContain(2);
  // No level may jump by more than one (h1 → h3 is a broken outline).
  for (let i = 1; i < levels.length; i++) {
    expect(levels[i] - levels[i - 1]).toBeLessThanOrEqual(1);
  }
}

const negotiablePages = [
  "/",
  "/components",
  "/developers",
  "/about",
  "/contact",
  "/changelog",
  "/agent-instructions",
] as const;

describe("markdownForPath — every negotiable page", () => {
  it.each(negotiablePages)("%s renders a well-formed document", (path) => {
    const { body, status } = markdownForPath(path);
    expect(status).toBe(200);
    expect(body.length).toBeGreaterThan(500);
    expectHierarchy(body);
  });

  it("treats a trailing slash as the same page", () => {
    expect(markdownForPath("/about/").body).toBe(
      markdownForPath("/about").body
    );
  });
});

describe("markdownForPath — homepage", () => {
  const { body } = markdownForPath("/");

  it("leads with the product name and the elevator pitch", () => {
    expect(body.startsWith("# NudaUI —")).toBe(true);
    expect(body).toMatch(/^> .+/m);
  });

  it("carries substantially more text than the HTML shell exposes", () => {
    // The rendered page ships ~7.5k characters of extractable text; the
    // Markdown twin must not be a stub.
    expect(body.length).toBeGreaterThan(10_000);
  });

  it("states the live catalog size rather than a hardcoded number", () => {
    expect(body).toContain(`| Components | ${totalCount} |`);
    expect(body).toContain(`| Categories | ${categories.length} |`);
  });

  it("lists every category with a link", () => {
    for (const category of categories) {
      expect(body).toContain(
        `https://nudaui.dev/components#section-${category.id}`
      );
    }
  });

  it("routes readers on to the machine-readable surfaces", () => {
    expect(body).toContain("https://nudaui.dev/developers");
    expect(body).toContain("https://nudaui.dev/agent-instructions.md");
    expect(body).toContain("https://nudaui.dev/llms.txt");
  });
});

describe("markdownForPath — component pages", () => {
  const sample = categories[0].components[0];

  it("returns the paste-ready code in fenced blocks", () => {
    const { body, status } = markdownForPath(`/components/${sample.id}`);
    expect(status).toBe(200);
    expect(body).toContain(`# ${sample.name}`);
    expect(body).toContain(`| Id | \`${sample.id}\` |`);
    for (const tab of sample.code) {
      expect(body).toContain("```" + tab.language);
    }
    expect(body).toContain(
      `https://nudaui.dev/api/components/${sample.id}.json`
    );
  });

  it("404s on an unknown id instead of inventing a page", () => {
    const { body, status } = markdownForPath("/components/not-a-component");
    expect(status).toBe(404);
    expect(body).toContain("404");
  });

  it("covers the whole registry", () => {
    for (const category of categories) {
      for (const component of category.components) {
        expect(markdownForPath(`/components/${component.id}`).status).toBe(200);
      }
    }
  });
});

describe("markdownForPath — gallery index", () => {
  const { body } = markdownForPath("/components");

  it("names every component so an agent never has to scrape the SPA", () => {
    const ids = categories.flatMap((c) => c.components.map((x) => x.id));
    for (const id of ids) {
      expect(body).toContain(`https://nudaui.dev/components/${id}`);
    }
  });

  it("warns that the HTML gallery is client-rendered", () => {
    expect(body).toMatch(/client-rendered/i);
  });
});

describe("404 Markdown", () => {
  it("is returned for unknown paths", () => {
    const { body, status } = markdownForPath("/nope");
    expect(status).toBe(404);
    expect(body).toContain("`/nope`");
  });

  it("hands the agent a recovery map, not just an apology", () => {
    const body = notFoundMarkdown("/nope");
    for (const target of [
      "https://nudaui.dev/components",
      "https://nudaui.dev/developers",
      "https://nudaui.dev/llms.txt",
      "https://nudaui.dev/agent-instructions.md",
      "https://nudaui.dev/openapi.json",
      "https://nudaui.dev/sitemap.xml",
      "https://nudaui.dev/api/registry.json",
    ]) {
      expect(body).toContain(target);
    }
  });

  it("explains the component id convention so the retry can succeed", () => {
    expect(notFoundMarkdown()).toMatch(/`\/components\/\{id\}`/);
  });
});
