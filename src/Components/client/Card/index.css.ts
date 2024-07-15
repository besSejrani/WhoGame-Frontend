import { style } from "@vanilla-extract/css";

// ======================================
// Root
// ======================================
export const root = style({
  position: "relative",
  height: "max-content",
  display: "flex",
  flexDirection: "column",
  boxShadow: `rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.2) 0px 1px 1px 0px, rgba(0, 0, 0, 0.3) 0px 1px 3px 0px`,
  borderRadius: "0.5rem",
  overflowX: "hidden",
  cursor: "pointer",
});

// ======================================
// Image
// ======================================
export const image = style({
  height: "400px",
  width: "100%",
  objectFit: "cover",
  cursor: "pointer",
});

// ======================================
// Paragraph
// ======================================
export const paragraph = style({
  fontSize: "1.5rem",
});

// ======================================
// Icon
// ======================================
export const icon = style({
  cursor: "pointer",
});
