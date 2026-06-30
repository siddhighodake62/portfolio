import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "../data";
import { FadeIn } from "./PageTransitions";
import { FiGithub, FiExternalLink, FiGlobe, FiBarChart2, FiPieChart, FiArrowRight } from "react-icons/fi";

const categoryColors = {
  "Web Development": "#8B5CF6",      // Purple
  "Data Analytics": "#2DD4BF",       // Teal
  "Dashboard Projects": "#38BDF8",    // Sky Blue
  "All": "#2DD4BF"                   // Fallback
};

function getTagStyles(tag) {
  const t = tag.toLowerCase().trim();
  const languages = ["sql", "python", "javascript", "js", "html", "html5", "css", "c++", "java"];
  const frameworks = ["react.js", "react", "node.js", "node", "express.js", "express", "tailwind css", "tailwind", "framer motion", "three.js", "three"];
  
  if (languages.includes(t)) {
    return "text-purple-400 bg-purple-500/10 border-purple-500/20 group-hover:border-purple-500/40";
  }
  if (frameworks.includes(t)) {
    return "text-teal-400 bg-teal-500/10 border-teal-500/20 group-hover:border-teal-500/40";
  }
  return "text-sky-400 bg-sky-500/10 border-sky-500/20 group-hover:border-sky-500/40";
}

function ProjectPreview({ project, categoryColor }) {
  const [imgError, setImgError] = useState(false);
  
  const getIcon = () => {
    const title = project.title.toLowerCase();
    if (title.includes("hr") || title.includes("system")) {
      return <FiGlobe className="text-white/80 w-6 h-6" />;
    }
    if (title.includes("pizza") || title.includes("sales")) {
      return <FiBarChart2 className="text-white/80 w-6 h-6" />;
    }
    return <FiPieChart className="text-white/80 w-6 h-6" />;
  };

  const isPlaceholder = !project.image || project.image.includes("placeholder");

  return (
    <div className="relative w-full h-48 bg-[#070a12] rounded-t-xl overflow-hidden border-b border-slate-800/60 flex flex-col">
      {/* Browser Header */}
      <div className="flex items-center px-4 py-2.5 bg-slate-900/60 border-b border-slate-800/40 gap-2 shrink-0">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#EF4444]/80" />
          <span className="w-2 h-2 rounded-full bg-[#F59E0B]/80" />
          <span className="w-2 h-2 rounded-full bg-[#10B981]/80" />
        </div>
        <div className="flex-grow">
          <div className="bg-[#0a0e1a]/80 border border-slate-800/40 rounded-md text-[9px] text-slate-500 py-0.5 px-3 max-w-[150px] mx-auto text-center truncate font-mono">
            {project.title.toLowerCase().replace(/\s+/g, '-')}.com
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="relative flex-grow overflow-hidden flex items-center justify-center">
        {(!imgError && !isPlaceholder) ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Abstract pattern */
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#111827] to-[#0a0e1a] flex items-center justify-center overflow-hidden">
            {/* Dot Grid */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none" 
              style={{
                backgroundImage: `radial-gradient(${categoryColor} 1.5px, transparent 1.5px)`,
                backgroundSize: '14px 14px'
              }}
            />
            {/* Radial Glow */}
            <div 
              className="absolute w-28 h-28 rounded-full blur-2xl opacity-20 pointer-events-none"
              style={{ backgroundColor: categoryColor }}
            />
            
            {/* Mock Dashboard UI inside Mockup */}
            <div className="absolute inset-x-5 bottom-3 top-3 border border-white/5 rounded-lg bg-slate-950/40 backdrop-blur-[2px] p-2.5 flex flex-col justify-between">
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  {getIcon()}
                </div>
                <div className="flex flex-col gap-1 flex-grow justify-center min-w-0">
                  <div className="h-2 w-20 bg-white/10 rounded" />
                  <div className="h-1.5 w-12 bg-white/5 rounded" />
                </div>
              </div>
              <div className="flex gap-2 items-end mt-2">
                <div className="flex-1 h-10 bg-white/5 rounded border border-white/5 p-1 flex flex-col justify-between">
                  <div className="h-1 w-6 bg-white/10 rounded" />
                  <div className="h-2 w-10 rounded-sm" style={{ backgroundColor: `${categoryColor}50` }} />
                </div>
                <div className="flex-1 h-14 bg-white/5 rounded border border-white/5 p-1 flex flex-col justify-between">
                  <div className="h-1 w-6 bg-white/10 rounded" />
                  <div className="h-2.5 w-12 rounded-sm" style={{ backgroundColor: `${categoryColors["Web Development"]}60` }} />
                </div>
                <div className="flex-1 h-8 bg-white/5 rounded border border-white/5 p-1 flex flex-col justify-between">
                  <div className="h-1 w-6 bg-white/10 rounded" />
                  <div className="h-1.5 w-8 rounded-sm" style={{ backgroundColor: `${categoryColors["Dashboard Projects"]}50` }} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const categoryColor = categoryColors[project.category] || "#2DD4BF";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-[1px] rounded-2xl transition-all duration-500 hover:-translate-y-2 group shadow-xl hover:shadow-[0_20px_40px_rgba(10,14,26,0.8)] h-full flex flex-col"
      style={{
        backgroundImage: isHovered 
          ? `linear-gradient(135deg, ${categoryColor}80 0%, rgba(255, 255, 255, 0.03) 50%, ${categoryColor}30 100%)`
          : `linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.08) 100%)`
      }}
    >
      {/* Category Glow Background */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${categoryColor}15, transparent 70%)`
        }}
      />
      
      {/* Inner Card */}
      <div className="relative rounded-[15px] bg-[#0a0e1a]/95 backdrop-blur-xl overflow-hidden flex-grow flex flex-col">
        {/* Subtle Category Top Accent Bar */}
        <div className="h-[3.5px] w-full" style={{ backgroundColor: categoryColor }} />
        
        {/* Browser-style Preview Mockup Frame */}
        <ProjectPreview project={project} categoryColor={categoryColor} />
        
        {/* Content */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors mb-2">
              {project.title}
            </h3>
            
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 font-light">
              {project.description}
            </p>
          </div>
          
          <div>
            {/* Color-coded tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => {
                const tagClass = getTagStyles(t);
                return (
                  <span key={t} className={`px-2.5 py-1 text-[11px] font-mono font-medium rounded-md border transition-all ${tagClass}`}>
                    {t}
                  </span>
                );
              })}
            </div>
            
            {/* Footer / Hover Link */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub Repository">
                  <FiGithub size={18} />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                  <FiExternalLink size={18} />
                </a>
              </div>
              
              <a 
                href={project.demo !== "#" ? project.demo : project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                style={{ color: categoryColor }}
              >
                VIEW PROJECT <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const getFilterButtonStyles = (cat, isActive) => {
    if (!isActive) {
      return "bg-white/5 text-[#CBD5E1] border-white/10 hover:border-white/20 hover:text-white";
    }
    switch (cat) {
      case "Web Development":
        return "bg-[#8B5CF6] text-slate-950 border-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.4)] font-bold";
      case "Data Analytics":
        return "bg-[#2DD4BF] text-slate-950 border-[#2DD4BF] shadow-[0_0_20px_rgba(45,212,191,0.4)] font-bold";
      case "Dashboard Projects":
        return "bg-[#38BDF8] text-slate-950 border-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.4)] font-bold";
      default:
        return "bg-gradient-to-r from-[#2DD4BF] to-[#8B5CF6] text-slate-950 border-transparent shadow-[0_0_20px_rgba(45,212,191,0.4)] font-bold";
    }
  };

  return (
    <section id="projects" className="py-32 px-6 relative z-10 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#8B5CF6]">Projects</span>
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
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${getFilterButtonStyles(
                    cat,
                    activeCategory === cat
                  )}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
