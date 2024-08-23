// Next
import Image from "next/image";

// UI
import Container from "@/Components/ui/Container";

// Styles
import {
  root,
  architectureImageGroup,
  architecture,
  image,
  title,
  group,
  service,
  link,
} from "./index.css";

// Data
import AwsServices from "@Data/aws-services.json";

// ====================================================================================

const Leaderboard = () => {
  return (
    <Container
      styleOverrides={{
        padding: "0rem",
        height: "100%",
        width: "100%",
        backgroundImage: 'url("/background-perspective.svg")',
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className={root}>
        <div className={architectureImageGroup}>
          <div className={architecture}>
            <h2 className={title}>Who Is RAG's architecture</h2>

            {AwsServices.map((aws) => {
              return (
                <div className={group}>
                  <p className={service}>{aws.service}</p>

                  <a href={aws.href} className={link} target="_blanck">
                    Link
                  </a>
                </div>
              );
            })}
          </div>

          <Image
            src="/architecture-showcase.svg"
            alt="infrastructure"
            width={800}
            height={900}
            draggable={false}
            className={image}
          />
        </div>
      </main>
    </Container>
  );
};

export default Leaderboard;
