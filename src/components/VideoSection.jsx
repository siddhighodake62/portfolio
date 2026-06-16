import { FadeIn } from "./PageTransitions";
import { FiPlayCircle } from "react-icons/fi";

export default function VideoSection() {
  return (
    <section id="video" className="py-28 px-6 relative z-10 bg-slate-950/50">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-slate-100">
              Meet <span className="text-[#7C3AED]">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#7C3AED] to-[#F472B6] rounded-full mx-auto mb-6" />
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A quick introduction to who I am, my journey, and what drives me.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-[0_0_50px_rgba(124,58,237,0.15)] group cursor-pointer">
            {/* Placeholder Image / Video Thumbnail */}
            <img 
              src="/video-thumbnail.jpg" 
              alt="Video Introduction"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600";
              }}
            />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-[#7C3AED]/20 backdrop-blur-md rounded-full flex items-center justify-center border border-[#7C3AED]/50 group-hover:scale-110 group-hover:bg-[#7C3AED] transition-all duration-500 shadow-[0_0_30px_rgba(124,58,237,0.4)]">
                <FiPlayCircle className="text-slate-100 w-10 h-10 ml-1" />
              </div>
            </div>

            {/* Simulated progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-800">
              <div className="h-full w-1/3 bg-gradient-to-r from-[#7C3AED] to-[#F472B6]" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
