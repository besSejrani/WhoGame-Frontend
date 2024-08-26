import { style } from "@vanilla-extract/css";

// ======================================
// Hero
// ======================================
export const hero = style({
  display: "grid",
  gridTemplateColumns: "50% 50%",
  alignItems: "center",
  padding: "22rem 0rem 8rem 0rem",
});

// ======================================
// Title
// ======================================
export const title = style({
  fontSize: "7rem",
  margin: "0rem 0rem 2rem 0rem",
  fontWeight: 350,
});

// ======================================
// Paragraph
// ======================================
export const paragraph = style({
  width: "80%",
  fontSize: "2.5rem",
  lineHeight: "3.5rem",
  margin: "1.5rem 0rem 2.5rem 0rem",
});
