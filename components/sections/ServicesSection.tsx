
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

const services = [
  {
    title: "Guest Room Booking",
    description:
      "Well-appointed guest rooms with modern amenities and a welcoming atmosphere on the club campus.",
    image: "/images/services/guest-room.jpg",
    href: "/guest-rooms",
  },
  {
    title: "Health Camp for Members",
    description:
      "Member-focused health and fitness services, with cardio and resistance equipment and experienced trainer guidance.",
    image: "/images/services/health-camp.jpg",
    href: "/services",
  },
  {
    title: "Entertainment",
    description:
      "Enjoy live music, club events and social evenings. Contact the club for the current entertainment programme.",
    image: "/images/services/entertainment.jpg",
    href: "/services",
  },
];

export default function ServicesSection() {
  return (
    <section className="section cream home-services">
      <div className="container">

        {/* Section Heading */}
        <Reveal className="reference-section-header">

          <div>
            <p className="eyebrow mb-3">
              Thoughtful Hospitality
            </p>

            <h2 className="section-heading">
              Services.
            </h2>
          </div>

          <Link
            href="/services"
            className="reference-text-link"
          >
            Explore all services
            <ArrowUpRight size={16} />
          </Link>

        </Reveal>

        {/* Service Cards */}
        <div className="reference-services-grid">

          {services.map((service) => (
            <Reveal
              key={service.title}
              className="reference-service-card"
            >
              <Link href={service.href}>

                <div className="reference-service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="reference-service-content">

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="reference-text-link">
                    Discover more
                    <ArrowUpRight size={15} />
                  </span>

                </div>

              </Link>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
