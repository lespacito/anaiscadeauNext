import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="font-bold">
            Anais Passions
          </Link>

          <nav className="hidden space-x-4 md:flex">
            <Link href="/contact" className="text-sm">
              Contact
            </Link>
            <Link href="/terms" className="text-sm">
              Politique de confidentialité
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/lespacito"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm"
              title="Voir le profil GitHub du développeur"
            >
              <FaGithub className="mr-1" />
              Développé par Lespacito
            </Link>
            <span className="text-sm">© 2024 AnaisPassions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
