import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import MenuContainer from "../MenuContainer";

// ========================================================================================================

interface DarkModeProps {
  className?: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkMode: React.FC<DarkModeProps> = ({
  className = "",
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <div
      className={`relative cursor-pointer ${className}`}
      tabIndex={0}
      onClick={toggleDarkMode}
      onKeyDown={(e) => e.key === "Enter" && toggleDarkMode()}
    >
      <MenuContainer>
        <div className="flex justify-center items-center">
          {isDarkMode ? (
            <Moon
              className="text-black dark:text-white"
              size={25}
              strokeWidth={1.25}
            />
          ) : (
            <Sun
              className="text-black dark:text-white"
              size={25}
              strokeWidth={1.25}
            />
          )}
        </div>
      </MenuContainer>
    </div>
  );
};

export default DarkMode;
