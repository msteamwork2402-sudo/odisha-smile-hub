import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-surface">
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
            A dental implant consultation platform connecting patients across Odisha with
            experienced implantologists and accredited clinical partners.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              ["Implant Services", "#services"],
              ["How It Works", "#how-it-works"],
              ["Cities We Serve", "#cities"],
              ["FAQs", "#faqs"],
              ["Book Consultation", "#contact"],
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
              <a href="tel:+919937000000" className="hover:text-primary">
                +91 99370 00000
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:care@odishadentalimplants.com" className="hover:text-primary">
                care@odishadentalimplants.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Bhubaneswar, Odisha — serving patients statewide
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
