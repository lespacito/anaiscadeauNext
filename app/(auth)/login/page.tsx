import LoginForm from "@/components/auth/LoginForm";

export const description =
  "Une page de connexion sur 2 colonnes. La première colonne contient un formulaire de connexion avec un email et un mot de passe a renseigné. Il y a un lien pour le mot de passe oublié et un lien pour s'inscrire si tu n'as pas de compte. La seconde est une image de fond..";

export default function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoginForm />
    </div>
  );
}
