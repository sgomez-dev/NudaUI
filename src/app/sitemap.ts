import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { categories } from "@/components/showcase/registry/categories";

/**
 * Dynamic sitemap.
 *
 * Two-tier strategy:
 *   1. Top-level routes get the highest priority (1.0 / 0.9).
 *   2. Every category becomes a deep-link entry pointing to its anchor on
 *      /components — so search engines can surface "loaders", "auth", etc.
 *      as distinct landing destinations instead of one giant page.
 *
 * `lastModified` is stamped at request time so crawlers never see a stale
 * date. Priorities decay smoothly so Google doesn't dismiss the catalog
 * entries as boilerplate.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const top: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: { en: absoluteUrl("/") },
      },
    },
    {
      url: absoluteUrl("/components"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: { en: absoluteUrl("/components") },
      },
    },
  ];

  // One entry per category. The `#section-<id>` anchor matches the
  // `id` rendered in components-gallery.tsx, so deep links land on the
  // right section. Priority gently decays from 0.8 to 0.5 to mirror
  // catalog depth without making everything look equally important.
  const perCategory: MetadataRoute.Sitemap = categories.map((cat, i) => {
    const path = `/components#section-${cat.id}`;
    const decay = Math.max(0.5, 0.8 - i * 0.008);
    return {
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "monthly",
      priority: Number(decay.toFixed(2)),
      alternates: {
        languages: { en: absoluteUrl(path) },
      },
    };
  });

  return [...top, ...perCategory];
}
