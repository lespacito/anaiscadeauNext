import { create } from "zustand";
import { User } from "next-auth";

export const useUserStore = create<{
  user: User | null;
  setUser: (userData: User | null) => void;
}>((set) => ({
  user: null,
  setUser: (userData: User | null) => set({ user: userData }),
}));
