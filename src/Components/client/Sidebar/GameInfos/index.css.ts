import { style } from "@vanilla-extract/css";

export const card = style({
  borderRadius: "1rem",
  padding: "1rem",
  margin: "2rem 0rem 0rem 0rem",
  backgroundColor: "white",
  boxShadow: `
  rgba(0, 0, 0, 0.2) 0px 4px 2px -2px,
  rgba(0, 0, 0, 0.2) 0px 2px 2px 0px,
  rgba(0, 0, 0, 0.3) 0px 2px 6px 0px
`,
});
