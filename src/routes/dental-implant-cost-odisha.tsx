import { createFileRoute } from "@tanstack/react-router";
import {
  Layers,
  Wrench,
  Crown,
  Bone,
  Stethoscope,
  Smile,
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
import implantDetail from "@/assets/implant-detail.jpg";
import careHospital from "@/assets/care-hospital.png";

const URL = `${SITE}/dental-implant-cost-odisha/`;
const TITLE = "Dental Implant Cost in Odisha | 2026 Patient Guide";
const DESCRIPTION =
  "Understand dental implant cost in Odisha and Bhubaneswar, including factors affecting single tooth, full mouth and All-on-4 treatment costs.";
const H1 = "Dental Implant Cost in Odisha: 2026 Patient Guide";
const REVIEWED_ON = "2 September 2026";

const QUICK_ANSWER =
  "Dental implant cost in Odisha varies from patient to patient. The final cost depends on the number of implants required, implant system, type of crown or full-arch restoration, available bone, and whether procedures such as bone grafting or sinus lifting are needed. A dental implant consultation, clinical examination and appropriate diagnostic evaluation are required to confirm the treatment plan and exact cost.";

const FAQ_ITEMS: Faq[] = [
  {
    q: "How much does a dental implant cost in Odisha?",
    plain:
      "There is no single price. Cost depends on the treatment plan — how many implants are placed, the implant system used, the crown or prosthesis chosen, your bone condition, and whether additional procedures are required. An exact figure can only be given after clinical examination and diagnostic assessment.",
    a: (
      <p>
        There is no single price. Cost depends on the treatment plan — how many implants are placed, the
        implant system used, the crown or prosthesis chosen, your bone condition, and whether additional
        procedures are required. An exact figure can only be given after clinical examination and
        diagnostic assessment.
      </p>
    ),
  },
  {
    q: "What is the cost of a single tooth implant in Odisha?",
    plain:
      "A single-tooth implant is not one item — it involves the implant fixture, an abutment and a crown, plus planning and follow-up. The cost therefore depends on the implant system, the restoration selected and your individual clinical requirements.",
    a: (
      <p>
        A single-tooth implant is not one item — it involves the implant fixture, an abutment and a crown,
        plus planning and follow-up appointments. The cost therefore depends on the implant system, the
        restoration selected and your individual clinical requirements. Read more about{" "}
        <a className="font-semibold text-primary underline" href="/single-tooth-dental-implant/">
          single-tooth dental implant treatment
        </a>
        .
      </p>
    ),
  },
  {
    q: "Is dental implant treatment available for patients from Cuttack or other Odisha cities?",
    plain:
      "Patients from anywhere in Odisha can contact the team for an initial discussion and treatment planning. Physical examination and implant treatment take place at CARE Hospital, Bhubaneswar.",
    a: (
      <p>
        Yes — patients from anywhere in Odisha can contact the team for an initial discussion and treatment
        planning. Physical examination and implant treatment take place at {TREATMENT_LOCATION}, and the
        treatment location is confirmed with you before any appointment is scheduled.
      </p>
    ),
  },
];

export const Route = createFileRoute("/dental-implant-cost-odisha")({
  staticData: { sitemap: true },
  component: CostPage,
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
                { "@type": "ListItem", position: 3, name: "Dental Implant Cost in Odisha", item: URL },
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
                  "A titanium implant is placed in the jaw bone after clinical and diagnostic assessment, followed by healing and a prosthetic restoration.",
              },
              provider: {
                "@type": "MedicalBusiness",
                name: "OdishaDentalImplants.com",
                url: SITE,
                medicalSpecialty: "Dentistry",
                areaServed: ODISHA_SERVICE_CITIES.map(city => ({
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

const COST_FACTORS = [
  {
    icon: Layers,
    title: "Number of implants",
    text: "Replacing one tooth is clinically different from replacing several teeth or a complete arch. Each additional implant adds surgical and prosthetic steps.",
  },
  {
    icon: Wrench,
    title: "Implant system",
    text: "Implant systems differ in design, surface technology, materials, documented clinical indications and pricing. The system chosen is a clinical decision, not only a cost decision.",
  },
  {
    icon: Crown,
    title: "Crown or prosthesis",
    text: "The final restoration — a single crown, a bridge or a full-arch prosthesis — and the material used both influence the overall treatment cost.",
  },
  {
    icon: Bone,
    title: "Bone condition",
    text: "Where bone volume or density is insufficient, additional procedures may be needed before or during implant placement, which changes the plan and the cost.",
  },
  {
    icon: Stethoscope,
    title: "Additional procedures",
    text: "Some plans include further clinically necessary steps.",
    points: [
      "Bone grafting",
      "Sinus lift",
      "Tooth extraction",
      "Temporary restoration",
      "Other clinically necessary procedures",
    ],
  },
  {
    icon: Smile,
    title: "Type of treatment",
    text: "Single-tooth implants, multiple implants, full-mouth rehabilitation, All-on-4 and All-on-6 have different surgical and prosthetic requirements — and therefore different costs.",
  },
];

const TABLE_ROWS = [
  {
    treatment: "Single-tooth dental implant",
    complexity: "Usually straightforward",
    factors: "Implant system, abutment, crown material, need for extraction or grafting",
  },
  {
    treatment: "Multiple dental implants",
    complexity: "Moderate",
    factors: "Number and position of implants, bridge design, span, bone condition",
  },
  {
    treatment: "Full-mouth dental implants",
    complexity: "High",
    factors: "Number of implants per arch, prosthetic approach, bone condition, staged treatment",
  },
  {
    treatment: "All-on-4",
    complexity: "High — full-arch protocol",
    factors: "Four angled implants per arch, provisional teeth, final prosthesis, surgical planning",
  },
  {
    treatment: "All-on-6",
    complexity: "High — full-arch protocol",
    factors: "Six implants per arch, load distribution, prosthesis type, bone availability",
  },
  {
    treatment: "Bone grafting with implant treatment",
    complexity: "Adds a surgical stage",
    factors: "Graft volume and material, healing period, staged or simultaneous placement",
  },
  {
    treatment: "Sinus lift with implant treatment",
    complexity: "Adds a surgical stage",
    factors: "Lift technique, graft material, residual bone height, healing period",
  },
];

const INCLUSIONS = [
  "Initial consultation",
  "Clinical examination",
  "Diagnostic imaging where required",
  "Implant planning",
  "Implant placement",
  "Healing and follow-up appointments",
  "Abutment",
  "Crown or prosthetic restoration",
  "Temporary restoration where required",
  "Follow-up care",
];

const PROCESS = [
  { title: "Consultation", text: "You discuss your dental concerns, history and treatment goals with the team." },
  { title: "Clinical assessment", text: "The dental team evaluates your oral health, gums and suitability for implant treatment." },
  { title: "Diagnostic planning", text: "Appropriate imaging and planning are performed where clinically required." },
  { title: "Implant placement", text: "The implant is surgically placed according to the agreed treatment plan." },
  { title: "Healing and restoration", text: "After appropriate healing, the final restoration is planned and provided according to the case." },
  { title: "Follow-up", text: "Ongoing review and maintenance support long-term implant health." },
];

const RELATED = [
  { title: "Single Tooth Dental Implant", href: "/single-tooth-dental-implant/", text: "Replacing one missing tooth with an implant and crown." },
  { title: "Multiple Dental Implants", href: "/multiple-dental-implants/", text: "Implant-supported solutions for several missing teeth." },
  { title: "Full Mouth Dental Implants", href: "/full-mouth-dental-implants/", text: "Planning full-mouth rehabilitation for extensive tooth loss." },
  { title: "All-on-4 / All-on-6", href: "/all-on-4-all-on-6-odisha/", text: "Full-arch fixed teeth protocols and what they involve." },
  { title: "Bone Grafting for Dental Implants", href: "/bone-grafting-for-dental-implants/", text: "When additional bone may be needed before or during implant placement." },
];

function CostPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Dental Implants", href: "/#services" },
          { label: "Dental Implant Cost in Odisha" },
        ]}
      />
      <main className="pb-24 lg:pb-0">
        <ImplantHero
          eyebrow="Cost Guide 2026"
          title={H1}
          copy="Understand what influences dental implant cost in Bhubaneswar and across Odisha, from a single tooth implant to full-mouth and All-on-4 treatment."
          primaryCta={{ label: "Request a Preliminary Roadmap", href: "/#contact" }}
          secondaryCta={{ label: "Talk to the Team", href: WHATSAPP_URL, external: true }}
          trustLine="Clinical assessment • Individual treatment planning • Treatment at CARE Hospital, Bhubaneswar"
          image={implantDetail}
          imageAlt="Close up of a dental implant model showing the fixture, abutment and crown"
        />

        <Section>
          <QuickAnswerBox question="How much does a dental implant cost in Odisha?" answer={QUICK_ANSWER} />
        </Section>

        <Section>
          <SectionHeading
            title="What Affects Dental Implant Cost in Bhubaneswar and Odisha?"
            intro="Dental implant cost is not determined by one component. It reflects the complete surgical and restorative plan recommended after assessment."
          />
          <CostFactorGrid items={COST_FACTORS} />
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Single Tooth, Full Mouth and All-on-4 Cost Factors"
            intro="Compare the factors that influence single tooth implant cost, full mouth implant cost and All-on-4 cost. Exact requirements are confirmed after diagnostic assessment."
          />
          <TreatmentComparisonTable
            caption="Comparison of dental implant treatment types and cost factors"
            rows={TABLE_ROWS}
            note="Complexity and factors are determined on a case-by-case basis."
          />
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Read the detailed guides to a{` `}
            <a className="font-semibold text-primary underline" href="/single-tooth-dental-implant/">
              single tooth dental implant
            </a>
            ,{` `}
            <a className="font-semibold text-primary underline" href="/full-mouth-dental-implants/">
              full mouth dental implants
            </a>
            , or{` `}
            <a className="font-semibold text-primary underline" href="/all-on-4-all-on-6-odisha/">
              All-on-4 and All-on-6 treatment
            </a>
            .
          </p>
        </Section>

        <Section>
          <SectionHeading
            title="What Is Included in a Dental Implant Treatment Plan?"
            intro="A comprehensive plan identifies the necessary stages from the dental implant consultation to the final restoration. Confirm which items are included in your written estimate before treatment."
          />
          <Checklist items={INCLUSIONS} />
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="From Dental Implant Consultation to Final Cost"
            intro="The steps used to assess your needs, explain suitable options and confirm an individual treatment estimate."
          />
          <TreatmentProcess steps={PROCESS} />
        </Section>

        <Section>
          <SectionHeading
            title="Dental Implant Consultation and Treatment in Bhubaneswar"
            intro="We welcome patients from across Odisha. The pathway is designed to be efficient, requiring travel only for essential clinical steps."
          />
          <p className="mt-6 text-sm text-muted-foreground">
            {LOCATION_TRUTH.consultation} {LOCATION_TRUTH.treatment}
          </p>
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
          <SectionHeading title="Dental Implant Cost in Odisha: Frequently Asked Questions" />
          <FAQSection faqs={FAQ_ITEMS} />
        </Section>

        <Section>
          <ImplantCTA
            title="Discuss Your Implant Treatment Plan"
            copy="Every patient's needs are different. Start with a free online consultation to receive a preliminary roadmap for your specific case."
            primary={{ label: "Book Free Online Consultation", href: "/#contact" }}
            secondary={{ label: "WhatsApp the Team", href: WHATSAPP_URL, external: true }}
            footnote="Suitability and final cost are confirmed only after clinical examination."
          />
        </Section>

        <Section tone="soft">
          <SectionHeading title="Explore Detailed Service Guides" />
          <RelatedServices items={RELATED} />
        </Section>
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
