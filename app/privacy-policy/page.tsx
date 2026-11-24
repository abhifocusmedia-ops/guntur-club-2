import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { contact } from "@/data/site";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Information about enquiry data submitted through the Guntur Club website.",
};
// Draft: club approval required before public launch.
export default function Privacy() {
  return (
    <div className="inner-page remaining-page privacy-policy-inner">
      <PageHero
        eyebrow="Website Information"
        title="Privacy Policy."
        image="/images/club-exterior.webp"
      />
      <section className="section inner-ivory">
        <div className="container">
          <div className="privacy-copy">
            <h2 className="section-heading mb-5">Your information.</h2>
            <p className="body-copy">
              This notice describes how information submitted through the Guntur
              Club website enquiry forms is handled.
            </p>
            <h3>Information submitted through forms</h3>
            <p className="body-copy">
              The enquiry forms request your name, email address, phone number,
              enquiry type, message and consent to being contacted about your
              enquiry.
            </p>
            <h3>Purpose of processing</h3>
            <p className="body-copy">
              The website is designed to send your enquiry to the designated
              club email address so the club team can respond. Please avoid
              including sensitive or unnecessary personal information in your
              message.
            </p>
            <h3>Service providers and external links</h3>
            <p className="body-copy">
              Website hosting and email delivery services may process
              information needed to operate the website and deliver enquiries.
              External services, including Google Maps, have their own privacy
              notices.
            </p>
            <h3>Questions and requests</h3>
            <p className="body-copy">
              For questions about your submitted information, including requests
              concerning its retention, correction or deletion, please contact
              the club using the details below.
            </p>
          </div>
        </div>
      </section>
      <section className="section inner-dark">
        <div className="container">
          <h2 className="section-heading mb-4">Privacy enquiries</h2>
          <a className="gold-link" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
      </section>
    </div>
  );
}
