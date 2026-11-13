/* oxlint-disable react/only-export-components */
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdullah Hospital | Care That Puts You First",
  description:
    "A modern, patient-centred hospital experience. Contact and service information is being confirmed by Abdullah Hospital.",
  icons: {
    icon: "/logos/04_favicon_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
