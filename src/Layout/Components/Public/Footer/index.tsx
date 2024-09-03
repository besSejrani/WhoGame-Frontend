// React
import React from "react";

// Next
import Link from "next/link";

// UI
import Container from "@/Components/ui/Container";

// Icon
import { Linkedin, Youtube, Github } from "lucide-react";

// Data
import locationData from "@Data/footer/locations.json";
import trainingData from "@Data/footer/trainings.json";
import companyData from "@Data/footer/company.json";
import legalData from "@Data/footer/legal.json";

// ==========================================================================================

const Footer = () => {
  return (
    <footer
      className={`
        bg-dark text-white pt-32 pb-8 rounded-tl-[5rem] bottom-0 h-[100%] bg-no-repeat bg-bottom bg-cover z-[1] bg-footer-background-grid
        2xl:bg-none
        `}
    >
      {
        // ===============================================
        // Main Content
        // ===============================================
      }
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col">
            {
              // ===============================================
              // Logo
              // ===============================================
            }
            <a
              target="_blank"
              href="https://www.tecracer.com/"
              rel="noopener noreferrer"
            >
              <img
                src="/tecracer-white.svg"
                alt="tecRacer logo in white"
                className="h-[100px] w-[250px] mb-4"
              />
            </a>

            {
              // ===============================================
              // Address
              // ===============================================
            }

            <address className="not-italic mb-6 opacity-90">
              <p className="text-lg mb-2 opacity-90">
                tecRacer Consulting GmbH
              </p>
              <p className="text-lg mb-2 opacity-90">Schaffhauserstrasse 429</p>
              <p className="text-lg mb-2 opacity-90">8050 Zürich</p>
            </address>

            {
              // ===============================================
              // Social
              // ===============================================
            }

            <div className="flex gap-4 mt-2.5">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/tecracer-group/"
                rel="noopener noreferrer"
              >
                <Linkedin size={35} strokeWidth={1.25} absoluteStrokeWidth />
              </a>
              <a
                target="_blank"
                href="https://github.com/tecracer"
                rel="noopener noreferrer"
              >
                <Github size={35} strokeWidth={1.25} absoluteStrokeWidth />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@tecraceraws-channel4634"
                rel="noopener noreferrer"
              >
                <Youtube size={35} strokeWidth={1.25} absoluteStrokeWidth />
              </a>
            </div>
          </div>

          {
            // ===============================================
            // Locations
            // ===============================================
          }

          <div className="flex flex-col">
            <h3 className="text-2xl font-light mb-4">Locations</h3>

            <ul>
              {locationData.map((location, index) => (
                <li key={index} className="list-none mb-2 text-lg opacity-90">
                  <span className="opacity-85 mr-2">{location.name}</span>
                  {location.flag}
                </li>
              ))}
            </ul>
          </div>

          {
            // ===============================================
            // Company
            // ===============================================
          }

          <div className="flex flex-col">
            <h3 className="text-2xl font-light mb-4">Company</h3>

            <ul>
              {companyData.map((company, index) => (
                <li key={index} className="list-none mb-2 ">
                  <a
                    key={index}
                    className="mb-2 text-lg cursor-pointer opacity-70"
                    target="_blank"
                    href={company.href}
                    rel="noopener noreferrer"
                  >
                    {company.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {
            // ===============================================
            // Trainings
            // ===============================================
          }

          <div className="flex flex-col">
            <h3 className="text-2xl font-light mb-4">Trainings</h3>

            <ul>
              {trainingData.map((training, index) => (
                <li key={index} className="list-none mb-2 text-lg opacity-90">
                  <a
                    key={index}
                    className="mb-2 text-lg cursor-pointer opacity-70"
                    target="_blank"
                    href={training.href}
                    rel="noopener noreferrer"
                  >
                    {training.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {
            // ===============================================
            // Legal
            // ===============================================
          }

          <div className="flex flex-col">
            <h3 className="text-2xl font-light mb-4">Legal</h3>

            <ul>
              {legalData.map((legal, index) => (
                <li key={index} className="list-none mb-2 text-lg">
                  <Link
                    key={index}
                    className="mb-2 text-lg cursor-pointer opacity-65"
                    href={legal.href}
                  >
                    {legal.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {
        // ===============================================
        // Horizontal Line
        // ===============================================
      }
      <Container className="relative z-10 mt-28 mb-12">
        <hr />
      </Container>

      {
        // ===============================================
        // Copyright
        // ===============================================
      }

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-base opacity-80 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} tecRacer Consulting GmbH, all
            rights reserved.
          </p>

          <p className="text-base opacity-80">
            Made by Tobias Emil Vonesch, Chrishon Nilanthan, Besjan Sejrani
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
