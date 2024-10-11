"use server";

import { ContactFormInputs, ContactFormSchema } from "@/app/schema/contactform";
import ContactEmail from "@/emails/Contact-template";
import { resend } from "@/lib/mail-utils";

export async function sendForm(input: ContactFormInputs) {
  try {
    const validateData = ContactFormSchema.safeParse(input);

    if (!validateData.success) {
      return {
        success: false,
        message: "Les données du formulaire sont invalides",
      };
    }

    // Envoie l'email

    const { error } = await resend.emails.send({
      from: "Noreply <noreply@resend.dev>",
      to: ["lehack192@gmail.com"],
      subject: "Demande de contact",
      react: ContactEmail({
        email: validateData.data.email,
        message: validateData.data.message,
      }),
    });

    if (error) {
      throw error;
    }

    return {
      success: true,
      message: "Le message a bien été envoyé",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Une erreur s'est produite lors de l'envoi du message",
    };
  }
}
