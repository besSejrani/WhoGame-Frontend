// NavigationLink.css.ts
import { style } from "@vanilla-extract/css";

// ======================================
// Root
// ======================================
export const root = style({
  display: "flex",
  alignItems: "center",
  width: "max-content",
});

// ======================================
// Link
// ======================================
export const link = style({
  fontSize: "1.8rem",
  display: "flex",
  alignItems: "center",
  padding: "2rem",
  textDecoration: "none",
  ":hover": {
    backgroundColor: "#FFB500",
  },
});

// ======================================
// Hover Link
// ======================================
export const hoverLink = style({
  backgroundColor: "rgb(255 181 0 / 70%)",
});

// ======================================
// Label
// ======================================
export const label = style({
  opacity: "0.7",
});
