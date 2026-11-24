import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import EnquiryForm from "@/components/ui/EnquiryForm";
export const metadata: Metadata = { title: "Membership Enquiry" };
export default function Membership() {
  return (
    <div className="inner-page remaining-page membership-inner">
      <PageHero
        eyebrow="A Life of Distinction"
        title="Belong to the Legacy."
        image="/images/club-aerial.webp"
      />
      <section className="section inner-ivory">
        <div className="container editorial-grid !items-start">
          <div>
            <p className="eyebrow mb-7">Membership Enquiry</p>
            <h2 className="section-heading">
              Your Story at Guntur Club Begins Here.
            </h2>
            <p className="body-copy mt-7">
              Guntur Club is home to more than 1,700 distinguished members, who
              enjoy a legacy of sports, recreation, leisure and fellowship.
            </p>
            <p className="body-copy mt-5">
              For membership categories, eligibility, fees and application
              procedures, please enquire with the club directly.
            </p>
          </div>
          <div className="remaining-form">
            <h3 className="serif text-4xl mb-9">Make an Enquiry.</h3>
            <EnquiryForm defaultType="Membership Enquiry" />
          </div>
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
