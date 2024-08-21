import React, { useState } from "react";
import { Check } from "lucide-react";

import {
  checkboxBox,
  checkboxChecked,
  checkboxContainer,
  checkboxLabel,
} from "./index.css";

// Component
interface CustomCheckboxProps {
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
  children: React.ReactNode;
  styleOverrides?: React.CSSProperties;
}

const Checkbox: React.FC<CustomCheckboxProps> = ({
  initialChecked = false,
  onChange,
  children,
  styleOverrides,
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <div
      className={checkboxContainer}
      onClick={handleToggle}
      style={styleOverrides}
    >
      <div className={`${checkboxBox} ${isChecked ? checkboxChecked : ""}`}>
        {isChecked && <Check size={25} color="white" />}
      </div>
      <span className={checkboxLabel}>{children}</span>
    </div>
  );
};

export default Checkbox;
