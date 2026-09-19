import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Car,
  Train,
  Plane,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Phone,
  Building2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  FileText,
  Stethoscope,
  Activity,
  HeartPulse,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import { Reveal } from "@/components/site/Reveal";
import {
  Breadcrumbs,
  ClinicalReviewer,
  FAQSection,
  ImplantCTA,
  ImplantHero,
  LocationTrustBlock,
  QuickAnswerBox,
  RelatedServices,
  Section,
  SectionHeading,
} from "@/components/implant/blocks";
import { LOCATION_PAGES, type CityKey } from "@/lib/location-data";
import { LOCATION_SEO } from "@/lib/location-seo";
import { CARE_HOSPITAL_URL, CLUSTER, REVIEWER } from "@/lib/implant-cluster";
import { CONSULTATION_HOURS, PHONE_DISPLAY, PHONE_TEL, TREATMENT_ADDRESS, TREATMENT_LOCATION, WHATSAPP_URL } from "@/lib/site";
import dentistConsult from "@/assets/dentist-consult.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";
import careHospitalImage from "@/assets/care-hospital.png";

interface LocationPageProps {
  cityKey: CityKey;
}

export function LocationPageTemplate({ cityKey }: LocationPageProps) {
  const city = LOCATION_PAGES[cityKey];
  if (!city) return null;
  const seo = LOCATION_SEO[cityKey];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Odisha Locations", href: "/#location" },
    { label: `Dental Implants in ${city.cityName}` },
  ];

  const serviceLinks = [
    {
      key: "single",
      title: "Single Tooth Dental Implant",
      href: "/single-tooth-dental-implant/",
      desc: "Ideal for replacing one missing tooth with a standalone implant & custom crown.",
    },
    {
      key: "multiple",
      title: "Multiple Dental Implants",
      href: "/multiple-dental-implants/",
      desc: "Implant-supported bridges to restore consecutive missing teeth without altering adjacent teeth.",
    },
    {
      key: "allon",
      title: "All-on-4 & All-on-6 Implants",
      href: "/all-on-4-all-on-6-odisha/",
      desc: "Fixed full-arch rehabilitation for complete tooth loss in upper or lower jaw.",
    },
    {
      key: "fullmouth",
      title: "Full-Mouth Dental Implants",
      href: "/full-mouth-dental-implants/",
      desc: "Comprehensive restoration plans for complex tooth loss and severe jaw deterioration.",
    },
    {
      key: "cost",
      title: "Dental Implant Cost Guide",
      href: "/dental-implant-cost-odisha/",
      desc: "Transparent pricing factors, diagnostic costs, and flexible treatment packages.",
    },
    {
      key: "immediate",
      title: "Immediate Dental Implants",
      href: "/immediate-dental-implants/",
      desc: "Same-day extraction and implant placement for qualified clinical candidates.",
    },
    {
      key: "bone",
      title: "Bone Grafting for Implants",
      href: "/bone-grafting-for-dental-implants/",
      desc: "Advanced bone volume augmentation when jaw bone density is insufficient.",
    },
    {
      key: "compare",
      title: "Implants vs Bridge vs Denture",
      href: "/implants-vs-bridge-vs-denture/",
      desc: "Side-by-side comparative guide to help you choose the best tooth replacement option.",
    },
  ];

  const cityServiceLinks = serviceLinks.filter((service) => seo.servicePageKeys.includes(service.key));

  const relatedServiceItems = [
    { title: CLUSTER.single.title, href: CLUSTER.single.href, text: CLUSTER.single.text },
    { title: CLUSTER.allon.title, href: CLUSTER.allon.href, text: CLUSTER.allon.text },
    { title: CLUSTER.cost.title, href: CLUSTER.cost.href, text: CLUSTER.cost.text },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header />

      <main id="main-content">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <ImplantHero
          eyebrow={city.isPrimaryHub ? "Primary Surgical Center" : `Dental Implant Guide for ${city.cityName} Patients`}
          title={city.h1}
          copy={city.intro}
          primaryCta={{ label: "Book Free Online Consultation", href: "/#contact" }}
          secondaryCta={{ label: "WhatsApp Consultation", href: WHATSAPP_URL, external: true }}
          trustLine={
            city.isPrimaryHub
              ? "CARE Hospital, Chandrasekharpur, Bhubaneswar • 3D CBCT Imaging • MDS Specialists"
              : `Specialist Dental Implant Treatment for ${city.cityName} Patients at CARE Hospital, Bhubaneswar`
          }
          image={dentistConsult}
          imageAlt={seo.heroImageAlt}
        />

        {/* Quick Answer Section */}
        <Section tone="soft">
          <Reveal>
            <QuickAnswerBox
              question={`What should patients know about dental implants in ${city.cityName}?`}
              answer={city.quickAnswer}
            />
          </Reveal>
        </Section>

        {/* Location & Travel Logistics Section */}
        <Section tone="plain">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{city.logisticsHeading}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{city.logisticsIntro}</p>
                </div>
              </div>

              {!city.isPrimaryHub && (
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-border bg-background p-4 text-center">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Distance</span>
                    <span className="mt-1 block text-2xl font-bold text-primary">~{city.distanceKm} km</span>
                    <span className="text-xs text-muted-foreground">to CARE Hospital, Bhubaneswar</span>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-4 text-center">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Travel Duration</span>
                    <span className="mt-1 block text-2xl font-bold text-primary">{city.travelTime}</span>
                    <span className="text-xs text-muted-foreground">Estimated transit time</span>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-4 text-center">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Treatment Hub</span>
                    <span className="mt-1 block text-lg font-bold text-foreground">Bhubaneswar</span>
                    <span className="text-xs text-muted-foreground">CARE Hospital, Chandrasekharpur</span>
                  </div>
                </div>
              )}

              {/* Transit Modes */}
              {city.transitModes && city.transitModes.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-foreground">Recommended Transit Options from {city.cityName}:</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {city.transitModes.map((mode) => (
                      <span
                        key={mode}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-foreground"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        {mode}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Logistics Details */}
              <div className="mt-6 space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Logistics & Route Guidance:</h3>
                <ul className="space-y-2.5">
                  {city.logisticsDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-l-4 border-primary pl-4 sm:pl-5">
                <h3 className="text-lg font-semibold text-foreground">{seo.localPatientHeading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{seo.localPatientInfo}</p>
              </div>

              {/* Local Neighborhoods served */}
              {city.localAreas && city.localAreas.length > 0 && (
                <div className="mt-6 rounded-xl border border-border/80 bg-secondary/30 p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                     Patients who contact us from {city.cityName} often live in:
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground/80">
                    {city.localAreas.join(" • ")} and surrounding localities. Online enquiries are coordinated from these areas; treatment is not provided at a local branch.
                  </p>
                </div>
              )}

              {/* Travel tips */}
              <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
                <h3 className="flex items-center gap-2 text-sm font-bold text-primary">
                  <Sparkles className="h-4 w-4" /> Patient Travel Tips for {city.cityName} Visitors
                </h3>
                <ul className="mt-2.5 space-y-2 text-xs text-foreground/90 sm:text-sm">
                  {city.citySpecificTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-semibold text-primary">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* 4-Stage Consultation, Investigation & Treatment Workflow Section */}
        <Section tone="soft">
          <Reveal>
            <SectionHeading
              title={city.planningSectionHeading}
              intro={city.planningSectionIntro}
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {city.planningSteps.map((item) => (
                <div key={item.step} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:shadow-md">
                  <span className="block text-2xl font-extrabold text-primary">{item.step}</span>
                  <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* Implant Services Interlinking Section */}
        <Section tone="plain">
          <Reveal>
            <SectionHeading
              title={city.isPrimaryHub ? "Trusted Dental Implant Services & Procedures in Bhubaneswar" : `Dental Implant Treatment Options for Patients from ${city.cityName}`}
              intro={seo.serviceLinksIntro}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cityServiceLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <h3 className="flex items-center justify-between text-sm font-bold text-foreground group-hover:text-primary">
                    {item.title}
                    <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-border bg-secondary/20 p-4 text-center">
              <p className="text-xs text-muted-foreground sm:text-sm">
                Unsure which procedure fits your situation? Read our detailed guide on{" "}
                <a href="/dental-implant-cost-bhubaneswar/" className="font-semibold text-primary underline">
                  Dental Implant Cost in Bhubaneswar
                </a>
                , compare{" "}
                <a href="/implants-vs-bridge-vs-denture/" className="font-semibold text-primary underline">
                  Implants vs Bridges vs Dentures
                </a>
                , or return to the{" "}
                <a href="/" className="font-semibold text-primary underline">
                  Odisha Dental Implants Homepage
                </a>
                .
              </p>
            </div>

            {city.isPrimaryHub && (
              <div className="mt-6 rounded-xl border border-border bg-card p-5 text-center shadow-sm">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Dental Implants Near Me — Bhubaneswar Localities &amp; Neighborhoods:
                </h3>
                <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs">
                  <Link to="/dental-implants-chandrasekharpur/" className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                    Chandrasekharpur
                  </Link>
                  <Link to="/dental-implants-patia/" className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                    Patia
                  </Link>
                  <Link to="/dental-implants-nayapalli/" className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                    Nayapalli
                  </Link>
                  <Link to="/dental-implants-jayadev-vihar/" className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                    Jayadev Vihar
                  </Link>
                  <Link to="/dental-implants-saheed-nagar/" className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                    Saheed Nagar
                  </Link>
                  <Link to="/dental-implants-kalinga-nagar/" className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                    Kalinga Nagar
                  </Link>
                  <Link to="/dental-implants-kharavela-nagar/" className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                    Kharavela Nagar
                  </Link>
                  <Link to="/dental-implants-pokhariput/" className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                    Pokhariput
                  </Link>
                  <Link to="/dental-implants-dumduma/" className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                    Dumduma
                  </Link>
                </div>
              </div>
            )}
          </Reveal>
        </Section>

        {/* Location Trust Block Section */}
        <Section tone="soft">
          <Reveal>
            <SectionHeading
              title="CARE Hospital Chandrasekharpur: Center for Dental Implants in Bhubaneswar"
              intro="All in-person surgical placements, 3D CBCT imaging, and clinical procedures take place at CARE Hospital under Dr. Sauvik Singha (MDS) and Dr. Neha Mohanty (MDS)."
            />
            <div className="mt-6">
              <LocationTrustBlock
                hospital="CARE Hospital, Bhubaneswar"
                location={TREATMENT_ADDRESS}
                phoneDisplay={PHONE_DISPLAY}
                phoneTel={PHONE_TEL}
                hours={CONSULTATION_HOURS}
                image={careHospitalImage}
                hospitalHref={CARE_HOSPITAL_URL}
              />
            </div>
          </Reveal>
        </Section>

        {/* FAQ Section */}
        <Section tone="plain">
          <Reveal>
            <SectionHeading
              title={city.isPrimaryHub ? "Frequently Asked Questions About Dental Implants in Bhubaneswar" : `Frequently Asked Questions About Dental Implants for ${city.cityName} Patients`}
              intro={city.isPrimaryHub ? "Common queries from Bhubaneswar residents regarding doctors, treatment choices, costs, and hospital care." : `Common queries from ${city.cityName} residents regarding travel, appointments, costs, and surgical care at CARE Hospital, Bhubaneswar.`}
            />
            <FAQSection
              faqs={city.faqs.map((faq) => ({
                q: faq.q,
                plain: faq.a,
                a: <p>{faq.a}</p>,
              }))}
            />
          </Reveal>
        </Section>

        {/* Clinical Reviewer Section */}
        <Section tone="soft">
          <Reveal>
            <ClinicalReviewer
              writtenBy={REVIEWER.writtenBy}
              reviewer={REVIEWER.name}
              reviewerRole={REVIEWER.role}
              reviewedOn={REVIEWER.reviewedOn}
              profileHref={REVIEWER.profileUrl}
            />
          </Reveal>
        </Section>

        {/* Related Services Section */}
        <Section tone="plain">
          <Reveal>
            <SectionHeading
              title="Related Treatment Guides"
              intro="Explore detailed clinical guides on dental implant options, procedure steps, and cost considerations."
            />
            <RelatedServices items={relatedServiceItems} />
          </Reveal>
        </Section>

        {/* CTA Section */}
        <Section tone="soft">
          <Reveal>
            <ImplantCTA
              title={`Start Your Dental Implant Consultation from ${city.cityName}`}
              copy={`Begin your journey with a free online consultation today. Share your X-rays or photos via WhatsApp and let our team organize your appointment at CARE Hospital, Bhubaneswar.`}
              primary={{ label: "Book Free Online Consultation", href: "/#contact" }}
              secondary={{ label: "WhatsApp Consultation", href: WHATSAPP_URL, external: true }}
              footnote="Consultation and initial evaluation are non-binding. Examination and treatment are conducted at CARE Hospital, Bhubaneswar."
            />
          </Reveal>
        </Section>
      </main>

      <Footer />
      <MobileCtaBar />
    </div>
  );
}
