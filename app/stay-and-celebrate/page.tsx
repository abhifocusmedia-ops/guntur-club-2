import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionCTA from "@/components/ui/SectionCTA";
import FacilityRows, {
  type FacilityRow,
} from "@/components/sections/FacilityRows";
export const metadata: Metadata = { title: "Stay & Celebrate" };
const categories = ["Guest Rooms", "Event Venues", "Outdoor Spaces"];
const items: FacilityRow[] = [
  {
    id: "guest-rooms",
    category: "Guest Rooms",
    title: "Stay in comfort. Relax in style.",
    description:
      "Well-appointed guest rooms with modern amenities, complimentary Wi-Fi and a peaceful atmosphere.",
    image: "/images/guest-room.webp",
    href: "/contact?type=guest-room",
    label: "Guest room enquiry",
  },
  {
    id: "function-halls",
    category: "Event Venues",
    title: "Function & Party Halls",
    description:
      "Spaces for weddings, receptions and family celebrations, with air conditioning and flexible seating arrangements.",
    image: "/images/function-hall.webp",
    href: "/contact?type=function-hall",
    label: "Venue enquiry",
  },
  {
    id: "conference-hall",
    category: "Event Venues",
    title: "Conference Hall",
    description:
      "Well-equipped spaces for seminars, meetings and corporate gatherings.",
    image: "/images/conference.webp",
    href: "/contact?type=function-hall",
    label: "Conference enquiry",
  },
  {
    id: "gardens",
    category: "Outdoor Spaces",
    title: "Scenic Landscaped Gardens",
    description: "Relax and connect in the club’s landscaped outdoor spaces.",
    image: "/images/gardens.webp",
    href: "/contact",
    label: "Contact the club",
  },
  {
    id: "amphitheatre",
    theme: "inner-dark",
    category: "Outdoor Spaces",
    title: "Grand Open-Air Amphitheatre",
    description:
      "An outdoor setting for social gatherings and memorable moments.",
    image: "/images/amphitheatre.webp",
    href: "/contact",
    label: "Contact the club",
  },
];
export default function Stay() {
  return (
    <div className="inner-page remaining-page">
      <PageHero
        eyebrow="Hospitality & special occasions"
        title="Stay. Meet. Celebrate."
        image="/images/function-hall.webp"
      />
      <section className="section inner-ivory">
        <div className="container">
          <p className="eyebrow mb-3">A place for every occasion</p>
          <h2 className="section-heading mb-5">Make every visit memorable.</h2>
          <p className="body-copy">
            Explore accommodation, event venues and outdoor spaces at Guntur
            Club.
          </p>
        </div>
      </section>
      <FacilityRows items={items} categories={categories} />
      <SectionCTA
        caption="Speak with our team about guest room availability, venue arrangements and your next gathering."
        title="Let’s plan something memorable."
        href="/contact"
        label="Make an enquiry"
      />
    </div>
  );
}
