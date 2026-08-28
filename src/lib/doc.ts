/**
 * A tiny document model shared by the pages that must exist in two formats.
 *
 * Content negotiation only stays honest if the HTML and the Markdown come
 * from the same source. Rather than pull in a Markdown parser (NudaUI ships
 * zero runtime dependencies — the marketing site should practise what it
 * preaches), each dual-format page is authored once as `DocPage` data:
 *
 *   - `renderDocMarkdown()` serialises it for `Accept: text/markdown`.
 *   - `<DocSections />` renders the same tree as React for browsers.
 *
 * Inline formatting is a deliberately small Markdown subset — links, inline
 * code, bold — parsed by `parseInline()` for the React side.
 *
 * Reference for the "source of truth" approach:
 * https://acceptmarkdown.com/guides/generating-markdown/
 */

export type DocBlock =
  | { kind: "p"; text: string }
  | { kind: "list"; ordered?: boolean; items: string[] }
  | { kind: "code"; language: string; code: string }
  | { kind: "table"; head: string[]; rows: string[][] };

export interface DocSection {
  /** Stable anchor id, also used as the HTML heading `id`. */
  id: string;
  heading: string;
  blocks: DocBlock[];
  /** Nested `###` subsections. One level is plenty for these pages. */
  subsections?: { id: string; heading: string; blocks: DocBlock[] }[];
}

export interface DocPage {
  /** `#` heading — the document title. */
  title: string;
  /** Lead paragraph, rendered as a blockquote in Markdown. */
  summary: string;
  /** Canonical HTML URL for this document. */
  url: string;
  sections: DocSection[];
}

/* ── Markdown serialisation ─────────────────────────────────────────── */

function blockToMarkdown(block: DocBlock): string {
  switch (block.kind) {
    case "p":
      return block.text;
    case "list":
      return block.items
        .map((item, i) => (block.ordered ? `${i + 1}. ${item}` : `- ${item}`))
        .join("\n");
    case "code":
      return ["```" + block.language, block.code, "```"].join("\n");
    case "table": {
      const rows = [
        `| ${block.head.join(" | ")} |`,
        `| ${block.head.map(() => "---").join(" | ")} |`,
        ...block.rows.map((row) => `| ${row.join(" | ")} |`),
      ];
      return rows.join("\n");
    }
  }
}

/** Serialise a `DocPage` to CommonMark. */
export function renderDocMarkdown(page: DocPage): string {
  const out: string[] = [`# ${page.title}`, "", `> ${page.summary}`, ""];

  for (const section of page.sections) {
    out.push(`## ${section.heading}`, "");
    for (const block of section.blocks) {
      out.push(blockToMarkdown(block), "");
    }
    for (const sub of section.subsections ?? []) {
      out.push(`### ${sub.heading}`, "");
      for (const block of sub.blocks) {
        out.push(blockToMarkdown(block), "");
      }
    }
  }

  out.push("---", "");
  out.push(`Canonical HTML version: ${page.url}`, "");

  return out.join("\n");
}

/** Total plain-text length, used by tests to guard the 500-char floor. */
export function docTextLength(page: DocPage): number {
  const strip = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  let total = page.title.length + strip(page.summary).length;

  const countBlocks = (blocks: DocBlock[]) => {
    for (const block of blocks) {
      if (block.kind === "p") total += strip(block.text).length;
      else if (block.kind === "list") {
        for (const item of block.items) total += strip(item).length;
      } else if (block.kind === "table") {
        for (const row of block.rows) {
          for (const cell of row) total += strip(cell).length;
        }
      }
    }
  };

  for (const section of page.sections) {
    total += section.heading.length;
    countBlocks(section.blocks);
    for (const sub of section.subsections ?? []) {
      total += sub.heading.length;
      countBlocks(sub.blocks);
    }
  }

  return total;
}

/* ── Inline Markdown subset, for the React renderer ─────────────────── */

export type InlineNode =
  | { kind: "text"; value: string }
  | { kind: "code"; value: string }
  | { kind: "strong"; value: string }
  | { kind: "link"; value: string; href: string };

// Order matters: links first so a `[**label**](url)` never gets split.
const INLINE_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)|`([^`]+)`|\*\*([^*]+)\*\*/g;

/**
 * Parse the inline subset (`[text](url)`, `` `code` ``, `**bold**`) into
 * nodes the React renderer can map over. Anything else is literal text.
 */
export function parseInline(text: string): InlineNode[] {
  const nodes: InlineNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(INLINE_PATTERN)) {
    const start = match.index;
    if (start > cursor) {
      nodes.push({ kind: "text", value: text.slice(cursor, start) });
    }

    if (match[1] !== undefined) {
      nodes.push({ kind: "link", value: match[1], href: match[2] });
    } else if (match[3] !== undefined) {
      nodes.push({ kind: "code", value: match[3] });
    } else if (match[4] !== undefined) {
      nodes.push({ kind: "strong", value: match[4] });
    }

    cursor = start + match[0].length;
  }

  if (cursor < text.length) {
    nodes.push({ kind: "text", value: text.slice(cursor) });
  }

  return nodes;
}
