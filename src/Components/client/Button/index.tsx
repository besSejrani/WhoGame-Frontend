import React from "react";

// Next
import Link from "next/link";

// Styles
import { containedButton, outlinedButton } from "./index.css";

// ==========================================================================================

interface IButton {
  text: string;
  href?: string;
  onClick?: () => void;
  variant: "contained" | "outlined";
  type: "button" | "reset" | "submit";
  styleOverrides?: React.CSSProperties;
}

const Button: React.FC<IButton> = ({
  variant,
  onClick,
  type,
  text,
  href,
  styleOverrides = {},
}) => {
  const className = variant === "contained" ? containedButton : outlinedButton;

  const showButton = () => {
    if (!href) {
      return (
        <button
          className={className}
          type={type}
          onClick={onClick}
          style={styleOverrides}
        >
          {text}
        </button>
      );
    } else {
      return (
        <Link href={href} className={className} style={styleOverrides}>
          {text}
        </Link>
      );
    }
  };

  return showButton();
};

export default Button;
