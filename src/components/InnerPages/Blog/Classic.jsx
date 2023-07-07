import React from "react";
import Image from "next/image";
import Link from "next/link";
//= Data
import data from "@/data/InnerPages/Blog/classic.json";

function Classic() {
  return (
    <section className="blog-modern section-padding sub-bg">
      <div className="container">
        <div className="gridd row">
          {data.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div
                className={`item ${index !== data.length - 1 ? "mb-50" : ""}`}
              >
                <div className="img">
                  <Image width={500} height={500} src={item.image} alt="" />
                  <div className="timee">
                    <Link href="/blog-details">{item.date}</Link>
                  </div>
                </div>
                <div className="cont mt-10">
                  <h6>
                    <Link href="/blog-details">{item.title}</Link>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Classic;
