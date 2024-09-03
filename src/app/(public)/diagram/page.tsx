import React from "react";
// Next
import Image from "next/image";

// UI
import Container from "@/Components/ui/Container";

// Data
import AwsServices from "@Data/aws-services.json";

// ====================================================================================

const Leaderboard: React.FC = () => {
  return (
    <Container className="py-40 ">
      <main className=" flex flex-col justify-center items-center h-screen w-full">
        <div className="w-[95%] flex justify-center items-center">
          <div
            className={`
            p-12 mr-40 bg-white h-max overflow-hidden rounded-3xl shadow-[0_-4px_2px_-2px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_2px_4px_0_rgba(0,0,0,0.2)]
            dark:bg-cardDark
            `}
          >
            <h1
              className={`
              text-4xl font-200 w-full text-center mb-12
              dark:text-white
              `}
            >
              Who Is RAG's architecture
            </h1>

            {AwsServices.map((aws, index) => (
              <div
                key={index}
                className="flex justify-between items-center my-5"
              >
                <p
                  className={`
                  flex items-center mb-0.5 text-lg opacity-90
                  dark:text-white 
                  `}
                >
                  {aws.service}
                </p>

                <a
                  href={aws.href}
                  className={`
                    opacity-70 text-sm border-2 border-black rounded-full py-2 px-4 transition duration-200 ease-in-out hover:bg-black hover:text-white
                    dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-dark
                    hover:opacity-100
                    `}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS Link
                </a>
              </div>
            ))}
          </div>

          <Image
            src="/architecture-showcase-2.svg"
            alt="infrastructure"
            width={700}
            height={800}
            draggable={false}
            className="object-contain"
          />
        </div>
      </main>
    </Container>
  );
};

export default Leaderboard;
