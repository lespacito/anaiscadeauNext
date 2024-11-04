"use client";
import { getImagesAction } from "@/actions/getImages";
import { useServerActionQuery } from "@/lib/zsa.query";
import { FocusCards } from "../ui/focus-cards";

export const ImageList = () => {
  const {
    data: imagesData,
    isLoading,
    error,
  } = useServerActionQuery(getImagesAction, {
    input: { take: 10, orderBy: { createdAt: "desc" } },
    queryKey: ["images"],
  });

  if (isLoading) return <div>Chargement des images...</div>; // Message de chargement
  if (error)
    return (
      <div>
        Erreur lors de la récupération des images. Merci de contacter les Admins
        ou Lespacito
      </div>
    );

  return (
    <div className="mx-auto max-w-screen-lg">
      {imagesData?.images.map((image) => (
        <FocusCards
          key={image.id}
          cards={[
            {
              // Utilisation de FocusCards pour chaque image
              title: `Image ajoutée le ${new Date(image.createdAt).toLocaleDateString()}`,
              src: image.url,
            },
          ]}
        />
      ))}
    </div>
  );
};
