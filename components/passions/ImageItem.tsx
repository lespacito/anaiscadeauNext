/* eslint-disable tailwindcss/no-custom-classname */
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Image = {
  id: string;
  url: string;
  createdAt: Date;
};

type ImageItemProps = {
  image: Image;
};

const ImageItem: React.FC<ImageItemProps> = ({ image }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
        <CardItem
          translateZ="60"
          className="relative h-60 w-full overflow-hidden rounded-xl"
        >
          <Image
            src={image.url}
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-200 group-hover/card:scale-105"
          />
        </CardItem>
        <CardItem
          translateZ="30"
          as="p"
          className="mt-4 text-sm text-neutral-500 dark:text-neutral-300"
        >
          Ajoutée le {new Date(image.createdAt).toLocaleDateString()}
        </CardItem>
        <div className="mt-8 flex items-center justify-end">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
          >
            <Link
              href={`/gallery/${image.id}`}
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
