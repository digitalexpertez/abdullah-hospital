import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Breadcrumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <section className="inner-hero">
      <div className="inner-hero-orb" aria-hidden="true" />
      <div className="site-shell inner-hero-inner">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          {breadcrumbs.map((item, index) => (
            <span className="breadcrumb-item" key={`${item.label}-${index}`}>
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span aria-hidden="true">/</span>
              )}
            </span>
          ))}
        </nav>
        <Reveal className="inner-hero-copy">
          <span className="eyebrow">
            <span />
            {eyebrow}
          </span>
          <h1>{title}</h1>
          <p>{description}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionTitle({
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
    <div className={`inner-section-title${centered ? " is-centered" : ""}`}>
      <span className="eyebrow">
        <span />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function AppointmentCTA({
  title = "Your next step starts with a conversation.",
  description = "Contact the hospital to ask about appointments and confirmed services.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="inner-cta-section">
      <Reveal className="site-shell">
        <div className="inner-cta-card">
          <div>
            <span className="eyebrow eyebrow-light">
              <span />
              Here when you need us
            </span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <Link className="button button-white" href="/contact">
            Contact the hospital <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="inner-text-link" href={href}>
      {children} <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}
