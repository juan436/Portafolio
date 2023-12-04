
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div>
       <NavBar/>
       <Home/>
       <SocialLinks/>
       <About/>
       <Portfolio/>
       <Skills/>
       <Contact/>
    </div>
  );
}

export default App;
