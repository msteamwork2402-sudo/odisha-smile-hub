import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

const GOOGLE_TAG_SCRIPT_ID = "google-analytics-gtag";
const DEFAULT_MEASUREMENT_ID = "G-V1MCCK3ZLM";

export function GoogleAnalytics() {
  const location = useLocation();
  const initialized = useRef(false);
  const initialPath = useRef(`${location.pathname}${location.searchStr}`);

  useEffect(() => {
    if (initialized.current) return;

    const measurementId = (
      (import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY"] as string | undefined) ||
      (import.meta.env["VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID"] as string | undefined) ||
      DEFAULT_MEASUREMENT_ID
    ).trim();

    window.dataLayer = window.dataLayer ?? [];
    window.gtag =
      window.gtag ??
      function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };

    if (!document.getElementById(GOOGLE_TAG_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = GOOGLE_TAG_SCRIPT_ID;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      document.head.appendChild(script);
    }

    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      page_location: window.location.href,
      page_path: initialPath.current,
      page_title: document.title,
    });
    initialized.current = true;
  }, []);

  useEffect(() => {
    const pagePath = `${location.pathname}${location.searchStr}`;
    if (!initialized.current || pagePath === initialPath.current) return;

    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path: pagePath,
      page_title: document.title,
    });
  }, [location.pathname, location.searchStr]);

  return null;
}