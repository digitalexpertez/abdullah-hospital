/* oxlint-disable react/only-export-components */
import Image from "next/image";
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
  Telescope,
} from "lucide-react";
import {
  AppointmentCTA,
  PageHero,
  SectionTitle,
  TextLink,
} from "@/components/inner-page-ui";
import { Reveal } from "@/components/reveal";

const values = [
  {
    icon: HeartHandshake,
    title: "A thoughtful welcome",
    text: "A proposed commitment to listen carefully and communicate with clarity.",
  },
  {
    icon: ShieldCheck,
    title: "Trust through transparency",
    text: "Share verified information so patients can make informed next steps.",
  },
  {
    icon: Sparkles,
    title: "Care with consideration",
    text: "An editable value statement for review by the hospital team.",
  },
];

const infrastructureHighlights = [
  "Patient spaces",
  "Clinical areas",
  "Diagnostic services",
  "Care support",
];

export const metadata = {
  title: "About Us | Abdullah Hospital",
  description:
    "Learn about Abdullah Hospital. Mission, vision and hospital details are presented as editable content pending approval.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Abdullah Hospital"
        title={
          <>
            A more considered <em>care experience.</em>
          </>
        }
        description="An introduction to Abdullah Hospital, with approved history, services and organisational details to be added by the hospital team."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}
      />

      <section className="inner-section">
        <div className="site-shell about-intro-grid">
          <Reveal className="about-intro-visual">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85"
              alt="Representative image of a clinician listening to a patient"
              fill
              loading="eager"
              sizes="(max-width: 760px) 100vw, 48vw"
              className="cover-image"
            />
            <span className="image-disclaimer">
              Representative healthcare imagery
            </span>
          </Reveal>
          <Reveal className="about-intro-copy" delay={0.08}>
            <SectionTitle
              eyebrow="A hospital introduction"
              title={
                <>
                  Care begins with <em>understanding.</em>
                </>
              }
            />
            <p className="inner-body-copy">
              Abdullah Hospital’s approved introduction will be shared here.
              This space is ready for the hospital’s story, approach to care,
              location and the services it confirms.
            </p>
            <p className="inner-body-copy">
              We are building this page around clear, useful information—so
              visitors can learn about the hospital and know how to reach the
              right team.
            </p>
            <TextLink href="/departments">Explore departments</TextLink>
          </Reveal>
        </div>
      </section>

      <section className="inner-section inner-section-mist">
        <div className="site-shell story-grid">
          <Reveal>
            <SectionTitle
              eyebrow="Our story"
              title={
                <>
                  Rooted in care, <em>growing with you.</em>
                </>
              }
            />
            <p className="inner-body-copy">
              The hospital’s founding story, milestones and community history
              are awaiting confirmation. Add the approved narrative here before
              publication.
            </p>
          </Reveal>
          <Reveal className="story-note" delay={0.08}>
            <span className="story-note-icon">
              <HeartHandshake size={24} aria-hidden="true" />
            </span>
            <span className="eyebrow">A note for the hospital team</span>
            <h3>Make the story your own.</h3>
            <p>
              Replace this draft with verified dates, leadership details and the
              hospital’s preferred description.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="inner-section">
        <div className="site-shell">
          <SectionTitle
            eyebrow="Our direction"
            title={
              <>
                The values that shape <em>our purpose.</em>
              </>
            }
            description="Mission and vision statements below are editable drafts and should be approved by Abdullah Hospital before launch."
            centered
          />
          <div className="purpose-grid">
            <Reveal className="purpose-card">
              <span className="purpose-icon">
                <Target size={23} aria-hidden="true" />
              </span>
              <span className="purpose-label">Mission · draft</span>
              <h3>To provide care with clarity and compassion.</h3>
              <p>
                Proposed placeholder statement—replace with the hospital’s
                approved mission.
              </p>
            </Reveal>
            <Reveal className="purpose-card" delay={0.08}>
              <span className="purpose-icon">
                <Telescope size={23} aria-hidden="true" />
              </span>
              <span className="purpose-label">Vision · draft</span>
              <h3>To be a trusted partner in every health journey.</h3>
              <p>
                Proposed placeholder statement—replace with the hospital’s
                approved vision.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="inner-section inner-section-mist">
        <div className="site-shell">
          <SectionTitle
            eyebrow="Why choose us"
            title={
              <>
                Care should feel <em>clear and personal.</em>
              </>
            }
            description="These are design principles for the website, not claims about unverified hospital services."
          />
          <div className="value-grid">
            {values.map(({ icon: Icon, title, text }, index) => (
              <Reveal className="value-card" key={title} delay={index * 0.06}>
                <span className="value-icon">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="site-shell">
          <SectionTitle
            eyebrow="Our infrastructure"
            title={
              <>
                Spaces designed around <em>your visit.</em>
              </>
            }
            description="The categories below are placeholders. Facility names, availability and descriptions must be confirmed by the hospital."
          />
          <div className="infrastructure-grid">
            {infrastructureHighlights.map((item, index) => (
              <Reveal
                className="infrastructure-card"
                key={item}
                delay={index * 0.04}
              >
                <span className="infrastructure-number">0{index + 1}</span>
                <h3>{item}</h3>
                <p>Details to be confirmed</p>
              </Reveal>
            ))}
          </div>
          <TextLink href="/facilities">View facility categories</TextLink>
        </div>
      </section>

      <AppointmentCTA
        title="We’re ready to help you find the right information."
        description="Reach out to the hospital team about appointments, departments and confirmed services."
      />
    </main>
  );
}
