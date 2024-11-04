import { getImages } from "@/actions/getImages";
import ImageList from "@/components/passions/ImageList";
import UploadImage from "@/components/upload/UploadImage";

const GalleryPage = async () => {
  const { images } = await getImages();

  return (
    <div className="container mx-auto">
      <h1 className="my-10 text-center text-4xl font-bold">
        Galerie d&apos;images
      </h1>
      <div className="mb-8 rounded-lg border p-4 shadow-md">
        <UploadImage />
      </div>
      <ImageList images={images ?? []} />
    </div>
  );
};

export default GalleryPage;
