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
    <section id="projects" className="py-28 px-6 relative z-10 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-slate-100">
                Featured <span className="text-[#2DD4BF]">Projects</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED] rounded-full" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#2DD4BF] text-slate-950 shadow-[0_0_15px_rgba(45,212,191,0.4)]"
                      : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-[#2DD4BF]/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group relative rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden hover:border-[#2DD4BF]/50 transition-all duration-500 shadow-xl"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${project.title.replace(/ /g, "+")}&background=0F172A&color=2DD4BF&size=512`;
                    }}
                  />
                  
                  {/* Hover Links Overlay */}
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-[#2DD4BF] hover:bg-slate-700 transition-colors transform hover:scale-110">
                      <FiGithub size={20} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#2DD4BF] flex items-center justify-center text-slate-950 hover:bg-[#14B8A6] transition-colors transform hover:scale-110 shadow-[0_0_15px_rgba(45,212,191,0.5)]">
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-slate-100 group-hover:text-[#2DD4BF] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[11px] font-mono font-medium text-[#7C3AED] bg-[#7C3AED]/10 rounded-md border border-[#7C3AED]/20">
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
