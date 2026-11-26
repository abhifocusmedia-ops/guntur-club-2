"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useReducedMotion } from "framer-motion";
import "swiper/css";
import Reveal from "@/components/animations/Reveal";
import { committeeMembers } from "@/data/committee";

interface CommitteeSectionProps {
  full?: boolean;
}

export default function CommitteeSection({
  full = false,
}: CommitteeSectionProps) {
  const reduced = useReducedMotion();

  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const [paused, setPaused] = useState(false);

  const homeMembers = committeeMembers.slice(0, 4);

  // Duplicate slides to support seamless looping
  const carouselMembers = [...homeMembers, ...homeMembers];

  useEffect(() => {
    if (!swiper || swiper.destroyed) return;

    if (paused || reduced) {
      swiper.autoplay?.stop();
    } else {
      swiper.autoplay?.start();
    }
  }, [swiper, paused, reduced]);

  return (
    <section
      id={full ? "committee" : undefined}
      className={`section cream ${full ? "full-committee" : "home-committee"}`}
    >
      <div className="container">
        {/* Section Header */}

        <Reveal className="reference-committee-header">
          <p className="eyebrow mb-3">
            {full ? "Guiding Our Legacy" : "Leadership"}
          </p>

          <h2 className="section-heading">
            {full ? (
              <>
                Managing <em>Committee.</em>
              </>
            ) : (
              <>
                Meet the <em>committee.</em>
              </>
            )}
          </h2>

          {full && (
            <p className="body-copy mx-auto mt-4">
              Preserving our club&apos;s traditions and guiding its next
              chapter.
            </p>
          )}
        </Reveal>

        {full ? (
          /* ABOUT PAGE — EXISTING COMMITTEE GRID */

          <div className="reference-committee-grid full-committee-grid">
            {committeeMembers.map((member, index) => (
              <Reveal
                key={member.name}
                delay={(index % 4) * 0.08}
                className="reference-committee-card"
              >
                <div className="reference-committee-image">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>

                <div className="reference-committee-info">
                  <h3>{member.name}</h3>

                  <p>{member.designation}</p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          /* HOMEPAGE — AUTOMATIC COMMITTEE CAROUSEL */

          <div
            className="gc-committee-carousel"
            role="region"
            aria-label="Club leadership carousel"
          >
            <ul className="sr-only">
              {homeMembers.map((member) => (
                <li key={member.name}>
                  {member.name}, {member.designation}
                </li>
              ))}
            </ul>

            <Swiper
              modules={[Autoplay]}
              onSwiper={setSwiper}
              loop
              speed={reduced ? 0 : 1200}
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={14}
              initialSlide={3}
              allowTouchMove
              autoplay={{
                delay: 3200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 18,
                },
                1025: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="gc-committee-swiper"
            >
              {carouselMembers.map((member, index) => (
                <SwiperSlide key={`${member.name}-${index}`}>
                  <article
                    className="gc-committee-slide-card"
                    aria-hidden="true"
                  >
                    <div className="gc-committee-frame">
                      <span className="gc-frame-corner top-left" />
                      <span className="gc-frame-corner top-right" />
                      <span className="gc-frame-corner bottom-left" />
                      <span className="gc-frame-corner bottom-right" />

                      <div className="gc-committee-portrait">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          quality={95}
                          sizes="(max-width: 639px) 80vw, (max-width: 1024px) 33vw, 310px"
                          className="gc-committee-photo"
                        />

                        <div className="gc-committee-overlay" />

                        <div className="gc-committee-details">
                          <span className="gc-committee-gold-line" />

                          <div className="gc-committee-name-mask">
                            <h3 className="gc-committee-name">{member.name}</h3>
                          </div>

                          <div className="gc-committee-role-mask">
                            <p className="gc-committee-role">
                              {member.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            {!reduced && (
              <div className="gc-committee-playback">
                <button
                  type="button"
                  aria-label={
                    paused
                      ? "Resume committee carousel"
                      : "Pause committee carousel"
                  }
                  onClick={() => setPaused((value) => !value)}
                >
                  {paused ? <Play size={14} /> : <Pause size={14} />}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Homepage CTA */}

        {!full && (
          <Reveal className="committee-bottom-link">
            <Link href="/about#committee" className="btn gc-committee-cta">
              View All Committee Members
              <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
