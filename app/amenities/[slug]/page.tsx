import { notFound, redirect } from "next/navigation";
import { amenities } from "@/data/site";
export function generateStaticParams() { return amenities.map(a=>({slug:a.slug})); }
export default async function AmenityDetail({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  if (!amenities.some(a=>a.slug===slug)) notFound();
  redirect(`/amenities#${slug}`);
}
