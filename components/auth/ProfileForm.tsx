"use client";

import { updateUsername } from "@/actions/updateUsername";
import { SubmitButton } from "@/components/btn/SubmitButton";
import { Input } from "@/components/ui/input";
export type ProfileFormProps = {};

export const ProfileForm = () => {
  return (
    <form
      className="flex gap-2"
      action={async (formAction) => {
        await updateUsername(formAction);
      }}
    >
      <Input name="name" placeholder="Nom" />
      <SubmitButton type="submit">Envoyer</SubmitButton>
    </form>
  );
};
