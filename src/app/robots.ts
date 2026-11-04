import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { aiCrawlers, disallow } from "@/config/crawlers";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: aiCrawlers, allow: "/", disallow },
    ],
    ...(site.url ? { sitemap: `${site.url}/sitemap.xml`, host: site.url } : {}),
  };
}
