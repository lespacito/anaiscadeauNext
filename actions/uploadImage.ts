"use server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { put } from "@vercel/blob";

export const UploadFile = async (formData: FormData) => {
  const session = await auth();

  if (!session || !session.user) {
    throw new Error("Vous devez être connecté pour uloader une image");
  }
  const file = formData.get("file") as File;
  const filename = file.name;

  const blob = await put(filename, file, {
    access: "public",
  });

  const newImage = await db.image.create({
    data: {
      url: blob.url,
    },
  });
  return newImage.url;
};
