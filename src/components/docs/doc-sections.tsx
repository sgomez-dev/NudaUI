import type { ReactNode } from "react";
import { parseInline, type DocBlock, type DocPage } from "@/lib/doc";

/**
 * Renders a `DocPage` as HTML.
 *
 * The Markdown twin of this output comes from `renderDocMarkdown()`, so both
 * representations of `/about`, `/contact` and `/developers` are generated from
 * the same data — content negotiation with no chance of drift.
 *
 * Styling note: everything here is explicit utility classes on the site's own
 * design tokens rather than `@tailwindcss/typography`. The plugin is a
 * devDependency but was never registered with `@plugin` in `globals.css`, so
 * `prose` compiles to nothing today (which is why /terms and /privacy render
 * unstyled). Fixing that is a visual change to those pages and a separate
 * decision; these pages don't wait on it.
 *
 * Everything below is server rendered, so the full content is present in the
 * raw HTML with no JavaScript required.
 */

function Inline({ text }: { text: string }): ReactNode {
  return parseInline(text).map((node, i) => {
    switch (node.kind) {
      case "text":
        return <span key={i}>{node.value}</span>;
      case "code":
        return (
          <code
            key={i}
            className="font-mono text-[0.85em] text-accent break-words"
          >
            {node.value}
          </code>
        );
      case "strong":
        return (
          <strong key={i} className="font-semibold text-text-primary">
            {node.value}
          </strong>
        );
      case "link": {
        const external = /^https?:\/\//i.test(node.href);
        const offsite = external && !node.href.startsWith("https://nudaui.dev");
        return (
          <a
            key={i}
            href={node.href}
            className="text-accent hover:underline underline-offset-2 break-words"
            {...(offsite
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {node.value}
          </a>
        );
      }
    }
  });
}

const listItemClass =
  "relative pl-5 before:absolute before:left-0 before:top-[0.62em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40";

function Block({ block }: { block: DocBlock }): ReactNode {
  switch (block.kind) {
    case "p":
      return (
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4">
          <Inline text={block.text} />
        </p>
      );

    case "list": {
      const items = block.items.map((item, i) => (
        <li
          key={i}
          className={
            block.ordered
              ? "marker:text-accent/60 marker:font-mono marker:text-xs pl-1"
              : listItemClass
          }
        >
          <Inline text={item} />
        </li>
      ));

      const className =
        "mb-5 space-y-2 text-sm sm:text-base text-text-secondary leading-relaxed";

      return block.ordered ? (
        <ol className={`${className} list-decimal pl-5`}>{items}</ol>
      ) : (
        <ul className={className}>{items}</ul>
      );
    }

    case "code":
      return (
        <pre className="mb-5 overflow-x-auto rounded-xl border border-border bg-surface-light/60 p-4 font-mono text-xs sm:text-[13px] leading-relaxed text-text-secondary">
          <code>{block.code}</code>
        </pre>
      );

    case "table": {
      // A table whose header cells are all empty is a two-column key/value
      // layout, not a data grid — drop the empty header row.
      const showHead = block.head.some((cell) => cell.trim().length > 0);

      return (
        // Tables are the one block that can outgrow the column on a phone, so
        // they scroll inside their own container instead of the page.
        <div className="mb-6 -mx-4 sm:mx-0 overflow-x-auto">
          <table
            className={`w-full border-collapse text-sm mx-4 sm:mx-0 ${
              // Data grids need a floor before the columns become unreadable;
              // two-column key/value tables wrap happily at any width.
              showHead ? "min-w-[30rem] sm:min-w-0" : ""
            }`}
          >
            {showHead && (
              <thead>
                <tr>
                  {block.head.map((cell, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="border-b border-border py-2.5 pr-5 text-left font-semibold text-text-primary align-bottom"
                    >
                      <Inline text={cell} />
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`border-b border-border/50 py-2.5 pr-5 align-top leading-relaxed ${
                        j === 0 && !showHead
                          ? "text-text-primary font-medium whitespace-nowrap"
                          : "text-text-secondary"
                      }`}
                    >
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export function DocSections({ page }: { page: DocPage }) {
  return (
    <article>
      {page.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={index === 0 ? "scroll-mt-24" : "mt-12 scroll-mt-24"}
        >
          <h2 className="mb-4 text-xl sm:text-2xl font-bold tracking-tight text-text-primary">
            {section.heading}
          </h2>
          {section.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
          {(section.subsections ?? []).map((sub) => (
            <div key={sub.id} id={sub.id} className="mt-8 scroll-mt-24">
              <h3 className="mb-3 text-base sm:text-lg font-semibold tracking-tight text-text-primary">
                {sub.heading}
              </h3>
              {sub.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          ))}
        </section>
      ))}
    </article>
  );
}
