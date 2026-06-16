import { contact } from "../data";
import { FadeIn, StaggerContainer, StaggerItem } from "./PageTransitions";
import { FiLinkedin, FiGithub, FiMail, FiPhone, FiSend } from "react-icons/fi";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative z-10 bg-slate-950/80 backdrop-blur-3xl border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <StaggerContainer className="space-y-8">
            <StaggerItem>
              <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6 text-slate-100 leading-tight">
                Let's build something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED]">amazing together.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-col gap-6 pt-4">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800 group">
                <div className="w-14 h-14 rounded-full bg-[#2DD4BF]/10 flex items-center justify-center group-hover:bg-[#2DD4BF] group-hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] transition-all duration-300">
                  <FiMail className="text-[#2DD4BF] group-hover:text-slate-950 text-xl" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium mb-1">Email Me</p>
                  <p className="text-slate-200 font-bold tracking-wide">{contact.email}</p>
                </div>
              </a>

              <a href={`tel:${contact.phone}`} className="flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800 group">
                <div className="w-14 h-14 rounded-full bg-[#7C3AED]/10 flex items-center justify-center group-hover:bg-[#7C3AED] group-hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300">
                  <FiPhone className="text-[#7C3AED] group-hover:text-slate-950 text-xl" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium mb-1">Call Me</p>
                  <p className="text-slate-200 font-bold tracking-wide">{contact.phone}</p>
                </div>
              </a>
            </StaggerItem>

            <StaggerItem className="pt-8 flex gap-4">
              {[
                { Icon: FiLinkedin, href: contact.linkedin },
                { Icon: FiGithub, href: contact.github },
              ].map(({ Icon, href }, i) => (
                <MagneticButton key={i} href={href} target="_blank" className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#2DD4BF] hover:border-[#2DD4BF] hover:bg-[#2DD4BF]/10 transition-colors">
                  <Icon size={24} />
                </MagneticButton>
              ))}
            </StaggerItem>
          </StaggerContainer>

          {/* Right Column - Form */}
          <FadeIn delay={0.3} className="bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/10 rounded-full blur-[80px] -z-10" />
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-slate-400 text-sm font-bold tracking-wider">NAME</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-slate-400 text-sm font-bold tracking-wider">EMAIL</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-slate-400 text-sm font-bold tracking-wider">MESSAGE</label>
                <textarea 
                  rows="4"
                  placeholder="Hello Siddhi, I'd like to talk about..."
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 rounded-xl bg-slate-100 text-slate-950 font-bold text-lg hover:bg-[#2DD4BF] transition-colors duration-300 flex items-center justify-center gap-2 group">
                Send Message
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </FadeIn>
        </div>

        <div className="mt-28 text-center border-t border-slate-800 pt-8">
          <p className="text-slate-500 font-mono text-sm">
            Designed & Built with <span className="text-[#2DD4BF]">React Three Fiber</span> & <span className="text-[#7C3AED]">Framer Motion</span>
            <br />
            © {new Date().getFullYear()} Siddhi Ghodake.
          </p>
        </div>
      </div>
    </section>
  );
}
