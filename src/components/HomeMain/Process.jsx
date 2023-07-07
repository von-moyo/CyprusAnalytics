import React, { useState } from 'react';
import Link from 'next/link';
//= Components
//= Data
import data from '@/data/HomeMain/process.json';

function Process() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  return (
    <div className="intro-feat ">
      <div className="container section-padding pb-0 bord-thin-top bord-dark">
        <div className="row justify-content-around">
          <div className="col-lg-6">
            <div className="cont md-mb50">
              <h6 className="mb-15"><span className="fz-14"> </span>Our Process</h6>
              <h3 className="mb-30">We help you to go online and increase your <span className="sub-font">Conversion rate.</span></h3>
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="text">
                    <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
          </div>
        </div>
        <div className="process-crev mt-100">
          <div className="row">
            {
              data.map(item => (
                <div className="item col-lg-3 col-md-6" key={item.id}>
                  <h6 className="mb-10">{item.number} .</h6>
                  <h5 className="fw-600">{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
