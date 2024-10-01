import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

// Définition d'un type pour les posts
interface Post {
  id: number;
  title: string;
  body: string;
}

const Blog: FC = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts: Post[] = await res.json();

    return (
      <div className="space-y-5 gap-4">
        <h1
          className={cn(
            "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
          )}
        >
          Liste des articles
        </h1>
        {posts.map((post) => (
          <div key={post.id}>
            <Card>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>{post.body}</CardContent>
              <CardFooter>
                <Link
                  className={buttonVariants({
                    variant: "ghost",
                  })}
                  href={`/blog/${post.title}`}
                >
                  Lire +
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <p>Erreur lors de la récupération des articles.</p>;
  }
};

export default Blog;
