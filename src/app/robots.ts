import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://sk-gulf.com/sitemap.xml",
    host: "https://sk-gulf.com",
  };
}
