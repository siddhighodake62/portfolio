import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { contact } from "../data";
import HeroCanvas from "./HeroCanvas";
import MagneticButton from "./MagneticButton";
import { StaggerContainer, StaggerItem } from "./PageTransitions";

const TITLES = [
  "Data Analyst",
  "Software Developer",
  "React Developer"
];

export default function Hero() {
  const currentTitle = useTypewriter(TITLES, { holdDuration: 2000 });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 bg-slate-950"
    >
      <HeroCanvas />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <StaggerContainer className="order-2 md:order-1 pt-20 md:pt-0">
          <StaggerItem>
            <p className="text-[#2DD4BF] text-lg font-medium mb-3 tracking-wide uppercase">
              Welcome to my portfolio
            </p>
          </StaggerItem>
          
          <StaggerItem>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-4 text-slate-100">
              Siddhi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED]">
                Ghodake
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-2xl sm:text-3xl text-slate-300 font-medium mb-6 h-10 flex items-center gap-2">
              <span className="text-slate-400">I am a</span>
              <span className="text-[#2DD4BF] font-mono">{currentTitle}</span>
              <span className="w-2 h-6 bg-[#2DD4BF] animate-pulse"></span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
              Transforming raw data into actionable business insights and building robust web applications.
            </p>
          </StaggerItem>

          <StaggerItem className="flex flex-wrap gap-4 mb-10">
            <MagneticButton
              href="#projects"
              className="px-8 py-3.5 bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6] text-slate-950 rounded-full font-bold hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-3.5 border border-[#334155] text-slate-200 rounded-full font-bold hover:border-[#2DD4BF] hover:text-[#2DD4BF] bg-slate-900/50 backdrop-blur-md transition-all duration-300"
            >
              Download Resume
            </MagneticButton>
          </StaggerItem>

          <StaggerItem className="flex gap-5">
            {[
              { Icon: FiLinkedin, href: contact.linkedin, label: "LinkedIn" },
              { Icon: FiGithub, href: contact.github, label: "GitHub" },
              { Icon: FiMail, href: `mailto:${contact.email}`, label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#2DD4BF] hover:border-[#2DD4BF] hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all duration-300"
              >
                <Icon size={22} />
              </a>
            ))}
          </StaggerItem>
        </StaggerContainer>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Glowing rings */}
            <div className="absolute inset-0 rounded-full border-2 border-[#2DD4BF]/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-[-10px] rounded-full border border-[#7C3AED]/30 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-[-20px] rounded-full border border-[#2DD4BF]/10 animate-[spin_20s_linear_infinite]" />
            
            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-[#334155] bg-slate-900 z-10 shadow-[0_0_50px_rgba(45,212,191,0.15)]">
              <img
                src="/profile.jpg"
                alt="Siddhi Ghodake"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Siddhi+Ghodake&background=0D1117&color=2DD4BF&size=512";
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 bg-[#2DD4BF] rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
