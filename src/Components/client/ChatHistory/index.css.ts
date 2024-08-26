import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "7fr 3fr",
  gridColumnGap: "4rem",
});

export const chatSection = style({
  width: "100%",
  borderRadius: "2rem",
  padding: "3rem",
  boxShadow: `
  rgba(0, 0, 0, 0.2) 0px 4px 2px -2px,
  rgba(0, 0, 0, 0.2) 0px 2px 2px 0px,
  rgba(0, 0, 0, 0.3) 0px 2px 6px 0px
`,
});

export const infoSection = style({
  width: "100%",
  borderRadius: "2rem",
  padding: "3rem",
  boxShadow: `
  rgba(0, 0, 0, 0.2) 0px 4px 2px -2px,
  rgba(0, 0, 0, 0.2) 0px 2px 2px 0px,
  rgba(0, 0, 0, 0.3) 0px 2px 6px 0px
`,
});

export const heading = style({
  fontSize: "5rem",
  fontWeight: 300,
  marginBottom: "1rem",
});

export const messageContainer = style({
  marginBottom: "1rem",
  display: "flex",
  flexDirection: "column",
});

const card = style({
  padding: "0.75rem",
  borderRadius: "0.5rem",
  marginBottom: "0.5rem",
  maxWidth: "70%",
});

export const questionCard = style([
  card,
  {
    backgroundColor: "#e6f2ff",
    alignSelf: "flex-end",
    fontSize: "1.8rem",
  },
]);

export const answerCard = style([
  card,
  {
    backgroundColor: "#e0e0e0",
    fontSize: "1.8rem",
    alignSelf: "flex-start",
  },
]);

export const infoHeading = style({
  fontSize: "3rem",
  fontWeight: 300,
  margin: "0rem 0rem 2rem 0rem",
});

export const hr = style({
  margin: "0.5rem 0",
  border: "none",
  borderTop: "1px solid #ccc",
});
