import { createFileRoute } from "@tanstack/react-router";

import { ImplantPage, implantPageHead, faq, type ImplantPageConfig } from "@/components/implant/ImplantPage";
import { SITE } from "@/lib/implant-cluster";
import heroImage from "@/assets/hero-clinic.jpg";

const cfg: ImplantPageConfig = {
  key: "guided",
  url: `${SITE}/flapless-guided-dental-implants/`,
  title: "Flapless & Guided Dental Implants in Odisha | Digital Planning",
  description:
    "Guided and flapless dental implant treatment in Odisha: how CBCT-based digital planning and surgical guides work, who may be suitable, benefits, limitations and recovery.",
  h1: "Flapless & Guided Dental Implants in Odisha",
  eyebrow: "Digital Implant Planning",
  heroCopy:
    "Guided implant surgery uses 3D imaging and digital planning to decide implant position before treatment. In selected cases the implant can be placed through a small opening without raising a gum flap.",
  heroSecondaryCta: "Ask About Guided Planning",
  heroImage,
  heroImageAlt: "Modern dental clinic room equipped for digitally planned implant treatment",
  quickQuestion: "What are guided and flapless dental implants?",
  quickAnswer:
    "Guided implant surgery means the implant position is planned on a 3D scan and transferred to the mouth using a surgical guide. Flapless surgery means the implant is placed through a small opening in the gum without lifting a flap. Both techniques are used only where the bone volume and soft tissues are suitable.",
  sections: [
    {
      title: "How Digital Planning Works",
      blocks: [
        {
          kind: "process",
          steps: [
            { title: "CBCT scan", text: "A 3D scan shows bone volume, density and nearby anatomical structures." },
            { title: "Digital records", text: "Intraoral scans or models record the teeth and soft tissue." },
            { title: "Virtual planning", text: "Implant position, angle and depth are planned on software." },
            { title: "Surgical guide", text: "A guide may be produced to transfer the plan to the mouth." },
            { title: "Placement", text: "The implant is placed following the planned position." },
            { title: "Restorative stage", text: "The crown or bridge is made after the required healing." },
          ],
        },
      ],
    },
    {
      title: "Guided vs Conventional Placement",
      blocks: [
        {
          kind: "compare",
          caption: "Two approaches to implant placement",
          optionA: "Guided placement",
          optionB: "Conventional freehand placement",
          rows: [
            { factor: "Planning", a: "Position planned digitally in advance", b: "Position planned clinically and radiographically" },
            { factor: "Guide use", a: "A surgical guide may be used", b: "No guide used" },
            { factor: "Typical indication", a: "Complex anatomy, multiple implants, restricted access", b: "Straightforward single sites with good visibility" },
            { factor: "Preparation time", a: "Additional planning and guide fabrication", b: "Fewer preparatory steps" },
            { factor: "Outcome", a: "Both can achieve good outcomes when correctly indicated", b: "Both can achieve good outcomes when correctly indicated" },
          ],
        },
      ],
    },
    {
      title: "When Flapless Surgery May Be Considered",
      blocks: [
        {
          kind: "checklist",
          items: [
            "Sufficient bone width confirmed on 3D imaging",
            "Adequate thickness of attached gum tissue at the site",
            "No need for simultaneous grafting at the implant site",
            "Good access and visibility for the planned position",
            "Healthy gums with infection controlled beforehand",
          ],
        },
        {
          kind: "callout",
          title: "Clinical judgement",
          text: "If the site does not meet these conditions, a conventional flap gives better visibility and is the safer choice.",
        },
      ],
    },
    {
      title: "Benefits and Limitations",
      blocks: [
        {
          kind: "cards",
          columns: 2,
          items: [
            { title: "Planned positioning", text: "Digital planning helps relate implant position to the planned final tooth." },
            { title: "Reduced surgical trauma", text: "Flapless access can mean less soft tissue disturbance in suitable cases." },
            { title: "Requires 3D imaging", text: "A CBCT scan and additional planning steps are needed." },
            { title: "Limited visibility", text: "Flapless technique reduces direct view of the bone, so case selection matters." },
          ],
        },
      ],
    },
    {
      title: "Recovery",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Discomfort and swelling are usually modest in suitable flapless cases",
            "Post-operative instructions and medication are provided",
            "Normal healing and integration time is still required",
            "Review appointments monitor the site during healing",
            "Individual recovery varies and cannot be guaranteed in advance",
          ],
        },
      ],
    },
  ],
  costIntro:
    "Guided treatment may include 3D imaging, digital planning and a surgical guide in addition to the implant and restoration. The cost is confirmed after assessment of what your case requires.",
  faqTitle: "Guided & Flapless Implants — Frequently Asked Questions",
  faqs: [
    faq(
      "What is guided implant surgery?",
      "It is implant placement planned on a 3D scan and transferred to the mouth, often using a surgical guide, so the implant follows the planned position, angle and depth.",
    ),
    faq(
      "Is flapless implant surgery stitch-free?",
      "Flapless placement often needs few or no sutures because a flap is not raised, but this depends on the site and the technique used.",
    ),
    faq(
      "Is guided surgery more accurate?",
      "Guided placement can help transfer a planned position accurately, particularly in complex cases. Accuracy still depends on the guide fit, technique and clinical experience.",
    ),
    faq(
      "Do I need a CBCT scan?",
      "Guided planning requires 3D imaging. Your dentist will advise whether a CBCT scan is indicated for your case.",
    ),
    faq(
      "Is flapless surgery suitable for everyone?",
      "No. It requires adequate bone width and gum thickness with no need for grafting at the site. Otherwise a conventional flap approach is recommended.",
    ),
    faq(
      "Is recovery faster with flapless placement?",
      "Many patients report less swelling in suitable cases, but healing and implant integration still take the usual time.",
    ),
    faq(
      "Can guided surgery be used for full-arch treatment?",
      "Yes, digital planning is commonly used for multiple and full-arch implant cases where planning several positions together is helpful.",
    ),
    faq(
      "How do I find out if this applies to me?",
      "Begin with an online consultation from anywhere in Odisha; suitability is confirmed after examination and imaging at CARE Hospital, Bhubaneswar.",
    ),
  ],
  ctaTitle: "Discuss Digitally Planned Implant Treatment",
  ctaCopy: "Ask the implant team whether guided or flapless placement may be appropriate for your case.",
  related: ["single", "immediate", "multiple", "allon", "bone", "cost"],
  disclaimerTopic: "guided and flapless dental implant placement techniques",
  procedureName: "Guided / Flapless Dental Implant Placement",
  procedureHowPerformed:
    "Implant position is planned using 3D imaging and digital software, then placed under local anaesthesia through a surgical guide or a small flapless opening where clinical conditions allow.",
};

export const Route = createFileRoute("/flapless-guided-dental-implants")({
  head: implantPageHead(cfg),
  component: () => <ImplantPage cfg={cfg} />,
});
