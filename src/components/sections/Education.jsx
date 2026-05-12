import React from "react";
import { motion as Motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { education } from "../../data/portfolio";
import { fadeInUp } from "../../utils/animations";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container">
        <SectionHeading 
          title="Education" 
          icon={GraduationCap}
        />

        <Motion.div
          {...fadeInUp}
          className="glass relative overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block rounded-full bg-sky-500/10 px-4 py-1 text-sm font-semibold text-sky-400">
                Class of {education.year}
              </span>
              <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-400">
                CGPA: {education.cgpa}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">{education.degree}</h3>
            <p className="text-xl text-slate-400">{education.school}</p>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
