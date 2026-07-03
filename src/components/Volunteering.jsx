// components/Volunteering.jsx — Volunteering section
import SectionWrapper from "./SectionWrapper";
import { volunteering } from "../data";
import { FiUsers, FiCheck } from "react-icons/fi";

export default function Volunteering() {
  return (
    <SectionWrapper id="volunteering">
      <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-center mb-4">
        <span className="text-[#2DD4BF]">Volunteering & Leadership</span>
      </h2>
      <div className="w-16 h-1 bg-[#2DD4BF] rounded-full mx-auto mb-12" />

      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {volunteering.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#2DD4BF]/30 hover:bg-white/[0.08] transition-all duration-300 group"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#2DD4BF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2DD4BF]/20 transition-all duration-300">
                <FiUsers size={24} className="text-[#2DD4BF]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-1 text-white group-hover:text-[#2DD4BF] transition-colors">
                  {item.role}
                </h3>
                <p className="text-[#94A3B8] mb-6">{item.institution}</p>
                <ul className="space-y-3">
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#94A3B8] group-hover:text-slate-300 transition-colors text-sm sm:text-base">
                      <FiCheck size={16} className="text-[#2DD4BF] mt-1 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
