import { auth } from "@/auth";
import Provider from "@/util/Provider";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <Provider>{children}</Provider>
    </SessionProvider>
  );
};

export default Layout;
