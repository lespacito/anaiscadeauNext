import UploadImage from "@/components/upload/UploadImage";

const TestImagePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Test de téléchargement d&apos;image
      </h1>
      <UploadImage />
    </div>
  );
};

export default TestImagePage;
