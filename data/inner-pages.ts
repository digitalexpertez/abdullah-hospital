import {
  Ambulance,
  Activity,
  Baby,
  BedDouble,
  Building2,
  Clock3,
  FlaskConical,
  HeartPulse,
  Microscope,
  Pill,
  ScanLine,
  Siren,
  ShieldPlus,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";

export type Department = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  icon: LucideIcon;
  introduction: string;
  services: string[];
  conditions: string[];
  facilities: string[];
};

const pendingDepartmentDetails =
  "Details to be confirmed by Abdullah Hospital.";

// Editable candidate categories only; confirm department names and offerings before launch.
export const departments: Department[] = [
  {
    slug: "general-medicine",
    name: "General Medicine",
    category: "Consultations",
    description:
      "Approved department introduction and service details to be added.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    icon: Stethoscope,
    introduction: pendingDepartmentDetails,
    services: [],
    conditions: [],
    facilities: [],
  },
  {
    slug: "womens-health",
    name: "Women’s Health",
    category: "Family health",
    description:
      "Approved department introduction and service details to be added.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=85",
    icon: HeartPulse,
    introduction: pendingDepartmentDetails,
    services: [],
    conditions: [],
    facilities: [],
  },
  {
    slug: "child-health",
    name: "Child Health",
    category: "Family health",
    description:
      "Approved department introduction and service details to be added.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=85",
    icon: Baby,
    introduction: pendingDepartmentDetails,
    services: [],
    conditions: [],
    facilities: [],
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    category: "Specialist care",
    description:
      "Approved department introduction and service details to be added.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85",
    icon: Activity,
    introduction: pendingDepartmentDetails,
    services: [],
    conditions: [],
    facilities: [],
  },
  {
    slug: "diagnostics",
    name: "Diagnostics & Laboratory",
    category: "Diagnostics",
    description:
      "Approved department introduction and service details to be added.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85",
    icon: Microscope,
    introduction: pendingDepartmentDetails,
    services: [],
    conditions: [],
    facilities: [],
  },
  {
    slug: "surgical-services",
    name: "Surgical Services",
    category: "Specialist care",
    description:
      "Approved department introduction and service details to be added.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=85",
    icon: Syringe,
    introduction: pendingDepartmentDetails,
    services: [],
    conditions: [],
    facilities: [],
  },
];

export type Doctor = {
  slug: string;
  name: string;
  qualifications: string;
  specialization: string;
  experience?: string;
  image?: string;
  introduction?: string;
  expertise?: string[];
  availability?: string;
};

// Keep empty until the hospital supplies verified names, credentials and profile details.
export const doctors: Doctor[] = [];

export const facilityCategories = [
  { name: "Emergency & Trauma Care", icon: Siren },
  { name: "ICU", icon: HeartPulse },
  { name: "NICU", icon: Baby },
  { name: "Operation Theatre", icon: ShieldPlus },
  { name: "Laboratory", icon: FlaskConical },
  { name: "Radiology", icon: ScanLine },
  { name: "Pharmacy", icon: Pill },
  { name: "Ambulance", icon: Ambulance },
  { name: "Inpatient Services", icon: BedDouble },
  { name: "Outpatient Services", icon: Stethoscope },
  { name: "Patient facilities", icon: Building2 },
  { name: "Hours & access", icon: Clock3 },
].map(({ name, icon }) => ({
  name,
  description:
    "Facility information and availability to be confirmed by the hospital.",
  icon,
  confirmed: false,
}));

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  caption: string;
};

// Representative stock imagery only; replace with approved Abdullah Hospital photographs.
export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=85",
    alt: "Representative modern healthcare building exterior",
    category: "Infrastructure",
    caption: "Hospital infrastructure — illustrative image",
  },
  {
    src: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1000&q=85",
    alt: "Representative bright hospital interior",
    category: "Rooms & wards",
    caption: "Rooms and wards — illustrative image",
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85",
    alt: "Representative clinical corridor",
    category: "Facilities",
    caption: "Hospital facilities — illustrative image",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    alt: "Representative clinician speaking with a patient",
    category: "Departments",
    caption: "Care environment — illustrative image",
  },
  {
    src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85",
    alt: "Representative medical diagnostic equipment",
    category: "Equipment",
    caption: "Medical equipment — illustrative image",
  },
  {
    src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=85",
    alt: "Representative healthcare team in a clinical environment",
    category: "Departments",
    caption: "Clinical team — illustrative image",
  },
  {
    src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1000&q=85",
    alt: "Representative patient room interior",
    category: "Rooms & wards",
    caption: "Patient room — illustrative image",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
    alt: "Representative medical consultation setting",
    category: "Infrastructure",
    caption: "Care setting — illustrative image",
  },
];
