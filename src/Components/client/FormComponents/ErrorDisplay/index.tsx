import React from "react";

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

  return (
    <p className="text-red-500 text-sm font-extralight my-4 mx-0">{message}</p>
  );
};

export default ErrorDisplay;
