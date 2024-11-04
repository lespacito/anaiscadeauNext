import BlogList from "@/components/blog/BlogList";
import CreatePostForm from "@/components/blog/CreatePostForm";
const BlogPage = async () => {
  return (
    <div>
      <h1 className="my-10 text-center text-4xl font-bold">Blog</h1>
      <CreatePostForm />
      <BlogList />
    </div>
  );
};

export default BlogPage;
