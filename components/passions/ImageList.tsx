/* eslint-disable react/react-in-jsx-scope */
import ImageItem from "@/components/passions/ImageItem";

// Définir un type pour l'image
type Image = {
  id: string;
  url: string;
  createdAt: Date;
};

// Définir les props du composant ImageList
type ImageListProps = {
  images: Image[]; // Un tableau d'images
};

const ImageList = ({ images }: ImageListProps) => {
  return (
    <div className="mx-auto max-w-screen-lg space-y-2">
      {images.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
