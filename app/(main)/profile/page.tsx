import { getUsername } from "@/actions/getUsername";
import { ProfileForm } from "@/components/auth/ProfileForm";
import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
  return await getUsername();
};
const Profile = async () => {
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
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>Une erreur est survenue lors de l'affichage</p>;
  }
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-4xl font-bold">Mon compte</h1>
      <p>Nom: {user?.name}</p>
      <ProfileForm />
    </div>
  );
};
export default Profile;
