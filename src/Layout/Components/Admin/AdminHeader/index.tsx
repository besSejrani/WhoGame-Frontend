"use client";

// React
import React, { useState, useEffect } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Authentication
import { useSession, signOut } from "next-auth/react";

// UI
import Container from "@/Components/ui/Container";

// Components
import Button from "@/Components/client/Button";
import DarkMode from "@/Components/client/Menus/DarkMode";

// Paths
import { paths } from "@/paths";

// ==========================================================================================

const Header: React.FC = () => {
  const session = useSession();

  // ==============================
  // State
  // ==============================
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ==============================
  // Event
  // ==============================
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="fixed w-full bg-white z-50 shadow-md dark:bg-gray-800">
      <Container className="w-full px-4 sm:px-6 lg:px-8">
        <header className="flex justify-between items-center w-full py-4">
          <Link href={paths.homePage()}>
            <Image
              src={isDarkMode ? "/tecracer-white.svg" : "/logo.svg"}
              alt="tecRacer logo"
              height={80}
              width={180}
            />
          </Link>

          <ul className="flex items-center">
            <li className="list-none mr-4">
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
                isDarkMode={isDarkMode}
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
