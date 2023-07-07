import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Components
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/ProjectDetails/Header';
import Content from '@/components/InnerPages/ProjectDetails/Content';
import CallToAction from '@/components/InnerPages/ProjectDetails/CallToAction';
import Footer from "@/components/HomeMain/Footer";


function ProjectDetailsLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Project Details</title>
      </Head>
      <Navbar mainBg lightMode />
      <main>
        <Header />
        <Content />
        <CallToAction />
      </main>
      <Footer lightMode />
    </>
  )
}

export default ProjectDetailsLight;