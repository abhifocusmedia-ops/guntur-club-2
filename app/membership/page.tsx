import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Utensils, Globe, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import EnquiryForm from "@/components/ui/EnquiryForm";
import Reveal from "@/components/animations/Reveal";
import { contact } from "@/data/site";

export const metadata: Metadata = { title: "Membership Enquiry" };
const benefits = [
  {
    Icon: Trophy,
    title: "Sports & Wellness",
    text: "Explore the club’s sports and fitness facilities.",
  },
  {
    Icon: Utensils,
    title: "Dining & Fellowship",
    text: "Discover welcoming spaces for dining and social gatherings.",
  },
  {
    Icon: Globe,
    title: "Affiliated Club Network",
    text: "Enquire about reciprocal access to affiliated clubs.",
  },
  {
    Icon: Users,
    title: "A Distinguished Community",
    text: "Be part of a tradition of recreation and fellowship.",
  },
];
export default function Membership() {
  return (
    <div className="inner-page remaining-page membership-inner">
      <PageHero
        eyebrow="A Life of Distinction"
        title="Belong to the Legacy."
        image="/images/club-aerial.webp"
      />
      <section className="section inner-ivory">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-3">Club Membership</p>
            <h2 className="section-heading mb-4">
              Your next chapter begins here.
            </h2>
            <p className="body-copy">
              Discover a community built around sports, recreation, leisure and
              fellowship. Ask our team about membership categories and
              applicable access arrangements.
            </p>
          </Reveal>
          <div className="membership-benefits">
            {benefits.map(({ Icon, title, text }, i) => (
              <Reveal
                key={title}
                delay={i * 0.07}
                className="membership-benefit"
              >
                <Icon size={25} strokeWidth={1.4} aria-hidden="true" />
                <h3>{title}</h3>
                <p className="body-copy">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="membership-enquiry" className="section inner-cream">
        <div className="container inner-editorial enquiry-editorial">
          <Reveal>
            <p className="eyebrow mb-3">Membership Enquiry</p>
            <h2 className="section-heading mb-5">Express your interest.</h2>
            <p className="body-copy mb-6">
              For eligibility, fees, membership categories and the application
              process, please contact the club directly.
            </p>
            <ol className="membership-steps">
              {[
                "Submit your interest using the enquiry form.",
                "Discuss membership categories and eligibility with the club.",
                "Confirm the applicable procedure with the membership team.",
              ].map((step, i) => (
                <li key={step}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
            <Link className="gold-link mt-5" href="/privacy-policy">
              Privacy Policy
            </Link>
          </Reveal>
          <div className="remaining-form">
            <h3 className="serif">Make an Enquiry.</h3>
            <EnquiryForm defaultType="Membership Enquiry" />
          </div>
        </div>
      </section>
      <section className="section inner-dark">
        <div className="container enquiry-assistance">
          <div>
            <p className="eyebrow mb-3">Membership Assistance</p>
            <h2 className="section-heading mb-3">Speak with our team.</h2>
            <p className="body-copy">
              Get guidance directly from the club before applying.
            </p>
          </div>
          <a
            className="gold-link"
            href={`tel:${contact.phone.replace(/\D/g, "")}`}
          >
            {contact.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
