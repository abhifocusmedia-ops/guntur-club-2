import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import GalleryGrid from "@/components/sections/GalleryGrid";
import SectionCTA from "@/components/ui/SectionCTA";
export const metadata: Metadata = { title: "Photo Gallery" };
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
          <h2 className="section-heading mb-12">A Place to Belong.</h2>
          <GalleryGrid />
        </div>
      </section>
      <SectionCTA />
    </div>
  );
}
