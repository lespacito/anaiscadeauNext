import { NextApiRequest, NextApiResponse } from "next";
import { middleware } from "@/auth"; // Importer le middleware

// Middleware pour gérer les requêtes GET et POST
export const GET = (req: NextApiRequest, res: NextApiResponse) => {
  return middleware(req, res); // Appeler le middleware pour traiter les requêtes GET
};

export const POST = (req: NextApiRequest, res: NextApiResponse) => {
  return middleware(req, res); // Appeler le middleware pour traiter les requêtes POST
};
