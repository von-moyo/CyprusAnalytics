import React from "react";
import Image from "next/image";
import Link from "next/link";

function About({ lightMode }) {
  return (
    <section className="about-intro section-padding">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-5">
            <div className="sec-lg-head md-mb30">
              <h6 className="dot-titl-non mb-15 wow fadeIn">OUR BENEFITS</h6>
              <h2 className="d-rotate wow">
                <span className="rotate-text">
                  Our Team of Dedicated Digital Professionals.
                </span>
              </h2>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2 valign">
            <div className="text">
              <p className="d-slideup wow">
                <span className="sideup-text">
                  <span className="up-text">
                    Through our years of experience, we’ve also learned that
                    while
                  </span>
                </span>
                <span className="sideup-text">
                  <span className="up-text">
                    each channel has its own set of advantages, they all work
                    best
                  </span>
                </span>
                <span className="sideup-text">
                  <span className="up-text">
                    when strategically paired with other channels.
                  </span>
                </span>
              </p>
              <div
                className="vew-all mt-50 ml-30 wow fadeIn"
                data-wow-delay=".8s"
              >
                <Link href="/blog">
                  View Our Blogs
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 rest">
            <div className="imgs md-mb50">
              <div className="img1">
                <div className="o-hidden">
                  <div className="imago wow">
                    <Image
                      width={500}
                      height={500}
                      src={`/assets/imgs/about/01.jpg`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="img2">
                <div className="o-hidden">
                  <div className="imago wow">
                    <Image
                      width={500}
                      height={500}
                      src={`/assets/imgs/about/1.jpg`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 valign rest">
            <div className="cont">
              <h2 className="d-rotate wow">
                <span className="rotate-text">
                  Unlock Revenue Growth for Your Business.
                </span>
              </h2>
              <div className="feat mt-80">
                <div
                  className="item-flex d-flex align-items-center mb-50 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div>
                    <div className="icon-img-50">
                      <Image
                        width={500}
                        height={500}
                        src={`/assets/imgs/serv-icons/01-dark.svg`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="cont ml-30">
                    <h6>High Standerd</h6>
                    <p className="fz-15">
                      Adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div
                  className="item-flex d-flex align-items-center wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div>
                    <div className="icon-img-50">
                      <Image
                        width={500}
                        height={500}
                        src={`/assets/imgs/serv-icons/02-dark.svg`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="cont ml-30">
                    <h6>Ease of Communication</h6>
                    <p className="fz-15">
                      Adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
