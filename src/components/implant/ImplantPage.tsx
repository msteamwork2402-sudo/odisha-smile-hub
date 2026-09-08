import type { ReactNode } from "react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import {
  Breadcrumbs,
  BulletGrid,
  Callout,
  Checklist,
  ClinicalReviewer,
  DataTable,
  FactorComparison,
  FAQSection,
  ImplantCTA,
  ImplantHero,
  InfoCards,
  LocationTrustBlock,
  RelatedServices,
  Section,
  SectionHeading,
  Timeline,
  TreatmentProcess,
  type Faq,
  type FactorRow,
  type ProcessStep,
} from "@/components/implant/blocks";
import { PHONE_DISPLAY, PHONE_TEL, TREATMENT_LOCATION, WHATSAPP_URL } from "@/lib/site";
import { CLUSTER, ODISHA_CITIES, REVIEWER, SITE, type ClusterKey } from "@/lib/implant-cluster";
import careHospital from "@/assets/care-hospital.png.asset.json";

/* --------------------------------- content -------------------------------- */

export type Block =
  | { kind: "prose"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "checklist"; items: string[] }
  | { kind: "cards"; items: { title: string; text: string; href?: string; cta?: string }[]; columns?: 2 | 3 }
  | { kind: "process"; steps: ProcessStep[] }
  | { kind: "timeline"; steps: string[] }
  | {
      kind: "compare";
      caption: string;
      optionA: string;
      optionB: string;
      rows: FactorRow[];
      note?: string;
    }
  | { kind: "table"; caption: string; columns: string[]; rows: string[][]; note?: string }
  | { kind: "callout"; title: string; text: string }
  | { kind: "link"; label: string; href: string };

export type PageSection = {
  id?: string;
  tone?: "plain" | "soft";
  title: string;
  intro?: string;
  blocks: Block[];
};

export type ImplantPageConfig = {
  key: ClusterKey;
  url: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  heroCopy: string;
  heroSecondaryCta: string;
  heroImage: string;
  heroImageAlt: string;
  quickQuestion: string;
  quickAnswer: string;
  sections: PageSection[];
  costIntro: string;
  faqTitle: string;
  faqs: Faq[];
  ctaTitle: string;
  ctaCopy: string;
  related: ClusterKey[];
  disclaimerTopic: string;
  procedureName: string;
  procedureHowPerformed: string;
};

export function faq(q: string, plain: string, a?: ReactNode): Faq {
  return { q, plain, a: a ?? <p>{plain}</p> };
}

/* ---------------------------------- head ---------------------------------- */

export function implantPageHead(cfg: ImplantPageConfig) {
  return () => ({
    meta: [
      { title: cfg.title },
      { name: "description", content: cfg.description },
      { property: "og:title", content: cfg.title },
      { property: "og:description", content: cfg.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: cfg.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: cfg.url }],
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
                { "@type": "ListItem", position: 3, name: CLUSTER[cfg.key].title, item: cfg.url },
              ],
            },
            {
              "@type": "MedicalWebPage",
              name: cfg.title,
              description: cfg.description,
              url: cfg.url,
              inLanguage: "en-IN",
              lastReviewed: REVIEWER.reviewedOnISO,
              reviewedBy: { "@type": "Person", name: REVIEWER.name, jobTitle: REVIEWER.role },
              about: {
                "@type": "MedicalProcedure",
                name: cfg.procedureName,
                procedureType: "https://schema.org/SurgicalProcedure",
                bodyLocation: "Jaw",
                howPerformed: cfg.procedureHowPerformed,
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
              mainEntity: cfg.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.plain },
              })),
            },
          ],
        }),
      },
    ],
  });
}

/* --------------------------------- render --------------------------------- */

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "prose":
      return <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">{block.text}</p>;
    case "bullets":
      return <BulletGrid items={block.items} />;
    case "checklist":
      return <Checklist items={block.items} />;
    case "cards":
      return <InfoCards items={block.items} {...(block.columns ? { columns: block.columns } : {})} />;
    case "process":
      return <TreatmentProcess steps={block.steps} />;
    case "timeline":
      return <Timeline steps={block.steps} />;
    case "compare":
      return (
        <FactorComparison
          caption={block.caption}
          optionA={block.optionA}
          optionB={block.optionB}
          rows={block.rows}
          {...(block.note ? { note: block.note } : {})}
        />
      );
    case "table":
      return (
        <DataTable
          caption={block.caption}
          columns={block.columns}
          rows={block.rows}
          {...(block.note ? { note: block.note } : {})}
        />
      );
    case "callout":
      return <Callout title={block.title} text={block.text} />;
    case "link":
      return (
        <a className="mt-6 inline-block text-sm font-semibold text-primary" href={block.href}>
          {block.label} →
        </a>
      );
  }
}

export function ImplantPage({ cfg }: { cfg: ImplantPageConfig }) {
  const page = CLUSTER[cfg.key];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Dental Implants", href: "/#services" },
          { label: page.title },
        ]}
      />
      <main className="pb-24 lg:pb-0">
        <ImplantHero
          eyebrow={cfg.eyebrow}
          title={cfg.h1}
          copy={cfg.heroCopy}
          primaryCta={{ label: "Book an Implant Consultation", href: "/#contact" }}
          secondaryCta={{ label: cfg.heroSecondaryCta, href: WHATSAPP_URL, external: true }}
          trustLine="Clinical assessment • Individual treatment planning • Treatment at CARE Hospital, Bhubaneswar"
          image={cfg.heroImage}
          imageAlt={cfg.heroImageAlt}
        />

        <Section>
          <div className="card-premium mx-auto max-w-4xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">{cfg.quickQuestion}</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/85">{cfg.quickAnswer}</p>
          </div>
        </Section>

        {cfg.sections.map((s, i) => (
          <Section key={s.title} id={s.id} tone={s.tone ?? (i % 2 === 0 ? "soft" : "plain")}>
            <SectionHeading title={s.title} intro={s.intro} />
            {s.blocks.map((b, bi) => (
              <BlockView key={bi} block={b} />
            ))}
          </Section>
        ))}

        <Section>
          <SectionHeading title="How Much Does This Treatment Cost?" intro={cfg.costIntro} />
          <a
            href={CLUSTER.cost.href}
            data-analytics="cost_enquiry_cta"
            className="cta-gradient shadow-soft mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-brand-foreground"
          >
            See the Dental Implant Cost in Odisha Guide →
          </a>
        </Section>

        <Section tone="soft">
          <SectionHeading
            title="Treatment for Patients Across Odisha"
            intro="Patients from across Odisha can contact the dental team to discuss their treatment requirements. The physical treatment location is always confirmed before an appointment is scheduled."
          />
          <p className="mt-6 text-sm text-muted-foreground">
            {ODISHA_CITIES} Physical examination and implant treatment take place at {TREATMENT_LOCATION}.
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

        <Section>
          <ClinicalReviewer
            writtenBy={REVIEWER.writtenBy}
            reviewer={REVIEWER.name}
            reviewerRole={REVIEWER.role}
            reviewedOn={REVIEWER.reviewedOn}
            profileHref="/#team"
          />
        </Section>

        <Section id="faqs" tone="soft">
          <SectionHeading title={cfg.faqTitle} />
          <FAQSection faqs={cfg.faqs} />
        </Section>

        <Section>
          <ImplantCTA
            title={cfg.ctaTitle}
            copy={cfg.ctaCopy}
            primary={{ label: "Book an Implant Consultation", href: "/#contact" }}
            secondary={{ label: "Talk to the Implant Team", href: WHATSAPP_URL, external: true }}
            footnote="Ask about suitability, treatment stages, alternatives and cost considerations."
          />
        </Section>

        <Section tone="soft">
          <SectionHeading title="Explore Dental Implant Services" />
          <RelatedServices
            items={cfg.related.map((k) => ({
              title: CLUSTER[k].title,
              href: CLUSTER[k].href,
              text: CLUSTER[k].text,
            }))}
          />
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
                This page provides general educational information about {cfg.disclaimerTopic}. Treatment
                suitability, risks, expected outcomes, treatment duration and cost vary between patients and
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
