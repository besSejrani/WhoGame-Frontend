import React from "react";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`
      flex flex-col mx-auto w-100
      xs:w-[90%] 
      sm:w-[90%] 
      md:w-[90%] 
      lg:w-[90%] 
      xl:w-[90%] 
      2xl:w-[90%] 
      4k:w-[90%]
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default Container;
