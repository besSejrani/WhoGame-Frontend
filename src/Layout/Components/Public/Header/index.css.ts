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
  alignItems: "center",
});

// ======================================
// Link
// ======================================
export const link = style({
  fontSize: "1.8rem",
  margin: "0rem 2rem 0rem 0rem",
});

// ======================================
// List
// ======================================
export const li = style({
  listStyleType: "none",
});

// flex
// css grid
// html structure
