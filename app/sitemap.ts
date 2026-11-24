
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.gunturclub.com"
  ).replace(/\/+$/, "");

  const paths = [
    { path: "", priority: 1.0 },
    { path: "about", priority: 0.8 },
    { path: "services", priority: 0.8 },
    { path: "amenities", priority: 0.9 },
    { path: "gc-pavilion", priority: 0.9 },
    { path: "stay-and-celebrate", priority: 0.8 },
    { path: "affiliations", priority: 0.7 },
    { path: "gallery", priority: 0.7 },
    { path: "membership", priority: 0.9 },
    { path: "contact", priority: 0.8 },
    { path: "privacy-policy", priority: 0.3 },
  ];

  return paths.map(({ path, priority }) => ({
    url: `${base}/${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
