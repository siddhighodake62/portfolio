import { useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { contact } from "../data";
import MagneticButton from "./MagneticButton";
import { StaggerContainer, StaggerItem } from "./PageTransitions";

const TITLES = [
  "Data Analyst",
  "Web Developer"
];

export default function Hero() {
  const currentTitle = useTypewriter(TITLES, { holdDuration: 2000 });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text Content - Premium minimal */}
        <StaggerContainer className="order-2 md:order-1">
          <StaggerItem>
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
              <p className="text-[#2DD4BF] text-sm font-medium tracking-wide">Available for opportunities</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-white">
              Siddhi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#7C3AED] to-[#2DD4BF] animate-gradient">
                Ghodake
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#CBD5E1] font-medium mb-6 h-12 flex items-center gap-3">
              <span>I craft</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED] font-mono font-bold min-w-max">
                {currentTitle}
              </span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-lg text-[#94A3B8] leading-relaxed max-w-lg mb-12 font-light">
              Transforming raw data into actionable insights and architecting scalable web solutions. Passionate about bridging analytics and engineering to solve real-world challenges.
            </p>
          </StaggerItem>

          <StaggerItem className="flex flex-wrap gap-4 mb-12">
            <MagneticButton
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6] text-slate-950 rounded-xl font-bold hover:shadow-[0_20px_40px_rgba(45,212,191,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="px-8 py-4 border-2 border-[#2DD4BF] text-white rounded-xl font-bold hover:bg-[#2DD4BF]/10 transition-all duration-300 active:scale-95"
            >
              Get In Touch
            </MagneticButton>
          </StaggerItem>

          <StaggerItem className="flex gap-6 items-center">
            <div className="flex gap-4">
              {[
                { Icon: FiLinkedin, href: contact.linkedin, label: "LinkedIn" },
                { Icon: FiGithub, href: contact.github, label: "GitHub" },
                {
                  Icon: FiMail,
                  href: `mailto:${contact.email}?subject=Portfolio%20Inquiry`,
                  label: "Email"
                }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-full bg-white/5 border border-[#2DD4BF]/30 flex items-center justify-center text-[#94A3B8] hover:text-[#2DD4BF] hover:border-[#2DD4BF] hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-[#2DD4BF]/50 to-transparent" />
          </StaggerItem>
        </StaggerContainer>

        {/* Right: Profile Image - Premium minimal with subtle animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/20 via-[#7C3AED]/10 to-[#2DD4BF]/5 rounded-3xl blur-2xl" />

            {/* Subtle rotating border - minimal */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-[#2DD4BF]/40 via-transparent to-[#7C3AED]/40 bg-clip-border"
            />

            {/* Image container */}
            <div className="absolute inset-2 rounded-3xl overflow-hidden border border-[#2DD4BF]/20 bg-[#1A202C] shadow-2xl shadow-[#2DD4BF]/10">
              <img
                src="/profile.jpg"
                alt="Siddhi Ghodake"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Siddhi+Ghodake&background=0F172A&color=2DD4BF&size=512";
                }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - subtle and refined */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <p className="text-[#94A3B8] text-sm font-light">Scroll to explore</p>
        <div className="w-6 h-10 rounded-full border border-[#2DD4BF]/40 flex justify-center p-2">
          <motion.div className="w-1.5 h-2 bg-[#2DD4BF]/60 rounded-full" animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
}
