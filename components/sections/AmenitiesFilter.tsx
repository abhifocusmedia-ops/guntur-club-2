"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Photo from "@/components/ui/Photo";
import { amenities } from "@/data/site";

const categories = ["All", "Sports", "Wellness", "Dining", "Recreation"] as const;
type Category = typeof categories[number];
const categoryBySlug: Record<string, Category> = {
  "bar-and-restaurant": "Dining", "swimming-pool": "Wellness", "gym-and-fitness": "Wellness",
  badminton: "Sports", pickleball: "Sports", "billiards-and-snooker": "Sports", "air-pistol-shooting": "Sports", "kids-play-area": "Recreation",
};
const facilities = [...amenities,
  {slug:"gardens", title:"Landscaped Gardens", tagline:"Beautiful spaces.", description:"Scenic landscaped gardens for relaxed moments at the club.", image:"/images/gardens.webp"},
  {slug:"amphitheatre", title:"Open-Air Amphitheatre", tagline:"Moments together.", description:"An outdoor setting for social gatherings and recreation.", image:"/images/amphitheatre.webp"},
].map(a => ({...a, category: categoryBySlug[a.slug] ?? "Recreation"}));

const pavilionLinks: Record<string, string> = {
  pickleball: "/gc-pavilion#pickleball",
  "billiards-and-snooker": "/gc-pavilion#billiards",
  "air-pistol-shooting": "/gc-pavilion#air-pistol-shooting",
};
const stayLinks: Record<string, string> = {
  gardens: "/stay-and-celebrate#gardens",
  amphitheatre: "/stay-and-celebrate#amphitheatre",
};

export default function AmenitiesFilter() {
  const [category, setCategory] = useState<Category>("All");
  const reduced = useReducedMotion();
  useEffect(() => {
    function sync() {
      const url = new URL(window.location.href);
      const target = facilities.find(a => `#${a.slug}` === url.hash);
      const selected = categories.find(c => c.toLowerCase() === url.searchParams.get("category")?.toLowerCase());
      setCategory(target?.category ?? selected ?? "All");
    }
    sync(); window.addEventListener("popstate", sync); window.addEventListener("hashchange", sync);
    return () => { window.removeEventListener("popstate", sync); window.removeEventListener("hashchange", sync); };
  }, []);
  useEffect(() => {
    const target = facilities.find(a => `#${a.slug}` === window.location.hash);
    if (target && (category === "All" || category === target.category)) {
      const id = requestAnimationFrame(() => document.getElementById(target.slug)?.scrollIntoView({block:"start", behavior:"instant"}));
      return () => cancelAnimationFrame(id);
    }
  }, [category]);
  function choose(next: Category) {
    setCategory(next);
    const url = new URL(window.location.href);
    url.hash = "";
    if (next === "All") url.searchParams.delete("category"); else url.searchParams.set("category", next.toLowerCase());
    window.history.replaceState(window.history.state, "", url);
  }
  const visible = facilities.filter(a => category === "All" || a.category === category);
  return <section className="section inner-cream amenities-directory" id="facilities">
    <div className="container">
      <p className="eyebrow">Explore the club</p>
      <h2 className="section-heading mt-3">Find your kind of <em>leisure.</em></h2>
      <div className="inner-filter" role="group" aria-label="Filter amenities">
        {categories.map(c => <button key={c} type="button" aria-pressed={category===c} onClick={()=>choose(c)}>{c}</button>)}
      </div>
      <p className="amenities-result-count" aria-live="polite">{visible.length} facilities</p>
      <div className="amenities-directory-grid">
        <AnimatePresence initial={false}>
          {visible.map((a,i) => <motion.article key={a.slug} id={a.slug} className={`amenities-directory-card${a.image ? "" : " amenity-text-card"}`} layout={!reduced}
            initial={reduced ? false : {opacity:0,y:18}} animate={{opacity:1,y:0}} exit={reduced ? {opacity:1} : {opacity:0}} transition={{duration:reduced?0:.35,delay:reduced?0:Math.min(i*.045,.18)}}>
            {a.image && <Photo src={a.image} alt={a.title} className="amenities-directory-photo" />}
            <div className="amenities-directory-copy">
              <p className="eyebrow">{a.category}</p><h3>{a.title}</h3>
              <p className="body-copy">{a.description}</p>
              <Link className="gold-link" href={pavilionLinks[a.slug] ?? stayLinks[a.slug] ?? "/contact"}>{pavilionLinks[a.slug] ? "Explore Pavilion" : stayLinks[a.slug] ? "Explore the venue" : "Enquire now"}<ArrowUpRight size={15}/></Link>
            </div>
          </motion.article>)}
        </AnimatePresence>
      </div>
    </div>
  </section>;
}
