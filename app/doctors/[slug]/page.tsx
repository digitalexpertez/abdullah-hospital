/* oxlint-disable react/only-export-components */
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseMedical,
  GraduationCap,
  UserRound,
} from "lucide-react";
import { AppointmentCTA, PageHero } from "@/components/inner-page-ui";
import { Reveal } from "@/components/reveal";
import { doctors } from "@/data/inner-pages";

export function generateStaticParams() {
  return doctors.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);
  return {
    title: doctor
      ? `${doctor.name} | Our Doctors | Abdullah Hospital`
      : "Doctor Profile | Abdullah Hospital",
    description: doctor
      ? `Verified profile for ${doctor.name} at Abdullah Hospital.`
      : "Doctor profiles will be published after verification by Abdullah Hospital.",
  };
}

export default async function DoctorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);
  if (!doctor) notFound();

  return (
    <main>
      <PageHero
        eyebrow="Doctor profile"
        title={
          <>
            Meet <em>{doctor.name}.</em>
          </>
        }
        description="This profile includes information verified and approved by Abdullah Hospital."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our doctors", href: "/doctors" },
          { label: doctor.name },
        ]}
      />
      <section className="inner-section">
        <div className="site-shell doctor-profile-grid">
          <Reveal className="doctor-profile-photo">
            {doctor.image ? (
              <Image
                src={doctor.image}
                alt={`Portrait of ${doctor.name}`}
                fill
                loading="eager"
                sizes="(max-width: 760px) 100vw, 40vw"
              />
            ) : (
              <div
                className="doctor-photo-placeholder"
                aria-label="Doctor photograph not provided"
              >
                <UserRound size={54} aria-hidden="true" />
                <span>Photograph to be provided</span>
              </div>
            )}
          </Reveal>
          <Reveal className="doctor-profile-copy" delay={0.08}>
            <span className="doctor-verified">
              <BadgeCheck size={15} aria-hidden="true" /> Verified profile
            </span>
            <h2>{doctor.name}</h2>
            <p className="doctor-specialization">{doctor.specialization}</p>
            <p className="doctor-qualifications">{doctor.qualifications}</p>
            {doctor.experience && (
              <p className="doctor-meta">
                <BriefcaseMedical size={17} aria-hidden="true" />{" "}
                {doctor.experience} experience
              </p>
            )}
            {doctor.availability && (
              <p className="doctor-availability">
                Availability: {doctor.availability}
              </p>
            )}
            <Link className="button button-primary" href="/contact">
              Request appointment information{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="inner-section inner-section-mist">
        <div className="site-shell doctor-details-grid">
          <div>
            <span className="eyebrow">
              <span />
              Professional introduction
            </span>
            <h2>
              About <em>{doctor.name.split(" ")[0]}.</em>
            </h2>
            <p>
              {doctor.introduction ||
                "Professional introduction to be supplied and approved by the hospital."}
            </p>
          </div>
          <div className="doctor-expertise-card">
            <span className="doctor-expertise-icon">
              <GraduationCap size={22} aria-hidden="true" />
            </span>
            <h3>Areas of expertise</h3>
            {doctor.expertise?.length ? (
              <ul>
                {doctor.expertise.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>Expertise details to be confirmed by the hospital.</p>
            )}
          </div>
        </div>
      </section>
      <AppointmentCTA
        title={`Request an appointment with ${doctor.name}.`}
        description="Contact the hospital to confirm appointment availability and next steps."
      />
    </main>
  );
}
