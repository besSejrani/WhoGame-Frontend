"use client";

// React
import React, { useState, useEffect } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Theme
import { useTheme } from "next-themes";

// Authentication
import { signOut } from "next-auth/react";

// UI
import Container from "@/Components/ui/Container";

// Components
import Button from "@/Components/client/Button";
import DarkMode from "@/Components/client/Menus/DarkMode";

// Paths
import { paths } from "@/paths";

// ==========================================================================================

const Header: React.FC = () => {
  // ==============================
  // State
  // ==============================
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // ==============================
  // Event
  // ==============================
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <div className="fixed w-full bg-white z-50 shadow-md dark:bg-gray-800">
      <Container className="w-[100%]">
        <header className="flex justify-between items-center w-full py-4 px-8 pr-16">
          <Link href={paths.homePage()}>
            <Image
              src={
                resolvedTheme === "dark" ? "/tecracer-white.svg" : "/logo.svg"
              }
              alt="tecRacer logo"
              height={80}
              width={180}
            />
          </Link>

          <ul className="flex items-center">
            <li className="list-none mr-8">
              <Button
                text="Logout"
                type="button"
                variant="outlined"
                onClick={() => signOut({ callbackUrl: paths.homePage() })}
                className="text-xl px-4 py-2 font-light rounded-full"
              />
            </li>

            <li className="list-none">
              <DarkMode
                isDarkMode={resolvedTheme === "dark"}
                toggleDarkMode={toggleDarkMode}
              />
            </li>
          </ul>
        </header>
      </Container>
    </div>
  );
};

export default Header;
