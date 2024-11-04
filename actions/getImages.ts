"use server";
import { db } from "@/lib/db";
import { z } from "zod";
import { createServerAction } from "zsa";

export const getImagesAction = createServerAction()
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
      const images = await db.image.findMany({
        skip: input.skip,
        take: input.take,
        orderBy: input.orderBy,
      });
      return {images};
    } catch (error) {
      console.error("Erreur lors de la récupération des images:", error);
      throw new Error("Impossible de récupérer les images");
    }
  });
