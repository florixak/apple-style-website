import { create } from "zustand";

type MacBookTexture = `/videos/feature-${string}.mp4`;
interface MacBookState {
  color: string;
  setColor: (color: string) => void;

  scale: number;
  setScale: (scale: number) => void;

  texture: MacBookTexture;
  setTexture: (texture: MacBookTexture) => void;

  reset: () => void;
}

const useMacBookStore = create<MacBookState>((set) => ({
  color: "#2e2e2c",
  setColor: (color: string) => set({ color }),

  scale: 0.08,
  setScale: (scale: number) => set({ scale }),

  texture: `/videos/feature-1.mp4`,
  setTexture: (texture: MacBookTexture) => set({ texture }),

  reset: () =>
    set({ color: "#2e2e2c", scale: 0.08, texture: `/videos/feature-1.mp4` }),
}));

export default useMacBookStore;
