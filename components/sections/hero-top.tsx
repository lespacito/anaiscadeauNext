import ShinyButton from "@/components/ui/shiny-button";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";
import imghero from "../../public/assets/img/karting.webp";

const HeroTop = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-8 py-10 relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <h1 className="dark:text-white font-bold leading-tight text-5xl md:text-7xl">
            Rédige tes articles.
          </h1>
          <p className="dark:text-white font-medium text-xl md:text-2xl leading-normal max-w-[560px] mt-4 md:mt-8">
            Découvre les articles ainsi que mes différentes passions.
          </p>
          <Link href="/login" className="mt-6 md:mt-10 inline-block">
            <ShinyButton>Commencer</ShinyButton>
          </Link>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src={imghero}
            alt="Image d'un kart de course"
            quality={75}
            priority
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroTop;
