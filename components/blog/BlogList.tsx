"use client";

import { getPostsAction } from "@/actions/getPosts";
import BlogItem from "@/components/blog/BlogItem";
import { useServerActionQuery } from "@/lib/zsa.query";

export const BlogList = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useServerActionQuery(getPostsAction, {
    input: { take: 10, orderBy: { createdAt: "desc" } },
    queryKey: ["posts"],
  });

  if (isLoading) return <div>Chargement des articles...</div>;
  if (error)
    return (
      <div>
        Erreur lors de la récupération des articles. Merci de contacter les
        Admins ou Lespacito
      </div>
    );

  return (
    <div className="mx-auto max-w-screen-lg space-y-2">
      {posts?.map((post) => <BlogItem key={post.id} post={post} />)}
    </div>
  );
};

export default BlogList;
