import { createFileRoute } from "@tanstack/react-router";

import { ImplantPage, implantPageHead, faq, type ImplantPageConfig } from "@/components/implant/ImplantPage";
import { SITE } from "@/lib/implant-cluster";
import heroImage from "@/assets/implant-detail.jpg";

const cfg: ImplantPageConfig = {
  key: "bone",
  url: `${SITE}/bone-grafting-for-dental-implants/`,
  title: "Bone Grafting for Dental Implants in Odisha | Patient Guide",
  description:
    "Bone grafting for dental implants explained for patients in Odisha: why bone loss happens, graft types, healing time, risks and how suitability is confirmed at CARE Hospital, Bhubaneswar.",
  h1: "Bone Grafting for Dental Implants in Odisha",
  eyebrow: "Implant Site Preparation",
  heroCopy:
    "When the jawbone at a missing tooth site is too narrow or too short, a bone graft may be advised to rebuild support before or during implant placement. Whether grafting is needed is decided only after clinical examination and imaging.",
  heroSecondaryCta: "Ask About Bone Grafting",
  heroImage,
  heroImageAlt: "Close-up clinical model showing a dental implant supported within the jawbone",
  quickQuestion: "What is bone grafting for dental implants?",
  quickAnswer:
    "Bone grafting is a procedure that adds bone or a bone substitute to a jaw site that lacks enough volume to hold an implant securely. The graft material is placed and allowed to heal so new bone forms. Depending on the amount needed, grafting may be done at the same visit as implant placement or several months before it.",
  sections: [
    {
      title: "Why Jawbone Is Lost",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Bone gradually shrinks after a tooth is removed and no longer loaded",
            "Long-standing gum disease can destroy supporting bone",
            "Infection or a cyst around an old root can reduce bone volume",
            "Trauma or a difficult extraction can damage the socket walls",
            "Long-term denture wear may accelerate ridge resorption",
          ],
        },
      ],
    },
    {
      title: "Types of Bone Graft",
      blocks: [
        {
          kind: "table",
          caption: "Common graft materials used in implant dentistry",
          columns: ["Graft type", "Source", "Typical use"],
          rows: [
            ["Autograft", "Your own bone from another site", "Larger defects where extra volume is required"],
            ["Allograft", "Processed human donor bone", "Socket preservation and moderate defects"],
            ["Xenograft", "Processed animal-derived mineral", "Volume maintenance and sinus procedures"],
            ["Synthetic (alloplast)", "Laboratory-made bone substitute", "Selected defects where a synthetic option is preferred"],
          ],
          note: "The material chosen depends on the defect, the site and clinical judgement at the time of assessment.",
        },
      ],
    },
    {
      title: "Grafting Procedures You May Hear About",
      blocks: [
        {
          kind: "cards",
          columns: 2,
          items: [
            { title: "Socket preservation", text: "Graft placed into a socket at the time of extraction to limit later shrinkage." },
            { title: "Guided bone regeneration", text: "Graft with a membrane used to rebuild width or height at an implant site." },
            { title: "Ridge augmentation", text: "Wider rebuilding of a collapsed ridge before implants can be placed." },
            { title: "Sinus augmentation", text: "Used in the upper back jaw where the sinus limits available height.", href: "/sinus-lift-dental-implants/", cta: "Read about sinus lift" },
          ],
        },
      ],
    },
    {
      title: "Simultaneous or Staged Grafting",
      blocks: [
        {
          kind: "compare",
          caption: "Two approaches to timing",
          optionA: "Graft at the same time as the implant",
          optionB: "Graft first, implant later",
          rows: [
            { factor: "When used", a: "Small to moderate defects with good implant stability", b: "Larger defects where the implant could not be stable" },
            { factor: "Number of surgeries", a: "One surgical visit", b: "Two separate surgical visits" },
            { factor: "Overall time", a: "Shorter overall treatment", b: "Additional healing months before implant placement" },
            { factor: "Decision basis", a: "Confirmed on imaging and at surgery", b: "Confirmed on imaging and at surgery" },
          ],
        },
      ],
    },
    {
      title: "Healing and Aftercare",
      blocks: [
        {
          kind: "timeline",
          steps: [
            "First few days: swelling and mild discomfort are common and managed with prescribed medication",
            "First week: soft diet, avoid disturbing the site, review as advised",
            "Early weeks: soft tissue heals and sutures are removed if used",
            "Following months: the graft consolidates; healing time varies with the graft type and site",
            "Reassessment: imaging confirms whether the site is ready for implant placement",
          ],
        },
        {
          kind: "checklist",
          items: [
            "Take medication exactly as prescribed",
            "Avoid smoking, which impairs graft healing",
            "Do not press or probe the graft site with your tongue",
            "Keep to the recommended diet during early healing",
            "Attend all review appointments",
          ],
        },
      ],
    },
    {
      title: "Risks and Realistic Expectations",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Swelling, bruising and discomfort during early healing",
            "Infection of the graft site, which may require treatment",
            "Partial loss of graft volume, sometimes needing a repeat procedure",
            "Delayed healing in smokers or where general health is not controlled",
            "No graft outcome can be guaranteed in advance for any individual",
          ],
        },
        {
          kind: "callout",
          title: "Not everyone needs a graft",
          text: "Many implant sites have enough bone and need no augmentation at all. Grafting is recommended only where imaging and examination show it is necessary.",
        },
      ],
    },
  ],
  costIntro:
    "Grafting adds surgical steps and materials, so it affects the overall plan. The cost depends on the graft type, the size of the defect and whether it is done with or before implant placement, and is confirmed after assessment.",
  faqTitle: "Bone Grafting — Frequently Asked Questions",
  faqs: [
    faq(
      "Do all dental implants need a bone graft?",
      "No. Grafting is only advised when imaging and examination show there is not enough bone width or height to support the implant securely.",
    ),
    faq(
      "Is bone grafting painful?",
      "The procedure is carried out under local anaesthesia so it should not be painful during treatment. Some swelling and discomfort afterwards is normal and is managed with prescribed medication.",
    ),
    faq(
      "How long does a bone graft take to heal?",
      "Healing time varies with the graft type and the size of the defect. Small grafts placed with an implant heal alongside it, while larger staged grafts need several months before implants can be placed.",
    ),
    faq(
      "Where does the graft material come from?",
      "It may be your own bone, processed donor bone, a processed animal-derived mineral or a synthetic substitute. The choice is made clinically for each case.",
    ),
    faq(
      "Can a bone graft fail?",
      "Yes. Grafts can lose volume or become infected, particularly in smokers or where healing is impaired. In such cases the procedure may need to be repeated.",
    ),
    faq(
      "Can I have an implant on the same day as the graft?",
      "Sometimes. If enough bone remains for the implant to be stable, both can be done together. Larger defects usually require a staged approach.",
    ),
    faq(
      "Does smoking affect bone grafting?",
      "Smoking reduces blood supply to healing tissues and is associated with higher graft and implant complication rates. Stopping is strongly recommended.",
    ),
    faq(
      "How do I know if I need a graft?",
      "Start with a free online consultation from anywhere in Odisha. The need for grafting is confirmed only after clinical examination and 3D imaging at CARE Hospital, Bhubaneswar.",
    ),
  ],
  ctaTitle: "Find Out Whether Grafting Applies to You",
  ctaCopy:
    "Share your history and any existing reports online, then receive a preliminary treatment roadmap before your clinical assessment.",
  related: ["sinus", "single", "immediate", "fullmouth", "guided", "cost"],
  disclaimerTopic: "bone grafting procedures used to prepare a site for dental implants",
  procedureName: "Bone Grafting for Dental Implants",
  procedureHowPerformed:
    "Bone or a bone substitute is placed at the deficient jaw site under local anaesthesia, protected where needed with a membrane, and allowed to heal so new bone can support a dental implant.",
};

export const Route = createFileRoute("/bone-grafting-for-dental-implants")({
  head: implantPageHead(cfg),
  component: () => <ImplantPage cfg={cfg} />,
});
