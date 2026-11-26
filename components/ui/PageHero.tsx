import Image from "next/image";
import Link from "next/link";
import { GoldenWaves } from "@/components/artwork/GoldenWaves";

export default function PageHero({
  eyebrow,
  title,
  image,
}: {
  eyebrow: string;
  title: string;
  image: string;
}) {
  return (
    <section className="page-hero hero-shade premium-page-hero">
      <Image
        src={image}
        alt="Guntur Club"
        fill
        priority
        sizes="100vw"
        className="image-cover premium-hero-image"
        quality={95}
      />
      <GoldenWaves />
      <div className="container page-hero-content">
        <p className="eyebrow mb-5 premium-hero-eyebrow">{eyebrow}</p>
        <h1 className="display max-w-[1000px] premium-hero-title">
          <span>{title}</span>
        </h1>
        <nav
          aria-label="Breadcrumb"
          className="mt-8 text-xs text-[#e7dbc9] premium-hero-breadcrumb"
        >
          <Link href="/">Home</Link> <span className="px-3 text-gold">/</span>{" "}
          {title}
        </nav>
      </div>
    </section>
  );
}
