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
const TITLE = "Dental Implant Cost in Bhubaneswar | Pricing & Factors Guide";
const DESCRIPTION =
  "Understand dental implant cost in Bhubaneswar, including pricing factors for single tooth, multiple teeth, full mouth and All-on-4 implants at CARE Hospital.";
const H1 = "Dental Implant Cost in Bhubaneswar";
const REVIEWED_ON = "2 September 2026";

const QUICK_ANSWER =
  "Dental implant cost in Bhubaneswar depends on individual clinical requirements, such as the number of missing teeth, implant system chosen, final crown or prosthesis material, available jawbone density, and whether preparatory procedures like bone grafting or sinus lifting are necessary. At CARE Hospital in Chandrasekharpur, Bhubaneswar, a comprehensive clinical evaluation and 3D CBCT scan are performed to provide an accurate, itemized treatment roadmap and fee outline tailored to your case.";

const FAQ_ITEMS: Faq[] = [
  {
    q: "How much does a dental implant cost in Bhubaneswar?",
    plain:
      "There is no fixed single price for a dental implant in Bhubaneswar. Total treatment cost depends on several factors: the number of implants placed, the specific implant system selected, the material of the final crown or bridge, available bone density, and whether additional treatments like bone grafting or sinus lifts are required. An exact cost outline is provided following clinical examination and 3D CBCT imaging at CARE Hospital.",
    a: (
      <p>
        There is no fixed single price for a dental implant in Bhubaneswar. Total treatment cost depends on
        several factors: the number of implants placed, the specific implant system selected, the material of
        the final crown or bridge, available bone density, and whether additional treatments like bone grafting or
        sinus lifts are required. An exact cost outline is provided following clinical examination and 3D CBCT
        imaging at {TREATMENT_LOCATION}.
      </p>
    ),
  },
  {
    q: "What is the single tooth implant cost in Bhubaneswar?",
    plain:
      "The single tooth implant cost in Bhubaneswar is determined by the three main components of treatment: the titanium implant fixture, the connecting abutment, and the custom crown (such as porcelain-fused-to-metal or zirconia). If a tooth extraction or site preservation graft is needed at the time of placement, those steps are also included in the individualized treatment plan.",
    a: (
      <p>
        The{" "}
        <a className="font-semibold text-primary underline" href="/single-tooth-dental-implant/">
          single tooth implant cost in Bhubaneswar
        </a>{" "}
        is determined by three main components: the titanium implant fixture, the connecting abutment, and the custom
        crown (such as PFM or monolithic zirconia). If a tooth extraction or site preservation graft is needed at the
        time of placement, those steps are also itemized in your individualized plan.
      </p>
    ),
  },
  {
    q: "What affects teeth implant cost in Bhubaneswar for multiple missing teeth?",
    plain:
      "When replacing multiple teeth in Bhubaneswar, cost varies depending on whether individual implants are placed for each missing tooth or an implant-supported bridge is used. An implant bridge allows 3 or 4 missing teeth to be supported by 2 strategically placed implants, which reduces total surgical and implant components while ensuring full function.",
    a: (
      <p>
        When replacing several missing teeth, the overall{" "}
        <a className="font-semibold text-primary underline" href="/multiple-dental-implants/">
          teeth implant cost in Bhubaneswar
        </a>{" "}
        depends on whether separate implants are placed for each gap or an implant-supported bridge is recommended. An
        implant bridge can replace 3 or 4 consecutive teeth using 2 implants, optimizing both surgical treatment and total
        cost.
      </p>
    ),
  },
  {
    q: "How is the All-on-4 cost in Bhubaneswar evaluated?",
    plain:
      "The All-on-4 cost in Bhubaneswar covers complete arch rehabilitation using four specially positioned implants to support a full-arch fixed prosthesis. Factors influencing the final price include digital 3D surgical guide planning, bone availability, the choice of provisional fixed bridge during healing, and the final permanent prosthesis material (such as titanium-reinforced acrylic or full zirconia).",
    a: (
      <p>
        The{" "}
        <a className="font-semibold text-primary underline" href="/all-on-4-all-on-6-odisha/">
          All-on-4 cost in Bhubaneswar
        </a>{" "}
        covers full-arch tooth replacement using 4 strategically angled implants. Key cost factors include digital
        3D surgical planning, whether immediate temporary fixed teeth are fitted, and the choice of final prosthesis
        material (such as high-impact acrylic or milled zirconia).
      </p>
    ),
  },
  {
    q: "What factors influence full mouth dental implant cost in Bhubaneswar?",
    plain:
      "Full mouth dental implant cost in Bhubaneswar is calculated based on whether one arch or both arches require replacement, the total number of implants needed (such as All-on-4, All-on-6, or multiple implant bridges), any required bone augmentation, and the type of final full-arch restoration selected.",
    a: (
      <p>
        The{" "}
        <a className="font-semibold text-primary underline" href="/full-mouth-dental-implants/">
          full mouth dental implant cost in Bhubaneswar
        </a>{" "}
        is determined by whether single or dual arches are treated, the number of implants required per arch, any
        necessary bone rebuilding, and the restorative option chosen (fixed bridge vs. removable implant-supported
        overdenture).
      </p>
    ),
  },
  {
    q: "Why does dental implant price in Bhubaneswar vary between patients?",
    plain:
      "Dental implant price in Bhubaneswar varies because no two patient jaw structures or oral health conditions are identical. Variations in bone volume, sinus position, gum health, choice of implant brand/system, and aesthetic crown materials mean each treatment plan is custom-designed after clinical assessment.",
    a: (
      <p>
        The overall dental implant price in Bhubaneswar varies because anatomical conditions differ between patients.
        Factors such as jawbone height and width, sinus proximity, gum condition, implant system selection, and crown
        aesthetics require customized planning after a physical examination.
      </p>
    ),
  },
  {
    q: "Where is clinical examination and implant treatment conducted in Bhubaneswar?",
    plain:
      "All clinical examinations, 3D CBCT diagnostic scans, implant surgery, and restorative fit appointments take place at CARE Hospital in Chandrasekharpur, Bhubaneswar.",
    a: (
      <p>
        All clinical assessments, diagnostic imaging, implant surgical procedures, and prosthetic fittings take place at{" "}
        {TREATMENT_LOCATION}. Patients can also begin with a remote preliminary discussion before their hospital visit.
      </p>
    ),
  },
];

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
    text: "If teeth have been missing for a long time, jawbone height or width may be reduced. Additional restorative steps like bone grafting or a sinus lift ensure a solid foundation when needed.",
  },
  {
    icon: Stethoscope,
    title: "Diagnostic Imaging & Hospital Standard Safety",
    text: "Treatment at CARE Hospital, Chandrasekharpur involves 3D CBCT scans, digital surgical planning, sterile hospital operating standards, and experienced maxillofacial surgical care.",
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
    text: "In-house 3D CBCT imaging at CARE Hospital evaluates your jawbone density, nerve pathways, and sinus anatomy.",
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
    text: "The implant integrates securely with your jawbone over a planned healing period, supported by local follow-up visits.",
  },
  {
    title: "6. Final Crown or Prosthesis Fitting",
    text: "Your permanent custom crown, bridge, or full-arch restoration is precision-fitted for natural comfort and function.",
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
          copy="Learn what influences dental implant cost in Bhubaneswar, from single tooth implants to full mouth and All-on-4 procedures at CARE Hospital."
          primaryCta={{ label: "Request a Preliminary Roadmap", href: "/#contact" }}
          secondaryCta={{ label: "Talk to the Team", href: WHATSAPP_URL, external: true }}
          trustLine="In-person clinical assessment • 3D CBCT imaging • CARE Hospital, Chandrasekharpur, Bhubaneswar"
          image={heroClinic}
          imageAlt="Dental implant consultation and diagnostic planning in Bhubaneswar at CARE Hospital"
        />

        <Section>
          <QuickAnswerBox question="How much does a dental implant cost in Bhubaneswar?" answer={QUICK_ANSWER} />
        </Section>

        <Section>
          <SectionHeading
            title="What Influences Dental Implant Cost in Bhubaneswar?"
            intro="Dental implant treatment in Bhubaneswar is not a off-the-shelf product with a single flat rate. Your final cost reflects the specific surgical, diagnostic, and restorative steps required for your oral health."
          />
          <CostFactorGrid items={BHUBANESWAR_COST_FACTORS} />
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Single Tooth, Multiple & Full Arch Cost Breakdown in Bhubaneswar"
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
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="Single Tooth Implant Cost Factors in Bhubaneswar"
            intro="Understanding what goes into replacing a single missing tooth with an implant."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              When evaluating the <strong>single tooth implant cost Bhubaneswar</strong> patients should know that
              treatment involves three distinct hardware components: the titanium implant fixture placed into the jawbone,
              the connecting abutment, and the custom dental crown.
            </p>
            <p>
              The choice of crown material plays an important role in the overall cost. High-translucency monolithic
              zirconia crowns provide superior aesthetic appearance and fracture resistance for front or back teeth, while
              traditional porcelain-fused-to-metal (PFM) crowns offer a reliable alternative.
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
              Using an implant-supported bridge, two strategically positioned implants can securely support a 3-unit or 4-unit
              dental bridge. This approach restores complete chewing function and natural smile aesthetics while reducing total
              surgical components and treatment cost compared to placing three or four individual implants.
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
              <strong>All-on-4 cost Bhubaneswar</strong> standard. The All-on-4 treatment protocol utilizes four specially
              placed implants—two straight front implants and two posterior implants tilted at up to 45 degrees—to maximize contact
              with available natural bone.
            </p>
            <p>
              This tilting technique frequently eliminates the need for complex bone grafting, helping control overall treatment
              time and cost. Key factors influencing All-on-4 and All-on-6 pricing include computer-guided 3D surgical planning,
              whether a fixed temporary bridge is attached on the day of surgery, and the final material selected for the
              permanent full-arch bridge (such as titanium-acrylic hybrid or milled zirconia).
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
              The <strong>full mouth dental implant cost Bhubaneswar</strong> evaluation covers comprehensive restoration for
              patients who have lost most or all of their teeth. Full-mouth rehabilitation can be approached through fixed full-arch
              implant bridges or implant-retained removable overdentures.
            </p>
            <p>
              Factors determining final cost include whether both jaws are treated simultaneously, the total number of implants
              required per arch (typically 4 to 8 per jaw), whether bone augmentation is necessary, and the stage of healing
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
              your treatment plan so you only pay for the specific care your case requires. Read more about{" "}
              <a className="font-semibold text-primary underline" href="/bone-grafting-for-dental-implants/">
                bone grafting for dental implants
              </a>
              .
            </p>
          </div>
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="What Is Included vs. What May Be Additional in an Estimate"
            intro="Transparency in treatment estimates is essential so patients in Bhubaneswar know exactly what their quote covers."
          />
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="card-premium p-6 sm:p-8">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                <h3 className="text-xl font-bold text-foreground">Typically Included in Standard Estimate</h3>
              </div>
              <div className="mt-4">
                <Checklist items={INCLUSIONS_BHUBANESWAR} />
              </div>
            </div>

            <div className="card-premium p-6 sm:p-8">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <FileText className="h-6 w-6 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                <h3 className="text-xl font-bold text-foreground">Itemized Separately (When Required)</h3>
              </div>
              <div className="mt-4">
                <Checklist items={EXCLUSIONS_BHUBANESWAR} />
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="Consultation & Treatment Process in Bhubaneswar"
            intro="A structured clinical workflow at CARE Hospital, Chandrasekharpur ensures safety, precision, and predictable results for every patient."
          />
          <TreatmentProcess steps={BHUBANESWAR_PROCESS} />
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Comparing Regional & Bhubaneswar Implant Care"
            intro="Local convenience for Bhubaneswar residents and structured care for visiting patients."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              For patients residing in Bhubaneswar, having consultation, 3D imaging, surgical placement, and follow-up care at{" "}
              {TREATMENT_LOCATION} offers convenient local access throughout every stage of implant treatment.
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
            title="Get Your Custom Implant Roadmap in Bhubaneswar"
            copy="Every patient's dental condition is unique. Request a preliminary online consultation or visit CARE Hospital in Chandrasekharpur, Bhubaneswar for a thorough clinical examination."
            primary={{ label: "Request Preliminary Roadmap", href: "/#contact" }}
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
