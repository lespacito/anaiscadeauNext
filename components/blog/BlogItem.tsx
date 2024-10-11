import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export type Post = {
  id: number; // ID du post
  title: string; // Titre du post
  body: string; // Contenu du post
};

// Définir les props du composant avec le type Post
type BlogItemProps = {
  post: Post; // Utilisation du type Post
};
const BlogItem = ({ post }: BlogItemProps) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {post.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {post.body}
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <Link
              href={`/blog/${post.id}`}
              className={buttonVariants({ variant: "link" })}
            >
              En savoir plus
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default BlogItem;
