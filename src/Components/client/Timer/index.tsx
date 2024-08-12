import React, { useState, useEffect } from "react";

// ==========================================================================================

const Timer = () => {
  // ===========================
  // State
  // ===========================
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  // ===========================
  // Events
  // ===========================
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          return 0;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <p>
        <span style={{ fontWeight: 500 }}>Timer:</span>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </p>
    </div>
  );
};

export default Timer;
