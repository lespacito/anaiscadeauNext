import BlogItem from "@/components/blog/BlogItem";

// Définir un type pour le post
type Post = {
  id: number; // ID du post
  title: string; // Titre du post
  body: string; // Contenu du post
};

// Définir les props du composant BlogList
type BlogListProps = {
  posts: Post[]; // Un tableau de posts
};

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="max-w-screen-lg mx-auto space-y-2">
      {posts.map((post) => (
        <BlogItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
