import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(180),
  country: z.string().trim().min(2, "Please enter your country").max(100),
  service: z.string().trim().min(1, "Please select a service").max(100),
  phone: z.string().trim().max(40).optional().default(""),
  entity: z.string().trim().max(40).optional().default(""),
  state: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().min(10, "Please add a little more detail").max(3000),
  consent: z.literal(true, { error: "Please agree before submitting" }),
  website: z.string().max(0).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
