// React
import React, { useState } from "react";

// Icons
import { Check } from "lucide-react";

// ========================================================================================================

// Interface
interface CustomCheckboxProps {
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

const Checkbox: React.FC<CustomCheckboxProps> = ({
  initialChecked = false,
  onChange,
  children,
  className = "",
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
      className={`flex items-center cursor-pointer ${className}`}
      onClick={handleToggle}
    >
      <div
        className={`w-8 h-8 mr-3 border-2 border-gray-300 rounded flex items-center justify-center transition-all duration-200 ease-in-out
          ${isChecked ? "bg-primary border-primary" : ""}`}
      >
        {isChecked && <Check size={25} color="white" />}
      </div>
      <span className="select-none">{children}</span>
    </div>
  );
};

export default Checkbox;
