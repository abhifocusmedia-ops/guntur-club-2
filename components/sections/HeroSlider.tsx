"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Keyboard,
  A11y,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
  ArrowDown,
} from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
const slides = [
  {
    eyebrow: "Established in 1929",
    lines: ["A Legacy of Prestige.", "A Life of Distinction."],
    text: "Where heritage, leisure and fellowship come together.",
    image: "/images/club-exterior.webp",
    href: "/about",
    cta: "Discover Our Legacy",
  },
  {
    eyebrow: "97 years of prestige · 2026",
    lines: ["More Than a Club.", "A Place to Belong."],
    text: "A distinguished community built on tradition and shared experiences.",
    image: "/images/club-aerial.webp",
    href: "/about",
    cta: "Explore the Club",
  },
  {
    eyebrow: "A new chapter in our legacy",
    lines: ["The Art of", "Sporting Excellence."],
    text: "A contemporary destination for sports and recreation.",
    image: "/images/pavilion.webp",
    href: "/gc-pavilion",
    cta: "Explore GC Pavilion",
  },
  {
    eyebrow: "Exceptional, every day",
    lines: ["Leisure.", "Redefined."],
    text: "Unwind, connect and enjoy the finer moments of club life.",
    image: "/images/pool.webp",
    href: "/amenities",
    cta: "Discover Our Amenities",
  },
  {
    eyebrow: "Moments worth celebrating",
    lines: ["Exceptional Spaces.", "Memorable Occasions."],
    text: "Elegant settings for gatherings, celebrations and relaxing stays.",
    image: "/images/function-hall.webp",
    href: "/stay-and-celebrate",
    cta: "Stay & Celebrate",
  },
];
export default function HeroSlider() {
  const swiper = useRef<SwiperType | null>(null);
  const [current, setCurrent] = useState(0),
    [paused, setPaused] = useState(false);
  return (
    <section className="hero-slider" aria-label="Featured club experiences">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination, Keyboard, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        keyboard={{ enabled: true }}
        loop
        onSwiper={(s) => {
          swiper.current = s;
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            s.autoplay.stop();
        }}
        onSlideChange={(s) => setCurrent(s.realIndex)}
        className="h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={s.image}>
            <div className="absolute inset-0 hero-shade">
              <div className="hero-image">
                <Image
                  src={s.image}
                  alt={s.eyebrow}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="image-cover"
                  quality={95}
                />
              </div>
            </div>
            <div className="hero-slide-inner">
              <div className="container pt-20">
                <div className="max-w-[1030px]">
                  <p className="eyebrow mb-7">{s.eyebrow}</p>
                  <h1 className="hero-slide-title">
                    {s.lines.map((line, k) => (
                      <span key={k}>{k === 1 ? <em>{line}</em> : line}</span>
                    ))}
                  </h1>
                  <p className="body-copy mt-8 mb-8 text-[#e1dbd2]">{s.text}</p>
                  <Link className="btn" href={s.href}>
                    {s.cta}
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-8 left-0 w-full z-10">
        <div className="container flex items-center justify-between gap-2 md:gap-6">
          <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-5 text-xs tracking-[.17em] text-gold">
            <span>{String(current + 1).padStart(2, "0")} / 05</span>
            <div className="hero-progress">
              <span
                key={current}
                style={{
                  animation: paused ? "none" : "progress 7s linear forwards",
                }}
                className="w-full"
              />
            </div>
          </div>
          <a
            href="#heritage"
            className="hidden md:flex items-center gap-3 text-xs tracking-[.18em] text-white"
          >
            SCROLL TO EXPLORE
            <ArrowDown size={15} />
          </a>
          <div className="flex shrink-0 gap-1 sm:gap-2">
            <button
              className="h-11 w-11 border border-[#bba477] grid place-items-center"
              aria-label="Previous slide"
              onClick={() => swiper.current?.slidePrev()}
            >
              <ArrowLeft size={17} />
            </button>
            <button
              className="h-11 w-11 border border-[#bba477] grid place-items-center"
              aria-label={paused ? "Play slides" : "Pause slides"}
              onClick={() => {
                if (paused) swiper.current?.autoplay.start();
                else swiper.current?.autoplay.stop();
                setPaused(!paused);
              }}
            >
              {paused ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <button
              className="h-11 w-11 border border-[#bba477] grid place-items-center"
              aria-label="Next slide"
              onClick={() => swiper.current?.slideNext()}
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
