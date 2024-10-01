"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { logout } from "@/lib/logout";
import React from "react";

const Dashboard = () => {
  const user = useCurrentUser();
  return (
    <>
      <h1 className="text-3xl flex items center justify-center">Mon compte</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead className="w-[100px]">Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{user?.name}</TableCell>
            <TableCell className="font-medium">{user?.email}</TableCell>
            <TableCell>{user?.role}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button onClick={async () => await logout()}>Déconnexion</Button>
    </>
  );
};

export default Dashboard;
