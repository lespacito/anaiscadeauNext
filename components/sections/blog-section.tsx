"use client";
import { getPostsAction } from "@/actions/getPosts";
import BlogItem from "@/components/blog/BlogItem";
import ShinyButton from "@/components/ui/shiny-button";
import { useServerActionQuery } from "@/lib/zsa.query";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

// Composant BlogSection
const BlogSection = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useServerActionQuery(getPostsAction, {
    input: { take: 1, orderBy: { createdAt: "desc" } },
    queryKey: ["latestPost"],
  });
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-stretch justify-between space-y-10 px-8 py-10 md:flex-row md:space-y-0">
      {/* Section gauche : les cartes */}
      <div className="flex flex-col justify-start md:w-1/2">
        <div className="h-full p-4">
          {isLoading ? (
            <div>Chargement du dernier article...</div>
          ) : error ? (
            <div>
              Une erreur est survenue lors de la récupération du dernier
              article.
            </div>
          ) : posts && posts.length > 0 ? (
            <BlogItem post={posts[0]} />
          ) : (
            <div>Aucun article disponible pour le moment.</div>
          )}
        </div>
      </div>

      {/* Section droite : Réseaux sociaux */}
      <div className="flex flex-col items-start justify-between gap-4 p-4 md:w-1/2 md:pt-24">
        <div className="w-full text-left">
          <h1 className="mb-4 max-w-full break-words text-left text-3xl font-bold leading-snug dark:text-white sm:text-5xl">
            Partage tes connaissances ou même des événements de ton quotidien
            avec nous. Nous te conseillerons.
          </h1>
          <p className="mb-4 text-base font-light sm:text-sm">
            Sois libre de nous parler peu importe le sujet qui te tiens
            sincèrement à coeur, avec nous pas de tabou.
          </p>
          {/* Icônes et bouton */}
          <div className="mt-4 flex w-full items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.instagram.com/anaiskart_14/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={40} className="text-orange-500" />
              </Link>
              <Link
                href="https://www.facebook.com/anais.pro.3760"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={38} className="text-orange-500" />
              </Link>
            </div>
            <Link href="/blog">
              <ShinyButton>DECOUVRIR</ShinyButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
