"use client";
import React from "react";
import { getUsername } from "@/actions/getUsername";
import { useUserStore } from "@/app/store/user.store";
import { ProfileForm } from "@/components/auth/ProfileForm";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useQuery } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

const fetchUser = async () => {
  return await getUsername();
};

const Profile = () => {
  const [progress, setProgress] = useState(13);
  const { user, setUser } = useUserStore();

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = async () => {
    await signOut();
    setUser(null);
  };

  const {
    data: fetchedUser,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    retry: false,
  });

  useEffect(() => {
    if (fetchedUser) {
      setUser(fetchedUser);
    }
  }, [fetchedUser, setUser]);

  if (isLoading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <p className="mt-4">Chargement du profil...</p>
        <Progress value={progress} className="w-1/2 max-w-md" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500">
          Une erreur est survenue lors du chargement du profil.
        </p>
        <p className="text-sm text-gray-600">{(error as Error).message}</p>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Réessayer
        </Button>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-4xl font-bold">Mon compte</h1>
      <div className="mb-6 rounded-lg p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">
          Informations personnelles
        </h2>
        <p className="mb-2">
          <span className="font-medium">Nom :</span> {user?.name}
        </p>
        <ProfileForm />
      </div>
      <Button onClick={handleLogout} variant="destructive" className="w-full">
        Déconnexion
      </Button>
    </div>
  );
};
export default Profile;
