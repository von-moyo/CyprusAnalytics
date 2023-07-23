import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
import Layout from "@/layouts/default";

//= Components
import Navbar from '@/components/Common/MainNavbar';
import Content from '@/components/InnerPages/ProjectDetails/Content';
import Footer from "@/components/HomeMain/Footer";


function ProjectDetailsLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>CyprusAnalytics - Portfolio</title>
      </Head>
      <Navbar mainBg lightMode />
      <main>
        <Content />
      </main>
      <Footer lightMode />
    </>
  )
}

ProjectDetailsLight.getLayout = (page) => <Layout>{page}</Layout>;

export default ProjectDetailsLight;