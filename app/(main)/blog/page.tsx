import React from "react";
import BlogList from "@/components/blog/BlogList";
import { fetchPosts } from "@/lib/fetch-post"; // Appel API que nous avons défini avant

const BlogPage = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <h1 className="my-10 text-center text-4xl font-bold">Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
};

export default BlogPage;
