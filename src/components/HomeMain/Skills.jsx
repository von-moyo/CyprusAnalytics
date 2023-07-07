import React from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Link from "next/link";
import { Slider } from "./Slider";

function Skills({ lightMode }) {
  return (
    <section
      className="skills-exp section-padding sub-bg"
      data-scroll-index="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-lg-head mb-80">
              <div className="position-re">
                <h6 className="dot-titl-non mb-10">Skills & Experience</h6>
                <h2 className="fz-50">My Experience</h2>
              </div>
            </div>
          </div>
          <div className="">
            <Slider>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <Image
                    width={500}
                    height={500}
                    src={`/assets/imgs/freelancer/skills/figma.png`}
                    alt=""
                  />
                </div>
                <span className="mt-15">Figma</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <Image
                    width={500}
                    height={500}
                    src={`/assets/imgs/freelancer/skills/vuejs.svg`}
                    alt=""
                  />
                </div>
                <span className="mt-15"></span>Vue
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <Image
                    width={500}
                    height={500}
                    src={`/assets/imgs/freelancer/skills/angular.png`}
                    alt=""
                  />
                </div>
                <span className="mt-15">Angular</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <Image
                    width={500}
                    height={500}
                    src={`/assets/imgs/freelancer/skills/webflow.png`}
                    alt=""
                  />
                </div>
                <span className="mt-15">Webflow</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <Image
                    width={500}
                    height={500}
                    src={`/assets/imgs/freelancer/skills/java.svg`}
                    alt=""
                  />
                </div>
                <span className="mt-15">Java</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <Image
                    width={500}
                    height={500}
                    src={`/assets/imgs/freelancer/skills/python.svg`}
                    alt=""
                  />
                </div>
                <span className="mt-15">Python</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <Image
                    width={500}
                    height={500}
                    src={`/assets/imgs/freelancer/skills/react.svg`}
                    alt=""
                  />
                </div>
                <span className="mt-15">React</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <Image
                    width={500}
                    height={500}
                    src={`/assets/imgs/freelancer/skills/swift.svg`}
                    alt=""
                  />
                </div>
                <span className="mt-15">Swift</span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
