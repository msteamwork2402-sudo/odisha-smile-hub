import { createFileRoute } from "@tanstack/react-router";
import { Award, BookOpen, ExternalLink, Lightbulb, MapPin, MessageCircle, ShieldCheck, Stethoscope } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import { Breadcrumbs, FAQSection, ImplantCTA, RelatedServices, Section, SectionHeading, type Faq } from "@/components/implant/blocks";
import { WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/site";
import { CLUSTER, DR_NEHA_PROFILES, SITE } from "@/lib/implant-cluster";
import {
  NEHA_ACHIEVEMENTS, NEHA_AFFILIATIONS, NEHA_COMMUNITY, NEHA_COURSES, NEHA_ENTREPRENEURSHIP, NEHA_EXPERIENCE,
  NEHA_INTERESTS, NEHA_LANGUAGES, NEHA_PAGE_URL, NEHA_PROFILE_SCHEMA, NEHA_PUBLICATIONS, NEHA_QUALIFICATIONS,
} from "@/lib/dr-neha-profile";
import teamNeha from "@/assets/team-neha-real.jpg";

const PAGE_TITLE = "Dr. Neha Mohanty | Prosthodontist, Bhubaneswar";
const PAGE_DESC =
  "Dr. Neha Mohanty, BDS, MDS (Prosthodontics): implant-supported prostheses, full mouth rehabilitation and smile designing in Bhubaneswar.";

const FAQS: Faq[] = [
  { q: "What qualifications does Dr. Neha Mohanty hold?", plain: "Her CV lists BDS from KIIT University, Bhubaneswar (2015) and MDS in Prosthodontics and Crown & Bridge from MP State Medical University, both First Class with Order of Merit." },
  { q: "What is her role in dental implant care?", plain: "As a prosthodontist, her clinical interests include implant-retained and implant-supported prostheses and full mouth rehabilitation — the teeth, crowns and bridges that sit on implants." },
  { q: "Where does implant treatment arranged through this website take place?", plain: "In-person assessment and implant treatment take place at CARE Hospital, Chandrasekharpur, Bhubaneswar. Patients across Odisha can begin with a preliminary online consultation." },
  { q: "Which languages does she speak?", plain: "English, Hindi and Odia fluently, and conversational Bengali, as listed in her CV." },
].map((item) => ({ ...item, a: <p>{item.plain}</p> }));

export const Route = createFileRoute("/dr-neha-mohanty")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: NEHA_PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: NEHA_PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            NEHA_PROFILE_SCHEMA,
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                { "@type": "ListItem", position: 2, name: "Implant Team", item: `${SITE}/#team` },
                { "@type": "ListItem", position: 3, name: "Dr. Neha Mohanty, MDS", item: NEHA_PAGE_URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.plain } })),
            },
          ],
        }),
      },
    ],
  }),
  component: DrNehaMohantyPage,
});

const chip =
  "inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-sm";

function DrNehaMohantyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Implant Team", href: "/#team" }, { label: "Dr. Neha Mohanty, MDS" }]} />
      <main className="pb-24 lg:pb-0">
        <section className="border-b bg-surface py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                  <Stethoscope className="h-3.5 w-3.5" /> Prosthodontist &amp; Dental Surgeon
                </span>
                <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Dr. Neha Mohanty</h1>
                <p className="mt-2 text-lg font-semibold text-primary">BDS, MDS (Prosthodontics and Crown &amp; Bridge)</p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Dr. Neha Mohanty is a dental surgeon with postgraduate training in Prosthodontics and Crown &amp; Bridge and clinical experience in Bhubaneswar, Jabalpur and Kolkata. Her clinical interests include prosthodontic rehabilitation, implant-supported prostheses and maxillofacial prosthetics. She practises at i-Smile Dental Clinic, Bhubaneswar, and is part of the implant team for patients using OdishaDentalImplants.com, where in-person implant treatment takes place at CARE Hospital, Chandrasekharpur, Bhubaneswar.
                </p>
                <div className="mt-6 border-y border-border/70 py-4">
                  <span className="block text-xs font-bold uppercase tracking-wider text-foreground">Professional Profiles:</span>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    <a href={DR_NEHA_PROFILES.linkedin} target="_blank" rel="noopener noreferrer" className={chip}>LinkedIn Profile <ExternalLink className="h-3 w-3" aria-hidden="true" /></a>
                    <a href={DR_NEHA_PROFILES.apollo} target="_blank" rel="noopener noreferrer" className={chip}>Apollo 24|7 Profile <ExternalLink className="h-3 w-3" aria-hidden="true" /></a>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="/#contact" className="cta-gradient shadow-soft rounded-full px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-transform hover:scale-[1.02]">
                    Book <span className="consultation-free">FREE</span> Consultation
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                    <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp Specialist Team
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="card-premium overflow-hidden p-0 shadow-soft">
                  <img src={teamNeha} alt="Portrait of Dr. Neha Mohanty, prosthodontist and dental surgeon in Bhubaneswar" width={768} height={960} className="aspect-[4/5] w-full object-cover" />
                  <div className="bg-surface p-6">
                    <h2 className="font-display text-lg font-bold text-foreground">Dr. Neha Mohanty, MDS</h2>
                    <p className="text-xs font-medium text-muted-foreground">Prosthodontist | Dental Surgeon | Healthcare Entrepreneur</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" /><span>Bhubaneswar, Odisha</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section tone="plain">
          <SectionHeading title="Qualifications & Continuing Education" intro="As listed in her client-supplied CV." />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="card-premium p-6">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-base font-bold text-foreground">Degrees</h3>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {NEHA_QUALIFICATIONS.map((q) => <li key={q.name}><span className="font-semibold text-foreground">{q.name}</span> — {q.detail}</li>)}
              </ul>
            </div>
            <div className="card-premium p-6">
              <BookOpen className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-base font-bold text-foreground">Courses</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {NEHA_COURSES.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        <Section tone="soft">
          <SectionHeading title="Professional Experience" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {NEHA_EXPERIENCE.map((e) => (
              <div key={e.place} className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{e.period}</p>
                <h3 className="mt-1 text-sm font-bold text-foreground">{e.place}</h3>
                {e.detail && <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{e.detail}</p>}
              </div>
            ))}
          </div>
        </Section>

        <Section tone="plain">
          <SectionHeading title="Areas of Interest in Implant & Restorative Dentistry" intro="Her prosthodontic focus covers the teeth, crowns and bridges that restore function after implant placement." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {NEHA_INTERESTS.map((i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm font-medium text-foreground">
                <ShieldCheck className="h-5 w-5 shrink-0 text-primary" /> {i}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Related guides: <a className="font-semibold text-primary underline" href="/full-mouth-dental-implants/">full-mouth dental implants</a>, <a className="font-semibold text-primary underline" href="/all-on-4-all-on-6-odisha/">All-on-4 / All-on-6</a>, <a className="font-semibold text-primary underline" href="/zirconia-crowns-smile-design/">zirconia crowns &amp; smile design</a> and <a className="font-semibold text-primary underline" href="/dental-implants-bhubaneswar/">dental implants in Bhubaneswar</a>. Suitability for any option is confirmed only after clinical examination.
          </p>
        </Section>

        <Section tone="soft">
          <SectionHeading title="Scientific Achievements, Publications & Affiliations" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-foreground">Achievements &amp; Presentations</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">{NEHA_ACHIEVEMENTS.map((a) => <li key={a}>{a}</li>)}</ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Publications &amp; Research</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">{NEHA_PUBLICATIONS.map((a) => <li key={a}>{a}</li>)}</ul>
              <h3 className="mt-8 text-lg font-bold text-foreground">Professional Affiliations</h3>
              <p className="mt-3 text-sm text-muted-foreground">{NEHA_AFFILIATIONS.join(", ")}.</p>
              <h3 className="mt-8 text-lg font-bold text-foreground">Languages</h3>
              <p className="mt-3 text-sm text-muted-foreground">{NEHA_LANGUAGES}.</p>
            </div>
          </div>
        </Section>

        <Section tone="plain">
          <SectionHeading title="Healthcare Entrepreneurship & Community Work" />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {NEHA_ENTREPRENEURSHIP.map((e) => (
              <div key={e.role} className="card-premium p-6">
                <Lightbulb className="h-7 w-7 text-primary" />
                <h3 className="mt-3 text-sm font-bold text-foreground">{e.role}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{e.detail}</p>
              </div>
            ))}
            <div className="card-premium p-6">
              <h3 className="text-sm font-bold text-foreground">Community Engagement</h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-xs leading-relaxed text-muted-foreground">{NEHA_COMMUNITY.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        </Section>

        <Section id="faqs" tone="soft">
          <SectionHeading title="Frequently Asked Questions — Dr. Neha Mohanty, MDS" />
          <FAQSection faqs={FAQS} />
        </Section>

        <Section tone="plain">
          <ImplantCTA
            title="Book a Consultation with Our Implant Team"
            copy="Discuss missing teeth, implant-supported teeth and restoration options. Begin online from anywhere in Odisha; attend CARE Hospital, Bhubaneswar, for clinical examination."
            primary={{ label: "Book FREE Online Consultation", href: "/#contact" }}
            secondary={{ label: "WhatsApp Specialist Team", href: WHATSAPP_URL, external: true }}
            footnote={`Phone consultations available at ${PHONE_DISPLAY} during clinic hours.`}
          />
        </Section>

        <Section tone="soft">
          <SectionHeading title="Explore Dental Implant Guides" />
          <RelatedServices
            items={[
              { title: "Dr. Sauvik Singha", href: "/dr-sauvik-singha/", text: "Oral & Maxillofacial Surgeon and implant consultant at CARE Hospitals." },
              { title: CLUSTER.single.title, href: CLUSTER.single.href, text: CLUSTER.single.text },
              { title: CLUSTER.multiple.title, href: CLUSTER.multiple.href, text: CLUSTER.multiple.text },
            ]}
          />
        </Section>
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
