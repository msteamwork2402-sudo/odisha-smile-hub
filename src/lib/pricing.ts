// Client-approved price ranges (Dental Implant & Crown Rates sheet, Nov 2026).
export type PriceItem = { id: string; name: string; unit: string; range: string; href?: string };

export const IMPLANT_PRICES: PriceItem[] = [
  { id: "single", name: "Dental implant", unit: "Per implant", range: "₹20,600 – ₹34,300", href: "/single-tooth-dental-implant/" },
  { id: "allon4", name: "All-on-4", unit: "Per arch · implant subtotal", range: "₹82,400 – ₹1,37,200", href: "/all-on-4-all-on-6-odisha/" },
  { id: "allon6", name: "All-on-6", unit: "Per arch · implant subtotal", range: "₹1,23,600 – ₹2,05,800", href: "/all-on-4-all-on-6-odisha/" },
  { id: "fullmouth", name: "Full-mouth implants", unit: "Both arches · 8 to 12 implants · implant subtotal", range: "₹1,64,800 – ₹4,11,600", href: "/full-mouth-dental-implants/" },
  { id: "immediate", name: "Immediate implant with extraction", unit: "Per tooth · implant and extraction", range: "₹21,300 – ₹39,800", href: "/immediate-dental-implants/" },
  { id: "guided", name: "Guided / flapless implant with surgical stent", unit: "Single site · includes estimated basic stent cost", range: "₹22,600 – ₹36,800", href: "/flapless-guided-dental-implants/" },
  { id: "bone", name: "Bone grafting", unit: "Per implant or tooth site", range: "₹770 – ₹1,518", href: "/bone-grafting-for-dental-implants/" },
];

export const CROWN_PRICES: PriceItem[] = [
  { id: "pfm", name: "PFM crown", unit: "Per tooth", range: "₹4,110 – ₹6,200" },
  { id: "zirconia", name: "Zirconia crown", unit: "Per tooth", range: "₹9,650 – ₹13,800", href: "/zirconia-crowns-smile-design/" },
];

export const ALL_PRICES = [...IMPLANT_PRICES, ...CROWN_PRICES];

/** Which price rows each procedure page shows. */
export const PAGE_PRICES: Record<string, string[]> = {
  single: ["single", "pfm", "zirconia"],
  multiple: ["single", "bone", "pfm", "zirconia"],
  allon: ["allon4", "allon6"],
  fullmouth: ["fullmouth", "allon4", "allon6"],
  immediate: ["immediate", "single"],
  guided: ["guided", "single"],
  bone: ["bone"],
  sinus: ["bone", "single"],
  zirconia: ["zirconia", "pfm"],
};

export const PRICE_NOTE =
  "Indicative ranges only. Your final cost is confirmed after clinical examination and scans at CARE Hospital, Bhubaneswar, and depends on the implant system, crown or prosthesis, bone condition and any additional procedures.";
