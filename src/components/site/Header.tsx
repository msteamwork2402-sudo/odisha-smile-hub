import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Implant Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Cities We Serve", href: "#cities" },
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
      className={`sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="gradient-brand grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-sm font-bold text-brand-foreground">
            OD
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold leading-tight sm:text-lg">
              OdishaDentalImplants
            </span>
            <span className="block truncate text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Powered by i-Smile
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gradient-brand shadow-soft rounded-full px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            Book Online Consultation
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-background lg:hidden">
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
              className="gradient-brand mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-brand-foreground"
            >
              Book Online Consultation
            </a>
            <a
              href="tel:+919937000000"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground"
            >
              <Phone className="h-4 w-4" /> Talk to a coordinator
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
