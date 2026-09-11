import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  TREATMENT_LOCATION,
  WHATSAPP_URL,
} from "@/lib/site";
import heroClinic from "@/assets/hero-clinic.jpg";
import dentistConsult from "@/assets/dentist-consult.jpg";
import implantDetail from "@/assets/implant-detail.jpg";
import teamSauvik from "@/assets/team-sauvik-real.jpg";
import teamNeha from "@/assets/team-neha-real.jpg";
import teamSubham from "@/assets/team-subham-real.jpg";
import teamMonika from "@/assets/team-monika-real.jpg";
import teamAnu from "@/assets/team-anu-real.jpg";
import teamBarsha from "@/assets/team-barsha-real.jpg";
import careHospital from "@/assets/care-hospital.png.asset.json";
import { Reveal, CountUp } from "@/components/site/Reveal";
import { submitConsultation } from "@/lib/consultation.functions";
import { Button } from "@/components/ui/button";



const TITLE = "Dental Implants in Odisha | Free Online Consultation";
const DESCRIPTION =
  "Explore dental implant options in Odisha. Start with a free online consultation, then receive care at CARE Hospital, Bhubaneswar.";

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
          "@type": "MedicalBusiness",
          name: "OdishaDentalImplants.com",
          description: DESCRIPTION,
          medicalSpecialty: "Dentistry",
          areaServed: "Odisha, India",
          telephone: PHONE_TEL,
          email: EMAIL,
          address: {
            "@type": "PostalAddress",
            streetAddress: "CARE Hospital",
            addressLocality: "Bhubaneswar",
            addressRegion: "Odisha",
            addressCountry: "IN",
          },
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
  },
  {
    icon: Layers,
    title: "Multiple Tooth Implants",
    text: "Implant-supported bridges that rebuild a section of missing teeth with natural contour and full chewing strength.",
  },
  {
    icon: Smile,
    title: "Full Mouth Rehabilitation",
    text: "All-on-4 and All-on-6 protocols for a fixed, permanent set of teeth — planned case by case after clinical assessment.",
  },
  {
    icon: Activity,
    title: "Bone Grafting & Sinus Lift",
    text: "Ridge augmentation for patients previously told they do not have enough bone for implants.",
  },
  {
    icon: Sparkles,
    title: "Zirconia Crowns & Smile Design",
    text: "Metal-free, shade-matched restorations designed digitally before a single tooth is prepared.",
  },
  {
    icon: ShieldCheck,
    title: "Second Opinion Review",
    text: "Already have a treatment plan or quote? Our team reviews your X-ray and explains your options clearly.",
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

const FAQS = [
  {
    q: "Is the online consultation really free?",
    a: "Yes. The first online consultation — case review, specialist call and a preliminary treatment roadmap — is free. You only pay once you decide to begin treatment.",
  },
  {
    q: "What is a Preliminary Treatment Roadmap?",
    a: "It is an indicative outline of the likely options, stages and approximate costing based on the information and X-rays you share online. It is not a final treatment plan — the final plan is confirmed after appropriate clinical examination and diagnostic assessment.",
  },
  {
    q: "How much does a dental implant cost in Odisha?",
    a: "Costs depend on the implant system, bone condition and the type of crown. Your roadmap gives an indicative range, and exact costing is confirmed after clinical examination. We never quote a final price before seeing your case in person.",
  },
  {
    q: "Is implant surgery painful?",
    a: "The procedure is done under local anaesthesia and most patients describe it as comparable to a routine extraction. Mild swelling for two to three days is normal and managed with prescribed medication.",
  },
  {
    q: "How long does the whole treatment take?",
    a: "The implant is placed in a single visit. Osseointegration — the fusing of implant and bone — takes about three to six months, after which the final crown is fitted. Immediate-loading cases can be faster.",
  },
  {
    q: "I was told I don't have enough bone. Can I still get implants?",
    a: "Very often, yes. Bone grafting, ridge splitting and sinus lift procedures make implants possible for many patients who were previously refused treatment. This is one of the most common second opinions we handle.",
  },
  {
    q: "I live outside Bhubaneswar. Can I still be treated?",
    a: "Yes. Patients from any part of Odisha can begin with a free online consultation and are then guided for physical evaluation and treatment at CARE Hospital, Bhubaneswar.",
  },
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
              <ShieldCheck className="h-3.5 w-3.5" /> Powered by i-Smile
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              Dental Implant Care for{" "}
              <span className="text-gradient-brand">Patients Across Odisha</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Start with a free online consultation with an experienced implantologist and receive a
              preliminary treatment roadmap. Your final treatment plan is confirmed after clinical
              examination, with implant treatment at {TREATMENT_LOCATION}.
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
            alt="Modern dental implant treatment room at an i-Smile partner clinic in Odisha"
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
    "Hospital-based implant treatment at CARE Hospital, Bhubaneswar",
    "Global implant systems only",
    "Preliminary roadmap online, final plan after clinical assessment",
    "Post-treatment follow-up included",
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
          eyebrow="Implant Services"
          title="Complete implant care, from one tooth to a full arch"
          text="Every case is reviewed by a qualified implantologist and treated at CARE Hospital, Bhubaneswar."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <article className="card-premium h-full p-7">
                <span className="gradient-brand grid h-12 w-12 place-items-center rounded-2xl text-brand-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}

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
          title="Your care pathway, step by step"
          text="Patients anywhere in Odisha → FREE online consultation → Preliminary Treatment Roadmap → physical clinical assessment → final treatment plan → implant treatment at CARE Hospital, Bhubaneswar → follow-up care."
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
          eyebrow="Implant Team"
          title="The specialists and coordinators behind your care"
          text="A surgical, prosthetic and coordination team that stays with you from your first online consultation through follow-up."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 100}>
              <article className="card-premium zoom-frame h-full overflow-hidden p-0">
                <img
                  src={m.img}
                  alt={`Portrait of ${m.name}, ${m.role}`}
                  width={768}
                  height={960}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                </div>
              </article>
            </Reveal>
          ))}

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
            Treatment Location
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{TREATMENT_LOCATION}</h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            All implant surgery, clinical examination and diagnostic imaging are carried out at CARE
            Hospital, Bhubaneswar — a full hospital environment with operating-theatre standards of
            sterilisation and medical support.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {[
              "Hospital-grade sterilisation and surgical protocols",
              "On-site diagnostic imaging for accurate planning",
              "Medical support available for patients with health conditions",
              "Travel and appointment scheduling arranged by your coordinator",
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
            src={careHospital.url}
            alt="CARE Hospital building in Bhubaneswar, Odisha"
            loading="lazy"
            className="mt-4 aspect-[16/10] w-full rounded-2xl object-cover"
          />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            CARE Hospital
            <br />
            Bhubaneswar, Odisha
          </p>

          <div className="mt-6 space-y-3 text-sm">
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
    "Consultations led by implantologists, never by sales staff",
    "Only globally certified implant systems with documented warranties",
    "Digital planning with CBCT review before any surgery is scheduled",
    "One coordinator stays with you from first call to final crown",
  ];
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal className="grid gap-5 sm:grid-cols-2">
          <div className="zoom-frame shadow-soft rounded-3xl">
            <img
              src={dentistConsult}
              alt="Implantologist reviewing a treatment plan with a patient"
              width={1200}
              height={912}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="zoom-frame shadow-soft mt-0 rounded-3xl sm:mt-10">
            <img
              src={implantDetail}
              alt="Titanium dental implant model showing the implant fixture and ceramic crown"
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
            Clinical judgement first. Everything else follows.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            OdishaDentalImplants.com exists so that patients across the state can get an honest,
            specialist opinion before committing to implant surgery — and then have that treatment
            delivered at {TREATMENT_LOCATION}.
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
          title="Dental Implant Care for Patients Across Odisha"
          text="Patients from any part of Odisha can begin with a free online consultation and are subsequently guided for physical evaluation and treatment at CARE Hospital, Bhubaneswar."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: MessageCircle,
              title: "Start from anywhere",
              text: "Share your concern and X-rays online from any district in Odisha — no travel needed to begin.",
            },
            {
              icon: ClipboardList,
              title: "Get your roadmap",
              text: "Receive a Preliminary Treatment Roadmap explaining likely options, stages and indicative costs.",
            },
            {
              icon: Building2,
              title: "Come in for assessment",
              text: "We guide you to CARE Hospital, Bhubaneswar for clinical examination, final planning and treatment.",
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
      </div>
    </section>
  );
}

function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQs" title="Questions patients ask us most" />
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
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Book your FREE online consultation
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            Share a few details and a coordinator will call you within one working day. You will
            receive a Preliminary Treatment Roadmap — your final treatment plan is confirmed after
            clinical examination and diagnostic assessment.
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
