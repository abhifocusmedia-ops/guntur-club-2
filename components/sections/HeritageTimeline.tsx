
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import { GoldenWaves } from "@/components/artwork/GoldenWaves";

const milestones = [
  {
    year: "1929",
    title: "A formal beginning.",
    description:
      "The club was registered under the Companies Act, laying the foundation for its enduring legacy.",
  },
  {
    year: "1977",
    title: "A community comes together.",
    description:
      "Following a devastating cyclone, members united through donations and contributions to restore the club.",
  },
  {
    year: "1998",
    title: "A new home. The same heart.",
    description:
      "The club relocated to its present property, beginning a new chapter of growth and fellowship.",
  },
  {
    year: "2029",
    title: "Towards a century of excellence.",
    description:
      "Looking ahead to 100 years of heritage, prestige and meaningful connections.",
    future: true,
  },
];

export default function HeritageTimeline() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section heritage-timeline">

      <GoldenWaves />

      <div className="container relative z-10">

        {/* Section Heading */}

        <Reveal className="timeline-heading">

          <p className="eyebrow mb-4">
            Milestones in Our Journey
          </p>

          <h2 className="section-heading">
            Time moves on.{" "}
            <em className="text-gold">
              Our spirit endures.
            </em>
          </h2>

          <p className="body-copy mt-4">
            A journey shaped by tradition, resilience
            and generations of fellowship.
          </p>

        </Reveal>

        {/* Timeline */}

        <div className="timeline-track">

          <motion.div
            className="timeline-progress"
            initial={
              reducedMotion
                ? false
                : { scaleX: 0 }
            }
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reducedMotion ? 0 : 2,
              ease: "easeInOut",
            }}
          />

          {milestones.map((item, index) => (

            <motion.article
              key={item.year}
              className={`timeline-item ${
                item.future ? "timeline-future" : ""
              }`}
              initial={
                reducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: reducedMotion ? 0 : 0.8,
                delay: reducedMotion ? 0 : index * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span className="timeline-year">
                {item.year}
              </span>

              <div
                className="timeline-marker"
                aria-hidden="true"
              >
                <span />
              </div>

              <div className="timeline-detail">

                {item.future && (
                  <p className="eyebrow mb-3">
                    Looking Ahead
                  </p>
                )}

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}
