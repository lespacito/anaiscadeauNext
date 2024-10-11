"use client";
import React from "react";

import { LoginSchema } from "@/app/schema";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { DEFAULT_REDIRECT } from "@/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import * as z from "zod";
import { Input } from "../ui/input";
import FormError from "./FormError";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Le compte google n'est pas lié merci de vous connecter avec le même compte déjà enregistré"
      : null;
  const [isGoogleLoading, setIsGoogleLoading] = React.useState(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
    },
  });

  const isPending = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    try {
      signIn("resend", { email: data.email, callbackUrl: DEFAULT_REDIRECT });
    } catch (error) {
      console.error(error);
    }
  };

  const onclick = async (provider: "google") => {
    signIn(provider, { callbackUrl: DEFAULT_REDIRECT });
  };

  return (
    <Card className="max-w-sm w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Se connecter</CardTitle>
        <CardDescription>
          Merci de rentrer ton adresse mail pour te conecter
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormError message={urlError} />
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse mail</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="Entrer votre adresse mail pour vous connecter"
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-blue-500 dark:bg-blue-500 text-white dark:text-black"
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Se connecter avec email"
              )}
            </Button>
          </form>
          <div className="w-full flex items-center space-x-2">
            <div className="h-[1px] w-full border" />
            <span className="flex">Ou</span>
            <div className="h-[1px] w-full border" />
          </div>
          <Button
            type="submit"
            variant="outline"
            className="w-full space-x-2 flex"
            onClick={() => {
              setIsGoogleLoading(true);
              onclick("google");
            }}
            disabled={isPending}
          >
            {isGoogleLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <FcGoogle className="w-6 h-6" />
                <span>Se connecter avec Google</span>
              </>
            )}
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
