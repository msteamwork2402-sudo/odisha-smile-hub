import { createFileRoute } from "@tanstack/react-router";

import { ImplantPage, implantPageHead, faq, type ImplantPageConfig } from "@/components/implant/ImplantPage";
import { SITE } from "@/lib/implant-cluster";
import heroImage from "@/assets/implant-detail.jpg";

const cfg: ImplantPageConfig = {
  key: "multiple",
  url: `${SITE}/multiple-dental-implants/`,
  title: "Multiple Dental Implants in Odisha | Treatment Guide",
  description:
    "How multiple dental implants replace several missing teeth, implant-supported bridges, how many implants may be needed, treatment stages, suitability and cost considerations in Odisha.",
  h1: "Multiple Dental Implants in Odisha",
  eyebrow: "Implant Treatment Guide",
  heroCopy:
    "When several teeth are missing, implants can be planned to support individual crowns or a fixed implant-supported bridge. The right approach depends on how many teeth are missing, where they are and the condition of the supporting bone.",
  heroSecondaryCta: "Talk to the Implant Team",
  heroImage,
  heroImageAlt: "Close-up clinical illustration of dental implants supporting replacement teeth",
  quickQuestion: "What are multiple dental implants?",
  quickAnswer:
    "Multiple dental implants are used when more than one tooth is missing. Depending on the clinical situation, each missing tooth may receive its own implant, or a smaller number of implants may be used to support a fixed bridge spanning several teeth. The number and position of implants is decided after clinical examination and radiographic assessment.",
  sections: [
    {
      title: "When Are Multiple Implants Considered?",
      intro:
        "Multiple implants may be discussed when several teeth in the same arch are missing, failing or planned for removal.",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Two or more adjacent teeth missing in the same region",
            "Missing teeth in separate areas of the same jaw",
            "Teeth planned for extraction due to advanced decay or gum disease",
            "An existing bridge or partial denture the patient wishes to replace with a fixed option",
            "A long gap where a conventional bridge would need extensive support from natural teeth",
          ],
        },
      ],
    },
    {
      title: "Individual Implants or an Implant-Supported Bridge?",
      intro:
        "Both approaches are used routinely. The choice is clinical, not a matter of preference alone.",
      blocks: [
        {
          kind: "compare",
          caption: "Two ways of replacing several missing teeth",
          optionA: "Separate implants",
          optionB: "Implant-supported bridge",
          rows: [
            {
              factor: "Structure",
              a: "One implant supports one replacement tooth",
              b: "Fewer implants support a multi-unit fixed bridge",
            },
            {
              factor: "Typical use",
              a: "Individual gaps or where each site has good bone",
              b: "Longer continuous gaps in one region",
            },
            {
              factor: "Number of implants",
              a: "Higher",
              b: "Usually fewer than the number of teeth replaced",
            },
            {
              factor: "Cleaning",
              a: "Cleaned individually like natural teeth",
              b: "Requires cleaning under the bridge with specific aids",
            },
            {
              factor: "Planning needs",
              a: "Adequate bone at each implant site",
              b: "Bone concentrated at planned support positions",
            },
          ],
          note: "Your dentist will explain which approach fits your case after examination and imaging.",
        },
      ],
    },
    {
      title: "How Many Implants Are Needed?",
      intro:
        "There is no fixed rule. The number depends on the span, the position in the jaw, bite forces and available bone.",
      blocks: [
        {
          kind: "prose",
          text: "Replacing several teeth does not always mean placing one implant per tooth. In many situations a smaller number of well-positioned implants can support a fixed bridge. In other situations, individual implants give a better long-term result. This decision is made only after clinical assessment, radiographs or a CBCT scan where indicated, and discussion of your priorities.",
        },
        {
          kind: "callout",
          title: "Important",
          text: "Any implant number quoted before examination is only an estimate and may change after diagnostic assessment.",
        },
      ],
    },
    {
      title: "Suitability and Bone Assessment",
      blocks: [
        {
          kind: "checklist",
          items: [
            "General health review, including conditions such as diabetes",
            "Gum health assessment and treatment of active infection first",
            "Assessment of bone height and width at each planned site",
            "Review of the bite and how the arch functions as a whole",
            "Smoking, medications and healing capacity discussed openly",
          ],
        },
        {
          kind: "prose",
          text: "Where bone volume is reduced, bone grafting or a sinus lift may be recommended before or alongside implant placement. These are separate procedures with their own healing time.",
        },
        { kind: "link", label: "Read about bone grafting for dental implants", href: "/bone-grafting-for-dental-implants/" },
      ],
    },
    {
      title: "Treatment Stages",
      blocks: [
        {
          kind: "process",
          steps: [
            { title: "Consultation & assessment", text: "Examination, medical history, radiographs and discussion of options." },
            { title: "Treatment planning", text: "Number and position of implants planned, along with the type of restoration." },
            { title: "Preparatory treatment", text: "Extractions, gum treatment or grafting if these are needed first." },
            { title: "Implant placement", text: "Implants placed under local anaesthesia in one or more appointments." },
            { title: "Healing period", text: "Bone integration is allowed to progress; temporary options may be used." },
            { title: "Restoration", text: "Crowns or a fixed bridge are fitted after the required healing." },
            { title: "Review & maintenance", text: "Ongoing checks, hygiene support and long-term monitoring." },
          ],
        },
        {
          kind: "timeline",
          steps: [
            "Initial consultation and diagnostics",
            "Preparatory treatment if required",
            "Implant surgery",
            "Healing and integration period",
            "Final restoration fitted",
            "Follow-up and maintenance reviews",
          ],
        },
      ],
    },
    {
      title: "Recovery and What to Expect",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Treatment is normally carried out under local anaesthesia",
            "Some swelling or discomfort for a few days is usual after surgery",
            "A softer diet is generally advised during early healing",
            "Post-operative instructions and medication are provided by the clinical team",
            "Healing time varies between individuals and between sites",
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
            { title: "Fixed replacement", text: "Implant-supported teeth are fixed in place and do not need to be removed for cleaning." },
            { title: "Preserves neighbouring teeth", text: "Unlike a conventional bridge, adjacent healthy teeth need not be reduced for support." },
            { title: "Surgical treatment", text: "Implants involve a surgical procedure with associated risks that must be discussed beforehand." },
            { title: "Time and maintenance", text: "Treatment takes place over several stages and requires long-term hygiene and review." },
          ],
        },
      ],
    },
  ],
  costIntro:
    "The cost of replacing several teeth depends on how many implants are placed, the implant system used, whether grafting is required and the type of final restoration. Costs are confirmed only after clinical assessment.",
  faqTitle: "Multiple Dental Implants — Frequently Asked Questions",
  faqs: [
    faq(
      "Can I replace several missing teeth with implants?",
      "Yes. Several missing teeth can be replaced with individual implants or with a fixed implant-supported bridge, provided the gums, bone and general health are suitable. This is confirmed by clinical examination.",
    ),
    faq(
      "Do I need one implant for every missing tooth?",
      "Not always. In many cases fewer implants can support a bridge replacing more teeth. The number is decided from your bone condition, the span of the gap and the bite.",
    ),
    faq(
      "Is the treatment done in one appointment?",
      "Implant placement may be completed in one surgical appointment, but the overall treatment involves several stages including planning, healing and fitting of the final teeth.",
    ),
    faq(
      "Is it painful?",
      "The procedure is performed under local anaesthesia so the area is numb. Mild discomfort or swelling afterwards is common and is managed with the medication and instructions provided.",
    ),
    faq(
      "What if I have bone loss?",
      "Bone grafting or a sinus lift may be recommended to improve the available bone before or during implant placement. Suitability is assessed with radiographs or a CBCT scan.",
    ),
    faq(
      "How long does the whole treatment take?",
      "Total treatment time varies widely between patients because healing and integration differ. Your dentist will give an expected timeline for your case after assessment.",
    ),
    faq(
      "Are implants better than a removable partial denture?",
      "Implants are fixed and do not rest on the gums, but they require surgery and suitable bone. A denture is non-surgical and less costly. Each option has advantages that should be discussed clinically.",
    ),
    faq(
      "Can I get this treatment if I live outside Bhubaneswar?",
      "Yes. Patients from across Odisha can begin with an online consultation. Clinical examination and treatment take place at CARE Hospital, Bhubaneswar.",
    ),
  ],
  ctaTitle: "Discuss Replacing Several Missing Teeth",
  ctaCopy:
    "Speak to the implant team about how many implants your case may need, the stages involved and what to expect.",
  related: ["single", "allon", "fullmouth", "bone", "compare", "cost"],
  disclaimerTopic: "replacing several missing teeth with dental implants",
  procedureName: "Multiple Dental Implant Treatment",
  procedureHowPerformed:
    "Several dental implants are placed in the jawbone under local anaesthesia to support individual crowns or a fixed implant-supported bridge after a period of healing and integration.",
};

export const Route = createFileRoute("/multiple-dental-implants")({
  head: implantPageHead(cfg),
  component: () => <ImplantPage cfg={cfg} />,
});
