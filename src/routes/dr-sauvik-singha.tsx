import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  UserCheck,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import {
  Breadcrumbs,
  FAQSection,
  ImplantCTA,
  LocationTrustBlock,
  RelatedServices,
  Section,
  SectionHeading,
  type Faq,
} from "@/components/implant/blocks";
import {
  CONSULTATION_HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  TREATMENT_ADDRESS,
  TREATMENT_LOCATION,
  WHATSAPP_URL,
} from "@/lib/site";
import {
  CARE_HOSPITAL_URL,
  CLUSTER,
  DOCTOR_SCHEMA,
  DR_SAUVIK_PROFILES,
  ODISHA_SERVICE_CITIES,
  SITE,
} from "@/lib/implant-cluster";

import teamSauvik from "@/assets/team-sauvik-real.jpg";
import careHospital from "@/assets/care-hospital.png";

const PAGE_URL = `${SITE}/dr-sauvik-singha/`;
const PAGE_TITLE = "Dr. Sauvik Singha (MDS) | Dental Implant Specialist in Bhubaneswar";
const PAGE_DESC =
  "Consult Dr. Sauvik Singha, MDS (Maxillofacial Surgeon & Dental Implant Specialist) at CARE Hospital Bhubaneswar. Expertise in 3D CBCT guided implants, All-on-4/6 & bhala doctor care.";

const FAQS: Faq[] = [
  {
    q: "Who is Dr. Sauvik Singha?",
    plain:
      "Dr. Sauvik Singha, MDS, is a qualified Maxillofacial Surgeon and Dental Implant Specialist in Bhubaneswar, Odisha. He specializes in 3D CBCT computer-guided dental implant placement, bone grafting, and full-arch fixed teeth restorations.",
    a: (
      <p>
        Dr. Sauvik Singha, MDS, is a qualified Maxillofacial Surgeon and Dental Implant Specialist in Bhubaneswar, Odisha. He leads surgical implant care and digital diagnostics at CARE Hospital, Chandrasekharpur, specializing in 3D CBCT flapless implants, bone grafting, and fixed full arch restorations.
      </p>
    ),
  },
  {
    q: "Kouthi Dr. Sauvik Singha nka dental implant consultation paipari?",
    plain:
      "Patients can book a preliminary online consultation via WhatsApp or phone. In-person clinical examinations and 3D CBCT diagnostics take place at CARE Hospital, Chandrasekharpur, Bhubaneswar.",
    a: (
      <p>
        Aapanankara preliminary consultation online WhatsApp (<a className="font-semibold text-primary underline" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{PHONE_DISPLAY}</a>) re karipari. In-person clinical examination, 3D CBCT scan, and surgical procedures are conducted at CARE Hospital, Chandrasekharpur, Bhubaneswar.
      </p>
    ),
  },
  {
    q: "Dr. Sauvik Singha kouthi dental implant surgery karanti?",
    plain:
      "All dental implant surgeries are conducted inside the sterile hospital operating suites of CARE Hospital, Chandrasekharpur, Bhubaneswar.",
    a: (
      <p>
        All implant surgical procedures are performed inside the sterile, hospital-grade surgical suites of CARE Hospital Chandrasekharpur, Bhubaneswar, equipped with complete medical support and advanced digital CBCT imaging.
      </p>
    ),
  },
  {
    q: "What implant procedures does Dr. Sauvik Singha specialize in?",
    plain:
      "Dr. Sauvik Singha specializes in single tooth implants, multiple implant bridges, All-on-4 and All-on-6 full mouth restorations, 3D flapless guided implants, immediate extraction implants, sinus lifts, and bone grafting.",
    a: (
      <p>
        Dr. Sauvik Singha specializes in a complete spectrum of dental implantology, including <a className="font-semibold text-primary underline" href="/single-tooth-dental-implant/">single tooth implants</a>, <a className="font-semibold text-primary underline" href="/multiple-dental-implants/">multiple teeth bridges</a>, <a className="font-semibold text-primary underline" href="/all-on-4-all-on-6-odisha/">All-on-4 & All-on-6 fixed teeth</a>, <a className="font-semibold text-primary underline" href="/full-mouth-dental-implants/">full mouth rehabilitation</a>, <a className="font-semibold text-primary underline" href="/flapless-guided-dental-implants/">flapless keyhole guided surgery</a>, and <a className="font-semibold text-primary underline" href="/bone-grafting-for-dental-implants/">bone grafting</a>.
      </p>
    ),
  },
  {
    q: "How can outstation patients across Odisha consult Dr. Sauvik Singha?",
    plain:
      "Patients from Cuttack, Puri, Berhampur, Sambalpur, Rourkela, Balasore, and other districts can start with an online WhatsApp pre-screening, send past X-rays, and receive a structured treatment visit plan before traveling to Bhubaneswar.",
    a: (
      <p>
        Outstation patients from across Odisha can initiate a free WhatsApp consultation (<a className="font-semibold text-primary underline" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{PHONE_DISPLAY}</a>) by sharing photographs or existing X-rays. Treatment appointments at CARE Hospital Bhubaneswar are coordinated to minimize travel trips.
      </p>
    ),
  },
  {
    q: "Dr. Sauvik Singha nka dental implant treatment cost kete?",
    plain:
      "Dental implant costs depend on the number of implant posts, brand, bone condition, and restoration type. Itemized, transparent cost estimates are provided after initial 3D CBCT diagnostic assessment.",
    a: (
      <p>
        Dental implant cost is determined after a 3D CBCT evaluation of jawbone density. Detailed transparent pricing for single tooth implants, bridges, and full-arch procedures can be reviewed in our <a className="font-semibold text-primary underline" href="/dental-implant-cost-bhubaneswar/">dental implant cost in Bhubaneswar guide</a>.
      </p>
    ),
  },
];

export const Route = createFileRoute("/dr-sauvik-singha")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
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
                { "@type": "ListItem", position: 2, name: "Implant Team", item: `${SITE}/#team` },
                { "@type": "ListItem", position: 3, name: "Dr. Sauvik Singha, MDS", item: PAGE_URL },
              ],
            },
            DOCTOR_SCHEMA,
            {
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
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
  component: DrSauvikSinghaPage,
});

function DrSauvikSinghaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Implant Team", href: "/#team" },
          { label: "Dr. Sauvik Singha, MDS" },
        ]}
      />
      <main className="pb-24 lg:pb-0">
        {/* Hero Section */}
        <section className="border-b bg-surface py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                  <Stethoscope className="h-3.5 w-3.5" /> Maxillofacial Surgeon &amp; Dental Implantologist
                </span>
                <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Dr. Sauvik Singha (MDS)
                </h1>
                <p className="mt-2 text-lg font-semibold text-primary">
                  Trusted Dental Implant Specialist in Bhubaneswar, Odisha
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Dr. Sauvik Singha, MDS, is a leading Maxillofacial Surgeon and Dental Implantologist performing precision 3D CBCT guided keyhole implant placement, bone grafting, and full-mouth rehabilitation at CARE Hospital, Chandrasekharpur, Bhubaneswar.
                </p>

                {/* Verified Profiles Bar */}
                <div className="mt-6 border-y border-border/70 py-4">
                  <span className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Verified Practitioner Profiles &amp; Ratings:
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    <a
                      href={DR_SAUVIK_PROFILES.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-sm"
                    >
                      LinkedIn Profile <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                    <a
                      href={DR_SAUVIK_PROFILES.apollo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-sm"
                    >
                      Apollo 24|7 Verified <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                    <a
                      href={DR_SAUVIK_PROFILES.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-sm"
                    >
                      Google Maps Location <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/#contact"
                    className="cta-gradient shadow-soft rounded-full px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-transform hover:scale-[1.02]"
                  >
                    Book FREE Consultation with Dr. Sauvik
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp Specialist Team
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="card-premium overflow-hidden p-0 shadow-soft">
                  <img
                    src={teamSauvik}
                    alt="Dental implant specialist Dr. Sauvik Singha (MDS) at CARE Hospital Bhubaneswar Odisha"
                    width={768}
                    height={960}
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="p-6 bg-surface">
                    <h2 className="font-display text-lg font-bold text-foreground">Dr. Sauvik Singha, MDS</h2>
                    <p className="text-xs font-medium text-muted-foreground">
                      Maxillofacial Surgeon &amp; Dental Implant Specialist
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>CARE Hospital, Chandrasekharpur, Bhubaneswar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Entity Trust Section */}
        <Section tone="plain">
          <SectionHeading
            title="Verified Professional Credentials & Clinical Background"
            intro="Dr. Sauvik Singha combines advanced surgical qualification with state-of-the-art digital implant technology to provide comfortable, long-lasting tooth replacement."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card-premium p-6">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-base font-bold text-foreground">MDS Specialty Qualification</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Master of Dental Surgery (MDS) in Oral and Maxillofacial Surgery, specializing in jaw surgery, bone augmentation, and implantology.
              </p>
            </div>
            <div className="card-premium p-6">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-base font-bold text-foreground">Hospital Surgical Privilege</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Performs all surgical implant placements inside the sterile, hospital-grade operating suites of CARE Hospital, Bhubaneswar.
              </p>
            </div>
            <div className="card-premium p-6">
              <UserCheck className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-base font-bold text-foreground">Multi-Lingual Consultations</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Provides direct patient consultations in Odia (ଆପଣଙ୍କ ଭାଷାରେ ପରାମର୍ଶ), English, and Hindi for comfortable, transparent understanding.
              </p>
            </div>
            <div className="card-premium p-6">
              <Stethoscope className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-base font-bold text-foreground">3D Digital Guided Surgery</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Utilizes high-precision 3D CBCT scanning and computer-guided keyhole techniques for flapless, minimal-discomfort implant placement.
              </p>
            </div>
          </div>
        </Section>

        {/* Treatment Specializations */}
        <Section tone="soft">
          <SectionHeading
            title="Specialized Dental Implant Treatments by Dr. Sauvik Singha"
            intro="From single tooth restoration to complete full-arch rehabilitation, Dr. Sauvik Singha offers evidence-based implant solutions tailored to your jaw structure."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-premium p-6">
              <h3 className="text-base font-bold text-foreground">Single Tooth Dental Implants</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Replacing missing individual teeth with titanium implant fixtures and natural-looking porcelain or zirconia crowns without grinding healthy adjacent teeth.
              </p>
              <a href="/single-tooth-dental-implant/" className="mt-4 inline-block text-xs font-semibold text-primary">
                Single Tooth Implants Guide →
              </a>
            </div>

            <div className="card-premium p-6">
              <h3 className="text-base font-bold text-foreground">Multiple Teeth &amp; Implant Bridges</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Implant-supported bridges replacing 2 to 5 adjacent missing teeth efficiently, providing fixed chewing stability and preserving jawbone structure.
              </p>
              <a href="/multiple-dental-implants/" className="mt-4 inline-block text-xs font-semibold text-primary">
                Multiple Implants Guide →
              </a>
            </div>

            <div className="card-premium p-6">
              <h3 className="text-base font-bold text-foreground">All-on-4 &amp; All-on-6 Fixed Teeth</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Full arch fixed teeth restoration using 4 or 6 strategically angled implants, restoring full chewing power for denture wearers or missing arches.
              </p>
              <a href="/all-on-4-all-on-6-odisha/" className="mt-4 inline-block text-xs font-semibold text-primary">
                All-on-4 / All-on-6 Guide →
              </a>
            </div>

            <div className="card-premium p-6">
              <h3 className="text-base font-bold text-foreground">Full Mouth Implant Rehabilitation</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Comprehensive dual-arch rebuilds combining fixed implant bridges or snap-on overdentures with 3D CBCT digital bite alignment.
              </p>
              <a href="/full-mouth-dental-implants/" className="mt-4 inline-block text-xs font-semibold text-primary">
                Full Mouth Rehabilitation Guide →
              </a>
            </div>

            <div className="card-premium p-6">
              <h3 className="text-base font-bold text-foreground">3D CBCT Flapless Guided Surgery</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Keyhole implant surgery planned on 3D computer software, minimizing surgical incisions, reducing swelling, and speeding up post-op recovery.
              </p>
              <a href="/flapless-guided-dental-implants/" className="mt-4 inline-block text-xs font-semibold text-primary">
                Guided Implants Guide →
              </a>
            </div>

            <div className="card-premium p-6">
              <h3 className="text-base font-bold text-foreground">Bone Grafting &amp; Sinus Lifts</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Advanced jawbone reconstruction procedures carried out by Maxillofacial Surgeon Dr. Sauvik Singha when natural bone height or width is reduced.
              </p>
              <a href="/bone-grafting-for-dental-implants/" className="mt-4 inline-block text-xs font-semibold text-primary">
                Bone Grafting Guide →
              </a>
            </div>
          </div>
        </Section>

        {/* Why Choose Dr. Sauvik Singha (Bhala Implant Doctor) */}
        <Section tone="plain">
          <SectionHeading
            title="Why Patients Trust Dr. Sauvik Singha for Dental Implants in Odisha"
            intro="Combining compassionate patient care, hospital surgical standards, and transparent fee structures."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Hospital-Grade Sterile Operation Theatre",
                desc: "Unlike small clinic setups, all implant placements are conducted in the sterile operating rooms of CARE Hospital Chandrasekharpur with complete emergency medical back-up.",
              },
              {
                title: "3D CBCT Computer Digital Diagnostics",
                desc: "3D volumetric scanning ensures precise nerve mapping, exact bone density measurement, and accurate sub-millimeter implant positioning.",
              },
              {
                title: "Transparent & Affordable Cost Guidance",
                desc: "Itemized treatment plans with clear pricing are shared after diagnostic scanning. Explore our dental implant cost in Bhubaneswar guide for details.",
              },
              {
                title: "Odia Language Comfort (ଆପଣଙ୍କ ଭାଷାରେ ପରାମର୍ଶ)",
                desc: "Dr. Sauvik Singha and our clinical coordination team converse fluently in Odia, English, and Hindi so you can express your concerns with confidence.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Hospital Location & Outstation Journey */}
        <Section tone="soft">
          <SectionHeading
            title="Hospital Treatment Site & Consultation for Odisha Patients"
            intro="Dr. Sauvik Singha welcomes patients from across Bhubaneswar and all districts of Odisha for specialized implant care."
          />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Patients commonly travel for treatment from {ODISHA_SERVICE_CITIES.join(", ")} and surrounding regions across Odisha. Initial pre-screening consultations can be held online, with in-person examination and surgery conducted at CARE Hospital, Chandrasekharpur, Bhubaneswar.
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

        {/* FAQs */}
        <Section id="faqs" tone="plain">
          <SectionHeading title="Frequently Asked Questions — Dr. Sauvik Singha, MDS" />
          <FAQSection faqs={FAQS} />
        </Section>

        {/* CTA */}
        <Section tone="soft">
          <ImplantCTA
            title="Book a Consultation with Dr. Sauvik Singha (MDS)"
            copy="Speak to Dr. Sauvik Singha and our implant team about your missing teeth, 3D CBCT diagnostic planning, and personalized treatment options."
            primary={{ label: "Book FREE Online Consultation", href: "/#contact" }}
            secondary={{ label: "WhatsApp Specialist Team", href: WHATSAPP_URL, external: true }}
            footnote={`Direct phone consultations available at ${PHONE_DISPLAY} during regular clinic hours.`}
          />
        </Section>

        {/* Related Services */}
        <Section tone="plain">
          <SectionHeading title="Explore Dental Implant Procedures & Guides" />
          <RelatedServices
            items={[
              {
                title: "Dental Implants in Bhubaneswar",
                href: "/dental-implants-bhubaneswar/",
                text: "Complete overview of specialist dental implant treatment in Bhubaneswar.",
              },
              {
                title: "Dental Implant Cost in Bhubaneswar",
                href: "/dental-implant-cost-bhubaneswar/",
                text: "Transparent price breakdowns for single, multiple, and full arch implants.",
              },
              {
                title: CLUSTER.single.title,
                href: CLUSTER.single.href,
                text: CLUSTER.single.text,
              },
              {
                title: CLUSTER.multiple.title,
                href: CLUSTER.multiple.href,
                text: CLUSTER.multiple.text,
              },
              {
                title: CLUSTER.allon.title,
                href: CLUSTER.allon.href,
                text: CLUSTER.allon.text,
              },
              {
                title: CLUSTER.fullmouth.title,
                href: CLUSTER.fullmouth.href,
                text: CLUSTER.fullmouth.text,
              },
            ]}
          />
        </Section>

        {/* Footer Clinical Disclaimer */}
        <Section tone="soft">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card-premium p-6">
              <h2 className="text-lg font-bold text-foreground">Verified External Profiles</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                You can view Dr. Sauvik Singha's verified professional profiles on{" "}
                <a className="font-semibold text-primary underline" href={DR_SAUVIK_PROFILES.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                ,{" "}
                <a className="font-semibold text-primary underline" href={DR_SAUVIK_PROFILES.apollo} target="_blank" rel="noopener noreferrer">
                  Apollo 24|7
                </a>
                , and{" "}
                <a className="font-semibold text-primary underline" href={DR_SAUVIK_PROFILES.googleMaps} target="_blank" rel="noopener noreferrer">
                  Google Maps Location
                </a>
                , or visit the official{" "}
                <a className="font-semibold text-primary underline" href={CARE_HOSPITAL_URL} target="_blank" rel="noopener noreferrer">
                  CARE Hospital Bhubaneswar site
                </a>
                .
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-secondary/50 p-6">
              <h2 className="text-lg font-bold text-foreground">Medical Disclaimer</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Information on this page is for educational purposes. Implant suitability, surgical requirements, and exact pricing depend on individual clinical examination and 3D CBCT diagnostic findings.
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
