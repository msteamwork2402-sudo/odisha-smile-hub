import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Link2, Crown, Smile, ShieldCheck, HeartPulse } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import { Reveal } from "@/components/site/Reveal";
import {
  Breadcrumbs,
  Checklist,
  ClinicalReviewer,
  CostFactorGrid,
  FactorComparison,
  FAQSection,
  ImplantCTA,
  ImplantHero,
  LocationTrustBlock,
  PartsDiagram,
  QuickAnswerBox,
  RelatedServices,
  Section,
  SectionHeading,
  Timeline,
  TreatmentProcess,
  type Faq,
} from "@/components/implant/blocks";
import { CONSULTATION_HOURS, PHONE_DISPLAY, PHONE_TEL, TREATMENT_ADDRESS, TREATMENT_LOCATION, WHATSAPP_URL } from "@/lib/site";
import { CARE_HOSPITAL_URL, REVIEWER } from "@/lib/implant-cluster";
import dentistConsult from "@/assets/dentist-consult.jpg";
import careHospital from "@/assets/care-hospital.png.asset.json";

const SITE = "https://odishadentalimplants.com";
const URL = `${SITE}/single-tooth-dental-implant/`;
const TITLE = "Single Tooth Dental Implant in Odisha | Treatment Guide";
const DESCRIPTION =
  "Learn about single tooth implants in Odisha: procedure, suitability, recovery, implant versus bridge choices and cost factors for replacing one tooth.";
const H1 = "Single Tooth Dental Implant in Odisha";
const REVIEWED_ON = "2 September 2026";

const QUICK_ANSWER =
  "A single tooth dental implant replaces one missing tooth with an implant, connector and crown. Suitability and treatment stages depend on oral health, available bone and the clinical assessment. Patients across India can begin with an online consultation; examination and treatment take place in Bhubaneswar.";

const FAQ_ITEMS: Faq[] = [
  {
    q: "What is a single tooth dental implant?",
    plain: QUICK_ANSWER,
    a: <p>{QUICK_ANSWER}</p>,
  },
  {
    q: "Can one missing tooth be replaced with a dental implant?",
    plain:
      "Yes — a single implant can be used to replace one missing tooth when it is clinically appropriate. Suitability depends on your gum health, available bone, the position of the tooth and your overall dental condition, which are assessed during examination and planning.",
    a: (
      <p>
        Yes — a single implant can be used to replace one missing tooth when it is clinically appropriate.
        Suitability depends on your gum health, available bone, the position of the tooth and your overall
        dental condition, all of which are assessed during clinical examination and treatment planning.
      </p>
    ),
  },
  {
    q: "Is a dental implant better than a bridge for one missing tooth?",
    plain:
      "Neither option is universally better. An implant does not rely on adjacent teeth in the same way a conventional bridge does, but it involves surgery and healing. The decision depends on your dental condition, bone, bite and treatment goals.",
    a: (
      <p>
        Neither option is universally better. An implant does not rely on adjacent teeth in the same way a
        conventional bridge does, but it involves surgery and healing stages. The decision depends on your
        dental condition, bone, bite and treatment goals — compare{" "}
        <a className="font-semibold text-primary underline" href="/implants-vs-bridge-vs-denture/">
          implants, bridges and dentures
        </a>
        .
      </p>
    ),
  },
  {
    q: "Can I get an implant immediately after tooth extraction?",
    plain:
      "Immediate implant placement may be possible in selected cases. It depends on the condition of the extraction site, surrounding tissues, bone and the overall treatment plan, so it cannot be promised in advance.",
    a: (
      <p>
        Immediate placement may be possible in selected cases, depending on the condition of the extraction
        site, surrounding tissues, bone and the overall treatment plan. Read more about{" "}
        <a className="font-semibold text-primary underline" href="/immediate-dental-implants/">
          immediate dental implants
        </a>
        .
      </p>
    ),
  },
  {
    q: "What if I don't have enough bone for an implant?",
    plain:
      "Assessment and appropriate imaging can identify whether bone augmentation is required. Where bone volume is insufficient, procedures such as bone grafting may be planned before or alongside implant placement. This is not required for every patient.",
    a: (
      <p>
        Clinical assessment and appropriate imaging can identify whether bone augmentation is required. Where
        bone volume is insufficient, procedures such as{" "}
        <a className="font-semibold text-primary underline" href="/bone-grafting-for-dental-implants/">
          bone grafting for dental implants
        </a>{" "}
        may be planned before or alongside placement. This is not required for every patient.
      </p>
    ),
  },
  {
    q: "How long does a single tooth implant take?",
    plain:
      "Treatment duration varies between patients. It is influenced by bone condition, any additional procedures, implant stability, healing, the position of the tooth and the type of restoration planned.",
    a: (
      <p>
        Treatment duration varies between patients. It is influenced by bone condition, any additional
        procedures required, implant stability, healing response, the position of the tooth and the type of
        restoration planned. Your treatment plan will set out the expected stages for your case.
      </p>
    ),
  },
  {
    q: "Is single tooth implant surgery painful?",
    plain:
      "Implant placement is carried out using appropriate local anaesthesia or other clinically appropriate methods. Temporary soreness, swelling or tenderness can occur afterwards. Post-treatment instructions should be followed, and unexpected or severe symptoms should be reported to the dental team.",
    a: (
      <p>
        Implant placement is carried out using appropriate local anaesthesia or other clinically appropriate
        methods. Temporary soreness, swelling, tenderness or discomfort can occur afterwards. Post-treatment
        instructions should be followed, and unexpected or severe symptoms should be reported to the dental
        team promptly.
      </p>
    ),
  },
  {
    q: "How much does a single tooth implant cost in Odisha?",
    plain:
      "Cost varies with the implant system, restoration, diagnostic requirements, bone condition and whether additional procedures are needed. A figure can only be given after clinical assessment and treatment planning.",
    a: (
      <p>
        Cost varies with the implant system, the restoration, diagnostic requirements, bone condition and
        whether additional procedures are needed. See the{" "}
        <a className="font-semibold text-primary underline" href="/dental-implant-cost-odisha/">
          dental implant cost in Odisha
        </a>{" "}
        guide for a full explanation.
      </p>
    ),
  },
  {
    q: "How long can a dental implant last?",
    plain:
      "No specific lifespan can be promised. Implant longevity depends on factors including oral hygiene, gum health, bite loading, professional maintenance, general health and individual circumstances.",
    a: (
      <p>
        No specific lifespan can be promised. Longevity depends on factors including oral hygiene, gum
        health, how the implant is loaded by your bite, regular professional maintenance, general health and
        individual circumstances. See{" "}
        <a className="font-semibold text-primary underline" href="/dental-implant-maintenance-failure/">
          implant maintenance and failure
        </a>
        .
      </p>
    ),
  },
  {
    q: "Can patients from Cuttack, Puri or other Odisha cities get treatment?",
    plain:
      "Patients from across Odisha can contact the team to discuss a missing tooth and understand the next steps. Physical examination and implant treatment take place at CARE Hospital, Bhubaneswar, and the location is confirmed before any appointment.",
    a: (
      <p>
        Patients from across Odisha can contact the team to discuss a missing tooth and understand the next
        steps. Physical examination and implant treatment take place at {TREATMENT_LOCATION}, and the
        treatment location is confirmed with you before any appointment is scheduled.
      </p>
    ),
  },
];

export const Route = createFileRoute("/single-tooth-dental-implant")({
  staticData: { sitemap: true },
  component: SingleToothPage,
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
                { "@type": "ListItem", position: 3, name: "Single Tooth Dental Implant", item: URL },
              ],
            },
            {
              "@type": "MedicalWebPage",
              name: TITLE,
              description: DESCRIPTION,
              url: URL,
              inLanguage: "en-IN",
              lastReviewed: "2026-09-02",
              reviewedBy: {
                "@type": "Person",
                name: REVIEWER.name,
                jobTitle: REVIEWER.role,
                url: REVIEWER.profileUrl,
              },
              about: {
                "@type": "MedicalProcedure",
                name: "Single tooth dental implant",
                procedureType: "https://schema.org/SurgicalProcedure",
                bodyLocation: "Jaw",
                howPerformed:
                  "After clinical and diagnostic assessment, an implant is placed in the jaw to serve as the foundation for a single replacement tooth. Following appropriate healing, an abutment and crown are fitted according to the treatment plan.",
              },
              provider: {
                "@type": "MedicalBusiness",
                name: "OdishaDentalImplants.com",
                url: SITE,
                medicalSpecialty: "Dentistry",
                areaServed: "Odisha, India",
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

const OPTION_CARDS = [
  {
    title: "Dental implant",
    text: "An independent tooth replacement that uses an implant placed in the jaw as the foundation for a single restoration.",
    cta: "Explore Dental Implants",
    href: "#how-it-works",
  },
  {
    title: "Dental bridge",
    text: "Uses the adjacent teeth to support a replacement tooth, which means those teeth are prepared as part of treatment.",
    cta: "Compare Treatment Options",
    href: "/implants-vs-bridge-vs-denture/",
  },
  {
    title: "Removable partial denture",
    text: "A removable option that may be appropriate in selected situations, depending on the clinical circumstances.",
    cta: "Compare Your Options",
    href: "/implants-vs-bridge-vs-denture/",
  },
];

const PARTS = [
  {
    label: "1. Implant",
    title: "The foundation",
    icon: Anchor,
    text: "A dental implant is placed in the jaw and serves as the foundation for the replacement tooth.",
  },
  {
    label: "2. Abutment",
    title: "The connector",
    icon: Link2,
    text: "An appropriate connector may be used between the implant and the final restoration, depending on the case.",
  },
  {
    label: "3. Crown",
    title: "The visible tooth",
    icon: Crown,
    text: "A custom restoration is planned and placed to replace the visible part of the missing tooth.",
  },
];

const CANDIDATE_ITEMS = [
  "Missing one tooth",
  "Adequate or potentially restorable bone support",
  "Healthy or treatable gums",
  "Suitable surrounding oral structures",
  "Ability to maintain good oral hygiene",
  "Appropriate overall treatment considerations",
];

const PROCESS = [
  { title: "Consultation", text: "You discuss the missing tooth, your dental history, concerns and treatment goals with the team." },
  { title: "Clinical assessment", text: "Your teeth, gums, bite and relevant oral structures are examined." },
  { title: "Diagnostic planning", text: "Appropriate imaging and treatment planning are performed when clinically required." },
  { title: "Implant placement", text: "The implant is placed according to the planned surgical approach." },
  { title: "Healing", text: "The implant and surrounding tissues require appropriate healing before the next stage, depending on the plan." },
  { title: "Abutment & restoration", text: "The replacement tooth is planned and fitted according to the clinical situation." },
  { title: "Follow-up & maintenance", text: "Follow-up helps assess the restoration, oral hygiene and implant health over time." },
];

const BENEFITS = [
  {
    icon: Smile,
    title: "Independent tooth replacement",
    text: "A single implant can support an individual restoration without relying on adjacent teeth in the same way as a conventional bridge.",
  },
  {
    icon: Crown,
    title: "Natural-looking restoration",
    text: "The visible restoration can be designed to fit in with the shape, shade and contour of the surrounding dentition.",
  },
  {
    icon: HeartPulse,
    title: "Functional tooth replacement",
    text: "The goal of treatment is to restore function and help you chew more comfortably on that side.",
  },
  {
    icon: ShieldCheck,
    title: "Long-term oral care",
    text: "Good oral hygiene and regular professional follow-up are important for maintaining implant health over time.",
  },
];

const CONSIDERATIONS = [
  "Implant placement is a surgical procedure",
  "Treatment usually requires multiple appointments",
  "Healing time is needed between stages",
  "Additional procedures may be required in some cases",
  "Good daily oral hygiene is essential",
  "Ongoing professional maintenance is needed",
  "It may not be appropriate for every patient",
  "Complications or treatment failure are possible",
];

const COMPARISON_ROWS = [
  {
    factor: "How the replacement is supported",
    a: "Supported by an implant placed in the jaw.",
    b: "Supported by the teeth on either side of the gap.",
  },
  {
    factor: "Involvement of adjacent teeth",
    a: "Adjacent teeth are not prepared to support the replacement.",
    b: "Adjacent teeth are usually prepared to carry the bridge.",
  },
  {
    factor: "Surgical procedure",
    a: "Requires implant surgery under appropriate anaesthesia.",
    b: "Typically does not require implant surgery.",
  },
  {
    factor: "Treatment stages",
    a: "Staged: assessment, placement, healing, restoration.",
    b: "Usually fewer stages once the teeth are prepared.",
  },
  {
    factor: "Healing requirements",
    a: "Healing is required before the final restoration in most plans.",
    b: "Limited healing requirement in most cases.",
  },
  {
    factor: "Maintenance",
    a: "Requires daily hygiene around the implant and regular reviews.",
    b: "Requires careful cleaning under and around the bridge.",
  },
  {
    factor: "Suitability",
    a: "Depends on bone, gum health and overall dental condition.",
    b: "Depends on the condition and strength of adjacent teeth.",
  },
  {
    factor: "Cost considerations",
    a: "Reflects implant, abutment, restoration and any added procedures.",
    b: "Reflects the number of units and materials used.",
  },
];

const RELATED = [
  { title: "Dental Implant Cost in Odisha", href: "/dental-implant-cost-odisha/", text: "What affects implant treatment cost and how plans differ." },
  { title: "Multiple Dental Implants", href: "/multiple-dental-implants/", text: "Implant-supported options for several missing teeth." },
  { title: "All-on-4 / All-on-6", href: "/all-on-4-all-on-6-odisha/", text: "Full-arch fixed teeth protocols explained." },
  { title: "Full-Mouth Dental Implants", href: "/full-mouth-dental-implants/", text: "Complete rehabilitation for extensive tooth loss." },
  { title: "Immediate Dental Implants", href: "/immediate-dental-implants/", text: "When placement at the time of extraction may be suitable." },
  { title: "Bone Grafting", href: "/bone-grafting-for-dental-implants/", text: "Augmentation when bone volume is insufficient." },
  { title: "Sinus Lift", href: "/sinus-lift-dental-implants/", text: "Sinus augmentation for upper-jaw implant cases." },
  { title: "Implant vs Bridge vs Denture", href: "/implants-vs-bridge-vs-denture/", text: "Comparing tooth replacement options." },
  { title: "Dental Implant Second Opinion", href: "/dental-implant-second-opinion/", text: "Have an existing plan or quote reviewed." },
  { title: "Implant Maintenance & Failure", href: "/dental-implant-maintenance-failure/", text: "Long-term care and what can go wrong." },
];

function SingleToothPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Dental Implants", href: "/#services" },
          { label: "Single Tooth Dental Implant" },
        ]}
      />
      <main className="pb-24 lg:pb-0">
        <ImplantHero
          eyebrow="Single tooth dental implant"
          title={H1}
          copy="A single missing tooth can affect chewing, appearance and confidence. A dental implant can provide a stable foundation for replacing one missing tooth with an individual restoration, when clinically appropriate."
          primaryCta={{ label: "Book an Implant Consultation", href: "/#contact" }}
          secondaryCta={{ label: "Discuss Your Missing Tooth", href: WHATSAPP_URL, external: true }}
          trustLine="Clinical assessment • Individual treatment planning • Treatment at CARE Hospital, Bhubaneswar"
          image={dentistConsult}
          imageAlt="Dentist discussing dental implant treatment options with a patient during a consultation"
        />

        <Section>
          <QuickAnswerBox question="What is a single tooth dental implant?" answer={QUICK_ANSWER} />
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Missing One Tooth? You May Have Several Replacement Options"
            intro="Losing one tooth does not automatically mean the same treatment is appropriate for everyone. Depending on your clinical situation, options may include a dental implant, a conventional dental bridge, or a removable partial denture in selected situations."
          />
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {[
              "Location of the missing tooth",
              "Condition of the surrounding teeth",
              "Gum health",
              "Bone availability",
              "Your bite",
              "Aesthetic requirements",
              "Your own preferences",
              "Overall dental condition",
            ].map((f) => (
              <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {OPTION_CARDS.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
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

        <Section id="how-it-works">
          <SectionHeading
            title="How Does a Single Tooth Dental Implant Work?"
            intro="A single tooth implant replaces one missing tooth in three connected parts. The exact approach is planned for each patient, so not every treatment follows an identical sequence."
          />
          <PartsDiagram parts={PARTS} />
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Who May Be Suitable for a Single Tooth Dental Implant?"
            intro="Suitability must be determined clinically after examination and, where required, diagnostic imaging. The factors below are commonly considered."
          />
          <Checklist items={CANDIDATE_ITEMS} />
          <div className="mt-8 rounded-3xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">An important clinical note</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Not every patient is immediately ready for implant placement. Some patients may first require
              treatment for gum disease, tooth extraction,{" "}
              <a className="font-semibold text-primary underline" href="/bone-grafting-for-dental-implants/">
                bone grafting for dental implants
              </a>{" "}
              or other dental conditions.
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="What If There Isn't Enough Bone?"
            intro="Bone volume and anatomy can affect implant planning. Some patients may require additional procedures before or alongside implant treatment — but these are not required for everyone."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="card-premium p-6">
              <h3 className="text-base font-semibold text-foreground">Bone grafting</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Where the available bone is insufficient for the planned implant position, augmentation may be
                planned as a separate or simultaneous stage.
              </p>
              <a className="mt-3 inline-block text-sm font-semibold text-primary underline" href="/bone-grafting-for-dental-implants/">
                Bone grafting for dental implants
              </a>
            </article>
            <article className="card-premium p-6">
              <h3 className="text-base font-semibold text-foreground">Sinus lift</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                For appropriate upper-jaw cases, sinus augmentation may be considered depending on the bone
                height below the sinus and the overall treatment plan.
              </p>
              <a className="mt-3 inline-block text-sm font-semibold text-primary underline" href="/sinus-lift-dental-implants/">
                Sinus lift with dental implants
              </a>
            </article>
          </div>
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="What Happens During Single Tooth Implant Treatment?"
            intro="Treatment is delivered in planned stages. Your own plan may vary depending on your clinical circumstances."
          />
          <TreatmentProcess steps={PROCESS} />
        </Section>

        <Section>
          <SectionHeading
            title="Can a Single Tooth Implant Be Placed Immediately After Extraction?"
            intro="Sometimes — but not always. Immediate implant placement may be possible in selected cases, but it is not appropriate for every tooth or every patient. The decision depends on factors such as the condition of the extraction site, surrounding tissues, bone and the overall treatment plan."
          />
          <a className="mt-6 inline-block text-sm font-semibold text-primary" href="/immediate-dental-implants/">
            Learn About Immediate Dental Implants →
          </a>
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="How Long Does a Single Tooth Implant Take?"
            intro="Treatment time varies between patients, so no universal number of days or weeks applies. The stages below show the usual pathway."
          />
          <Timeline
            steps={["Assessment", "Planning", "Implant placement", "Healing", "Restoration", "Follow-up"]}
          />
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {[
              "Bone condition",
              "Need for additional procedures",
              "Implant stability",
              "Healing response",
              "Location of the tooth",
              "Type of restoration",
              "Individual clinical circumstances",
            ].map((f) => (
              <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <SectionHeading
            title="Is a Single Tooth Dental Implant Painful?"
            intro="Implant placement is performed using appropriate local anaesthesia or other clinically appropriate methods, so the procedure itself is managed for comfort."
          />
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            After treatment, patients may experience temporary soreness, swelling, tenderness or discomfort.
            These usually settle as healing progresses. Post-treatment instructions should be followed
            carefully, and you should contact the dental team if you experience unexpected or severe symptoms.
          </p>
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Potential Benefits of Replacing One Missing Tooth With an Implant"
            intro="Outcomes vary between patients. The points below describe what implant treatment aims to achieve, not guaranteed results."
          />
          <CostFactorGrid items={BENEFITS} />
        </Section>

        <Section>
          <SectionHeading
            title="What Should You Consider Before Choosing an Implant?"
            intro="A balanced decision means understanding the requirements and limitations of implant treatment, not only its benefits."
          />
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {CONSIDERATIONS.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm font-medium text-foreground">
            Your dentist or implant team should explain the expected benefits, limitations, alternatives and
            risks relevant to your individual case.
          </p>
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Dental Implant or Bridge for One Missing Tooth?"
            intro="Both approaches can replace a single missing tooth. They differ in how the replacement is supported and what the treatment involves."
          />
          <FactorComparison
            caption="Comparison of a single tooth dental implant and a conventional dental bridge"
            optionA="Single tooth implant"
            optionB="Dental bridge"
            rows={COMPARISON_ROWS}
            note="Neither option is universally better. The right choice depends on your teeth, gums, bone, bite, treatment goals and clinical circumstances."
          />
          <a className="mt-6 inline-block text-sm font-semibold text-primary" href="/implants-vs-bridge-vs-denture/">
            Compare implants, bridges and dentures →
          </a>
        </Section>

        <Section>
          <SectionHeading
            title="How Much Does a Single Tooth Implant Cost in Odisha?"
            intro="The cost of replacing one tooth with an implant depends on the implant system, restoration, diagnostic requirements, bone condition and whether additional procedures are needed. The complete treatment plan — not just the implant component — should be considered when comparing costs."
          />
          <a
            href="/dental-implant-cost-odisha/"
            data-analytics="cost_enquiry_cta"
            className="cta-gradient shadow-soft mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-brand-foreground"
          >
            See the Complete Dental Implant Cost Guide →
          </a>
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Single Tooth Dental Implant Treatment for Patients Across Odisha"
            intro="Patients from across Odisha can contact the team to discuss a missing tooth and understand the next steps. Preliminary information or available dental records may help the team understand the situation before an in-person assessment. The physical treatment location is always confirmed before an appointment."
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Patients commonly travel to Bhubaneswar from Cuttack, Puri, Berhampur (Brahmapur), Sambalpur,
            Rourkela, Balasore, Baripada, Angul and Jharsuguda. Physical examination and implant treatment
            take place at {TREATMENT_LOCATION}.
          </p>
          <div className="mt-8">
            <LocationTrustBlock
              hospital="CARE Hospital"
              location={TREATMENT_LOCATION}
              phoneDisplay={PHONE_DISPLAY}
              phoneTel={PHONE_TEL}
              hours={CONSULTATION_HOURS}
              image={careHospital.url}
              hospitalHref={CARE_HOSPITAL_URL}
            />
          </div>
        </Section>

        <Section>
          <ClinicalReviewer
            writtenBy="Dental Content Team"
            reviewer="Dr. Sauvik Singha, MDS"
            reviewerRole="Maxillofacial Surgeon & Implant Specialist"
            reviewedOn={REVIEWED_ON}
            profileHref={REVIEWER.profileUrl}
          />
        </Section>

        <Section id="faqs" tone="soft">
          <SectionHeading title="Single Tooth Dental Implant — Patient Questions" />
          <FAQSection faqs={FAQ_ITEMS} />
        </Section>

        <Section>
          <ImplantCTA
            title="Missing One Tooth? Find Out Whether an Implant Is Right for You."
            copy="A clinical assessment can help determine whether a single tooth implant is appropriate and what treatment stages may be required."
            primary={{ label: "Book an Implant Consultation", href: "/#contact" }}
            secondary={{ label: "Ask About Your Treatment Options", href: WHATSAPP_URL, external: true }}
            footnote="Ask about suitability, treatment stages, alternatives and cost considerations."
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
                Learn about{" "}
                <a className="font-semibold text-primary underline" href={REVIEWER.profileUrl} target="_blank" rel="noopener noreferrer">
                  Dr. Sauvik Singha and the implant team
                </a>{" "}
                , and review the official CARE Hospitals page for the{" "}
                <a className="font-semibold text-primary underline" href={CARE_HOSPITAL_URL} target="_blank" rel="noopener noreferrer">
                  Bhubaneswar treatment location
                </a>
                . Additional clinical references are added after review by the dental team.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-secondary/50 p-6">
              <h2 className="text-lg font-bold text-foreground">Medical disclaimer</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                This page provides general educational information about single tooth dental implants.
                Treatment suitability, risks, expected outcomes and treatment costs vary between patients and
                should be assessed by a qualified dental professional.
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
