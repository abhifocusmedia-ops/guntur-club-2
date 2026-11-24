import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { contact } from "@/data/site";
export const metadata: Metadata = { title: "Contact Us" };
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const enquiryType =
    type === "guest-room"
      ? "Guest Room Enquiry"
      : type === "function-hall"
        ? "Function Hall Enquiry"
        : "General Enquiry";
  return (
    <div className="inner-page remaining-page contact-inner">
      <PageHero
        eyebrow="We’re Here to Assist"
        title="Let’s Connect."
        image="/images/club-exterior.webp"
      />
      <section className="section inner-ivory">
        <div className="container editorial-grid !items-start">
          <div>
            <p className="eyebrow mb-7">Guntur Club</p>
            <h2 className="section-heading">
              We Look Forward to Hearing from You.
            </h2>
            <p className="body-copy my-8">
              Whether you have a question, need assistance or wish to explore
              the club, our team is here to help.
            </p>
            <address className="not-italic space-y-7">
              <div>
                <p className="eyebrow">Visit Us</p>
                <p className="body-copy mt-3">{contact.address}</p>
              </div>
              <div>
                <p className="eyebrow">Telephone</p>
                <a className="block mt-3 serif text-2xl" href="tel:08632233703">
                  {contact.phone}
                </a>
                <a className="block mt-2 serif text-2xl" href="tel:08632355241">
                  {contact.phone2}
                </a>
              </div>
              <div>
                <p className="eyebrow">Email</p>
                <a
                  className="block mt-3 serif text-2xl"
                  href={"mailto:" + contact.email}
                >
                  {contact.email}
                </a>
              </div>
            </address>
            <a
              className="gold-link mt-7"
              href={contact.map}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions ↗
            </a>
          </div>
          <div className="remaining-form">
            <p className="eyebrow mb-4">Send a Message</p>
            <h3 className="serif text-4xl mb-9">How May We Help?</h3>
            <EnquiryForm defaultType={enquiryType} />
          </div>
        </div>
      </section>
      <section className="section inner-cream text-center">
        <div className="container">
          <p className="eyebrow mb-5">Find Us</p>
          <h2 className="section-heading mb-7">At the Heart of Guntur.</h2>
          <p className="body-copy mx-auto mb-7">{contact.address}</p>
          <a
            className="btn"
            href={contact.map}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Location on Google Maps ↗
          </a>
        </div>
      </section>
      <section className="section inner-dark">
        <div className="container">
          <p className="eyebrow mb-3">Here to help</p>
          <h2 className="section-heading mb-4">Speak with our team.</h2>
          <a className="gold-link" href="tel:08632233703">
            0863 2233 703
          </a>
        </div>
      </section>
    </div>
  );
}
