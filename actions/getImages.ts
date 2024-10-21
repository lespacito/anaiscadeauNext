"use server";

import { db } from "@/lib/db";

export async function getImages() {
  try {
    const images = await db.image.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return { images };
  } catch (error) {
    console.error("Erreur lors de la récupération des imges:", error);
    return { error: "Impossible de récupérer les images" };
  }
}
