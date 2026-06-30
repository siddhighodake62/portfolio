import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./PageTransitions";
import { aboutStats } from "../data";

function AnimatedCounter({ from = 0, to, duration = 2 }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, to, duration, inView]);

  return (
    <motion.span
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
    >
      {rounded}
    </motion.span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative z-10 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED]">Me</span>
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-2xl font-light leading-relaxed">
              A passionate professional bridging data analyst and web development, with a keen eye for solving complex problems with elegant solutions.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Left: Main content - Premium card */}
          <StaggerContainer className="md:col-span-2 space-y-8">
            <StaggerItem>
              <div className="p-8 rounded-2xl bg-white/5 border border-[#2DD4BF]/20 backdrop-blur-sm hover:border-[#2DD4BF]/40 hover:bg-white/[0.08] transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4">Professional Journey</h3>
                <p className="text-[#CBD5E1] text-lg leading-relaxed mb-4">
                  I am a <span className="text-[#2DD4BF] font-semibold">Data Analyst and Web Developer</span> with a passion for transforming raw data into strategic insights and building intuitive digital solutions. Currently honing my skills as an IT Trainee at TechTech Ltd, where I design SQL queries, architect Power BI dashboards, and automate workflows.
                </p>
                <p className="text-[#CBD5E1] text-lg leading-relaxed">
                  My unique strength lies in combining analytical rigor with software engineering best practices—enabling me to create not just reports, but transformative data products. I thrive on learning cutting-edge technologies and collaborating with cross-functional teams to solve real-world challenges.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-8 rounded-2xl bg-white/5 border border-[#7C3AED]/20 backdrop-blur-sm hover:border-[#7C3AED]/40 hover:bg-white/[0.08] transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4">Core Mission</h3>
                <p className="text-[#CBD5E1] text-lg leading-relaxed">
                  To leverage advanced analytics, modern web technologies, and data-driven methodologies to optimize organizational performance and create meaningful value for businesses and teams. Every project is an opportunity to combine precision, creativity, and technical excellence.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Right: Statistics - Premium glass cards */}
          <StaggerContainer className="grid gap-5">
            {aboutStats.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-[#2DD4BF]/20 backdrop-blur-sm hover:border-[#2DD4BF]/40 transition-all duration-500 group">
                  <div className="text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED] mb-2 group-hover:scale-110 transition-transform duration-500 inline-block">
                    <AnimatedCounter to={stat.value} />+
                  </div>
                  <p className="text-[#94A3B8] font-medium uppercase tracking-wider text-sm">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
