import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none top-0 left-0 w-full h-full overflow-hidden">
      {/* Single consistent deep navy base */}
      <div className="absolute inset-0 bg-[#0B1120]" />
      
      {/* Subtle Gradient Mesh */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.05" />
          </linearGradient>
          
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Animated gradient shapes */}
        <g filter="url(#gooey)">
          <motion.circle
            cx="200"
            cy="150"
            r="300"
            fill="url(#grad1)"
            animate={{
              cx: [200, 250, 200],
              cy: [150, 100, 150],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="1000"
            cy="600"
            r="350"
            fill="url(#grad2)"
            animate={{
              cx: [1000, 950, 1000],
              cy: [600, 650, 600],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="600"
            cy="700"
            r="280"
            fill="url(#grad1)"
            animate={{
              cx: [600, 650, 600],
              cy: [700, 750, 700],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </g>
      </svg>

      {/* Radial gradient overlay - subtle glow from center */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0F172A]/50 to-[#0D1117]" 
           style={{
             backgroundImage: "radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(15, 23, 42, 0.5) 100%)"
           }} 
      />

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2DD4BF]/20 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
}
