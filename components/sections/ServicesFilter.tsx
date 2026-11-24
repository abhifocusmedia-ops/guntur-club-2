
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Photo from "@/components/ui/Photo";
import Reveal from "@/components/animations/Reveal";

const services = [
  {
    id: "accommodation",
    title: "Stay in comfort. Relax in style.",
    label: "Guest Room Booking",
    text: "Well-appointed guest rooms offer modern amenities, complimentary Wi-Fi and a peaceful atmosphere. Contact the club for reservations and availability.",
    image: "/images/guest-room.webp",
    href: "/stay-and-celebrate#guest-rooms",
    link: "Explore Guest Rooms",
    theme: "inner-ivory",
  },
  {
    id: "wellness",
    title: "A healthier club lifestyle.",
    label: "Health Camp for Members",
    text: "Discover member-focused wellness initiatives. Contact the club for information about upcoming health camps and available programmes.",
    image: "/images/gym.webp",
    href: "/contact",
    link: "Enquire About Programmes",
    theme: "inner-cream",
  },
  {
    id: "entertainment",
    title: "Good company. Memorable evenings.",
    label: "Entertainment",
    text: "Discover spaces for social gatherings and entertainment, including the grand open-air amphitheatre. Contact the club for current programme information.",
    image: "/images/amphitheatre.webp",
    href: "/stay-and-celebrate#amphitheatre",
    link: "Explore Club Life",
    theme: "inner-dark",
  },
] as const;

export default function ServicesFilter() {
  return (
    <>
      {/* Section Introduction */}

      <section className="section inner-ivory">
        <div className="container">

          <Reveal>

            <p className="eyebrow mb-3">
              Thoughtful Hospitality
            </p>

            <h2 className="section-heading">
              Services for every occasion.
            </h2>

            <p className="body-copy mt-4">
              Discover the services available
              to our club community.
            </p>

          </Reveal>

        </div>
      </section>

      {/* All Services — No Filters */}

      {services.map((item, i) => (

        <section
          id={item.id}
          key={item.id}
          className={`section inner-service-row ${item.theme}`}
        >

          <div
            className={`container inner-editorial ${
              i % 2 ? "is-reversed" : ""
            }`}
          >

            {/* Service Image */}

            <Reveal>

              <Photo
                src={item.image}
                alt={item.label}
                className="inner-photo"
              />

            </Reveal>

            {/* Service Content */}

            <Reveal delay={0.1}>

              <p className="eyebrow mb-3">
                {item.label}
              </p>

              <h2 className="section-heading mb-5">
                {item.title}
              </h2>

              <p className="body-copy mb-5">
                {item.text}
              </p>

              <Link
                className="gold-link"
                href={item.href}
              >
                {item.link}
                <ArrowUpRight size={16} />
              </Link>

            </Reveal>

          </div>

        </section>

      ))}

    </>
  );
}
