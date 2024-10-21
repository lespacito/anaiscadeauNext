"use server";
import { auth } from "@/auth";
import { db } from "@/lib/db";

// La fonction pour mettre à jour le nom d'utilisateur
export async function getUsername() {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Utilisateur non connecté");
  }

  const user = await db.user.findUnique({
    where: { email: session.user.email },
    select: { name: true, role: true },
  });

  if (!user) {
    throw new Error("Utilisateur non trouvé.");
  }

  return user;
}
