import { style } from "@vanilla-extract/css";

// ======================================
// Container
// ======================================
export const container = style({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  width: "90%",

  "@media": {
    "screen and (max-width: 1200px)": {
      width: "80%",
    },
    "screen and (max-width: 800px)": {
      width: "50%",
    },
    "screen and (max-width: 600px)": {
      width: "100%",
    },
  },
});
