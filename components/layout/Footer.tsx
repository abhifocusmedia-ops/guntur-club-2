import Link from "next/link";
import Image from "next/image";
import { contact, nav, amenities } from "@/data/site";
import { GoldenWaves } from "@/components/artwork/GoldenWaves";
export default function Footer() {
  return (
    <footer className="site-footer relative section pb-8 border-t border-[#514331] overflow-hidden">
      <GoldenWaves />
      <div className="container relative z-10">
        <div className="foot-grid">
          <div>
            <Link href="/" aria-label="Guntur Club homepage">
              <Image
                src="/images/branding/guntur-club-logo.png"
                alt="Guntur Club"
                width={540}
                height={470}
                className="footer-brand-logo"
              />
            </Link>
            <p className="body-copy mt-5">
              Prestige. Fellowship. A Way of Life.
            </p>
            <a
              href="/documents/guntur-club-brochure-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-link"
            >
              View Club Brochure 2026 ↗
            </a>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="eyebrow">Club Life</p>
            {amenities.slice(0, 6).map((a) => (
              <Link key={a.slug} href={"/amenities/" + a.slug}>
                {a.title}
              </Link>
            ))}
          </div>
          <div>
            <p className="eyebrow">Get in Touch</p>
            <p className="body-copy mt-4 text-sm">{contact.address}</p>
            <a href={"tel:" + contact.phone.replace(/\D/g, "")}>
              {contact.phone}
            </a>
            <a href={"tel:" + contact.phone2.replace(/\D/g, "")}>
              {contact.phone2}
            </a>
            <a href={"mailto:" + contact.email}>{contact.email}</a>
            <a href={contact.map} target="_blank" rel="noopener noreferrer">
              Directions ↗
            </a>
          </div>
        </div>
        <div className="divider my-16" />
        <div className="flex flex-wrap justify-between text-xs text-[#918477] gap-5">
          <span>
            © {new Date().getFullYear()} Guntur Club. All rights reserved.
          </span>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span>Heritage · Leisure · Fellowship</span>
        </div>
      </div>
    </footer>
  );
}
