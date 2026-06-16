import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import DataAnalyticsShowcase from "./components/DataAnalyticsShowcase";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import VideoSection from "./components/VideoSection";
import SoftSkills from "./components/SoftSkills";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import { MouseSpotlight } from "./components/Spotlight";

function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-[#F1F5F9] overflow-x-hidden selection:bg-[#2DD4BF]/30 selection:text-white">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
      <MouseSpotlight className="w-full min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <DataAnalyticsShowcase />
        <Education />
        <Certifications />
        <VideoSection />
        <SoftSkills />
        <Contact />
      </MouseSpotlight>
    </div>
  );
}

export default App;