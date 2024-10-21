import ImageList from "@/components/passions/ImageList";
import { getImages } from "@/actions/getImages";
import React from "react";

const GalleryPage = async () => {
  const { images } = await getImages();

  return (
    <div>
      <h1 className="my-10 text-center text-4xl font-bold">
        Galerie d&apos;images
      </h1>
      <ImageList images={images ?? []} />
    </div>
  );
};

export default GalleryPage;
