import React from 'react';
import NavBar from "../components/NavBar";
import PortfolioBackend from "../components/PortfolioBackend"; 
import Footer from "../components/footer";

function ProjectsBack() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar showLinks={false} />
      <div className="flex-grow flex">
        <PortfolioBackend showPlusButton={false} className="flex-grow" />
      </div>
      <Footer />
    </div>
  );
}

export default ProjectsBack;
