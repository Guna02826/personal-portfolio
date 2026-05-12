import React from "react";
import { motion as Motion } from "framer-motion";
import { ChevronRight, Download } from "lucide-react";
import { profileLinks } from "../../data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="container relative z-10 mx-auto px-4 py-12 text-center">
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 h-24 w-24 sm:h-32 sm:w-32 rounded-full border-4 border-sky-500/20 bg-slate-800 p-1"
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900 text-2xl sm:text-4xl font-bold text-sky-400">
            GA
          </div>
        </Motion.div>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-sky-400"
        >
          Full Stack Developer
        </Motion.p>

        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.2] sm:leading-[1.1] break-words px-2"
        >
          Gunasekaraselvapandian <br className="hidden sm:block" />
          <span className="text-gradient">Annadurai</span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mb-6 max-w-2xl text-base text-slate-400 sm:text-xl px-2"
        >
          Fresher Full Stack Developer &middot; 8 months internship experience &middot; React.js &middot; Node.js &middot; MongoDB &middot; Chennai
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-8 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-4">
            {profileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-slate-400 transition hover:-translate-y-1 hover:text-white"
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-semibold text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for full-time roles
          </span>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row px-4"
        >
          <a
            href="#projects"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-8 py-3.5 sm:py-4 font-semibold text-white transition hover:bg-sky-400 sm:w-auto"
          >
            View Projects <ChevronRight size={18} />
          </a>
          <a
            href="/Gunasekaraselvapandian_Resume.pdf"
            download
            className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-8 py-3.5 sm:py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-slate-800 sm:w-auto"
          >
            Download Resume <Download size={18} />
          </a>
        </Motion.div>
      </div>

      <Motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hidden sm:block"
      >
        <div className="h-10 w-6 rounded-full border-2 border-slate-700 p-1">
          <div className="h-2 w-1 mx-auto rounded-full bg-sky-500" />
        </div>
      </Motion.div>
    </section>
  );
}
