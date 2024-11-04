/* eslint-disable tailwindcss/no-custom-classname */
import { FocusCards } from "@/components/ui/focus-cards";
import React from "react";

type ImageType = {
  id: string;
  url: string;
  createdAt: Date;
};

type ImageItemProps = {
  images: ImageType[];
};

const ImageList: React.FC<ImageItemProps> = ({ images }) => {
  const cards = images.map((image) => ({
    title: `Image ajoutée le ${new Date(image.createdAt).toLocaleDateString()}`,
    src: image.url,
    id: image.id,
  }));

  return <FocusCards cards={cards} />;
};

export default ImageList;
