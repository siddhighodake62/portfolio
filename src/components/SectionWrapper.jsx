// components/SectionWrapper.jsx — Scroll-reveal with clip-path curtain animation
import { useInView } from "../hooks/useInView";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function SectionWrapper({ id, children, className = "" }) {
  const [ref, isInView] = useInView(0.05);
  const reduced = useReducedMotion();

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 px-6 ${className}`}
      style={
        reduced
          ? {}
          : {
              clipPath: isInView
                ? "inset(0 0 0 0)"
                : "inset(10% 5% 10% 5%)",
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transition:
                "clip-path 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease-out, transform 0.8s ease-out",
            }
      }
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
