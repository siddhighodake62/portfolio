// components/CustomCursor.jsx — Animated teal dot + lagging ring, morphs on hover targets
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setVisible(true);

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    // Detect hovering over interactive elements
    const onOver = (e) => {
      const t = e.target.closest("a, button, [data-cursor-hover], .project-card-tilt");
      setHovering(!!t);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    // Lerp animation loop
    function animate() {
      // Dot follows closely
      pos.current.x += (mouse.current.x - pos.current.x) * 0.25;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.25;
      // Ring lags behind more
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-[width,height,background-color] duration-200"
        style={{
          width: hovering ? 12 : 8,
          height: hovering ? 12 : 8,
          borderRadius: "50%",
          backgroundColor: hovering ? "transparent" : "#2DD4BF",
          border: hovering ? "2px solid #2DD4BF" : "none",
          mixBlendMode: "difference",
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-[width,height,border-color,opacity] duration-300"
        style={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          borderRadius: "50%",
          border: `2px solid ${hovering ? "#2DD4BF" : "#2DD4BF55"}`,
          opacity: hovering ? 1 : 0.6,
        }}
      />
      {/* Hide default cursor globally */}
      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
}
