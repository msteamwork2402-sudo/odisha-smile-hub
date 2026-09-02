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
import { Reveal } from "@/components/site/Reveal";
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
  Timeline,
  TreatmentComparisonTable,
  TreatmentProcess,
  type Faq,
} from "@/components/implant/blocks";
import { PHONE_DISPLAY, PHONE_TEL, TREATMENT_LOCATION, WHATSAPP_URL } from "@/lib/site";
import implantDetail from "@/assets/implant-detail.jpg";
import careHospital from "@/assets/care-hospital.png.asset.json";

const SITE = "https://odishadentalimplants.com";
const URL = `${SITE}/dental-implant-cost-odisha/`;
const TITLE = "Dental Implant Cost in Odisha 2026 | Price & Treatment Guide";
const DESCRIPTION =
  "Learn about dental implant cost in Odisha in 2026, what affects the price, single-tooth and full-mouth implant costs, All-on-4/6 treatment, and what is included in an implant treatment plan.";
const H1 = "Dental Implant Cost in Odisha — 2026 Patient Guide";
const REVIEWED_ON = "2 September 2026";

const QUICK_ANSWER =
  "Dental implant cost in Odisha varies from patient to patient. The final treatment cost depends on the number of implants required, implant system, type of crown or full-arch restoration, available bone, and whether procedures such as bone grafting or sinus lifting are needed. A clinical examination and appropriate diagnostic evaluation are required to determine the treatment plan and exact cost.";

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
    q: "Is dental implant treatment expensive?",
    plain:
      "Implant treatment is a multi-stage surgical and prosthetic procedure, so it is usually compared with the complete treatment requirement rather than with the price of an implant alone. Assessment, planning, surgery, healing reviews and the final restoration all form part of the treatment.",
    a: (
      <p>
        Implant treatment is a multi-stage surgical and prosthetic procedure, so it is best assessed against
        the complete treatment requirement rather than an implant-only price. Assessment, planning, surgery,
        healing reviews and the final restoration all form part of the treatment, and different plans include
        different components.
      </p>
    ),
  },
  {
    q: "Does bone grafting increase dental implant cost?",
    plain:
      "If bone grafting is clinically required, it adds an additional procedure, materials and healing time, which can increase overall treatment cost. It is not required for every patient.",
    a: (
      <p>
        If bone grafting is clinically required, it adds an additional procedure, graft materials and healing
        time, which can increase the overall treatment cost. It is not required for every patient — the need
        is determined during assessment. See{" "}
        <a className="font-semibold text-primary underline" href="/bone-grafting-for-dental-implants/">
          bone grafting for dental implants
        </a>
        .
      </p>
    ),
  },
  {
    q: "Does a sinus lift increase dental implant cost?",
    plain:
      "Where sinus augmentation is required for upper-jaw implants, it is an additional surgical procedure with its own materials and healing period, so it can add to the overall cost.",
    a: (
      <p>
        Where sinus augmentation is required for upper-jaw implants, it is an additional surgical procedure
        with its own materials and healing period, so it can add to the overall cost. Learn more about{" "}
        <a className="font-semibold text-primary underline" href="/sinus-lift-dental-implants/">
          sinus lift procedures with dental implants
        </a>
        .
      </p>
    ),
  },
  {
    q: "How much do All-on-4 dental implants cost in Odisha?",
    plain:
      "All-on-4 is a full-arch treatment approach, not a single-tooth replacement, so its cost reflects the complete plan — implants, provisional teeth, the final prosthesis, bone condition and surgical requirements.",
    a: (
      <p>
        All-on-4 is a full-arch treatment approach, not a single-tooth replacement, so cost reflects the
        complete plan — the number and position of implants, provisional teeth, the final prosthesis, bone
        condition and surgical requirements. See{" "}
        <a className="font-semibold text-primary underline" href="/all-on-4-all-on-6-odisha/">
          All-on-4 and All-on-6 treatment in Odisha
        </a>
        .
      </p>
    ),
  },
  {
    q: "How much do full-mouth dental implants cost?",
    plain:
      "Full-mouth treatment varies significantly depending on how many implants are planned, the prosthetic approach, bone condition and any additional procedures, so it is quoted only after planning.",
    a: (
      <p>
        Full-mouth treatment varies significantly depending on how many implants are planned, the prosthetic
        approach, bone condition and any additional procedures — which is why it is quoted only after
        diagnostic planning. Read about{" "}
        <a className="font-semibold text-primary underline" href="/full-mouth-dental-implants/">
          full-mouth dental implants
        </a>
        .
      </p>
    ),
  },
  {
    q: "Can I get a dental implant immediately after tooth extraction?",
    plain:
      "Immediate implant placement is possible in selected cases, but suitability depends on infection, bone quality and the position of the tooth, and must be determined clinically.",
    a: (
      <p>
        Immediate placement is possible in selected cases, but suitability depends on infection, bone quality
        and the position of the tooth, and must be determined clinically. See{" "}
        <a className="font-semibold text-primary underline" href="/immediate-dental-implants/">
          immediate dental implants
        </a>
        .
      </p>
    ),
  },
  {
    q: "How long does dental implant treatment take?",
    plain:
      "Timelines vary according to your clinical condition, healing response, implant stability, any additional procedures and the restoration planned. Some cases are completed faster than others.",
    a: (
      <p>
        Timelines vary according to your clinical condition, healing response, implant stability, any
        additional procedures and the restoration planned. Your treatment plan will set out the expected
        stages for your case.
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
              lastReviewed: "2026-09-02",
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
                medicalSpecialty: "Dentistry",
                areaServed: "Odisha, India",
                telephone: PHONE_TEL,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "CARE Hospital",
                  addressLocality: "Bhubaneswar",
                  addressRegion: "Odisha",
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

const OPTION_CARDS = [
  {
    title: "Single tooth implant",
    text: "For patients missing one tooth, where neighbouring teeth are healthy and do not need to be prepared.",
    cta: "Learn About Single-Tooth Implants",
    href: "/single-tooth-dental-implant/",
  },
  {
    title: "Multiple dental implants",
    text: "For patients missing several teeth, where implants can support a bridge across a span.",
    cta: "Explore Multiple Dental Implants",
    href: "/multiple-dental-implants/",
  },
  {
    title: "Full-mouth / full-arch implants",
    text: "For patients requiring extensive tooth replacement in one or both jaws.",
    cta: "Explore Full-Mouth Implants",
    href: "/full-mouth-dental-implants/",
  },
];

const RELATED = [
  { title: "Single Tooth Dental Implant", href: "/single-tooth-dental-implant/", text: "Replacing one missing tooth with an implant and crown." },
  { title: "Multiple Dental Implants", href: "/multiple-dental-implants/", text: "Implant-supported solutions for several missing teeth." },
  { title: "All-on-4 / All-on-6", href: "/all-on-4-all-on-6-odisha/", text: "Full-arch fixed teeth protocols and what they involve." },
  { title: "Full-Mouth Dental Implants", href: "/full-mouth-dental-implants/", text: "Complete rehabilitation for extensive tooth loss." },
  { title: "Immediate Dental Implants", href: "/immediate-dental-implants/", text: "When placement at the time of extraction may be suitable." },
  { title: "Flapless Guided Implants", href: "/flapless-guided-dental-implants/", text: "Digitally guided placement techniques explained." },
  { title: "Bone Grafting", href: "/bone-grafting-for-dental-implants/", text: "Augmentation when bone volume is insufficient." },
  { title: "Sinus Lift", href: "/sinus-lift-dental-implants/", text: "Sinus augmentation for upper-jaw implant cases." },
  { title: "Dental Implant Second Opinion", href: "/dental-implant-second-opinion/", text: "Have an existing plan or quote reviewed." },
  { title: "Implant vs Bridge vs Denture", href: "/implants-vs-bridge-vs-denture/", text: "Comparing tooth replacement options." },
  { title: "Implant Maintenance & Failure", href: "/dental-implant-maintenance-failure/", text: "Long-term care and what can go wrong." },
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
          eyebrow="Dental implants in Odisha"
          title={H1}
          copy="Wondering how much dental implants cost in Odisha? The total cost depends on the number of implants, implant system, crown or prosthesis, bone condition, and whether additional procedures are required. Get a personalized assessment before deciding on treatment."
          primaryCta={{ label: "Book an Implant Consultation", href: "/#contact" }}
          secondaryCta={{ label: "Ask About Implant Cost", href: WHATSAPP_URL, external: true }}
          trustLine="Treatment planning • Specialist assessment • Transparent discussion of costs"
          image={implantDetail}
          imageAlt="Close-up of a dental implant model used during implant treatment planning"
        />

        <Section>
          <QuickAnswerBox question="How much do dental implants cost in Odisha?" answer={QUICK_ANSWER} />
        </Section>

        <Section id="cost-factors" tone="soft">
          <SectionHeading
            title="What Determines the Cost of Dental Implants in Odisha?"
            intro="Implant treatment is planned case by case. These are the factors that most often change what a treatment plan costs."
          />
          <CostFactorGrid items={COST_FACTORS} />
        </Section>

        <Section>
          <SectionHeading
            title="Dental Implant Treatment: What Affects the Cost?"
            intro="A comparison of treatment types and the clinical factors that drive their cost."
          />
          <TreatmentComparisonTable
            caption="Dental implant treatment types, complexity and the main factors that affect cost"
            rows={TABLE_ROWS}
            note="The information above explains the factors that influence treatment cost. An exact quotation should be provided only after clinical evaluation and treatment planning."
          />
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="What May Be Included in a Dental Implant Treatment Plan?"
            intro="Inclusions depend on your individual treatment plan. Not every plan includes every item below — always ask what is and is not covered in a quotation."
          />
          <Checklist items={INCLUSIONS} />
        </Section>

        <Section>
          <SectionHeading
            title="Can Bone Grafting or a Sinus Lift Increase Implant Cost?"
            intro="Yes — where either procedure is clinically indicated. Neither is required for every patient."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="card-premium p-6">
              <h3 className="text-base font-semibold text-foreground">Bone grafting</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Some patients may require additional bone augmentation when there is insufficient bone volume
                for the planned implant position. This adds a surgical stage, graft material and healing time.
              </p>
              <a className="mt-3 inline-block text-sm font-semibold text-primary underline" href="/bone-grafting-for-dental-implants/">
                Bone grafting for dental implants
              </a>
            </article>
            <article className="card-premium p-6">
              <h3 className="text-base font-semibold text-foreground">Sinus lift</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Some upper-jaw implant cases may require sinus augmentation, depending on the available bone
                height below the sinus and the treatment plan.
              </p>
              <a className="mt-3 inline-block text-sm font-semibold text-primary underline" href="/sinus-lift-dental-implants/">
                Sinus lift with dental implants
              </a>
            </article>
          </div>
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Dental Implant Options and Cost Considerations"
            intro="Different clinical situations call for different implant approaches."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {OPTION_CARDS.map((c, i) => (
              <Reveal key={c.href} delay={i * 60}>
                <article className="card-premium h-full p-6">
                  <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                  <a className="mt-4 inline-block text-sm font-semibold text-primary" href={c.href}>
                    {c.cta} →
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="How Much Do All-on-4 and All-on-6 Dental Implants Cost in Odisha?"
            intro="All-on-4 and All-on-6 are full-arch treatment approaches. They should not be compared directly with the cost of replacing a single tooth, because they replace an entire arch of teeth on a planned number of implants."
          />
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {[
              "Number and position of implants",
              "Full-arch prosthesis design and material",
              "Implant system selected",
              "Temporary or provisional teeth",
              "Final prosthesis",
              "Bone condition and distribution",
              "Additional procedures where required",
              "Diagnostic and surgical requirements",
            ].map((f) => (
              <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
          <a className="mt-6 inline-block text-sm font-semibold text-primary" href="/all-on-4-all-on-6-odisha/">
            Explore All-on-4 &amp; All-on-6 Treatment →
          </a>
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Choosing Dental Implants: Look Beyond the Price"
            intro="When comparing quotations, compare what is actually being offered."
          />
          <Checklist
            items={[
              "Implant system used and its clinical documentation",
              "Clinician experience and qualifications",
              "Depth of treatment planning",
              "Diagnostic evaluation performed",
              "Quality and material of the final restoration",
              "Sterilization and clinical standards",
              "Follow-up care arrangements",
              "Transparency about what is included",
              "Long-term maintenance and review",
            ]}
          />
        </Section>

        <Section>
          <SectionHeading
            title="Think About the Complete Treatment, Not Just the Implant Price"
            intro="An implant is one component of a staged treatment. Understanding the full pathway makes it easier to compare plans meaningfully."
          />
          <Timeline steps={["Assessment", "Planning", "Implant placement", "Healing", "Restoration", "Follow-up"]} />
        </Section>

        <Section tone="soft">
          <SectionHeading title="How Dental Implant Treatment Works" />
          <TreatmentProcess steps={PROCESS} />
        </Section>

        <Section>
          <SectionHeading
            title="Dental Implant Treatment for Patients Across Odisha"
            intro="Patients from across Odisha may contact the team to discuss their dental implant needs and understand the next steps. Where appropriate, preliminary information and records can be reviewed before an in-person appointment. The physical treatment location is clearly communicated before the appointment is scheduled."
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Patients commonly travel to Bhubaneswar for implant treatment from Cuttack, Puri,
            Berhampur (Brahmapur), Sambalpur, Rourkela, Balasore, Baripada, Angul and Jharsuguda.
            Treatment itself takes place at {TREATMENT_LOCATION}.
          </p>
          <div className="mt-8">
            <LocationTrustBlock
              hospital="CARE Hospital"
              location={TREATMENT_LOCATION}
              phoneDisplay={PHONE_DISPLAY}
              phoneTel={PHONE_TEL}
              hours="Appointment hours are confirmed by the coordinator when your visit is scheduled."
              image={careHospital.url}
            />
          </div>
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Why You Shouldn't Choose an Implant Based on Price Alone"
            intro="Two patients with apparently similar missing teeth may require quite different treatment plans."
          />
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {[
              "Overall oral health",
              "Gum condition",
              "Bone volume and quality",
              "Medical and dental history",
              "Number of missing teeth",
              "Bite and occlusion",
              "Restoration requirements",
              "Aesthetic requirements",
              "Previous dental treatment",
            ].map((f) => (
              <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm font-medium text-foreground">
            The most useful first step is an individual implant assessment rather than choosing a treatment
            based only on an advertised price.
          </p>
        </Section>

        <Section>
          <ClinicalReviewer
            writtenBy="Dental Content Team"
            reviewer="Dr. Sauvik Singha, MDS"
            reviewerRole="Maxillofacial Surgeon & Implant Specialist"
            reviewedOn={REVIEWED_ON}
            profileHref="/#team"
          />
        </Section>

        <Section id="faqs" tone="soft">
          <SectionHeading title="Dental Implant Cost — Patient Questions" />
          <FAQSection faqs={FAQ_ITEMS} />
        </Section>

        <Section>
          <ImplantCTA
            title="Planning Dental Implants in Odisha? Start With an Assessment."
            copy="Instead of choosing an implant treatment based only on an advertised price, discuss your individual dental condition and treatment requirements with the dental team."
            primary={{ label: "Book an Implant Consultation", href: "/#contact" }}
            secondary={{ label: "Talk to the Implant Team", href: WHATSAPP_URL, external: true }}
            footnote="Ask about treatment options, diagnostic requirements, expected stages and cost considerations."
          />
        </Section>

        <Section tone="soft">
          <SectionHeading title="Related Dental Implant Services" />
          <RelatedServices items={RELATED} />
        </Section>

        <Section>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card-premium p-6">
              <h2 className="text-lg font-bold text-foreground">Clinical Information &amp; References</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Verified clinical and professional references for this page will be listed here as they are
                reviewed and approved by the clinical team.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-secondary/50 p-6">
              <h2 className="text-lg font-bold text-foreground">Medical disclaimer</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                This page provides general educational information about dental implant treatment and cost
                considerations. Treatment suitability and exact cost vary between patients and can only be
                determined after appropriate clinical assessment and treatment planning.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
