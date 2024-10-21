/* eslint-disable react/react-in-jsx-scope */
import { getPosts } from "@/actions/getPosts";
import BlogList from "@/components/blog/BlogList";

const BlogPage = async () => {
  const { posts } = await getPosts();

  return (
    <div>
      <h1 className="my-10 text-center text-4xl font-bold">Blog</h1>
      <BlogList posts={posts ?? []} />
    </div>
  );
};

export default BlogPage;
