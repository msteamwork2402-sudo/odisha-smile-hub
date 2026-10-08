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
  TestimonialsSection,
  YouTubeVideoSection,
  type Faq,
} from "@/components/implant/blocks";
import { TESTIMONIALS } from "@/lib/testimonials";
import { Reveal } from "@/components/site/Reveal";
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
  DR_SAUVIK_PROFILES,
  ODISHA_SERVICE_CITIES,
  SITE,
} from "@/lib/implant-cluster";

import { DOCTOR_AFFILIATIONS, DOCTOR_AWARDS, DOCTOR_PROFILE_SCHEMA, DOCTOR_PUBLICATIONS, DOCTOR_QUALIFICATIONS, ISMILE_PROFILE_URL } from "@/lib/dr-sauvik-profile";

import teamSauvik from "@/assets/team-sauvik-real.jpg";
import careHospital from "@/assets/care-hospital.png";

const PAGE_URL = `${SITE}/dr-sauvik-singha/`;
const PAGE_TITLE = "Dr. Sauvik Singha | Implant Surgeon, CARE Bhubaneswar";
const PAGE_DESC =
  "Dr. Sauvik Singha, BDS, MDS, PGDMLS, PGDMLE: implant consultation at CARE Hospital, Bhubaneswar, and preliminary online consultation across Odisha.";

const FAQS: Faq[] = [
  { q: "What qualifications does Dr. Sauvik Singha hold?", plain: "His client-supplied CV lists BDS, MDS in Oral & Maxillofacial Surgery, PGDMLS and PGDMLE, alongside an Advanced Course in Implantology (OSTEEM)." },
  { q: "What are his roles at CARE Hospitals and i-Smile?", plain: "The CV lists Dr. Sauvik Singha as Senior Consultant in the Department of Oral & Maxillofacial Surgery at CARE Hospitals and Director of i-Smile Dental Clinic Chain, both since 2019." },
  { q: "Where does implant treatment arranged through this website take place?", plain: "In-person assessment and implant treatment take place at CARE Hospital, Chandrasekharpur, Bhubaneswar. Patients across Odisha can begin with a preliminary online consultation." },
  { q: "Which implant treatment options can I discuss?", plain: "His documented areas of expertise include implantology and full-mouth rehabilitation. Patients can discuss single-tooth replacement, implant-supported bridges and full-arch options. Guided placement, immediate placement or bone augmentation require individual clinical assessment and confirmation." },
  { q: "Can an online consultation confirm my final implant plan or cost?", plain: "No. An online consultation offers preliminary guidance and helps plan an in-person visit. A final treatment plan and individual estimate depend on clinical examination and diagnostic imaging when indicated." },
  { q: "Does immediate loading suit every patient?", plain: "No. Immediate loading is a topic listed among his publications, not a promise of same-day teeth. Suitability depends on implant stability, bone condition, bite and other clinical factors." },
].map((item) => ({ ...item, a: <p>{item.plain}</p> }));

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
                  Dr. Sauvik Singha
                </h1>
                <p className="mt-2 text-lg font-semibold text-primary">
                  BDS, MDS (Oral &amp; Maxillofacial Surgery), PGDMLS, PGDMLE
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Dr. Sauvik Singha is an Oral &amp; Maxillofacial Surgeon with expertise in implantology and full-mouth rehabilitation. He is Senior Consultant in the Department of Oral &amp; Maxillofacial Surgery at CARE Hospitals and Director of i-Smile Dental Clinic Chain. For patients using OdishaDentalImplants.com, in-person implant assessment and treatment take place at CARE Hospital, Chandrasekharpur, Bhubaneswar. Patients across Odisha can begin with an online consultation; the final treatment plan is confirmed after clinical examination and any necessary imaging.
                </p>

                {/* Verified Profiles Bar */}
                <div className="mt-6 border-y border-border/70 py-4">
                  <span className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Professional Profiles &amp; Location:
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
                      Apollo 24|7 Profile <ExternalLink className="h-3 w-3" aria-hidden="true" />
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
                    alt="Portrait of Dr. Sauvik Singha, Oral and Maxillofacial Surgeon and implant consultant in Bhubaneswar"
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
            title="Qualifications, Implantology Expertise & Professional Roles"
            intro="His client-supplied CV documents surgical qualifications, implantology training, clinical leadership and academic experience."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card-premium p-6">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-base font-bold text-foreground">BDS & MDS Qualifications</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                BDS — KIIT University (2014); MDS in Oral &amp; Maxillofacial Surgery — MP State Medical University (2019). Both qualifications are listed as First Class, Order of Merit in his CV.
              </p>
            </div>
            <div className="card-premium p-6">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-base font-bold text-foreground">Senior Consultant — CARE Hospitals</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Senior Consultant, Department of Oral &amp; Maxillofacial Surgery, CARE Hospitals (2019–present). This website coordinates implant treatment at CARE Hospital, Chandrasekharpur, Bhubaneswar.
              </p>
            </div>
            <div className="card-premium p-6">
              <UserCheck className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-base font-bold text-foreground">Director — i-Smile Dental Clinic Chain</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Director of i-Smile Dental Clinic Chain (2019–present), with clinical administration experience. This role is separate from the CARE Hospital treatment location provided on this website.
              </p>
            </div>
            <div className="card-premium p-6">
              <Stethoscope className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-base font-bold text-foreground">Implantology & Medico-Legal Training</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Advanced Course in Implantology (OSTEEM), PGDMLS — Symbiosis, Pune (2020), and PGDMLE — National Law University, Bangalore (2022), as listed in his CV.
              </p>
            </div>
          </div>
        </Section>

        {/* Doctor Video Section */}
        <Section tone="soft">
          <Reveal>
            <YouTubeVideoSection
              title="Dr. Sauvik Singha — Profile & Clinical Overview"
              intro="Watch Dr. Sauvik Singha discuss specialist dental implant care and surgical evaluation at CARE Hospital, Bhubaneswar."
              videoId="V-qGvwFA-Xw"
              videoTitle="Dr. Sauvik Singha Profile & Clinical Overview - CARE Hospital Bhubaneswar"
              caption={
                <p>
                  In this video, Dr. Sauvik Singha (BDS, MDS in Oral &amp; Maxillofacial Surgery), Senior Consultant at CARE Hospitals and Director of i-Smile Dental Clinic Chain, introduces specialist dental implant care and treatment planning in Bhubaneswar. Learn how clinical evaluation, diagnostic imaging, and tailored treatment pathways are coordinated for patients across Odisha.
                </p>
              }
              links={[
                { label: "Dental Implants in Bhubaneswar", href: "/dental-implants-bhubaneswar/" },
                { label: "Full-Mouth Dental Implants", href: "/full-mouth-dental-implants/" },
                { label: "Dental Implant Cost Guide", href: "/dental-implant-cost-bhubaneswar/" },
              ]}
            />
          </Reveal>
        </Section>

        <Section tone="plain">
          <SectionHeading title="Academic Experience, Publications & Professional Affiliations" intro="Selected professional information from Dr. Singha's client-supplied CV." />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            His CV also lists Senior Lecturer at Kalinga Institute of Dental Sciences (2024–present) and Visiting Consultant in Maxillofacial Surgery at Neelachal Hospitals (2019–present). His clinical interests include maxillofacial trauma, minor oral surgery, maxillofacial pathology and full-mouth rehabilitation. Learn more about <a className="font-semibold text-primary underline" href={ISMILE_PROFILE_URL} target="_blank" rel="noopener noreferrer">i-Smile Dental Clinic</a>; implant treatment coordinated here remains at CARE Hospital, Bhubaneswar.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-foreground">Selected Publications</h3>
              <p className="mt-2 text-sm text-muted-foreground">The CV reports more than ten national and international publications. Titles and journal details below are reproduced as supplied.</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {DOCTOR_PUBLICATIONS.map((publication) => <li key={publication.title}><span className="font-semibold text-foreground">{publication.title}</span> — {publication.journal}, {publication.year}.</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Awards & Recognition</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {DOCTOR_AWARDS.map((award) => <li key={award}>{award}</li>)}
              </ul>
              <h3 className="mt-8 text-lg font-bold text-foreground">Professional Affiliations</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{DOCTOR_AFFILIATIONS.join(", ")} — as listed in the CV.</p>
              <h3 className="mt-8 text-lg font-bold text-foreground">Qualifications</h3>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {DOCTOR_QUALIFICATIONS.map((qualification) => <li key={qualification.name}><span className="font-semibold text-foreground">{qualification.name}</span> — {qualification.detail}.</li>)}
              </ul>
            </div>
          </div>
        </Section>

        {/* Treatment Specializations */}
        <Section tone="soft">
          <SectionHeading
            title="Dental Implant Services & Treatment Planning"
            intro="His documented expertise includes implantology and full-mouth rehabilitation. Explore the implant services described on this website; the approach suitable for you depends on examination, bone condition, bite and medical history."
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
                Implant-supported bridges can replace several missing teeth. The number and positions of implants depend on the span, available bone and bite forces.
              </p>
              <a href="/multiple-dental-implants/" className="mt-4 inline-block text-xs font-semibold text-primary">
                Multiple Implants Guide →
              </a>
            </div>

            <div className="card-premium p-6">
              <h3 className="text-base font-bold text-foreground">All-on-4 &amp; All-on-6 Fixed Teeth</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Full-arch fixed tooth replacement may use four or six implants in selected patients. Suitability, loading time and restoration design require individual assessment.
              </p>
              <a href="/all-on-4-all-on-6-odisha/" className="mt-4 inline-block text-xs font-semibold text-primary">
                All-on-4 / All-on-6 Guide →
              </a>
            </div>

            <div className="card-premium p-6">
              <h3 className="text-base font-bold text-foreground">Full Mouth Implant Rehabilitation</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Full-mouth rehabilitation involves planning tooth replacement for extensive tooth loss. Fixed bridges or implant-supported removable options may be discussed after assessment.
              </p>
              <a href="/full-mouth-dental-implants/" className="mt-4 inline-block text-xs font-semibold text-primary">
                Full Mouth Rehabilitation Guide →
              </a>
            </div>

            <div className="card-premium p-6">
              <h3 className="text-base font-bold text-foreground">3D CBCT Flapless Guided Surgery</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Digital imaging and guides may assist implant planning when indicated. A flapless approach is not appropriate for every patient and does not guarantee a particular recovery time.
              </p>
              <a href="/flapless-guided-dental-implants/" className="mt-4 inline-block text-xs font-semibold text-primary">
                Guided Implants Guide →
              </a>
            </div>

            <div className="card-premium p-6">
              <h3 className="text-base font-bold text-foreground">Bone Grafting &amp; Sinus Lifts</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Bone augmentation or sinus-lift planning may be considered when available bone is insufficient. The need, technique and staging are determined through clinical assessment.
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
            title="Planning Dental Implant Care with Dr. Sauvik Singha"
            intro="Discuss your clinical findings, suitable alternatives, treatment stages and follow-up before deciding on implant care."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "CARE Hospital Treatment Location",
                desc: "In-person clinical assessment and implant treatment arranged through this website take place at CARE Hospital, Chandrasekharpur, Bhubaneswar.",
              },
              {
                title: "Imaging When Clinically Indicated",
                desc: "Imaging, including CBCT when indicated, helps evaluate bone and nearby anatomical structures. It informs planning but cannot guarantee a surgical outcome.",
              },
              {
                title: "Individual Cost Guidance",
                desc: "Request an itemized estimate after clinical assessment. Ask what is included for the implant, restoration, preparatory treatment and follow-up.",
              },
              {
                title: "Preliminary Online Consultation Across Odisha",
                desc: "Patients across Odisha can share concerns and existing reports online before travelling to Bhubaneswar. An online discussion does not replace the in-person examination.",
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

        {/* Patient Testimonials Section */}
        <Section tone="soft">
          <TestimonialsSection
            title="What Patients Say About Dr. Sauvik Singha & Team"
            intro="Genuine patient feedback regarding clinical treatment, guidance, and post-procedure care."
            testimonials={TESTIMONIALS.filter((t) =>
              ["sucharita-c", "bhaswati-ghosh", "komalprit-kaur", "rajashree-nayak"].includes(t.id)
            )}
          />
        </Section>

        {/* Hospital Location & Outstation Journey */}
        <Section tone="soft">
          <SectionHeading
            title="Hospital Treatment Site & Consultation for Odisha Patients"
            intro="Dr. Sauvik Singha welcomes patients from across Bhubaneswar and all districts of Odisha for specialized implant care."
          />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Patients from {ODISHA_SERVICE_CITIES.join(", ")} and other districts of Odisha can begin with a preliminary online consultation. In-person examination and treatment take place at CARE Hospital, Chandrasekharpur, Bhubaneswar. Online consultation does not imply a treatment branch in another city.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Treatment address: {TREATMENT_ADDRESS}. Explore <a className="font-semibold text-primary underline" href="/dental-implants-bhubaneswar/">dental implants in Bhubaneswar</a> or our <a className="font-semibold text-primary underline" href="/dental-implant-cost-bhubaneswar/">implant cost guide</a>, and <a className="font-semibold text-primary underline" href="/#contact">request an online consultation</a> before arranging your visit.
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
            copy="Discuss missing teeth, implant suitability, alternatives and treatment stages with Dr. Sauvik Singha and the team. Begin online across Odisha; attend CARE Hospital, Bhubaneswar, for clinical examination."
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
                text: "Understand the factors affecting an individual implant treatment estimate.",
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
              <h2 className="text-lg font-bold text-foreground">Professional References</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                You can view Dr. Sauvik Singha's professional profiles on{" "}
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
                Information on this page is for educational purposes. Implant suitability, surgical requirements and pricing depend on individual clinical examination and imaging when indicated. Qualifications, roles, awards and publication descriptions on this page are drawn from the client-supplied CV.
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
