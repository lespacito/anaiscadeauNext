import BlogList from "@/components/blog/BlogList";
import { fetchPosts } from "@/lib/fetch-post"; // Appel API que nous avons défini avant

const BlogPage = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 mb-10">Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
};

export default BlogPage;
