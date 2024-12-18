"use server";
import { db } from "@/lib/db";
import { z } from "zod";
import { createServerAction } from "zsa";

export const getPostsAction = createServerAction()
  .input(
    z.object({
      skip: z.number().optional(),
      take: z.number().optional(),
      orderBy: z
        .object({
          createdAt: z.enum(["asc", "desc"]).optional(),
        })
        .optional(),
    }),
  )
  .handler(async ({ input }) => {
    try {
      const posts = await db.post.findMany({
        skip: input.skip,
        take: input.take,
        orderBy: input.orderBy,
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
      return posts;
    } catch (error) {
      console.error("Erreur lors de la récupération des posts:", error);
      throw new Error("Impossible de récupérer les posts");
    }
  });
