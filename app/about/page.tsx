
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import Photo from "@/components/ui/Photo";
import SectionCTA from "@/components/ui/SectionCTA";

import Reveal from "@/components/animations/Reveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

import HeritageTimeline from "@/components/sections/HeritageTimeline";
import CommitteeSection from "@/components/sections/CommitteeSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the heritage, traditions and managing committee of Guntur Club, established in 1929.",
};

export default function About() {
  return (
    <div className="about-page inner-page">

      {/* 01 — Page Banner */}

      <PageHero
        eyebrow="Established 1929"
        title="About Guntur Club"
        image="/images/club-exterior.webp"
      />

      {/* 02 — Animated Statistics */}

      <section className="about-stats">
        <div className="container stats">

          <Reveal className="stat">
            <strong>
              <AnimatedCounter value={1700} separator={true} suffix="+" />
            </strong>
            <p className="eyebrow mt-3">Distinguished Members</p>
          </Reveal>

          <Reveal className="stat">
            <strong>
              <AnimatedCounter value={16} />
            </strong>
            <p className="eyebrow mt-3">Affiliated Clubs</p>
          </Reveal>

          <Reveal className="stat">
            <strong>
              <AnimatedCounter value={97} />
            </strong>
            <p className="eyebrow mt-3">Years of Prestige · 2026</p>
          </Reveal>

          <Reveal className="stat">
            <strong>
              <AnimatedCounter value={3} suffix=" Acres" />
            </strong>
            <p className="eyebrow mt-3">Club Campus</p>
          </Reveal>

        </div>
      </section>

      {/* 03 — About Introduction */}

      <section className="section cream about-intro">
        <div className="container editorial-grid">

          {/* Left — Aerial Image */}

          <Reveal className="about-image-wrap">
            <Photo
              src="/images/club-aerial.webp"
              alt="Aerial view of Guntur Club campus"
              className="about-campus-photo"
            />

            <div className="about-image-label">
              A Campus with Character
            </div>
          </Reveal>

          {/* Right — About Content */}

          <Reveal className="about-intro-content">
            <p className="eyebrow mb-4">About Us</p>

            <h2 className="section-heading mb-5">
              More than a club.
              <br />
              <em>A place to belong.</em>
            </h2>

            <p className="body-copy mb-4">
              Established in 1929 as the famed English Club, Guntur Club has
              grown into a distinguished community founded on tradition,
              recreation and fellowship.
            </p>

            <p className="body-copy mb-5">
              Bringing together over 1,700 distinguished members, our campus
              offers exceptional spaces for sports, fitness, dining,
              celebrations and lasting connections across generations.
            </p>

            <Link href="/amenities" className="gold-link">
              Discover Club Life
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

        </div>
      </section>

      {/* 04 — Animated Heritage Timeline */}

      <HeritageTimeline />

      {/* 05 — All 11 Committee Members */}

      <CommitteeSection full />

      {/* 06 — Closing CTA */}

      <SectionCTA
        title="Make yourself part of the legacy."
        label="Connect with us"
        href="/contact"
      />

    </div>
  );
}
