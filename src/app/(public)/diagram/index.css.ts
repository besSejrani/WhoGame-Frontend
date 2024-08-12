import { style } from "@vanilla-extract/css";

// ======================================
// Root
// ======================================
export const root = style({
  padding: "10rem 0rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

// ======================================
// Title
// ======================================
export const title = style({
  fontSize: "4rem",
  fontWeight: 350,
  width: "100%",
  textAlign: "center",
  margin: "0rem 0rem 2rem 0rem",
});

// ======================================
// Paragraph
// ======================================
export const paragraph = style({
  textAlign: "center",
  width: "70%",
  fontSize: "1.4rem",
  margin: "0rem 0rem 7rem 0rem",
});
