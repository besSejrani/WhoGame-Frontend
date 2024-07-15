import { style } from "@vanilla-extract/css";

// ======================================
// Root
// ======================================
export const root = style({
  display: "grid",
  gridTemplateColumns: "1fr 25rem",
  width: "100%",
  gridColumnGap: "4rem",
});

// ======================================
// Grid
// ======================================
export const grid = style({
  margin: "6rem 0rem",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
  width: "100%",
  height: "100%",
  gridGap: "1rem",
  position: "relative",
});

// ======================================
// Sidebar
// ======================================
export const sidebar = style({
  position: "sticky",
  top: "6rem",
  height: "50rem",
  width: "100%",
  margin: "6rem 0rem",
  borderRadius: "1rem",
  overflow: "hidden",
  boxShadow: `
        rgba(0, 0, 0, 0.2) 0px 4px 2px -2px,
        rgba(0, 0, 0, 0.2) 0px 2px 2px 0px,
        rgba(0, 0, 0, 0.3) 0px 2px 6px 0px
      `,
});

// ======================================
// Sidebar Content
// ======================================
export const sidebarContent = style({
  height: "100%",
  display: "grid",
  gridTemplateRows: "9fr 1fr",
});
