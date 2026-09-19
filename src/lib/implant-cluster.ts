export const SITE = "https://odishadentalimplants.com";

export type ClusterKey =
  | "cost"
  | "single"
  | "multiple"
  | "allon"
  | "fullmouth"
  | "immediate"
  | "guided"
  | "bone"
  | "sinus"
  | "second"
  | "compare"
  | "maintenance"
  | "zirconia";

export const CLUSTER: Record<ClusterKey, { title: string; href: string; text: string; nav: string }> = {
  cost: {
    title: "Dental Implant Cost in Odisha",
    href: "/dental-implant-cost-odisha/",
    nav: "Dental Implant Cost",
    text: "What affects implant treatment cost and how plans differ.",
  },
  single: {
    title: "Single Tooth Dental Implant",
    href: "/single-tooth-dental-implant/",
    nav: "Single Tooth Implants",
    text: "Replacing one missing tooth with an individual implant.",
  },
  multiple: {
    title: "Multiple Dental Implants",
    href: "/multiple-dental-implants/",
    nav: "Multiple Dental Implants",
    text: "Implant-supported options for several missing teeth.",
  },
  allon: {
    title: "All-on-4 & All-on-6 Implants",
    href: "/all-on-4-all-on-6-odisha/",
    nav: "All-on-4 / All-on-6",
    text: "Fixed full-arch implant treatment approaches explained.",
  },
  fullmouth: {
    title: "Full-Mouth Dental Implants",
    href: "/full-mouth-dental-implants/",
    nav: "Full-Mouth Implants",
    text: "Rehabilitation planning for extensive tooth loss.",
  },
  immediate: {
    title: "Immediate Dental Implants",
    href: "/immediate-dental-implants/",
    nav: "Immediate Implants",
    text: "When an implant may be placed at the time of extraction.",
  },
  guided: {
    title: "Flapless & Guided Dental Implants",
    href: "/flapless-guided-dental-implants/",
    nav: "Guided / Flapless Implants",
    text: "Digital planning and guided implant placement.",
  },
  bone: {
    title: "Bone Grafting for Dental Implants",
    href: "/bone-grafting-for-dental-implants/",
    nav: "Bone Grafting",
    text: "Options when available bone volume is insufficient.",
  },
  sinus: {
    title: "Sinus Lift for Dental Implants",
    href: "/sinus-lift-dental-implants/",
    nav: "Sinus Lift",
    text: "Upper-jaw implant planning and sinus augmentation.",
  },
  second: {
    title: "Dental Implant Second Opinion",
    href: "/dental-implant-second-opinion/",
    nav: "Second Opinion",
    text: "Have an existing implant plan or quotation reviewed.",
  },
  compare: {
    title: "Implants vs Bridge vs Denture",
    href: "/implants-vs-bridge-vs-denture/",
    nav: "Implant vs Bridge vs Denture",
    text: "Comparing the main tooth replacement options.",
  },
  maintenance: {
    title: "Implant Maintenance & Failure",
    href: "/dental-implant-maintenance-failure/",
    nav: "Maintenance & Failure",
    text: "Aftercare, warning signs and implant complications.",
  },
  zirconia: {
    title: "Zirconia Crowns & Smile Design",
    href: "/zirconia-crowns-smile-design/",
    nav: "Zirconia Crowns",
    text: "Metal-free crowns and digitally planned smile restorations.",
  },
};

export const CLUSTER_ORDER: ClusterKey[] = [
  "cost",
  "single",
  "multiple",
  "allon",
  "fullmouth",
  "immediate",
  "guided",
  "bone",
  "sinus",
  "second",
  "compare",
  "maintenance",
  "zirconia",
];

export const DR_SAUVIK_PROFILES = {
  linkedin: "https://www.linkedin.com/in/dr-sauvik-singha-404399366/",
  apollo: "https://www.apollo247.com/doctors/dr-sauvik-singha-802dda3b-3e3c-420e-a2d7-158bb12a4900",
  googleMaps: "https://maps.app.goo.gl/boCc4sAHYoLP2jge7",
} as const;

export const CARE_HOSPITAL_URL =
  "https://www.carehospitals.com/contact-us/care-super-specialty-hospital-bhubaneswar";

export const REVIEWER = {
  writtenBy: "Dental Content Team",
  name: "Dr. Sauvik Singha, MDS",
  role: "Maxillofacial Surgeon & Implant Specialist",
  reviewedOn: "2 September 2026",
  reviewedOnISO: "2026-09-02",
  profileUrl: `${SITE}/dr-sauvik-singha/`,
  sameAs: [
    DR_SAUVIK_PROFILES.linkedin,
    DR_SAUVIK_PROFILES.apollo,
    DR_SAUVIK_PROFILES.googleMaps,
  ],
};

export const DOCTOR_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["Person", "Physician"],
  "@id": `${SITE}/dr-sauvik-singha/#person`,
  name: "Dr. Sauvik Singha, MDS",
  givenName: "Sauvik",
  familyName: "Singha",
  honorificPrefix: "Dr.",
  jobTitle: "Maxillofacial Surgeon & Implant Specialist",
  medicalSpecialty: ["Oral and Maxillofacial Surgery", "Implantology"],
  description:
    "Maxillofacial Surgeon and Dental Implant Specialist leading consultations, 3D CBCT digital diagnostics, and surgical implant placements at CARE Hospital, Bhubaneswar.",
  url: `${SITE}/dr-sauvik-singha/`,
  worksFor: {
    "@type": "MedicalOrganization",
    name: "CARE Hospital, Bhubaneswar",
    url: CARE_HOSPITAL_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit No. 42, Plot No. 324, Prachi Enclave Road, Rail Vihar, Chandrasekharpur",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      postalCode: "751016",
      addressCountry: "IN",
    },
  },
  affiliation: {
    "@type": "MedicalBusiness",
    name: "OdishaDentalImplants.com",
    url: SITE,
  },
  sameAs: [
    DR_SAUVIK_PROFILES.linkedin,
    DR_SAUVIK_PROFILES.apollo,
    DR_SAUVIK_PROFILES.googleMaps,
  ],
};

export const REVIEWER_SCHEMA = {
  "@type": ["Person", "Physician"],
  name: REVIEWER.name,
  jobTitle: REVIEWER.role,
  url: REVIEWER.profileUrl,
  worksFor: {
    "@type": "MedicalOrganization",
    name: "CARE Hospital, Bhubaneswar",
    url: CARE_HOSPITAL_URL,
  },
  affiliation: {
    "@type": "MedicalBusiness",
    name: "OdishaDentalImplants.com",
    url: SITE,
  },
  sameAs: REVIEWER.sameAs,
};

export const ODISHA_CITIES =
  "Patients commonly travel to Bhubaneswar from Cuttack, Puri, Berhampur (Brahmapur), Sambalpur, Rourkela, Balasore, Baripada, Angul and Jharsuguda.";

export const ODISHA_SERVICE_CITIES: readonly string[] = [
  "Bhubaneswar",
  "Cuttack",
  "Puri",
  "Berhampur (Brahmapur)",
  "Sambalpur",
  "Rourkela",
  "Balasore",
  "Baripada",
  "Angul",
  "Jharsuguda",
];

export const LOCATION_TRUTH = {
  consultation: "Patients across Odisha can begin with an online consultation.",
  treatment: "In-person assessment and treatment take place at CARE Hospital, Bhubaneswar.",
} as const;
