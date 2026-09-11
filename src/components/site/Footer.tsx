import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Globe } from "lucide-react";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  TREATMENT_LOCATION,
  WHATSAPP_URL,
} from "@/lib/site";
import { IMPLANT_NAV_ITEMS } from "@/lib/implant-navigation";
import { ODISHA_SERVICE_CITIES, LOCATION_TRUTH } from "@/lib/implant-cluster";
import logoMark from "@/assets/logo-mark.png";

export function Footer() {
  return (
    <footer className="border-t bg-surface pb-20 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoMark}
              alt="OdishaDentalImplants.com logo"
              className="h-10 w-auto shrink-0"
            />
            <span>
              <span className="block font-display text-base font-bold">OdishaDentalImplants</span>
              <span className="block text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Powered by i-Smile
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Specialist dental implant care for patients across Odisha. {LOCATION_TRUTH.consultation} Treatment is carried out at {TREATMENT_LOCATION}.
          </p>
          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Service Areas</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              Providing implant consultations for patients in {ODISHA_SERVICE_CITIES.join(", ")} and throughout Odisha.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Dental implant treatments</h3>
          <ul className="mt-4 grid gap-x-5 gap-y-2 text-sm text-muted-foreground sm:grid-cols-2 md:grid-cols-1">
            {IMPLANT_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Care Pathway</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              ["FREE Online Consultation", "/#contact"],
              ["How the Journey Works", "/#how-it-works"],
              ["Implant Specialist Team", "/#team"],
              ["Hospital Treatment Site", "/#location"],
              ["Patient FAQs", "/#faqs"],
              ["Cost & Price Guide", "/dental-implant-cost-odisha/"],
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
                <strong>Treatment:</strong> {TREATMENT_LOCATION}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                <strong>Consultations:</strong> Online across Odisha
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
