import { style } from "@vanilla-extract/css";

// ======================================
// Contained Button
// ======================================
export const containedButton = style({
  backgroundColor: "#FFB500",
  color: "white",
  fontSize: "1.6rem",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  margin: "0rem 1rem 0rem 0rem",
  cursor: "pointer",
  border: "none",
  transition: "ease-in-out 0.2s",

  ":hover": {
    backgroundColor: "#f8b000",
    transition: "ease-in-out 0.2s",
  },

  selectors: {
    "&:disabled": {
      backgroundColor: "#ddd",
      cursor: "not-allowed",
    },
  },
});

// ======================================
// Outlined Button
// ======================================
export const outlinedButton = style({
  backgroundColor: "white",
  color: "#FFB500",
  border: "2px solid #FFB500",
  fontSize: "1.6rem",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
  transition: "ease-in-out 0.2s",
  fontWeight: 300,

  ":hover": {
    backgroundColor: "#FFB500",
    color: "white",
    transition: "ease-in-out 0.2s",
  },

  selectors: {
    "&:disabled": {
      backgroundColor: "#ddd",
      border: "2px solid #c0c0c0",
      cursor: "not-allowed",
      color: "grey",
      transition: "ease-in-out 0.2s",
    },
    "&:disabled:hover": {
      border: "2px solid #c0c0c0",
      backgroundColor: "#c0c0c0",
      transition: "ease-in-out 0.2s",
    },
  },
});
