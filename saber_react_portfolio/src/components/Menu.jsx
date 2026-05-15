import React, { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full px-4 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/95 px-6 py-4 shadow-2xl backdrop-blur-lg">
        
        {/* Left Side - Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/saber.ghazal.7"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-300"
          >
            <FaFacebookF className="text-[17px] transition-transform duration-300 group-hover:scale-110" />
          </a>

          <a
            href="https://github.com/saberghazal"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-300"
          >
            <FaGithub className="text-[17px] transition-transform duration-300 group-hover:scale-110" />
          </a>

          <a
            href="https://www.linkedin.com/in/saber-ghazal-9b1a4b1b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-300"
          >
            <FaLinkedin className="text-[17px] transition-transform duration-300 group-hover:scale-110" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium uppercase tracking-[0.18em] text-slate-300 transition-colors duration-300 hover:text-cyan-300"
            >
              <span className="after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-200 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300 md:hidden"
        >
          {isOpen ? (
            <FaTimes className="text-lg" />
          ) : (
            <FaBars className="text-lg" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen
            ? "mt-4 max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/95 px-6 py-6 shadow-xl backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium uppercase tracking-[0.15em] text-slate-300 transition-all duration-300 hover:bg-slate-800 hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}