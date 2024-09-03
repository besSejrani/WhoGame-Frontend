"use client";

// React
import React, { useEffect, useState, CSSProperties } from "react";

// Next
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

// UI
import Container from "@/Components/ui/Container";

// Components
import Button from "@/Components/client/Button";
import DarkMode from "@/Components/client/Menus/DarkMode";
import Language from "@/Components/client/Menus/Language";

// Paths
import { paths } from "@/paths";

// ==========================================================================================

const Header: React.FC = () => {
  // ==============================
  // State
  // ==============================
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // ==============================
  // Event
  // ==============================
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;
      const isScrolledPast50px = currentScrollPos > 50;

      setIsHeaderVisible(
        (isScrolledDown && !isScrolledPast50px) || // Show when scrolling down but not past 50px
          (!isScrolledDown && currentScrollPos > 0) || // Show when scrolling up and not at the top
          currentScrollPos <= 0 // Always show at the top
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const headerWrapperStyle: CSSProperties = {
    transition: "transform 0.3s ease-in-out",
    transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
  };

  if (!mounted) return null;

  return (
    <div
      style={headerWrapperStyle}
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-dark shadow-md"
    >
      <Container className="py-6">
        <header className="flex justify-between items-center">
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

          <div className="flex items-center">
            <ul className="flex items-center">
              <li className="list-none">
                <Link
                  href={paths.homePage()}
                  className="text-lg mr-8 dark:text-white"
                >
                  Home
                </Link>
              </li>

              <li className="list-none">
                <Link
                  href={paths.diagramPage()}
                  className="text-lg mr-8 dark:text-white"
                >
                  Diagram
                </Link>
              </li>

              <li className="list-none">
                <Button
                  text="Let's Start"
                  type="button"
                  variant="outlined"
                  href={paths.startGamePage()}
                  className="text-xl font-light py-3 px-6 mr-4 rounded-full"
                />
              </li>
            </ul>

            <ul className="flex items-center ml-12">
              <DarkMode
                className="mr-5"
                isDarkMode={resolvedTheme === "dark"}
                toggleDarkMode={toggleDarkMode}
              />
              {/* <Language /> */}
            </ul>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Header;
