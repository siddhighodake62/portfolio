import { useState } from "react";
import { certifications } from "../data";
import { FadeIn, StaggerContainer, StaggerItem } from "./PageTransitions";
import { FiAward, FiX, FiZoomIn, FiDownload, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  const isPDF = cert.image?.toLowerCase().endsWith('.pdf');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative bg-slate-900 border border-slate-700 rounded-2xl sm:rounded-3xl w-full max-w-2xl shadow-2xl flex flex-col my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-950/50 backdrop-blur-md border border-slate-700 flex items-center justify-center text-slate-300 hover:text-[#2DD4BF] hover:border-[#2DD4BF] hover:bg-slate-800 transition-all z-20"
            aria-label="Close"
          >
            <FiX size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          {isPDF ? (
            <div className="flex flex-col items-center justify-center p-6 sm:p-10 bg-slate-800">
              <FiAward size={56} className="text-[#2DD4BF] mb-4" />
              <p className="text-slate-300 text-base sm:text-lg font-semibold mb-6 text-center">PDF Certificate</p>
              <div className="flex gap-3 sm:gap-4 flex-wrap justify-center w-full">
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#2DD4BF]/20 border border-[#2DD4BF]/50 text-[#2DD4BF] rounded-lg sm:rounded-xl hover:bg-[#2DD4BF]/30 hover:border-[#2DD4BF] transition-all duration-300 font-semibold text-sm sm:text-base whitespace-nowrap"
                >
                  <FiExternalLink size={18} /> View
                </a>
                <a
                  href={cert.image}
                  download
                  className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#7C3AED]/20 border border-[#7C3AED]/50 text-[#7C3AED] rounded-lg sm:rounded-xl hover:bg-[#7C3AED]/30 hover:border-[#7C3AED] transition-all duration-300 font-semibold text-sm sm:text-base whitespace-nowrap"
                >
                  <FiDownload size={18} /> Download
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-slate-800 flex items-center justify-center overflow-hidden max-h-[60vh]">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  if (e.target.nextElementSibling) {
                    e.target.nextElementSibling.style.display = "flex";
                  }
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center hidden">
                <FiAward size={64} className="text-slate-600 mb-4" />
                <p className="text-slate-400 font-mono text-sm sm:text-base">Certificate Image Not Found</p>
              </div>
            </div>
          )}
          
          <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-900/50">
            <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1 sm:mb-2 font-[family-name:var(--font-heading)]">{cert.title}</h3>
            <p className="text-[#2DD4BF] text-sm sm:text-base">{cert.issuer}</p>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">{cert.year}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="certifications" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-20">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED]">Certifications</span>
              </h2>
              <p className="text-lg text-[#94A3B8] max-w-2xl font-light">
                Professional certifications and credentials that validate my expertise in data analytics and software development.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, i) => (
              <StaggerItem key={i}>
                <button
                  onClick={() => setSelected(cert)}
                  className="w-full text-left bg-gradient-to-br from-white/10 to-white/5 border border-[#2DD4BF]/20 backdrop-blur-sm rounded-2xl p-6 hover:border-[#2DD4BF]/50 hover:bg-white/[0.08] transition-all duration-500 group relative overflow-hidden active:scale-95 sm:active:scale-100 h-full flex flex-col"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#2DD4BF]/5 rounded-bl-[80px] -z-10 group-hover:bg-[#2DD4BF]/10 transition-colors duration-500" />
                  
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2DD4BF]/20 to-[#7C3AED]/10 border border-[#2DD4BF]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <FiAward size={24} className="text-[#2DD4BF]" />
                  </div>
                  
                  <h3 className="text-lg font-bold font-medium mb-2 text-white group-hover:text-[#2DD4BF] transition-colors line-clamp-2 flex-grow">
                    {cert.title}
                  </h3>
                  <p className="text-[#94A3B8] font-medium mb-1 text-sm line-clamp-1">{cert.issuer}</p>
                  <p className="text-[#64748B] text-xs mb-4 flex-grow">{cert.year}</p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold text-[#7C3AED] group-hover:text-[#2DD4BF] transition-colors pt-3 border-t border-[#2DD4BF]/10">
                    <FiZoomIn size={16} /> View Certificate
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {selected && <CertificateModal cert={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
