/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/react-in-jsx-scope */
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type Image = {
  id: string;
  url: string;
  createdAt: Date;
};

// Définir les props du composant avec le type Image
type ImageItemProps = {
  image: Image;
};

const ImageItem = ({ image }: ImageItemProps) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Image {image.id}
        </CardItem>
        <CardItem
          translateZ="60"
          className="mt-2 h-48 w-full overflow-hidden rounded-lg"
        >
          <Image
            src={image.url}
            alt={`Image ${image.id}`}
            layout="fill"
            objectFit="cover"
          />
        </CardItem>
        <div className="mt-4 flex items-center justify-between">
          <CardItem
            translateZ={20}
            className="text-sm text-neutral-500 dark:text-neutral-300"
          >
            Créée le : {new Date(image.createdAt).toLocaleDateString()}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
          >
            <Link
              href={`/images/${image.id}`}
              className={buttonVariants({ variant: "link" })}
            >
              Voir en détail
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ImageItem;
