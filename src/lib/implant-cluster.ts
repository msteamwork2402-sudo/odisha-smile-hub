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

export const REVIEWER = {
  writtenBy: "Dental Content Team",
  name: "Dr. Sauvik Singha, MDS",
  role: "Maxillofacial Surgeon & Implant Specialist",
  reviewedOn: "2 September 2026",
  reviewedOnISO: "2026-09-02",
};

export const ODISHA_CITIES =
  "Patients commonly travel to Bhubaneswar from Cuttack, Puri, Berhampur (Brahmapur), Sambalpur, Rourkela, Balasore, Baripada, Angul and Jharsuguda.";
