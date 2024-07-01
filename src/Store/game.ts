import { create } from "zustand";

// ==============================
//  Types
// ==============================
type GameStore = {
  counter: number;
  sessionId: string | null;
  incrementCounter: () => void;
  resetCounter: () => void;
  setSessionId: (newSessionId: string) => void;
  resetSession: () => void;
};

// ==============================
//  Store
// ==============================
export const useGameStore = create<GameStore>((set) => ({
  counter: 0,
  sessionId: null,
  incrementCounter: () =>
    set((state) => ({
      counter: state.counter + 1,
    })),
  resetCounter: () =>
    set({
      counter: 0,
    }),
  setSessionId: (newSessionId) =>
    set({
      sessionId: newSessionId,
    }),
  resetSession: () =>
    set({
      counter: 0,
      sessionId: "",
    }),
}));
