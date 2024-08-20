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
  label: string;
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CustomCheckboxProps> = ({
  label,
  initialChecked = false,
  onChange,
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
    <div className={checkboxContainer} onClick={handleToggle}>
      <div className={`${checkboxBox} ${isChecked ? checkboxChecked : ""}`}>
        {isChecked && <Check size={16} color="white" />}
      </div>
      <span className={checkboxLabel}>{label}</span>
    </div>
  );
};

export default Checkbox;
