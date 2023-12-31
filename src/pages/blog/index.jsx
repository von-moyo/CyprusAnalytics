import React, { useEffect } from "react";
import Image from "next/image";
//= Packages
import Head from "next/head";
import Layout from "@/layouts/default";


import Navbar from "@/components/Common/MainNavbar";
import Classic from "@/components/InnerPages/Blog/Classic";
import Footer from "@/components/HomeMain/Footer";

function BlogClassicLight() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const metadata = {
    subTitle: "OUR BLOG",
    title: "Latest News.",
  };

  return (
    <>
      <Head>
        <title>CyprusAnalytics - Blog Classic</title>
      </Head>

      <Navbar mainBg curve noStatic lightMode />
      <main className="main-bg">
        <Classic />
      </main>
      <Footer lightMode />
    </>
  );
}

BlogClassicLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default BlogClassicLight;
