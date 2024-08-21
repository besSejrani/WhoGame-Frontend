import { style } from "@vanilla-extract/css";

// ======================================
// Root
// ======================================
export const root = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
});

// ======================================
// Group
// ======================================
export const group = style({
  display: "flex",
  width: "90%",
  justifyContent: "center",
  alignItems: "center",
});

// ======================================
// Rules
// ======================================
export const rules = style({
  padding: "3rem",
  margin: "0rem 5rem",
  backgroundColor: "white",
  height: "max-content",

  overflow: "hidden",

  boxShadow: `
    rgba(0, 0, 0, 0.1) 0px -4px 2px -2px,
    rgba(0, 0, 0, 0.1) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.2) 0px 2px 4px 0px
  `,
  borderRadius: "3rem",
});

// ======================================
// Form
// ======================================

export const form = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
});
