// Twitter's summary_large_image card is the same 1200×630 as OG, so we
// share the renderer but declare the route config inline — Next requires
// these values to be statically analysable (they can't be re-exported).
import OgImage from "./opengraph-image";
import { site } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

export default OgImage;
