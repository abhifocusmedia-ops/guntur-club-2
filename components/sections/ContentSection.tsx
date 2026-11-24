import Link from "next/link";
import Photo from "@/components/ui/Photo";
import Reveal from "@/components/animations/Reveal";
import { ArrowUpRight } from "lucide-react";
export default function ContentSection({
  eyebrow,
  title,
  text,
  image,
  href,
  link = "Explore More",
  light = false,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string | null;
  href: string;
  link?: string;
  light?: boolean;
  reverse?: boolean;
}) {
  return (
    <section className={"section " + (light ? "cream" : "")}>
      <div
        className={
          "container editorial-grid " +
          (reverse ? "[&>div:first-child]:md:order-2" : "")
        }
      >
        <Reveal>
          <Photo src={image} alt={title} className="h-[260px] md:h-[360px]" />
        </Reveal>
        <Reveal>
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h2 className="section-heading mb-7">{title}</h2>
          <p className="body-copy mb-7">{text}</p>
          <Link href={href} className="gold-link">
            {link}
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
