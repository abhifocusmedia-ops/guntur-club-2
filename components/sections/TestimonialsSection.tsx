
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import { GoldenWaves } from "@/components/artwork/GoldenWaves";

interface Testimonial {
  name: string;
  designation: string;
  message: string;
}


const testimonials: Testimonial[] = [
  {
    name: "K. Venkateswara Rao",
    designation: "Club Member",
    message:
      "This club is a great value for the money. The membership fees are reasonable.",
  },
  {
    name: "M. Anil Kumar",
    designation: "Club Member",
    message:
      "I love this club! The facilities are top-notch, the staff is friendly and helpful, and the atmosphere is fantastic.",
  },
  {
    name: "O. Venkata Ramana",
    designation: "Club Member",
    message:
      "The food and drinks at this club are excellent.",
  },
];


export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = () => {
    if (!testimonials.length) return;

    setActive(
      (current) => (current + 1) % testimonials.length
    );
  };

  const previous = () => {
    if (!testimonials.length) return;

    setActive(
      (current) =>
        (current - 1 + testimonials.length) %
        testimonials.length
    );
  };

  const current = testimonials[active];

  return (
    <section className="section home-testimonials">

      <GoldenWaves />

      <div className="container relative z-10">

        <Reveal className="text-center">

          <p className="eyebrow mb-4">
            Member Voices
          </p>

          <h2 className="section-heading">
            Stories from Our{" "}
            <em className="text-gold">Community.</em>
          </h2>

        </Reveal>

        <div className="testimonial-content">

          <Quote
            className="testimonial-quote"
            size={44}
            strokeWidth={1}
          />

          {current ? (
            <>
              <AnimatePresence mode="wait">

                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45 }}
                >

                  <blockquote className="testimonial-message">
                    {current.message}
                  </blockquote>

                  <div className="testimonial-divider" />

                  <h3 className="testimonial-name">
                    {current.name}
                  </h3>

                  <p className="eyebrow mt-2">
                    {current.designation}
                  </p>

                </motion.div>

              </AnimatePresence>

              {testimonials.length > 1 && (
                <div className="testimonial-controls">

                  <button
                    onClick={previous}
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <div className="testimonial-dots">

                    {testimonials.map((item, index) => (
                      <button
                        key={index}
                        className={
                          index === active
                            ? "active"
                            : ""
                        }
                        onClick={() => setActive(index)}
                        aria-label={`Testimonial ${index + 1}`}
                        aria-pressed={index === active}
                      />
                    ))}

                  </div>

                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                  >
                    <ArrowRight size={18} />
                  </button>

                </div>
              )}
            </>
          ) : (
            <p className="testimonial-message">
              Member stories and experiences
              will be featured here.
            </p>
          )}

        </div>

      </div>
    </section>
  );
}
