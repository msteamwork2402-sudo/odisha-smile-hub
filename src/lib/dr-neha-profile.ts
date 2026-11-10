// Facts taken only from Dr. Neha Mohanty's client-supplied CV (Nov 2026).
// Personal phone/email from the CV are intentionally not published.
import { SITE, DR_NEHA_PROFILES } from "@/lib/implant-cluster";

export const NEHA_PAGE_URL = `${SITE}/dr-neha-mohanty/`;

export const NEHA_QUALIFICATIONS = [
  { name: "BDS", detail: "KIIT University, Bhubaneswar (2015) — First Class, Order of Merit" },
  { name: "MDS (Prosthodontics and Crown & Bridge)", detail: "MP State Medical University, Madhya Pradesh — First Class, Order of Merit" },
];

export const NEHA_COURSES = [
  "Advanced course in oral cancer screening and diagnosis",
  "Full Mouth Rehabilitation with Predictability and Precision (2017); 3M Expertise interactive learning programme (2017)",
  "3D Printing: Next Generation Technology — hands-on training, IIITDM Jabalpur (2018); manufacturing using CAD/CAM PFM and 3D printing, Jabalpur (2018)",
  "Basic Research Methodology, DCI (Madhya Pradesh), 2017; Recent Trends in Artificial Intelligence (NSRTAIC), Jabalpur, 2019",
];

export const NEHA_EXPERIENCE = [
  { place: "i-Smile Dental Clinic, Bhubaneswar", period: "2020 – Present", detail: "Clinical practice focused on prosthodontic rehabilitation, smile designing and general dentistry." },
  { place: "Dental House, Jabalpur", period: "2017 – 2019", detail: "" },
  { place: "Consultant Dental Surgeon — SS Clinic, Bansdroni, Kolkata", period: "Aug – Dec 2016", detail: "" },
  { place: "Rotatory Dental Internship — Kalinga Institute of Dental Sciences, KIIT University", period: "One year", detail: "Completed a one-year paid rotatory internship." },
];

export const NEHA_ACHIEVEMENTS = [
  "Best Paper Award: “Digital Auricular Rehabilitation: Enhancing Quality of Life,” Symbiosis CDE programme, Wardha (2020).",
  "Table clinic: “Implant Impressions,” 20th IPS PG Convention, Chennai (2018).",
  "Scientific papers: 10th Annual SOLA Conference, Jabalpur (2018); 46th IPS Conference, Mangalore (2018); 33rd Annual Odisha State Dental Conference (2015).",
  "Scientific posters: 47th IPS Conference, Raipur (2019); ICD-Famdent Prosthococon, Nagpur (2018); oral cancer at NOCPI (2013); AIDS awareness, Bhubaneswar (2012).",
];

export const NEHA_PUBLICATIONS = [
  "First author: “Knowledge attitude and practices of boxers regarding dental trauma prevention by mouthguards.” IJDSIR, Vol. 3, Issue 2, March 2020, pp. 98–107.",
  "Research: Comparative evaluation of PMMA and flexible mandibular partial denture supporting mucosa utilizing duplex imaging — an in vivo study.",
  "Contributor to Dental Pulse, 11th edition.",
];

export const NEHA_INTERESTS = [
  "Fixed and removable prostheses",
  "Implant-retained and implant-supported prostheses",
  "Maxillofacial prostheses",
  "Full mouth rehabilitation",
  "Smile designing",
  "General dentistry",
];

export const NEHA_AFFILIATIONS = ["Indian Prosthodontic Society", "Indian Dental Association, Odisha State"];

export const NEHA_ENTREPRENEURSHIP = [
  { role: "Founders Team Member — MediLancers Private Limited", detail: "Contributes to a healthcare workforce technology platform connecting institutions and families with professionals for full-time, part-time, locum, shift-based and home-care engagements." },
  { role: "Principal Innovator — FlexiFeed, MediLancers Private Limited", detail: "Developing a device for controlled oral feeding in conscious patients with restricted mouth opening and preserved swallowing function, where oral feeding is clinically appropriate." },
];

export const NEHA_COMMUNITY = [
  "Rural health-centre experience in Odisha.",
  "Health camps with Rotary Club of Bhubaneswar Metro, National Medicos Organisation and Red Cross.",
  "Oral cancer awareness theatre at Oracon 2014 and college street plays.",
];

export const NEHA_LANGUAGES = "English, Hindi and Odia (read, write, speak); Bengali (conversational)";

export const NEHA_PROFILE_SCHEMA = {
  "@type": ["Person", "Physician"],
  "@id": `${NEHA_PAGE_URL}#person`,
  name: "Dr. Neha Mohanty",
  honorificPrefix: "Dr.",
  jobTitle: "Prosthodontist & Dental Surgeon",
  url: NEHA_PAGE_URL,
  medicalSpecialty: "Dentistry",
  knowsAbout: NEHA_INTERESTS,
  knowsLanguage: ["English", "Hindi", "Odia", "Bengali"],
  alumniOf: [{ "@type": "CollegeOrUniversity", name: "KIIT University" }, { "@type": "CollegeOrUniversity", name: "MP State Medical University" }],
  hasCredential: NEHA_QUALIFICATIONS.map((q) => ({ "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: q.name })),
  memberOf: NEHA_AFFILIATIONS.map((name) => ({ "@type": "Organization", name })),
  worksFor: { "@type": "Organization", name: "i-Smile Dental Clinic" },
  award: "Best Paper Award, Symbiosis CDE programme, Wardha (2020)",
  address: { "@type": "PostalAddress", addressLocality: "Bhubaneswar", addressRegion: "Odisha", addressCountry: "IN" },
  sameAs: [DR_NEHA_PROFILES.linkedin, DR_NEHA_PROFILES.apollo],
};
