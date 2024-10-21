"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { z } from "zod"; // Pour la validation

// Définition du schéma de validation
const PostSchema = z.object({
  title: z.string().min(1, "Le titre ne peut pas être vide"),
  content: z.string().min(1, "Le contenu ne peut pas être vide"),
});

type Post = {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
};

type CreatePostResult = {
  success: boolean;
  post?: Post;
  error?: string;
};

export async function createPost(
  title: string,
  content: string
): Promise<CreatePostResult> {
  try {
    // Validation des données
    const validatedData = PostSchema.parse({ title, content });

    const session = await auth();

    if (!session?.user?.email) {
      return { success: false, error: "Utilisateur non connecté" };
    }

    const user = await db.user.findUnique({
      where: { email: session.user.email },
      select: { id: true },
    });

    if (!user) {
      return { success: false, error: "Utilisateur non trouvé" };
    }

    const newPost = await db.post.create({
      data: {
        title: validatedData.title,
        content: validatedData.content,
        authorId: user.id,
      },
    });

    return { success: true, post: newPost };
  } catch (error) {
    console.error("Erreur lors de la création du post:", error);
    return { success: false, error: "Erreur lors de la création du post" };
  }
}
