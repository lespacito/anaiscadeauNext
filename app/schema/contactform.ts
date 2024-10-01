import { z } from "zod";

export const ContactFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Veuillez entrer une adresse mail valide" }),
  message: z
    .string()
    .min(10, { message: "Votre message doit contenir au moins 10 caractères" })
    .max(500),
});

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;
