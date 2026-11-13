"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, HeartPulse, Menu, X } from "lucide-react";
import { navigation } from "@/data/homepage";
import { useScrolled } from "@/hooks/use-scrolled";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <>
      <div className="topbar">
        <div className="site-shell topbar-inner">
          <span className="topbar-message">
            <HeartPulse size={15} aria-hidden="true" /> Here for your health,
            every step of the way
          </span>
          <Link className="topbar-link" href="/contact">
            Emergency contact details to be confirmed{" "}
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="site-shell header-inner">
          <Link className="brand" href="/" aria-label="Abdullah Hospital home">
            <Image
              className="brand-logo"
              src="/logos/05_primary_horizontal_transparent.png"
              alt=""
              width={180}
              height={52}
              preload
            />
          </Link>

          <nav
            id="mobile-navigation"
            className={`main-nav${menuOpen ? " is-open" : ""}`}
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="button button-primary nav-appointment"
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Book appointment <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </nav>

          <Link
            className="button button-primary header-appointment"
            href="/contact"
          >
            Book appointment <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>
    </>
  );
}
