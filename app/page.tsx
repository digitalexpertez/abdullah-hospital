import {
  AboutSection,
  ContactSection,
  DoctorsSection,
  FacilitiesSection,
  GallerySection,
  HeroSection,
  QuickInfoSection,
  ServicesSection,
} from "@/sections/home-sections";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <QuickInfoSection />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <FacilitiesSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
