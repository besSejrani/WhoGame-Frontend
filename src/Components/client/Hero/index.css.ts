import { style } from "@vanilla-extract/css";

// ======================================
// Hero
// ======================================
export const hero = style({
  display: "grid",
  gridTemplateColumns: "45% 55%",
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
  width: "90%",
  fontSize: "1.6rem",
  lineHeight: "2.2rem",
  margin: "1.5rem 0rem 2.5rem 0rem",
});
