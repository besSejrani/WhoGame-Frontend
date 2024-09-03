"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import MenuContainer from "@Components/client/Menus/MenuContainer";

// ========================================================================================================

const Language = () => {
  const pathName = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement | null>(null);

  // ==============================
  //            State
  // ==============================
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // ==============================
  //            Events
  // ==============================

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const pushPath = async (path: string, locale: string) => {
    setIsMenuOpen(false);
    // Uncomment and adjust this line when you have routing set up for language changes
    // await router.push(`/${locale}${path}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <>
      <div
        className="relative cursor-pointer"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <MenuContainer>
          <div className="flex justify-center items-center">
            <Languages
              className="text-dark dark:text-white"
              size={28}
              strokeWidth={1.25}
            />
          </div>
        </MenuContainer>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 top-[135%] z-50 w-40 bg-white dark:bg-dark shadow-md rounded-md "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu"
          >
            <MenuContainer className="p-0">
              <div
                className="cursor-pointer text-dark dark:text-white w-full p-4 box-border hover:bg-[#FFB500] hover:text-white transition-colors"
                onClick={() => pushPath(pathName, "en-CH")}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  pushPath(pathName, "en-CH")
                }
                role="menuitem"
                tabIndex={0}
              >
                English
              </div>
              <div
                className="cursor-pointer text-dark dark:text-white w-full p-4 box-border hover:bg-[#FFB500] hover:text-white transition-colors"
                onClick={() => pushPath(pathName, "fr-CH")}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  pushPath(pathName, "fr-CH")
                }
                role="menuitem"
                tabIndex={0}
              >
                Français
              </div>
              <div
                className="cursor-pointer text-dark dark:text-white w-full p-4 box-border hover:bg-[#FFB500] hover:text-white transition-colors"
                onClick={() => pushPath(pathName, "de-CH")}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  pushPath(pathName, "de-CH")
                }
                role="menuitem"
                tabIndex={0}
              >
                Deutsch
              </div>
            </MenuContainer>
          </div>
        )}
      </div>
    </>
  );
};

export default Language;

// ========================================================================================================
