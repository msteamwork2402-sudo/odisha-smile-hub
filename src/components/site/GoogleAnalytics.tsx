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

  return null;
}