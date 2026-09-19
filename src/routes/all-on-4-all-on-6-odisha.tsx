import { createFileRoute } from "@tanstack/react-router";

import { ImplantPage, implantPageHead, faq, type ImplantPageConfig } from "@/components/implant/ImplantPage";
import { SITE } from "@/lib/implant-cluster";
import heroImage from "@/assets/hero-clinic.jpg";

const cfg: ImplantPageConfig = {
  key: "allon",
  url: `${SITE}/all-on-4-all-on-6-odisha/`,
  title: "All-on-4 & All-on-6 Dental Implants in Odisha | Trusted Fixed Teeth Guide",
  description:
    "Explore All-on-4 & All-on-6 dental implants in Odisha. Consult experienced MDS specialists at CARE Hospital for affordable fixed full arch teeth & trusted care.",
  h1: "All-on-4 & All-on-6 Dental Implants in Odisha: Trusted Fixed Teeth Care",
  eyebrow: "Full Arch Fixed Teeth Protocol",
  heroCopy:
    "Sabujaki fixed teeth paiba pain All-on-4 kinba All-on-6 dental implants in Odisha best solution ate. Using 4 or 6 strategically placed implants, our MDS specialists at CARE Hospital Chandrasekharpur, Bhubaneswar restore complete full-arch chewing stability and natural appearance without cumbersome removable dentures.",
  heroSecondaryCta: "Ask About Full-Arch Treatment",
  heroImage,
  heroImageAlt: "Modern dental implant surgical suite for All-on-4 and All-on-6 fixed teeth procedures at CARE Hospital Bhubaneswar",
  quickQuestion: "All-on-4 o All-on-6 dental implant ra cost o difference kna?",
  quickAnswer:
    "All-on-4 uses 4 angled implants to support a full arch of fixed teeth (often eliminating bone grafting), while All-on-6 uses 6 implants for additional structural support in higher bone density cases. Pricing depends on implant fixture brand and bridge material. Consult our trusted MDS doctors at CARE Hospital Bhubaneswar for personalized guidance.",
  sections: [
    {
      title: "Who Is Suitable for All-on-4 & All-on-6 Fixed Teeth?",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Patients who have lost all natural teeth in the upper jaw, lower jaw, or both arches",
            "Patients with failing, mobile, or painful remaining teeth planned for extraction",
            "Denture wearers tired of loose fit, messy adhesives, and poor chewing power",
            "Patients with moderate bone loss seeking fixed teeth without extensive grafting",
            "Individuals medically fit for minor oral surgical procedures under local anaesthesia",
          ],
        },
      ],
    },
    {
      title: "All-on-4 vs. All-on-6 Dental Implants: Comparison & Clinical Selection",
      blocks: [
        {
          kind: "compare",
          caption: "Two full-arch implant configurations",
          optionA: "All-on-4 Protocol",
          optionB: "All-on-6 Protocol",
          rows: [
            { factor: "Implants per arch", a: "Four strategic implant fixtures", b: "Six strategic implant fixtures" },
            { factor: "Angled placement", a: "Posterior implants angled to maximize available bone volume", b: "Implants distributed evenly across anterior & posterior regions" },
            { factor: "Load distribution", a: "Load distributed across 4 strong anchor points", b: "Load distributed across 6 anchor points for maximum stability" },
            { factor: "Bone grafting need", a: "Often avoids bone grafting by angling posterior implants", b: "Requires good posterior jawbone width and height" },
            { factor: "Prosthetic result", a: "Full fixed arch of 10 to 12 aesthetic replacement teeth", b: "Full fixed arch of 12 to 14 aesthetic replacement teeth" },
          ],
          note: "Neither configuration is universally superior. Our MDS prosthodontists choose the exact protocol based on your 3D CBCT bone scan and bite dynamics.",
        },
      ],
    },
    {
      title: "3D Digital Planning & CBCT Assessment",
      intro: "Full-arch fixed implant treatment requires precise computer-guided planning prior to surgery.",
      blocks: [
        {
          kind: "checklist",
          items: [
            "Medical evaluation including blood glucose, bone density, and surgical clearance",
            "Detailed oral examination of gum tissue, smile line, and jaw relation",
            "High-resolution 3D CBCT scan to map bone width, bone height, and nerve pathways",
            "Digital guided surgical template preparation for sub-millimeter placement accuracy",
            "Custom prosthetic design review for natural shade, shape, and facial aesthetics",
          ],
        },
        {
          kind: "prose",
          text: "To understand full mouth rehabilitation options, explore our full mouth dental implants page, check pricing details on dental implant cost in Bhubaneswar, or view overall specialized care at dental implants Bhubaneswar.",
        },
        { kind: "link", label: "Read about full mouth dental implants in Odisha", href: "/full-mouth-dental-implants/" },
        { kind: "link", label: "Check All-on-4 & All-on-6 cost in Bhubaneswar", href: "/dental-implant-cost-bhubaneswar/" },
        { kind: "link", label: "Explore dental implants in Bhubaneswar", href: "/dental-implants-bhubaneswar/" },
      ],
    },
    {
      title: "Step-by-Step All-on-4 / All-on-6 Procedure Protocol",
      blocks: [
        {
          kind: "process",
          steps: [
            { title: "Consultation & 3D CBCT planning", text: "Comprehensive diagnostic imaging, digital surgical planning, and transparent cost discussion." },
            { title: "Preparatory care & extractions", text: "Removal of failing teeth performed simultaneously during the surgical appointment." },
            { title: "Precision surgical placement", text: "4 or 6 implants positioned at engineered angles under local anaesthesia at CARE Hospital." },
            { title: "Provisional teeth attachment", text: "A temporary fixed bridge is attached when primary implant stability is achieved." },
            { title: "Healing & Osseointegration", text: "3 to 4 month healing phase while implants fuse tightly with jawbone." },
            { title: "Final Zirconia / PMMA bridge fitting", text: "Definitive high-strength fixed full-arch teeth custom fitted and bite balanced." },
            { title: "Annual maintenance & hygiene care", text: "Regular professional cleaning beneath the bridge and routine implant checks." },
          ],
        },
      ],
    },
    {
      title: "Post-Surgical Healing, Diet & Hygiene Aftercare",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Mild facial swelling or minor bruising for 3–5 days, controlled with routine prescribed pain medication",
            "Soft food diet (khichdi, curd rice, soups, soft fish) recommended during initial surgical healing",
            "Water flosser (oral irrigator) and superfloss demonstrated by our hygiene team for daily bridge cleaning",
            "Routine maintenance appointments every 6 months to ensure long-term implant health",
            "Smoking cessation strongly advised to promote proper bone integration and tissue health",
          ],
        },
        {
          kind: "callout",
          title: "Long-Term Care Commitment",
          text: "Fixed full-arch implant bridges require daily water-flossing and routine professional checks to keep surrounding gums healthy.",
        },
      ],
    },
    {
      title: "Advantages of Fixed Full Arch Implant Restoration",
      blocks: [
        {
          kind: "cards",
          columns: 2,
          items: [
            { title: "Permanently fixed teeth", text: "Secured directly to implant posts—never slips, shifts, or needs denture paste." },
            { title: "Restores bite strength", text: "Allows you to eat your favorite Odia dishes and hard foods with confidence." },
            { title: "Hospital-based surgery", text: "Performed in sterile operation theatre conditions at CARE Hospital Chandrasekharpur." },
            { title: "Immediate aesthetic transformation", text: "Provisional teeth attached early give you a functional, attractive smile throughout healing." },
          ],
        },
      ],
    },
  ],
  costIntro:
    "All-on-4 and All-on-6 dental implant cost in Odisha depends on implant brand (e.g., Osstem, Nobel Biocare), custom bridge material (Zirconia or PMMA), and preoperative extraction or sinus lift needs. Clear, itemized estimates are shared after clinical assessment at CARE Hospital Bhubaneswar.",
  faqTitle: "All-on-4 & All-on-6 — Frequently Asked Questions",
  faqs: [
    faq(
      "All-on-4 dental implant ra cost kete Bhubaneswar Odisha re?",
      "All-on-4 dental implant cost depends on whether 4 or 6 implants are required per arch, the implant fixture brand, and final bridge materials (Hybrid Acrylic vs. Premium Zirconia). Visit our dental implant cost Bhubaneswar guide or schedule a CBCT assessment at CARE Hospital for transparent pricing.",
    ),
    faq(
      "All-on-4 o All-on-6 madhyare kouthi bhala option?",
      "Neither is universally superior. All-on-4 is designed for patients with reduced posterior bone using angled implants, whereas All-on-6 provides extra support when bone density and width are abundant. MDS specialists recommend the best option after analyzing your 3D CBCT scan.",
    ),
    faq(
      "Ame gote dine re fixed teeth paipari ki (Same day teeth)?",
      "When 3D CBCT planning shows high primary implant stability at placement, a provisional fixed bridge can often be attached on the same day or within 48 hours. If bone is soft, a temporary denture is used during healing to protect the implants.",
    ),
    faq(
      "Do I need bone grafting for All-on-4 implants?",
      "One major benefit of All-on-4 is that tilting the posterior implants often bypasses areas of bone loss, reducing the need for extensive bone grafting or sinus lifts.",
    ),
    faq(
      "Is All-on-4 surgery painful?",
      "The procedure is performed under local anaesthesia, ensuring complete numbness throughout surgery. Mild swelling or discomfort over the next few days is managed with prescribed medications.",
    ),
    faq(
      "How do I clean underneath fixed All-on-4 / All-on-6 teeth?",
      "Cleaning fixed full-arch teeth is straightforward using a water flosser (oral irrigator), superfloss, and interdental brushes. Our dental hygiene team demonstrates exact techniques during your fitting.",
    ),
    faq(
      "Can patients from other districts in Odisha travel to CARE Hospital Bhubaneswar for All-on-4?",
      "Yes. Patients from Cuttack, Puri, Berhampur, Sambalpur, Rourkela, and across Odisha regularly undergo full-arch treatment at CARE Hospital Chandrasekharpur. Initial online consultations can be scheduled to plan your visits.",
    ),
  ],
  ctaTitle: "Discuss Full-Arch Fixed Teeth with MDS Doctors",
  ctaCopy:
    "Schedule a consultation with our experienced MDS implant specialists at CARE Hospital Chandrasekharpur, Bhubaneswar to learn whether All-on-4 or All-on-6 fixed teeth suit your jaw and budget.",
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
