import { createFileRoute } from "@tanstack/react-router";

import { ImplantPage, implantPageHead, faq, type ImplantPageConfig } from "@/components/implant/ImplantPage";
import { SITE } from "@/lib/implant-cluster";
import heroImage from "@/assets/dentist-consult.jpg";

const cfg: ImplantPageConfig = {
  key: "second",
  url: `${SITE}/dental-implant-second-opinion/`,
  title: "Dental Implant Second Opinion in Odisha | Free Online Review",
  description:
    "Get a second opinion on an existing dental implant plan or quotation. Share reports online from anywhere in Odisha and receive a preliminary treatment roadmap before clinical assessment.",
  h1: "Dental Implant Second Opinion in Odisha",
  eyebrow: "Independent Plan Review",
  heroCopy:
    "If you already have an implant treatment plan or quotation and are unsure about it, a second opinion can help you understand what is being proposed, what alternatives exist and what questions to ask.",
  heroSecondaryCta: "Send My Reports on WhatsApp",
  heroImage,
  heroImageAlt: "Dentist discussing a treatment plan with a patient during a consultation",
  quickQuestion: "What is a dental implant second opinion?",
  quickAnswer:
    "A second opinion is an independent review of an implant treatment plan you have already been given. The implant team looks at your reports, X-rays or scans and the proposed plan, then explains the reasoning, possible alternatives and what would need to be verified clinically. It does not replace an in-person examination and diagnostic assessment.",
  sections: [
    {
      title: "When a Second Opinion Helps",
      blocks: [
        {
          kind: "cards",
          columns: 2,
          items: [
            { title: "The plan is unclear", text: "You have been given a quotation but not a clear explanation of the stages involved." },
            { title: "Options were not discussed", text: "You want to understand alternatives such as a bridge, denture or a different implant approach." },
            { title: "Extra procedures proposed", text: "Grafting or a sinus lift has been recommended and you want it explained." },
            { title: "Treatment already started", text: "You have concerns about an implant that is in progress or already placed." },
          ],
        },
      ],
    },
    {
      title: "What the Review Covers",
      blocks: [
        {
          kind: "checklist",
          items: [
            "What the proposed treatment involves, stage by stage",
            "Whether additional procedures appear to be indicated by your reports",
            "Alternative tooth replacement options worth discussing",
            "What further examination or imaging would be needed to confirm anything",
            "Questions you can put to your current dentist",
          ],
        },
        {
          kind: "callout",
          title: "An honest limitation",
          text: "A remote review is based only on the information you provide. It cannot confirm a diagnosis or replace clinical examination and diagnostic assessment.",
        },
      ],
    },
    {
      title: "How to Get a Second Opinion",
      blocks: [
        {
          kind: "process",
          steps: [
            { title: "Share your details", text: "Send your concern and history through the online consultation form or WhatsApp." },
            { title: "Send your records", text: "Include any X-rays, CBCT scans, photographs, treatment plans or quotations you have." },
            { title: "Online discussion", text: "The team reviews your information and discusses it with you." },
            { title: "Preliminary treatment roadmap", text: "You receive an indicative outline of possible directions." },
            { title: "Clinical assessment", text: "If you wish to proceed, examination and imaging at CARE Hospital, Bhubaneswar confirm the final treatment plan." },
          ],
        },
      ],
    },
    {
      title: "What to Prepare",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Any OPG, periapical X-rays or CBCT scan reports you already have",
            "The written treatment plan or quotation you were given",
            "Clear photographs of the area, if available",
            "A list of your medical conditions and current medication",
            "The specific questions or doubts you want answered",
          ],
        },
      ],
    },
  ],
  costIntro:
    "The online second-opinion consultation is free. Any treatment cost is discussed only after examination and diagnostic assessment, and depends on what your case actually requires.",
  faqTitle: "Second Opinion — Frequently Asked Questions",
  faqs: [
    faq(
      "Is the online second opinion free?",
      "Yes. The online consultation and review of the information you share is provided free of charge.",
    ),
    faq(
      "Do I need to travel for a second opinion?",
      "No. You can start entirely online from anywhere in Odisha. Travel to Bhubaneswar is only needed if you decide to proceed to clinical assessment or treatment.",
    ),
    faq(
      "What records should I send?",
      "Any X-rays or CBCT scans, your written plan or quotation, photographs of the area and a summary of your medical history and medication.",
    ),
    faq(
      "Will you tell me if my current plan is wrong?",
      "The team will explain what the plan appears to involve and what alternatives exist. Judging another clinician's plan definitively is not possible without examining you.",
    ),
    faq(
      "Can you review treatment that has already started?",
      "Yes. Concerns about an implant already placed or in progress can be discussed, and examination is usually recommended in those cases.",
    ),
    faq(
      "Is my information kept private?",
      "Records you share are used only to review your case and discuss it with you.",
    ),
    faq(
      "Am I obliged to have treatment with you?",
      "No. A second opinion carries no obligation. You are free to continue with your existing dentist.",
    ),
    faq(
      "How soon will I get a response?",
      "The team responds as quickly as possible once your details and records are received through the form or WhatsApp.",
    ),
  ],
  ctaTitle: "Get Your Implant Plan Reviewed",
  ctaCopy:
    "Send your reports and existing plan online from anywhere in Odisha and receive a clear, preliminary treatment roadmap.",
  related: ["cost", "compare", "bone", "allon", "maintenance", "single"],
  disclaimerTopic: "independent review of an existing dental implant treatment plan",
  procedureName: "Dental Implant Second Opinion Consultation",
  procedureHowPerformed:
    "Existing records, imaging and treatment plans shared by the patient are reviewed online and discussed, followed where required by clinical examination and diagnostic assessment.",
};

export const Route = createFileRoute("/dental-implant-second-opinion")({
  head: implantPageHead(cfg),
  component: () => <ImplantPage cfg={cfg} />,
});
