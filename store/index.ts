import { create } from "zustand";

interface MacBookState {
  color: string;
  setColor: (color: string) => void;

  scale: number;
  setScale: (scale: number) => void;

  reset: () => void;
}

const useMacBookStore = create<MacBookState>((set) => ({
  color: "#2e2e2c",
  setColor: (color: string) => set({ color }),

  scale: 0.08,
  setScale: (scale: number) => set({ scale }),

  reset: () => set({ color: "#2e2e2c", scale: 0.08 }),
}));

export default useMacBookStore;
