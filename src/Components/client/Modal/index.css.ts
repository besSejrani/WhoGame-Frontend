import { style } from "@vanilla-extract/css";

// ======================================
// Overlay
// ======================================
export const overlay = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "26%",
  border: "none",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "white",
  zIndex: 1000,
  borderRadius: ".5rem",
  cursor: "pointer",
  "::backdrop": {
    background: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    transition: "opacity 0.3s ease", // Smooth transition
  },
});

// ======================================
// Modal
// ======================================
export const modal = style({
  height: "100%",
  width: "100%",
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "0.5rem",
  cursor: "default",
});
