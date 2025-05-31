import React from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// // Import Bootstrap JS if needed, e.g., for modals or dropdowns
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
// // Import custom CSS if you have any
// import './Projects.css'; // Assuming you have a custom CSS file for additional styles

const projects = [
  {
    title: 'online Cloth Shopping',
    description: 'A store have online purchasing website.',
    icon: 'bi bi-cart4',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio made using React and Bootstrap.',
    icon: 'bi bi-window',
    link: '#',
  },
  {
    title: 'web chat App',
    description: 'A real-time chat application built with React and Firebase.',
    icon: 'bi bi-chat-dots',
    link: '#',
  },
];


function Projects() {
  return (
    <section className="text-center border rounded-start-5 m-3 p-4 bg-dark text-white" id="projects">
      <h2 className="mb-4 text-center text-primary bg-dark">Projects <i className="bi bi-folder-fill"></i></h2>
      <div className="row bg-dark p-4 rounded-3">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4 bg-dark text-white" key={index}>
            <div className="card h-100 shadow-sm bg-dark text-white border-1 rounded-3 border-light">
              <div className="card-body text-center">
                <i className={`${project.icon} mb-3 text-primary`} style={{ fontSize: '2rem' }}></i>
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-outline-primary col-6" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
