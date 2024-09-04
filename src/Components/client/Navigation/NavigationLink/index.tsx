// NavigationLink.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavigationLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  label,
  children,
}) => {
  const pathname = usePathname();
  const isNameInPath = href === pathname;

  return (
    <Link
      href={href}
      className={`
        text-lg flex items-center p-8 no-underline
        hover:bg-primary
        ${isNameInPath ? "bg-[rgba(255,181,0,0.7)]" : ""}
      `}
    >
      <div className="flex items-center w-max">
        {children}
        <p className="opacity-70">{label}</p>
      </div>
    </Link>
  );
};

export default NavigationLink;
