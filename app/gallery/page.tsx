import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import GalleryGrid from "@/components/sections/GalleryGrid";
import SectionCTA from "@/components/ui/SectionCTA";
export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Explore photographs of Guntur Club's campus, sporting facilities, dining, guest rooms and celebration spaces.",
};
export default function Gallery() {
  return (
    <div className="inner-page remaining-page gallery-inner">
      <PageHero
        eyebrow="A Glimpse into Club Life"
        title="Moments & Memories."
        image="/images/amphitheatre.webp"
      />
      <section className="section inner-ivory">
        <div className="container">
          <p className="eyebrow mb-4">The Club in Pictures</p>
          <h2 className="section-heading mb-4">A Place to Belong.</h2>
          <GalleryGrid />
        </div>
      </section>
      <SectionCTA
        title="Discover club life for yourself."
        caption="Contact the club to learn more about its facilities and membership enquiries."
        href="/contact"
        label="Contact the Club"
      />
    </div>
  );
}
