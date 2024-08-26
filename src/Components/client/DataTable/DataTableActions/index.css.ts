import {
  style,
  createVar,
  styleVariants,
  globalStyle,
} from "@vanilla-extract/css";

// Create CSS variables for dark mode
const iconColor = createVar();
const iconBoxShadow = createVar();

// Define global styles for dark mode
globalStyle(":root", {
  vars: {
    [iconColor]: "black",
    [iconBoxShadow]: `
        rgba(0, 0, 0, 0.3) 0px 2px 1px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 1px 0px,
        rgba(0, 0, 0, 0.4) 0px 1px 3px 0px
      `,
  },
});

globalStyle(":root.dark", {
  vars: {
    [iconColor]: "white",
    [iconBoxShadow]: `
        rgba(255, 255, 255, 0.3) 0px 2px 1px -1px,
        rgba(255, 255, 255, 0.3) 0px 1px 1px 0px,
        rgba(255, 255, 255, 0.4) 0px 1px 3px 0px
      `,
  },
});

export const root = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const icon = style({
  fontSize: "2rem",
  color: iconColor,
  padding: "0.5rem",
  boxShadow: iconBoxShadow,
  borderRadius: "0.5rem",
  margin: "0rem 1rem 0rem 0rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  cursor: "pointer",
});
