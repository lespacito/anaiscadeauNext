/* eslint-disable react/react-in-jsx-scope */
import BlogItem from "@/components/blog/BlogItem";

// Définir un type pour le post
type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author: {
    name: string | null;
    email: string | null;
  };
};

// Définir les props du composant BlogList
type BlogListProps = {
  posts: Post[]; // Un tableau de posts
};

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="mx-auto max-w-screen-lg space-y-2">
      {posts.map((post) => (
        <BlogItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
