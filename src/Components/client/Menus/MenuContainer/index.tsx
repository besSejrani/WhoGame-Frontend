import React, { ReactNode } from "react";

// ========================================================================================================

interface MenuContainerProps {
  children: ReactNode;
  className?: string;
}

const MenuContainer: React.FC<MenuContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        text-[1.5rem] flex flex-col items-start shadow-menu-black rounded-xl overflow-hidden p-2 
        dark:shadow-menu-white
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default MenuContainer;

// ========================================================================================================
