import { create } from "zustand";
import type { ReactNode } from "react";

type ModalStore = {
  isOpen: boolean;
  content: ReactNode | null;
  openModal: (content?: ReactNode) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  content: null,
  openModal: (content) => set({ isOpen: true, content }),
  closeModal: () => set({ isOpen: false, content: null }),
}));
