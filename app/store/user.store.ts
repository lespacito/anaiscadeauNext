/* eslint-disable no-unused-vars */
import { create } from "zustand";

type User = {
  name: string | null;
  role: string;
};

export const useUserStore = create<{
  user: User | null;
  setUser: (userData: User | null) => void;
}>((set) => ({
  user: null,
  setUser: (userData: User | null) => set({ user: userData }),
}));
