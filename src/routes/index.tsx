import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import {
  ShieldCheck,
  Stethoscope,
  CalendarCheck,
  ClipboardList,
  Smile,
  Layers,
  Activity,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Star,
  MessageCircle,
  Phone,
  MapPin,
  Building2,
  HeartPulse,
  ScanLine,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  CARE_HOSPITAL_MAPS_URL,
  CONSULTATION_HOURS,
  TREATMENT_ADDRESS,
  TREATMENT_LOCATION,
  WHATSAPP_URL,
} from "@/lib/site";
import { DOCTOR_SCHEMA, DR_SAUVIK_PROFILES } from "@/lib/implant-cluster";
import heroClinic from "@/assets/hero-clinic.jpg";
import dentistConsult from "@/assets/dentist-consult.jpg";
import implantDetail from "@/assets/implant-detail.jpg";
import teamSauvik from "@/assets/team-sauvik-real.jpg";
import teamNeha from "@/assets/team-neha-real.jpg";
import teamSubham from "@/assets/team-subham-real.jpg";
import teamMonika from "@/assets/team-monika-real.jpg";
import teamAnu from "@/assets/team-anu-real.jpg";
import teamBarsha from "@/assets/team-barsha-real.jpg";
import careHospital from "@/assets/care-hospital.png";
import { Reveal, CountUp } from "@/components/site/Reveal";
import { submitConsultation } from "@/lib/consultation.functions";
import { Button } from "@/components/ui/button";

const TITLE = "Dental Implants in Bhubaneswar | Dental Implant Specialist Care";
const DESCRIPTION =
  "Consult an experienced dental implant specialist near me in Bhubaneswar. Trusted & transparent implant care for single tooth to full mouth at CARE Hospital.";

const FAQS = [
  {
    q: "How do I find an experienced dental implant specialist near me in Bhubaneswar?",
    a: "You can consult our team of qualified MDS implant specialists (Maxillofacial Surgeon & Prosthodontist) directly at CARE Hospital, Chandrasekharpur, Bhubaneswar. You can start with a free online consultation from home before visiting the clinic in person.",
  },
  {
    q: "Can I discuss my implant treatment in Odia or English?",
    a: "Yes! (ହଁ, ଆପଣ ଓଡ଼ିଆରେ ପରାମର୍ଶ କରିପାରିବେ). Our specialists and patient coordinators speak fluent Odia, English, and Hindi. You can comfortably explain your dental issues, ask questions, and understand your treatment plan in your preferred language.",
  },
  {
    q: "Are dental implants in Bhubaneswar affordable and long-lasting?",
    a: "Yes. We offer transparent, tiered implant treatment options using certified titanium and zirconia systems suited to different clinical needs and budgets. During your preliminary consultation, we provide an indicative cost range without hidden charges, ensuring affordable, hospital-grade care.",
  },
  {
    q: "Is the online consultation really free?",
    a: "Yes. The initial online consultation — including case review by an implant specialist, phone discussion in Odia/English, and a preliminary treatment roadmap — is completely free with no obligation to proceed.",
  },
  {
    q: "What is a Preliminary Treatment Roadmap?",
    a: "It is an indicative outline of your treatment options, estimated timeline, and price range based on the details or dental X-rays you share online. Your final treatment plan is confirmed after physical clinical examination and diagnostic 3D CBCT scanning.",
  },
  {
    q: "How much does a dental implant cost in Bhubaneswar?",
    a: "Dental implant costs vary based on the choice of implant brand, crown material (metal-ceramic vs. zirconia), and whether additional procedures like bone grafting or sinus lifts are required. You can review transparent pricing details on our dental implant cost guide or receive an estimate during consultation.",
  },
  {
    q: "Is implant surgery painful?",
    a: "Implant placement is performed under local anesthesia in a sterile hospital operating suite, making it virtually painless. Post-operative discomfort is generally mild—similar to a minor extraction—and easily managed with standard prescribed medication.",
  },
  {
    q: "I was told I don't have enough bone. Can I still get implants?",
    a: "In most cases, yes. Advanced bone grafting, ridge augmentation, and sinus lift techniques allow us to rebuild bone structure so implants can be safely placed. We frequently review second opinions for patients previously told they weren't candidates.",
  },
  {
    q: "I live outside Bhubaneswar in Odisha. How does consultation work?",
    a: "Patients from Cuttack, Puri, Sambalpur, Rourkela, Berhampur, and other districts across Odisha can send their details online. We provide a preliminary roadmap and guide your travel and physical appointment at CARE Hospital, Bhubaneswar for maximum convenience.",
  },
];

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  component: Home,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalBusiness",
              "@id": "https://odishadentalimplants.com/#organization",
              name: "OdishaDentalImplants.com - Dental Implant Center",
              description: DESCRIPTION,
              medicalSpecialty: ["Dentistry", "Implantology", "Oral and Maxillofacial Surgery"],
              areaServed: ["Bhubaneswar", "Odisha", "India"],
              telephone: PHONE_TEL,
              email: EMAIL,
              address: {
                "@type": "PostalAddress",
                streetAddress: `CARE Hospital, ${TREATMENT_ADDRESS}`,
                addressLocality: "Bhubaneswar",
                addressRegion: "Odisha",
                postalCode: "751016",
                addressCountry: "IN",
              },
            },
            DOCTOR_SCHEMA,
            {
              "@type": "FAQPage",
              mainEntity: FAQS.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            },
          ],
        }),
      },
    ],
  }),
});

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Single Tooth Implant",
    text: "A titanium root and custom ceramic crown that restores one missing tooth without touching the neighbouring teeth.",
    href: "/single-tooth-dental-implant/" as const,
  },
  {
    icon: Layers,
    title: "Multiple Tooth Implants",
    text: "Implant-supported bridges that rebuild a section of missing teeth with natural contour and full chewing strength.",
    href: "/multiple-dental-implants/" as const,
  },
  {
    icon: Smile,
    title: "Full Mouth Rehabilitation",
    text: "All-on-4 and All-on-6 protocols for a fixed, permanent set of teeth — planned case by case after clinical assessment.",
    href: "/full-mouth-dental-implants/" as const,
  },
  {
    icon: Activity,
    title: "Bone Grafting & Sinus Lift",
    text: "Ridge augmentation for patients previously told they do not have enough bone for implants.",
    href: "/bone-grafting-for-dental-implants/" as const,
    secondaryLink: { label: "Sinus lift", href: "/sinus-lift-dental-implants/" as const },
  },
  {
    icon: Sparkles,
    title: "Zirconia Crowns & Smile Design",
    text: "Metal-free, shade-matched restorations designed digitally before a single tooth is prepared.",
    href: "/zirconia-crowns-smile-design/" as const,
  },
  {
    icon: ShieldCheck,
    title: "Second Opinion Review",
    text: "Already have a treatment plan or quote? Our team reviews your X-ray and explains your options clearly.",
    href: "/dental-implant-second-opinion/" as const,
  },
];

const JOURNEY = [
  {
    icon: ClipboardList,
    title: "FREE online consultation",
    text: "Patients anywhere in Odisha share their concern and upload an OPG or dental X-ray if available.",
  },
  {
    icon: ScanLine,
    title: "Preliminary Treatment Roadmap",
    text: "Our specialists prepare an indicative roadmap of possible options, stages and approximate costing.",
  },
  {
    icon: Stethoscope,
    title: "Physical clinical assessment",
    text: "You visit us for clinical examination and diagnostic imaging — the step that confirms what is possible.",
  },
  {
    icon: CheckCircle2,
    title: "Final treatment plan",
    text: "The final treatment plan is confirmed only after appropriate clinical examination and diagnostic assessment.",
  },
  {
    icon: Building2,
    title: `Implant treatment at CARE Hospital`,
    text: "Your implant procedure is carried out at CARE Hospital, Bhubaneswar, Odisha in a controlled hospital setting.",
  },
  {
    icon: HeartPulse,
    title: "Follow-up care",
    text: "Scheduled reviews after every stage, with your coordinator reachable on call and WhatsApp.",
  },
];

const TEAM = [
  {
    name: "Dr. Sauvik Singha, MDS",
    role: "Maxillofacial Surgeon & Implant Specialist",
    img: teamSauvik,
  },
  {
    name: "Dr. Neha Mohanty, MDS",
    role: "Prosthodontist & Implant Specialist",
    img: teamNeha,
  },
  {
    name: "Dr. Subham Kumar Swain, BDS",
    role: "Chief Dental Surgeon",
    img: teamSubham,
  },
  {
    name: "Dr. Monika Salesh, BDS",
    role: "Chief Dental Surgeon",
    img: teamMonika,
  },
  { name: "Ms. Anu", role: "Clinical Coordinator", img: teamAnu },
  { name: "Ms. Barsha", role: "Clinic Coordinator", img: teamBarsha },
];



function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Journey />
        <Team />
        <Location />
        <WhyUs />
        <AcrossOdisha />
        <Faqs />
        <Contact />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="gradient-soft relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> Powered by i-Smile | Odia &amp; English Support
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              Dental Implants in Bhubaneswar:{" "}
              <span className="text-gradient-brand">Specialist Care Across Odisha</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Looking for a trusted <strong>dental implant specialist near me</strong> in Bhubaneswar?
              Consult qualified MDS surgeons for transparent and affordable tooth replacement.
              Get a free online preliminary roadmap — with consultation available in <strong>Odia, English, and Hindi</strong> — followed by hospital-grade care at {TREATMENT_LOCATION}.
            </p>
          </Reveal>
          <Reveal delay={270}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="cta-gradient shadow-lift rounded-full px-7 py-3.5 text-sm font-semibold text-brand-foreground"
              >
                Book FREE Online Consultation
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pulse-ring inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp Us
              </a>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              <div>
                <dt className="font-display text-2xl font-bold text-primary">
                  <CountUp to={2500} suffix="+" />
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">Cases reviewed</dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-bold text-primary">Statewide</dt>
                <dd className="mt-1 text-xs text-muted-foreground">Patients across Odisha</dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-bold text-primary">
                  <CountUp to={20} suffix="+ yrs" />
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">Combined experience</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative">
          <img
            src={heroClinic}
            alt="Modern dental implant treatment suite and 3D CBCT diagnostic room at CARE Hospital Bhubaneswar"
            width={1408}
            height={1008}
            className="shadow-lift w-full rounded-4xl object-cover"
          />
          <div className="card-premium absolute -bottom-6 left-4 hidden max-w-[15rem] p-5 sm:block">
            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-2 text-sm font-medium leading-snug">
              “Explained everything clearly before I committed to anything.”
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Patient, Cuttack</p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "Hospital-grade implant care at CARE Hospital, Bhubaneswar",
    "Certified global titanium & zirconia implant systems",
    "Transparent & affordable options with clear cost roadmaps",
    "Free online consultation in Odia, English & Hindi",
  ];
  return (
    <section className="border-y bg-background">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item} delay={i * 80}>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm font-medium text-muted-foreground">{item}</p>
            </div>
          </Reveal>
        ))}

      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Specialist Services"
          title="Specialist Dental Implant Services in Bhubaneswar"
          text="From single tooth restoration to full-arch rehabilitation, receive trusted implant care led by MDS specialists at CARE Hospital, Bhubaneswar."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <article className="card-premium relative h-full p-7 transition-transform duration-300 hover:-translate-y-1 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary">
                <span className="gradient-brand grid h-12 w-12 place-items-center rounded-2xl text-brand-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">
                  <Link
                    to={s.href}
                    className="after:absolute after:inset-0 focus-visible:outline-none"
                  >
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View treatment <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {s.secondaryLink ? (
                    <Link
                      to={s.secondaryLink.href}
                      className="relative z-10 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {s.secondaryLink.label}
                    </Link>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border/80 bg-secondary/40 p-6 text-center">
          <p className="text-sm text-muted-foreground sm:text-base">
            Looking for transparent cost details? Read our guide on{" "}
            <Link
              to="/dental-implant-cost-bhubaneswar/"
              className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Dental Implant Cost in Bhubaneswar
            </Link>{" "}
            or compare options with our{" "}
            <Link
              to="/implants-vs-bridge-vs-denture/"
              className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Implants vs Bridge vs Denture Comparison
            </Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="how-it-works" className="gradient-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="How Your Dental Implant Treatment Works: Step-by-Step Care Pathway"
          text="Free online consultation in Odia/English → Preliminary Treatment Roadmap → clinical assessment & 3D CBCT scan → personalized treatment plan → hospital-grade implant placement at CARE Hospital, Bhubaneswar."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {JOURNEY.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 110}>
              <article className="card-premium relative h-full p-7">
                <span className="text-sm font-bold text-primary/40">0{i + 1}</span>
                <span className="mt-4 grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}

        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted-foreground">
          The online stage provides a Preliminary Treatment Roadmap only. The final treatment plan is
          confirmed after appropriate clinical examination and diagnostic assessment.
        </p>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Specialist Team"
          title="Meet Our Experienced Dental Implant Specialists in Bhubaneswar"
          text="A surgical, prosthetic, and clinical coordination team providing trusted care in Odia, English, and Hindi from initial consultation through post-treatment recovery."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => {
            const isSauvik = m.name.includes("Sauvik");

            return (
              <Reveal key={m.name} delay={(i % 3) * 100}>
                <article className="card-premium zoom-frame h-full overflow-hidden p-0">
                  {isSauvik ? (
                    <Link to="/dr-sauvik-singha/" aria-label={`View profile of ${m.name}`}>
                      <img
                        src={m.img}
                        alt={`${m.name} - Dental Implant Specialist in Bhubaneswar (${m.role})`}
                        width={768}
                        height={960}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                  ) : (
                    <img
                      src={m.img}
                      alt={`${m.name} - Dental Implant Specialist in Bhubaneswar (${m.role})`}
                      width={768}
                      height={960}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">
                      {isSauvik ? (
                        <Link to="/dr-sauvik-singha/" className="transition-colors hover:text-primary">
                          {m.name}
                        </Link>
                      ) : (
                        m.name
                      )}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>

                    {isSauvik && (
                      <div className="mt-4 border-t border-border/80 pt-3">
                        <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Verified Profiles &amp; Location:
                        </span>
                        <div className="mt-2 flex flex-wrap gap-2 text-xs">
                          <Link
                            to="/dr-sauvik-singha/"
                            className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
                          >
                            Doctor Profile →
                          </Link>
                          <a
                            href={DR_SAUVIK_PROFILES.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground hover:border-primary/50 hover:text-primary"
                          >
                            LinkedIn <ExternalLink className="h-3 w-3" />
                          </a>
                          <a
                            href={DR_SAUVIK_PROFILES.apollo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground hover:border-primary/50 hover:text-primary"
                          >
                            Apollo 24|7 <ExternalLink className="h-3 w-3" />
                          </a>
                          <a
                            href={DR_SAUVIK_PROFILES.googleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground hover:border-primary/50 hover:text-primary"
                          >
                            Google Maps <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="gradient-soft py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Treatment Center Near You
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Trusted Dental Implant Facility at CARE Hospital, Bhubaneswar
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            All dental implant procedures, clinical examinations, and 3D CBCT diagnostic imaging are conducted at CARE
            Hospital in Chandrasekharpur, Bhubaneswar — offering maximum patient safety, hospital operating-theatre sterilisation standards, and full medical support.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {[
              "Hospital-grade sterilisation and surgical operating suites",
              "On-site 3D CBCT diagnostic imaging for high precision",
              "Medical support available for patients with complex conditions",
              "Appointment scheduling & Odia/English guidance by your coordinator",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="cta-gradient shadow-soft rounded-full px-6 py-3 text-sm font-semibold text-brand-foreground"
            >
              Book FREE Online Consultation
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp Us
            </a>
          </div>
        </div>
        <div className="card-premium p-8">
          <span className="gradient-brand grid h-12 w-12 place-items-center rounded-2xl text-brand-foreground">
            <MapPin className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-lg font-semibold">Where you are treated</h3>
          <img
            src={careHospital}
            alt="CARE Hospital Chandrasekharpur building - Premier center for dental implants in Bhubaneswar"
            loading="lazy"
            className="mt-4 aspect-[16/10] w-full rounded-2xl object-cover"
          />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            CARE Hospital
            <br />
            {TREATMENT_ADDRESS}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Dental consultation hours:</strong> {CONSULTATION_HOURS}
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <a
              href={CARE_HOSPITAL_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-medium hover:text-primary"
            >
              <MapPin className="h-4 w-4 text-primary" /> View on Google Maps
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-3 font-medium hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-primary">
              <Sparkles className="h-4 w-4 text-primary" /> {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    "Consultations led directly by MDS implant specialists, never by sales reps",
    "Certified global titanium & zirconia implant systems with clear warranties",
    "Digital 3D CBCT scan review before any treatment plan is finalized",
    "Dedicated coordinator for Odia, English, and Hindi speaking patients",
  ];
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal className="grid gap-5 sm:grid-cols-2">
          <div className="zoom-frame shadow-soft rounded-3xl">
            <img
              src={dentistConsult}
              alt="Dental implant specialist reviewing a 3D CBCT scan with a patient in Bhubaneswar"
              width={1200}
              height={912}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="zoom-frame shadow-soft mt-0 rounded-3xl sm:mt-10">
            <img
              src={implantDetail}
              alt="Precision titanium dental implant fixture and ceramic crown model"
              width={1200}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Why Patients Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Why Patients Choose Our Dental Implant Specialists in Bhubaneswar
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            OdishaDentalImplants.com connects patients across Bhubaneswar and Odisha with trusted,
            specialist advice before committing to tooth replacement surgery — providing transparent guidance and hospital-grade care at {TREATMENT_LOCATION}.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  );
}

function AcrossOdisha() {
  return (
    <section id="odisha" className="gradient-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Across Odisha"
          title="Dental Implant Treatment & Consultation for Patients Across Odisha"
          text="Patients from any part of Odisha can start with a free online consultation in Odia or English, followed by physical examination and treatment at CARE Hospital, Bhubaneswar."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: MessageCircle,
              title: "Start from anywhere in Odisha",
              text: "Share your concerns and X-rays online in Odia, English, or Hindi from any district — no initial travel required.",
            },
            {
              icon: ClipboardList,
              title: "Transparent treatment roadmap",
              text: "Receive a Preliminary Treatment Roadmap explaining likely implant options, timelines, and clear indicative costs.",
            },
            {
              icon: Building2,
              title: "Hospital clinical assessment",
              text: "We guide you to CARE Hospital, Chandrasekharpur, Bhubaneswar for 3D CBCT scanning, final planning, and surgical care.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 110}>
              <article className="card-premium h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border/80 bg-background/80 p-8 shadow-soft">
          <h3 className="text-center text-lg font-semibold">
            Dental Implant Locations &amp; Service Areas in Bhubaneswar
          </h3>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Searching for a dental implant specialist near me? Select your locality or city for tailored information:
          </p>
          
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
            <Link to="/dental-implants-bhubaneswar/" className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
              Bhubaneswar Central
            </Link>
            <Link to="/dental-implants-chandrasekharpur/" className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
              Chandrasekharpur
            </Link>
            <Link to="/dental-implants-patia/" className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
              Patia
            </Link>
            <Link to="/dental-implants-nayapalli/" className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
              Nayapalli
            </Link>
            <Link to="/dental-implants-jayadev-vihar/" className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
              Jayadev Vihar
            </Link>
            <Link to="/dental-implants-saheed-nagar/" className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
              Saheed Nagar
            </Link>
            <Link to="/dental-implants-kalinga-nagar/" className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
              Kalinga Nagar
            </Link>
            <Link to="/dental-implants-kharavela-nagar/" className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
              Kharavela Nagar
            </Link>
            <Link to="/dental-implants-pokhariput/" className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
              Pokhariput
            </Link>
            <Link to="/dental-implants-dumduma/" className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
              Dumduma
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
            <span className="mr-1 self-center font-medium text-muted-foreground">Other Districts:</span>
            <Link to="/dental-implants-cuttack/" className="rounded-full border border-border bg-background px-3 py-1 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              Cuttack
            </Link>
            <Link to="/dental-implants-puri/" className="rounded-full border border-border bg-background px-3 py-1 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              Puri
            </Link>
            <Link to="/dental-implants-berhampur/" className="rounded-full border border-border bg-background px-3 py-1 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              Berhampur
            </Link>
            <Link to="/dental-implants-sambalpur/" className="rounded-full border border-border bg-background px-3 py-1 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              Sambalpur
            </Link>
            <Link to="/dental-implants-rourkela/" className="rounded-full border border-border bg-background px-3 py-1 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              Rourkela
            </Link>
            <Link to="/dental-implants-balasore/" className="rounded-full border border-border bg-background px-3 py-1 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              Balasore
            </Link>
            <Link to="/dental-implants-angul/" className="rounded-full border border-border bg-background px-3 py-1 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              Angul
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions About Dental Implants in Bhubaneswar" />
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-3xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold sm:text-base">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="faq-answer px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const sendConsultation = useServerFn(submitConsultation);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await sendConsultation({
        data: {
          name: String(formData.get("name") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          city: String(formData.get("city") ?? ""),
          message: String(formData.get("message") ?? ""),
        },
      });
      form.reset();
      setSent(true);
    } catch {
      setSubmitError(
        "Your request could not be sent. Please try again, call us, or contact us on WhatsApp.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="gradient-soft py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Book a Free Consultation with a Dental Implant Specialist
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            Connect with an experienced <strong>dental implant specialist near me</strong> in Bhubaneswar.
            Share a few details and our patient coordinator will reach out in <strong>Odia, English, or Hindi</strong> within one working day to discuss your preliminary roadmap.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {[
              "No cost, no obligation to proceed",
              "Upload an OPG or X-ray if you already have one",
              "Available in Odia, Hindi and English",
              `Treatment location: ${TREATMENT_LOCATION}`,
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4 text-primary" /> {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp Us
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card-premium p-7 sm:p-9">
          {sent ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Request received</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you. A patient coordinator will contact you within one working day on{" "}
                {PHONE_DISPLAY}.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <Field label="Full name" id="name">
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/25"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Mobile number" id="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/25"
                  placeholder="+91"
                />
              </Field>
              <Field label="Your city or district in Odisha" id="city">
                <input
                  id="city"
                  name="city"
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/25"
                  placeholder="e.g. Sambalpur"
                />
              </Field>
              <Field label="What would you like help with?" id="message">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/25"
                  placeholder="e.g. Missing two lower molars, considering implants"
                />
              </Field>
              <Button
                type="submit"
                disabled={submitting}
                className="cta-gradient shadow-soft h-auto w-full rounded-full px-6 py-3.5 text-sm font-semibold text-brand-foreground"
              >
                {submitting ? "Sending request…" : "Book FREE Online Consultation"}
              </Button>
              {submitError && (
                <p role="alert" className="text-center text-sm font-medium text-destructive">
                  {submitError}
                </p>
              )}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp Us
              </a>
              <p className="text-center text-xs text-muted-foreground">
                By submitting you agree to be contacted about your enquiry.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}
