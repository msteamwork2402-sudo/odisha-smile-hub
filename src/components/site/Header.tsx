import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";
import logoMark from "@/assets/logo-mark.png";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Implant Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Implant Team", href: "#team" },
  { label: "Treatment Location", href: "#location" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md transition-[box-shadow,background-color] duration-300 ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={logoMark}
            alt="OdishaDentalImplants.com logo"
            className="h-10 w-auto shrink-0"
          />
          <span className="min-w-0">
            <span className="block max-w-[11rem] font-display text-sm font-bold leading-[1.15] sm:text-base">
              Odisha Dental Implants
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Powered by i-Smile
            </span>
          </span>
        </a>

        <nav className="hidden min-w-0 items-center gap-4 xl:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-border px-3.5 py-2 text-[13px] font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <MessageCircle className="h-4 w-4 shrink-0 text-primary" /> WhatsApp
          </a>

          <a
            href="#contact"
            className="cta-gradient shadow-soft whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold text-brand-foreground"
          >
            Book FREE Consultation
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border text-foreground xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-background xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="cta-gradient mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-brand-foreground"
            >
              Book FREE Online Consultation
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground"
            >
              <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp Us
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" /> {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
