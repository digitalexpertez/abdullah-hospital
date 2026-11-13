/* oxlint-disable react/only-export-components */
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  AppointmentCTA,
  PageHero,
  SectionTitle,
} from "@/components/inner-page-ui";
import { Reveal } from "@/components/reveal";
import { facilityCategories } from "@/data/inner-pages";

export const metadata = {
  title: "Facilities | Abdullah Hospital",
  description:
    "Explore editable hospital facility categories. Availability and details must be confirmed by Abdullah Hospital.",
};

export default function FacilitiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Hospital facilities"
        title={
          <>
            Designed to support <em>your visit.</em>
          </>
        }
        description="Explore facility categories and service areas. The list is an editable content framework; availability has not yet been confirmed by the hospital."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Facilities" }]}
      />
      <section className="inner-section">
        <div className="site-shell facilities-intro-grid">
          <Reveal className="facilities-intro-copy">
            <SectionTitle
              eyebrow="What’s available"
              title={
                <>
                  Clear information, <em>when you need it.</em>
                </>
              }
            />
            <p className="inner-body-copy">
              Use this page to help plan a visit once Abdullah Hospital confirms
              its facilities, hours and access arrangements. Please contact the
              hospital for current information.
            </p>
            <p className="editorial-note">
              All categories are placeholders only and do not confirm that a
              facility or service is available.
            </p>
            <Link className="button button-outline" href="/contact">
              Ask about a facility <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal className="facilities-intro-image" delay={0.08}>
            <Image
              src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1400&q=85"
              alt="Representative hospital interior, not a photograph of Abdullah Hospital"
              fill
              loading="eager"
              sizes="(max-width: 760px) 100vw, 48vw"
              className="cover-image"
            />
            <span className="image-disclaimer">
              Representative healthcare imagery
            </span>
          </Reveal>
        </div>
      </section>
      <section className="inner-section inner-section-mist">
        <div className="site-shell">
          <SectionTitle
            eyebrow="Facility categories"
            title={
              <>
                A guide to hospital <em>services and spaces.</em>
              </>
            }
            description="Each category can be updated with verified descriptions, visiting details and availability after review by the hospital."
          />
          <div className="facility-category-grid">
            {facilityCategories.map(
              ({ name, description, icon: Icon }, index) => (
                <Reveal
                  className="facility-category-card"
                  key={name}
                  delay={(index % 5) * 0.035}
                >
                  <span className="facility-category-icon">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <span className="facility-pending">
                    <span /> Pending confirmation
                  </span>
                  <h2>{name}</h2>
                  <p>{description}</p>
                  <span className="facility-card-foot">
                    <CheckCircle2 size={15} aria-hidden="true" /> Details to be
                    confirmed
                  </span>
                </Reveal>
              ),
            )}
          </div>
          <p className="editorial-note">
            Categories shown: Emergency &amp; Trauma Care, ICU, NICU, Operation
            Theatre, Laboratory, Radiology, Pharmacy, Ambulance, Inpatient and
            Outpatient Services.
          </p>
        </div>
      </section>
      <AppointmentCTA
        title="Need to confirm a facility before your visit?"
        description="Get in touch with Abdullah Hospital for current availability and visitor information."
      />
    </main>
  );
}
