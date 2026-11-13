/* oxlint-disable react/only-export-components */
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/inner-page-ui";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Contact Us | Abdullah Hospital",
  description:
    "Contact Abdullah Hospital. Address, phone, email, opening hours and map details are placeholders awaiting confirmation.",
};

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    value:
      "Delhi Rd, Avas Vikas Colony, bhoor, Bulandshahr, Uttar Pradesh 203001",
    href: "https://maps.app.goo.gl/3H34HnJd7pPsFZVs7",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8077870231",
    href: "tel:+918077870231",
  },
  { icon: Mail, label: "Email", value: "Email address to be confirmed" },
  {
    icon: Clock3,
    label: "Opening hours",
    value: "Hours to be confirmed by the hospital",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact Abdullah Hospital"
        title={
          <>
            We’re here to help you <em>connect.</em>
          </>
        }
        description="Find the contact information you need. Hospital address, phone, email and operating hours will be updated when confirmed."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="inner-section">
        <div className="site-shell contact-page-grid">
          <div className="contact-info-column">
            <div className="contact-page-heading">
              <span className="eyebrow">
                <span />
                Get in touch
              </span>
              <h2>
                Let’s find the <em>right way forward.</em>
              </h2>
              <p>
                For accurate information, use the hospital’s confirmed contact
                details. All details below remain placeholders.
              </p>
            </div>
            <div className="contact-info-list">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="contact-info-icon">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <span>
                      <small>{label}</small>
                      <strong>{value}</strong>
                    </span>
                  </>
                );

                if (href) {
                  const linkProps =
                    label === "Phone"
                      ? { target: undefined, rel: undefined }
                      : { target: "_blank", rel: "noreferrer" };

                  return (
                    <Reveal className="contact-info-item" key={label}>
                      <a
                        className="contact-info-link"
                        href={href}
                        aria-label={
                          label === "Phone"
                            ? `Call ${value}`
                            : `Open ${label} location`
                        }
                        {...linkProps}
                      >
                        {content}
                      </a>
                    </Reveal>
                  );
                }

                return (
                  <Reveal className="contact-info-item" key={label}>
                    {content}
                  </Reveal>
                );
              })}
            </div>
            <div className="contact-action-row">
              <a className="button button-primary" href="tel:+918077870231">
                <Phone size={16} aria-hidden="true" /> Call now
              </a>
              <a
                className="button button-outline"
                href="https://maps.app.goo.gl/3H34HnJd7pPsFZVs7"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} aria-hidden="true" /> Get directions
              </a>
            </div>
            <p className="editorial-note">
              Use the direct phone and map links for a quick connection.
            </p>
          </div>
          <Reveal className="contact-map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.103456071369!2d77.8348632!3d28.416134999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ca3fd33e34077%3A0x93333fd9dbd56e3c!2sAbdullah%20Hospital%2C%20Nazimpura%2C%20Avas%20Vikas%20Colony%2C%20Ambedkar%20Nagar%2C%20bhoor%2C%20Bulandshahr%2C%20Uttar%20Pradesh%20203001!5e0!3m2!1sen!2sin!4v1793689748141!5m2!1sen!2sin"
              title="Google Maps location for Abdullah Hospital in Bulandshahr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </Reveal>
        </div>
      </section>
      <section className="inner-section inner-section-mist">
        <div className="site-shell contact-form-shell">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
