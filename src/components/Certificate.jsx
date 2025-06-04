// src/components/Certificates.js
import React from 'react';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
  {
    title: "React Developer Certificate",
    issuer: "Coursera",
    date: "June 2024",
    image: "https://via.placeholder.com/400x300", // Use real image URLs or local assets
    link: "https://coursera.org/verify/certificate-id",
  },
  {
    title: "JavaScript Mastery",
    issuer: "freeCodeCamp",
    date: "March 2024",
    image: "https://via.placeholder.com/400x300",
    link: "https://freecodecamp.org/certification",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    date: "January 2024",
    image: "https://via.placeholder.com/400x300",
    link: "https://udemy.com/certificate-link",
  },
];

const CertificateCard = ({ certificate }) => (
  <div className="col-md-6 text-center align-items-center">
    <div className="border rounded-5 border-2 border-light p-3 bg-dark shadow-sm h-100 text-center align-items-center">
      <h4 className="fw-bold text-uppercase text-white">Certificate of Achievement</h4>
      <p className="mt-3 text-white">Presented to</p>
      <h5 className="text-primary">{certificate.name}</h5>
      <p className="mt-3 mb-1 text-white">For completing</p>
      <h6 className="text-success">{certificate.title}</h6>
      <p className="mt-4 text-white"><strong>Date:</strong> {certificate.date}</p>
      <p className="text-white"><strong>Issued By:</strong> {certificate.issuer}</p>
    </div>
  </div>
);

const CertificatePage = () => {
  return (
    <section className="py-5 bg-white text-center" id="certificates" style={{ color: '#4c0bce', background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', height: '100vh' }}>
      <div className="container mt-5">
        <h2 className="mb-5 text-primary">Certificates <i className="bi bi-award-fill"></i></h2>
        <div className="row">
          {certificates.map((cert, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{cert.title}</h5>
                  <h6 className="text-muted">{cert.issuer}</h6>
                  <p className="text-secondary">{cert.date}</p>
                  <a
                    href={cert.link}
                    className="btn btn-outline-primary mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="me-2" />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatePage;