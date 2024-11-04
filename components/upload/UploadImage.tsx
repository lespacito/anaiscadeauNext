"use client";

import { UploadFile } from "@/actions/uploadImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FormEventHandler, useState } from "react";
import { toast } from "sonner";
export default function UploadImage() {
  const [imageUrl, setImagerl] = useState<string | null>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const url = await UploadFile(formData);
      setImagerl(url);
      toast.success("Image téléchargée avec succès");
    } catch (error) {
      toast.error("Erreur lors du téléchargement de l'image");
      console.error(error);
    }
  };
  return (
    <div className="mx-auto mb-8 max-w-screen-lg">
      <div className="rounded-lg p-4 shadow-md dark:text-white">
        <h1 className="mb-4 text-2xl font-bold">UploadImage</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Input type="file" name="file" />
          </div>
          <div>
            <Button type="submit">Upload</Button>
          </div>
        </form>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Uploaded"
            width={300}
            height={300}
            className="size-32 object-cover"
          />
        ) : null}
      </div>
    </div>
  );
}
