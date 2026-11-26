
"use client";

import { useState } from "react";
import Image from "next/image";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  Quote,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import { GoldenWaves } from "@/components/artwork/GoldenWaves";

const testimonials = [
  {
    name: "K. Venkateswara Rao",
    designation: "Club Member",
    image: "/images/testimonials/venkateswara-rao.jpg",
    initials: "VR",
    message:
      "This club is a great value for the money. The membership fees are reasonable.",
  },
  {
    name: "M. Anil Kumar",
    designation: "Club Member",
    image: "/images/testimonials/anil-kumar.jpg",
    initials: "AK",
    message:
      "I love this club! The facilities are top-notch, the staff is friendly and helpful, and the atmosphere is fantastic.",
  },
  {
    name: "O. Venkata Ramana",
    designation: "Club Member",
    image: "/images/testimonials/venkata-ramana.jpg",
    initials: "VR",
    message:
      "The food and drinks at this club are excellent.",
  },
];

function MemberPortrait({
  member,
}: {
  member: (typeof testimonials)[number];
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="testimonial-portrait-frame">
      <div className="testimonial-portrait">

        {!imageError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="160px"
            className="testimonial-member-photo"
            quality={95}
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="testimonial-initials">
            {member.initials}
          </span>
        )}

      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();

  const current = testimonials[active];

  const next = () => {
    setActive(
      (previous) =>
        (previous + 1) % testimonials.length
    );
  };

  const previous = () => {
    setActive(
      (previous) =>
        (previous - 1 + testimonials.length) %
        testimonials.length
    );
  };

  return (
    <section className="section home-testimonials">

      <GoldenWaves />

      <div className="container relative z-10">

        <Reveal className="text-center">

          <p className="eyebrow mb-4">
            Member Voices
          </p>

          <h2 className="section-heading">
            Stories from{" "}
            <em className="text-gold">
              Our Community.
            </em>
          </h2>

        </Reveal>

        <div
          className="testimonial-content"
          aria-live="polite"
        >

          <AnimatePresence mode="wait">

            <motion.div
              key={current.name}
              className="testimonial-member-layout"

              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, y: 18 }
              }

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                y: -12,
              }}

              transition={{
                duration: reducedMotion ? 0 : 0.45,
                ease: "easeInOut",
              }}
            >

              {/* Member photograph */}

              <MemberPortrait member={current} />

              {/* Testimonial message */}

              <div className="testimonial-copy">

                <Quote
                  size={34}
                  strokeWidth={1.2}
                  className="testimonial-quote"
                  aria-hidden="true"
                />

                <blockquote className="testimonial-message">
                  “{current.message}”
                </blockquote>

                <div className="testimonial-divider" />

                <h3 className="testimonial-name">
                  {current.name}
                </h3>

                <p className="eyebrow mt-2">
                  {current.designation}
                </p>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* Slider navigation */}

          <div className="testimonial-controls">

            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="testimonial-dots">

              {testimonials.map((item, index) => (

                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className={
                    active === index ? "active" : ""
                  }
                  aria-label={`View testimonial ${index + 1}`}
                  aria-pressed={active === index}
                />

              ))}

            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
