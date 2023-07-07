import React, { useEffect } from "react";
import Image from "next/image";
//= Packages
import Head from "next/head";

import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/InnerPages/Header";
import Services from "@/components/InnerPages/About/Services";
import Portfolio from "@/components/InnerPages/Services/Portfolio";
import ServicesTab from "@/components/DigitalAgency/ServicesTab";
import FAQ from "@/components/InnerPages/Services/FAQ";
import CallToAction from "@/components/Startup/CallToAction";
import Footer from "@/components/HomeMain/Footer";

function PageServicesLight() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHAT CAN WE DO ?",
    title: "We combine our passion for design and code.",
    text: "SERVICES",
  };

  return (
    <>
      <Head>
        <title>CyprusAnalyticso - Services</title>
      </Head>

      <Navbar mainBg curve noStatic lightMode />
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Services lightMode />
        <Portfolio />
        <ServicesTab lightMode />
        <FAQ />
        <CallToAction innerPageStyle />
      </main>
      <Footer lightMode />
    </>
  );
}

// PageServicesLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageServicesLight;
