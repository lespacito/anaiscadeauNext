"use server";
import { db } from "@/lib/db";
import { z } from "zod";
import { createServerAction } from "zsa";

export const getCommentsAction = createServerAction()
  .input(
    z.object({
      skip: z.number().optional(),
      take: z.number().optional(),
      orderBy: z
        .object({
          createdAt: z.enum(["asc", "desc"]).optional(),
        })
        .optional(),
      postId: z.string().optional(),
    }),
  )
  .handler(async ({ input }) => {
    try {
      const comments = await db.comment.findMany({
        skip: input.skip,
        take: input.take,
        orderBy: input.orderBy,
        where: input.postId ? { postId: input.postId } : undefined,
        include: {
          author: {
            select: {
              id: true,
              name: true,
            },
          },
          post: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      });
      return comments;
    } catch (error) {
      console.error("Erreur lors de la récupération des commentaires:", error);
      throw new Error("Impossible de récupérer les commentaires");
    }
  });
