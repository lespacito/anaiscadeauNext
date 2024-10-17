/* eslint-disable react/react-in-jsx-scope */
"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import PulsatingButton from "@/components/ui/pulsating-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { status } = useSession(); // Suivre l'état de la session
  const { setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="gap-2 text-xl font-bold">
          <Link href="/" className="text-gray-600">
            AnaisPassions
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden space-x-6 hover:bg-transparent md:flex">
          <Link href="/blog" className={buttonVariants({ variant: "ghost" })}>
            Blog
          </Link>
          <Link
            href="/passions"
            className={buttonVariants({ variant: "ghost" })}
          >
            Passions
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "ghost" })}
          >
            Contactez-moi
          </Link>

          {/* Authenticated or not */}
          {status === "authenticated" ? (
            <Link
              href="/profile"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Mon compte
            </Link>
          ) : (
            <Link href="/login">
              <PulsatingButton>Connexion</PulsatingButton>
            </Link>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Changer le thême</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Clair
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Sombre
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                Par défaut
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <h2 className="text-lg font-semibold">AnaisPassions</h2>
              </SheetHeader>
              <nav className="mt-4 flex flex-col space-y-4">
                <Link
                  href="/blog"
                  className={buttonVariants({ variant: "ghost", size: "sm" })}
                >
                  Blog
                </Link>
                <Link
                  href="/passions"
                  className={buttonVariants({ variant: "ghost", size: "sm" })}
                >
                  Passions
                </Link>
                <Link
                  href="/contact"
                  className={buttonVariants({ variant: "ghost", size: "sm" })}
                >
                  Contactez-moi
                </Link>

                {/* Authenticated or not */}
                {status === "authenticated" ? (
                  <Link
                    href="/profile"
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                  >
                    Mon compte
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className={buttonVariants({ size: "sm" })}
                  >
                    Connexion
                  </Link>
                )}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Changer le thême</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Clair
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Sombre
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      Par défaut
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
