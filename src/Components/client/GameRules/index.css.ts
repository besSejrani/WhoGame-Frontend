import { style } from "@vanilla-extract/css";

// ======================================
// Section
// ======================================
export const section = style({
  padding: "8rem 0rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  // backgroundColor: "#111827",
  // backgroundImage: `linear-gradient(76deg, rgb(17 24 39 / 100%), rgb(8 98 158 / 70%)), url(/background-grid.webp)`,
  // backgroundImage: `linear-gradient(76deg, rgb(17 24 39 / 100%), rgb(8 98 158 / 70%)), url(/background-grid.webp)`,
  backgroundColor: "#111827",
  backgroundImage: 'url("/background-grid.webp")',
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  color: "white",
  borderRadius: "2rem",
});

// ======================================
// Title
// ======================================
export const title = style({
  fontSize: "4rem",
  fontWeight: 350,
  width: "100%",
  textAlign: "center",
  margin: "0rem 0rem 4rem 0rem",
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
