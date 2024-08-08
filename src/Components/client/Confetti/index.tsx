"use client";

import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set initial size
    updateWindowSize();

    // Add event listener
    window.addEventListener("resize", updateWindowSize);

    // Clean up
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      recycle={false}
      numberOfPieces={500}
    />
  );
};

export default ConfettiComponent;
