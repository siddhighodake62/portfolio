import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import DataAnalyticsShowcase from "./components/DataAnalyticsShowcase";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Volunteering from "./components/Volunteering";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import { MouseSpotlight } from "./components/Spotlight";
import GlobalBackground from "./components/GlobalBackground";

function App() {
  return (
    <div className="bg-[#0B1120] min-h-screen text-[#E2E8F0] overflow-x-hidden selection:bg-[#2DD4BF]/30 selection:text-white relative">
      <GlobalBackground />
      <CustomCursor />
      <ScrollProgress />
      <div className="relative z-20">
        <Navbar />
        
        <MouseSpotlight className="w-full min-h-screen">
          <Hero />
          <About />
          <Skills />
          <DataAnalyticsShowcase />
          <Projects />
          <Experience />
          <Certifications />
          <Education />
          <Volunteering />
          <Contact />
        </MouseSpotlight>
      </div>
    </div>
  );
}

export default App;