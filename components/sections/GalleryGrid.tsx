"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gallery } from "@/data/site";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const reduced = useReducedMotion();

  const options = ["All", ...new Set(gallery.map((g) => g.category))];

  const list =
    filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  const opened = selected !== null;
  const current = selected === null ? null : list[selected];

  function move(delta: number) {
    if (!list.length) return;

    setSelected((i) =>
      i === null ? null : (i + delta + list.length) % list.length,
    );
  }

  useEffect(() => {
    const el = dialog.current;

    if (!opened || !el) return;

    const old = document.body.style.overflow;
    const opener = trigger.current;

    el.showModal();
    document.body.style.overflow = "hidden";

    closeButton.current?.focus();

    return () => {
      el.close();
      document.body.style.overflow = old;

      if (opener?.isConnected) {
        opener.focus({ preventScroll: true });
      }
    };
  }, [opened]);

  return (
    <>
      {/* Gallery filters */}

      <div
        className="inner-filter gallery-filters"
        aria-label="Filter photographs"
      >
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={filter === o}
            onClick={() => {
              setSelected(null);
              setFilter(o);
            }}
          >
            {o}
          </button>
        ))}
      </div>

      {/* Photograph count */}

      <p className="gallery-result-count" role="status">
        {list.length} {list.length === 1 ? "photograph" : "photographs"}
      </p>

      {/* Premium gallery cards */}

      <div className="gallery-grid gc-gallery-grid">
        {list.map((g, i) => (
          <motion.button
            key={`${filter}-${g.image}-${i}`}
            type="button"
            className="gallery-tile block text-left w-full"
            aria-label={`Open image: ${g.title}`}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.35,
              delay: reduced ? 0 : Math.min(i * 0.045, 0.3),
            }}
            onClick={(e) => {
              trigger.current = e.currentTarget;
              setSelected(i);
            }}
          >
            {/* Expandable photograph */}

            <div className="gc-gallery-card-image card-image">
              <Image
                src={g.image}
                alt={g.title}
                fill
                quality={95}
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 440px"
                className="image-cover"
              />
            </div>

            {/* Black gradient overlay */}

            <div className="gc-gallery-card-overlay" aria-hidden="true" />

            {/* Default caption below image */}

            <div className="gc-gallery-card-caption">
              <p className="eyebrow">{g.category}</p>

              <h3 className="serif">{g.title}</h3>
            </div>

            {/* Animated caption inside image */}

            {/* Letter-by-letter animated caption */}

            <div className="gc-gallery-hover-caption" aria-hidden="true">
              <p className="eyebrow gc-gallery-hover-category">{g.category}</p>

              <span className="serif gc-gallery-letter-title">
                {g.title.split(" ").map((word, wordIndex, words) => {
                  const offset = words
                    .slice(0, wordIndex)
                    .reduce((sum, item) => sum + item.length + 1, 0);

                  return (
                    <span className="gc-gallery-word" key={wordIndex}>
                      {Array.from(word).map((letter, letterIndex) => (
                        <span
                          key={letterIndex}
                          className="gc-gallery-letter"
                          style={{
                            transitionDelay: `${
                              450 + (offset + letterIndex) * 35
                            }ms`,
                          }}
                        >
                          {letter}
                        </span>
                      ))}

                      {wordIndex < words.length - 1 && "\u00A0"}
                    </span>
                  );
                })}
              </span>

              <ArrowUpRight size={24} className="gc-gallery-hover-arrow" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Fullscreen gallery lightbox */}

      <dialog
        ref={dialog}
        className="gc-gallery-dialog"
        aria-label="Gallery image viewer"
        data-lenis-prevent
        onCancel={(e) => {
          e.preventDefault();
          setSelected(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            move(1);
          }

          if (e.key === "ArrowLeft") {
            e.preventDefault();
            move(-1);
          }
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setSelected(null);
          }
        }}
      >
        {current && (
          <div className="gc-gallery-viewer">
            <button
              ref={closeButton}
              type="button"
              className="gc-gallery-close"
              aria-label="Close gallery"
              onClick={() => setSelected(null)}
            >
              <X size={28} />
            </button>

            <div className="gc-gallery-full">
              <Image
                src={current.image}
                alt={current.title}
                fill
                quality={100}
                sizes="(max-width: 768px) 95vw, 1100px"
                className="object-contain"
              />
            </div>

            <p className="serif text-xl" aria-live="polite">
              {current.title}
            </p>

            <div className="gc-gallery-controls">
              <button
                className="btn"
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous image"
              >
                <ArrowLeft size={20} />
              </button>

              <span>
                {(selected ?? 0) + 1} / {list.length}
              </span>

              <button
                className="btn"
                type="button"
                onClick={() => move(1)}
                aria-label="Next image"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
