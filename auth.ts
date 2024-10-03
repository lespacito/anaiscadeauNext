import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { db } from "./lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Role } from "@prisma/client";
import Resend from "next-auth/providers/resend";
import { NextApiRequest, NextApiResponse } from "next";

// Fonction pour gérer les CORS
const cors = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*"); // Changez '*' par votre domaine en production
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
    return true; // Indique que la gestion des CORS a été effectuée
  }
};

// Middleware pour gérer les CORS et NextAuth
export const middleware = (req: NextApiRequest, res: NextApiResponse) => {
  const corsHandled = cors(req, res);
  if (corsHandled === true) {
    return; // Si CORS géré, ne pas traiter avec NextAuth
  }

  return NextAuth(req, res, authConfig); // Traiter la requête avec NextAuth
};

// Configuration de NextAuth
export const { auth, handlers, signIn, signOut } = NextAuth({
  trustHost: true,
  pages: {
    signIn: "/login",
    error: "/error",
    verifyRequest: "/verify-request",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider !== "credentials") {
        return true;
      }
      return true;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as Role;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const user = await db.user.findUnique({ where: { id: token.sub } });

      if (!user) return token;

      token.role = user.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  providers: [
    Resend({
      from: "onboarding@resend.dev",
    }),
    ...authConfig.providers,
  ],
});
