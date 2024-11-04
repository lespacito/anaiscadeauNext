import { getPostBySlug } from "@/actions/getPostBySlug";
import { notFound } from "next/navigation";

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const [post] = await getPostBySlug({ slug: params.slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto mt-10 max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
      <p className="mb-2 text-gray-600">
        Par {post.author.name} - {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <div className="prose">{post.content}</div>
    </article>
  );
};

export default BlogPostPage;
