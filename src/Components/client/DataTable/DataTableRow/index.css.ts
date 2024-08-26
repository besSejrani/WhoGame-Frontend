import { style, styleVariants } from "@vanilla-extract/css";

export const row = style({
  padding: "2rem",
  display: "grid",
  alignItems: "center",
});

export const cell = style({
  fontSize: "1.6rem",
  padding: "1rem 0rem",
  opacity: 0.85,
});

export const rowVariants = styleVariants({
  odd: { backgroundColor: "rgba(255, 255, 255, 0.05)" },
  even: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
});
