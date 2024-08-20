import { style } from "@vanilla-extract/css";

// ======================================
// Container
// ======================================
export const checkboxContainer = style({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

// ======================================
// Box
// ======================================
export const checkboxBox = style({
  width: "20px",
  height: "20px",
  border: "2px solid #ccc",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "8px",
  transition: "all 0.2s ease-in-out",
});

// ======================================
// Checked
// ======================================
export const checkboxChecked = style({
  backgroundColor: "#3b82f6",
  borderColor: "#3b82f6",
});

// ======================================
// Label
// ======================================
export const checkboxLabel = style({
  userSelect: "none",
});
