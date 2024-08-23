import { style } from "@vanilla-extract/css";

// ======================================
//
// ======================================
export const footerStyles = style({
  backgroundColor: "#111827",
  color: "#FFFFFF",
  padding: "5rem 0rem 2rem 0rem",
  backgroundImage: 'url("/background-grid.webp")',
  // backgroundImage: `linear-gradient(76deg, rgb(17 24 39 / 100%), rgb(8 98 158 / 70%)), url(/background-grid.webp)`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  borderTopLeftRadius: "5rem",
});

// ======================================
//
// ======================================
export const sectionStyles = style({
  display: "flex",
  flexDirection: "column",
});

// ======================================
//
// ======================================
export const socialIconsStyles = style({
  display: "flex",
  gap: "1rem",
  marginTop: "10px",
});
