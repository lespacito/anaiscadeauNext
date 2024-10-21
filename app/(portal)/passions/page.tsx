/* eslint-disable react/react-in-jsx-scope */
import { getImages } from "@/actions/getImages";
import ImageList from "@/components/passions/ImageList";

const PassionsPage = async () => {
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

export default PassionsPage;
