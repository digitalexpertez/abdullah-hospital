/* oxlint-disable react/only-export-components */
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Stethoscope } from "lucide-react";
import {
  AppointmentCTA,
  PageHero,
  SectionTitle,
} from "@/components/inner-page-ui";
import { Reveal } from "@/components/reveal";
import { departments } from "@/data/inner-pages";

export function generateStaticParams() {
  return departments.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const department = departments.find((item) => item.slug === slug);
  return {
    title: department
      ? `${department.name} | Departments | Abdullah Hospital`
      : "Department | Abdullah Hospital",
    description: department
      ? `${department.name} department information. Services and availability are pending confirmation by Abdullah Hospital.`
      : "Department information is pending confirmation by Abdullah Hospital.",
  };
}

export default async function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const department = departments.find((item) => item.slug === slug);
  if (!department) notFound();

  const relatedDepartments = departments
    .filter((item) => item.slug !== department.slug)
    .slice(0, 3);
  const sections = [
    { title: "Services provided", items: department.services },
    { title: "Conditions treated", items: department.conditions },
    { title: "Available facilities", items: department.facilities },
  ];

  return (
    <main>
      <PageHero
        eyebrow={department.category}
        title={
          <>
            {department.name} <em>department.</em>
          </>
        }
        description="Department details are being prepared. Please contact Abdullah Hospital to confirm the current services and availability."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Departments", href: "/departments" },
          { label: department.name },
        ]}
      />

      <section className="inner-section">
        <div className="site-shell detail-intro-grid">
          <Reveal className="detail-image-wrap">
            <Image
              src={department.image}
              alt={`Representative image for ${department.name}`}
              fill
              loading="eager"
              sizes="(max-width: 760px) 100vw, 52vw"
              className="cover-image"
            />
            <span className="image-disclaimer">
              Illustrative imagery — not a hospital photograph
            </span>
          </Reveal>
          <Reveal className="detail-intro-copy" delay={0.08}>
            <span className="eyebrow">
              <span />
              Department overview
            </span>
            <h2>
              Information to guide your <em>next step.</em>
            </h2>
            <p>{department.introduction}</p>
            <p>
              Specific services, care pathways, conditions and facilities will
              be listed here after review and approval by the hospital.
            </p>
            <Link className="button button-primary" href="/contact">
              Ask about this department{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="inner-section inner-section-mist">
        <div className="site-shell">
          <SectionTitle
            eyebrow="Department information"
            title={
              <>
                What you can expect to find <em>here.</em>
              </>
            }
            description="The lists below are intentionally marked pending until official information is provided."
          />
          <div className="detail-lists-grid">
            {sections.map(({ title, items }, index) => (
              <Reveal
                className="detail-list-card"
                key={title}
                delay={index * 0.05}
              >
                <h3>{title}</h3>
                {items.length > 0 ? (
                  <ul>
                    {items.map((item) => (
                      <li key={item}>
                        <Check size={15} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Information to be confirmed by Abdullah Hospital.</p>
                )}
              </Reveal>
            ))}
          </div>
          <p className="editorial-note">
            No medical advice or treatment claims are provided here. Contact the
            hospital for verified department information.
          </p>
        </div>
      </section>

      <section className="inner-section">
        <div className="site-shell related-doctors-panel">
          <span className="related-doctors-icon">
            <Stethoscope size={22} aria-hidden="true" />
          </span>
          <div>
            <span className="eyebrow">
              <span />
              Meet the care team
            </span>
            <h2>
              Doctor profiles are <em>coming soon.</em>
            </h2>
            <p>
              Verified doctor names and credentials will be listed once supplied
              by the hospital.
            </p>
          </div>
          <Link className="button button-outline" href="/doctors">
            View doctors <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="inner-section inner-section-mist">
        <div className="site-shell">
          <SectionTitle
            eyebrow="Explore more"
            title={
              <>
                Related <em>departments.</em>
              </>
            }
            description="Browse other categories. All department content remains pending hospital confirmation."
          />
          <div className="related-department-grid">
            {relatedDepartments.map((item) => (
              <Link
                className="related-department-card"
                href={`/departments/${item.slug}`}
                key={item.slug}
              >
                <span>{item.category}</span>
                <strong>{item.name}</strong>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <AppointmentCTA
        title={`Ask us about ${department.name}.`}
        description="Contact the hospital to confirm department information and request appointment guidance."
      />
    </main>
  );
}
