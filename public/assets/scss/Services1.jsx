import React from "react";
import Image from "next/image";
import Link from "next/link";
//= Data
import data from "@/data/HomeMain/services.json";

function Services({ lightMode }) {
  return (
    <section className="serv-box section-padding pb-0">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h6 className="dot-titl-non mb-15 wow fadeIn">
                  Featured Services
                </h6>
                <h2 className="d-rotate wow">
                  <span className="rotate-text">Our Services</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text wow fadeIn">
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit,
                  sed quia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item) => (
            <div className="col-lg-4" key={item.id}>
              <div
                className="serv-item lg-pad md-mb50 radius-5 wow fadeIn"
                data-wow-delay=".5s"
              >
                <div className="icon-img-50 mb-40">
                  <Image
                    width={500}
                    height={500}
                    src={`${item.image}`}
                    alt=""
                  />
                </div>
                <span className="mb-10 opacity-7">{item.type}</span>
                <h6 className="mb-15">{item.title}</h6>
                <p className="fz-14">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
