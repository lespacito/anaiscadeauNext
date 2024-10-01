import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const session = await auth();
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Layout;
