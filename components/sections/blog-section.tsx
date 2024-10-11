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
    <div className="max-w-screen-xl mx-auto px-8 py-10 flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0">
      {/* Section gauche : les cartes */}
      <div className="md:w-1/2 flex flex-col justify-start">
        {" "}
        {/* Ajustement ici */}
        <div className="p-4">
          {" "}
          {/* Ajout d'un padding ici */}
          <BlogList posts={PostGrid} />
        </div>
      </div>

      {/* Section droite : Réseaux sociaux */}
      <div className="md:w-1/2 p-4 flex flex-col items-start space-y-4 gap-4">
        {/* Texte Instagram */}
        <div className="text-left w-full">
          <h1 className="dark:text-white font-bold text-3xl sm:text-5xl leading-snug max-w-full break-words mb-4">
            Partage tes connaissances ou même des événements de ton quotidien
            avec nous. Nous te conseillerons.
          </h1>
          <p className="font-light text-base sm:text-sm">
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
            <AiFillInstagram size={40} className="text-orange-500 mb-4" />
          </Link>
          <Link
            href="https://www.facebook.com/anais.pro.3760"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={38} className="text-orange-500 mb-4" />
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
