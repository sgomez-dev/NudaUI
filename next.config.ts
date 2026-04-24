import type { NextConfig } from "next";

/**
 * Security + caching headers.
 *
 * - HSTS pins HTTPS for one year with preload. Only ship this once the
 *   apex domain is HTTPS-only everywhere, which is true for nudaui.dev.
 * - Referrer-Policy "strict-origin-when-cross-origin" is the sweet spot:
 *   full referrer internally, origin-only externally.
 * - Permissions-Policy disables sensors we never use. Add back any that a
 *   future feature needs (clipboard-write is safe to leave off; we trigger
 *   copy via onClick on user action, which doesn't require the policy).
 * - The cache rules keep static immutable assets fresh forever and lets
 *   the static pages revalidate on the edge.
 */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Canonicalise to no-trailing-slash so search engines see one URL per page.
  trailingSlash: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // The dynamic OG / icon routes are effectively static outputs —
        // let the edge cache them aggressively with revalidation. Next
        // already sets immutable cache headers on hashed /_next/static
        // bundles, so we leave that path alone.
        source: "/(opengraph-image|twitter-image|icon|apple-icon)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=604800, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
