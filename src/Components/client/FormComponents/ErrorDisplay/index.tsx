import React from "react";

// Styles
import { displayError } from "./index.css";

//===================================================================================

const ErrorDisplay = ({ error }) => {
  if (!error || !error.type || !error.message) {
    return null;
  }

  const messages = {
    required: error.message,
    minLength: error.message,
    maxLength: error.message,
    pattern: error.message,
  };

  return (
    <p className={displayError}>
      {messages[error.type] || "An error occurred"}
    </p>
  );
};

export default ErrorDisplay;

//===================================================================================
