import { NextApiRequest, NextApiResponse } from "next";

export function cors(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*"); // Tu peux restreindre cela à un domaine spécifique
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Authorization, Content-Type, Cache-Control, Pragma"
  );

  // Si c'est une requête préliminaire OPTIONS, répond directement
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
}
