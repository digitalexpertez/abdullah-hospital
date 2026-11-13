import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/data/homepage";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-main">
        <div className="footer-about">
          <Link
            className="brand footer-brand"
            href="/"
            aria-label="Abdullah Hospital home"
          >
            <Image
              className="brand-logo"
              src="/logos/01_primary_horizontal_white.png"
              alt=""
              width={190}
              height={55}
            />
          </Link>
          <p>
            Care that puts people first. This introduction is editable
            placeholder copy; replace it with the hospital’s approved
            description.
          </p>
          <span className="footer-social-note">
            Social media links to be confirmed
          </span>
        </div>
        <div className="footer-links">
          <h2>Explore</h2>
          {navigation.slice(0, 5).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
              <ArrowUpRight size={13} />
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Delhi%20Rd%2C%20Avas%20Vikas%20Colony%2C%20Bhoor%2C%20Bulandshahr%2C%20Uttar%20Pradesh%20203001"
            target="_blank"
            rel="noreferrer"
          >
            Delhi Rd, Avas Vikas Colony, bhoor, Bulandshahr, Uttar Pradesh
            203001
          </a>
          <a href="tel:+918077870231">+91 8077870231</a>
          <Link href="/contact">
            Get in touch <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <p>© Abdullah Hospital. All rights reserved.</p>
        <p>Content placeholders require hospital confirmation before launch.</p>
        <Link href="/#home">
          Back to top <ArrowUpRight size={14} />
        </Link>
      </div>
    </footer>
  );
}
