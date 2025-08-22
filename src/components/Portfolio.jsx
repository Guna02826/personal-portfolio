import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

// --- Hero Section ---
const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center p-8">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Gunasekaraselvapandian
    </h1>
    <p className="text-lg md:text-xl mb-6">Chennai, India</p>
    <div className="space-x-4">
      <a
        href="/Gunasekaraselvapandian_Resume.pdf"
        download
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl transition"
      >
        Download Resume
      </a>
      <a
        href="#projects"
        className="bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-xl transition"
      >
        View Projects
      </a>
      <a
        href="#contact"
        className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-xl transition"
      >
        Contact Me
      </a>
    </div>
  </section>
);

// --- About Section ---
const About = () => (
  <section className="bg-white text-gray-800 p-8 text-center">
    <h2 className="text-3xl font-bold mb-4">Summary</h2>
    <p className="max-w-3xl mx-auto">
      Recent Computer Science graduate (2024) with hands-on full-stack MERN and
      Spring Boot experience. Passionate about building scalable backend systems
      using Java, Node.js, PostgreSQL/MongoDB, and AWS basics. Eager to
      contribute to cloud-native projects and grow in a fast-paced,
      team-oriented environment.
    </p>

    <h3 className="text-2xl font-semibold mt-8 mb-2">Technical Skills</h3>
    <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
      <p><strong>Languages:</strong> Java, JavaScript, SQL</p>
      <p><strong>Backend:</strong> Node.js, Express.js, Spring Boot, REST APIs, JWT Auth</p>
      <p><strong>Frontend:</strong> React.js, HTML5, CSS3</p>
      <p><strong>Databases:</strong> MongoDB, PostgreSQL</p>
      <p><strong>Tools:</strong> Git, GitHub, Postman, VS Code, Netlify, Render</p>
      <p><strong>Cloud & Infra:</strong> AWS (EC2, S3 basics), Elasticsearch (basic)</p>
      <p><strong>Concepts:</strong> OOP, Data Structures, API Design, JWT Auth, Version Control</p>
    </div>

    <h3 className="text-2xl font-semibold mt-8 mb-2">Education</h3>
    <p>B.E. in Computer Science and Engineering, Sathyabama Institute of Science and Technology, Chennai</p>
    <p>Key Courses: Data Structures & Algorithms, Operating Systems, DBMS, Software Engineering</p>

    <h3 className="text-2xl font-semibold mt-8 mb-2">Soft Skills</h3>
    <ul className="list-disc list-inside max-w-3xl mx-auto text-left">
      <li>Excellent communicator – Presented live demos to 20+ peers during project expos</li>
      <li>Problem-solver – Debugged and optimized APIs for multiple projects</li>
      <li>Team player – Collaborated in Agile-style 3-member teams with Git-based workflows</li>
    </ul>
  </section>
);

// --- Projects Section ---
const Projects = () => {
  const projectList = [
    {
      title: "Delish Monde – E-Commerce Bakery Web App",
      desc: "Full-stack MERN app with user authentication, product listings, and order placement features. Optimized MongoDB queries for faster product fetch, reducing latency by 15%. Deployed on Render + Netlify with responsive UI and secure backend routes.",
      tech: "MERN Stack",
      github: "https://github.com/Guna02826/delishmonde-store",
      demo: "https://delishmonde-store.netlify.app/",
      image: "/Delish Monde.png",
    },
    {
      title: "Trackeroo – Expense Tracker Web App",
      desc: "Built a Spring Boot + React app for expense tracking with transaction CRUD features. Added JWT-based authentication and PostgreSQL for secure, efficient data management. Deployed on Netlify (frontend) and Render (backend) with responsive UI.",
      tech: "Spring Boot, React, PostgreSQL",
      github: "https://github.com/Guna02826/chatterbox",
      demo: "https://chatterboxweb.netlify.app/",
      image: "/Trackeroo.png",
    },
    {
      title: "ChatterBox – Real-Time Chat App",
      desc: "Real-time messaging app using WebSockets, JWT auth, and MongoDB for chat history. Built scalable backend API with Express; reduced response time by optimizing routes. Explored Kafka basics for possible pub-sub extension.",
      tech: "React, Node.js, Socket.io, MongoDB",
      github: "https://github.com/Guna02826/chatterbox",
      demo: "https://chatterboxweb.netlify.app/",
      image: "/Chatterbox.png",
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectList.map((project, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md will-change-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <div className="w-full aspect-w-16 aspect-h-9 bg-gray-200 rounded-md mb-4 overflow-hidden flex justify-center items-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>
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
};

// --- Certifications Section ---
const Certifications = () => (
  <section className="bg-gray-50 text-gray-800 p-8">
    <h2 className="text-3xl font-bold text-center mb-6">Certifications</h2>
    <div className="flex justify-center">
      <motion.a
        href="/Certificate of Cloud Computing.jpg"
        target="_blank"
        rel="noreferrer"
        className="bg-white p-6 rounded-xl shadow-md overflow-hidden block max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-full aspect-w-16 aspect-h-9 bg-gray-200 rounded-md mb-4 overflow-hidden flex justify-center items-center">
          <img
            src="/Certificate of Cloud Computing.jpg"
            alt="Introduction to Cloud Computing Certificate"
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">
          Introduction to Cloud Computing
        </h3>
        <p className="text-center">
          Star Certifications – Basic cloud concepts and services
        </p>
      </motion.a>
    </div>
  </section>
);

// --- Contact Section ---
const Contact = () => (
  <section id="contact" className="bg-gray-100 text-gray-800 p-8 text-center">
    <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
    <form
      name="contact"
      method="POST"
      action="https://formspree.io/f/xblgjbzn"
      className="flex flex-col max-w-md mx-auto space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Send
      </button>
    </form>
  </section>
);

// --- Footer Section ---
const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-8">
    <div className="max-w-3xl mx-auto space-y-4">
      <p className="text-lg font-semibold">Connect with Me</p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/Guna02826"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/gunasekaraselvapandian-annadurai/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Gunasekaraselvapandian. All rights reserved.
      </p>
    </div>
  </footer>
);

// --- Portfolio Component ---
export default function Portfolio() {
  return (
    <Router>
      <div className="font-sans">
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}
