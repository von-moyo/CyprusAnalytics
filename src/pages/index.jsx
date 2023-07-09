import React, { useEffect } from "react";
import Image from "next/image";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components

import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/HomeMain/Header";
import About from "@/components/HomeMain/About";
import Marq from "@/components/HomeMain/Marq";
import Clients from "@/components/HomeMain/Clients";
import Services from "@/components/HomeMain/Services";
import Footer from "@/components/HomeMain/Footer";
import Portfolio from "@/components/HomeMain/Portfolio";
import Skills from "@/components/HomeMain/Skills";
import Price from "@/components/HomeMain/Price";
import Process from "@/components/HomeMain/Process";
import CallToAction from "@/components/HomeMain/CallToAction";
import Marq2 from "@/components/HomeMain/Marq2";

function HomeMainLight() {
  useEffect(() => {
    document.body.classList.add("home-main-crev", "main-bg");

    // Smooth Scroll of Page
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true);
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
    // Horizontal Scroll
    if (window.innerWidth > 991) {
      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".thecontainer",
          pin: true,
          scrub: 1,
          // end: () => "+=" + document.querySelector(".thecontainer").offsetWidth,
        },
      });
    }
    // Footer Animation
    if (window.innerWidth > 991) {
      gsap.set(".footer-container", { yPercent: -50 });
      const uncover = gsap.timeline({ paused: true });
      uncover.to(".footer-container", { yPercent: 0, ease: "none" });
      ScrollTrigger.create({
        trigger: "main",
        start: "bottom bottom",
        end: "+=50%",
        animation: uncover,
        scrub: true,
      });
    }

    return () => document.body.classList.remove("home-main-crev", "main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>CyprusAnalytics - Main</title>
      </Head>

      <div id="smooth-wrapper">
        <Navbar mainBg curve noStatic lightMode />
        <div id="smooth-content">
          <main className="main-bg">
            <Header />
            <About />
            <Marq />
            <Clients lightMode />
            <Services lightMode />
            <Portfolio />
            <Skills />
            <Price />
            <Process />
            <CallToAction />
            <Marq2 />
          </main>
          <Footer lightMode />
        </div>
      </div>
    </>
  );
}

HomeMainLight.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeMainLight;
