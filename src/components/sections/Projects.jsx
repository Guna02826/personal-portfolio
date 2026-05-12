import React from "react";
import { motion as Motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { projectEntries } from "../../data/portfolio";
import { GithubIcon } from "../icons/SocialIcons";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Selected work that demonstrates my technical capabilities."
          icon={Code2}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectEntries.map((project, idx) => (
            <Motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-3xl glass hover:shadow-2xl hover:shadow-sky-500/5 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                {project.image ? (
                  project.image.endsWith('.mp4') ? (
                    <video
                      src={project.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  )
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-800">
                    <Code2 size={48} className="text-slate-700" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 pointer-events-none" />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                  {project.summary}
                </p>
                
                <div className="mt-auto flex items-center gap-4 pt-6 border-t border-slate-800">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-sky-400 hover:text-white"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center rounded-xl glass p-2.5 text-white transition hover:bg-slate-800"
                    title="GitHub Repository"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
