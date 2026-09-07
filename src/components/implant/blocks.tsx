import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, CheckCircle2, HelpCircle, MapPin, Phone, Clock, Building2, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

/* ---------------------------------- utils --------------------------------- */

export function Section({
  id,
  tone = "plain",
  children,
}: {
  id?: string;
  tone?: "plain" | "soft";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${tone === "soft" ? "gradient-soft" : "bg-background"} py-14 lg:py-20`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  intro,
  as: As = "h2",
}: {
  title: string;
  intro?: string;
  as?: "h2" | "h3";
}) {
  return (
    <div className="max-w-3xl">
      <As className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{title}</As>
      {intro ? <p className="mt-3 text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
    </div>
  );
}

/* -------------------------------- breadcrumbs ------------------------------ */

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />}
            {item.href ? (
              item.href === "/" ? (
                <Link to="/" className="hover:text-primary">
                  {item.label}
                </Link>
              ) : (
                <a href={item.href} className="hover:text-primary">
                  {item.label}
                </a>
              )
            ) : (
              <span aria-current="page" className="font-medium text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ---------------------------------- hero ---------------------------------- */

export function ImplantHero({
  eyebrow,
  title,
  copy,
  primaryCta,
  secondaryCta,
  trustLine,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string; external?: boolean };
  trustLine: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="gradient-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h1 className="mt-4 text-3xl font-bold leading-[1.12] text-foreground sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{copy}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={primaryCta.href}
              data-analytics="implant_consultation_cta"
              className="cta-gradient shadow-soft inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-brand-foreground"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              {...(secondaryCta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              data-analytics="cost_enquiry_cta"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {secondaryCta.label}
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{trustLine}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="zoom-frame card-premium overflow-hidden p-0">
            <img
              src={image}
              alt={imageAlt}
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ quick answer ------------------------------- */

export function QuickAnswerBox({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="card-premium mx-auto max-w-4xl p-6 sm:p-8">
      <div className="flex items-start gap-3">
        <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        <div>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">{question}</h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/85">{answer}</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- cost factors ------------------------------ */

export type CostFactor = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  points?: string[];
};

export function CostFactorGrid({ items }: { items: CostFactor[] }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 60}>
          <article className="card-premium h-full p-6">
            <span className="gradient-brand grid h-11 w-11 place-items-center rounded-2xl">
              <item.icon className="h-5 w-5 text-brand-foreground" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            {item.points ? (
              <ul className="mt-3 space-y-1.5">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* --------------------------- comparison table ------------------------------ */

export type ComparisonRow = { treatment: string; complexity: string; factors: string; cost?: string };

export function TreatmentComparisonTable({
  caption,
  rows,
  note,
}: {
  caption: string;
  rows: ComparisonRow[];
  note: string;
}) {
  return (
    <div className="mt-8">
      <div className="card-premium overflow-x-auto p-0">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-secondary/60">
              <th scope="col" className="px-4 py-3 font-semibold text-foreground">Treatment type</th>
              <th scope="col" className="px-4 py-3 font-semibold text-foreground">Typical complexity</th>
              <th scope="col" className="px-4 py-3 font-semibold text-foreground">Main cost factors</th>
              <th scope="col" className="px-4 py-3 font-semibold text-foreground">Indicative cost</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.treatment} className="border-t border-border align-top">
                <th scope="row" className="px-4 py-4 font-semibold text-foreground">{r.treatment}</th>
                <td className="px-4 py-4 text-muted-foreground">{r.complexity}</td>
                <td className="px-4 py-4 text-muted-foreground">{r.factors}</td>
                <td className="px-4 py-4 text-muted-foreground">
                  {r.cost ?? "Determined after clinical assessment"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{note}</p>
    </div>
  );
}

/* --------------------------------- checklist ------------------------------- */

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <span className="text-sm text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------ treatment steps ---------------------------- */

export type ProcessStep = { title: string; text: string };

export function TreatmentProcess({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <Reveal key={s.title} delay={i * 60}>
          <li className="card-premium h-full list-none p-6">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Step {i + 1}
            </span>
            <h3 className="mt-2 text-base font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

export function Timeline({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-3">
          <span className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
            {s}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight className="hidden h-4 w-4 text-primary sm:block" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  );
}

/* ----------------------------- clinical reviewer --------------------------- */

export function ClinicalReviewer({
  writtenBy,
  reviewer,
  reviewerRole,
  reviewedOn,
  profileHref,
}: {
  writtenBy: string;
  reviewer: string;
  reviewerRole: string;
  reviewedOn: string;
  profileHref?: string;
}) {
  return (
    <div className="card-premium p-6 sm:p-8">
      <h2 className="text-xl font-bold text-foreground">Reviewed by our dental implant team</h2>
      <dl className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Written by</dt>
          <dd className="mt-1 text-sm font-semibold text-foreground">{writtenBy}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Clinically reviewed by</dt>
          <dd className="mt-1 text-sm font-semibold text-foreground">
            {profileHref ? (
              <Link to="/" hash="team" className="hover:text-primary">
                {reviewer}
              </Link>
            ) : (
              reviewer
            )}
            <span className="block text-xs font-medium text-muted-foreground">{reviewerRole}</span>
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Last medically reviewed</dt>
          <dd className="mt-1 text-sm font-semibold text-foreground">{reviewedOn}</dd>
        </div>
      </dl>
    </div>
  );
}

/* ----------------------------- location trust ------------------------------ */

export function LocationTrustBlock({
  hospital,
  location,
  phoneDisplay,
  phoneTel,
  hours,
  image,
}: {
  hospital: string;
  location: string;
  phoneDisplay: string;
  phoneTel: string;
  hours: string;
  image?: string;
}) {
  return (
    <div className="card-premium grid gap-6 p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
      <div>
        <h2 className="text-xl font-bold text-foreground">Where treatment takes place</h2>
        <ul className="mt-5 space-y-4 text-sm">
          <li className="flex gap-3">
            <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-foreground">
              <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">Hospital</span>
              {hospital}
            </span>
          </li>
          <li className="flex gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-foreground">
              <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">Treatment location</span>
              {location}
            </span>
          </li>
          <li className="flex gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-foreground">
              <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">Phone</span>
              <a
                href={`tel:${phoneTel}`}
                data-analytics="phone_click"
                className="font-semibold hover:text-primary"
              >
                {phoneDisplay}
              </a>
            </span>
          </li>
          <li className="flex gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-foreground">
              <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">Hours</span>
              {hours}
            </span>
          </li>
        </ul>
      </div>
      {image ? (
        <div className="zoom-frame overflow-hidden rounded-3xl border border-border">
          <img
            src={image}
            alt={`${hospital}, ${location}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}
    </div>
  );
}

/* ---------------------------------- FAQ ------------------------------------ */

export type Faq = { q: string; a: ReactNode; plain: string };

export function FAQSection({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="mt-8 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
      {faqs.map((f) => (
        <details key={f.q} className="group p-5 sm:p-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-foreground">
            <h3 className="text-base font-semibold">{f.q}</h3>
            <ChevronRight
              className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-90"
              aria-hidden="true"
            />
          </summary>
          <div className="faq-answer mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
        </details>
      ))}
    </div>
  );
}

/* ------------------------------ related services --------------------------- */

export type RelatedService = { title: string; href: string; text: string };

export function RelatedServices({ items }: { items: RelatedService[] }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <a
          key={s.href}
          href={s.href}
          className="card-premium block p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>
      ))}
    </div>
  );
}

/* ----------------------------------- CTA ----------------------------------- */

export function ImplantCTA({
  title,
  copy,
  primary,
  secondary,
  footnote,
}: {
  title: string;
  copy: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string; external?: boolean };
  footnote: string;
}) {
  return (
    <div className="gradient-brand rounded-4xl px-6 py-12 text-center sm:px-10">
      <h2 className="mx-auto max-w-2xl text-2xl font-bold text-brand-foreground sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-brand-foreground/85">{copy}</p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href={primary.href}
          data-analytics="implant_consultation_cta"
          className="shadow-soft inline-flex items-center justify-center rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground"
        >
          {primary.label}
        </a>
        <a
          href={secondary.href}
          {...(secondary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          data-analytics="whatsapp_click"
          className="inline-flex items-center justify-center rounded-full border border-brand-foreground/40 px-6 py-3.5 text-sm font-semibold text-brand-foreground"
        >
          {secondary.label}
        </a>
      </div>
      <p className="mt-4 text-xs text-brand-foreground/80">{footnote}</p>
    </div>
  );
}

/* ------------------------ two-option comparison (responsive) ---------------- */

export type FactorRow = { factor: string; a: string; b: string };

export function FactorComparison({
  caption,
  optionA,
  optionB,
  rows,
  note,
}: {
  caption: string;
  optionA: string;
  optionB: string;
  rows: FactorRow[];
  note?: string;
}) {
  return (
    <div className="mt-8">
      {/* Desktop table */}
      <div className="card-premium hidden p-0 sm:block">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-secondary/60">
              <th scope="col" className="px-4 py-3 font-semibold text-foreground">Factor</th>
              <th scope="col" className="px-4 py-3 font-semibold text-foreground">{optionA}</th>
              <th scope="col" className="px-4 py-3 font-semibold text-foreground">{optionB}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.factor} className="border-t border-border align-top">
                <th scope="row" className="px-4 py-4 font-semibold text-foreground">{r.factor}</th>
                <td className="px-4 py-4 text-muted-foreground">{r.a}</td>
                <td className="px-4 py-4 text-muted-foreground">{r.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="grid gap-4 sm:hidden">
        {rows.map((r) => (
          <article key={r.factor} className="card-premium p-5">
            <h3 className="text-sm font-semibold text-foreground">{r.factor}</h3>
            <dl className="mt-3 space-y-3 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{optionA}</dt>
                <dd className="mt-1 text-muted-foreground">{r.a}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{optionB}</dt>
                <dd className="mt-1 text-muted-foreground">{r.b}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      {note ? <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{note}</p> : null}
    </div>
  );
}

/* ------------------------------ parts diagram ------------------------------ */

export function PartsDiagram({
  parts,
}: {
  parts: { label: string; title: string; text: string; icon: React.ComponentType<{ className?: string }> }[];
}) {
  return (
    <div className="mt-10">
      <div className="grid gap-5 lg:grid-cols-3">
        {parts.map((p, i) => (
          <Reveal key={p.label} delay={i * 80}>
            <article className="card-premium h-full p-6">
              <span className="gradient-brand grid h-11 w-11 place-items-center rounded-2xl">
                <p.icon className="h-5 w-5 text-brand-foreground" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {p.label}
              </p>
              <h3 className="mt-1 text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-center text-sm font-semibold text-foreground">
        Implant <span aria-hidden="true">→</span> Abutment <span aria-hidden="true">→</span> Crown
      </p>
    </div>
  );
}


/* --------------------------- generic responsive table ---------------------- */

export function DataTable({
  caption,
  columns,
  rows,
  note,
}: {
  caption: string;
  columns: string[];
  rows: string[][];
  note?: string;
}) {
  return (
    <div className="mt-8">
      <div className="card-premium hidden p-0 md:block">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-secondary/60">
              {columns.map((c) => (
                <th key={c} scope="col" className="px-4 py-3 font-semibold text-foreground">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-t border-border align-top">
                <th scope="row" className="px-4 py-4 font-semibold text-foreground">{r[0]}</th>
                {r.slice(1).map((cell, i) => (
                  <td key={i} className="px-4 py-4 text-muted-foreground">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:hidden">
        {rows.map((r) => (
          <article key={r[0]} className="card-premium p-5">
            <h3 className="text-sm font-semibold text-foreground">{r[0]}</h3>
            <dl className="mt-3 space-y-3 text-sm">
              {r.slice(1).map((cell, i) => (
                <div key={i}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {columns[i + 1]}
                  </dt>
                  <dd className="mt-1 text-muted-foreground">{cell}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      {note ? <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{note}</p> : null}
    </div>
  );
}

/* ------------------------------- plain cards ------------------------------- */

export function InfoCards({
  items,
  columns = 3,
}: {
  items: { title: string; text: string; href?: string; cta?: string }[];
  columns?: 2 | 3;
}) {
  return (
    <div className={`mt-8 grid gap-5 ${columns === 2 ? "lg:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
      {items.map((c, i) => (
        <Reveal key={c.title} delay={i * 60}>
          <article className="card-premium h-full p-6">
            <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            {c.href ? (
              <a className="mt-4 inline-block text-sm font-semibold text-primary" href={c.href}>
                {c.cta ?? "Learn more"} →
              </a>
            ) : null}
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------- bullet list -------------------------------- */

export function BulletGrid({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 grid gap-2 sm:grid-cols-2">
      {items.map((f) => (
        <li key={f} className="flex gap-2 text-sm text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          {f}
        </li>
      ))}
    </ul>
  );
}

/* --------------------------------- callout ---------------------------------- */

export function Callout({ title, text }: { title: string; text: ReactNode }) {
  return (
    <div className="mt-8 rounded-3xl border border-border bg-card p-6">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</div>
    </div>
  );
}
