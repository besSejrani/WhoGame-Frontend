import { style } from "@vanilla-extract/css";

// ======================================
// Root
// ======================================
export const root = style({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

// ======================================
// Title
// ======================================
export const title = style({
  fontSize: "4rem",
  fontWeight: 300,
  margin: "0rem 0rem 1rem 0rem",
});

// ======================================
// Paragraph
// ======================================
export const paragraph = style({
  fontSize: "2rem",
  fontWeight: 300,
  width: "50%",
  textAlign: "center",
  lineHeight: "2.5rem",
  margin: "0rem 0rem 10rem 0rem",
});

// ======================================
// Form Title
// ======================================
export const formTitle = style({
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: 300,
  margin: "0rem 0rem 5rem 0rem",
});

// ======================================
// Card
// ======================================
export const card = style({
  padding: "3rem 3rem",
  margin: "0rem 5rem",
  backgroundColor: "white",
  height: "max-content",
  width: "25%",

  overflow: "hidden",

  boxShadow: `
      rgba(0, 0, 0, 0.1) 0px -4px 2px -2px,
      rgba(0, 0, 0, 0.1) 0px 2px 2px 0px,
      rgba(0, 0, 0, 0.2) 0px 2px 4px 0px
    `,
  borderRadius: "2rem",
});
