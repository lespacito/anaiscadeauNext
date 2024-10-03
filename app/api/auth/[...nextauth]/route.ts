import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth"; // Importez NextAuth directement
import { cors } from "@/lib/cors"; // Importez votre fonction cors

// Fonction wrapper pour gérer CORS
const handleRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  // Appliquez les CORS
  cors(req, res);

  // Si c'est une requête préliminaire OPTIONS, renvoyer 200
  if (req.method === "OPTIONS") {
    return res.status(200).end(); // Répondre aux requêtes OPTIONS
  }

  // Utilisation de NextAuth pour gérer l'authentification (sans passer authConfig ici)
  return NextAuth(req, res); // NextAuth prend deux arguments
};

export default handleRequest;
