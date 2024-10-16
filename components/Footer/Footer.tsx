import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper h-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="font-bold">
            Anais Passions
          </Link>

          <nav className="hidden md:flex space-x-4">
            <Link href="/contact" className="text-sm">
              Contact
            </Link>
            <Link href="/terms" className="text-sm">
              Conditions d'utilisation
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/lespacito"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center"
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
