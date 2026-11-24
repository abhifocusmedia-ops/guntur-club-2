import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionCTA from "@/components/ui/SectionCTA";
import AffiliationsFilter from "@/components/sections/AffiliationsFilter";
import Reveal from "@/components/animations/Reveal";
import { affiliations } from "@/data/site";

export const metadata: Metadata = {
  title: "Affiliated Clubs",
  description: "Discover Guntur Club’s affiliated clubs across India.",
};
export default function Affiliations() {
  const states = Object.keys(affiliations).length;
  const total = Object.values(affiliations).reduce(
    (sum, clubs) => sum + clubs.length,
    0,
  );
  return (
    <div className="inner-page remaining-page affiliations-inner">
      <PageHero
        eyebrow="A Network of Privileged Affiliations"
        title="Prestige Beyond Boundaries."
        image="/images/club-aerial.webp"
      />
      <section className="section inner-ivory">
        <div className="container affiliation-intro">
          <Reveal>
            <p className="eyebrow mb-3">A Network of Distinction</p>
            <h2 className="section-heading mb-5">Connected by Fellowship.</h2>
            <p className="body-copy">
              Explore Guntur Club’s affiliated clubs across India. Reciprocal
              arrangements and access are subject to confirmation with the club.
            </p>
          </Reveal>
          <Reveal className="affiliation-stats">
            <div>
              <strong>{total}</strong>
              <p>Affiliated Clubs</p>
            </div>
            <div>
              <strong>{String(states).padStart(2, "0")}</strong>
              <p>States Across India</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section inner-cream">
        <div className="container">
          <p className="eyebrow mb-3">Club Directory</p>
          <h2 className="section-heading">Explore our network.</h2>
          <AffiliationsFilter />
        </div>
      </section>
      <SectionCTA
        title="Plan your next club visit."
        href="/contact"
        label="Ask About Reciprocal Access"
      />
    </div>
  );
}
