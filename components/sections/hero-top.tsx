import Link from "next/link";
import { Button } from "../ui/button";

const HeroTop = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
          Suis mes articles et mes passions
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 tracking-tight">
          Bienvenue!
        </h1>
        <p className="text-xl text-muted-foreground mb-8 ">
          Laisse toi emporter par la vibe et découvrons ensemble les articles de
          la communauté
        </p>
        <Link href="/login">
          <Button variant={"outline"} size={"lg"} className="p-6 rounded-full ">
            Commencer
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroTop;
