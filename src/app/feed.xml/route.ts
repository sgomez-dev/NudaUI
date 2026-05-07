import { site, absoluteUrl } from "@/lib/site";
import { categories, totalCount } from "@/components/showcase/registry/categories";
import { categoryDescriptions } from "@/lib/category-meta";

/**
 * /feed.xml — minimal valid RSS 2.0 feed.
 *
 * Items are derived from the registry: one item per category, so anyone
 * subscribing in Feedly / Reeder / NetNewsWire gets a "what's available"
 * snapshot whenever they re-fetch. Until we ship a changelog or blog,
 * this is the most useful thing we can syndicate.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET(): Response {
  const buildDate = new Date().toUTCString();

  const items = categories
    .map((cat) => {
      const link = absoluteUrl(`/components#section-${cat.id}`);
      const desc =
        categoryDescriptions[cat.id] ??
        "Copy-paste UI animations and components.";
      return `    <item>
      <title>${escapeXml(cat.label)} — ${cat.components.length} components</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${buildDate}</pubDate>
      <description>${escapeXml(desc)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${site.name} — ${site.tagline}`)}</title>
    <link>${site.url}</link>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(site.shortDescription)}</description>
    <language>${site.language}</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <generator>NudaUI app router</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <ttl>60</ttl>
    <image>
      <url>${absoluteUrl("/icon")}</url>
      <title>${escapeXml(site.name)}</title>
      <link>${site.url}</link>
    </image>
    <category>Web Development</category>
    <category>UI Components</category>
    <category>CSS Animations</category>
    <copyright>© ${new Date().getFullYear()} ${escapeXml(site.name)} — MIT licensed</copyright>
    <managingEditor>${escapeXml(`noreply@${site.url.replace(/^https?:\/\//, "")} (${site.author.name})`)}</managingEditor>
    <webMaster>${escapeXml(`noreply@${site.url.replace(/^https?:\/\//, "")} (${site.author.name})`)}</webMaster>
    <pubDate>${buildDate}</pubDate>
${items}
    <item>
      <title>${escapeXml(`${totalCount} components, ${categories.length} categories`)}</title>
      <link>${absoluteUrl("/components")}</link>
      <guid isPermaLink="true">${absoluteUrl("/components")}</guid>
      <pubDate>${buildDate}</pubDate>
      <description>${escapeXml(`Browse the full ${site.name} catalog — pure CSS animations and copy-paste components for any framework.`)}</description>
    </item>
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
