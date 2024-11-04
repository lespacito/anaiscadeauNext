"use server";
import { db } from "@/lib/db";
import { z } from "zod";
import { createServerAction } from "zsa";

export const getPostBySlug = createServerAction()
  .input(z.object({ slug: z.string() }))
  .handler(async ({ input }) => {
    try {
      const post = await db.post.findUnique({
        where: { id: input.slug },
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          comments: {
            select: {
              id: true,
              content: true,
              createdAt: true,
              author: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });
      return post;
    } catch (error) {
      console.error("Erreur lors de la récupération du post:", error);
      throw new Error("Impossible de récupérer le post");
    }
  });
