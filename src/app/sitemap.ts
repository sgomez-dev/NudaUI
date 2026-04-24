import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * Dynamic sitemap.
 *
 * One entry per public route. `lastModified` is stamped at request time so
 * crawlers never see a stale date. Priorities are intentionally flat
 * (1.0 / 0.9) because the site is small enough that weighing tail pages
 * lower would just confuse Search Console.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: absoluteUrl("/"),
        },
      },
    },
    {
      url: absoluteUrl("/components"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: absoluteUrl("/components"),
        },
      },
    },
  ];
}
