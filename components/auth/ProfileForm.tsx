"use client";
import { updateUsername } from "@/actions/updateUsername";
import { useUserStore } from "@/app/store/user.store";
import { SubmitButton } from "@/components/btn/SubmitButton";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const ProfileForm = () => {
  const { user, setUser } = useUserStore();
  const [username, setUsername] = useState(user?.name || "");

  useEffect(() => {
    setUsername(user?.name || "");
  }, [user?.name]);

  const handleSubmit = async (formData: FormData) => {
    try {
      const updatedUser = await updateUsername(formData);
      setUser(updatedUser);
      toast.success("Votre nom d'utilisateur a été mis à jour.");
    } catch (error) {
      toast.error("Impossible de mettre à jour le nom d'utilisateur.");
    }
  };

  return (
    <form className="flex gap-2" action={handleSubmit}>
      <Input
        name="name"
        placeholder="Nom"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <SubmitButton type="submit">Envoyer</SubmitButton>
    </form>
  );
};
