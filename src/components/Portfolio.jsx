import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center p-8">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Gunasekaraselvapandian
    </h1>
    <p className="text-lg md:text-xl mb-6">
      Full Stack Developer | MERN Stack | 2024 CS Grad
    </p>
    <div className="space-x-4">
      <a
        href="/Gunasekaraselvapandian_Resume.pdf"
        download
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl"
      >
        Download Resume
      </a>
      <a
        href="#projects"
        className="bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-xl"
      >
        View Projects
      </a>
    </div>
  </section>
);

const About = () => (
  <section className="bg-white text-gray-800 p-8 text-center">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="max-w-2xl mx-auto">
      CS Grad who loves turning coffee into clean code. Full-stack dev with a
      thing for great UI, fast APIs, and clean Git history. Built MERN stack
      projects like an e-commerce store and real-time chat app.
    </p>
  </section>
);

const Projects = () => (
  <section id="projects" className="bg-gray-100 p-8">
    <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          title: "Delish Monde Store",
          image: "/Screenshot1.png",
          desc: "Full-stack bakery e-commerce site with cart, auth, checkout.",
          tech: "MERN Stack",
          github: "https://github.com/Guna02826/delishmonde-store",
          demo: "https://delishmonde-store.netlify.app/",
        },
        {
          title: "Chatterbox",
          image: "/Screenshot.png",
          desc: "Real-time chat app with WebSocket & Socket.io.",
          tech: "React, Node, Socket.io",
          github: "https://github.com/Guna02826/chatterbox",
          demo: "https://chatterboxweb.netlify.app/",
        },
      ].map((project, i) => (
        <motion.div
          key={i}
          className="bg-white p-6 rounded-xl shadow-md"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="mb-2">{project.desc}</p>
          <p className="text-sm text-gray-600 mb-2">Tech: {project.tech}</p>
          <a
            className="text-blue-600 hover:underline"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            className="text-blue-600 hover:underline"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-4">
    <p>Connect with me:</p>
    <div className="space-x-4 mt-2">
      <a href="https://github.com/Guna02826" className="hover:underline">
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/gunasekaraselvapandian-annadurai/"
        className="hover:underline"
      >
        LinkedIn
      </a>
      <a href="mailto:gssp02826@gmail.com" className="hover:underline">
        Email
      </a>
    </div>
  </footer>
);

export default function Portfolio() {
  return (
    <Router>
      <div className="font-sans">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </Router>
  );
}
