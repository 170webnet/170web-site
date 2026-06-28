import { z } from "zod";

/**
 * Schema de validação do formulário de contato (zod).
 * Substitui as regras inline do react-hook-form — a fonte da verdade da
 * validação e do tipo dos dados passa a ser este schema.
 */
export const contactFormSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "Enter a valid email address"
    ),
  name: z
    .string()
    .min(1, "Name is required")
    .min(3, "Name must be at least 3 characters"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[0-9+\-\s()]{7,15}$/, "Enter a valid phone number"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters"),
});

/** Tipo inferido do schema — usar no useForm<ContactFormValues>(). */
export type ContactFormValues = z.infer<typeof contactFormSchema>;
