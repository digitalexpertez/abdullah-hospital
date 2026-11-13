import {
  Activity,
  Baby,
  BadgeCheck,
  HeartHandshake,
  HeartPulse,
  Microscope,
  ShieldPlus,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  label: string;
};

export const services: Service[] = [
  {
    icon: HeartPulse,
    title: "Emergency care",
    description:
      "Timely support when urgent care is needed. Confirm service availability and contact details with the hospital.",
    label: "Urgent support",
  },
  {
    icon: Stethoscope,
    title: "Outpatient consultations",
    description:
      "A welcoming starting point for consultations, follow-ups and guidance on your care journey.",
    label: "Consultations",
  },
  {
    icon: Microscope,
    title: "Diagnostics & laboratory",
    description:
      "Diagnostic services can be listed here once the hospital’s confirmed offerings are available.",
    label: "Diagnostics",
  },
  {
    icon: Activity,
    title: "Inpatient care",
    description:
      "Information about admissions, patient support and inpatient services will be shared here.",
    label: "Hospital care",
  },
  {
    icon: Baby,
    title: "Women & child health",
    description:
      "A dedicated place to describe confirmed care pathways for women, newborns and children.",
    label: "Family health",
  },
  {
    icon: Syringe,
    title: "Surgical services",
    description:
      "Specialties, procedures and facilities can be added here after review by the hospital team.",
    label: "Specialist care",
  },
];

export const carePillars = [
  {
    icon: HeartHandshake,
    title: "Care that starts with listening",
    description: "Make every visit feel personal, respectful and clear.",
  },
  {
    icon: BadgeCheck,
    title: "A team you can trust",
    description: "Add verified clinician profiles and credentials here.",
  },
  {
    icon: ShieldPlus,
    title: "Support at every step",
    description: "From your first question to your next appointment.",
  },
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
