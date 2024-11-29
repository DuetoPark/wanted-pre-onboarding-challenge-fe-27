import { create } from "zustand";

type Store = {
  token: string | null;
  setToken: (token: Store["token"]) => void;
};

export const useAuthStore = create<Store>()((set) => ({
  token: window.localStorage.getItem("token") || null,
  setToken: (newToken) => set(() => ({ token: newToken })),
}));
