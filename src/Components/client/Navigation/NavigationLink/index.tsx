// NavigationLink.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  root,
  link,
  hoverLink,
  label,
} from "@/Components/client/Navigation/NavigationLink/index.css";

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
    <Link href={href} className={`${link} ${isNameInPath ? hoverLink : ""}`}>
      <div className={root}>
        {children}
        <p className={label}>{label}</p>
      </div>
    </Link>
  );
};

export default NavigationLink;
