"use server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// La fonction pour mettre à jour le nom d'utilisateur
export async function updateUsername(formData: FormData) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Utilisateur non connecté");
  }
  const name = formData.get("name") as string;

  const updateUser = await db.user.update({
    where: { email: session.user.email },
    data: { name },
  });

  console.log("updateUser", { name });

  revalidatePath("/profile");

  return updateUser;
}
