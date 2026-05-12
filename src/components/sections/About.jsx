import React from "react";
import { motion as Motion } from "framer-motion";
import { Layers, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { fadeInUp } from "../../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container">
        <SectionHeading 
          title="About Me" 
          subtitle="Building real-world products from day one."
          icon={Layers}
        />
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Motion.div {...fadeInUp} className="space-y-6 text-lg text-slate-300">
            <p>
              I'm a 2024 BE CSE graduate with 8 months of internship experience at two 
              Chennai-based startups, where I built production features using React.js, 
              Node.js, and PostgreSQL.
            </p>
            <p>
              At <span className="text-sky-400">Cloud Desk Technologies</span>, I shipped 6 feature modules 
              and built a 30+ component SvelteKit UI library. At <span className="text-indigo-400">Zeromagic Labs</span>, 
              I developed backend APIs and integrated them with React frontends in an Agile workflow.
            </p>
          </Motion.div>
          
          <Motion.div 
            {...fadeInUp} 
            className="glass rounded-3xl p-8 border-sky-500/10"
          >
            <h4 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <CheckCircle2 className="text-sky-400" size={20} />
              Core Philosophy
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500 mt-2" />
                Write clean, maintainable, and efficient code.
              </li>
              <li className="flex gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500 mt-2" />
                Never stop learning and adapting to new technologies.
              </li>
              <li className="flex gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500 mt-2" />
                Built a 30+ component SvelteKit UI library from scratch — reusable design systems save teams hundreds of hours.
              </li>
            </ul>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
