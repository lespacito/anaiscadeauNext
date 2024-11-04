"use client";

import React, { useState, useTransition } from "react";
import { Button } from "../ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormInputs, ContactFormSchema } from "@/app/schema/contactform";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { toast } from "sonner";
import { sendForm } from "@/actions/send-form";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ContactForm = () => {
  const [isSubmitting, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormInputs) {
    startTransition(async () => {
      const response = await sendForm(data);
      if (response.success) {
        setIsSuccess(true);
        toast.success("Nous traiterons ton message au plus vite");
      } else {
        setIsSuccess(false);
        form.setError("root.serverError", {
          message: response.message,
          type: "500",
        });
        toast.error(
          "Une erreur est survenue, Veuillez vérifier vos données et réesayez",
        );
      }
    });
  }

  return (
    <>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Contactez-moi</CardTitle>
          <CardDescription>
            Vous pouvez me contacter via ce formulaire pour toute question ou
            demande.
          </CardDescription>
        </CardHeader>
        {isSuccess ? (
          <CardContent>
            <p className="text-green-600">Votre message a été envoyé !</p>
          </CardContent>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                {form.formState.errors?.root?.serverError && (
                  <Alert variant="destructive">
                    <ExclamationTriangleIcon className="size-4" />
                    <AlertTitle>Erreur !</AlertTitle>
                    <AlertDescription>
                      {form.formState.errors?.root?.serverError?.message}
                    </AlertDescription>
                  </Alert>
                )}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre email..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Votre message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi..." : "Envoyer"}
                </Button>
              </CardFooter>
            </form>
          </Form>
        )}
      </Card>
    </>
  );
};

export default ContactForm;
