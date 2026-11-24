import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/animations/Reveal";
import ServicesFilter from "@/components/sections/ServicesFilter";
import { GoldenWaves } from "@/components/artwork/GoldenWaves";

export const metadata: Metadata = { title: "Services", description: "Discover guest room enquiries, member wellbeing and entertainment at Guntur Club." };

export default function ServicesPage() {
  return <div className="inner-page services-page">
    <PageHero eyebrow="Personalized Club Experiences" title="Services & Hospitality." image="/images/lounge.webp" />
    <ServicesFilter />
    <section className="section inner-dark inner-service-support">
      <GoldenWaves />
      <div className="container relative z-10">
        <Reveal>
          <p className="eyebrow mb-3">Here to help</p>
          <h2 className="section-heading">How can we assist you?</h2>
          <p className="body-copy">Connect with our team for service enquiries, availability and current club programmes.</p>
          <Link href="/contact" className="btn">Contact Our Team <ArrowUpRight size={16}/></Link>
        </Reveal>
      </div>
    </section>
  </div>;
}
