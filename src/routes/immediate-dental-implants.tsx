import { createFileRoute } from "@tanstack/react-router";

import { ImplantPage, implantPageHead, faq, type ImplantPageConfig } from "@/components/implant/ImplantPage";
import { SITE } from "@/lib/implant-cluster";
import heroImage from "@/assets/implant-detail.jpg";

const cfg: ImplantPageConfig = {
  key: "immediate",
  url: `${SITE}/immediate-dental-implants/`,
  title: "Immediate Dental Implants in Odisha | Same-Day Placement Guide",
  description:
    "When can a dental implant be placed at the time of extraction? Understand immediate implant placement, immediate loading, suitability, risks and aftercare in Odisha.",
  h1: "Immediate Dental Implants in Odisha",
  eyebrow: "Immediate Placement Guide",
  heroCopy:
    "In selected cases an implant can be placed at the same appointment as the tooth extraction. This depends on infection, bone support and the stability achieved at the time of surgery.",
  heroSecondaryCta: "Ask If You May Be Suitable",
  heroImage,
  heroImageAlt: "Clinical close-up illustrating dental implant placement",
  quickQuestion: "What is an immediate dental implant?",
  quickAnswer:
    "An immediate dental implant is placed into the socket at the same appointment as the tooth is removed. It is only appropriate when the socket walls, surrounding bone and soft tissues are suitable and sufficient primary stability can be achieved. The decision is often confirmed only during the procedure itself.",
  sections: [
    {
      title: "Immediate Placement vs Immediate Loading",
      intro: "These two terms are often confused but mean different things.",
      blocks: [
        {
          kind: "compare",
          caption: "Placement and loading are separate decisions",
          optionA: "Immediate placement",
          optionB: "Immediate loading",
          rows: [
            { factor: "Meaning", a: "Implant inserted at the time of extraction", b: "A temporary tooth attached soon after placement" },
            { factor: "Main requirement", a: "Intact socket walls and healthy tissues", b: "High primary stability of the implant" },
            { factor: "Can occur together?", a: "Yes, in selected cases", b: "Yes, but not always advisable" },
            { factor: "Decided when", a: "At planning and confirmed during surgery", b: "At the time of surgery based on stability" },
          ],
        },
      ],
    },
    {
      title: "Who May Be Suitable?",
      blocks: [
        {
          kind: "checklist",
          items: [
            "No active acute infection at the extraction site",
            "Adequate bone around the socket to stabilise the implant",
            "Healthy gum tissues with good contour",
            "Good general health and controlled medical conditions",
            "Non-smoker or willing to stop during healing, where advised",
          ],
        },
        {
          kind: "callout",
          title: "Not always possible",
          text: "If the socket, bone or tissues are not suitable, delayed placement after healing is safer and gives a more predictable outcome.",
        },
      ],
    },
    {
      title: "How the Procedure Works",
      blocks: [
        {
          kind: "process",
          steps: [
            { title: "Assessment", text: "Examination and imaging to review the tooth, socket and surrounding bone." },
            { title: "Atraumatic extraction", text: "The tooth is removed carefully to preserve the socket walls." },
            { title: "Socket evaluation", text: "The site is cleaned and assessed for infection and bone support." },
            { title: "Implant placement", text: "If conditions allow, the implant is placed and stability checked." },
            { title: "Grafting if needed", text: "Gaps around the implant may be filled with graft material." },
            { title: "Provisional or healing cap", text: "A temporary tooth or healing abutment is fitted as appropriate." },
            { title: "Restoration", text: "The definitive crown is fitted after healing and integration." },
          ],
        },
      ],
    },
    {
      title: "Advantages and Risks",
      blocks: [
        {
          kind: "cards",
          columns: 2,
          items: [
            { title: "Fewer surgical visits", text: "Extraction and implant placement can be combined into one procedure." },
            { title: "Shorter overall timeline", text: "Total treatment time may be reduced compared with delayed placement." },
            { title: "Stability risk", text: "If sufficient stability is not achieved, placement must be delayed." },
            { title: "Aesthetic risk", text: "Gum recession or contour changes can occur and are discussed beforehand." },
          ],
        },
        {
          kind: "prose",
          text: "Immediate placement is a well-recognised approach, but it is a clinical decision rather than a patient preference. Where conditions are unfavourable, the team will recommend healing the site first.",
        },
      ],
    },
    {
      title: "Recovery and Aftercare",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Avoid chewing on the treated area as instructed",
            "Follow prescribed medication and rinse instructions carefully",
            "Expect some swelling and tenderness in the first days",
            "Keep the area clean using the technique demonstrated",
            "Attend all review appointments so healing can be monitored",
          ],
        },
      ],
    },
  ],
  costIntro:
    "Immediate placement cost depends on the implant system, whether grafting is required, whether a temporary tooth is provided and the final restoration chosen. Costs are confirmed after assessment.",
  faqTitle: "Immediate Dental Implants — Frequently Asked Questions",
  faqs: [
    faq(
      "Can an implant be placed on the same day as extraction?",
      "Yes, in selected cases. It requires an intact socket, adequate bone, absence of acute infection and sufficient implant stability at the time of surgery.",
    ),
    faq(
      "Will I get a tooth on the same day too?",
      "Sometimes a temporary tooth can be fitted, but only when the implant achieves enough stability. Otherwise a healing cap is used and the tooth is fitted later.",
    ),
    faq(
      "Is immediate placement safe?",
      "It is a recognised technique with good outcomes in suitable cases. Where conditions are unfavourable, delayed placement is safer and will be recommended.",
    ),
    faq(
      "What if there is infection around the tooth?",
      "Active infection usually means the site must be cleaned and allowed to heal before an implant is placed. This is assessed clinically and radiographically.",
    ),
    faq(
      "Does immediate placement hurt more?",
      "The procedure is done under local anaesthesia. Post-operative discomfort is comparable to extraction with implant surgery and is managed with prescribed medication.",
    ),
    faq(
      "Is bone grafting needed with immediate implants?",
      "Small gaps between the implant and socket wall are often filled with graft material. Whether this is needed is decided during the procedure.",
    ),
    faq(
      "How soon will the final crown be fitted?",
      "The final restoration follows the required integration period, which varies between patients. Your dentist will explain the expected timeline for your case.",
    ),
    faq(
      "Can I be assessed for this from outside Bhubaneswar?",
      "You can begin with an online consultation from anywhere in Odisha, but immediate placement can only be confirmed after clinical examination at CARE Hospital, Bhubaneswar.",
    ),
  ],
  ctaTitle: "Find Out If Immediate Placement Suits Your Case",
  ctaCopy:
    "Share your situation with the implant team and discuss whether extraction and implant placement can be combined.",
  related: ["single", "guided", "bone", "multiple", "maintenance", "cost"],
  disclaimerTopic: "immediate dental implant placement at the time of tooth extraction",
  procedureName: "Immediate Dental Implant Placement",
  procedureHowPerformed:
    "A dental implant is placed into the extraction socket at the same appointment as tooth removal under local anaesthesia, where socket condition and primary stability allow, sometimes with grafting.",
};

export const Route = createFileRoute("/immediate-dental-implants")({
  staticData: { sitemap: true },
  head: implantPageHead(cfg),
  component: () => <ImplantPage cfg={cfg} />,
});
