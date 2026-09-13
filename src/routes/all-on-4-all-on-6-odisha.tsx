import { createFileRoute } from "@tanstack/react-router";

import { ImplantPage, implantPageHead, faq, type ImplantPageConfig } from "@/components/implant/ImplantPage";
import { SITE } from "@/lib/implant-cluster";
import heroImage from "@/assets/hero-clinic.jpg";

const cfg: ImplantPageConfig = {
  key: "allon",
  url: `${SITE}/all-on-4-all-on-6-odisha/`,
  title: "All-on-4 & All-on-6 Dental Implants in Odisha | Guide",
  description:
    "Understand All-on-4 and All-on-6 dental implants in Odisha, including suitability, fixed full-arch planning, treatment stages, aftercare and cost factors.",
  h1: "All-on-4 & All-on-6 Dental Implants in Odisha",
  eyebrow: "Full-Arch Implant Guide",
  heroCopy:
    "All-on-4 and All-on-6 describe full-arch treatment concepts where a fixed set of teeth is supported by a planned number of implants. Suitability is determined by bone volume, bite and overall oral health.",
  heroSecondaryCta: "Ask About Full-Arch Treatment",
  heroImage,
  heroImageAlt: "Modern dental treatment room used for full-arch implant care",
  quickQuestion: "What is All-on-4 and All-on-6 treatment?",
  quickAnswer:
    "All-on-4 and All-on-6 are full-arch implant approaches in which a complete fixed set of upper or lower teeth is supported by four or six implants. The number of implants, their positions and the type of prosthesis are decided from clinical examination and 3D imaging, not from a fixed formula.",
  sections: [
    {
      title: "Who Is Full-Arch Implant Treatment For?",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Patients who have lost all teeth in one or both jaws",
            "Patients whose remaining teeth are failing and planned for removal",
            "Long-term denture wearers seeking a fixed alternative",
            "Patients who can attend the required treatment and review appointments",
            "Patients whose general and gum health allow implant surgery",
          ],
        },
      ],
    },
    {
      title: "All-on-4 Compared With All-on-6",
      blocks: [
        {
          kind: "compare",
          caption: "Two full-arch implant configurations",
          optionA: "All-on-4",
          optionB: "All-on-6",
          rows: [
            { factor: "Implants per arch", a: "Four", b: "Six" },
            { factor: "Typical rationale", a: "Often used where bone volume is limited, using angled placement", b: "Considered where more support points are clinically preferred" },
            { factor: "Load distribution", a: "Spread across four fixtures", b: "Spread across six fixtures" },
            { factor: "Surgical extent", a: "Fewer implant sites", b: "More implant sites" },
            { factor: "Selection", a: "Decided by bone, bite and prosthesis design", b: "Decided by bone, bite and prosthesis design" },
          ],
          note: "Neither option is universally better. The configuration is chosen for the individual case.",
        },
      ],
    },
    {
      title: "Assessment and Planning",
      intro: "Full-arch treatment is planned carefully before any surgery is performed.",
      blocks: [
        {
          kind: "checklist",
          items: [
            "Medical history and suitability for surgical treatment",
            "Examination of gums, remaining teeth and jaw relationship",
            "CBCT or radiographic assessment of bone volume and anatomy",
            "Discussion of the type of fixed prosthesis planned",
            "Explanation of stages, healing time, risks and maintenance",
          ],
        },
      ],
    },
    {
      title: "Treatment Stages",
      blocks: [
        {
          kind: "process",
          steps: [
            { title: "Consultation", text: "Detailed examination and 3D imaging where indicated." },
            { title: "Planning", text: "Implant positions and prosthesis design planned digitally or clinically." },
            { title: "Extractions if required", text: "Failing teeth removed as part of the treatment plan." },
            { title: "Implant placement", text: "Implants placed under local anaesthesia, with sedation options discussed if appropriate." },
            { title: "Provisional teeth", text: "A temporary fixed or transitional prosthesis may be provided where clinically suitable." },
            { title: "Healing", text: "Integration period before the definitive prosthesis is made." },
            { title: "Final prosthesis", text: "Definitive fixed teeth fitted and the bite refined." },
            { title: "Maintenance", text: "Regular professional cleaning and review appointments." },
          ],
        },
      ],
    },
    {
      title: "Recovery and Aftercare",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Swelling and bruising for several days after surgery is common",
            "A soft diet is normally advised during the early healing period",
            "Cleaning under the fixed prosthesis is essential and will be demonstrated",
            "Regular professional maintenance appointments are required long term",
            "Smoking and uncontrolled medical conditions can affect healing",
          ],
        },
        {
          kind: "callout",
          title: "Long-term care",
          text: "Full-arch implant teeth are not maintenance-free. Ongoing hygiene and scheduled reviews are part of the treatment.",
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
            { title: "Fixed, non-removable teeth", text: "The prosthesis is secured to the implants rather than resting on the gums." },
            { title: "Full-arch rehabilitation", text: "Addresses an entire jaw within a single coordinated treatment plan." },
            { title: "Surgical procedure", text: "Involves surgery, healing time and the risks discussed during consent." },
            { title: "Not suitable for everyone", text: "Bone volume, medical conditions and gum health can make other options more appropriate." },
          ],
        },
      ],
    },
  ],
  costIntro:
    "Full-arch treatment cost depends on the number of implants, the materials used for the fixed teeth, whether extractions or grafting are needed and whether one or both jaws are treated. Figures are confirmed only after assessment.",
  faqTitle: "All-on-4 & All-on-6 — Frequently Asked Questions",
  faqs: [
    faq(
      "What does All-on-4 mean?",
      "All-on-4 refers to a full arch of fixed teeth supported by four dental implants placed in planned positions in the jaw. It is a treatment concept, not a brand of tooth.",
    ),
    faq(
      "Is All-on-6 better than All-on-4?",
      "Neither is automatically better. The number of implants is chosen from your bone volume, bite forces and the planned prosthesis, and is decided after clinical and radiographic assessment.",
    ),
    faq(
      "Will I get teeth on the same day?",
      "In some cases a provisional fixed or transitional prosthesis can be provided early in treatment, but this depends on implant stability and clinical judgement. It cannot be promised before assessment.",
    ),
    faq(
      "Do I need bone grafting for All-on-4?",
      "Angled implant placement can sometimes avoid grafting, but grafting or a sinus lift may still be recommended in some cases. Imaging determines what is needed.",
    ),
    faq(
      "Is the surgery painful?",
      "The procedure is carried out with the area fully numb. Post-operative swelling and discomfort for a few days is expected and managed with prescribed medication and instructions.",
    ),
    faq(
      "How do I clean fixed full-arch teeth?",
      "Specific cleaning aids are used to clean around and beneath the prosthesis. The clinical team demonstrates the technique and reviews it at maintenance visits.",
    ),
    faq(
      "How long does full-arch treatment take?",
      "Treatment runs over several stages including surgery, healing and fitting of the final teeth. The total duration varies between patients and is explained in your plan.",
    ),
    faq(
      "Can patients from outside Bhubaneswar have this treatment?",
      "Yes. An online consultation can be arranged from anywhere in Odisha, with clinical examination and treatment at CARE Hospital, Bhubaneswar.",
    ),
  ],
  ctaTitle: "Discuss Full-Arch Implant Treatment",
  ctaCopy:
    "Talk to the implant team about whether a full-arch approach may suit your situation and what the treatment involves.",
  related: ["fullmouth", "multiple", "bone", "sinus", "maintenance", "cost"],
  disclaimerTopic: "full-arch dental implant treatment such as All-on-4 and All-on-6",
  procedureName: "Full-Arch Implant-Supported Rehabilitation (All-on-4 / All-on-6)",
  procedureHowPerformed:
    "Four or six dental implants are placed in a jaw under local anaesthesia in planned positions to support a fixed full-arch prosthesis after the required healing period.",
};

export const Route = createFileRoute("/all-on-4-all-on-6-odisha")({
  staticData: { sitemap: true },
  head: implantPageHead(cfg),
  component: () => <ImplantPage cfg={cfg} />,
});
