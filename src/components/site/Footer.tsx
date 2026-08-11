import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  TREATMENT_LOCATION,
  WHATSAPP_URL,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t bg-surface pb-20 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="gradient-brand grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-sm font-bold text-brand-foreground">
              OD
            </span>
            <span>
              <span className="block font-display text-base font-bold">OdishaDentalImplants</span>
              <span className="block text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Powered by i-Smile
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Dental implant care for patients across Odisha. Begin with a free online consultation
            and receive a preliminary treatment roadmap, with implant treatment carried out at{" "}
            {TREATMENT_LOCATION}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              ["Implant Services", "#services"],
              ["How It Works", "#how-it-works"],
              ["Implant Team", "#team"],
              ["Treatment Location", "#location"],
              ["FAQs", "#faqs"],
              ["Book FREE Online Consultation", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                WhatsApp Us — {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${EMAIL}`} className="hover:text-primary">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                Treatment location: {TREATMENT_LOCATION} — online consultations for patients
                anywhere in Odisha
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} OdishaDentalImplants.com — Powered by i-Smile.</p>
          <p>Information here is educational and not a substitute for a clinical diagnosis.</p>
        </div>
      </div>
    </footer>
  );
}
