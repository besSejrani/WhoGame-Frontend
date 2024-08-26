"use client";

// React
import React, { CSSProperties } from "react";

// Next
import Link from "next/link";

// Authentication
import { useSession, signOut } from "next-auth/react";

// UI
import Container from "@/Components/ui/Container";

// Components
import Button from "@/Components/client/Button";

// Styles
import {
  root,
  header,
  links,
  link,
  li,
} from "@/Layout/Components/Admin/AdminHeader/index.css";

// Paths
import { paths } from "@/paths";

// ==========================================================================================

const Header = () => {
  const session = useSession();

  const headerWrapperStyle: CSSProperties = {
    zIndex: 50,
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  return (
    <div style={headerWrapperStyle} className={root}>
      <Container styleOverrides={{ padding: "0.2rem 2rem ", width: "100%" }}>
        <header className={header}>
          <Link href={paths.homePage()}>
            <img src="/logo.svg" alt="tecRacer logo" height={80} width={180} />
          </Link>

          <ul className={links}>
            <li className={li}>
              <Button
                text="Logout"
                type="button"
                variant="outlined"
                onClick={() => signOut()}
                styleOverrides={{
                  fontSize: "2.5rem",
                  fontWeight: 300,
                  margin: "0rem 1rem 0rem 0rem",
                  borderRadius: "30rem",
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
