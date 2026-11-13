import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  HeartHandshake,
  HandHeart,
  HeartPulse,
  MapPin,
  Phone,
  Plus,
  Stethoscope,
} from "lucide-react";
import { carePillars, services } from "@/data/homepage";
import { HoverLift, Reveal } from "@/components/reveal";

const heroImage =
  "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1400&q=85";
const aboutImage =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85";
const detailImage =
  "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=85";

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`section-heading${centered ? " is-centered" : ""}`}>
      <span className="eyebrow">
        <span />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="site-shell hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="hero-kicker">
              <span className="kicker-dot" /> A little more care, in every
              moment
            </span>
            <h1>
              Care that puts <em>you</em> at the heart of it.
            </h1>
            <p className="hero-description">
              A more considered hospital experience—where your questions are
              heard, your care is personal, and every next step feels clearer.
            </p>
            <div className="hero-actions">
              <a className="button button-primary button-large" href="#contact">
                Book an appointment{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-outline button-large" href="#contact">
                <Phone size={17} aria-hidden="true" /> Contact the hospital
              </a>
            </div>
            <div className="hero-assurance">
              <span className="assurance-icon">
                <Check size={16} aria-hidden="true" />
              </span>
              <p>
                <strong>24/7 emergency care*</strong>
                <small>*Availability and contact details to be confirmed</small>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay={0.12}>
          <div className="hero-image-wrap">
            <Image
              src={heroImage}
              alt="Healthcare professionals in a bright, modern care setting"
              fill
              preload
              loading="eager"
              sizes="(max-width: 760px) 100vw, 52vw"
              className="cover-image"
            />
            <div className="hero-image-shade" />
            <div className="hero-image-label">
              <span className="live-dot" />
              <span>Care, made personal</span>
            </div>
            <div className="hero-stamp" aria-hidden="true">
              <Plus size={24} strokeWidth={2.2} />
              <small>
                CARE
                <br />
                FIRST
              </small>
            </div>
          </div>
          <div className="hero-note">
            <span className="note-icon">
              <HeartPulse size={21} aria-hidden="true" />
            </span>
            <span>
              <strong>A place to feel cared for</strong>
              <small>Thoughtful support, at every step</small>
            </span>
            <ArrowUpRight className="note-arrow" size={18} aria-hidden="true" />
          </div>
          <span className="visual-caption">
            Representative healthcare imagery
          </span>
        </Reveal>
      </div>
      <a
        href="#quick-care"
        className="scroll-hint"
        aria-label="Scroll to explore"
      >
        <ArrowDown size={16} /> Explore
      </a>
    </section>
  );
}

export function QuickInfoSection() {
  const items = [
    {
      icon: HeartPulse,
      title: "24/7 emergency care*",
      detail: "Availability to be confirmed",
    },
    {
      icon: Clock3,
      title: "Timely appointments",
      detail: "Hours and booking details pending",
    },
    {
      icon: Stethoscope,
      title: "Experienced clinicians",
      detail: "Verified team details coming soon",
    },
    {
      icon: HandHeart,
      title: "Patient-first approach",
      detail: "Care that starts with listening",
    },
  ];

  return (
    <section
      className="quick-section"
      id="quick-care"
      aria-label="Care highlights"
    >
      <div className="site-shell quick-grid">
        {items.map(({ icon: Icon, title, detail }, index) => (
          <Reveal key={title} delay={index * 0.06}>
            <div className="quick-card">
              <span className="quick-icon">
                <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span>
                <strong>{title}</strong>
                <small>{detail}</small>
              </span>
              <ArrowUpRight
                className="quick-arrow"
                size={16}
                aria-hidden="true"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="site-shell about-grid">
        <Reveal className="about-visual">
          <div className="about-image-main">
            <Image
              src={aboutImage}
              alt="A clinician speaking with a patient in a calm care environment"
              fill
              sizes="(max-width: 900px) 90vw, 42vw"
              className="cover-image"
            />
          </div>
          <div className="about-image-detail">
            <Image
              src={detailImage}
              alt="A welcoming hospital interior, shown as representative imagery"
              fill
              sizes="220px"
              className="cover-image"
            />
          </div>
          <div className="about-image-caption">
            <span className="caption-mark">
              <Plus size={18} />
            </span>
            <span>
              <strong>People first.</strong>
              <small>Always at the centre of care.</small>
            </span>
          </div>
          <span className="visual-caption">
            Representative healthcare imagery
          </span>
        </Reveal>

        <Reveal className="about-copy" delay={0.1}>
          <SectionHeading
            eyebrow="A more human kind of care"
            title={
              <>
                Your health deserves
                <br />
                <em>more than a visit.</em>
              </>
            }
            description="At Abdullah Hospital, we’re shaping a care experience that feels attentive, reassuring and centred around the person—not just the appointment."
          />
          <p className="body-copy">
            From the first conversation to the next step in your care, our aim
            is to make information easier to understand and support easier to
            find. This introduction is a placeholder for the hospital’s approved
            story and values.
          </p>
          <div className="mission-grid">
            <div>
              <span className="mission-icon">
                <HeartHandshake size={18} />
              </span>
              <span>
                <strong>Our mission</strong>
                <small>
                  Mission statement to be confirmed by the hospital.
                </small>
              </span>
            </div>
            <div>
              <span className="mission-icon">
                <Plus size={18} />
              </span>
              <span>
                <strong>Our vision</strong>
                <small>Vision statement to be confirmed by the hospital.</small>
              </span>
            </div>
          </div>
          <a className="text-link" href="#contact">
            Discover our approach <ArrowRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="site-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Care, all in one place"
            title={
              <>
                Support for every
                <br />
                <em>step of your journey.</em>
              </>
            }
            description="Explore a few of the ways a hospital can support you. Service names and descriptions below are placeholders pending confirmation by Abdullah Hospital."
          />
        </Reveal>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, description, label }, index) => (
            <Reveal key={title} delay={(index % 3) * 0.07}>
              <HoverLift className="service-card">
                <div className="service-card-top">
                  <span className="service-icon">
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="service-label">{label}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a
                  className="service-link"
                  href="#contact"
                  aria-label={`Ask about ${title}`}
                >
                  Ask about this service{" "}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </HoverLift>
            </Reveal>
          ))}
        </div>
        <p className="content-note">
          <span>*</span> Service list is illustrative. Please confirm available
          specialties and services with the hospital.
        </p>
      </div>
    </section>
  );
}

export function DoctorsSection() {
  return (
    <section className="team-section" id="doctors">
      <div className="site-shell team-inner">
        <Reveal className="team-copy">
          <span className="eyebrow eyebrow-light">
            <span /> The people behind your care
          </span>
          <h2>
            Care is personal.
            <br />
            <em>So should your team be.</em>
          </h2>
          <p>
            Meet the clinicians and care teams at Abdullah Hospital. Verified
            profiles, specialties and credentials will be added here after
            confirmation.
          </p>
          <a href="#contact" className="button button-white">
            Ask about our care team <ArrowUpRight size={17} />
          </a>
        </Reveal>
        <Reveal className="team-placeholder" delay={0.1}>
          <div className="team-placeholder-mark">
            <HeartPulse size={38} strokeWidth={1.3} />
          </div>
          <span className="placeholder-line placeholder-line-short" />
          <span className="placeholder-line" />
          <strong>Clinician profiles</strong>
          <p>To be added after hospital review</p>
          <span className="team-placeholder-corner">
            <Plus size={20} />
          </span>
        </Reveal>
      </div>
    </section>
  );
}

export function FacilitiesSection() {
  return (
    <section className="section facilities-section" id="facilities">
      <div className="site-shell facilities-grid">
        <Reveal className="facilities-copy">
          <SectionHeading
            eyebrow="Comfort in the details"
            title={
              <>
                A better experience,
                <br />
                <em>at every touchpoint.</em>
              </>
            }
            description="From clear directions to a calm place to ask questions, every detail matters when you’re seeking care."
          />
          <ul className="facility-list">
            {[
              "A welcoming first point of contact",
              "Clear information for patients and families",
              "Thoughtful spaces for care and recovery",
            ].map((item) => (
              <li key={item}>
                <span>
                  <Check size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="content-note">
            Facility features are illustrative placeholders and should be
            confirmed before publication.
          </p>
        </Reveal>
        <Reveal className="facilities-image-wrap" delay={0.12}>
          <Image
            src={detailImage}
            alt="Representative image of a bright, contemporary hospital interior"
            fill
            sizes="(max-width: 900px) 90vw, 48vw"
            className="cover-image"
          />
          <div className="facilities-image-overlay">
            <MapPin size={17} />
            <span>
              Abdullah Hospital
              <small>Facility location details to be confirmed</small>
            </span>
          </div>
          <span className="visual-caption">
            Representative healthcare imagery
          </span>
        </Reveal>
      </div>
      <div className="site-shell pillar-row">
        {carePillars.map(({ icon: Icon, title, description }, index) => (
          <Reveal key={title} delay={index * 0.07}>
            <article className="pillar-card">
              <span className="pillar-icon">
                <Icon size={20} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="site-shell gallery-inner">
        <Reveal className="gallery-heading">
          <SectionHeading
            eyebrow="A look around"
            title={
              <>
                Spaces that support
                <br />
                <em>better care.</em>
              </>
            }
            description="A glimpse of the environments that can make a visit feel a little easier."
          />
          <span className="gallery-note">
            Illustrative imagery — official hospital photos to be added
          </span>
        </Reveal>
        <div className="gallery-grid">
          <Reveal className="gallery-photo gallery-photo-large">
            <Image
              src={heroImage}
              alt="Representative image of a contemporary healthcare interior"
              fill
              sizes="(max-width: 760px) 90vw, 48vw"
              className="cover-image"
            />
            <span>Care spaces</span>
          </Reveal>
          <Reveal className="gallery-photo gallery-photo-small" delay={0.08}>
            <Image
              src={aboutImage}
              alt="Representative image of a clinician providing care"
              fill
              sizes="(max-width: 760px) 90vw, 32vw"
              className="cover-image"
            />
            <span>People & care</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="site-shell contact-card">
        <div className="contact-copy">
          <span className="eyebrow eyebrow-light">
            <span /> We’re here to help
          </span>
          <h2>
            Let’s make your
            <br />
            <em>next step easier.</em>
          </h2>
          <p>
            Talk to the hospital team about appointments, services or visiting.
            Contact information is a placeholder and must be confirmed before
            launch.
          </p>
          <a className="button button-white" href="#contact-details">
            View contact details <ArrowUpRight size={17} />
          </a>
          <small className="pending-note">
            Phone, address and opening hours are pending confirmation.
          </small>
        </div>
        <div className="contact-details" id="contact-details">
          <Link
            className="contact-detail contact-detail-link"
            href="/contact"
            aria-label="Go to Abdullah Hospital contact page"
          >
            <span>
              <Phone size={19} />
            </span>
            <p>
              <small>Phone:</small>
              <strong>+91 8077870231</strong>
            </p>
            <ArrowUpRight size={17} />
          </Link>
          <Link
            className="contact-detail contact-detail-link"
            href="/contact"
            aria-label="Go to Abdullah Hospital contact page"
          >
            <span>
              <MapPin size={19} />
            </span>
            <p>
              <small>Address:</small>
              <strong>
                Delhi Rd, Avas Vikas Colony, bhoor, Bulandshahr, Uttar Pradesh
                203001
              </strong>
            </p>
            <ArrowUpRight size={17} />
          </Link>
          <div className="contact-detail">
            <span>
              <Clock3 size={19} />
            </span>
            <p>
              <small>Opening hours</small>
              <strong>Open 24 Hours – All Days</strong>
            </p>
            <ArrowUpRight size={17} />
          </div>
          <p className="contact-disclaimer">
            For urgent medical emergencies, contact local emergency services.
            Confirm the hospital’s emergency contact number before relying on
            this page.
          </p>
        </div>
      </div>
      <div className="site-shell contact-map">
        <div className="contact-map-heading">
          <span className="eyebrow">
            <span /> Find us
          </span>
          <h2>Visit us in Bulandshahr</h2>
        </div>
        <div className="contact-map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m15!1m10!1m3!1d0.48806164949635455!2d77.8333218!3d28.4143007!2m1!1f0!3m2!1i1024!2i768!4f71.77877850593327!3m3!1m2!1s0x390ca3675fbae785%3A0xc097e10c2ed3e07a!2sABDULLAH%20HOSPITAL%20%7C%7C%20Best%20Hospital%20%7C%20Multispeciality%20Hospital%20In%20Bulandshahr!4v1793437260379"
            title="Map to Abdullah Hospital in Bulandshahr"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
