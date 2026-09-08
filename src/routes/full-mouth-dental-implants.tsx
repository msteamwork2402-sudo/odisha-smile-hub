import { createFileRoute } from "@tanstack/react-router";

import { ImplantPage, implantPageHead, faq, type ImplantPageConfig } from "@/components/implant/ImplantPage";
import { SITE } from "@/lib/implant-cluster";
import heroImage from "@/assets/dentist-consult.jpg";

const cfg: ImplantPageConfig = {
  key: "fullmouth",
  url: `${SITE}/full-mouth-dental-implants/`,
  title: "Full-Mouth Dental Implants in Odisha | Treatment Guide",
  description:
    "Full-mouth dental implant rehabilitation in Odisha: fixed and removable implant-supported options, planning for extensive tooth loss, treatment stages, aftercare and cost considerations.",
  h1: "Full-Mouth Dental Implants in Odisha",
  eyebrow: "Full-Mouth Rehabilitation",
  heroCopy:
    "Full-mouth implant rehabilitation is planned for patients who have lost most or all of their teeth. Treatment may be fixed or implant-supported removable, depending on clinical findings and patient priorities.",
  heroSecondaryCta: "Ask About Full-Mouth Options",
  heroImage,
  heroImageAlt: "Dentist discussing a full-mouth implant treatment plan with a patient",
  quickQuestion: "What are full-mouth dental implants?",
  quickAnswer:
    "Full-mouth dental implants replace the teeth of one or both jaws using implants placed in the jawbone. The replacement teeth may be fixed to the implants or be an implant-supported removable overdenture. The right option is determined by bone volume, gum health, bite, general health and the patient's functional priorities.",
  sections: [
    {
      title: "Who May Need Full-Mouth Rehabilitation?",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Most or all teeth missing in one or both jaws",
            "Remaining teeth affected by advanced gum disease or extensive decay",
            "Long-standing denture wear with difficulty in eating or speaking",
            "Severe tooth wear requiring a complete rebuild of the bite",
            "Previous failed extensive dental work needing reassessment",
          ],
        },
      ],
    },
    {
      title: "Fixed or Removable Implant-Supported Teeth?",
      blocks: [
        {
          kind: "compare",
          caption: "Two broad full-mouth implant approaches",
          optionA: "Fixed implant bridge",
          optionB: "Implant-supported overdenture",
          rows: [
            { factor: "Removal", a: "Removed only by the dentist", b: "Removed by the patient for cleaning" },
            { factor: "Implants required", a: "Usually more", b: "Often fewer" },
            { factor: "Feel", a: "Closest to fixed natural teeth", b: "Secure but still a removable appliance" },
            { factor: "Cleaning", a: "Cleaned in place using specific aids", b: "Cleaned out of the mouth" },
            { factor: "Suitability", a: "Depends on bone volume and bite", b: "Often used where bone or budget is limited" },
          ],
          note: "Both approaches are legitimate treatments. The decision is made together after assessment.",
        },
      ],
    },
    {
      title: "Planning and Diagnostics",
      blocks: [
        {
          kind: "checklist",
          items: [
            "Full medical and dental history review",
            "Examination of gums, remaining teeth and jaw relationships",
            "CBCT or radiographic imaging of both jaws where indicated",
            "Assessment of facial support, speech and bite",
            "Sequenced plan covering extractions, healing, surgery and prosthetics",
          ],
        },
        {
          kind: "prose",
          text: "Full-mouth treatment is a staged rehabilitation rather than a single procedure. Each stage is confirmed before moving to the next, and the plan may be adjusted as healing progresses.",
        },
      ],
    },
    {
      title: "Treatment Stages",
      blocks: [
        {
          kind: "process",
          steps: [
            { title: "Assessment", text: "Detailed clinical examination, imaging and discussion of goals." },
            { title: "Preparatory phase", text: "Extractions, gum treatment and any grafting required." },
            { title: "Implant surgery", text: "Implants placed in planned positions in one or both jaws." },
            { title: "Provisional phase", text: "Temporary teeth used during healing where appropriate." },
            { title: "Integration", text: "Healing period allowing implants to integrate with bone." },
            { title: "Definitive prosthesis", text: "Final fixed or removable implant-supported teeth fitted." },
            { title: "Maintenance", text: "Scheduled hygiene visits and long-term monitoring." },
          ],
        },
        {
          kind: "timeline",
          steps: [
            "Consultation and diagnostics",
            "Extractions and preparatory treatment",
            "Implant placement surgery",
            "Healing and provisional teeth",
            "Final prosthesis fitted",
            "Long-term maintenance reviews",
          ],
        },
      ],
    },
    {
      title: "Recovery and Living With Full-Mouth Implants",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Post-surgical swelling and discomfort for some days is expected",
            "Diet is modified during the healing period as advised",
            "Speech and chewing adapt gradually with the new teeth",
            "Daily cleaning routine is essential and will be taught",
            "Professional maintenance appointments continue for life",
          ],
        },
      ],
    },
    {
      title: "Benefits and Considerations",
      blocks: [
        {
          kind: "cards",
          columns: 2,
          items: [
            { title: "Restored function", text: "Implant support can improve chewing stability compared with a conventional denture." },
            { title: "Comprehensive plan", text: "The whole mouth, bite and facial support are planned together." },
            { title: "Extensive treatment", text: "Involves surgery, several appointments and a significant healing period." },
            { title: "Ongoing commitment", text: "Long-term hygiene and review appointments are essential to outcomes." },
          ],
        },
      ],
    },
  ],
  costIntro:
    "Full-mouth treatment cost varies with the number of implants, whether one or both jaws are treated, the prosthesis type and materials, and any preparatory procedures. A figure is given only after clinical assessment.",
  faqTitle: "Full-Mouth Dental Implants — Frequently Asked Questions",
  faqs: [
    faq(
      "What are full-mouth dental implants?",
      "They are implant-supported replacement teeth for an entire jaw or both jaws, provided either as a fixed bridge or as an implant-supported removable overdenture.",
    ),
    faq(
      "How many implants are needed for a full mouth?",
      "The number varies with the jaw treated, bone volume and the prosthesis planned. It is decided after clinical examination and 3D imaging rather than from a standard figure.",
    ),
    faq(
      "Is full-mouth implant treatment done in one visit?",
      "No. It is a staged treatment involving planning, any preparatory procedures, implant surgery, healing and fitting of the definitive teeth.",
    ),
    faq(
      "Can all my teeth be removed and implants placed the same day?",
      "Immediate placement after extraction is possible in selected cases, but it depends on infection, bone quality and implant stability. It is confirmed only at the time of surgery.",
    ),
    faq(
      "Will full-mouth implants look natural?",
      "The prosthesis is designed to restore appearance and function. Shape, shade and lip support are planned with you during the provisional stage.",
    ),
    faq(
      "Do implants stop bone loss?",
      "Implants can help maintain bone in the treated area by transmitting function to the jaw, but the extent varies between patients and cannot be guaranteed.",
    ),
    faq(
      "How long do full-mouth implants last?",
      "Longevity depends on hygiene, general health, bite forces and regular maintenance. No lifespan can be promised; your dentist will explain realistic expectations.",
    ),
    faq(
      "Can I travel from another district in Odisha for this?",
      "Yes. An online consultation can start the process, with examination and treatment carried out at CARE Hospital, Bhubaneswar.",
    ),
  ],
  ctaTitle: "Plan Your Full-Mouth Rehabilitation",
  ctaCopy:
    "Discuss fixed and removable implant options, the treatment sequence and what your case may require.",
  related: ["allon", "multiple", "bone", "sinus", "maintenance", "cost"],
  disclaimerTopic: "full-mouth dental implant rehabilitation",
  procedureName: "Full-Mouth Dental Implant Rehabilitation",
  procedureHowPerformed:
    "Dental implants are placed in one or both jaws under local anaesthesia to support fixed or removable implant-supported replacement teeth following a staged healing and prosthetic process.",
};

export const Route = createFileRoute("/full-mouth-dental-implants")({
  head: implantPageHead(cfg),
  component: () => <ImplantPage cfg={cfg} />,
});
