import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Download, Layers, X } from "lucide-react";
import { navLinks, profileLinks } from "../../data/portfolio";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isMenuOpen ? "glass py-5 shadow-lg" : 
        isScrolled ? "glass py-3 shadow-lg" : 
        "bg-slate-900/40 backdrop-blur-md py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Motion.a
            href="#top"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold tracking-tighter text-white"
          >
            GUNA<span className="text-sky-400">.</span>DEV
          </Motion.a>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Motion.a
                key={link.label}
                href={link.href}
                {...(link.isDownload ? { download: true } : {})}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`text-sm font-medium transition ${
                  link.isDownload
                    ? "flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sky-400 hover:bg-sky-500/20"
                    : "text-slate-300 hover:text-sky-400"
                }`}
              >
                {link.isDownload && <Download size={14} />}
                {link.label}
              </Motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 border border-white/10 px-3 py-1.5 rounded-full glass mr-4">
              {profileLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 transition hover:text-white"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <button 
              className="lg:hidden flex items-center justify-center text-slate-300 p-2.5 rounded-xl glass hover:text-sky-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Layers size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.isDownload ? { download: true } : {})}
                  className={`block text-lg font-medium hover:text-sky-400 ${
                    link.isDownload
                      ? "flex items-center gap-2 text-sky-400"
                      : "text-slate-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.isDownload && <Download size={16} />}
                  {link.label}
                </a>
              ))}
              <div className="flex gap-6 pt-4 border-t border-white/5">
                {profileLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
