import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAnalytics() {
  const location = useLocation();
  const initialPath = useRef(`${location.pathname}${location.searchStr}`);

  useEffect(() => {
    const pagePath = `${location.pathname}${location.searchStr}`;
    if (pagePath === initialPath.current) return;

    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path: pagePath,
      page_title: document.title,
    });
  }, [location.pathname, location.searchStr]);

  // Fire a GA4 event for any element carrying a data-analytics attribute.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const origin = event.target instanceof Element ? event.target : null;
      const el = origin?.closest<HTMLElement>("[data-analytics]");
      const name = el?.dataset["analytics"];
      if (!el || !name) return;

      window.gtag?.("event", name, {
        event_label:
          (el.textContent || "").trim().slice(0, 100) || el.getAttribute("aria-label") || "",
        page_path: `${window.location.pathname}${window.location.search}`,
        link_url: el instanceof HTMLAnchorElement ? el.href : undefined,
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
