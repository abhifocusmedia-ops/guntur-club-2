
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export default function PavilionSection() {
  return (
    <section className="pavilion-section">

      {/* Left Side - Club Image */}
      <div className="pavilion-image">
        <Image
          src="/images/amphitheatre.webp"
          alt="Guntur Club evening amphitheatre"
          fill
          sizes="(max-width: 768px) 100vw, 52vw"
          className="pavilion-photo"
        />
      </div>

      {/* Right Side - Content */}
      <div className="pavilion-content">

        {/* Architectural Background Artwork */}
        <div className="pavilion-artwork" aria-hidden="true">
          <svg
            viewBox="0 0 900 450"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <g className="pavilion-art-lines">
              <path d="M300 500 V290 C300 70 650 10 950 160" />
              <path d="M350 500 V310 C350 100 690 40 950 190" />
              <path d="M400 500 V330 C400 130 720 70 950 220" />

              <path d="M0 320 Q420 180 950 210" />
              <path d="M0 345 Q420 195 950 225" />

              <path d="M300 290 H950" />
              <path d="M350 310 H950" />

              <path d="M375 500 V310" />
              <path d="M450 500 V325" />
              <path d="M875 500 V325" />
            </g>
          </svg>
        </div>

        {/* Text Content */}
        <Reveal className="pavilion-text">

          <p className="pavilion-eyebrow">
            A New Chapter in Our Legacy
          </p>

          <h2 className="pavilion-title">
            Introducing
            <br />
            <em>GC Pavilion.</em>
          </h2>

          <p className="pavilion-description">
            A contemporary home for world-class sports
            and recreation. Discover professional
            pickleball, billiards, snooker and
            precision shooting.
          </p>

          <Link
            href="/gc-pavilion"
            className="pavilion-link"
          >
            Explore the facilities
            <ArrowUpRight size={16} />
          </Link>

        </Reveal>
      </div>

    </section>
  );
}
