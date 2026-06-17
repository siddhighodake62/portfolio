// components/Navbar.jsx — Sticky nav with active-section highlighting
import { useState, useEffect } from "react";
import { navLinks } from "../data";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for background blur + active link
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F172A]/70 backdrop-blur-xl shadow-lg shadow-[#2DD4BF]/5 border-b border-[#2DD4BF]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Premium minimal */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E2E8F0] hover:from-[#2DD4BF] hover:to-[#7C3AED] transition-all duration-500"
        >
          Siddhii<span className="text-[#2DD4BF]">.</span>
        </a>

        {/* Desktop links - Premium spacing */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const key = link.href.replace("#", "");
            return (
              <li key={key}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    active === key
                      ? "text-[#2DD4BF] bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 shadow-[0_0_20px_rgba(45,212,191,0.15)]"
                      : "text-[#CBD5E1] hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl p-2 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-[#2DD4BF]/30"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu - Premium styling */}
      {open && (
        <div className="md:hidden bg-gradient-to-b from-[#0F172A]/95 to-[#1A202C]/95 backdrop-blur-xl border-t border-[#2DD4BF]/10 animate-[fade-up_0.3s_ease-out]">
          <ul className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => {
              const key = link.href.replace("#", "");
              return (
                <li key={key}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      active === key
                        ? "text-[#2DD4BF] bg-[#2DD4BF]/10 border border-[#2DD4BF]/30"
                        : "text-[#CBD5E1] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
