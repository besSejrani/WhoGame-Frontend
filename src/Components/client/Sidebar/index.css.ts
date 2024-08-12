import { style, keyframes } from "@vanilla-extract/css";

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
// Sticky
// ======================================
export const sticky = style({
  position: "sticky",
  top: "6rem",
  margin: "6rem 0rem",
  height: "max-content",
});

// ======================================
// Grid
// ======================================
export const grid = style({
  margin: "6rem 0rem",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
  width: "100%",
  gridGap: "1rem",
  gridRowGap: "2rem",
  position: "relative",
});

// ======================================
// Sidebar
// ======================================
export const sidebar = style({
  height: "30rem",
  width: "100%",
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
  display: "flex",
  flexDirection: "column",
});

// ======================================
// Chat Container
// ======================================
export const chatContainer = style({
  flex: 1,
  overflowY: "auto",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

// ======================================
// Form Container
// ======================================
export const formContainer = style({
  borderTop: "1px solid rgba(0,0,0,0.3)",
});

// ======================================
// Chat Group
// ======================================
export const chatGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

// ======================================
// Chat User
// ======================================
export const chatUser = style({
  alignSelf: "flex-end",
  background: "#e0f7fa",
  padding: "0.8rem",
  borderRadius: "1rem",
  maxWidth: "60%",
  wordWrap: "break-word",
  overflowWrap: "break-word",
});

// ======================================
// Chat Bot
// ======================================
export const chatBot = style({
  alignSelf: "flex-start",
  background: "#e0e0e0",
  padding: "0.8rem",
  borderRadius: "1rem",
  maxWidth: "60%",
  wordWrap: "break-word",
  overflowWrap: "break-word",
});

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const loadingSpinner = style({
  display: "inline-block",
  width: "20px",
  height: "20px",
  border: "2px solid #f3f3f3",
  borderTop: "2px solid #3498db",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
});

const blink = keyframes({
  "0%": { opacity: 0.2 },
  "20%": { opacity: 1 },
  "100%": { opacity: 0.2 },
});

export const typingIndicator = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  alignSelf: "flex-start",
  padding: "0.8rem",
  borderRadius: "1rem",
  background: "#e0e0e0",
});

export const typingDot = style({
  width: "6px",
  height: "6px",
  backgroundColor: "#333",
  borderRadius: "50%",
  animation: `${blink} 1.4s infinite both`,
  selectors: {
    "&:nth-child(2)": {
      animationDelay: "0.2s",
    },
    "&:nth-child(3)": {
      animationDelay: "0.4s",
    },
  },
});
