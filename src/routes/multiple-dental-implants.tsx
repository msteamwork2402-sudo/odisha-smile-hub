import { createFileRoute } from "@tanstack/react-router";

import { ImplantPage, implantPageHead, faq, type ImplantPageConfig } from "@/components/implant/ImplantPage";
import { SITE } from "@/lib/implant-cluster";
import heroImage from "@/assets/implant-detail.jpg";

const cfg: ImplantPageConfig = {
  key: "multiple",
  url: `${SITE}/multiple-dental-implants/`,
  title: "Multiple Dental Implants in Odisha | Trusted Bridge & Bhala Implant Care",
  description:
    "Need multiple dental implants or an implant bridge? Consult MDS specialists at CARE Hospital for affordable, bhala dental implants in Bhubaneswar & Odisha.",
  h1: "Multiple Dental Implants in Odisha: Trusted Doctor & Specialist Care",
  eyebrow: "Multiple Teeth Replacement & Bridge Options",
  heroCopy:
    "Aapanankara multiple missing teeth thile (if you have several missing teeth), dental implants offer a strong, natural-looking fixed bridge or individual crowns. At CARE Hospital Chandrasekharpur, Bhubaneswar, our experienced MDS implant specialists provide trusted, affordable multiple dental implant treatment tailored to your jaw bone and bite structure.",
  heroSecondaryCta: "Talk to the Implant Team",
  heroImage,
  heroImageAlt: "MDS implant specialist consulting patient for multiple dental implants and implant bridge in Bhubaneswar Odisha",
  quickQuestion: "Multiple dental implant ra options o cost kete?",
  quickAnswer:
    "Multiple dental implants replace 2 or more missing teeth using individual implant crowns or an implant-supported bridge (fewer implants supporting multiple teeth). Treatment costs vary depending on implant count and bone condition. Consult our trusted MDS doctors at CARE Hospital Chandrasekharpur, Bhubaneswar for a transparent evaluation.",
  sections: [
    {
      title: "When Are Multiple Dental Implants & Implant Bridges Recommended?",
      intro:
        "Multiple implants may be discussed when several teeth in the same arch are missing, failing or planned for removal.",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Two or more adjacent teeth missing in the upper or lower jaw",
            "Missing teeth in separate areas of the same jaw arch",
            "Teeth planned for extraction due to advanced decay or gum disease",
            "An existing loose bridge or removable denture you wish to replace with fixed teeth",
            "A long gap where a conventional bridge would require shaving healthy adjacent teeth",
          ],
        },
      ],
    },
    {
      title: "Individual Implants vs. Implant-Supported Bridge: Which Is Right for You?",
      intro:
        "Both approaches are used routinely by our MDS prosthodontists. The choice is clinically evaluated based on bone density, gap length, and bite forces.",
      blocks: [
        {
          kind: "compare",
          caption: "Two ways of replacing several missing teeth",
          optionA: "Separate implants",
          optionB: "Implant-supported bridge",
          rows: [
            {
              factor: "Structure",
              a: "One implant supports one replacement tooth crown",
              b: "Fewer implants support a multi-unit fixed bridge",
            },
            {
              factor: "Typical use",
              a: "Individual gaps or where each site has adequate bone",
              b: "Longer continuous gaps in one region",
            },
            {
              factor: "Number of implants",
              a: "Higher fixture count",
              b: "Usually fewer implants than total missing teeth",
            },
            {
              factor: "Cleaning",
              a: "Cleaned individually with floss like natural teeth",
              b: "Requires cleaning under the bridge with specific flossing aids",
            },
            {
              factor: "Planning needs",
              a: "Adequate bone at each individual implant site",
              b: "Bone concentrated at planned support pillar positions",
            },
          ],
          note: "Your MDS implant specialist will explain which approach fits your case after 3D CBCT examination and imaging.",
        },
      ],
    },
    {
      title: "How Many Dental Implants Are Needed for Multiple Teeth?",
      intro:
        "There is no fixed formula. The number of implant posts depends on the gap span, jaw position, bite forces, and available bone density.",
      blocks: [
        {
          kind: "prose",
          text: "Replacing several teeth does not always mean placing one implant per tooth. In many situations, 2 implants can support a 3-unit or 4-unit fixed bridge, offering a more affordable dental implant solution. In other situations, individual implants give a better long-term result. This decision is made after comprehensive assessment by our MDS doctors at CARE Hospital, Bhubaneswar.",
        },
        {
          kind: "callout",
          title: "Transparent Assessment",
          text: "Any implant fixture count quoted before clinical examination is an estimate and will be confirmed after diagnostic 3D CBCT assessment.",
        },
      ],
    },
    {
      title: "Suitability, Bone Assessment & Bone Grafting Needs",
      blocks: [
        {
          kind: "checklist",
          items: [
            "General health review, including controlled blood sugar/diabetes management",
            "Gum health assessment and treatment of active periodontal infection first",
            "3D CBCT assessment of bone height and width at each planned implant site",
            "Review of the bite alignment and full arch masticatory function",
            "Discussion on healing capacity, bone quality, and implant brand options",
          ],
        },
        {
          kind: "prose",
          text: "Where bone volume is reduced, bone grafting or a sinus lift may be recommended before or alongside implant placement. For details on costs and procedures, check our guide on dental implant cost in Bhubaneswar or consult our dental implants Bhubaneswar specialists.",
        },
        { kind: "link", label: "Read about bone grafting for dental implants", href: "/bone-grafting-for-dental-implants/" },
        { kind: "link", label: "View dental implant cost in Bhubaneswar", href: "/dental-implant-cost-bhubaneswar/" },
        { kind: "link", label: "Explore dental implants in Bhubaneswar", href: "/dental-implants-bhubaneswar/" },
      ],
    },
    {
      title: "Step-by-Step Multiple Dental Implant Procedure",
      blocks: [
        {
          kind: "process",
          steps: [
            { title: "Consultation & 3D CBCT assessment", text: "Examination, medical history review, CBCT diagnostics, and transparent discussion of treatment options." },
            { title: "Personalized treatment plan", text: "Implant positions, bridge span, and exact transparent cost estimates are finalized." },
            { title: "Preparatory treatment", text: "Extractions, gum care, or bone grafting performed if needed prior to placement." },
            { title: "Implant placement surgery", text: "Implants placed under local anaesthesia in sterile hospital OT conditions at CARE Hospital." },
            { title: "Osseointegration healing phase", text: "Bone integrates with implant posts over 3–4 months; temporary options maintain aesthetics." },
            { title: "Final bridge restoration", text: "Custom porcelain or zirconia implant crowns/bridges are precision-fitted." },
            { title: "Long-term maintenance", text: "Regular follow-up reviews, hygiene support, and professional monitoring." },
          ],
        },
        {
          kind: "timeline",
          steps: [
            "Initial consultation & 3D CBCT diagnostics",
            "Preparatory care or bone grafting if required",
            "Implant surgery under local anaesthesia",
            "Healing and osseointegration period",
            "Final fixed bridge or crowns fitted",
            "Ongoing maintenance and hygiene checks",
          ],
        },
      ],
    },
    {
      title: "Recovery, Healing & Aftercare for Implant Bridges",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Procedure is comfortably performed under local anaesthesia",
            "Mild swelling or discomfort for 2–4 days is easily managed with prescribed routine medication",
            "A soft food diet is advised during early surgical healing",
            "Detailed post-operative care instructions are provided by our clinical team",
            "Healing timelines vary depending on bone quality and grafting requirements",
          ],
        },
      ],
    },
    {
      title: "Benefits of Choosing Trusted Multiple Dental Implants",
      blocks: [
        {
          kind: "cards",
          columns: 2,
          items: [
            { title: "Fixed, natural feel", text: "Implant-supported bridges are anchored securely in the jaw and do not slip or click like removable partial dentures." },
            { title: "Preserves adjacent teeth", text: "Unlike traditional bridges, neighbouring healthy teeth do not need to be trimmed or crowned." },
            { title: "Jawbone preservation", text: "Implant posts stimulate the jawbone, preventing facial collapse and bone resorption." },
            { title: "Long-term investment", text: "With proper oral hygiene and regular checks, implant bridges offer durable, long-lasting performance." },
          ],
        },
      ],
    },
  ],
  costIntro:
    "Multiple dental implant ra cost depends on the number of implant posts, brand, bridge span, and whether bone grafting or sinus lift is required. In Bhubaneswar, an implant bridge is often more affordable than replacing each tooth with a separate implant fixture. Transparent cost estimates are provided following a 3D CBCT evaluation.",
  faqTitle: "Multiple Dental Implants — Frequently Asked Questions",
  faqs: [
    faq(
      "Multiple dental implant ra cost kete Bhubaneswar re?",
      "Multiple dental implant costs depend on how many implant posts are needed and whether an implant bridge or individual crowns are chosen. Placing an implant bridge (e.g. 2 implants supporting 3 teeth) is an affordable way to replace multiple missing teeth. Visit our dental implant cost Bhubaneswar guide or consult our CARE Hospital team for transparent pricing.",
    ),
    faq(
      "Bhala dental implant doctor pairan multiple teeth replace kariba bhala ki?",
      "Yes, consulting an experienced MDS implant dentist ensures accurate 3D CBCT planning, precise surgical placement, and high aesthetic outcomes for missing teeth. At CARE Hospital Chandrasekharpur, our MDS prosthodontists and oral surgeons handle complex multiple implant cases.",
    ),
    faq(
      "Dental bridge na multiple dental implants—kaana bhala option?",
      "Dental implants do not require grinding or damaging adjacent healthy natural teeth, and they stimulate the underlying jawbone to prevent bone loss. This makes implant bridges a superior, trusted long-term solution compared to traditional tooth-supported bridges.",
    ),
    faq(
      "Do I need one implant for every missing tooth?",
      "Not necessarily. In many cases, 2 dental implants can support a 3-unit or 4-unit fixed bridge. Your MDS doctor will determine the exact number of implants after analyzing your jawbone volume on a CBCT scan.",
    ),
    faq(
      "Is the treatment completed in a single visit?",
      "Implant post placement takes 1–2 hours under local anaesthesia, followed by a healing period of 3 to 4 months for bone integration before final bridge fitting. Temporary teeth are provided during the healing period when needed.",
    ),
    faq(
      "What if I have bone loss in the missing tooth region?",
      "If bone loss is detected on your 3D CBCT scan, bone grafting or a sinus lift can rebuild the required bone volume to safely support your implant bridge.",
    ),
    faq(
      "Can patients outside Bhubaneswar get multiple dental implants at CARE Hospital?",
      "Yes. Patients across Odisha (Cuttack, Puri, Berhampur, Sambalpur, Rourkela) can schedule an initial online consultation, with surgical placement and bridge fitting handled at CARE Hospital Chandrasekharpur, Bhubaneswar.",
    ),
  ],
  ctaTitle: "Discuss Replacing Several Missing Teeth with MDS Doctors",
  ctaCopy:
    "Schedule a consultation with our experienced MDS implant specialists at CARE Hospital Chandrasekharpur, Bhubaneswar to discuss treatment options, implant bridge pricing, and 3D CBCT assessment.",
  related: ["single", "allon", "fullmouth", "bone", "compare", "cost"],
  disclaimerTopic: "replacing several missing teeth with dental implants",
  procedureName: "Multiple Dental Implant Treatment",
  procedureHowPerformed:
    "Several dental implants are placed in the jawbone under local anaesthesia to support individual crowns or a fixed implant-supported bridge after a period of healing and integration.",
};

export const Route = createFileRoute("/multiple-dental-implants")({
  staticData: { sitemap: true },
  head: implantPageHead(cfg),
  component: () => <ImplantPage cfg={cfg} />,
});
