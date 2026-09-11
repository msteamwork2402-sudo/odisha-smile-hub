import { createFileRoute } from "@tanstack/react-router";

import { ImplantPage, implantPageHead, faq, type ImplantPageConfig } from "@/components/implant/ImplantPage";
import { SITE } from "@/lib/implant-cluster";
import heroImage from "@/assets/dentist-consult.jpg";

const cfg: ImplantPageConfig = {
  key: "compare",
  url: `${SITE}/implants-vs-bridge-vs-denture/`,
  title: "Dental Implants vs Bridge vs Denture | Odisha Patient Guide",
  description:
    "Compare dental implants, fixed bridges and dentures: how each replaces missing teeth, effect on neighbouring teeth and bone, care, longevity and who each option may suit.",
  h1: "Dental Implants vs Bridge vs Denture",
  eyebrow: "Tooth Replacement Options",
  heroCopy:
    "There is more than one way to replace missing teeth. This guide compares implants, fixed bridges and removable dentures so you can discuss the options with confidence.",
  heroSecondaryCta: "Ask Which Option Suits Me",
  heroImage,
  heroImageAlt: "Dentist explaining tooth replacement options to a patient",
  quickQuestion: "What is the difference between an implant, a bridge and a denture?",
  quickAnswer:
    "A dental implant replaces the missing tooth root with a fixture in the jawbone and supports its own crown. A fixed bridge replaces the missing tooth using the neighbouring teeth as support, which usually means preparing them. A denture is a removable appliance resting on the gums. The right option depends on bone condition, the neighbouring teeth, general health and personal preference.",
  sections: [
    {
      title: "Side-by-Side Comparison",
      blocks: [
        {
          kind: "table",
          caption: "How the three main tooth replacement options compare",
          columns: ["Consideration", "Dental implant", "Fixed bridge", "Removable denture"],
          rows: [
            ["Support", "Implant fixture in the jawbone", "Neighbouring natural teeth", "Gums and remaining teeth"],
            ["Neighbouring teeth", "Usually left untouched", "Usually prepared and crowned", "Not prepared; clasps may be used"],
            ["Fixed or removable", "Fixed", "Fixed", "Removable"],
            ["Surgery required", "Yes", "No", "No"],
            ["Bone stimulation", "Loads the bone at the site", "Does not load the bone under the gap", "Does not load the bone under the gap"],
            ["Treatment time", "Longer; healing time is required", "Usually a few visits", "Usually a few visits"],
            ["Cleaning", "Brushing plus interdental cleaning", "Cleaning under the bridge needed", "Removed and cleaned daily"],
            ["Suitability", "Requires adequate bone and health", "Requires sound neighbouring teeth", "Widely applicable option"],
          ],
          note: "Longevity for every option depends on oral hygiene, general health, bite forces and regular reviews. No lifespan can be guaranteed.",
        },
      ],
    },
    {
      title: "Dental Implants",
      blocks: [
        {
          kind: "cards",
          columns: 2,
          items: [
            { title: "Strengths", text: "Stands alone without altering neighbouring teeth, is fixed in place and loads the bone at the site." },
            { title: "Considerations", text: "Requires surgery, adequate bone and a longer overall treatment time." },
            { title: "Best discussed when", text: "The neighbouring teeth are healthy and you prefer a fixed, independent replacement." },
            { title: "Learn more", text: "See how a single implant is planned and placed.", href: "/single-tooth-dental-implant/", cta: "Single tooth implants" },
          ],
        },
      ],
    },
    {
      title: "Fixed Bridge",
      blocks: [
        {
          kind: "cards",
          columns: 2,
          items: [
            { title: "Strengths", text: "Fixed, comparatively quick and does not require surgery." },
            { title: "Considerations", text: "Neighbouring teeth are usually prepared, and the bone under the gap is not loaded." },
            { title: "Best discussed when", text: "The neighbouring teeth already need crowns, or surgery is not suitable." },
            { title: "Care", text: "Cleaning beneath the bridge with floss threaders or interdental brushes is essential." },
          ],
        },
      ],
    },
    {
      title: "Removable Denture",
      blocks: [
        {
          kind: "cards",
          columns: 2,
          items: [
            { title: "Strengths", text: "Non-surgical, can replace many teeth at once and is usually the most accessible option." },
            { title: "Considerations", text: "Removable, may move during function and needs periodic adjustment as the ridge changes." },
            { title: "Best discussed when", text: "Many teeth are missing, or as an interim solution during longer treatment." },
            { title: "Middle ground", text: "Implant-supported overdentures can improve denture stability in selected cases.", href: "/full-mouth-dental-implants/", cta: "Full-mouth options" },
          ],
        },
      ],
    },
    {
      title: "How the Right Option Is Decided",
      blocks: [
        {
          kind: "checklist",
          items: [
            "Number and position of the missing teeth",
            "Condition of the neighbouring and opposing teeth",
            "Bone volume and gum health at the site",
            "General health, medication and habits such as smoking",
            "Your preferences on treatment time, surgery and maintenance",
          ],
        },
        {
          kind: "callout",
          title: "No single best option",
          text: "Each option suits different situations. The appropriate choice is confirmed only after clinical examination and diagnostic assessment.",
        },
      ],
    },
  ],
  costIntro:
    "Cost differs between the three options and within each of them, depending on materials, the number of teeth and any preparatory treatment. Your plan and cost are confirmed after assessment.",
  faqTitle: "Implants vs Bridge vs Denture — Frequently Asked Questions",
  faqs: [
    faq(
      "Which lasts longer, an implant or a bridge?",
      "Both can serve well for many years. Longevity depends on hygiene, bite forces, general health and regular reviews rather than on the option alone, and cannot be guaranteed.",
    ),
    faq(
      "Is a bridge cheaper than an implant?",
      "A bridge often involves fewer stages, but comparing them fairly means considering the condition of the neighbouring teeth and long-term maintenance. Costs are confirmed after assessment.",
    ),
    faq(
      "Does a bridge damage the neighbouring teeth?",
      "A conventional bridge requires the neighbouring teeth to be prepared, which permanently alters them. This is a key point to discuss if those teeth are healthy.",
    ),
    faq(
      "Can I switch from a denture to implants later?",
      "Often yes, though bone volume may have reduced over years of denture wear. Imaging will show whether grafting is needed.",
    ),
    faq(
      "Are dentures uncomfortable?",
      "Modern dentures are far better fitting than older ones, but being removable they can move during function. Implant support can improve stability in suitable cases.",
    ),
    faq(
      "What if I have several missing teeth?",
      "Options include multiple implants, an implant-supported bridge, a conventional bridge or a partial denture, depending on the pattern of tooth loss.",
    ),
    faq(
      "Which option is best for me?",
      "That can only be decided after examination, imaging and a discussion of your priorities. An online consultation is a useful first step.",
    ),
    faq(
      "Can I start the discussion from outside Bhubaneswar?",
      "Yes. Patients anywhere in Odisha can begin with a free online consultation and travel only when clinical assessment is scheduled.",
    ),
  ],
  ctaTitle: "Find the Option That Suits Your Case",
  ctaCopy: "Begin with a free online consultation and receive a preliminary treatment roadmap covering your realistic options.",
  related: ["single", "multiple", "fullmouth", "cost", "second", "maintenance"],
  disclaimerTopic: "comparison of dental implants, fixed bridges and removable dentures",
  procedureName: "Tooth Replacement Options Assessment",
  procedureHowPerformed:
    "Missing teeth, neighbouring teeth, bone condition and general health are assessed clinically and radiographically to determine whether an implant, a fixed bridge or a denture is appropriate.",
};

export const Route = createFileRoute("/implants-vs-bridge-vs-denture")({
  staticData: { sitemap: true },
  head: implantPageHead(cfg),
  component: () => <ImplantPage cfg={cfg} />,
});
