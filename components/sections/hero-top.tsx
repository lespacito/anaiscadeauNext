import ShinyButton from "@/components/ui/shiny-button";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";
import imghero from "../../public/assets/img/karting.webp";

const HeroTop = () => {
  return (
    <section className="relative mx-auto max-w-screen-xl overflow-hidden px-8 py-10">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="flex flex-col items-center md:flex-row">
        <div className="z-10 md:w-1/2">
          <h1 className="text-5xl font-bold leading-tight dark:text-white md:text-7xl">
            Rédige tes articles.
          </h1>
          <p className="mt-4 max-w-[560px] text-xl font-medium leading-normal dark:text-white md:mt-8 md:text-2xl">
            Découvre les articles ainsi que mes différentes passions.
          </p>
          <Link href="/login" className="mt-6 inline-block md:mt-10">
            <ShinyButton>Commencer</ShinyButton>
          </Link>
        </div>

        <div className="mt-10 flex justify-center md:mt-0 md:w-1/2">
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
