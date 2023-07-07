import React, { useEffect } from "react";
import Image from "next/image";
//= Packages
import Head from "next/head";

import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/InnerPages/Contact/Header";
import Form from "@/components/InnerPages/Contact/Form";
import Footer from "@/components/HomeMain/Footer";

function PageContactLight() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>CyprusAnalytics - Contact Us</title>
      </Head>

      <Navbar mainBg curve noStatic lightMode />
      <main>
        <Header />
        <Form />
      </main>
      <Footer lightMode />
    </>
  );
}

// PageContactLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageContactLight;
