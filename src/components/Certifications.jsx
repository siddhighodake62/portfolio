import { useState } from "react";
import { certifications } from "../data";
import { FadeIn, StaggerContainer, StaggerItem } from "./PageTransitions";
import { FiAward, FiX, FiZoomIn } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative bg-slate-900 border border-slate-700 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-slate-950/50 backdrop-blur-md border border-slate-700 flex items-center justify-center text-slate-300 hover:text-[#2DD4BF] hover:border-[#2DD4BF] hover:bg-slate-800 transition-all z-10"
            aria-label="Close"
          >
            <FiX size={24} />
          </button>
          
          <div className="bg-slate-800 aspect-[4/3] relative flex items-center justify-center">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "flex";
              }}
            />
            <div className="absolute inset-0 flex-col items-center justify-center text-center hidden">
              <FiAward size={64} className="text-slate-600 mb-4" />
              <p className="text-slate-400 font-mono">Certificate Image Not Found</p>
            </div>
          </div>
          
          <div className="p-8 border-t border-slate-800">
            <h3 className="text-2xl font-bold text-slate-100 mb-2 font-[family-name:var(--font-heading)]">{cert.title}</h3>
            <p className="text-[#2DD4BF] text-lg">{cert.issuer}</p>
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
      <section id="certifications" className="py-28 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-slate-100">
                Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED]">Certifications</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED] rounded-full mx-auto" />
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, i) => (
              <StaggerItem key={i}>
                <button
                  onClick={() => setSelected(cert)}
                  className="w-full h-full text-left bg-slate-900/40 border border-slate-800/60 backdrop-blur-xl rounded-3xl p-8 hover:border-[#2DD4BF]/40 transition-all duration-500 group relative overflow-hidden flex flex-col"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2DD4BF]/5 rounded-bl-[100px] -z-10 group-hover:bg-[#2DD4BF]/10 transition-colors duration-500" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2DD4BF]/20 to-[#7C3AED]/20 border border-[#2DD4BF]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <FiAward size={28} className="text-[#2DD4BF]" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-2 text-slate-100 group-hover:text-[#2DD4BF] transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-slate-500 text-sm mb-6 flex-grow">{cert.year}</p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold text-[#7C3AED] group-hover:text-[#2DD4BF] transition-colors mt-auto pt-4 border-t border-slate-800/50">
                    <FiZoomIn /> View Credential
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
