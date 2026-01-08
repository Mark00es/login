import { create } from 'zustand'

type Store = {
  mode: boolean
  setMode: (mode: boolean) => void
}

export const useThemeStore = create<Store>()((set) => ({
  mode: false,
  setMode: (mode: boolean) => set(() => ({ mode })),
}))