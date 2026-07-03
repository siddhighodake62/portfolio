// components/SoftSkills.jsx — Animated pills with wobble hover + ripple click
import SectionWrapper from "./SectionWrapper";
import { softSkills } from "../data";
import { useInView } from "../hooks/useInView";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useState } from "react";

function SkillPill({ skill, index, isInView, reduced }) {
  const [ripple, setRipple] = useState(null);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y, key: Date.now() });
    setTimeout(() => setRipple(null), 600);
  };

  return (
    <span
      onClick={handleClick}
      className={`relative overflow-hidden px-6 py-3 rounded-full text-base font-medium bg-white/5 border border-white/10 text-[#F1F5F9] hover:border-[#2DD4BF] hover:text-[#2DD4BF] hover:shadow-[0_0_15px_#2DD4BF33] transition-all duration-300 cursor-default select-none ${
        !reduced ? "hover:animate-[wobble_0.5s_ease-in-out]" : ""
      } ${
        reduced
          ? "opacity-100"
          : isInView
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75"
      }`}
      style={{
        transitionDelay: reduced ? "0ms" : `${index * 100}ms`,
        transitionDuration: "500ms",
      }}
    >
      {skill}
      {/* Ripple effect */}
      {ripple && (
        <span
          key={ripple.key}
          className="absolute rounded-full bg-[#2DD4BF]/30 animate-[ripple_0.6s_ease-out_forwards] pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      )}
    </span>
  );
}

export default function SoftSkills() {
  const [ref, isInView] = useInView(0.2);
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="soft-skills">
      <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-center mb-4">
        Soft <span className="text-[#2DD4BF]">Skills</span>
      </h2>
      <div className="w-16 h-1 bg-[#2DD4BF] rounded-full mx-auto mb-12" />

      <div ref={ref} className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {softSkills.map((skill, i) => (
          <SkillPill
            key={skill}
            skill={skill}
            index={i}
            isInView={isInView}
            reduced={reduced}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
