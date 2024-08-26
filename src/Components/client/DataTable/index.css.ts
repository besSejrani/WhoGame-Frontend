import { style } from "@vanilla-extract/css";

export const root = style({
  width: "100%",
  borderRadius: "2rem",
  boxShadow: `
  rgba(0, 0, 0, 0.2) 0px 4px 2px -2px,
  rgba(0, 0, 0, 0.2) 0px 2px 2px 0px,
  rgba(0, 0, 0, 0.3) 0px 2px 6px 0px
`,
});

export const paper = style({
  width: "100%",
  height: "100%",
  margin: "2rem 0rem",
  overflow: "hidden",
});

export const body = style({
  height: "100rem",
  overflowY: "scroll",
});

export const rows = style({});
