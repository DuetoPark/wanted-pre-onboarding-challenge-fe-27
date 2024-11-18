import { create } from "zustand";

type Store = {
  mode: "read" | "modify" | "new";
  setMode: (newMode: Store["mode"]) => void;
};

export const useTodoStore = create<Store>()((set) => ({
  mode: "read",
  setMode: (newMode) => set(() => ({ mode: newMode })),
}));
