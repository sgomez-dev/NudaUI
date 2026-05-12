import { site, absoluteUrl } from "@/lib/site";

/**
 * /opensearch.xml — OpenSearch description document.
 *
 * When Firefox / Chrome / Edge / Safari users add nudaui.dev to their
 * browser's search engines, this is the contract that tells the browser
 * what URL to hit. Niche but free — and search engines like Bing pay
 * attention when a site declares itself searchable.
 *
 * Referenced via <link rel="search"> in layout.tsx.
 */
export const dynamic = "force-static";
export const revalidate = 86400;

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET(): Response {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                      xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>${escapeXml(site.name)}</ShortName>
  <Description>${escapeXml(`Search the ${site.name} component catalog`)}</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Image width="16" height="16" type="image/png">${absoluteUrl("/icon")}</Image>
  <Image width="180" height="180" type="image/png">${absoluteUrl("/apple-icon")}</Image>
  <Url type="text/html" method="get"
       template="${absoluteUrl("/components")}?q={searchTerms}" />
  <Url type="application/opensearchdescription+xml" rel="self"
       template="${absoluteUrl("/opensearch.xml")}" />
  <moz:SearchForm>${absoluteUrl("/components")}</moz:SearchForm>
  <Language>${site.language}</Language>
  <Developer>${escapeXml(site.name)}</Developer>
  <Contact>${site.email}</Contact>
  <AdultContent>false</AdultContent>
  <SyndicationRight>open</SyndicationRight>
</OpenSearchDescription>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/opensearchdescription+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
