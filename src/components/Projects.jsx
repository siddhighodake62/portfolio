import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "../data";
import { FadeIn, StaggerContainer, StaggerItem } from "./PageTransitions";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED]">Projects</span>
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-2xl font-light">
              A selection of work that demonstrates my expertise in data analytics, full-stack development, and modern web technologies.
            </p>

            {/* Category Filter - Premium styling */}
            <div className="flex flex-wrap gap-3 mt-8">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-[#2DD4BF] text-slate-950 border-[#2DD4BF] shadow-[0_0_20px_rgba(45,212,191,0.4)] font-bold"
                      : "bg-white/5 text-[#CBD5E1] border-[#2DD4BF]/20 hover:border-[#2DD4BF]/50 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-[#2DD4BF]/20 overflow-hidden hover:border-[#2DD4BF]/50 transition-all duration-500 shadow-lg hover:shadow-[0_20px_40px_rgba(45,212,191,0.15)]"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-white/5">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F172A]/40 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${project.title.replace(/ /g, "+")}&background=0F172A&color=2DD4BF&size=512`;
                    }}
                  />
                  
                  {/* Hover Links Overlay */}
                  <div className="absolute inset-0 bg-[#0F172A]/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white hover:text-[#2DD4BF] hover:bg-white/30 transition-all transform hover:scale-110 border border-white/30 hover:border-[#2DD4BF]">
                      <FiGithub size={24} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#2DD4BF] flex items-center justify-center text-slate-950 hover:bg-[#14B8A6] transition-all transform hover:scale-110 shadow-[0_0_20px_rgba(45,212,191,0.4)]">
                      <FiExternalLink size={24} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#2DD4BF] transition-colors line-clamp-2 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs font-mono font-medium text-[#2DD4BF] bg-[#2DD4BF]/10 rounded-full border border-[#2DD4BF]/20 hover:border-[#2DD4BF]/50 transition-all">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
