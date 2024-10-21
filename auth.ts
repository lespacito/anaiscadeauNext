import { PrismaAdapter } from "@auth/prisma-adapter";
import { Role } from "@prisma/client";
import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import authConfig from "./auth.config";
import { db } from "./lib/db";

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
      // Allow all providers to sign in
      return account?.provider !== "credentials"; // Modify as necessary
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

      token.id = user.id;
      token.role = user.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60,
  },
  providers: [
    Resend({
      from: "noreplyg@anaispassions.ch",
    }),
    ...authConfig.providers,
  ],
});
