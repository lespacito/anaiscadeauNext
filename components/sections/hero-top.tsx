import ShinyButton from "@/components/ui/shiny-button";
import { Spotlight } from "@/components/ui/spotlight";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const HeroTop = () => {
  return (
    <>
      <Head>
        <link rel="preload" href="/assets/img/karting.webp" as="image" />
      </Head>
      <div className="max-w-screen-xl mx-auto px-8 py-10">
        {/* Spotlight component for decorative purposes */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="flex flex-col md:flex-row items-center">
          {/* Text section */}
          <div className="md:w-1/2">
            {/* Main title */}
            <h1 className="dark:text-white font-bold leading-tight text-7xl">
              Rédige tes articles.
            </h1>
            {/* Subtitle paragraph */}
            <p className="dark:text-white font-medium text-2xl leading-normal max-w-[560px] mt-8">
              Découvre les articles ainsi que mes différentes passions.
            </p>
            {/* Link to login page with a shimmer button */}
            <Link href="/login" className="mt-10 inline-block">
              <ShinyButton>Commencer</ShinyButton>
            </Link>
          </div>

          {/* Image section */}
          <div className="hidden md:flex md:w-1/2 mt-10 md:mt-0 justify-center">
            <Image
              src="/assets/img/karting.webp"
              alt="image logo"
              width={511}
              height={589}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroTop;
