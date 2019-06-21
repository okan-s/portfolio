import React from "react";

import { Spring } from "react-spring/renderprops";

const About = () => {
  return (
    <>
      <Spring
        from={{ opacity: 0, transform: "scale(0.75)" }}
        to={{ opacity: 1, transform: "scale(1)" }}
      >
        {props => (
          // <div
          //   style={{
          //     ...props,
          //     alignSelf: "center",
          //     backgroundColor: "#1BADB4",
          //     padding: "2.5vmin"
          //   }}
          // >
          //   <span>
          //     Hey, I'm a tech curious guy from Stockholm.
          //     <br />
          //     If you have an application you are interested in developing with
          //     web technology, I’d love to work with you on it.
          //     <br />
          //     I’m a full-stack developer which means I can bring your project
          //     from concept to completion.
          //     <br />
          //     I work primarily with Node.js on the backend and on the frontend
          //     side of things I use React.
          //     <br />
          //   </span>
          // </div>

          <div
            id="about"
            class="card-panel center-align"
            style={{
              ...props,
              background: "#595990",
              width: "57.2vmin",
              margin: "auto",
              padding: "3.3vmin"
            }}
          >
            <center>
              <span
                style={{
                  fontSize: "calc(1.5vw + 1.5vh + 0.75vmin)"
                }}
              >
                <span
                  style={{
                    borderBottom: "2px solid white",
                    letterSpacing: "0.5vw",
                    marginRight: "-0.5vw"
                  }}
                >
                  ABOUT M
                </span>
                <span
                  style={{
                    borderBottom: "2px solid white",
                    marginLeft: ".5vw",
                    marginRight: "0"
                  }}
                >
                  E
                </span>
              </span>
            </center>
            <p
              class="left-align"
              style={{
                fontSize: "calc(0.75vw + 0.75vh + 0.375vmin)",
                lineGeight: "1.75",
                padding: "0 calc(0.1vw + 0.1vh + 0.05vmin)"
              }}
            >
              Hello!
              <br />
              I'm a tech curious guy 🤓 from Stockholm.
              <br />
              <br />
              If you have an application you are interested in developing with
              web technology, I’d love ❤️ to work with you on it.
              <br />
              <br />
              I’m a full-stack 📚 developer which means I can bring your project
              from concept to completion.
              <br />
              <br />I work 💻 primarily with Node.js on the backend and on the
              frontend side of things I use React.js
            </p>
          </div>
        )}
      </Spring>
    </>
  );
};

export default About;
