import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  height: "300px",
  perspective: "1000px",
  cursor: "pointer",
});

export const cardInner = style({
  position: "relative",
  width: "100%",
  height: "100%",
  textAlign: "center",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
  boxShadow: `rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.2) 0px 1px 1px 0px, rgba(0, 0, 0, 0.3) 0px 1px 3px 0px`,
  borderRadius: "0.5rem",
});

export const flippedCard = style({
  transform: "rotateY(180deg)",
});

const cardFace = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  display: "flex",
  flexDirection: "column",
  borderRadius: "0.5rem",
  overflow: "hidden",
});

export const cardFront = style([
  cardFace,
  {
    backgroundColor: "#ffffff",
    transform: "rotateY(180deg)",
  },
]);

export const cardBack = style([
  cardFace,
  {
    backgroundColor: "#111827",
    transform: "rotateY(0deg)",
    justifyContent: "center",
    alignItems: "center",
  },
]);

export const image = style({
  height: "250px",
  width: "100%",
  objectFit: "cover",
});

export const paragraph = style({
  fontSize: "1.5rem",
});

export const icon = style({
  cursor: "pointer",
});
