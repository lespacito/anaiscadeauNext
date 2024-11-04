import { ImageList } from "@/components/passions/ImageList"; // Assurez-vous que le nom est correc

const PassionsPage = async () => {
  return (
    <div>
      <h1 className="my-10 text-center text-4xl font-bold">
        Galerie d&apos;images
      </h1>
      <ImageList />
    </div>
  );
};

export default PassionsPage;
