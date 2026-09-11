import { createFileRoute } from "@tanstack/react-router";

import { ImplantPage, faq, implantPageHead, type ImplantPageConfig } from "@/components/implant/ImplantPage";
import implantDetail from "@/assets/implant-detail.jpg";
import { SITE } from "@/lib/implant-cluster";

const cfg: ImplantPageConfig = {
  key: "zirconia",
  url: `${SITE}/zirconia-crowns-smile-design/`,
  title: "Zirconia Crowns & Smile Design in Odisha",
  description:
    "Explore zirconia crowns and digitally planned smile design in Odisha, including suitability, treatment stages, materials and care at CARE Hospital.",
  h1: "Zirconia Crowns & Smile Design in Odisha",
  eyebrow: "Metal-Free Dental Restorations",
  heroCopy:
    "Zirconia crowns and carefully planned restorations can rebuild damaged or missing teeth while balancing strength, bite and appearance. Every design is tailored after clinical examination and diagnostic assessment.",
  heroSecondaryCta: "Ask About Zirconia Crowns",
  heroImage: implantDetail,
  heroImageAlt: "Close clinical view of a dental implant restoration and ceramic crown",
  quickQuestion: "What is a zirconia crown?",
  quickAnswer:
    "A zirconia crown is a metal-free dental restoration made from a strong ceramic material. It can restore a damaged natural tooth or form the visible crown on a dental implant. Its shape, shade and bite are selected for the individual patient rather than from a standard design.",
  sections: [
    {
      title: "When Zirconia Crowns May Be Considered",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Restoring the visible part of a single dental implant",
            "Protecting a heavily damaged or root-canal-treated tooth",
            "Replacing older crowns where clinically appropriate",
            "Rebuilding several teeth as part of a wider restorative plan",
            "Improving tooth shape or shade when conservative options are unsuitable",
          ],
        },
      ],
    },
    {
      title: "Crown Planning: More Than Appearance",
      intro:
        "A crown must look appropriate, but it must also fit the bite, gums and supporting tooth or implant.",
      blocks: [
        {
          kind: "cards",
          columns: 2,
          items: [
            { title: "Clinical assessment", text: "The tooth, implant, gums and surrounding structures are examined before treatment is recommended." },
            { title: "Digital records", text: "Photographs, scans or impressions help record tooth position, proportions and bite." },
            { title: "Shade and contour", text: "Colour, translucency and shape are selected to suit the surrounding teeth and smile." },
            { title: "Bite evaluation", text: "Contacts are planned to reduce unwanted forces and support comfortable function." },
          ],
        },
      ],
    },
    {
      title: "Treatment Process",
      blocks: [
        {
          kind: "process",
          steps: [
            { title: "Consultation", text: "Discuss your concerns, expectations and dental history." },
            { title: "Clinical records", text: "Examination and diagnostic records confirm whether a crown or another option is suitable." },
            { title: "Preparation or implant review", text: "The supporting tooth is prepared, or the implant and surrounding tissues are assessed." },
            { title: "Digital design", text: "The restoration is planned for fit, contact, bite and appearance." },
            { title: "Try-in and fitting", text: "The crown is checked clinically and fitted when the dentist and patient are satisfied." },
            { title: "Review", text: "The bite, gums and cleaning routine are reviewed after placement." },
          ],
        },
      ],
    },
    {
      title: "Zirconia Crown or Other Ceramic?",
      blocks: [
        {
          kind: "callout",
          title: "Material choice is individual",
          text: "Zirconia is not automatically the best material for every tooth. Position, available space, bite forces, opposing teeth and aesthetic priorities all influence the final recommendation.",
        },
        {
          kind: "checklist",
          items: [
            "Tooth or implant position",
            "Amount of remaining tooth structure",
            "Bite and tooth-grinding history",
            "Gum condition and visible smile line",
            "Required shade and translucency",
            "Cleaning access and maintenance needs",
          ],
        },
      ],
    },
    {
      title: "Care After Fitting",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Brush twice daily and clean between teeth or around the implant as instructed",
            "Attend scheduled reviews so the crown, gums and bite can be checked",
            "Avoid using the crown to crack hard objects or packaging",
            "Tell the dental team if the bite feels high, the crown moves or the gums become sore",
            "Use a protective night guard if recommended for tooth grinding",
          ],
        },
      ],
    },
  ],
  costIntro:
    "Cost depends on whether the crown is supported by a natural tooth or implant, the clinical preparation required, the material selected, laboratory work and whether other treatment is needed. A confirmed quotation follows assessment.",
  faqTitle: "Zirconia Crowns & Smile Design — Frequently Asked Questions",
  faqs: [
    faq("Can a zirconia crown be used on a dental implant?", "Yes. Zirconia may be used for the visible crown of a dental implant when it suits the implant position, bite and aesthetic requirements."),
    faq("Are zirconia crowns metal-free?", "Zirconia is a ceramic material and the crown itself is metal-free. Your dentist will explain the materials used in the complete restoration."),
    faq("Will the crown match my natural teeth?", "Shade, contour and surface character are selected to coordinate with nearby teeth, although an exact invisible match cannot be guaranteed in every clinical situation."),
    faq("Does smile design mean every tooth must be crowned?", "No. Smile planning considers conservative options and should not involve preparing healthy teeth unnecessarily. The recommended approach depends on your clinical needs."),
    faq("How long does treatment take?", "Timing depends on the supporting tooth or implant, gum condition, laboratory stages and whether temporary restorations are needed. Your sequence is confirmed after assessment."),
    faq("How long does a zirconia crown last?", "Longevity varies with oral hygiene, bite forces, tooth or implant health and regular maintenance. No fixed lifespan can be guaranteed."),
    faq("Can a chipped or loose crown be repaired?", "It should be assessed promptly. Depending on the cause and extent, adjustment, repair, re-cementation or replacement may be recommended."),
    faq("Can I begin with an online consultation?", "Yes. Patients across Odisha can share their concerns and available records online before attending clinical assessment at CARE Hospital, Bhubaneswar."),
  ],
  ctaTitle: "Discuss Your Crown or Smile Restoration",
  ctaCopy:
    "Begin with a free online consultation and understand the clinical assessment needed before a final restorative plan is confirmed.",
  related: ["single", "multiple", "fullmouth", "guided", "maintenance", "cost"],
  disclaimerTopic: "zirconia crowns and restorative smile design",
  procedureName: "Zirconia Dental Crown Restoration",
  procedureHowPerformed:
    "After clinical assessment and diagnostic records, a zirconia restoration is designed for the prepared natural tooth or dental implant, checked for fit and bite, and fitted with appropriate follow-up care.",
};

export const Route = createFileRoute("/zirconia-crowns-smile-design")({
  staticData: { sitemap: true },
  head: implantPageHead(cfg),
  component: () => <ImplantPage cfg={cfg} />,
});