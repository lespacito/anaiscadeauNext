import { NextApiRequest, NextApiResponse } from "next";

export async function cors(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Restreindre cela à ton domaine en production pour plus de sécurité
  res.setHeader("Access-Control-Allow-Origin", process.env.CORS_ORIGIN || "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Authorization, Content-Type, Cache-Control, Pragma"
  );

  // Si c'est une requête préliminaire OPTIONS, répondre directement
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
}
