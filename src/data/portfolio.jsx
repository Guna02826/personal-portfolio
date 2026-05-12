import React from "react";
import { 
  Code2, 
  Terminal, 
  Database, 
  Wrench 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons/SocialIcons";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/Gunasekaraselvapandian_Resume.pdf", isDownload: true },
];

export const profileLinks = [
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

export const skillGroups = [
  {
    title: "Frontend",
    icon: <Code2 className="text-sky-400" />,
    items: ["React.js", "TailwindCSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: <Terminal className="text-indigo-400" />,
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    icon: <Database className="text-emerald-400" />,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Mongoose", "Sequelize ORM"],
  },
  {
    title: "Tools",
    icon: <Wrench className="text-amber-400" />,
    items: ["Antigravity", "Codex", "Git", "GitHub", "Postman", "AWS", "Vercel", "Netlify"],
  },
];

export const experienceEntries = [
  {
    role: "Software Engineering Intern",
    company: "Cloud Desk Technologies Pvt Ltd",
    location: "Chennai",
    period: "Dec 2025 - Apr 2026",
    intro:
      "Worked on Neorem and Revo365 products and got hands-on experience with full-stack feature development.",
    bullets: [
      "Developed and delivered 6 feature modules for Neorem using Next.js/React, backend APIs (Express.js/Fastify), and database changes.",
      "Built a customer portal with login, payments, maintenance tracking, and property-related workflows.",
      "Developed a reusable SvelteKit UI library with 30+ components to support faster page development.",
      "Migrated 18 Revo365 list pages and resolved a Razorpay payment-status issue in production.",
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
      "Developed Node.js and Express.js APIs for internal workflows and data pipelines.",
      "Integrated APIs with React components to support complete end-to-end features.",
      "Tested and validated API endpoints using Postman, documenting request/response contracts for team reference.",
      "Participated in sprint reviews, stand-ups, and regular code review cycles.",
    ],
  },
];

export const projectEntries = [
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

export const education = {
  degree: "Bachelor of Engineering - Computer Science",
  school: "Sathyabama Institute of Science and Technology, Chennai",
  year: "2024",
  cgpa: "7.99 / 10.0",
};

export const contactConfig = {
  email: "gssp02826@gmail.com",
  accessKey: "7f06ac36" + "-" + "22d7" + "-" + "4857" + "-" + "a38a" + "-" + "9093023adcd3",
};
