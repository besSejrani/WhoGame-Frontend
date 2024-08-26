import { style } from "@vanilla-extract/css";

export const header = style({
  display: "grid",
  justifyContent: "space-between",
  padding: "4rem 2rem",
  backgroundColor: "rgba(255,255,255,0.1)",
});

export const headerColumn = style({
  fontSize: "2rem",
});
