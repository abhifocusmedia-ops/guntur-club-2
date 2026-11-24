"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Photo from "@/components/ui/Photo";
import Reveal from "@/components/animations/Reveal";

const categories = ["All", "Accommodation", "Wellness", "Entertainment"] as const;
type Category = typeof categories[number];
const services = [
  { id:"accommodation", category:"Accommodation", title:"Stay in comfort. Relax in style.", label:"Guest Room Booking", text:"Well-appointed guest rooms offer modern amenities, complimentary Wi-Fi and a peaceful atmosphere. Contact the club for reservations and availability.", image:"/images/guest-room.webp", href:"/guest-rooms", link:"Explore Guest Rooms", theme:"inner-ivory" },
  { id:"wellness", category:"Wellness", title:"A healthier club lifestyle.", label:"Health Camp for Members", text:"The club supports member wellbeing through fitness and recreation. Contact the club directly for information on health camps and current programmes.", image:"/images/gym.webp", href:"/contact", link:"Enquire About Programmes", theme:"inner-cream" },
  { id:"entertainment", category:"Entertainment", title:"Good company. Memorable evenings.", label:"Entertainment", text:"Discover spaces for social gatherings and entertainment, including the grand open-air amphitheatre. Contact the club for current programme information.", image:"/images/amphitheatre.webp", href:"/gallery", link:"Explore Club Life", theme:"inner-dark" },
] as const;

export default function ServicesFilter() {
  const [active, setActive] = useState<Category>("All");
  const reduced = useReducedMotion();
  const visible = services.filter(item => active === "All" || item.category === active);
  return <>
    <section className="section inner-ivory">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-3">Thoughtful Hospitality</p>
          <h2 className="section-heading">Services for every occasion.</h2>
          <p className="body-copy mt-4">Discover the services available to our club community.</p>
        </Reveal>
        <div className="inner-filter" role="group" aria-label="Filter services">
          {categories.map(category => <button type="button" key={category} aria-pressed={active === category} onClick={() => setActive(category)}>{category}</button>)}
        </div>
        <p className="sr-only" role="status">{visible.length} services shown</p>
      </div>
    </section>
    <AnimatePresence initial={false} mode="wait">
      <motion.div key={active} initial={reduced ? false : {opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduced ? 0 : .25}}>
        {visible.map((item, i) => <section id={item.id} key={item.id} className={`section inner-service-row ${item.theme}`}>
          <div className={`container inner-editorial ${i % 2 ? "is-reversed" : ""}`}>
            <Reveal><Photo src={item.image} alt={item.label} className="inner-photo" /></Reveal>
            <Reveal delay={.1}>
              <p className="eyebrow mb-3">{item.label}</p>
              <h2 className="section-heading mb-5">{item.title}</h2>
              <p className="body-copy mb-5">{item.text}</p>
              <Link className="gold-link" href={item.href}>{item.link}<ArrowUpRight size={16}/></Link>
            </Reveal>
          </div>
        </section>)}
      </motion.div>
    </AnimatePresence>
  </>;
}
