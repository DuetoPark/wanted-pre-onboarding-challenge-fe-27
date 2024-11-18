import { create } from "zustand";

type Store = {
  token: string | null;
  setToken: (token: Store["token"]) => void;
};

export const useAuthStore = create<Store>()((set) => ({
  token: null,
  setToken: (newToken) => set(() => ({ token: newToken })),
}));
