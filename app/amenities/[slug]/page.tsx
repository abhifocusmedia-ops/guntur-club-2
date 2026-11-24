import { notFound, redirect } from "next/navigation";
import { amenities } from "@/data/site";
export function generateStaticParams() {
  return amenities.map((a) => ({ slug: a.slug }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!amenities.some((a) => a.slug === slug)) notFound();
  const pavilion: Record<string, string> = {
    pickleball: "pickleball",
    "billiards-and-snooker": "billiards",
    "air-pistol-shooting": "air-pistol-shooting",
  };
  redirect(
    pavilion[slug] ? `/gc-pavilion#${pavilion[slug]}` : `/amenities#${slug}`,
  );
}
