import React from "react";

// Styles
import { displayError } from "./index.css";

// Type for the error prop
interface ErrorDisplayProps {
  error?: {
    type: string;
    message?: string;
  };
}

//===================================================================================

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  if (!error || !error.type || !error.message) {
    return null;
  }

  const message = error.message || "An error occurred";

  return <p className={displayError}>{message}</p>;
};

export default ErrorDisplay;
