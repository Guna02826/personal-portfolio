import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Terminal, 
  Wrench, 
  Download, 
  ChevronRight,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Layers,
  Send,
  CheckCircle2
} from "lucide-react";

const GithubIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const profileLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gunasekaraselvapandian-annadurai/",
    icon: <LinkedinIcon size={20} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/Guna02826",
    icon: <GithubIcon size={20} />,
  },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: <Code2 className="text-sky-400" />,
    items: ["React.js", "Next.js", "SvelteKit", "TailwindCSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: <Terminal className="text-indigo-400" />,
    items: ["Node.js", "Express.js", "Fastify", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    icon: <Database className="text-emerald-400" />,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Mongoose", "Sequelize ORM"],
  },
  {
    title: "Tools",
    icon: <Wrench className="text-amber-400" />,
    items: ["Antigravity", "Codex", "Git", "GitHub", "Postman", "AWS", "Technical Documentation"],
  },
];

const experienceEntries = [
  {
    role: "Software Engineering Intern",
    company: "Cloud Desk Technologies Pvt Ltd",
    location: "Chennai",
    period: "Dec 2025 - Apr 2026",
    intro:
      "Worked on Neorem and Revo365 products and got hands-on experience with full-stack feature development.",
    bullets: [
      "Built and shipped 6 feature modules for Neorem across frontend pages, backend APIs, and database changes.",
      "Created a customer portal from scratch with login, payments, maintenance tracking, and property-related workflows.",
      "Developed a reusable SvelteKit UI library with 30+ components to support faster page development.",
      "Migrated 18 Revo365 list pages and fixed a Razorpay payment-status issue in production.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Zeromagic Labs Pvt. Ltd.",
    location: "Chennai",
    period: "Jan 2024 - Jun 2024",
    intro:
      "Worked on backend APIs and frontend integration for internal tools in an Agile team environment.",
    bullets: [
      "Designed and implemented Node.js and Express.js APIs for internal workflows and data pipelines.",
      "Integrated APIs with React components to support complete end-to-end features.",
      "Took part in sprint reviews, stand-ups, and regular code review cycles.",
    ],
  },
];

const projectEntries = [
  {
    title: "Lead Lynx",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    summary:
      "A CRM project for managing leads, campaigns, and role-based user access in one place.",
    bullets: [
      "Implemented JWT-based authentication and protected routes.",
      "Added campaign management and real-time notifications.",
    ],
    github: "https://github.com/Guna02826/LeadLynx",
    live: "https://leadlynx.netlify.app/",
    image: "/LeadLynx.mp4",
  },
  {
    title: "Chatter Box",
    stack: ["React.js", "Node.js", "Socket.io", "Express.js"],
    summary:
      "A real-time chat application with room-based messaging and deployed frontend-backend integration.",
    bullets: [
      "Built live messaging using Socket.io.",
      "Handled deployment and cross-origin communication setup.",
    ],
    github: "https://github.com/Guna02826/chatterbox",
    live: "https://chatterboxweb.netlify.app/",
    image: "/Chatterbox.mp4",
  },
  // {
  //   title: "Shop Ease",
  //   stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  //   summary:
  //     "An e-commerce project with shopping flow, admin product management, and role-based access.",
  //   bullets: [
  //     "Built cart and purchase flow using React Context.",
  //     "Added admin controls and secure authentication support.",
  //   ],
  //   github: "https://github.com/Guna02826/shop-ease",
  //   live: "https://shop-ease-online.netlify.app/",
  //   image: "/shopease.mp4",
  // },
  {
    title: "Delish Monde",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    summary:
      "A full-stack bakery e-commerce platform featuring secure user authentication, product management, and a comprehensive admin dashboard for sales insights.",
    bullets: [
      "Built secure authentication using JWT with HTTP-only cookies for enhanced security.",
      "Implemented a complete ordering workflow with cart persistence and admin oversight for revenue and order tracking.",
    ],
    github: "https://github.com/Guna02826/delishmonde-store/",
    live: "https://delishmonde-store.netlify.app/",
    image: "/DelishMonde.mp4",
  },
];

const education = {
  degree: "Bachelor of Engineering - Computer Science",
  school: "Sathyabama Institute of Science and Technology, Chennai",
  year: "2024",
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};


function SectionHeading({ title, subtitle, icon: Icon }) {
  return (
    <Motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-8 sm:mb-12"
    >
      <div className="flex items-center gap-3 mb-3 sm:mb-4">
        {Icon && <Icon className="text-sky-400 sm:w-7 sm:h-7" size={24} />}
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-400">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
    </Motion.div>
  );
}


function Header() {
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
        isScrolled || isMenuOpen ? "glass py-3 shadow-lg" : "bg-transparent py-5"
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
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-slate-300 transition hover:text-sky-400"
              >
                {link.label}
              </Motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4 border-r border-white/10 pr-4 mr-2">
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
              className="md:hidden text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CheckCircle2 size={24} className="rotate-45" /> : <Layers size={24} />}
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
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-lg font-medium text-slate-300 hover:text-sky-400"
                  onClick={() => setIsMenuOpen(false)}
                >
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

function Hero() {
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
          className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]"
        >
          Gunasekaraselvapandian <br className="hidden sm:block" />
          <span className="text-gradient">Annadurai</span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-base text-slate-400 sm:text-xl px-2"
        >
          B.E Computer Science graduate passionate about building scalable 
          web applications with modern technologies. 
        </Motion.p>

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

function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container">
        <SectionHeading 
          title="About Me" 
          subtitle="My journey into full-stack development."
          icon={Layers}
        />
        
        <div className="grid gap-12 md:grid-cols-2">
          <Motion.div {...fadeInUp} className="space-y-6 text-lg text-slate-300">
            <p>
              I specialize in bridging the gap between design and development, 
              creating seamless user experiences backed by robust server-side logic.
            </p>
            <p>
              My internships at <span className="text-sky-400">Cloud Desk Technologies</span> and <span className="text-indigo-400">Zeromagic Labs</span> gave me 
              hands-on experience with real-world products, from building custom UI libraries 
              to optimizing backend data pipelines.
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
                Focus on performance and accessibility in every project.
              </li>
            </ul>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="container">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="A comprehensive list of technologies I use to build modern web applications."
          icon={Code2}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, idx) => (
            <Motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-sky-400 transition-colors group-hover:bg-sky-500 group-hover:text-white">
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

function Experience() {
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

function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Selected work that demonstrates my technical capabilities."
          icon={Code2}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

function Education() {
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
            <span className="inline-block rounded-full bg-sky-500/10 px-4 py-1 text-sm font-semibold text-sky-400 mb-6">
              Class of {education.year}
            </span>
            <h3 className="text-3xl font-bold text-white mb-2">{education.degree}</h3>
            <p className="text-xl text-slate-400">{education.school}</p>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "gssp02826@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="I'm currently looking for new opportunities. My inbox is always open!"
          icon={Send}
        />

        <Motion.div 
          {...fadeInUp}
          className="mx-auto max-w-3xl rounded-3xl glass p-8 md:p-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Ready to start a conversation?</h3>
          
          <div className="flex flex-col items-center gap-6">
            <button
              onClick={copyEmail}
              className="group relative flex items-center gap-3 rounded-2xl bg-slate-800 px-8 py-4 text-lg font-medium text-white transition hover:bg-slate-700"
            >
              <Mail className="text-sky-400" />
              {email}
              <AnimatePresence>
                {copied && (
                  <Motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-sky-500 px-3 py-1 text-xs font-bold"
                  >
                    Copied!
                  </Motion.span>
                )}
              </AnimatePresence>
            </button>

            <div className="flex gap-4">
              {profileLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl glass text-slate-400 transition hover:-translate-y-1 hover:bg-slate-800 hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Gunasekaraselvapandian Annadurai. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main className="bg-slate-900 text-slate-100 selection:bg-sky-500/30">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

