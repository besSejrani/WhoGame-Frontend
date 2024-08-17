// React
import React from "react";

// Next
import Link from "next/link";

// UI
import Container from "@/Components/ui/Container";

import { Linkedin, Youtube, Github } from "lucide-react";

// ==========================================================================================

const Footer = () => {
  const footerStyles: React.CSSProperties = {
    backgroundColor: "#111827",
    color: "#FFFFFF",
    padding: "5rem 0rem 2rem 0rem",

    backgroundImage: 'url("/background-grid.webp")',
    // backgroundImage: `linear-gradient(76deg, rgb(17 24 39 / 100%), rgb(8 98 158 / 70%)), url(/background-grid.webp)`,
    backgroundSize: "cover", // or "contain" depending on your design needs
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    borderTopLeftRadius: "5rem",
  };

  const containerStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    flexWrap: "wrap" as "wrap", // Type assertion for flexWrap
  };

  const sectionStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const socialIconsStyles: React.CSSProperties = {
    display: "flex",
    gap: "1rem",
    marginTop: "10px",
  };

  const footerBottomStyles: React.CSSProperties = {
    borderTop: "1px solid #333",
    textAlign: "center" as "center", // Type assertion for textAlign
    padding: "10px 0",
    marginTop: "20px",
  };

  return (
    <footer style={footerStyles}>
      <Container>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        >
          <div style={sectionStyles}>
            <a target="_blank" href="https://www.tecracer.com/">
              <img
                src="/tecracer-white.svg"
                alt="Logo"
                height={100}
                width={250}
                style={{ margin: "0rem 0rem 1rem 0rem" }}
              />
            </a>
            <p style={{ margin: "0rem 0rem 0.5rem 0rem", opacity: "0.9" }}>
              tecRacer Consulting GmbH
            </p>
            <p style={{ margin: "0rem 0rem 0.5rem 0rem", opacity: "0.9" }}>
              Schaffhauserstrasse 429
            </p>
            <p style={{ margin: "0rem 0rem 1.5rem 0rem", opacity: "0.9" }}>
              8050 Zürich
            </p>

            <div style={socialIconsStyles}>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/tecracer-group/"
              >
                <Linkedin
                  size={35}
                  strokeWidth={1.25}
                  absoluteStrokeWidth={true}
                />
              </a>
              <a target="_blank" href="https://github.com/tecracer">
                <Github
                  size={35}
                  strokeWidth={1.25}
                  absoluteStrokeWidth={true}
                />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@tecraceraws-channel4634"
              >
                <Youtube
                  size={35}
                  strokeWidth={1.25}
                  absoluteStrokeWidth={true}
                />
              </a>
            </div>
          </div>

          <div style={sectionStyles}>
            <h4
              style={{
                fontSize: "1.8rem",
                fontWeight: "300",
                margin: "1rem 0rem",
              }}
            >
              Locations
            </h4>

            <ul>
              <li
                style={{
                  listStyle: "none",
                  margin: "0rem 0rem 0.5rem 0rem",
                  fontSize: "1.2rem",
                }}
              >
                <span
                  style={{ opacity: "0.85", margin: "0rem 0.5rem 0rem 0rem" }}
                >
                  Zurich
                </span>
                🇨🇭
              </li>
              <li
                style={{
                  listStyle: "none",
                  margin: "0rem 0rem 0.5rem 0rem",
                  fontSize: "1.2rem",
                }}
              >
                <span
                  style={{ opacity: "0.85", margin: "0rem 0.5rem 0rem 0rem" }}
                >
                  Geneva
                </span>
                🇨🇭
              </li>
              <li
                style={{
                  listStyle: "none",
                  margin: "0rem 0rem 0.5rem 0rem",
                  fontSize: "1.2rem",
                }}
              >
                <span
                  style={{ opacity: "0.85", margin: "0rem 0.5rem 0rem 0rem" }}
                >
                  Berlin
                </span>
                🇩🇪
              </li>
              <li
                style={{
                  listStyle: "none",
                  margin: "0rem 0rem 0.5rem 0rem",
                  fontSize: "1.2rem",
                }}
              >
                <span
                  style={{ opacity: "0.85", margin: "0rem 0.5rem 0rem 0rem" }}
                >
                  Duisburg
                </span>
                🇩🇪
              </li>
              <li
                style={{
                  listStyle: "none",
                  margin: "0rem 0rem 0.5rem 0rem",
                  fontSize: "1.2rem",
                }}
              >
                <span
                  style={{ opacity: "0.85", margin: "0rem 0.5rem 0rem 0rem" }}
                >
                  Frankfort
                </span>
                🇩🇪
              </li>
              <li
                style={{
                  listStyle: "none",
                  margin: "0rem 0rem 0.5rem 0rem",
                  fontSize: "1.2rem",
                }}
              >
                <span
                  style={{ opacity: "0.85", margin: "0rem 0.5rem 0rem 0rem" }}
                >
                  Hamburg
                </span>
                🇩🇪
              </li>
              <li
                style={{
                  listStyle: "none",
                  margin: "0rem 0rem 0.5rem 0rem",
                  fontSize: "1.2rem",
                }}
              >
                <span
                  style={{ opacity: "0.85", margin: "0rem 0.5rem 0rem 0rem" }}
                >
                  Hannover
                </span>
                🇩🇪
              </li>
              <li
                style={{
                  listStyle: "none",
                  margin: "0rem 0rem 0.5rem 0rem",
                  fontSize: "1.2rem",
                }}
              >
                <span
                  style={{ opacity: "0.85", margin: "0rem 0.5rem 0rem 0rem" }}
                >
                  Mannheim
                </span>
                🇩🇪
              </li>
              <li
                style={{
                  listStyle: "none",
                  margin: "0rem 0rem 0.5rem 0rem",
                  fontSize: "1.2rem",
                }}
              >
                <span
                  style={{ opacity: "0.85", margin: "0rem 0.5rem 0rem 0rem" }}
                >
                  Munich
                </span>
                🇩🇪
              </li>
              <li
                style={{
                  listStyle: "none",
                  margin: "0rem 0rem 0.5rem 0rem",
                  fontSize: "1.2rem",
                }}
              >
                <span
                  style={{ opacity: "0.85", margin: "0rem 0.5rem 0rem 0rem" }}
                >
                  Lisbon
                </span>
                🇵🇹
              </li>
              <li
                style={{
                  listStyle: "none",
                  margin: "0rem 0rem 0.5rem 0rem",
                  fontSize: "1.2rem",
                }}
              >
                <span
                  style={{ opacity: "0.85", margin: "0rem 0.5rem 0rem 0rem" }}
                >
                  Vienna
                </span>
                🇦🇹
              </li>
            </ul>
          </div>

          <div style={sectionStyles}>
            <h4
              style={{
                fontSize: "1.8rem",
                fontWeight: "300",
                margin: "1rem 0rem",
              }}
            >
              Company
            </h4>
            <a
              style={{
                listStyle: "none",
                margin: "0rem 0rem 0.5rem 0rem",
                fontSize: "1.2rem",
                cursor: "pointer",
                opacity: "0.85",
              }}
              target="_blank"
              href="https://www.tecracer.com/en/tecracer-group/"
            >
              About
            </a>
            <a
              style={{
                listStyle: "none",
                margin: "0rem 0rem 0.5rem 0rem",
                fontSize: "1.2rem",
                cursor: "pointer",
                opacity: "0.85",
              }}
              target="_blank"
              href="https://www.tecracer.com/blog"
            >
              Blog
            </a>
            <a
              style={{
                listStyle: "none",
                margin: "0rem 0rem 0.5rem 0rem",
                fontSize: "1.2rem",
                cursor: "pointer",
                opacity: "0.85",
              }}
              target="_blank"
              href="https://www.tecracer.com/en/careers/"
            >
              Career
            </a>
            <a
              style={{
                listStyle: "none",
                margin: "0rem 0rem 0.5rem 0rem",
                fontSize: "1.2rem",
                cursor: "pointer",
                opacity: "0.85",
              }}
              target="_blank"
              href="https://www.tecracer.com/en/news/"
            >
              News
            </a>
            <a
              style={{
                listStyle: "none",
                margin: "0rem 0rem 0.5rem 0rem",
                fontSize: "1.2rem",
                cursor: "pointer",
                opacity: "0.85",
              }}
              target="_blank"
              href="https://www.tecracer.com/en/contact/"
            >
              Contact
            </a>
          </div>

          <div style={sectionStyles}>
            <h4
              style={{
                fontSize: "1.8rem",
                fontWeight: "300",
                margin: "1rem 0rem",
              }}
            >
              Legal
            </h4>
            <Link
              style={{
                margin: "0rem 0rem 0.5rem 0rem",
                fontSize: "1.2rem",
                cursor: "pointer",
                opacity: "0.85",
              }}
              href="/legal/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              style={{
                margin: "0rem 0rem 0.5rem 0rem",
                fontSize: "1.2rem",
                cursor: "pointer",
                opacity: "0.85",
              }}
              href="/legal/termes-and-conditions"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>

      <Container>
        <hr style={{ margin: "2rem 0rem 1rem 0rem" }} />
      </Container>

      <Container>
        <p style={{ opacity: "0.8" }}>
          &copy; {new Date().getFullYear()} tecRacer Consulting GmbH, all rights
          reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
