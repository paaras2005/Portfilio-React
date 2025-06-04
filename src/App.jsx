import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./custom.scss"; // Custom styles
// import Skills from './components/Skills';

import Home from "./components/Home/";
import About from "./components/About/";
import Contact from "./components/Contact/";
import Education from "./components/Education/";
import Projects from "./components/Projects/";
import Skills from "./components/Skills/";
import Certificate from "./components/Certificate/";

export default function App() {
  return (
    <>
      <Router>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark shadow m-0 p-3"
          style={{
            background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          }}
        >
          <Link className="navbar-brand fs-3 fw-bold text-light" to="/">
            Paras <span className="text-primary">Dhadhal</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav w-100 justify-content-end align-items-center"
              style={{
                fontSize: "1.2rem",
                color: "#4c0bce",
                fontWeight: "500",
              }}
            >
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  style={{ hover: { color: "#4c0bce" } }}
                >
                  Home <i className="bi bi-house"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ hover: { color: "#4c0bce" } }}
                >
                  About <i className="bi bi-person"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/education"
                  style={{ hover: { color: "#4c0bce" } }}
                >
                  Education <i className="bi bi-mortarboard"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/projects"
                  style={{ hover: { color: "#4c0bce" } }}
                >
                  Projects <i className="bi bi-folder"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/skills"
                  style={{ hover: { color: "#4c0bce" } }}
                >
                  Skills <i className="bi bi-tools"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/certificate"
                  style={{ hover: { color: "#4c0bce" } }}
                >
                  Certificate <i className="bi bi-award"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  style={{ hover: { color: "#4c0bce" } }}
                >
                  Contact <i className="bi bi-telephone"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
        <footer>
          <div
            className="container-fluid text-center p-5 shadow text-light"
            style={{
              background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
            }}
          >
            <p
              className="text-light mb-0 "
              style={{ color: "#4c0bce", backgroundColor: "transparent" }}
            >
              &copy; {new Date().getFullYear()} Paras Dhadhal. All rights
              reserved.
            </p>
            <div>
              <p
                className="text-light mb-0"
                style={{ color: "#4c0bce", backgroundColor: "transparent" }}
              >
                Follow me on{" "}
                <a
                  href="https://www.linkedin.com/in/parasbhai-dhadhal-563936356/"
                  className="text-primary text-decoration-none"
                  target="_blank"
                >
                  LinkedIn <i className="bi bi-linkedin"></i>
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/Paaras2005"
                  className="text-primary text-decoration-none"
                  target="_blank"
                >
                  GitHub <i className="bi bi-github"></i>
                </a>{" "}
                |{" "}
                <a
                  href="https://twitter.com/PaarasDhadhal"
                  className="text-primary text-decoration-none"
                  target="_blank"
                >
                  Twitter <i className="bi bi-twitter"></i>
                </a>{" "}
                |{" "}
                <a
                  href="https://www.instagram.com/parubhaidhadhal/"
                  className="text-primary text-decoration-none"
                  target="_blank"
                >
                  Instagram <i className="bi bi-instagram"></i>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </Router>
    </>
  );
}
