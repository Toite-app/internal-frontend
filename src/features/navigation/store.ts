import { create } from "zustand";

import { persist } from "zustand/middleware";

export type NavigationStore = {
  isOpen: boolean;
  isMobileOpen: boolean;
  toggle: () => void;
  toggleMobile: () => void;
  closeMobile: () => void;
};

export const navigationStore = create(
  persist<NavigationStore>(
    (set) => ({
      isOpen: false,
      isMobileOpen: false,
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
      toggleMobile: () =>
        set((state) => ({ isMobileOpen: !state.isMobileOpen })),
      closeMobile: () => set({ isMobileOpen: false }),
    }),
    {
      name: "toite-navigation",
    }
  )
);

export const useNavigationStore = navigationStore;
