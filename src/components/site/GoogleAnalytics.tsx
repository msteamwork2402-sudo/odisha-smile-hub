import { useLocation } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useRef } from "react";

import { getAnalyticsMeasurementId } from "../../lib/analytics.functions";

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

const GOOGLE_TAG_SCRIPT_ID = "google-analytics-gtag";

export function GoogleAnalytics() {
  const location = useLocation();
  const fetchMeasurementId = useServerFn(getAnalyticsMeasurementId);
  const initializedId = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function trackPageView() {
      try {
        const measurementId = await fetchMeasurementId();
        if (cancelled) return;

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

        if (initializedId.current !== measurementId) {
          window.gtag("js", new Date());
          window.gtag("config", measurementId, { send_page_view: false });
          initializedId.current = measurementId;
        }

        window.gtag("event", "page_view", {
          page_location: window.location.href,
          page_path: `${location.pathname}${location.searchStr}`,
          page_title: document.title,
        });
      } catch (error) {
        console.error("Google Analytics initialization failed", error);
      }
    }

    void trackPageView();

    return () => {
      cancelled = true;
    };
  }, [fetchMeasurementId, location.pathname, location.searchStr]);

  return null;
}