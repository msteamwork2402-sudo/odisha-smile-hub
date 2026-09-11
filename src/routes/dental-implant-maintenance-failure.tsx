import { createFileRoute } from "@tanstack/react-router";

import { ImplantPage, implantPageHead, faq, type ImplantPageConfig } from "@/components/implant/ImplantPage";
import { SITE } from "@/lib/implant-cluster";
import heroImage from "@/assets/implant-detail.jpg";

const cfg: ImplantPageConfig = {
  key: "maintenance",
  url: `${SITE}/dental-implant-maintenance-failure/`,
  title: "Dental Implant Maintenance & Failure | Aftercare Guide Odisha",
  description:
    "How to care for dental implants long term: daily cleaning, review appointments, warning signs of peri-implantitis, causes of implant failure and what treatment may involve.",
  h1: "Dental Implant Maintenance & Failure",
  eyebrow: "Long-Term Implant Care",
  heroCopy:
    "An implant is not maintenance-free. Daily cleaning and regular professional reviews protect the gum and bone around it, and early attention to warning signs gives the best chance of resolving problems.",
  heroSecondaryCta: "Ask About an Implant Problem",
  heroImage,
  heroImageAlt: "Clinical model showing the gum and bone supporting a dental implant",
  quickQuestion: "How do you look after a dental implant?",
  quickAnswer:
    "Implants need the same care as natural teeth, plus attention to the gum around them. Brush twice daily, clean between and around the implant with interdental brushes or floss designed for implants, avoid smoking, and attend professional reviews and cleaning as advised. Report bleeding, swelling, looseness or discomfort early, because problems around implants progress silently.",
  sections: [
    {
      title: "Daily Care Routine",
      blocks: [
        {
          kind: "checklist",
          items: [
            "Brush twice daily with a soft brush, angled at the gum margin",
            "Clean between and around the implant daily with the aids recommended for you",
            "Use a water flosser if advised, especially around bridges and full-arch work",
            "Avoid smoking and tobacco, which strongly affect implant tissues",
            "Wear a night guard if you clench or grind and have been advised to",
          ],
        },
      ],
    },
    {
      title: "Professional Review Schedule",
      blocks: [
        {
          kind: "timeline",
          steps: [
            "Early healing: reviews as scheduled by your surgeon after placement",
            "First year: recall visits to check the gum, bite and restoration",
            "Ongoing: professional implant cleaning at the interval advised for you",
            "Periodic radiographs to monitor the bone level around the implant",
            "Bite checks and adjustment of the crown or bridge as needed",
          ],
        },
        {
          kind: "callout",
          title: "Recall intervals are individual",
          text: "How often you should be seen depends on your gum health, smoking status, medical conditions and the type of implant work you have.",
        },
      ],
    },
    {
      title: "Warning Signs to Report",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Bleeding or pus when brushing around the implant",
            "Red, swollen or tender gum tissue at the implant",
            "Gum receding so that the metal becomes visible",
            "The crown feeling loose, or a screw repeatedly coming loose",
            "Any movement of the implant itself, or new pain on biting",
            "Persistent bad taste or odour around the site",
          ],
        },
      ],
    },
    {
      title: "Peri-Implant Disease",
      blocks: [
        {
          kind: "compare",
          caption: "Two stages of gum problems around implants",
          optionA: "Peri-implant mucositis",
          optionB: "Peri-implantitis",
          rows: [
            { factor: "What is affected", a: "Soft tissue only", b: "Soft tissue and supporting bone" },
            { factor: "Typical signs", a: "Bleeding and redness around the implant", b: "Bleeding, pus, bone loss on radiographs" },
            { factor: "Reversibility", a: "Often reversible with cleaning and hygiene", b: "Bone already lost does not simply return" },
            { factor: "Management", a: "Professional cleaning and improved home care", b: "Detailed cleaning, sometimes surgical treatment" },
            { factor: "Why early review matters", a: "Catching it here is far better", b: "Later treatment is more complex and less predictable" },
          ],
        },
      ],
    },
    {
      title: "Why Implants Can Fail",
      blocks: [
        {
          kind: "cards",
          columns: 2,
          items: [
            { title: "Early failure", text: "The implant does not integrate with the bone during initial healing, often within the first months." },
            { title: "Late failure", text: "Bone support is lost over time, most often through peri-implantitis." },
            { title: "Contributing factors", text: "Smoking, uncontrolled diabetes, poor hygiene, heavy grinding and missed reviews." },
            { title: "Mechanical problems", text: "Screw loosening, crown chipping or component fracture, which may be repairable." },
          ],
        },
      ],
    },
    {
      title: "What Happens If There Is a Problem",
      blocks: [
        {
          kind: "process",
          steps: [
            { title: "Assessment", text: "Examination and radiographs establish what is affected and how far it has progressed." },
            { title: "Control of infection", text: "Professional cleaning and hygiene measures address active inflammation." },
            { title: "Definitive treatment", text: "Depending on findings this may be non-surgical, surgical or component replacement." },
            { title: "Removal if needed", text: "An implant that has lost support may need to be removed." },
            { title: "Re-planning", text: "Replacement is considered after healing, sometimes with grafting." },
          ],
        },
      ],
    },
  ],
  costIntro:
    "Maintenance visits, and any treatment for a problem around an implant, are costed according to what is required. This is confirmed after examination and radiographs.",
  faqTitle: "Implant Maintenance & Failure — Frequently Asked Questions",
  faqs: [
    faq(
      "How long do dental implants last?",
      "Many implants function for many years with good hygiene and regular reviews, but no lifespan can be guaranteed. Outcomes depend on gum health, bone support, habits and general health.",
    ),
    faq(
      "Can implants get gum disease?",
      "Yes. Peri-implant mucositis affects the gum, and peri-implantitis also affects the supporting bone. Both are linked to plaque and are why professional reviews matter.",
    ),
    faq(
      "Do implants get cavities?",
      "Implants and their crowns cannot decay, but the gum and bone around them can still become diseased, and neighbouring natural teeth can decay.",
    ),
    faq(
      "How often should implants be checked?",
      "Intervals are individual. Your dentist will set a recall schedule based on your gum health, medical history and the type of implant work you have.",
    ),
    faq(
      "What are the first signs of implant failure?",
      "Bleeding or pus around the implant, persistent soreness, gum recession, a loose crown or any movement of the implant should be reported promptly.",
    ),
    faq(
      "Can a failed implant be replaced?",
      "Often yes, after the site has healed and any cause has been addressed. Grafting is sometimes needed before a new implant can be placed.",
    ),
    faq(
      "Does smoking affect implants?",
      "Yes. Smoking is consistently associated with higher rates of peri-implant disease and implant failure.",
    ),
    faq(
      "I have an implant placed elsewhere and a problem — can you see me?",
      "Yes. Begin with a free online consultation from anywhere in Odisha and share your reports; assessment is carried out at CARE Hospital, Bhubaneswar.",
    ),
  ],
  ctaTitle: "Concerned About an Existing Implant?",
  ctaCopy: "Share your symptoms and reports online and the implant team will advise on the next appropriate step.",
  related: ["second", "single", "fullmouth", "allon", "bone", "cost"],
  disclaimerTopic: "long-term dental implant maintenance, peri-implant disease and implant failure",
  procedureName: "Dental Implant Maintenance and Peri-Implant Care",
  procedureHowPerformed:
    "Implants are reviewed clinically and radiographically, professionally cleaned, and any peri-implant inflammation or mechanical problem is managed according to the findings.",
};

export const Route = createFileRoute("/dental-implant-maintenance-failure")({
  staticData: { sitemap: true },
  head: implantPageHead(cfg),
  component: () => <ImplantPage cfg={cfg} />,
});
