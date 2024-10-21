/* eslint-disable react/react-in-jsx-scope */
import { getPosts } from "@/actions/getPosts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: Props) => {
  const { posts, error } = await getPosts();

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  const post = posts?.find((p) => p.id === params.slug);

  if (!post) {
    return <div>Article non trouvé</div>;
  }

  return (
    <Card className="mx-auto my-8 max-w-3xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
        <CardDescription>Auteur : {post.author.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="prose text-justify">{post.content}</div>
      </CardContent>
    </Card>
  );
};

export default Page;
