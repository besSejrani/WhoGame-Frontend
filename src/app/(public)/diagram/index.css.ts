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
// Architecture Image Group
// ======================================
export const architectureImageGroup = style({
  width: "95%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

// ======================================
// Architecture
// ======================================
export const architecture = style({
  padding: " 3rem",
  margin: "0rem 10rem 0rem 0rem",
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
// Image
// ======================================
export const image = style({
  objectFit: "contain",
});

// ======================================
// Title
// ======================================
export const title = style({
  fontSize: "3rem",
  fontWeight: 350,
  width: "100%",
  textAlign: "center",

  margin: "0rem 0rem 3rem 0rem",
});

// ======================================
// Group
// ======================================
export const group = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "1rem 0rem",
});

// ======================================
// Service
// ======================================
export const service = style({
  display: "flex",
  alignItems: "center",
  margin: "0rem 0rem 0.2rem 0rem",
  fontSize: "1.4rem",
});

// ======================================
// Link
// ======================================
export const link = style({
  fontSize: "1.1rem",
  border: "2px solid black",
  borderRadius: "2rem",
  padding: "0.5rem 1rem",
  transition: "ease-in-out 0.2s",

  ":hover": {
    backgroundColor: "black",
    color: "white",
    transition: "ease-in-out 0.2s",
  },
});
