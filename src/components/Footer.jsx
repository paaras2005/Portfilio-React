export default function About() {
  return (
    <>
      <footer className="footer bg-secondary text-white text-center text-lg-start">
        <div className="container p-4 ">
          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0 d-flex flex-column align-items-start">
              <h5 className="text-uppercase fw-bold text-dark text-capitalize">About Me</h5>
              <p>
                We provide the best tech content and tutorials to help you grow
                your skills.
              </p>
            </div>
            {/* Column 2 */}
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0 d-flex flex-column align-items-start">
              <h5 className="text-uppercase fw-bold text-dark text-capitalize">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#home" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0 d-flex flex-column align-items-start">
              <h5 className="text-uppercase fw-bold text-dark text-capitalize">Follow Us</h5>
              <a href="#!" className="text-white me-3 fs-5 text-decoration-none">
                Facebook <i className="bi bi-facebook"></i>
              </a>
              <a href="#!" className="text-white me-3 fs-5 text-decoration-none">
                Twitter <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#!" className="text-white fs-5 text-decoration-none">
                Instagram <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center p-3 bg-secondary text-white mt-3 border-top border-primary border-3">
          © {new Date().getFullYear()}{" "}
          <span className="text-dark">Paras Dhadhal</span>. All Rights
          Reserved.
        </div>
      </footer>
    </>
  );
}