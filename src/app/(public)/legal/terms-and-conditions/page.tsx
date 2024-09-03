import React from "react";
import Container from "@Components/ui/Container";

// =================================================================================================

const TermsAndConditions: React.FC = () => {
  return (
    <div>
      <Container>
        <h1
          className={`
          text-6xl font-light mt-60 mb-0
          dark:text-white
          `}
        >
          Terms and Conditions
        </h1>

        <div className="my-20">
          <p
            className={`
            text-2xl leading-12  font-light mb-8
            dark:text-white
            `}
          >
            Last updated: August 17, 2024
          </p>

          <p
            className={`
            text-2xl leading-12  font-light
            dark:text-white
            `}
          >
            Welcome to Who Is Rag! These Terms and Conditions govern your use of
            our website located at who-is-rag.com (the "Site") and our online
            services (collectively, the "Service"). By accessing or using the
            Service, you agree to be bound by these Terms and Conditions.
          </p>
        </div>

        <hr />

        <div className="my-20">
          <h2
            className={`
            text-3xl font-light mb-8
            dark:text-white
            `}
          >
            1. Game Rules and Participation
          </h2>
          <p
            className={`
            text-2xl leading-12 opacity-70 font-light
            dark:text-white
            `}
          >
            1.1. The Who Is Rag game is a one-day event that takes place during
            the Cloud Summit in Zurich.
            <br />
            <br />
            1.2. The game involves guessing the correct person in the RAG
            (Retrieval-Augmented Generation) system by asking questions to an AI
            Language Model.
            <br />
            <br />
            1.3. Participants must be physically present at the event to be
            eligible for prizes.
            <br />
            <br />
            1.4. The game will last for one day only. The specific date will be
            announced on our website and at the event.
            <br />
            <br />
            1.5. By participating in the game, you agree to abide by these rules
            and any additional instructions provided on the day of the event.
          </p>
        </div>

        <hr />

        <div className="my-20">
          <h2
            className={`
            text-3xl font-light mb-8
            dark:text-white
            `}
          >
            2. Prizes and Winners
          </h2>
          <p
            className={`
            text-2xl leading-12 opacity-70 font-light
            dark:text-white
            `}
          >
            2.1. Prizes will be awarded in the following categories:
            <br />
            - Quickest time to guess the correct person
            <br />
            - Most creative questions asked
            <br />
            - Least number of questions asked to reach the correct answer
            <br />
            <br />
            2.2. The nature of the prizes will remain secret until the end of
            the game day.
            <br />
            <br />
            2.3. Winners must be present at our stand at the time of prize
            distribution to claim their prize.
            <br />
            <br />
            2.4. If a winner is not present, the prize will be given to the next
            best performer in that category.
            <br />
            <br />
            2.5. All prizes will be distributed in a fair and transparent
            manner.
            <br />
            <br />
            2.6. The decisions of the judges regarding winners and prize
            distribution are final.
          </p>
        </div>

        <hr />

        <div className="my-20">
          <h2
            className={`
            text-3xl font-light mb-8
            dark:text-white
            `}
          >
            3. Intellectual Property
          </h2>
          <p
            className={`
            text-2xl leading-12 opacity-70 font-light
            dark:text-white
            `}
          >
            3.1. All content on the Who Is Rag website, including text,
            graphics, logos, and software, is the property of Tecracer or its
            content suppliers and is protected by international copyright laws.
            <br />
            <br />
            3.2. Participants retain the rights to the content they create
            during the game, but grant Tecracer a non-exclusive, worldwide,
            royalty-free license to use, reproduce, and display such content for
            promotional purposes related to the game and future events.
          </p>
        </div>

        <hr />

        <div className="my-20">
          <h2
            className={`
            text-3xl font-light mb-8
            dark:text-white
            `}
          >
            4. Limitation of Liability
          </h2>
          <p
            className={`
            text-2xl leading-12 opacity-70 font-light
            dark:text-white
            `}
          >
            4.1. Tecracer and its affiliates will not be liable for any
            indirect, incidental, special, consequential, or punitive damages
            resulting from your access to or use of, or inability to access or
            use, the Service or any content provided by or through the Service.
            <br />
            <br />
            4.2. Tecracer is not responsible for any technical malfunctions,
            network failures, or other issues that may affect participation in
            the game.
          </p>
        </div>

        <hr />

        <div className="my-20">
          <h2
            className={`
            text-3xl font-light mb-8
            dark:text-white
            `}
          >
            5. Modifications to Terms and Game Rules
          </h2>
          <p
            className={`
            text-2xl leading-12 opacity-70 font-light
            dark:text-white
            `}
          >
            5.1. Tecracer reserves the right to modify these Terms and
            Conditions at any time. Changes will be effective immediately upon
            posting on the website.
            <br />
            <br />
            5.2. Tecracer may also modify game rules or prize structures as
            necessary to ensure fair play and accommodate unforeseen
            circumstances. Any such changes will be communicated to participants
            as soon as possible.
          </p>
        </div>

        <hr />

        <div className="my-20">
          <h2
            className={`
            text-3xl font-light mb-8
            dark:text-white
            `}
          >
            6. Governing Law
          </h2>
          <p
            className={`
            text-2xl leading-12 opacity-70 font-light
            dark:text-white
            `}
          >
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of Germany, without regard to its conflict
            of law provisions.
          </p>
        </div>

        <hr />

        <div className="my-20">
          <h2
            className={`
            text-3xl font-light mb-8
            dark:text-white
            `}
          >
            7. Contact Us
          </h2>
          <p
            className={`
            text-2xl leading-12 opacity-70 font-light
            dark:text-white
            `}
          >
            If you have any questions about these Terms and Conditions, please
            contact us at:{" "}
            <a
              href="mailto:info@tecracer.de"
              className="text-primary underline"
            >
              info@tecracer.de
            </a>
            or call us via{" "}
            <a href="tel:+4951159095950" className="text-primary underline">
              +49 511 59095-950
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
