"use server";

import { auth } from "@/auth"; // Assurez-vous d'importer votre fonction d'authentification
import { db } from "@/lib/db";
import { action } from "@/lib/zsa";
import { z } from "zod";

export const createPost = action
  .input(
    z.object({
      title: z.string().min(1, "Le titre ne peut pas être vide"),
      content: z.string().min(1, "Le contenu ne peut pas être vide"),
    }),
  )
  .handler(async ({ input }) => {
    const session = await auth(); // Obtenez la session de l'utilisateur actuel

    if (!session || !session.user || !session.user.id) {
      throw new Error("Vous devez être connecté pour créer un post");
    }

    const post = await db.post.create({
      data: {
        title: input.title,
        content: input.content,
        authorId: session.user.id, // Utilisez l'ID de l'utilisateur connecté
      },
    });
    return post;
  });
