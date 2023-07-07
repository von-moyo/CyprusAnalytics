import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
//= Data
import data from "@/data/HomeMain/services.json";

const swiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 5,
  spaceBetween: 0,
  speed: 1000,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: ".services .swiper-button-next",
    prevEl: ".services .swiper-button-prev",
  },
};

function Services({ lightMode }) {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className="services section-padding pb-0 block-pattern">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-5">
              <h6 className="sub-title opacity-8 wow fadeInUp">
                Main directions
              </h6>
              <h2 className="d-rotate wow">
                <span className="rotate-text">Services.</span>
              </h2>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text d-rotate wow md-mb30">
                <p className="rotate-text">
                  Finding the best marketing solution for your business. Driven
                  by data based on human behavior.
                </p>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center wow fadeIn">
              <div className="full-width">
                <div className="d-flex justify-content-end justify-end">
                  <div className="swiper-controls arrow-out d-flex">
                    <div className="swiper-button-prev">
                      <span className="left">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="swiper-button-next ml-50">
                      <span className="right">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid rest">
        <div className="serv-items-crev">
          <div className="serv-swiper">
            {loadSwiper && (
              <Swiper
                {...swiperOptions}
                id="content-carousel-container-unq-serv"
              >
                {data.map((item, index) => (
                  <SwiperSlide
                    key={item.id}
                    className="wow fadeIn"
                    data-wow-delay={`${(data.length - index + 1) * 0.2}s`}
                  >
                    <div className="item">
                      <div className="icon-img-60 mb-40">
                        <Image
                          width={500}
                          height={500}
                          src={`${lightMode ? "/" : "/"}${item.image}`}
                          alt=""
                        />
                      </div>
                      <h6 className="mb-15">{item.title}</h6>
                      <p>{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
      <div
        className="bg-pattern bg-img"
        data-background={`${
          lightMode ? "/" : "/"
        }assets/imgs/patterns/bg-line-1.svg`}
      ></div>
    </section>
  );
}

export default Services;
