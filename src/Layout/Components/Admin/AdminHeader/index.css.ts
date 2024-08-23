import { style } from "@vanilla-extract/css";

// ======================================
// Root
// ======================================
export const root = style({
  position: "fixed",
  width: "100%",
  backgroundColor: "white",
  zIndex: 999,
  boxShadow: "0px 8px 10px -7px rgba(0, 0, 0, 0.3)",
});

// ======================================
// Header
// ======================================
export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

// ======================================
// Links
// ======================================
export const links = style({
  display: "flex",
  // flexDirection: "column",
  alignItems: "center",
});

// ======================================
// Link
// ======================================
export const link = style({
  margin: "0rem 1rem 0rem 0rem",
});

// ======================================
// List
// ======================================
export const li = style({
  listStyleType: "none",
});
