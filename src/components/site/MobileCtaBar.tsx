import { useEffect, useState } from "react";
import { MessageCircle, Phone, CalendarCheck } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md transition-transform duration-500 ease-out lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid grid-cols-3 items-stretch gap-2 px-3 py-2.5">

        <a
          href={`tel:${PHONE_TEL}`}
          className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-border px-2 py-2 text-[11px] font-semibold text-foreground"
        >
          <Phone className="h-4 w-4 text-primary" />
          Call
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-border px-2 py-2 text-[11px] font-semibold text-foreground"
        >
          <MessageCircle className="h-4 w-4 text-primary" />
          WhatsApp
        </a>
        <a
          href="#contact"
          className="gradient-brand flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-semibold text-brand-foreground"
        >
          <CalendarCheck className="h-4 w-4" />
          FREE Consultation
        </a>
      </div>
    </div>
  );
}
