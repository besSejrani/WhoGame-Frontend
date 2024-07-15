import { create } from "zustand";

// ==============================
//  Types
// ==============================
interface ToastState {
  errorMessage: string;
  infoMessage: string;
  successMessage: string;
  setErrorMessage: (message: string) => void;
  setInfoMessage: (message: string) => void;
  setSuccessMessage: (message: string) => void;
}

const useToastStore = create<ToastState>((set) => ({
  errorMessage: "",
  infoMessage: "",
  successMessage: "",
  setErrorMessage: (message) => set(() => ({ errorMessage: message })),
  setInfoMessage: (message) => set(() => ({ infoMessage: message })),
  setSuccessMessage: (message) => set(() => ({ successMessage: message })),
}));

export default useToastStore;
