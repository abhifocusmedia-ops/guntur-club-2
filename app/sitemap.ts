
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  const base = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.gunturclub.com"
  ).replace(/\/+$/, "");

  const paths = [
    "",
    "about",
    "services",
    "amenities",
    "gc-pavilion",
    "stay-and-celebrate",
    "affiliations",
    "gallery",
    "membership",
    "contact",
    "privacy-policy",
  ];

  return paths.map((p) => ({
    url: `${base}/${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
