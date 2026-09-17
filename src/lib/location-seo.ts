import type { CityKey } from "@/lib/location-data";

export interface LocationSeoContent {
  heroImageAlt: string;
  localPatientHeading: string;
  localPatientInfo: string;
  serviceLinksIntro: string;
  servicePageKeys: string[];
}

export const LOCATION_SEO: Record<CityKey, LocationSeoContent> = {
  bhubaneswar: {
    heroImageAlt: "Dental implant consultation in Bhubaneswar at CARE Hospital",
    localPatientHeading: "Planning implant care within Bhubaneswar",
    localPatientInfo: "Patients in Bhubaneswar can attend their examination, indicated imaging, implant procedure and restorative appointments at CARE Hospital in Chandrasekharpur. The number and spacing of visits depend on whether the case involves one tooth, several teeth, bone preparation or full-arch rehabilitation.",
    serviceLinksIntro: "Compare the most relevant implant options before arranging a dental implant consultation in Bhubaneswar. The appropriate procedure is confirmed after examination and imaging.",
    servicePageKeys: ["single", "multiple", "allon", "fullmouth", "cost"],
  },
  cuttack: {
    heroImageAlt: "Online dental implant consultation for a patient from Cuttack before Bhubaneswar treatment",
    localPatientHeading: "Coordinating treatment from Cuttack",
    localPatientInfo: "For Cuttack patients, the short journey to Chandrasekharpur can make separate assessment and treatment visits practical. Existing X-rays may be shared first, but implant suitability, bone condition and the final plan are confirmed only during an in-person examination in Bhubaneswar.",
    serviceLinksIntro: "Cuttack dental implant enquiries commonly involve a single missing tooth, several missing teeth or a comparison with bridges and dentures. These guides explain the choices before travel to Bhubaneswar.",
    servicePageKeys: ["single", "multiple", "compare", "cost"],
  },
  puri: {
    heroImageAlt: "Dental implant planning consultation for a patient travelling from Puri to Bhubaneswar",
    localPatientHeading: "Preparing for a visit from Puri",
    localPatientInfo: "Patients travelling from Puri can use an online consultation to discuss symptoms, medical history and any available dental records before choosing a travel date. Clinical examination and all implant treatment take place at CARE Hospital, Bhubaneswar; additional visits depend on healing and the restoration planned.",
    serviceLinksIntro: "Patients from Puri can review single-tooth, immediate-placement and full-mouth options, plus the factors that affect cost, before an in-person assessment in Bhubaneswar.",
    servicePageKeys: ["single", "immediate", "fullmouth", "cost"],
  },
  berhampur: {
    heroImageAlt: "Remote dental implant consultation for a Berhampur patient planning treatment in Bhubaneswar",
    localPatientHeading: "Planning care from Berhampur and Ganjam",
    localPatientInfo: "A dental implant consultation for Berhampur patients can begin online so the team can review the reason for tooth loss and available reports. Because treatment is provided only in Bhubaneswar, patients should wait for a confirmed appointment and visit plan before arranging travel from Ganjam.",
    serviceLinksIntro: "For patients travelling from Berhampur, these guides cover common needs including one missing tooth, full-arch replacement, bone grafting and treatment-cost planning.",
    servicePageKeys: ["single", "allon", "bone", "cost"],
  },
  sambalpur: {
    heroImageAlt: "Dental implant video consultation for a Sambalpur patient before hospital treatment in Bhubaneswar",
    localPatientHeading: "Reducing unnecessary trips from Sambalpur",
    localPatientInfo: "Sambalpur patients can first share their concerns and existing scans online. The team can then coordinate the examination and indicated imaging in Bhubaneswar, while explaining which later stages require a return visit. Online review supports planning but does not replace the clinical assessment.",
    serviceLinksIntro: "Patients from Sambalpur who have extensive tooth loss may find the full-mouth, All-on-4 or All-on-6, bone-grafting and cost guides especially useful before travelling.",
    servicePageKeys: ["fullmouth", "allon", "bone", "cost"],
  },
  rourkela: {
    heroImageAlt: "Dental implant consultation for a Rourkela patient arranging treatment at CARE Hospital Bhubaneswar",
    localPatientHeading: "Organising multi-stage care from Rourkela",
    localPatientInfo: "Dental implant treatment for patients from Rourkela may involve more than one Bhubaneswar visit for assessment, surgery, review and the final restoration. An online discussion can help sequence those visits around available rail, road or air travel without promising that treatment can be completed in one trip.",
    serviceLinksIntro: "Rourkela patients can use these guides to compare full-mouth rehabilitation, fixed full-arch options, preparatory grafting and overall treatment-cost factors.",
    servicePageKeys: ["fullmouth", "allon", "bone", "cost"],
  },
  balasore: {
    heroImageAlt: "Online dental implant consultation for a Balasore patient travelling to Bhubaneswar",
    localPatientHeading: "Coordinating appointments from Balasore",
    localPatientInfo: "Patients from Balasore or Baleswar can begin by sharing available dental records and discussing the likely sequence of care. Examination, imaging when indicated, implant placement and restorative treatment are carried out in Bhubaneswar, with appointment timing confirmed before travel.",
    serviceLinksIntro: "Balasore patients can explore single-tooth and multiple-tooth replacement, immediate placement criteria and cost factors before arranging their Bhubaneswar assessment.",
    servicePageKeys: ["single", "multiple", "immediate", "cost"],
  },
  baripada: {
    heroImageAlt: "Dental implant consultation for a Baripada patient planning care in Bhubaneswar",
    localPatientHeading: "Dental implant planning from Mayurbhanj",
    localPatientInfo: "For Baripada and Mayurbhanj patients, an initial online conversation can clarify which records to bring and how appointments may be grouped. It cannot confirm implant suitability or final cost; those decisions follow examination and any required imaging at CARE Hospital, Bhubaneswar.",
    serviceLinksIntro: "These guides help Baripada patients understand single-tooth replacement, multiple implants, bone preparation and treatment-cost considerations before travel.",
    servicePageKeys: ["single", "multiple", "bone", "cost"],
  },
  angul: {
    heroImageAlt: "Dental implant consultation for an Angul patient before travelling to CARE Hospital Bhubaneswar",
    localPatientHeading: "Planning a Bhubaneswar visit from Angul",
    localPatientInfo: "Angul patients can request a preliminary online review before travelling via Dhenkanal. The in-person visit is used to examine the mouth, review bone and gum health, and decide whether implant placement can proceed or requires preparatory care. Treatment is provided in Bhubaneswar, not at an Angul branch.",
    serviceLinksIntro: "For Angul dental implant enquiries, these guides explain single-tooth treatment, immediate-placement criteria, bone grafting and the factors used to prepare a cost estimate.",
    servicePageKeys: ["single", "immediate", "bone", "cost"],
  },
  jharsuguda: {
    heroImageAlt: "Remote dental implant consultation for a Jharsuguda patient arranging Bhubaneswar treatment",
    localPatientHeading: "Sequencing treatment from Jharsuguda",
    localPatientInfo: "Patients from Jharsuguda, Brajrajnagar and Belpahar can discuss their needs online before making a longer trip. The team can outline likely stages and coordinate appointments, but examination in Bhubaneswar is required before confirming implant number, grafting needs, timing or final cost.",
    serviceLinksIntro: "Jharsuguda patients planning a longer journey can compare full-mouth and full-arch care, guided implant planning, bone grafting and cost considerations here.",
    servicePageKeys: ["fullmouth", "allon", "bone", "cost"],
  },
};