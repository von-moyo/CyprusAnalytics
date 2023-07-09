import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
//= Scripts
import loadBackgroudImages from "@/common/loadBackgroudImages";

function CallToAction({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="call-action-center section-padding pb-30 position-re sub-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="sec-lg-head s7 text-center">
              <h2 className="fz-70 fw-700">
                <span>Have a project in mind?</span> <br />
                <span className="underline">
                  <Link href="contact" className="color-z">
                    Let’s get to work.
                  </Link>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-pattern bg-img"
        data-background={`/assets/imgs/patterns/graph.png`}
      ></div>
    </section>
  );
}

export default CallToAction;
