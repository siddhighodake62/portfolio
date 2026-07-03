// components/Education.jsx — Education section
import SectionWrapper from "./SectionWrapper";
import { education } from "../data";
import { FiBookOpen, FiAward } from "react-icons/fi";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-center mb-4">
        <span className="text-[#2DD4BF]">Education</span>
      </h2>
      <div className="w-16 h-1 bg-[#2DD4BF] rounded-full mx-auto mb-12" />

      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#2DD4BF]/30 hover:bg-white/[0.08] transition-all duration-300 group"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#2DD4BF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2DD4BF]/20 transition-all duration-300">
                <FiBookOpen size={24} className="text-[#2DD4BF]" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-1 text-white">
                  {edu.degree}
                </h3>
                <p className="text-[#94A3B8] mb-3">{edu.institution}</p>
                <div className="flex flex-wrap gap-3">
                  {edu.cgpa && (
                    <span className="flex items-center gap-1.5 px-3 py-1 text-sm bg-[#2DD4BF]/10 text-[#2DD4BF] rounded-full border border-[#2DD4BF]/20">
                      <FiAward size={14} />
                      CGPA: {edu.cgpa}
                    </span>
                  )}
                  {edu.percentage && (
                    <span className="flex items-center gap-1.5 px-3 py-1 text-sm bg-[#2DD4BF]/10 text-[#2DD4BF] rounded-full border border-[#2DD4BF]/20">
                      <FiAward size={14} />
                      Percentage: {edu.percentage}
                    </span>
                  )}
                  <span className="px-3 py-1 text-sm bg-[#334155]/50 text-[#94A3B8] rounded-full border border-[#334155]">
                    {edu.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
