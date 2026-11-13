/* oxlint-disable react/only-export-components */
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, UserRound } from "lucide-react";
import { AppointmentCTA, PageHero } from "@/components/inner-page-ui";
import { Reveal } from "@/components/reveal";
import { doctors } from "@/data/inner-pages";

export const metadata = {
  title: "Our Doctors | Abdullah Hospital",
  description:
    "Find verified doctor profiles and credentials at Abdullah Hospital. Profiles will be added when confirmed by the hospital.",
};

export default function DoctorsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our doctors"
        title={
          <>
            Meet the people behind <em>your care.</em>
          </>
        }
        description="Doctor profiles will be published here once names, qualifications and specializations are verified by Abdullah Hospital."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our doctors" }]}
      />
      <section className="inner-section">
        <div className="site-shell">
          <div className="directory-heading">
            <div>
              <span className="eyebrow">
                <span />
                The care team
              </span>
              <h2>
                Verified profiles, <em>coming soon.</em>
              </h2>
              <p>
                We will only publish doctor information supplied and approved by
                the hospital.
              </p>
            </div>
            <Link className="button button-outline" href="/contact">
              Ask about appointments{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          {doctors.length > 0 ? (
            <div className="inner-card-grid">
              {doctors.map((doctor) => (
                <article className="doctor-card" key={doctor.slug}>
                  <div className="doctor-card-photo">
                    <UserRound size={42} aria-hidden="true" />
                  </div>
                  <div className="doctor-card-body">
                    <span className="doctor-verified">
                      <BadgeCheck size={14} /> Hospital verified
                    </span>
                    <h2>{doctor.name}</h2>
                    <p>{doctor.qualifications}</p>
                    <strong>{doctor.specialization}</strong>
                    <Link
                      className="department-card-link-label"
                      href={`/doctors/${doctor.slug}`}
                    >
                      View profile <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <Reveal className="empty-profile-state">
              <span className="empty-profile-icon">
                <UserRound size={27} aria-hidden="true" />
              </span>
              <span className="eyebrow">
                <span />
                Profiles in preparation
              </span>
              <h2>No doctor profiles are published yet.</h2>
              <p>
                Doctor names, photographs, qualifications, specialties and
                availability will appear after the hospital verifies and
                approves them. No profile details have been invented.
              </p>
              <Link className="button button-primary" href="/contact">
                Contact the hospital{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          )}
        </div>
      </section>
      <AppointmentCTA
        title="Need help with appointment information?"
        description="Contact Abdullah Hospital directly for confirmed doctor and appointment details."
      />
    </main>
  );
}
