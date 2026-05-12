import React from "react";
import { motion as Motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { experienceEntries } from "../../data/portfolio";
import { fadeInUp } from "../../utils/animations";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey as an intern."
          icon={Briefcase}
        />

        <div className="space-y-12">
          {experienceEntries.map((entry, idx) => (
            <Motion.div
              key={idx}
              {...fadeInUp}
              className="relative flex gap-8 md:gap-12"
            >
              <div className="hidden flex-col items-center md:flex">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 ring-4 ring-sky-500/5">
                  <Briefcase size={24} />
                </div>
                <div className="mt-4 w-px flex-1 bg-gradient-to-b from-sky-500/20 to-transparent" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <h3 className="text-2xl font-bold text-white">{entry.role}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {entry.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {entry.location}</span>
                  </div>
                </div>
                <p className="mt-1 text-lg font-medium text-sky-400">{entry.company}</p>
                <p className="mt-4 text-slate-300 leading-relaxed">{entry.intro}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-400">
                      <ChevronRight className="mt-1 flex-shrink-0 text-sky-500" size={14} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
