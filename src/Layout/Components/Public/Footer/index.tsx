// React
import React from "react";

// Next
import Link from "next/link";

// UI
import Container from "@/Components/ui/Container";

// Styles
import {
  footerStyles,
  sectionStyles,
  socialIconsStyles,
} from "@/Layout/Components/Public/Footer/index.css";

// Icon
import { Linkedin, Youtube, Github } from "lucide-react";

// Paths
import { paths } from "@/paths";

// ==========================================================================================

const Footer = () => {
  return (
    <footer className={footerStyles}>
      <Container>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        >
          <div className={sectionStyles}>
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

            <div className={socialIconsStyles}>
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

          <div className={sectionStyles}>
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

          <div className={sectionStyles}>
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

          <div className={sectionStyles}>
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
              href={paths.privacyPolicyPage()}
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
              href={paths.termsAndConditionsPage()}
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
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ opacity: "0.8" }}>
            &copy; {new Date().getFullYear()} tecRacer Consulting GmbH, all
            rights reserved.
          </p>

          <p style={{ opacity: "0.8" }}>
            Made by Tobias Emil Vonesch, Chrishon Nilanthan, Besjan Sejrani
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
