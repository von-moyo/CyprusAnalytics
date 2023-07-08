import React from "react";
import { Slider } from "./Slider";

function Marq() {
  return (
    <section className="marquee">
      <Slider speed={80000}>
        <div className="item">
          <h4 className="d-flex align-items-center">
            <span>UI-UX Experience</span>
            <span className="fz-50 ml-50 stroke icon">*</span>
          </h4>
        </div>
        <div className="item">
          <h4 className="d-flex align-items-center">
            <span>Web Development</span>{" "}
            <span className="fz-50 ml-50 stroke icon">*</span>
          </h4>
        </div>
        <div className="item">
          <h4 className="d-flex align-items-center">
            <span>Digital Marketing</span>
            <span className="fz-50 ml-50 stroke icon">*</span>
          </h4>
        </div>
        <div className="item">
          <h4 className="d-flex align-items-center">
            <span>Product Design</span>{" "}
            <span className="fz-50 ml-50 stroke icon">*</span>
          </h4>
        </div>
        <div className="item">
          <h4 className="d-flex align-items-center">
            <span>Mobile Solutions</span>
            <span className="fz-50 ml-50 stroke icon">*</span>
          </h4>
        </div>
      </Slider>
    </section>
  );
}

export default Marq;
