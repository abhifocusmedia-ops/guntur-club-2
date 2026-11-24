import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionCTA from "@/components/ui/SectionCTA";
import AffiliationsFilter from "@/components/sections/AffiliationsFilter";
export const metadata: Metadata = {
  title: "Affiliated Clubs",
  description:
    "Discover the network of affiliated Guntur Club partners across India.",
};
export default function Affiliations() {
  return (
    <div className="inner-page remaining-page affiliations-inner">
      <PageHero
        eyebrow="A Network of Privileged Affiliations"
        title="Prestige Beyond Boundaries."
        image="/images/club-aerial.webp"
      />
      <section className="section inner-ivory">
        <div className="container">
          <p className="eyebrow mb-5">16 Affiliated Clubs · 8 States</p>
          <h2 className="section-heading max-w-[850px] mb-7">
            Connected by Fellowship.
          </h2>
          <p className="body-copy mb-14">
            Explore Guntur Club’s affiliated clubs across India. Reciprocal
            arrangements and access are subject to confirmation with the club.
          </p>
          <AffiliationsFilter />
        </div>
      </section>
      <SectionCTA
        title="Explore Our Connections."
        href="/contact"
        label="Contact Us"
      />
    </div>
  );
}
