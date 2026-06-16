// components/Preloader.jsx — Animated "SG" SVG intro with progress counter
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let start = null;
    const duration = 1800; // ms for 0–100%
    let rafId;

    function tick(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        // Hold briefly, then fade out
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => onComplete(), 600);
        }, 300);
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0F172A] transition-all duration-600 ${
        fadeOut ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* SVG Initials with stroke animation */}
      <svg
        viewBox="0 0 120 60"
        className="w-40 mb-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* S */}
        <text
          x="15"
          y="48"
          className="preloader-letter"
          style={{
            fontSize: "50px",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            stroke: "#2DD4BF",
            strokeWidth: 1.5,
            fill: "none",
            strokeDasharray: 200,
            strokeDashoffset: 200,
            animation: "draw-letter 1.5s ease-out forwards",
          }}
        >
          S
        </text>
        {/* G */}
        <text
          x="62"
          y="48"
          className="preloader-letter"
          style={{
            fontSize: "50px",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            stroke: "#2DD4BF",
            strokeWidth: 1.5,
            fill: "none",
            strokeDasharray: 200,
            strokeDashoffset: 200,
            animation: "draw-letter 1.5s ease-out 0.3s forwards",
          }}
        >
          G
        </text>
      </svg>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-[#1E293B] rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-[#2DD4BF] transition-[width] duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress number */}
      <p className="text-[#2DD4BF] font-mono text-sm tracking-widest">
        {progress}%
      </p>
    </div>
  );
}
