import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
export const metadata: Metadata = { title: "Privacy Policy" };
export default function Privacy() {
  return (
    <div className="inner-page remaining-page privacy-policy-inner">
      <PageHero
        eyebrow="Website Information"
        title="Privacy Policy."
        image="/images/club-exterior.webp"
      />
      <section className="section inner-ivory">
        <div className="container max-w-[880px]">
          <h2 className="section-heading mb-8">Your Information.</h2>
          <p className="body-copy">
            This website includes optional enquiry forms asking for your name,
            email, phone number and message. Submitted details are sent to the
            designated club contact email when the form service is configured.
            They are used to respond to your enquiry and are not intended for
            public display.
          </p>
          <h3 className="serif text-3xl mt-12 mb-4">Third-party services</h3>
          <p className="body-copy">
            The site may use hosting services and email delivery providers to
            operate enquiries. The directions link opens Google Maps, which has
            its own privacy terms. No advertising tracking is implemented in
            this starter project.
          </p>
          <h3 className="serif text-3xl mt-12 mb-4">Contact</h3>
          <p className="body-copy">
            For questions about information you have submitted, contact
            info@gunturclub.com. This is a starter privacy notice and should be
            reviewed and approved by the club before production launch.
          </p>
        </div>
      </section>
      <section className="section inner-dark">
        <div className="container">
          <h2 className="section-heading mb-4">Privacy enquiries</h2>
          <a className="gold-link" href="mailto:info@gunturclub.com">
            Contact the club
          </a>
        </div>
      </section>
    </div>
  );
}
