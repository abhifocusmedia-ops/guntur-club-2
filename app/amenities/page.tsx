import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Photo from "@/components/ui/Photo";
import Reveal from "@/components/animations/Reveal";
import AmenitiesFilter from "@/components/sections/AmenitiesFilter";
export const metadata: Metadata = {title:"Club Amenities",description:"Explore sports, dining, wellness and recreation at Guntur Club."};
export default function Amenities() {
  return <div className="inner-page amenities-page">
    <PageHero eyebrow="The Art of Club Living" title="Discover Our Amenities." image="/images/pool.webp"/>
    <section className="section inner-ivory"><div className="container inner-editorial">
      <Reveal><p className="eyebrow mb-4">Something for everyone</p><h2 className="section-heading mb-5">An elevated <em>club lifestyle.</em></h2><p className="body-copy">From an active morning to a relaxed evening, discover spaces for fitness, sport, dining and fellowship. Complimentary high-speed Wi-Fi is available throughout the club.</p><Link href="#facilities" className="gold-link mt-5">Explore facilities <ArrowUpRight size={15}/></Link></Reveal>
      <Reveal><Photo src="/images/club-aerial.webp" alt="Guntur Club campus" className="inner-photo"/></Reveal>
    </div></section>
    <AmenitiesFilter/>
    <section className="section inner-dark"><div className="container inner-editorial">
      <Reveal><Photo src="/images/pavilion.webp" alt="GC Pavilion" className="inner-photo"/></Reveal>
      <Reveal><p className="eyebrow mb-4">Sporting excellence</p><h2 className="section-heading mb-5">Discover <em>GC Pavilion.</em></h2><p className="body-copy">A modern sports and recreation complex featuring professional pickleball, billiards, snooker and an indoor air pistol shooting range.</p><Link href="/gc-pavilion" className="gold-link mt-5">Explore GC Pavilion <ArrowUpRight size={15}/></Link></Reveal>
    </div></section>
    <section className="section inner-ivory text-center"><div className="container"><Reveal><p className="eyebrow mb-3">Your next chapter</p><h2 className="section-heading">Your club. Your lifestyle.</h2><p className="body-copy mx-auto my-5">Discover more about club membership and hospitality.</p><Link href="/membership" className="btn btn-solid">Membership Enquiry <ArrowUpRight size={15}/></Link><div className="mt-4"><Link href="/stay-and-celebrate" className="gold-link">Explore Stay & Celebrate <ArrowUpRight size={15}/></Link></div></Reveal></div></section>
  </div>;
}
