import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Experience from "./Experience";
import Education from "./Education";
import Footer from "../Pages/Footer";


const Main = () => {
  return (
    <>
      {/* <Helmet>
        <title>{headerData.name}-Portfolio</title>
      </Helmet> */}
      <Navbar />
      <Hero />
      <Experience />
      <Project />
      <Skills />
      <AboutMe />
      <Education />
      <Contact />
      <Footer /> 
    </>
  );
};

export default Main;
