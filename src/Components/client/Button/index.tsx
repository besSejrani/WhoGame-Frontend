import React from "react";
import Link from "next/link";

// ==========================================================================================

interface IButton {
  text: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "contained" | "outlined";
  type: "button" | "reset" | "submit";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({
  variant,
  onClick,
  type,
  text,
  href,
  className = "",
  disabled,
}) => {
  const baseClasses = "cursor-pointer transition duration-200 ease-in-out";
  const variantClasses =
    variant === "contained"
      ? "bg-[#FFB500] text-white hover:bg-[#f8b000] disabled:bg-gray-300 disabled:cursor-not-allowed"
      : "border-2 border-[#FFB500] text-[#FFB500] hover:bg-[#FFB500] hover:text-white disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-500 disabled:hover:bg-gray-400";

  const buttonClasses = `${baseClasses} ${variantClasses} ${className}`;

  const showButton = () => {
    if (!href) {
      return (
        <button
          className={buttonClasses}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          {text}
        </button>
      );
    } else {
      return (
        <Link href={href} className={buttonClasses}>
          {text}
        </Link>
      );
    }
  };

  return showButton();
};

export default Button;
