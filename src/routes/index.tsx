import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroClinic from "@/assets/hero-clinic.jpg";
import dentistConsult from "@/assets/dentist-consult.jpg";
import implantDetail from "@/assets/implant-detail.jpg";

const TITLE = "Dental Implants in Odisha | Free Online Consultation — i-Smile";
const DESCRIPTION =
  "OdishaDentalImplants.com, powered by i-Smile, connects patients across Odisha with experienced implantologists. Book a free online dental implant consultation today.";

export const Route = createFileRoute("/")({
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
          telephone: "+91-99370-00000",
          email: "care@odishadentalimplants.com",
          address: {
            "@type": "PostalAddress",
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
    text: "All-on-4 and All-on-6 protocols for a fixed, permanent set of teeth — often in a single surgical visit.",
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
    text: "Already have a treatment plan or quote? Our panel reviews your X-ray and explains your options clearly.",
  },
];

const STEPS = [
  {
    icon: ClipboardList,
    title: "Share your case",
    text: "Fill the consultation form with your concern and upload an OPG or dental X-ray if you have one.",
  },
  {
    icon: Stethoscope,
    title: "Speak to an implantologist",
    text: "A specialist reviews your case on a scheduled video or phone call — no obligation, no pressure.",
  },
  {
    icon: CalendarCheck,
    title: "Get a written plan",
    text: "You receive a staged treatment plan with implant brand options, timeline and transparent costing.",
  },
  {
    icon: CheckCircle2,
    title: "Treat near you",
    text: "We coordinate your appointment at a partner clinic in your city and follow up after every stage.",
  },
];

const CITIES = [
  "Bhubaneswar",
  "Cuttack",
  "Puri",
  "Rourkela",
  "Sambalpur",
  "Berhampur",
  "Balasore",
  "Angul",
  "Jharsuguda",
  "Bhadrak",
  "Baripada",
  "Jeypore",
];

const FAQS = [
  {
    q: "Is the online consultation really free?",
    a: "Yes. The first consultation — case review, specialist call and a written opinion — is free. You only pay a clinic once you decide to begin treatment.",
  },
  {
    q: "How much does a dental implant cost in Odisha?",
    a: "Costs depend on the implant system, bone condition and the type of crown. Most single implants with a crown fall in a defined range that your specialist will confirm in writing after reviewing your X-ray. We never quote a price before seeing your case.",
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
    a: "Very often, yes. Bone grafting, ridge splitting and sinus lift procedures make implants possible for most patients who were previously refused treatment. This is one of the most common second opinions we handle.",
  },
  {
    q: "Do you treat patients outside Bhubaneswar?",
    a: "Yes. Consultations are online, and treatment is coordinated at accredited partner clinics across Odisha, including Cuttack, Rourkela, Sambalpur, Berhampur and Balasore.",
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
        <HowItWorks />
        <WhyUs />
        <Cities />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="gradient-soft relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <ShieldCheck className="h-3.5 w-3.5" /> Powered by i-Smile
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            Dental implants in Odisha, planned by{" "}
            <span className="text-gradient-brand">specialists you can trust</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Get a free online consultation with an experienced implantologist, a written treatment
            plan and transparent costing — before you ever sit in a dental chair.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="gradient-brand shadow-lift rounded-full px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
            >
              Book Online Consultation
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              How it works
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {[
              ["2,500+", "Cases reviewed"],
              ["12+", "Cities covered"],
              ["20+ yrs", "Combined experience"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-bold text-primary">{value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
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
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "Sterilisation-audited partner clinics",
    "Global implant systems only",
    "Written plans and transparent pricing",
    "Post-treatment follow-up included",
  ];
  return (
    <section className="border-y bg-background">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm font-medium text-muted-foreground">{item}</p>
          </div>
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
          text="Every plan is prepared by a qualified implantologist and delivered at an accredited partner clinic near you."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="card-premium p-7">
              <span className="gradient-brand grid h-12 w-12 place-items-center rounded-2xl text-brand-foreground">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="gradient-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="Four calm steps from question to confident smile"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <article key={s.title} className="card-premium relative p-7">
              <span className="text-sm font-bold text-primary/40">
                0{i + 1}
              </span>
              <span className="mt-4 grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
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
        <div className="grid gap-5 sm:grid-cols-2">
          <img
            src={dentistConsult}
            alt="Implantologist reviewing a treatment plan with a patient at a partner clinic"
            width={1200}
            height={912}
            loading="lazy"
            className="shadow-soft h-full w-full rounded-3xl object-cover"
          />
          <img
            src={implantDetail}
            alt="Titanium dental implant model showing the implant fixture and ceramic crown"
            width={1200}
            height={800}
            loading="lazy"
            className="shadow-soft mt-0 h-full w-full rounded-3xl object-cover sm:mt-10"
          />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Why Patients Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Clinical judgement first. Everything else follows.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            OdishaDentalImplants.com exists so that patients across the state can get an honest,
            specialist opinion before committing to implant surgery — and then have that treatment
            delivered close to home.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Cities() {
  return (
    <section id="cities" className="gradient-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Cities We Serve"
          title="Consultation online, treatment close to home"
          text="Our partner network covers major districts across Odisha, with new clinics added as demand grows."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {CITIES.map((city) => (
            <div
              key={city}
              className="rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold shadow-soft"
            >
              {city}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don't see your town? Book a consultation anyway — we will arrange the nearest option.
        </p>
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
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
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
  return (
    <section id="contact" className="gradient-soft py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Book your free online consultation</h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            Share a few details and a coordinator will call you within one working day to schedule
            your specialist review. Your information stays confidential.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {[
              "No cost, no obligation to proceed",
              "Upload an OPG or X-ray if you already have one",
              "Available in Odia, Hindi and English",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="card-premium p-7 sm:p-9"
        >
          {sent ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Request received</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you. A patient coordinator will contact you within one working day.
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
              <Field label="City" id="city">
                <select
                  id="city"
                  name="city"
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/25"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your city
                  </option>
                  {CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
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
              <button
                type="submit"
                className="gradient-brand shadow-soft w-full rounded-full px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
              >
                Book Online Consultation
              </button>
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
