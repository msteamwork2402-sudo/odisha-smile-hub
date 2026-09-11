import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const consultationSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(20)
    .regex(/^[+()\-\s0-9]+$/, "Enter a valid phone number"),
  city: z.string().trim().max(100).optional(),
  message: z.string().trim().max(2000).optional(),
});

export const submitConsultation = createServerFn({ method: "POST" })
  .inputValidator((input) => consultationSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("consultation_leads").insert({
      name: data.name,
      phone: data.phone,
      city: data.city || null,
      message: data.message || null,
      source: "homepage",
    });

    if (error) {
      console.error("Consultation lead submission failed", error);
      throw new Error("We could not send your request. Please try again or contact us by phone.");
    }

    return { success: true };
  });