import { CARE_HOSPITAL_URL, DR_SAUVIK_PROFILES, SITE } from "@/lib/implant-cluster";
import { TREATMENT_ADDRESS } from "@/lib/site";

// Client-supplied CV; deliberately excludes personal contact details and birth date.
export const ISMILE_PROFILE_URL = "https://share.google/rQCNrW1UesqOJL5tv";
export const DOCTOR_QUALIFICATIONS = [
  { name: "BDS", detail: "KIIT University, 2014 — First Class, Order of Merit" },
  { name: "MDS in Oral & Maxillofacial Surgery", detail: "MP State Medical University, 2019 — First Class, Order of Merit" },
  { name: "PGDMLS", detail: "Symbiosis, Pune, 2020" },
  { name: "PGDMLE", detail: "National Law University, Bangalore, 2022" },
] as const;
export const DOCTOR_AWARDS = [
  "President of India Award (2009)",
  "Best Paper Award — AOMSI MP State Conference (2017)",
  "Best Paper Award — International Conference on Evidence-Based Maxillofacial Practice",
  "Outstanding Postgraduate Student — International Conference on Evidence-Based Maxillofacial Practice",
] as const;
export const DOCTOR_AFFILIATIONS = ["AOMSI", "IAOMS", "IDA"] as const;
export const DOCTOR_PUBLICATIONS = [
  { title: "Ameloblastic Carcinoma", journal: "J Head Neck Spine Surg", year: "2018" },
  { title: "Temporomandibular Joint Ganglion Cyst", journal: "GJRA", year: "2017" },
  { title: "Immediate Loading in Implantology", journal: "IOSR JDMS", year: "2017" },
  { title: "Accidental Formalin Injection", journal: "BJSTR", year: "2018" },
  { title: "Facial Reanimation Technique", journal: "Annals of Maxillofacial Surgery", year: "2018" },
  { title: "HDPE vs Autogenous Grafts", journal: "Annals of Maxillofacial Surgery", year: "2019" },
  { title: "Third Molar Surgery Outcomes", journal: "SRM Journal", year: "2019" },
  { title: "Toxic Epidermal Necrolysis", journal: "J Oral Med Oral Surg Oral Pathol Oral Radiol", year: "2019" },
  { title: "Myoepithelioma of Parotid", journal: "J Surg Allied Sci", year: "2019" },
  { title: "Sanguinaria vs Triclosan", journal: "Int J Aesthet Health Rejuvenation", year: "2019" },
] as const;

const profileUrl = `${SITE}/dr-sauvik-singha/`;
const personId = `${profileUrl}#person`;
export const DOCTOR_PROFILE_SCHEMA = [
  {
    "@type": "Person",
    "@id": personId,
    name: "Dr. Sauvik Singha",
    givenName: "Sauvik",
    familyName: "Singha",
    honorificPrefix: "Dr.",
    honorificSuffix: "BDS, MDS, PGDMLS, PGDMLE",
    url: profileUrl,
    jobTitle: ["Senior Consultant, Oral & Maxillofacial Surgery — CARE Hospitals", "Director — i-Smile Dental Clinic Chain"],
    description: "Oral and maxillofacial surgeon with implantology and full-mouth rehabilitation expertise. Online consultation across Odisha; in-person implant assessment and treatment at CARE Hospital, Chandrasekharpur, Bhubaneswar.",
    hasCredential: DOCTOR_QUALIFICATIONS.map((q) => ({ "@type": "EducationalOccupationalCredential", name: q.name, description: q.detail, credentialCategory: "Qualification" })),
    knowsAbout: ["Oral and Maxillofacial Surgery", "Implantology", "Full-Mouth Rehabilitation", "Maxillofacial Trauma", "Medico-Legal Consultation"],
    award: [...DOCTOR_AWARDS],
    memberOf: DOCTOR_AFFILIATIONS.map((name) => ({ "@type": "Organization", name })),
    worksFor: [
      { "@type": "Hospital", name: "CARE Hospital, Bhubaneswar", url: CARE_HOSPITAL_URL },
      { "@type": "Organization", name: "i-Smile Dental Clinic Chain", url: ISMILE_PROFILE_URL },
    ],
    sameAs: [DR_SAUVIK_PROFILES.linkedin, DR_SAUVIK_PROFILES.apollo],
  },
  {
    "@type": "Physician",
    "@id": `${profileUrl}#practice`,
    name: "Dr. Sauvik Singha — Implant Consultation at CARE Hospital",
    url: profileUrl,
    medicalSpecialty: "https://schema.org/Dentistry",
    employee: { "@id": personId },
    address: { "@type": "PostalAddress", streetAddress: TREATMENT_ADDRESS, addressLocality: "Bhubaneswar", addressRegion: "Odisha", postalCode: "751016", addressCountry: "IN" },
    availableService: { "@type": "MedicalTherapy", name: "Dental implant assessment and treatment", description: "Individual implant and full-mouth rehabilitation planning following clinical examination." },
  },
];