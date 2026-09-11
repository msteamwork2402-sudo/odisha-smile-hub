import { createFileRoute } from "@tanstack/react-router";

import { ImplantPage, implantPageHead, faq, type ImplantPageConfig } from "@/components/implant/ImplantPage";
import { SITE } from "@/lib/implant-cluster";
import heroImage from "@/assets/implant-detail.jpg";

const cfg: ImplantPageConfig = {
  key: "sinus",
  url: `${SITE}/sinus-lift-dental-implants/`,
  title: "Sinus Lift for Dental Implants in Odisha | Patient Guide",
  description:
    "Sinus lift for upper jaw dental implants explained: why it is needed, direct and indirect techniques, healing time, risks and how suitability is confirmed at CARE Hospital, Bhubaneswar.",
  h1: "Sinus Lift for Dental Implants in Odisha",
  eyebrow: "Upper Jaw Implant Planning",
  heroCopy:
    "In the upper back jaw, the maxillary sinus can sit close to where an implant needs to go. A sinus lift creates additional bone height so an implant can be supported. It is advised only where imaging shows it is needed.",
  heroSecondaryCta: "Ask About Upper Jaw Implants",
  heroImage,
  heroImageAlt: "Clinical model illustrating implant placement in the upper jaw",
  quickQuestion: "What is a sinus lift for dental implants?",
  quickAnswer:
    "A sinus lift is a procedure that gently raises the membrane lining the maxillary sinus and places graft material beneath it, increasing bone height in the upper back jaw. This allows an implant to be placed with adequate support. It may be done at the same visit as the implant or several months earlier, depending on how much height is available.",
  sections: [
    {
      title: "Why It May Be Needed",
      blocks: [
        {
          kind: "bullets",
          items: [
            "The sinus naturally enlarges downwards after upper back teeth are lost",
            "Bone height reduces over the years following extraction",
            "Gum disease may have destroyed supporting bone before the tooth was lost",
            "Individual sinus anatomy varies considerably between patients",
            "Implants require sufficient bone height to be stable long term",
          ],
        },
      ],
    },
    {
      title: "Direct vs Indirect Sinus Lift",
      blocks: [
        {
          kind: "compare",
          caption: "Two recognised sinus augmentation techniques",
          optionA: "Direct (lateral window) sinus lift",
          optionB: "Indirect (crestal / osteotome) sinus lift",
          rows: [
            { factor: "Access", a: "Through a small window in the side of the jaw", b: "Through the implant site itself" },
            { factor: "Typical indication", a: "When a larger increase in bone height is required", b: "When only a small increase is required" },
            { factor: "Implant timing", a: "Often staged, sometimes simultaneous", b: "Usually done with implant placement" },
            { factor: "Healing", a: "Longer healing period before restoration", b: "Generally shorter healing period" },
            { factor: "Decision", a: "Based on CBCT measurements and examination", b: "Based on CBCT measurements and examination" },
          ],
        },
      ],
    },
    {
      title: "How the Procedure Is Carried Out",
      blocks: [
        {
          kind: "process",
          steps: [
            { title: "Assessment", text: "Examination and CBCT imaging measure the available bone height and sinus anatomy." },
            { title: "Planning", text: "The technique, graft material and implant timing are planned." },
            { title: "Access", text: "The sinus is approached either laterally or through the implant site under local anaesthesia." },
            { title: "Membrane elevation", text: "The sinus lining is carefully lifted away from the bone floor." },
            { title: "Graft placement", text: "Graft material is placed in the created space." },
            { title: "Healing and implant", text: "The implant is placed simultaneously or after the graft has consolidated." },
          ],
        },
      ],
    },
    {
      title: "Recovery and Aftercare",
      blocks: [
        {
          kind: "checklist",
          items: [
            "Avoid blowing your nose forcefully during early healing",
            "Sneeze with the mouth open to reduce sinus pressure",
            "Do not use straws or smoke during the healing period",
            "Take prescribed medication, including any nasal decongestant advised",
            "Report persistent bleeding, discharge or pain promptly",
          ],
        },
        {
          kind: "callout",
          title: "Healing time varies",
          text: "Graft consolidation before implant loading usually takes several months. The exact period depends on the technique, graft material and your healing response.",
        },
      ],
    },
    {
      title: "Risks and Considerations",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Perforation of the sinus membrane, which is usually managed at the time",
            "Sinus infection or inflammation after the procedure",
            "Swelling, bruising and nasal discomfort during early healing",
            "Partial graft loss requiring a repeat procedure",
            "Existing sinus disease may need treatment before surgery is considered",
          ],
        },
      ],
    },
  ],
  costIntro:
    "A sinus lift adds surgical time, graft material and imaging to the plan. Cost depends on the technique used, the amount of graft required and whether implants are placed at the same visit. It is confirmed only after assessment.",
  faqTitle: "Sinus Lift — Frequently Asked Questions",
  faqs: [
    faq(
      "Is a sinus lift a major surgery?",
      "It is a routine, well-established procedure in implant dentistry carried out under local anaesthesia. It is more involved than a simple implant placement but is not usually considered major surgery.",
    ),
    faq(
      "Will a sinus lift affect my breathing or sense of smell?",
      "The procedure works below the sinus lining and is not expected to change breathing or smell. Temporary congestion during healing is common.",
    ),
    faq(
      "How long after a sinus lift can implants be placed?",
      "If enough bone remains, implants can sometimes be placed at the same visit. Otherwise several months of graft healing is usually required before placement.",
    ),
    faq(
      "Is a sinus lift painful?",
      "Local anaesthesia is used so the procedure should not be painful. Swelling and discomfort for a few days afterwards are normal and managed with medication.",
    ),
    faq(
      "What happens if the sinus membrane tears?",
      "Small perforations are common and are usually repaired during the same procedure. Larger tears may require the graft to be postponed.",
    ),
    faq(
      "Can I avoid a sinus lift?",
      "In some cases shorter implants, tilted implants or a different treatment plan may avoid it. Suitability depends entirely on your anatomy as seen on imaging.",
    ),
    faq(
      "Can I fly after a sinus lift?",
      "Air travel and pressure changes are usually discouraged in the immediate healing period. Your surgeon will advise based on your case.",
    ),
    faq(
      "How do I know if I need one?",
      "Begin with a free online consultation from anywhere in Odisha. The need is confirmed only after clinical examination and CBCT imaging at CARE Hospital, Bhubaneswar.",
    ),
  ],
  ctaTitle: "Discuss Upper Jaw Implant Options",
  ctaCopy: "Share your reports online and receive a preliminary treatment roadmap before your clinical assessment.",
  related: ["bone", "single", "multiple", "allon", "guided", "cost"],
  disclaimerTopic: "sinus augmentation procedures used before or during upper jaw implant placement",
  procedureName: "Sinus Lift (Maxillary Sinus Augmentation)",
  procedureHowPerformed:
    "The maxillary sinus lining is elevated through a lateral window or through the implant site under local anaesthesia, and graft material is placed beneath it to increase bone height for implant support.",
};

export const Route = createFileRoute("/sinus-lift-dental-implants")({
  staticData: { sitemap: true },
  head: implantPageHead(cfg),
  component: () => <ImplantPage cfg={cfg} />,
});
