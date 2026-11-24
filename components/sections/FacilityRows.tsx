"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Photo from "@/components/ui/Photo";
export type FacilityRow = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string | null;
  href: string;
  label: string;
};
export default function FacilityRows({
  items,
  categories,
}: {
  items: FacilityRow[];
  categories: string[];
}) {
  const [filter, setFilter] = useState("All");
  const reduced = useReducedMotion();
  useEffect(() => {
    const sync = () => {
      const url = new URL(window.location.href);
      const item = items.find((i) => "#" + i.id === url.hash);
      const category = categories.find(
        (c) =>
          c.toLowerCase().replaceAll(" ", "-") ===
          url.searchParams.get("category"),
      );
      setFilter(item?.category ?? category ?? "All");
    };
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, [items, categories]);
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const frame = requestAnimationFrame(() =>
      document.getElementById(id)?.scrollIntoView({ block: "start" }),
    );
    return () => cancelAnimationFrame(frame);
  }, [filter]);
  function choose(c: string) {
    setFilter(c);
    const url = new URL(window.location.href);
    url.hash = "";
    if (c === "All") url.searchParams.delete("category");
    else url.searchParams.set("category", c.toLowerCase().replaceAll(" ", "-"));
    window.history.replaceState(null, "", url);
  }
  const visible = items.filter(
    (i) => filter === "All" || i.category === filter,
  );
  return (
    <>
      <section className="section inner-cream">
        <div className="container">
          <p className="eyebrow">Explore the facilities</p>
          <h2 className="section-heading mt-3">Find your perfect space.</h2>
          <div
            className="inner-filter"
            role="group"
            aria-label="Filter facilities"
          >
            {["All", ...categories].map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => choose(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="body-copy mt-4" aria-live="polite">
            {visible.length} facilities
          </p>
        </div>
      </section>
      <AnimatePresence initial={false}>
        {visible.map((i) => {
          const index = items.indexOf(i);
          return (
            <motion.section
              key={i.id}
              id={i.id}
              className={`section facility-row ${index % 3 === 1 ? "inner-cream" : "inner-ivory"}`}
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.35 }}
            >
              <div
                className={`container inner-editorial ${index % 2 ? "is-reversed" : ""}`}
              >
                <motion.div
                  initial={
                    reduced ? false : { opacity: 0, x: index % 2 ? 24 : -24 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: reduced ? 0 : 0.7 }}
                >
                  {i.image ? (
                    <Photo
                      src={i.image}
                      alt={i.title}
                      className="inner-photo"
                    />
                  ) : (
                    <div className="facility-image-pending">
                      <span className="eyebrow">GC Pavilion</span>
                      <p>Individual facility photograph pending</p>
                    </div>
                  )}
                </motion.div>
                <motion.div
                  initial={reduced ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: reduced ? 0 : 0.65 }}
                >
                  <p className="eyebrow mb-3">{i.category}</p>
                  <h2 className="section-heading mb-5">{i.title}</h2>
                  <p className="body-copy mb-5">{i.description}</p>
                  <Link href={i.href} className="gold-link">
                    {i.label}
                    <ArrowUpRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </motion.section>
          );
        })}
      </AnimatePresence>
    </>
  );
}
