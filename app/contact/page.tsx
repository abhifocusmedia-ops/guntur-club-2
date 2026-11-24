import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import EnquiryForm from "@/components/ui/EnquiryForm";
import Reveal from "@/components/animations/Reveal";
import { contact } from "@/data/site";

export const metadata: Metadata = { title: "Contact Us" };
const enquiryTypes: Record<string, string> = {
  "guest-room": "Guest Room Enquiry",
  "function-hall": "Function Hall Enquiry",
  membership: "Membership Enquiry",
  amenity: "Amenity Enquiry",
  pavilion: "Amenity Enquiry",
  general: "General Enquiry",
};
const tel = (phone: string) => `tel:${phone.replace(/\D/g, "")}`;
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ type?: string | string[] }>;
}) {
  const { type } = await searchParams;
  const enquiryType =
    typeof type === "string" &&
    Object.prototype.hasOwnProperty.call(enquiryTypes, type)
      ? enquiryTypes[type]
      : "General Enquiry";
  return (
    <div className="inner-page remaining-page contact-inner">
      <PageHero
        eyebrow="We’re Here to Assist"
        title="Let’s Connect."
        image="/images/club-exterior.webp"
      />
      <section className="section inner-ivory">
        <div className="container inner-editorial enquiry-editorial">
          <Reveal>
            <p className="eyebrow mb-3">Guntur Club</p>
            <h2 className="section-heading mb-5">
              We look forward to hearing from you.
            </h2>
            <p className="body-copy mb-6">
              Contact our team for club information, reservations and membership
              enquiries.
            </p>
            <address className="contact-directory not-italic">
              <div>
                <MapPin size={22} aria-hidden="true" />
                <div>
                  <p className="eyebrow">Visit Us</p>
                  <p className="body-copy">{contact.address}</p>
                </div>
              </div>
              <div>
                <Phone size={22} aria-hidden="true" />
                <div>
                  <p className="eyebrow">Telephone</p>
                  <a href={tel(contact.phone)}>{contact.phone}</a>
                  <a href={tel(contact.phone2)}>{contact.phone2}</a>
                </div>
              </div>
              <div>
                <Mail size={22} aria-hidden="true" />
                <div>
                  <p className="eyebrow">Email</p>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
            </address>
          </Reveal>
          <div id="contact-enquiry" className="remaining-form">
            <p className="eyebrow mb-3">Send a Message</p>
            <h3 className="serif">How May We Help?</h3>
            <EnquiryForm key={enquiryType} defaultType={enquiryType} />
            <Link href="/privacy-policy" className="gold-link mt-4">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
      <section className="section inner-cream">
        <div className="container enquiry-assistance">
          <Reveal>
            <p className="eyebrow mb-3">Find Us</p>
            <h2 className="section-heading mb-4">At the heart of Guntur.</h2>
            <p className="body-copy">{contact.address}</p>
          </Reveal>
          <a
            className="btn"
            href={contact.map}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
      <section className="section inner-dark">
        <div className="container enquiry-assistance">
          <div>
            <p className="eyebrow mb-3">Here to Help</p>
            <h2 className="section-heading mb-3">Prefer to speak directly?</h2>
            <p className="body-copy">
              Call the club for assistance with your enquiry.
            </p>
          </div>
          <a className="gold-link" href={tel(contact.phone)}>
            {contact.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
