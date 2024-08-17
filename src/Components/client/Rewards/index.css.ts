import { style } from "@vanilla-extract/css";

// ======================================
// Section
// ======================================
export const section = style({
  padding: "6rem 0rem 13rem 0rem",
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

// ======================================
// Grid
// ======================================
export const grid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridColumnGap: "2rem",
});
