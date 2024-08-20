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

            <div className={group}>
              <p className={service}>Application Load Balancer</p>

              <a
                href="https://aws.amazon.com/elasticloadbalancing/application-load-balancer/"
                className={link}
                target="_blanck"
              >
                Link
              </a>
            </div>

            <div className={group}>
              <p className={service}>Amazon EC2</p>

              <a
                href="https://aws.amazon.com/ec2/"
                className={link}
                target="_blanck"
              >
                Link
              </a>
            </div>

            <div className={group}>
              <p className={service}>Amazon API Gateway</p>

              <a
                href="https://aws.amazon.com/api-gateway/"
                className={link}
                target="_blanck"
              >
                Link
              </a>
            </div>

            <div className={group}>
              <p className={service}>Amazon DynamoDB</p>

              <a
                href="https://aws.amazon.com/dynamodb/"
                className={link}
                target="_blanck"
              >
                Link
              </a>
            </div>

            <div className={group}>
              <p className={service}>AWS Lambda</p>

              <a
                href="https://aws.amazon.com/lambda/"
                className={link}
                target="_blanck"
              >
                Link
              </a>
            </div>

            <div className={group}>
              <p className={service}>Amazon Bedrock</p>

              <a
                href="https://aws.amazon.com/bedrock/"
                className={link}
                target="_blanck"
              >
                Link
              </a>
            </div>

            <div className={group}>
              <p className={service}>OpenSearch</p>

              <a
                href="https://aws.amazon.com/opensearch-service/"
                className={link}
                target="_blanck"
              >
                Link
              </a>
            </div>

            <div className={group}>
              <p className={service}>Amazon S3</p>

              <a
                href="https://aws.amazon.com/s3/"
                className={link}
                target="_blanck"
              >
                Link
              </a>
            </div>

            <div className={group}>
              <p className={service}>Amazon CloudWatch</p>

              <a
                href="https://aws.amazon.com/cloudwatch/"
                className={link}
                target="_blanck"
              >
                Link
              </a>
            </div>
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
