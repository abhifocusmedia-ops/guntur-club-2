
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import ContentSection from "@/components/sections/ContentSection";
import PavilionSection from "@/components/sections/PavilionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CommitteeSection from "@/components/sections/CommitteeSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SectionCTA from "@/components/ui/SectionCTA";
import Photo from "@/components/ui/Photo";
import { extras } from "@/data/site";

const HeroSlider = dynamic(
  () => import("@/components/sections/HeroSlider")
);

const AmenitiesShowcase = dynamic(
  () => import("@/components/sections/AmenitiesShowcase")
);

export default function Home() {
  return (
    <div className="home-page">

      {/* 01. Hero Slider */}
      <HeroSlider />

      {/* 02. Animated Statistics */}
      <section
        id="heritage"
        className="home-stats bg-[#1d1715]"
      >
        <div className="container stats">

          <Reveal className="stat">
            <strong>
              <AnimatedCounter value={1929} />
            </strong>
            <p className="eyebrow mt-3 !text-[#aa9b85]">
              Established
            </p>
          </Reveal>

          <Reveal className="stat">
            <strong>
              <AnimatedCounter value={97} />
            </strong>
            <p className="eyebrow mt-3 !text-[#aa9b85]">
              Years of Prestige · 2026
            </p>
          </Reveal>

          <Reveal className="stat">
            <strong>
              <AnimatedCounter
                value={1700}
                suffix="+"
                separator={true}
              />
            </strong>
            <p className="eyebrow mt-3 !text-[#aa9b85]">
              Distinguished Members
            </p>
          </Reveal>

          <Reveal className="stat">
            <strong>
              <AnimatedCounter
                value={3}
                suffix=" Acres"
              />
            </strong>
            <p className="eyebrow mt-3 !text-[#aa9b85]">
              Club Campus
            </p>
          </Reveal>

        </div>
      </section>

      {/* 03. Heritage Section */}
      <ContentSection
        light
        eyebrow="The heart of Guntur’s social community"
        title="A Remarkable Legacy. An Enduring Tradition."
        text="Established in 1929 during the British era as the famed English Club, Guntur Club has grown into one of the region’s respected institutions for sports, recreation, culture and fellowship. A three-acre landmark, rooted in history yet ever evolving."
        image="/images/club-exterior.webp"
        href="/about"
        link="Explore Our Heritage"
      />

      {/* 04. Amenities Section */}
      <section className="section home-amenities">
        <div className="container">

          <Reveal className="max-w-[850px] mb-8">
            <p className="eyebrow mb-4">
              The art of club living
            </p>

            <h2 className="section-heading">
              Exceptional Experiences.{" "}
              <em className="text-gold">
                Every Single Day.
              </em>
            </h2>

            <p className="body-copy mt-4">
              Spaces for the active, the curious,
              the social and the young at heart.
            </p>
          </Reveal>

          <AmenitiesShowcase />

          <Link
            className="gold-link mt-7"
            href="/amenities"
          >
            View all amenities
            <ArrowUpRight size={16} />
          </Link>

        </div>
      </section>

      {/* 05. Services Section */}
      <ServicesSection />

      {/* 06. GC Pavilion Section */}
      <PavilionSection />

      {/* 07. Committee Section */}
      <CommitteeSection />

      {/* 08. Testimonials Section */}
      <TestimonialsSection />

      {/* 09. Explore More — Existing Section */}
      <section className="section home-explore">
        <div className="container">

          <Reveal className="mb-12">
            <p className="eyebrow mb-5">
              Explore more
            </p>

            <h2 className="section-heading">
              A World Within{" "}
              <em className="text-gold">
                the Club.
              </em>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-6">

            {extras.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group"
              >
                <Photo
                  src={c.image}
                  alt={c.title}
                  className="h-72"
                />

                <h3 className="serif text-2xl mt-5 group-hover:text-gold transition-colors">
                  {c.title} ↗
                </h3>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* 10. Membership CTA — Existing Section */}
      <SectionCTA />

    </div>
  );
}
