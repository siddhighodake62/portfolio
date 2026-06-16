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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F172A]/90 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-[#334155]/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold font-[family-name:var(--font-heading)] tracking-tight"
        >
          Siddhi<span className="text-[#2DD4BF]">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === key
                      ? "text-[#2DD4BF] bg-[#2DD4BF]/10"
                      : "text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E293B]"
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
          className="md:hidden text-[#F1F5F9] text-2xl p-2 rounded-lg hover:bg-[#1E293B] transition"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0F172A]/95 backdrop-blur-xl border-t border-[#334155]/50 animate-[fade-up_0.3s_ease-out]">
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
                        ? "text-[#2DD4BF] bg-[#2DD4BF]/10"
                        : "text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E293B]"
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
