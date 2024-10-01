import authConfig from "./auth.config";
import NextAuth from "next-auth";

import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_REDIRECT,
  publicRoutes,
} from "./routes";

// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig);
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);
  const isApiAuthPrefix = nextUrl.pathname.startsWith(apiAuthPrefix);

  if (isApiAuthPrefix) {
    return;
  }

  if (isAuthRoutes) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoutes) {
    return Response.redirect(new URL("/login", nextUrl));
  }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
