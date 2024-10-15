"use client";
import { getUsername } from "@/actions/getUsername";
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

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = async () => {
    await signOut();
  };

  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    retry: false, // Désactive les tentatives automatiques si une erreur survient
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="mt-4">Chargement du profil...</p>
        <Progress value={progress} className="w-1/2 max-w-md" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4">
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
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Mon compte</h1>
      <div className="shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">
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
