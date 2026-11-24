
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import { committeeMembers } from "@/data/committee";

interface CommitteeSectionProps {
  full?: boolean;
}

export default function CommitteeSection({
  full = false,
}: CommitteeSectionProps) {

  const members = full
    ? committeeMembers
    : committeeMembers.slice(0, 3);

  return (
    <section
      id={full ? "committee" : undefined}
      className={`section cream ${
        full ? "full-committee" : "home-committee"
      }`}
    >
      <div className="container">

        {/* Section Header */}

        <Reveal className="reference-committee-header">

          <p className="eyebrow mb-3">
            {full ? "Guiding Our Legacy" : "Leadership"}
          </p>

          <h2 className="section-heading">
            {full ? (
              <>Managing <em>Committee.</em></>
            ) : (
              <>Meet the <em>committee.</em></>
            )}
          </h2>

          {full && (
            <p className="body-copy mx-auto mt-4">
              Preserving our club's traditions
              and guiding its next chapter.
            </p>
          )}

        </Reveal>

        {/* Committee Members */}

        <div
          className={`reference-committee-grid ${
            full ? "full-committee-grid" : ""
          }`}
        >

          {members.map((member, index) => (

            <Reveal
              key={member.name}
              delay={(index % 4) * 0.08}
              className="reference-committee-card"
            >

              <div className="reference-committee-image">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 260px"
                  className="object-cover"
                />

              </div>

              <div className="reference-committee-info">

                <h3>{member.name}</h3>

                <p>{member.designation}</p>

              </div>

            </Reveal>

          ))}

        </div>

        {/* Only display this button on homepage */}

        {!full && (
          <Reveal className="committee-bottom-link">

            <Link
              href="/about#committee"
              className="reference-text-link"
            >
              View All Committee Members
              <ArrowUpRight size={16} />
            </Link>

          </Reveal>
        )}

      </div>
    </section>
  );
}
