import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/auth"; // Importez 'auth' depuis votre fichier racine
import { cors } from "@/lib/cors"; // Importez votre fonction cors

// Fonction wrapper pour gérer CORS et l'authentification
const handleRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Appliquez les CORS avec await
    await cors(req, res);

    // Si c'est une requête préliminaire OPTIONS, renvoyer 200
    if (req.method === "OPTIONS") {
      return res.status(200).end(); // Répondre aux requêtes OPTIONS
    }

    // Utilisation de NextAuth pour gérer l'authentification
    return auth(req, res); // Appel à la fonction auth depuis le fichier racine
  } catch (error) {
    // Gestion des erreurs
    console.error("Erreur lors de la gestion de la requête :", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export default handleRequest;
