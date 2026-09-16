import { createServerFn } from "@tanstack/react-start";

const DEFAULT_MEASUREMENT_ID = "G-V1MCCK3ZLM";

export const getAnalyticsMeasurementId = createServerFn({ method: "GET" }).handler(() => {
  const measurementId = process.env["GOOGLE_ANALYTICS_MEASUREMENT_ID"] || DEFAULT_MEASUREMENT_ID;

  return measurementId;
});