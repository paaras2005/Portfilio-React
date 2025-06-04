// src/components/Projects.js
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal developer portfolio built using React and Bootstrap.",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "ToDo App",
    description: "A task management tool built with React and localStorage.",
    github: "https://github.com/yourusername/todo-app",
    demo: "https://yourtodoapp.com",
  },
  {
    title: "Weather App",
    description: "Shows real-time weather data using OpenWeatherMap API.",
    github: "https://github.com/yourusername/weather-app",
    demo: "https://yourweatherapp.com",
  },
];

function Projects() {
  return (
    <section className="py-5 bg-light text-center" id="Projects" style={{ color: '#4c0bce', background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', height: '100vh' }}>
      <div className="container mt-5">
        <h2 className="mb-5 text-primary fw-bold">Projects <i className="bi bi-folder-fill"></i></h2>
        <div className="row mt-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <div className="d-flex justify-content-around mt-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark"
                    >
                      <FaGithub className="me-2" />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
