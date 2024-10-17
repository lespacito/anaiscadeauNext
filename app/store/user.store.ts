/* eslint-disable no-unused-vars */
import { User } from "next-auth";
import { create } from "zustand";

export const useUserStore = create<{
  user: User | null;
  setUser: (userData: User | null) => void;
}>((set) => ({
  user: null,
  setUser: (userData: User | null) => set({ user: userData }),
}));
