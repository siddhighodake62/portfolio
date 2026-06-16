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
    <section id="about" className="py-28 px-6 relative z-10 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-slate-100">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED]">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED] rounded-full" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StaggerContainer className="lg:col-span-2 space-y-6">
            <StaggerItem>
              <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-xl hover:border-[#2DD4BF]/30 transition-colors duration-500 shadow-2xl shadow-black/50">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I am a passionate <span className="text-slate-100 font-semibold">Data Analyst and Software Developer</span> bridging the gap between raw data infrastructure and actionable business strategy. With a strong foundation in Computer Science, I specialize in extracting insights through complex SQL queries and visualizing them via dynamic Power BI dashboards.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Currently honing my skills as an IT Trainee at TechTech Ltd, I thrive on automating workflows and building intuitive React interfaces that make data accessible and beautiful.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  My ultimate goal is to leverage advanced analytics and modern web technologies to solve real-world problems and optimize organizational performance.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="grid gap-6">
            {aboutStats.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-xl hover:border-[#7C3AED]/30 hover:bg-slate-800/50 transition-all duration-500 group flex flex-col justify-center items-center text-center h-full">
                  <h3 className="text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-br from-[#2DD4BF] to-[#14B8A6] mb-2 group-hover:scale-110 transition-transform duration-500">
                    <AnimatedCounter to={stat.value} />+
                  </h3>
                  <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">
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
