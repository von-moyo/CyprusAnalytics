import React, { useEffect } from "react";
import Image from "next/image";
//= Packages
import Head from "next/head";
//= Components

import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/InnerPages/Header";
import Story from "@/components/InnerPages/About/Story";
import Services from "@/components/InnerPages/About/Services";
import Intro from "@/components/InnerPages/About/Intro";
import Testimonials from "@/components/DigitalAgency/Testimonials";
import CallToAction from "@/components/Startup/CallToAction";
import Footer from "@/components/HomeMain/Footer";

function PageAboutLight() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHO WE ARE ?",
    title: "We're a digital agency based in Valencia.",
    text: "About Us",
  };

  return (
    <>
      <Head>
        <title>CyprusAnalytics - About</title>
      </Head>

      <Navbar mainBg curve noStatic lightMode />
      <main>
        <Header data={headerMetadata} />
        <Story />
        <Services lightMode />
        <Intro />
        <Testimonials mainColor />
        <CallToAction innerPageStyle />
      </main>
      <Footer lightMode />
    </>
  );
}

// PageAboutLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageAboutLight;
