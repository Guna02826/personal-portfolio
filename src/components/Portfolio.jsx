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
  },
  {
    label: "GitHub",
    href: "https://github.com/Guna02826",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "SvelteKit", "TailwindCSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Fastify", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Mongoose", "Sequelize ORM"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "AWS", "Technical Documentation"],
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
    stack: "React.js, Node.js, Express.js, MongoDB, JWT",
    summary:
      "A CRM project for managing leads, campaigns, and role-based user access in one place.",
    bullets: [
      "Implemented JWT-based authentication and protected routes.",
      "Added campaign management and real-time notifications.",
    ],
    github: "https://github.com/Guna02826/LeadLynx",
    live: "https://leadlynx.netlify.app/",
    image: "/Leadlynx.gif",
  },
  {
    title: "Chatter Box",
    stack: "React.js, Node.js, Socket.io, Express.js",
    summary:
      "A real-time chat application with room-based messaging and deployed frontend-backend integration.",
    bullets: [
      "Built live messaging using Socket.io.",
      "Handled deployment and cross-origin communication setup.",
    ],
    github: "https://github.com/Guna02826/chatterbox",
    live: "https://chatterboxweb.netlify.app/",
    image: "/Chatterbox.png",
  },
  {
    title: "Shop Ease",
    stack: "React.js, Node.js, Express.js, MongoDB, JWT",
    summary:
      "An e-commerce project with shopping flow, admin product management, and role-based access.",
    bullets: [
      "Built cart and purchase flow using React Context.",
      "Added admin controls and secure authentication support.",
    ],
    github: "https://github.com/Guna02826/shop-ease",
    live: "https://shop-ease-online.netlify.app/",
    image: null,
  },
];

const education = {
  degree: "Bachelor of Engineering - Computer Science",
  school: "Sathyabama Institute of Science and Technology, Chennai",
  year: "2024",
};

const sectionContainerClass =
  "mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20";
const buttonPrimaryClass =
  "inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-center text-sm font-medium !text-white transition hover:bg-slate-800 sm:w-auto";
const buttonSecondaryClass =
  "inline-flex w-full items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-center text-sm font-medium !text-slate-800 transition hover:bg-slate-50 sm:w-auto";

function getEmailAddress() {
  const user = ["gssp", "02826"].join("");
  const domain = ["gmail", "com"].join(".");
  return `${user}@${domain}`;
}

function openEmail() {
  window.location.href = `mailto:${getEmailAddress()}`;
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <a
            href="#top"
            className="max-w-[14rem] text-sm font-semibold leading-snug text-slate-900 sm:max-w-none"
          >
            Gunasekaraselvapandian
          </a>
          <nav className="hidden flex-wrap gap-4 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-600 transition hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <nav className="flex flex-wrap gap-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-slate-200 bg-white">
      <div className={sectionContainerClass}>
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-slate-600">
            B.E CSE Graduate | Full Stack Developer
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Hi, I'm Gunasekaraselvapandian Annadurai.
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
            I completed my B.E in Computer Science and I am looking for a
            full-stack developer opportunity where I can keep learning by working
            on real projects.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            During my internships, I worked on frontend pages, backend APIs,
            database changes, reusable UI components, and bug fixes using React,
            Next.js, SvelteKit, Node.js, PostgreSQL, and MongoDB.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
            <span>Chennai, India</span>
            {profileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className={buttonPrimaryClass}
            >
              Projects
            </a>
            <a
              href="/Gunasekaraselvapandian_Resume.pdf"
              download
              className={buttonSecondaryClass}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-slate-200 bg-slate-50/60">
      <div className={sectionContainerClass}>
        <SectionHeading
          title="About"
          subtitle="A quick introduction."
        />

        <div className="mt-8 max-w-3xl border-l-2 border-sky-200 pl-5 text-sm leading-8 text-slate-700 sm:text-base">
          <p>
            I like full-stack development because it lets me understand how a
            product works from UI to backend and database.
          </p>
          <p>
            My internships helped me move from just building practice projects to
            working on actual product features, integrations, bug fixes, and shared
            UI components.
          </p>
          <p>
            I am still early in my career, but I am comfortable taking up frontend
            and backend tasks and improving step by step through team experience.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-slate-200 bg-white">
      <div className={sectionContainerClass}>
        <SectionHeading
          title="Skills"
          subtitle="Main technologies I have worked with so far."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-slate-200 bg-white p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-slate-200 bg-slate-50/60">
      <div className={sectionContainerClass}>
        <SectionHeading
          title="Internships"
          subtitle="Where I got my first real product experience."
        />

        <div className="mt-8 space-y-6">
          {experienceEntries.map((entry) => (
            <article
              key={`${entry.company}-${entry.role}`}
              className="border-l-4 border-sky-700 pl-4 sm:pl-5"
            >
              <p className="text-sm font-medium text-slate-600">{entry.role}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                {entry.company}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                {entry.location} | {entry.period}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                {entry.intro}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-slate-200 bg-white">
      <div className={sectionContainerClass}>
        <SectionHeading
          title="Projects"
          subtitle="A few projects I built while practicing full-stack development."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projectEntries.map((project) => (
            <article
              key={project.title}
              className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              {project.image ? (
                <div className="h-40 overflow-hidden bg-slate-100 sm:h-44">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="flex h-40 items-center justify-center bg-slate-100 px-4 text-center sm:h-44">
                  <span className="text-2xl font-semibold text-slate-700">
                    {project.title}
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{project.stack}</p>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {project.summary}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-primary inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium transition hover:bg-slate-800 sm:flex-1"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-secondary inline-flex w-full items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium transition hover:bg-slate-50 sm:flex-1"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="border-t border-slate-200 bg-slate-50/60">
      <div className={sectionContainerClass}>
        <SectionHeading
          title="Education"
          subtitle="College details."
        />

        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5 sm:p-6">
          <h3 className="text-xl font-semibold text-slate-900">{education.degree}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            {education.school}
          </p>
          <p className="mt-1 text-sm text-slate-500">Graduated in {education.year}</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-white">
      <div className={sectionContainerClass}>
        <SectionHeading
          title="Contact"
          subtitle="Best way to reach me is by email or LinkedIn."
        />

        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5 sm:p-6">
          <p className="text-sm leading-7 text-slate-600">
            I am open to full-stack developer opportunities.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row">
            <button
              type="button"
              onClick={openEmail}
              className={buttonPrimaryClass}
            >
              Email Me
            </button>
            <a
              href="https://www.linkedin.com/in/gunasekaraselvapandian-annadurai/"
              target="_blank"
              rel="noreferrer"
              className={buttonSecondaryClass}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>Gunasekaraselvapandian Annadurai</p>
        <div className="flex flex-wrap gap-4">
          {profileLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main className="text-slate-900">
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
