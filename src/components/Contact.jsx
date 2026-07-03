import { useState } from "react";
import { contact } from "../data";
import { FadeIn, StaggerContainer, StaggerItem } from "./PageTransitions";
import { FiLinkedin, FiGithub, FiMail, FiPhone, FiSend, FiCheckCircle } from "react-icons/fi";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/siddhiighodake@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formObject),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
      } else {
        console.error("FormSubmit Error:", data);
        alert(data.message || "Failed to send message. Have you clicked the FormSubmit activation link in your email?");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Something went wrong. Please check your internet connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative z-10 border-t border-[#2DD4BF]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column - Contact Info */}
          <StaggerContainer className="space-y-10">
            <StaggerItem>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                Let's build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED]">something remarkable</span>
              </h2>
              <p className="text-lg text-[#94A3B8] leading-relaxed max-w-md font-light">
                I'm always interested in hearing about new opportunities and projects. Feel free to reach out anytime.
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-col gap-5 pt-4">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-[#2DD4BF]/20 group active:scale-95 sm:active:scale-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2DD4BF]/20 to-[#7C3AED]/10 flex items-center justify-center group-hover:from-[#2DD4BF]/40 group-hover:to-[#7C3AED]/20 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] transition-all duration-300 flex-shrink-0">
                  <FiMail className="text-[#2DD4BF] group-hover:text-[#14B8A6] text-lg transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[#94A3B8] text-sm font-medium mb-0.5">Email</p>
                  <p className="text-white font-bold tracking-wide truncate text-base">{contact.email}</p>
                </div>
              </a>

              <a href={`tel:${contact.phone}`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-[#7C3AED]/20 group active:scale-95 sm:active:scale-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED]/20 to-[#2DD4BF]/10 flex items-center justify-center group-hover:from-[#7C3AED]/40 group-hover:to-[#2DD4BF]/20 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all duration-300 flex-shrink-0">
                  <FiPhone className="text-[#7C3AED] group-hover:text-[#A78BFA] text-lg transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[#94A3B8] text-sm font-medium mb-0.5">Phone</p>
                  <p className="text-white font-bold tracking-wide text-base">{contact.phone}</p>
                </div>
              </a>
            </StaggerItem>

            <StaggerItem className="pt-8 flex gap-4">
              {[
                { Icon: FiLinkedin, href: contact.linkedin, label: "LinkedIn" },
                { Icon: FiGithub, href: contact.github, label: "GitHub" },
              ].map(({ Icon, href, label }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-[#2DD4BF]/30 flex items-center justify-center text-[#94A3B8] hover:text-[#2DD4BF] hover:border-[#2DD4BF] hover:bg-white/10 transition-all active:scale-95">
                  <Icon size={20} />
                </a>
              ))}
            </StaggerItem>
          </StaggerContainer>

          {/* Right Column - Form */}
          <FadeIn delay={0.3} className="bg-gradient-to-br from-white/10 to-white/5 border border-[#2DD4BF]/20 rounded-2xl p-8 shadow-2xl shadow-[#2DD4BF]/5 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#7C3AED]/20 to-[#2DD4BF]/10 rounded-full blur-[100px] -z-10" />

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2DD4BF]/30 to-[#7C3AED]/20 rounded-full flex items-center justify-center border border-[#2DD4BF]/30">
                  <FiCheckCircle className="text-[#2DD4BF] text-5xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                  <p className="text-[#94A3B8] max-w-sm">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-lg border border-[#2DD4BF]/30 text-white text-sm hover:border-[#2DD4BF] hover:bg-white/5 transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[#94A3B8] text-xs sm:text-sm font-bold tracking-wider uppercase">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full bg-white/5 border border-[#2DD4BF]/20 rounded-lg px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-[#64748B] text-sm sm:text-base focus:outline-none focus:border-[#2DD4BF]/50 focus:ring-1 focus:ring-[#2DD4BF]/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[#94A3B8] text-xs sm:text-sm font-bold tracking-wider uppercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full bg-white/5 border border-[#2DD4BF]/20 rounded-lg px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-[#64748B] text-sm sm:text-base focus:outline-none focus:border-[#2DD4BF]/50 focus:ring-1 focus:ring-[#2DD4BF]/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[#94A3B8] text-xs sm:text-sm font-bold tracking-wider uppercase">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-white/5 border border-[#2DD4BF]/20 rounded-lg px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-[#64748B] text-sm sm:text-base focus:outline-none focus:border-[#2DD4BF]/50 focus:ring-1 focus:ring-[#2DD4BF]/20 transition-all resize-none"
                  ></textarea>
                </div>

                <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 sm:py-4 rounded-lg bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6] text-slate-950 font-bold text-sm sm:text-base hover:shadow-[0_20px_40px_rgba(45,212,191,0.3)] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                  {!isLoading && <FiSend size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            )}
          </FadeIn>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center border-t border-[#2DD4BF]/10 pt-8">
          <p className="text-[#94A3B8] font-mono text-xs sm:text-sm">
            Designed & Built with <span className="text-[#2DD4BF]">React</span>, <span className="text-[#7C3AED]">Three.js</span> & <span className="text-[#14B8A6]">Framer Motion</span>
            <br />
            © {new Date().getFullYear()} Siddhi Ghodake. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
