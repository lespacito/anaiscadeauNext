/* eslint-disable react/react-in-jsx-scope */
import BlogList from "@/components/blog/BlogList";
import ShinyButton from "@/components/ui/shiny-button";
import { fetchPosts } from "@/lib/fetch-post";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

// Composant BlogSection
const BlogSection = async () => {
  const posts = await fetchPosts();

  const PostGrid = posts.slice(0, 1); // Récupérer seulement le premier article

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between space-y-10 px-8 py-10 md:flex-row md:space-y-0">
      {/* Section gauche : les cartes */}
      <div className="flex flex-col justify-start md:w-1/2">
        {" "}
        {/* Ajustement ici */}
        <div className="p-4">
          {" "}
          {/* Ajout d'un padding ici */}
          <BlogList posts={PostGrid} />
        </div>
      </div>

      {/* Section droite : Réseaux sociaux */}
      <div className="flex flex-col items-start gap-4 space-y-4 p-4 md:w-1/2">
        {/* Texte Instagram */}
        <div className="w-full text-left">
          <h1 className="mb-4 max-w-full break-words text-3xl font-bold leading-snug dark:text-white sm:text-5xl">
            Partage tes connaissances ou même des événements de ton quotidien
            avec nous. Nous te conseillerons.
          </h1>
          <p className="text-base font-light sm:text-sm">
            Sois libre de nous parler de n’importe quel sujet qui te tiens
            sincèrement à coeur, avec nous pas de tabou.
          </p>
        </div>
        {/* Icône Instagram */}
        <div className="flex space-x-4">
          <Link
            href="https://www.instagram.com/anaiskart_14/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram size={40} className="mb-4 text-orange-500" />
          </Link>
          <Link
            href="https://www.facebook.com/anais.pro.3760"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={38} className="mb-4 text-orange-500" />
          </Link>
        </div>
        {/* Bouton positionné comme dans HeroTop */}
        <Link href="/blog" className="mt-10 inline-block">
          <ShinyButton>DECOUVRIR</ShinyButton>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
