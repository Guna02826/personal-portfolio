import React from "react";
import { motion as Motion } from "framer-motion";
import { Code2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { skillGroups } from "../../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="container">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="A comprehensive list of technologies I use to build modern web applications."
          icon={Code2}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, idx) => (
            <Motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-sky-400 transition-all duration-300 group-hover:bg-white group-hover:text-sky-600 group-hover:scale-110">
                {group.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span 
                    key={item} 
                    className="rounded-full bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
