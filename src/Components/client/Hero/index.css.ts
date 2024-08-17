import { style } from "@vanilla-extract/css";

// ======================================
// Hero
// ======================================
export const hero = style({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  alignItems: "center",
  justifyItems: "center",
  padding: "14rem 0rem 8rem 0rem",
});

// ======================================
// Title
// ======================================
export const title = style({
  fontSize: "4rem",
  fontWeight: 350,
});

// ======================================
// Paragraph
// ======================================
export const paragraph = style({
  width: "80%",
  fontSize: "1.6rem",
  margin: "1rem 0rem",
});
