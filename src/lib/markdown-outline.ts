/**
 * Extract the heading outline of a Markdown document.
 *
 * Used to assert that the Markdown representations of the site's pages have a
 * real hierarchy (one H1, then H2s, no skipped levels) rather than a flat wall
 * of same-level headings — the difference between a document an agent can
 * navigate and one it has to read end to end.
 */

/**
 * Heading levels in document order, e.g. `[1, 2, 3, 2]`.
 *
 * Fenced code blocks are skipped: a shell comment like `# fetch the id` is not
 * a heading, and counting it as one would make every document look malformed.
 */
export function headingLevels(markdown: string): number[] {
  const levels: number[] = [];
  let inFence = false;

  for (const line of markdown.split("\n")) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{1,6})\s+\S/.exec(line);
    if (match) levels.push(match[1].length);
  }

  return levels;
}
