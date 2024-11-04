import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  content: string;
}
const BlogItem = ({ post }: { post: Post }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {post.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          {post.content}
        </CardItem>
        <div className="mt-20 flex items-center justify-between">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
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
