import { describe, expect, it } from "vitest";
import { docTextLength, renderDocMarkdown } from "@/lib/doc";
import { headingLevels } from "@/lib/markdown-outline";
import { aboutDoc, aboutMeta } from "./about";
import { contactDoc, contactMeta, contactChannels } from "./contact";
import { developersDoc, developersMeta, endpoints } from "./developers";
import {
  agentInstructionsDoc,
  bestFitJobs,
  poorFitJobs,
  whenToUseMarkdownLines,
} from "@/lib/agent-guidance";
import { site } from "@/lib/site";

/**
 * AI agents check /about, /contact and /privacy to decide whether a product is
 * a real thing before recommending it, and they discount pages with almost no
 * content. 500 characters is the floor those checks use; these pages should
 * clear it by a wide margin.
 */
const TRUST_PAGE_MIN_CHARS = 500;

const trustPages = [
  { name: "about", doc: aboutDoc(), meta: aboutMeta },
  { name: "contact", doc: contactDoc(), meta: contactMeta },
  { name: "developers", doc: developersDoc(), meta: developersMeta },
] as const;

describe.each(trustPages)("$name page", ({ doc, meta }) => {
  it("clears the trust-anchor content floor", () => {
    expect(docTextLength(doc)).toBeGreaterThan(TRUST_PAGE_MIN_CHARS);
  });

  it("has a title, a summary and its canonical URL", () => {
    expect(doc.title.length).toBeGreaterThan(0);
    expect(doc.summary.length).toBeGreaterThan(40);
    expect(doc.url).toBe(`${site.url}${meta.path}`);
  });

  it("gives every section a unique anchor id", () => {
    const ids = doc.sections.map((section) => section.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^[a-z0-9-]+$/);
  });

  it("renders to Markdown with one H1 and real H2 structure", () => {
    const levels = headingLevels(renderDocMarkdown(doc));
    expect(levels.filter((level) => level === 1)).toHaveLength(1);
    expect(levels.filter((level) => level === 2).length).toBeGreaterThanOrEqual(
      4
    );
    // No jump larger than one level — h2 straight to h4 is a broken outline.
    for (let i = 1; i < levels.length; i++) {
      expect(levels[i] - levels[i - 1]).toBeLessThanOrEqual(1);
    }
  });

  it("carries an ISO dateModified for the Article schema", () => {
    expect(meta.lastUpdatedIso).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(meta.publishedIso).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

describe("about page", () => {
  const markdown = renderDocMarkdown(aboutDoc());

  it("names the maintainer and links their site", () => {
    expect(markdown).toContain(site.creator.name);
    expect(markdown).toContain(site.creator.url);
  });

  it("states the licence and that there is no cost", () => {
    expect(markdown).toMatch(/MIT/);
    expect(markdown).toMatch(/free/i);
  });

  it("points agents at the machine-readable surfaces", () => {
    expect(markdown).toContain("/openapi.json");
    expect(markdown).toContain("/agent-instructions.md");
  });
});

describe("contact page", () => {
  const markdown = renderDocMarkdown(contactDoc());

  it("publishes every channel with a use case", () => {
    expect(contactChannels.length).toBeGreaterThanOrEqual(3);
    for (const channel of contactChannels) {
      expect(channel.use.length).toBeGreaterThan(40);
      expect(markdown).toContain(channel.target);
    }
  });

  it("includes the general inbox and the security route", () => {
    expect(markdown).toContain(site.email);
    expect(markdown).toContain("security.txt");
  });

  it("is explicit that no phone or street address is published", () => {
    expect(markdown).toMatch(/no phone number and no street address/i);
  });
});

describe("developer portal", () => {
  const markdown = renderDocMarkdown(developersDoc());

  it("documents every endpoint that exists in the OpenAPI spec", () => {
    expect(endpoints).toHaveLength(4);
    for (const endpoint of endpoints) {
      expect(markdown).toContain(endpoint.path);
      expect(markdown).toContain(endpoint.operationId);
    }
  });

  it("answers the four questions an integrator asks first", () => {
    expect(markdown).toMatch(/Authentication \| None/i);
    expect(markdown).toMatch(/Rate limits \| None/i);
    expect(markdown).toMatch(/Access-Control-Allow-Origin/);
    expect(markdown).toMatch(/schemaVersion/);
  });

  it("shows a runnable quickstart", () => {
    expect(markdown).toContain("```bash");
    expect(markdown).toContain("curl -s https://nudaui.dev/api/registry.json");
  });

  it("documents the error envelope and every error code", () => {
    for (const code of [
      "component_not_found",
      "endpoint_not_found",
      "method_not_allowed",
      "not_acceptable",
    ]) {
      expect(markdown).toContain(code);
    }
  });

  it("documents Markdown content negotiation", () => {
    expect(markdown).toContain("Accept: text/markdown");
    expect(markdown).toContain("Vary: Accept");
    expect(markdown).toContain("acceptmarkdown.com");
  });
});

describe("agent guidance", () => {
  const markdown = renderDocMarkdown(agentInstructionsDoc());

  it("names specific jobs rather than generic marketing copy", () => {
    expect(bestFitJobs.length).toBeGreaterThanOrEqual(5);
    for (const { job, why } of bestFitJobs) {
      expect(job.length).toBeGreaterThan(50);
      expect(why.length).toBeGreaterThan(50);
    }
  });

  it("is equally specific about when NOT to use NudaUI", () => {
    expect(poorFitJobs.length).toBeGreaterThanOrEqual(3);
    for (const item of poorFitJobs) {
      expect(item.length).toBeGreaterThan(50);
    }
  });

  it("gives an exact call sequence and a worked example", () => {
    expect(markdown).toContain("/api/registry.json");
    expect(markdown).toContain("/api/components/{id}.json");
    expect(markdown).toMatch(/## Worked example/);
    expect(markdown).toContain("```bash");
  });

  it("tells agents there is no package to install", () => {
    // The audit flagged a CLI as "mentioned but not published". The honest
    // fix is to say plainly that copy-paste *is* the distribution model.
    expect(markdown).toMatch(/## Installation/);
    expect(markdown).toMatch(/npm i nudaui/);
    expect(markdown).toMatch(/no such package or command exists/i);
  });

  it("publishes a machine-readable index of every entry point", () => {
    for (const url of [
      "https://nudaui.dev/openapi.json",
      "https://nudaui.dev/llms.txt",
      "https://nudaui.dev/api/catalog.json",
      "https://nudaui.dev/api/registry.json",
      "https://nudaui.dev/.well-known/ai.txt",
    ]) {
      expect(markdown).toContain(url);
    }
  });
});

describe("whenToUseMarkdownLines — the llms.txt section", () => {
  const text = whenToUseMarkdownLines().join("\n");

  it("is a proper H2 section with both sides of the decision", () => {
    expect(text).toMatch(/^## When to use NudaUI$/m);
    expect(text).toMatch(/Do \*\*not\*\* reach for it when:/);
  });

  it("repeats every best-fit and poor-fit job", () => {
    for (const { job } of bestFitJobs) expect(text).toContain(job);
    for (const item of poorFitJobs) expect(text).toContain(item);
  });

  it("links the full brief and the API contract", () => {
    expect(text).toContain("https://nudaui.dev/agent-instructions.md");
    expect(text).toContain("https://nudaui.dev/openapi.json");
  });

  it("states the no-install position without contradicting the roadmap", () => {
    expect(text).toMatch(/no package on npm, PyPI or Homebrew and no CLI/);
    expect(text).toMatch(/roadmap/);
  });
});
