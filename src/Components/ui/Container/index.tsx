import React from "react";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`
      flex flex-col mx-auto
      w-[90%] 
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default Container;
