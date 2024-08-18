import { style } from "@vanilla-extract/css";

// ======================================
// Section
// ======================================
export const section = style({
  width: "62%",

  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  overflow: "hidden",

  alignItems: "center",
  border: "2px solid #111827",
  borderRadius: "3rem",
});

export const visual = style({
  padding: "4.5rem 0rem",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "#111827",

  backgroundImage: 'url("/background-grid.webp")',
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
});

export const rules = style({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

// ======================================
// Title
// ======================================
export const title = style({
  fontSize: "4rem",
  fontWeight: 350,
  width: "100%",

  margin: "0rem 0rem 3rem 0rem",
});

// ======================================
// Paragraph
// ======================================
export const paragraph = style({
  textAlign: "center",
  margin: "0rem 0rem 2rem 0rem",
  width: "70%",
  fontSize: "1.4rem",
  opacity: "0.85",
});
