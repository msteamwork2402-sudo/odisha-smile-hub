import { createFileRoute } from "@tanstack/react-router";
import {
  Layers,
  Wrench,
  Crown,
  Bone,
  Stethoscope,
  Smile,
  ShieldCheck,
  Building2,
  FileText,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import {
  Breadcrumbs,
  Checklist,
  ClinicalReviewer,
  CostFactorGrid,
  FAQSection,
  ImplantCTA,
  ImplantHero,
  LocationTrustBlock,
  QuickAnswerBox,
  RelatedServices,
  Section,
  SectionHeading,
  TreatmentComparisonTable,
  TreatmentProcess,
  type Faq,
} from "@/components/implant/blocks";
import { CONSULTATION_HOURS, PHONE_DISPLAY, PHONE_TEL, TREATMENT_ADDRESS, TREATMENT_LOCATION, WHATSAPP_URL } from "@/lib/site";
import { CARE_HOSPITAL_URL, SITE, REVIEWER, ODISHA_SERVICE_CITIES, LOCATION_TRUTH } from "@/lib/implant-cluster";
import heroClinic from "@/assets/hero-clinic.jpg";
import careHospital from "@/assets/care-hospital.png";

const URL = `${SITE}/dental-implant-cost-bhubaneswar/`;
const TITLE = "Dental Implant Cost in Bhubaneswar | Price Guide";
const DESCRIPTION =
  "Compare dental implant cost in Bhubaneswar: single tooth, full mouth and All-on-4 price factors. Plan a consultation at CARE Hospital for an individual estimate.";
const H1 = "Dental Implant Cost in Bhubaneswar";
const REVIEWED_ON = "2 September 2026";

const QUICK_ANSWER =
  "Dental implant cost in Bhubaneswar depends on the implant, abutment and crown or bridge, the number of teeth being replaced, and any extractions or bone grafting needed. This page explains dental implant price factors; it does not publish a fixed fee or clinic-approved price range. For treatment at CARE Hospital, Chandrasekharpur, a final estimate follows clinical examination and any necessary diagnostic imaging. When comparing quotes, ask whether the restoration, scans, temporary teeth and follow-up visits are included—not just the implant fixture.";

const FAQ_ITEMS: Faq[] = [
  {
    q: "Dental implant ra cost kete? How much does an implant cost in Bhubaneswar?",
    plain: "The total cost depends on how many teeth need replacing, the implant components, the crown or bridge, and any additional procedures. No fixed price or clinic-approved range is published on this page. Request an individual estimate after examination and any necessary imaging at CARE Hospital, Bhubaneswar.",
  },
  {
    q: "How can I compare affordable dental implants in Bhubaneswar?",
    plain: "Compare written estimates for the same treatment, not just the advertised starting price. Check whether the implant, abutment, final crown, scans, temporary teeth and follow-up are included. Discuss your budget and clinically suitable alternatives with the implant team. A lower price alone does not establish quality or suitability.",
  },
  {
    q: "Does the dental implant price include the crown?",
    plain: "An advertised implant price may refer only to the fixture placed in the jaw. Ask whether it also includes the abutment, final crown or bridge, diagnostic imaging and review appointments. Confirm inclusions in your written estimate before agreeing to treatment.",
  },
  {
    q: "What affects single tooth implant cost in Bhubaneswar?",
    plain: "A single tooth replacement usually involves an implant fixture, an abutment and a crown. Crown material, clinical complexity and any extraction or grafting can change the total. Ask for these components to be listed separately in your estimate.",
  },
  {
    q: "Is replacing several teeth priced per tooth or per implant?",
    plain: "The number of missing teeth is not always the number of implants needed. Some patients can have several consecutive teeth replaced with an implant-supported bridge. The quote should state the implant count and the type and number of replacement teeth; suitability depends on bone support and bite forces.",
  },
  {
    q: "Is an All-on-4 quote for one jaw or the full mouth?",
    plain: "All-on-4 describes a full-arch restoration supported by four implants. A quote for one arch does not automatically include both jaws. Confirm which jaw is covered, whether temporary and final teeth are included, and whether extractions or grafting are charged separately.",
  },
  {
    q: "What influences full mouth dental implant cost in Bhubaneswar?",
    plain: "The total depends on whether one or both jaws need treatment, the number of implants, the final fixed or removable restoration, and any preparatory procedures. Ask for the upper and lower jaw costs and each treatment stage to be identified clearly.",
  },
  {
    q: "Can an online consultation confirm my final dental implant cost?",
    plain: "An online consultation can discuss your concerns, existing reports and preliminary options. It cannot replace an examination or any necessary imaging. The final treatment plan and estimate are confirmed after clinical assessment in Bhubaneswar.",
  },
  {
    q: "Are scans, bone grafting and follow-up charged separately?",
    plain: "Inclusions vary between estimates. Ask whether scans, extractions, grafting, temporary restorations, medicines, review visits and maintenance are included or separate. Additional procedures are considered only when clinically indicated; confirm their fees before treatment.",
  },
].map((item) => ({ ...item, a: <p>{item.plain}</p> }));

export const Route = createFileRoute("/dental-implant-cost-bhubaneswar")({
  staticData: { sitemap: true },
  component: CostBhubaneswarPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                { "@type": "ListItem", position: 2, name: "Dental Implants", item: `${SITE}/#services` },
                { "@type": "ListItem", position: 3, name: "Dental Implant Cost in Bhubaneswar", item: URL },
              ],
            },
            {
              "@type": "MedicalWebPage",
              name: TITLE,
              description: DESCRIPTION,
              url: URL,
              inLanguage: "en-IN",
              lastReviewed: REVIEWER.reviewedOnISO,
              reviewedBy: {
                "@type": "Physician",
                name: REVIEWER.name,
                jobTitle: REVIEWER.role,
                medicalSpecialty: "Maxillofacial Surgery",
                url: REVIEWER.profileUrl,
              },
              about: {
                "@type": "MedicalProcedure",
                name: "Dental implant treatment",
                procedureType: "https://schema.org/SurgicalProcedure",
                bodyLocation: "Jaw",
                howPerformed:
                  "Comprehensive dental implant placement and restoration performed following clinical evaluation and 3D CBCT diagnostic planning at CARE Hospital, Bhubaneswar.",
              },
              provider: {
                "@type": "MedicalBusiness",
                name: "OdishaDentalImplants.com",
                url: SITE,
                medicalSpecialty: "Dentistry",
                areaServed: ODISHA_SERVICE_CITIES.map((city) => ({
                  "@type": "City",
                  name: city,
                })),
                telephone: PHONE_TEL,
                sameAs: [CARE_HOSPITAL_URL],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: `CARE Hospital, ${TREATMENT_ADDRESS}`,
                  addressLocality: "Bhubaneswar",
                  addressRegion: "Odisha",
                  postalCode: "751016",
                  addressCountry: "IN",
                },
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.plain },
              })),
            },
          ],
        }),
      },
    ],
  }),
});

const BHUBANESWAR_COST_FACTORS = [
  {
    icon: Layers,
    title: "Number & Placement of Implants",
    text: "Whether replacing one tooth, several missing teeth, or an entire upper or lower arch, the number of titanium implant fixtures placed directly influences total surgical requirements and overall cost in Bhubaneswar.",
  },
  {
    icon: Wrench,
    title: "Implant System & Component Quality",
    text: "Internationally recognized implant systems vary in titanium grade, surface micro-texturing, bone-integration research, and prosthetic component design. The ideal system is selected based on clinical suitability.",
  },
  {
    icon: Crown,
    title: "Crown & Prosthetic Restoration Material",
    text: "The final visible tooth or full-arch bridge can be crafted from porcelain-fused-to-metal (PFM), high-strength monolithic zirconia, or titanium-reinforced composite, each carrying distinct aesthetic and cost characteristics.",
  },
  {
    icon: Bone,
    title: "Jawbone Density & Volume Requirements",
    text: "If bone height or width is insufficient, grafting or a sinus lift may be considered. These procedures can add cost and healing time and are assessed individually.",
  },
  {
    icon: Stethoscope,
    title: "Diagnostic Imaging & Hospital Standard Safety",
    text: "Examination, necessary imaging and surgical planning contribute to the estimate. Ask which diagnostic and hospital charges are included for treatment in Bhubaneswar.",
  },
  {
    icon: Smile,
    title: "Treatment Technique & Complexity",
    text: "Single tooth implants, multiple tooth bridges, immediate post-extraction placement, and full-arch All-on-4 or All-on-6 protocols involve varying surgical steps and laboratory fabrication stages.",
  },
];

const BHUBANESWAR_TABLE_ROWS = [
  {
    treatment: "Single Tooth Dental Implant",
    complexity: "Direct / Single Site",
    factors: "1 implant fixture, custom abutment, crown (PFM or Zirconia), optional site preservation",
  },
  {
    treatment: "Multiple Dental Implants",
    complexity: "Moderate / Multi-Site",
    factors: "2 or more implants supporting a multi-unit bridge, position in jaw, bone condition",
  },
  {
    treatment: "All-on-4 Full Arch",
    complexity: "High / Full-Arch Protocol",
    factors: "4 strategically angled implants per arch, 3D surgical guide, provisional & final fixed bridge",
  },
  {
    treatment: "All-on-6 Full Arch",
    complexity: "High / Extended Support",
    factors: "6 implants per arch for enhanced load distribution, final zirconia or acrylic prosthesis",
  },
  {
    treatment: "Full Mouth Dental Implants",
    complexity: "Comprehensive / Dual Arch",
    factors: "Upper and lower arch rehabilitation, choice between fixed bridges or implant-retained dentures",
  },
  {
    treatment: "Bone Grafting (Additional)",
    complexity: "Preparatory Surgical Step",
    factors: "Bone graft volume, synthetic or xenograft material, socket preservation or ridge augmentation",
  },
  {
    treatment: "Sinus Lift (Additional)",
    complexity: "Upper Jaw Surgical Step",
    factors: "Direct (lateral window) or indirect (crestal) sinus elevation to create upper posterior bone height",
  },
];

const INCLUSIONS_BHUBANESWAR = [
  "Initial specialist consultation & clinical assessment",
  "3D CBCT diagnostic imaging & digital treatment planning",
  "Surgical placement of titanium implant fixture(s)",
  "Healing abutment & secondary impression appointments",
  "Custom abutment & final crown / bridge restoration fitting",
  "Post-operative reviews & local follow-up care in Bhubaneswar",
];

const EXCLUSIONS_BHUBANESWAR = [
  "Complex tooth extractions (if required prior to placement)",
  "Bone grafting or socket preservation materials (when indicated)",
  "Sinus lift procedures for upper posterior bone deficiency",
  "Provisional temporary teeth during healing (if requested/indicated)",
  "Premium monolithic zirconia material upgrades",
];

const BHUBANESWAR_PROCESS = [
  {
    title: "1. Consultation & Clinical Examination",
    text: "Meet with our implant team in Bhubaneswar for a physical examination of your teeth, gums, and bite.",
  },
  {
    title: "2. 3D CBCT Scanning & Diagnostics",
    text: "When indicated, diagnostic imaging helps assess bone dimensions and the position of important anatomical structures. Confirm imaging arrangements and fees with the team.",
  },
  {
    title: "3. Itemized Treatment Plan & Fee Outline",
    text: "Receive a clear, transparent written estimate detailing your recommended implant options, stages, and exact costs.",
  },
  {
    title: "4. Precision Implant Placement",
    text: "Implant surgery is conducted under local anesthesia in sterile hospital surgical facilities in Chandrasekharpur.",
  },
  {
    title: "5. Healing & Osseointegration",
    text: "Healing is monitored before the final restoration. Timing and the number of review visits vary with your clinical findings.",
  },
  {
    title: "6. Final Crown or Prosthesis Fitting",
    text: "The final crown, bridge or full-arch restoration is fitted and checked. Confirm ongoing maintenance needs and related costs.",
  },
];

const RELATED_BHUBANESWAR = [
  {
    title: "Single Tooth Dental Implant",
    href: "/single-tooth-dental-implant/",
    text: "Detailed guide to replacing one missing tooth with an individual implant and crown.",
  },
  {
    title: "Multiple Dental Implants",
    href: "/multiple-dental-implants/",
    text: "Restoring several missing teeth with implant-supported bridges.",
  },
  {
    title: "All-on-4 & All-on-6 Implants",
    href: "/all-on-4-all-on-6-odisha/",
    text: "Fixed full-arch tooth replacement solutions and protocols.",
  },
  {
    title: "Full Mouth Dental Implants",
    href: "/full-mouth-dental-implants/",
    text: "Complete upper and lower jaw rehabilitation for extensive tooth loss.",
  },
  {
    title: "Bone Grafting for Dental Implants",
    href: "/bone-grafting-for-dental-implants/",
    text: "Understanding bone augmentation procedures when jawbone volume is reduced.",
  },
  {
    title: "Dental Implant Cost in Odisha",
    href: "/dental-implant-cost-odisha/",
    text: "Broader state-wide pricing guide for patients traveling across Odisha.",
  },
];

function CostBhubaneswarPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Dental Implants", href: "/#services" },
          { label: "Dental Implant Cost in Bhubaneswar" },
        ]}
      />
      <main className="pb-24 lg:pb-0">
        <ImplantHero
          eyebrow="Bhubaneswar Pricing & Treatment Guide 2026"
          title={H1}
          copy="Understanding dental implant cost in Bhubaneswar starts with knowing what your estimate covers. Compare single tooth, multiple-tooth and full-mouth treatment costs, including the implant, crown or bridge and any preparatory care. Treatment takes place at CARE Hospital, Chandrasekharpur; final fees depend on clinical assessment, not a one-price package."
          primaryCta={{ label: "Request a Cost Consultation", href: "/#contact" }}
          secondaryCta={{ label: "Talk to the Team", href: WHATSAPP_URL, external: true }}
          trustLine="In-person clinical assessment • 3D CBCT imaging • CARE Hospital, Chandrasekharpur, Bhubaneswar"
          image={heroClinic}
          imageAlt="Clinical treatment room illustrating the dental implant cost guide for Bhubaneswar"
        />

        <Section>
          <QuickAnswerBox question="How much does a dental implant cost in Bhubaneswar?" answer={QUICK_ANSWER} />
        </Section>

        <Section>
          <SectionHeading
            title="What Factors Determine Dental Implant Cost in Bhubaneswar?"
            intro="Dental implant treatment in Bhubaneswar is tailored to your individual clinical needs rather than sold as a one-size-fits-all package. Your final cost reflects the exact surgical, diagnostic, and restorative steps required."
          />
          <CostFactorGrid items={BHUBANESWAR_COST_FACTORS} />
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Single Tooth, Multiple & Full Arch Dental Implant Price Breakdown"
            intro="Different tooth replacement needs require different surgical protocols and prosthetic designs. Compare how treatment complexity and components affect the total dental implant price in Bhubaneswar."
          />
          <TreatmentComparisonTable
            caption="Comparison of dental implant procedures and pricing factors in Bhubaneswar"
            rows={BHUBANESWAR_TABLE_ROWS}
            note="Exact treatment requirements and fee estimates are confirmed following clinical evaluation."
          />
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>Explore specific guides:</span>
            <a className="font-semibold text-primary underline" href="/single-tooth-dental-implant/">
              Single Tooth Implant
            </a>
            <a className="font-semibold text-primary underline" href="/multiple-dental-implants/">
              Multiple Implants
            </a>
            <a className="font-semibold text-primary underline" href="/all-on-4-all-on-6-odisha/">
              All-on-4 / All-on-6
            </a>
            <a className="font-semibold text-primary underline" href="/full-mouth-dental-implants/">
              Full Mouth Implants
            </a>
            <a className="font-semibold text-primary underline" href="/dental-implants-bhubaneswar/">
              Consultation and treatment in Bhubaneswar
            </a>
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="Single Tooth Implant Cost Factors in Bhubaneswar"
            intro="Understanding what goes into replacing a single missing tooth with an implant."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              When evaluating the <strong>single tooth implant cost in Bhubaneswar</strong>, it helps to know that
              treatment involves three distinct hardware components: the titanium implant fixture placed into the jawbone,
              the connecting abutment, and the custom dental crown.
            </p>
            <p>
              Crown material affects the overall price. Zirconia and porcelain-fused-to-metal (PFM) crowns have different
              aesthetic and mechanical characteristics. The appropriate choice depends on tooth position, bite forces,
              available space and your clinical assessment—not price alone.
            </p>
            <p>
              Additionally, if the damaged tooth is still present and requires extraction, or if the socket needs
              preservation bone graft material at the time of removal, these clinical steps will be reflected in your initial
              estimate. Compared to a traditional dental bridge, a single tooth implant preserves adjacent healthy teeth without
              grinding them down. Learn more in our dedicated guide to{" "}
              <a className="font-semibold text-primary underline" href="/single-tooth-dental-implant/">
                single tooth dental implants
              </a>
              .
            </p>
          </div>
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Multiple Teeth Implant Cost in Bhubaneswar"
            intro="Cost-effective options when several consecutive or scattered teeth are missing."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              For patients seeking to replace two, three, or more missing teeth, calculating the overall{" "}
              <strong>teeth implant cost in Bhubaneswar</strong> does not always require placing an individual implant for every
              single missing tooth.
            </p>
            <p>
              An implant-supported bridge may replace several consecutive teeth with fewer implants than missing teeth.
              Whether this is suitable depends on the span, available bone and bite forces. Compare the cost of the complete
              bridge and its supporting implants rather than multiplying a single-tooth price by the number of gaps.
            </p>
            <p>
              Our specialists evaluate your jawbone structure and bite alignment during your examination to recommend whether
              individual implants or an implant bridge offers the best balance of longevity and value. Read more about{" "}
              <a className="font-semibold text-primary underline" href="/multiple-dental-implants/">
                multiple dental implants
              </a>
              .
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="All-on-4 & All-on-6 Cost Factors in Bhubaneswar"
            intro="Full-arch fixed tooth replacement for patients with extensive tooth loss or failing dentition."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Patients experiencing severe tooth loss in an entire upper or lower arch often enquire about the{" "}
              <strong>All-on-4 cost in Bhubaneswar</strong>. This approach uses four implants to support replacement teeth
              for one arch; All-on-6 uses six. Confirm whether the quoted price covers the upper jaw, lower jaw or both.
            </p>
            <p>
              Implant position and bone availability can affect whether grafting is required; graft-free treatment is not
              guaranteed. Ask whether your estimate includes planning, extractions, temporary teeth and the final bridge.
              Same-day temporary teeth are only considered when clinical conditions allow, and may have a separate cost.
            </p>
            <p>
              For a detailed overview of full-arch protocols, read our guide on{" "}
              <a className="font-semibold text-primary underline" href="/all-on-4-all-on-6-odisha/">
                All-on-4 and All-on-6 implants
              </a>
              .
            </p>
          </div>
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Full Mouth Dental Implant Cost Factors in Bhubaneswar"
            intro="Rehabilitating both upper and lower jaw arches for complete oral restoration."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              The <strong>full mouth dental implant cost in Bhubaneswar</strong> evaluation covers comprehensive restoration for
              patients who have lost most or all of their teeth. Full-mouth rehabilitation can be approached through fixed full-arch
              implant bridges or implant-retained removable overdentures.
            </p>
            <p>
              Factors determining final cost include whether both jaws are treated simultaneously, the total number of implants
              required per arch, whether bone augmentation is necessary, and the stage of healing
              required before fitting final permanent teeth.
            </p>
            <p>
              Learn more about complete full-arch rehabilitation options in our guide to{" "}
              <a className="font-semibold text-primary underline" href="/full-mouth-dental-implants/">
                full mouth dental implants
              </a>
              .
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="Bone Grafting & Sinus Lift as Possible Additional Procedures"
            intro="When jawbone volume needs enhancement prior to or during implant placement."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              When teeth have been missing for several months or years, natural bone resorption occurs. If the jawbone height or
              width is insufficient to anchor an implant securely, additional surgical preparation may be required.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:my-6">
              <div className="card-premium p-6">
                <div className="flex items-center gap-3">
                  <Bone className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-foreground">Bone Grafting</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Bone grafting adds specialized graft material to build bone volume in deficient areas. It can be performed
                  as a socket preservation step at extraction or alongside implant placement.
                </p>
              </div>
              <div className="card-premium p-6">
                <div className="flex items-center gap-3">
                  <Stethoscope className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-foreground">Sinus Elevation (Sinus Lift)</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  In the upper back jaw, proximity to the maxillary sinus may limit bone height. A sinus lift gently elevates
                  the sinus membrane and places bone graft material to create adequate height for stable upper implants.
                </p>
              </div>
            </div>
            <p>
              Because bone grafting and sinus lift procedures are not required for every patient, they are itemized separately in
              your treatment plan. Confirm whether the proposed estimate includes them before making a decision. Read more about{" "}
              <a className="font-semibold text-primary underline" href="/bone-grafting-for-dental-implants/">
                bone grafting for dental implants
              </a>
              .
            </p>
          </div>
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Does the Dental Implant Price Include the Crown and Follow-up?"
            intro="Use these checklists to discuss your quote. They are not a package promise: confirm every inclusion, additional fee and treatment stage in writing."
          />
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="card-premium p-6 sm:p-8">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                <h3 className="text-xl font-bold text-foreground">Components to Check in Your Estimate</h3>
              </div>
              <div className="mt-4">
                <Checklist items={INCLUSIONS_BHUBANESWAR} />
              </div>
            </div>

            <div className="card-premium p-6 sm:p-8">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <FileText className="h-6 w-6 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                <h3 className="text-xl font-bold text-foreground">Possible Additional Costs to Confirm</h3>
              </div>
              <div className="mt-4">
                <Checklist items={EXCLUSIONS_BHUBANESWAR} />
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="Comparing Affordable Dental Implants: Look Beyond the Starting Price"
            intro="Affordability is personal. Compare the complete treatment cost and clinically suitable alternatives rather than choosing by an advertised fixture price alone."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Ask for the implant, abutment, final crown or bridge, scans, temporary teeth and reviews to be identified
              in the estimate. Check which charges apply now and which arise at later stages. A lower initial figure
              may exclude the restoration or additional procedures; a higher figure is not proof of better outcomes.
            </p>
            <p>
              If the proposed treatment exceeds your budget, discuss whether a different restoration or an alternative
              tooth replacement is clinically appropriate. Our guide to{" "}
              <a className="font-semibold text-primary underline" href="/implants-vs-bridge-vs-denture/">
                implants, bridges and dentures
              </a>{" "}
              explains the trade-offs. Do not assume that payment plans, discounts or a particular implant brand are available;
              confirm these details directly with the coordinator.
            </p>
            <p>
              For an initial discussion, use the{" "}
              <a className="font-semibold text-primary underline" href="/#contact">dental implant consultation form</a>.
              Share how many teeth are missing and any existing reports. Online advice provides a preliminary roadmap;
              examination and necessary imaging in Bhubaneswar determine the final plan and fee.
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="How to Get an Individual Dental Implant Cost Estimate"
            intro="Begin with a consultation at CARE Hospital, Chandrasekharpur. The sequence and timing depend on your examination, diagnostic findings and recommended treatment."
          />
          <TreatmentProcess steps={BHUBANESWAR_PROCESS} />
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Plan Your Implant Consultation in Bhubaneswar"
            intro="Local convenience for Bhubaneswar residents and structured care for visiting patients from across Odisha."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              For patients residing in Bhubaneswar, having consultation, 3D imaging, surgical placement, and follow-up care at{" "}
              {TREATMENT_LOCATION} offers convenient local access throughout every stage of implant treatment.
            </p>
            <p>
              Looking for local neighborhood location details? Visit our primary hub page on{" "}
              <a className="font-semibold text-primary underline" href="/dental-implants-bhubaneswar/">
                Dental Implants in Bhubaneswar
              </a>{" "}
              or explore specific neighborhood guides including{" "}
              <a className="font-semibold text-primary underline" href="/dental-implants-chandrasekharpur/">
                Chandrasekharpur
              </a>
              ,{" "}
              <a className="font-semibold text-primary underline" href="/dental-implants-patia/">
                Patia
              </a>
              ,{" "}
              <a className="font-semibold text-primary underline" href="/dental-implants-nayapalli/">
                Nayapalli
              </a>
              , and{" "}
              <a className="font-semibold text-primary underline" href="/dental-implants-saheed-nagar/">
                Saheed Nagar
              </a>
              .
            </p>
            <p>
              If you are comparing state-wide treatment guidelines or planning travel from other parts of Odisha (such as
              Cuttack, Puri, Berhampur, or Sambalpur), please view our comprehensive guide to{" "}
              <a className="font-semibold text-primary underline" href="/dental-implant-cost-odisha/">
                dental implant cost in Odisha
              </a>
              , which explains travel coordination and preliminary online consultations.
            </p>
          </div>
          <div className="mt-8">
            <LocationTrustBlock
              hospital="CARE Hospital"
              location={TREATMENT_LOCATION}
              phoneDisplay={PHONE_DISPLAY}
              phoneTel={PHONE_TEL}
              hours={CONSULTATION_HOURS}
              image={careHospital}
              hospitalHref={CARE_HOSPITAL_URL}
            />
          </div>
        </Section>

        <Section>
          <ClinicalReviewer
            writtenBy={REVIEWER.writtenBy}
            reviewer={REVIEWER.name}
            reviewerRole={REVIEWER.role}
            reviewedOn={REVIEWED_ON}
            profileHref={REVIEWER.profileUrl}
          />
        </Section>

        <Section id="faqs" tone="soft">
          <SectionHeading title="Dental Implant Cost in Bhubaneswar: Frequently Asked Questions" />
          <FAQSection faqs={FAQ_ITEMS} />
        </Section>

        <Section>
          <ImplantCTA
            title="Discuss Your Dental Implant Cost in Bhubaneswar"
            copy="Every patient's dental condition is unique. Request a preliminary online consultation or visit CARE Hospital in Chandrasekharpur, Bhubaneswar for a thorough clinical examination."
            primary={{ label: "Request a Cost Consultation", href: "/#contact" }}
            secondary={{ label: "WhatsApp the Team", href: WHATSAPP_URL, external: true }}
            footnote="Exact treatment options and final fees are confirmed following clinical examination and 3D CBCT diagnostic evaluation."
          />
        </Section>

        <Section tone="soft">
          <SectionHeading title="Explore Detailed Dental Implant Guides" />
          <RelatedServices items={RELATED_BHUBANESWAR} />
        </Section>
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
