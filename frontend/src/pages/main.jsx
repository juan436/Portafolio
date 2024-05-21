import React from 'react';
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import SocialLinks from "../components/SocialLinks";
import PortfolioFullStack from "../components/PortfolioFullStack";
import PortfolioBackend from "../components/PortfolioBackend"; 
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/footer";

function Main() {
  return (
    <div>
      <NavBar showLinks={true} />
      <Home />
      <About />
      <SocialLinks />
      <PortfolioFullStack />
      <PortfolioBackend showPlusButton={true} limitProjects={true} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
