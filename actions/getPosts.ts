"use server";

import { db } from "@/lib/db";

export async function getPosts() {
  try {
    const posts = await db.post.findMany({
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { posts };
  } catch (error) {
    console.error("Erreur lors de la récupération des posts:", error);
    return { error: "Impossible de récupérer les posts" };
  }
}
