import profileImage from "../assets/myimage.jpg";

export default function Footer() {
  return (
    <>
      <section
        className="text-center shadow-lg m-0 text-white"
        id="about"
        style={{
          height: "100vh",
          color: "#4c0bce",
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        }}
      >
        <h2 className="fw-bolder text-center text-primary mb-3 p-3">About Me<i className="bi bi-person-fill"></i></h2>
        
        <div className="row align-items-center p-3">
         
          {/* <!-- Image or illustration (optional) --> */}
          <div className="col-md-3 text-center justify-center">
            <img
              src={profileImage}
              className="img-fluid shadow position-relative w-75 border rounded-circle"
              alt="ParasDhadhal's Photo"
            />
          </div>

          {/* <!-- Text content --> */}
          <div className="col-md-9 p-3 text-center justify-center h-100">

            <h1 className="text-white text-start mt-5 fw-bold">Hi, I'm <span className="text-decoration-underline text-primary">Paras Dhadhal</span></h1>
            <p className="text-white p-5 text-start">
              I'm a passionate and motivated web developer looking for exciting
              opportunities to kickstart my career. I have hands-on experience
              with modern technologies like <strong className="text-primary">React</strong>,{" "}
              <strong className="text-primary">JavaScript</strong>, <strong className="text-primary">HTML/CSS</strong>, and{" "}
              <strong className="text-primary">Python/Django</strong>.
              <br />
              <br />I enjoy building responsive, user-friendly interfaces and
              continuously learning new skills to improve my craft. I'm open to
              internships, entry-level roles, and collaborative projects.
            </p>

            <a
              href="/contact"
              // to="/contact/"
              className="btn btn-outline-primary m-3 fw-bold fs-5 p-3 rounded-3 col-5"
            >
              Get in Touch &nbsp;<i class="bi bi-telephone-fill"></i>
            </a>
            <a
              className="btn btn-outline-primary m-3 fw-bold fs-5 p-3 rounded-3 col-5"
              href="/Django_Fresher_Resume.pdf"
              download="Django_Fresher_Resume.pdf"
            >
              Get My Resume &nbsp;<i class="bi bi-file-earmark-post-fill"></i>
              {/* <i class="bi bi-file-code"></i> */}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
