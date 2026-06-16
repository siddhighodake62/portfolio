// components/MagneticButton.jsx — CTA button that subtly pulls toward cursor
import { useRef, useState } from "react";

export default function MagneticButton({ children, className = "", href, onClick, ...props }) {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const RADIUS = 80; // magnetic pull radius
  const STRENGTH = 0.3;

  const handleMove = (e) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < RADIUS) {
      setOffset({ x: dx * STRENGTH, y: dy * STRENGTH });
    }
  };

  const handleLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const Tag = href ? "a" : "button";

  return (
    <Tag
      ref={btnRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
