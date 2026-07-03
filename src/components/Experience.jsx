import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "../data";
import { FadeIn, StaggerContainer, StaggerItem } from "./PageTransitions";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";

function TimelineItem({ exp, isLast }) {
  const isPresent = exp.period.toLowerCase().includes("present");

  return (
    <div className="relative pl-12 md:pl-20 py-6">
      {/* Glow dot */}
      <div className="absolute left-[3px] md:left-[11px] top-10 w-6 h-6 rounded-full bg-slate-950 border-[4px] border-[#2DD4BF] z-10 shadow-[0_0_15px_rgba(45,212,191,0.6)]">
        {isPresent && (
          <div className="absolute inset-[-6px] rounded-full border border-[#2DD4BF]/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        )}
      </div>

      <StaggerContainer>
        <StaggerItem>
          <div className="bg-slate-900/40 border border-slate-800/60 backdrop-blur-md rounded-3xl p-8 hover:border-[#2DD4BF]/40 hover:bg-slate-800/30 transition-all duration-500 shadow-xl group">
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-slate-100 group-hover:text-[#2DD4BF] transition-colors">
                    {exp.role}
                  </h3>
                  {isPresent && (
                    <span className="px-3 py-1 text-xs font-bold tracking-widest bg-[#2DD4BF]/10 text-[#2DD4BF] rounded-full border border-[#2DD4BF]/20 uppercase">
                      Current
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1.5 rounded-lg">
                    <FiBriefcase className="text-[#7C3AED]" /> {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1.5 rounded-lg">
                    <FiMapPin className="text-[#7C3AED]" /> {exp.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[#2DD4BF] font-mono text-sm bg-[#2DD4BF]/10 px-4 py-2 rounded-xl border border-[#2DD4BF]/20 shrink-0">
                <FiCalendar />
                {exp.period}
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {exp.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-full border border-slate-700">
                  {t}
                </span>
              ))}
            </div>

            <ul className="space-y-4">
              {exp.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 group-hover:text-slate-300 transition-colors">
                  <span className="text-[#2DD4BF] mt-1.5 text-lg leading-none">▹</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-28 px-6 relative z-10 border-t border-white/5" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-slate-100">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED]">Experience</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED] rounded-full" />
          </div>
        </FadeIn>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-[14px] md:left-[22px] top-8 bottom-0 w-[2px] bg-slate-800 overflow-hidden">
            <motion.div
              style={{ scaleY: pathLength, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#2DD4BF] via-[#7C3AED] to-transparent"
            />
          </div>

          <div className="space-y-4">
            {experience.map((exp, i) => (
              <TimelineItem key={i} exp={exp} isLast={i === experience.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
