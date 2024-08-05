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

  ":hover": {
    backgroundColor: "#f8b000",
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

  ":hover": {
    backgroundColor: "#FFB500",
    color: "white",
  },

  selectors: {
    "&:disabled": {
      color: "#ddd",
      borderColor: "#ddd",
      cursor: "not-allowed",
    },
  },
});
