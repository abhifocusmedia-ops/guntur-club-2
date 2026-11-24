"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ArrowUpRight } from "lucide-react";
import { amenities } from "@/data/site";

export default function AmenitiesShowcase() {
  const [idx, setIdx] = useState(0);

  const listRef = useRef<HTMLDivElement>(null);

  const reduceMotion = useReducedMotion();

  const a = amenities[idx];
  const amenityLinks: Record<string, string> = {
    pickleball: "/gc-pavilion#pickleball",
    "billiards-and-snooker": "/gc-pavilion#billiards",
    "air-pistol-shooting": "/gc-pavilion#air-pistol-shooting",
  };

  const destination = amenityLinks[a.slug] || `/amenities#${a.slug}`;

  /* ======================================
     INDIVIDUAL SCROLL REVEAL ANIMATION
  ====================================== */

  useEffect(() => {
    if (!listRef.current || reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".amenity-reveal");

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            x: -55,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.85,
            delay: (index % 4) * 0.1,
            ease: "power3.out",

            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              once: true,
            },
          },
        );
      });
    }, listRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <div className="amenities-showcase-layout">
      {/* ==================================
          LEFT SIDE — AMENITIES LIST
      ================================== */}

      <div ref={listRef} className="amenities-list">
        {amenities.map((item, i) => (
          <div key={item.slug} className="amenity-reveal">
            <button
              type="button"
              onMouseEnter={() => setIdx(i)}
              onFocus={() => setIdx(i)}
              onClick={() => setIdx(i)}

              className={`amenity-item ${idx === i ? "selected" : ""}`}

              aria-pressed={idx === i}
              aria-controls="amenity-preview"
            >
              <span className="amenity-title">{item.title}</span>

              <span className="amenity-indicator">
                <small>{String(i + 1).padStart(2, "0")}</small>

                <ArrowUpRight size={17} className="amenity-arrow" />
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* ==================================
          RIGHT SIDE — STICKY IMAGE
      ================================== */}

      <div className="amenities-visual" id="amenity-preview">
        <div className="amenities-image-frame">
          <AnimatePresence mode="wait">
            {a.image ? (
              <motion.div
                key={a.slug}

                initial={reduceMotion ? false : { opacity: 0, scale: 1.07 }}

                animate={{
                  opacity: 1,
                  scale: 1,
                }}

                exit={{ opacity: 0 }}

                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  ease: "easeInOut",
                }}

                className="absolute inset-0"
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="image-cover"
                />
              </motion.div>
            ) : (
              <motion.div
                key={a.slug}

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}

                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                }}

                className="absolute inset-0 flex justify-center items-center p-10 text-center text-gold bg-gradient-to-br from-[#4e3826] to-[#140e0d]"
              >
                Official facility photograph to be added
              </motion.div>
            )}
          </AnimatePresence>

          {/* Image Content Overlay */}

          <div className="amenities-image-overlay">
            <p className="eyebrow mb-2">
              {String(idx + 1).padStart(2, "0")}
              {" / "}
              {String(amenities.length).padStart(2, "0")}
            </p>

            <h3 className="amenities-preview-title">{a.title}</h3>

            <p className="amenities-preview-description">{a.description}</p>

            <Link href={destination} className="gold-link">
              Discover more
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
