// AdminSidebar.css.ts
import { style, createTheme, globalStyle } from "@vanilla-extract/css";

// ======================================
// Theme
// ======================================
export const [themeClass, vars] = createTheme({
  color: {
    background: {
      light: "white",
      dark: "#121212",
    },
    text: {
      light: "black",
      dark: "white",
    },
  },
  shadow: {
    light: `
      rgba(0, 0, 0, 0.2) 0px 4px 2px -2px,
      rgba(0, 0, 0, 0.2) 0px 2px 2px 0px,
      rgba(0, 0, 0, 0.3) 0px 2px 6px 0px
    `,
    dark: `
      rgba(255, 255, 255, 0.2) 0px 4px 2px -2px,
      rgba(255, 255, 255, 0.2) 0px 2px 2px 0px,
      rgba(255, 255, 255, 0.3) 0px 2px 6px 0px
    `,
  },
});

globalStyle(`${themeClass} hr`, {
  margin: "1rem 0",
});

// ======================================
// Root
// ======================================
export const root = style({
  position: "sticky",
  top: 0,
  height: "100vh",
  width: "100%",
  zIndex: 1,
  backgroundColor: vars.color.background.light,
  // "@media": {
  //   "(prefers-color-scheme: dark)": {
  //     backgroundColor: vars.color.background.dark,
  //   },
  // },
});

// ======================================
// Fixed Wrapper
// ======================================
export const fixedWrapper = style({
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
  padding: "7.5rem 0rem 0rem 0rem",
  overflowY: "scroll",
  boxShadow: vars.shadow.light,
  // "@media": {
  //   "(prefers-color-scheme: dark)": {
  //     boxShadow: vars.shadow.dark,
  //   },
  // },
});

// ======================================
// Nav
// ======================================
export const nav = style({
  height: "100%",
  width: "100%",
  display: "flex",
  gridRowGap: "3rem",
  flexDirection: "column",
  justifyContent: "space-between",
});

// ======================================
// Content
// ======================================
export const content = style({
  height: "100%",
  overflowY: "scroll",
  width: "100%",
});

// ======================================
// Heading
// ======================================
export const heading = style({
  fontSize: "1.8rem",
  margin: "3rem 0rem 1rem 2rem",
  // "@media": {
  //   "(prefers-color-scheme: dark)": {
  //     color: vars.color.text.dark,
  //   },
  // },
});

// ======================================
// Icon
// ======================================
export const icon = style({
  height: "2.5rem",
  width: "2.5rem",
  margin: "0rem 2rem 0rem 0rem",
  // "@media": {
  //   "(prefers-color-scheme: dark)": {
  //     color: vars.color.text.dark,
  //   },
  // },
});
