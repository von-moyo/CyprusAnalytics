import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
//= Components
//= Scripts
import loadBackgroudImages from "@/common/loadBackgroudImages";

function Header({ lightMode }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  return (
    <header className="crev-header">
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-12">
            <div className="caption">
              <h1>
                High End
                <br />{" "}
                <span className="stroke">
                  <span
                  className="type-d">
                  <TypeAnimation
                    sequence={[
                      "Creative",
                      3000,
                      "Branding",
                      3000,
                      "Design",
                      3000,
                      "Development",
                      3000,
                      "Marketing",
                      3000,
                    ]}
                    wrapper="span"
                    speed={60}
                    style={{ fontSize: "1em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                  </span>
                  <span
                  className="type-m">
                    Creative
                  </span>
                </span>{" "}
                Agency
              </h1>
              <div className="row mt-30">
                <div className="col-lg-4">
                  <div className="text">
                    <p>
                      Through our years of experience, we've also learned that
                      while each channel has its own set of advantages.
                    </p>
                  </div>
                  <div className="crv-butn-vid mt-30 talk">
                    <a href="mailto:victor.ehinmowo@gmail.com">
                      <span className="text sub-title">Let's Talk</span>
                      <svg
                        className="envelope"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{
                          width: "40px",
                          height: "30px",
                          fill: "#c9f31d",
                        }}
                      >
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
      <div className="main-img">
        <Image
          width={500}
          height={500}
          src="/assets/imgs/background/14.jpg"
          alt=""
        />
      </div>
      <div
        className="bg-pattern bg-img"
        data-background={`/${
          lightMode ? "light" : "dark"
        }/assets/imgs/patterns/graph.png`}
      ></div>
    </header>
  );
}

export default Header;
