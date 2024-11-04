import { AppSidebar } from "@/components/sidebar/SidebarDemo";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import * as React from "react";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-full border-border">
        <main className="flex h-full flex-col gap-4">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
