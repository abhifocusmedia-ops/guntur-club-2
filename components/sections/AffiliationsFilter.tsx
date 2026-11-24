"use client";
import { useState } from "react";
import { affiliations } from "@/data/site";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function AffiliationsFilter() {
  const [state, setState] = useState("All");
  const reduced = useReducedMotion();
  const groups = Object.entries(affiliations).filter(
    ([name]) => state === "All" || name === state,
  );
  const count = groups.reduce((sum, [, clubs]) => sum + clubs.length, 0);
  return (
    <>
      <div
        className="inner-filter affiliation-filters"
        role="group"
        aria-label="Filter clubs by state"
      >
        {["All", ...Object.keys(affiliations)].map((name) => (
          <button
            type="button"
            key={name}
            aria-pressed={state === name}
            onClick={() => setState(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <p className="body-copy affiliation-count" role="status">
        {count} affiliated {count === 1 ? "club" : "clubs"}
      </p>
      <AnimatePresence mode="wait">
        <motion.div
          key={state}
          className="affiliation-grid"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.28 }}
        >
          {groups.map(([name, clubs]) => (
            <article className="affiliation-card" key={name}>
              <header>
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <h3>{name}</h3>
                  <p className="eyebrow">
                    {clubs.length} affiliated{" "}
                    {clubs.length === 1 ? "club" : "clubs"}
                  </p>
                </div>
              </header>
              <ul>
                {clubs.map((club) => (
                  <li key={club}>{club}</li>
                ))}
              </ul>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
