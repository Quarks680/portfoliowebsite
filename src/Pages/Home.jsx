import React, { useState } from "react";
import Home from "../components/Home";
import CardsProject from "../components/CardsProject";
import CardsWobble from "../components/CardsWobble";
import ButtonOrg from "../components/ButtonOrg";
import Robot from "../components/Robot";
import About from "../components/About";
import Tech from "../components/Tech";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ParticleRing from "../components/LoadingScreen";
import Cursor from "../components/Cursor";


function Homepage() {

  

  return (
   <>
      <ParticleRing/>
      <Cursor/>
      <div id="home">
        <Home />
      </div>
      <CardsProject />
      <CardsWobble />
      <ButtonOrg inner={"View all"} upper={"More projects"} project={"/project"} />
      <Robot />
      <div id="about">
        <About />
      </div>
      <Tech />
      <Skills />
      <div id="contact">
        <Contact />
      </div>
    </>
    
  );
}

export default Homepage;
