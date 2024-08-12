"use client";

import React, { useEffect, useState, CSSProperties } from "react";

// Next
import Link from "next/link";
// UI
import Container from "@/Components/ui/Container";

// Components
import Button from "@/Components/client/Button";

// Styles
import { root, header, links, link, li } from "./index.css";

// ==========================================================================================

const Header = () => {
  // ==============================
  // State
  // ==============================
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // ==============================
  // Event
  // ==============================
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

  const headerWrapperStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease-in-out",
  };

  const dynamicStyle: CSSProperties = {
    ...headerWrapperStyle,
    transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
  };

  return (
    <div style={dynamicStyle} className={root}>
      <Container styleOverrides={{ padding: "0.2rem 0rem ", width: "90%" }}>
        <header className={header}>
          <Link href="/">
            <img src="/logo.svg" alt="tecRacer logo" height={80} width={180} />
          </Link>

          <ul className={links}>
            <li className={li}>
              <Link href="/" className={link}>
                Home
              </Link>
            </li>

            <li className={li}>
              <Link href="/diagram" className={link}>
                Diagram
              </Link>
            </li>

            <li className={li}>
              <Button
                text="Let's Play"
                type="button"
                variant="outlined"
                href="/game"
                styleOverrides={{
                  fontSize: "1.2rem",
                  fontWeight: 400,
                  margin: "0rem 1rem 0rem 0rem",
                }}
              />
            </li>
          </ul>

          {/* <ul {...stylex.props(styles.iconMenu)}>
              <DarkMode />
              <Language />
              <Cart />
              <Avatar />
            </ul> */}
        </header>
      </Container>
    </div>
  );
};

export default Header;
