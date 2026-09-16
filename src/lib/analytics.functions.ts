import { createServerFn } from "@tanstack/react-start";

export const getAnalyticsMeasurementId = createServerFn({ method: "GET" }).handler(() => {
  const measurementId = process.env["GOOGLE_ANALYTICS_MEASUREMENT_ID"];

  if (!measurementId) {
    throw new Error("Google Analytics Measurement ID is not configured");
  }

  return measurementId;
});