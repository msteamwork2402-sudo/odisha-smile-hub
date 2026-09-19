import { createFileRoute } from "@tanstack/react-router";

import { ImplantPage, implantPageHead, faq, type ImplantPageConfig } from "@/components/implant/ImplantPage";
import { SITE } from "@/lib/implant-cluster";
import heroImage from "@/assets/dentist-consult.jpg";

const cfg: ImplantPageConfig = {
  key: "fullmouth",
  url: `${SITE}/full-mouth-dental-implants/`,
  title: "Full Mouth Dental Implants in Odisha | Trusted Rehabilitation & Price Guide",
  description:
    "Searching for full mouth dental implants in Odisha? Consult MDS specialists at CARE Hospital for trusted, affordable full arch rehabilitation & bhala doctor care.",
  h1: "Full Mouth Dental Implants in Odisha: Trusted Rehabilitation Care",
  eyebrow: "Full Mouth Rehabilitation & Fixed Teeth",
  heroCopy:
    "Jaw re sabu danta nahin ki severe tooth damage achhi? Full mouth dental implants in Odisha restore complete upper, lower, or dual-arch chewing function and natural smile aesthetics. At CARE Hospital Chandrasekharpur, Bhubaneswar, our experienced MDS prosthodontists and oral surgeons deliver trusted, affordable full mouth rehabilitation using fixed implant bridges or removable overdentures.",
  heroSecondaryCta: "Ask About Full-Mouth Options",
  heroImage,
  heroImageAlt: "MDS dental implant specialist explaining full mouth dental implant rehabilitation treatment plan to patient in Bhubaneswar",
  quickQuestion: "Full mouth dental implant ra cost o procedure kete dayie?",
  quickAnswer:
    "Full mouth dental implants replace all missing teeth in a jaw using fixed implant bridges (such as All-on-4 or All-on-6) or removable overdentures supported by 4 to 8 implant posts. Treatment involves 3D CBCT imaging, surgical placement, and staged restoration. Contact CARE Hospital Bhubaneswar for transparent cost estimates and expert MDS doctor consultation.",
  sections: [
    {
      title: "Who Requires Full Mouth Dental Implants?",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Most or all teeth missing in the upper jaw, lower jaw, or both arches",
            "Remaining teeth severely affected by advanced periodontitis (gum disease) or decay",
            "Long-standing denture wearers experiencing loose fit, discomfort, or difficulty chewing",
            "Severe tooth wear requiring a full-mouth bite reconstruction",
            "Patients seeking fixed, natural-looking replacement teeth supported by biocompatible titanium implants",
          ],
        },
      ],
    },
    {
      title: "Fixed Implant Bridge vs. Implant-Supported Overdenture",
      blocks: [
        {
          kind: "compare",
          caption: "Two broad full-mouth implant approaches",
          optionA: "Fixed implant bridge (All-on-4 / All-on-6)",
          optionB: "Implant-supported overdenture",
          rows: [
            { factor: "Removal", a: "Permanently fixed; removed only by the dentist", b: "Removable by the patient for daily cleaning" },
            { factor: "Implants required", a: "4 to 6 or 8 implants per arch", b: "Usually 2 to 4 implants per arch" },
            { factor: "Feel & function", a: "Closest to natural fixed teeth with strong bite force", b: "Secure snap-on fit; significant improvement over traditional dentures" },
            { factor: "Cleaning", a: "Brushed and flossed in place with specialized aids", b: "Cleaned out of the mouth after snapping off" },
            { factor: "Suitability", a: "Requires sufficient bone density & CBCT planning", b: "Ideal when bone volume is limited or for budget-conscious full arch restoration" },
          ],
          note: "Both approaches are reliable, evidence-based treatments. The optimal choice is decided with your MDS dentist after 3D CBCT assessment.",
        },
      ],
    },
    {
      title: "Comprehensive Diagnostics & 3D CBCT Planning",
      blocks: [
        {
          kind: "checklist",
          items: [
            "Full medical history review, including blood pressure, bone density, and diabetes control",
            "Comprehensive clinical examination of gums, soft tissue, and jaw alignment",
            "3D CBCT imaging of upper and lower jaws for precise bone mapping and nerve safety",
            "Facial support, smile line, and bite registration analysis",
            "Sequenced plan covering extractions, healing, surgical implant placement, and prosthetic design",
          ],
        },
        {
          kind: "prose",
          text: "Full-mouth rehabilitation is a carefully staged treatment. For patients seeking fixed full-arch options like All-on-4 or All-on-6, explore our dedicated All-on-4 & All-on-6 Odisha guide, compare pricing on our dental implant cost in Bhubaneswar page, or learn about overall care at dental implants Bhubaneswar.",
        },
        { kind: "link", label: "Explore All-on-4 & All-on-6 fixed teeth in Odisha", href: "/all-on-4-all-on-6-odisha/" },
        { kind: "link", label: "Check full mouth dental implant cost in Bhubaneswar", href: "/dental-implant-cost-bhubaneswar/" },
        { kind: "link", label: "Discover dental implants in Bhubaneswar", href: "/dental-implants-bhubaneswar/" },
      ],
    },
    {
      title: "Step-by-Step Full Mouth Dental Implant Stages",
      blocks: [
        {
          kind: "process",
          steps: [
            { title: "Consultation & 3D CBCT scan", text: "Detailed clinical evaluation, 3D bone volume mapping, and transparent cost discussion." },
            { title: "Preparatory treatment", text: "Extraction of non-restorable teeth, gum treatment, or bone grafting if necessary." },
            { title: "Surgical implant placement", text: "4 to 8 dental implants placed per arch under local anaesthesia in sterile OT at CARE Hospital." },
            { title: "Provisional teeth phase", text: "Temporary fixed or removable teeth provided so you are never without functional teeth." },
            { title: "Bone integration (Osseointegration)", text: "3 to 4 month healing phase for solid jawbone fusion with implant posts." },
            { title: "Final prosthetic fitting", text: "Custom zirconia or porcelain fixed bridge / snap-on overdenture precision fitted." },
            { title: "Ongoing maintenance", text: "Scheduled hygiene visits and annual implant reviews for long-term health." },
          ],
        },
        {
          kind: "timeline",
          steps: [
            "Consultation & 3D CBCT diagnostic planning",
            "Preparatory care & extractions if required",
            "Implant surgery under local anaesthesia",
            "Healing & provisional tooth wear",
            "Final high-aesthetic prosthesis fitted",
            "Long-term annual maintenance reviews",
          ],
        },
      ],
    },
    {
      title: "Recovery, Speech Adaptation & Maintenance",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Mild swelling and minor post-surgical discomfort for 3–5 days, managed with prescribed routine medication",
            "Dietary adjustment to soft foods during initial surgical healing",
            "Speech and mastication adapt naturally within a few days of wearing provisional teeth",
            "Daily oral hygiene guidance demonstrated by our clinical team",
            "Regular professional check-ups ensure healthy gum tissues surrounding implants",
          ],
        },
      ],
    },
    {
      title: "Benefits of Choosing Full Arch Dental Implants",
      blocks: [
        {
          kind: "cards",
          columns: 2,
          items: [
            { title: "Restored chewing power", text: "Implant-anchored teeth restore full bite strength, allowing you to enjoy all traditional Odia foods comfortably." },
            { title: "Natural facial aesthetics", text: "Prevents the sunken, aged facial appearance caused by long-term bone loss from missing teeth." },
            { title: "Hospital surgical safety", text: "Performed by MDS specialists in hospital-grade sterile operation theatres at CARE Hospital Chandrasekharpur." },
            { title: "Durable long-term solution", text: "High success rates when combined with daily oral hygiene and regular professional maintenance." },
          ],
        },
      ],
    },
  ],
  costIntro:
    "Full mouth dental implant cost in Odisha depends on whether treatment is fixed (All-on-4 / All-on-6 bridge) or removable (overdenture), the number of implants used per jaw, bone grafting requirements, and final bridge materials. Transparent, itemized estimates are provided following a clinical 3D CBCT evaluation at CARE Hospital Bhubaneswar.",
  faqTitle: "Full-Mouth Dental Implants — Frequently Asked Questions",
  faqs: [
    faq(
      "Full mouth dental implant ra cost kete in Bhubaneswar Odisha?",
      "Full mouth dental implant costs depend on whether you choose a fixed bridge (All-on-4/All-on-6) or a snap-on overdenture. Pricing varies by implant fixture count, brand (Osstem, Nobel Biocare, Straumann), and prosthetic material. Visit our dental implant cost Bhubaneswar guide or consult our MDS doctors at CARE Hospital for exact pricing.",
    ),
    faq(
      "Full mouth dental implant pain full ki? Healing baseline kna?",
      "Implant surgery is performed under local anaesthesia, so the procedure itself is pain-free. Mild post-operative swelling or soreness lasts 3 to 5 days and is effectively managed with prescribed medication.",
    ),
    faq(
      "Bhala full mouth dental implant doctor kibhabe bachibe?",
      "Look for qualified MDS prosthodontists and oral surgeons with hospital-grade facilities, 3D CBCT scan capabilities, and extensive experience in full arch rehabilitation. CARE Hospital Chandrasekharpur in Bhubaneswar provides complete advanced surgical infrastructure.",
    ),
    faq(
      "How many implants are needed for a full mouth restoration?",
      "Typically 4 to 6 implants per arch are required for a fixed bridge (All-on-4 or All-on-6), or 2 to 4 implants per arch for an implant-supported removable overdenture. The exact number is confirmed using a 3D CBCT scan.",
    ),
    faq(
      "Can all remaining damaged teeth be extracted and implants placed in the same stage?",
      "Yes, immediate placement after extraction is possible in suitable cases where jawbone density and stability are optimal. Your MDS doctor will evaluate this during your initial assessment.",
    ),
    faq(
      "Will full-mouth dental implants look and feel like natural teeth?",
      "Yes. Fixed implant bridges are custom handcrafted in shade and shape to closely mimic natural teeth and facial aesthetics while providing rock-solid chewing stability.",
    ),
    faq(
      "Can patients from other cities in Odisha (Cuttack, Berhampur, Sambalpur, Rourkela) get full mouth implants at CARE Hospital?",
      "Yes. We welcome patients across Odisha. Initial consultations can be arranged online, followed by structured appointments for 3D CBCT diagnostics and surgery at CARE Hospital Chandrasekharpur, Bhubaneswar.",
    ),
  ],
  ctaTitle: "Plan Your Full-Mouth Rehabilitation with MDS Specialists",
  ctaCopy:
    "Consult our expert MDS prosthodontists and oral surgeons at CARE Hospital Chandrasekharpur, Bhubaneswar to explore fixed and removable full-mouth implant options, 3D CBCT diagnostics, and transparent pricing.",
  related: ["allon", "multiple", "bone", "sinus", "maintenance", "cost"],
  disclaimerTopic: "full-mouth dental implant rehabilitation",
  procedureName: "Full-Mouth Dental Implant Rehabilitation",
  procedureHowPerformed:
    "Dental implants are placed in one or both jaws under local anaesthesia to support fixed or removable implant-supported replacement teeth following a staged healing and prosthetic process.",
};

export const Route = createFileRoute("/full-mouth-dental-implants")({
  staticData: { sitemap: true },
  head: implantPageHead(cfg),
  component: () => <ImplantPage cfg={cfg} />,
});
