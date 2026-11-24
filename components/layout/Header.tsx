"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav, contact } from "@/data/site";
import { AnimatePresence, motion } from "framer-motion";
export default function Header() {
  const [scrolled, setScrolled] = useState(false),
    [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 45);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <header
        className={
          "fixed z-[90] top-0 w-full border-b border-transparent transition-all duration-500 " +
          (scrolled || open
            ? "scrolled-header"
            : "bg-gradient-to-b from-black/65 to-transparent")
        }
      >
        <div className="container">
          <div className="hidden md:flex justify-between items-center h-8 border-b border-white/20 text-[9px] tracking-[.19em] text-[#d0c3ad]">
            <span>A LEGACY OF PRESTIGE — SINCE 1929</span>
            <div className="flex gap-7">
              <a href={"tel:" + contact.phone.replace(/\D/g, "")}>
                {contact.phone}
              </a>
              <Link href="/membership">MEMBERSHIP ENQUIRY</Link>
            </div>
          </div>
          <div className="h-[78px] flex items-center justify-between gap-5">
            <Link
              href="/"
              className="club-brand"
              aria-label="Guntur Club homepage"
            >
              <Image
                src="/images/branding/guntur-club-logo.png"
                alt="Guntur Club — Established in 1929"
                width={540}
                height={470}
                className="club-brand-logo"
                priority
              />
            </Link>
            <nav
              className="desktop-nav flex items-center gap-[clamp(12px,1.7vw,29px)]"
              aria-label="Primary navigation"
            >
              {nav.map((n) => (
                <Link
                  key={n.href}
                  className={"nav-link " + (path === n.href ? "active" : "")}
                  href={n.href}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <Link className="btn desktop-nav" href="/membership">
              Membership <ArrowUpRight size={14} />
            </Link>
            <button
              className="mobile-only items-center justify-center text-gold"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35 }}
            className="menu-cover"
            aria-label="Mobile navigation"
          >
            {nav.map((n, i) => (
              <motion.div
                key={n.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.045 }}
              >
                <Link href={n.href}>{n.label}</Link>
              </motion.div>
            ))}
            <Link className="text-gold" href="/membership">
              Membership Enquiry
            </Link>
            <p className="mt-auto text-sm text-[#bcb2a3]">
              {contact.phone} · {contact.email}
            </p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
