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
  return (
    <div className={root}>
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
