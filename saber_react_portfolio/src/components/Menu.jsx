import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll direction and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show menu at the top of the page
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;

      // Active section detection
      const sections = ["home", "projects", "contact"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full px-4 py-0 z-50 transition-all duration-300 ${
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/95 px-6 py-4 shadow-2xl backdrop-blur-lg transition-all duration-300">
        
        {/* Left Side - Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/saber.a.msr"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-300"
          >
            <FaFacebookF className="text-[17px] transition-transform duration-300 group-hover:scale-110" />
          </a>

          <a
            href="https://github.com/sabcyb"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-300"
          >
            <FaGithub className="text-[17px] transition-transform duration-300 group-hover:scale-110" />
          </a>

          <a
            href="https://www.linkedin.com/in/saberahmedham/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-300"
          >
            <FaLinkedin className="text-[17px] transition-transform duration-300 group-hover:scale-110" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group relative text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                  isActive
                    ? "text-cyan-300"
                    : "text-slate-300 hover:text-cyan-300"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-500 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-200 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300 md:hidden"
        >
          {isOpen ? (
            <FaTimes className="text-lg transition-transform duration-300" />
          ) : (
            <FaBars className="text-lg transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          isOpen
            ? "mt-4 max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-950/95 px-6 py-6 shadow-xl backdrop-blur-lg">
          {navLinks.map((link, index) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 transform ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                } ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50"
                    : "text-slate-300 hover:bg-slate-800 hover:text-cyan-300"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}