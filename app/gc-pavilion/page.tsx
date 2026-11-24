import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionCTA from "@/components/ui/SectionCTA";
import FacilityRows, {
  type FacilityRow,
} from "@/components/sections/FacilityRows";
import Photo from "@/components/ui/Photo";
import Reveal from "@/components/animations/Reveal";
export const metadata: Metadata = {
  title: "GC Pavilion",
  description: "Explore sports and recreation at GC Pavilion.",
};
const categories = ["Pickleball", "Billiards", "Snooker", "Shooting"];
const items: FacilityRow[] = [
  {
    id: "pickleball",
    category: "Pickleball",
    title: "Professional Pickleball Courts",
    description:
      "Indoor courts designed for high-performance play and recreation.",
    image: null,
    href: "/contact",
    label: "Enquire about pickleball",
  },
  {
    id: "billiards",
    category: "Billiards",
    title: "Premium Billiards Tables",
    description: "A refined setting for billiards enthusiasts at GC Pavilion.",
    image: null,
    href: "/contact",
    label: "Enquire about billiards",
  },
  {
    id: "snooker",
    category: "Snooker",
    title: "International-Standard Snooker",
    description: "Discover the dedicated snooker facility at GC Pavilion.",
    image: null,
    href: "/contact",
    label: "Enquire about snooker",
  },
  {
    id: "air-pistol-shooting",
    category: "Shooting",
    title: "Air Pistol Shooting Range",
    description:
      "A modern indoor facility for precision-focused sporting recreation.",
    image: null,
    href: "/contact",
    label: "Enquire about the range",
  },
];
export default function Pavilion() {
  return (
    <div className="inner-page remaining-page">
      <PageHero
        eyebrow="A new chapter in our legacy"
        title="GC Pavilion."
        image="/images/pavilion.webp"
      />
      <section className="section inner-ivory">
        <div className="container inner-editorial">
          <Reveal>
            <Photo
              src="/images/pavilion.webp"
              alt="GC Pavilion"
              className="inner-photo"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow mb-3">Sports & leisure</p>
            <h2 className="section-heading mb-5">
              A contemporary sporting destination.
            </h2>
            <p className="body-copy">
              GC Pavilion brings modern sporting facilities together in a
              vibrant setting, continuing the club’s tradition of recreation and
              fellowship.
            </p>
          </Reveal>
        </div>
      </section>
      <FacilityRows items={items} categories={categories} />
      <SectionCTA
        caption="Contact the club for facility access, availability and sporting enquiries."
        title="A new dimension of sporting excellence."
        href="/contact"
        label="Enquire about Pavilion"
      />
    </div>
  );
}
