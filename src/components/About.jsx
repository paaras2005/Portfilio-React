import profileImage from '../assets/myimage.jpg';

export default function Footer() {
  return (
    <>
      <section className="text-center border rounded-start-5 m-3">
        <div className="row align-items-center p-3">
          {/* <!-- Image or illustration (optional) --> */}
          <div className="col-md-3 text-center justify-cente">
            <img
              src= {profileImage}
              className="img-fluid shadow position-relative w-75 border rounded-circle"
              alt="ParasDhadhal's Photo"
            />
          </div>

          {/* <!-- Text content --> */}
          <div className="col-md-9 text-white p-3 text-center justify-center">
            <h2 className="fw-bolder text-center text-primary">About Me <i className="bi bi-person-fill"></i></h2>

            <p className="text-white p-5 text-start">
                 I'm a passionate and motivated web developer looking for
              exciting opportunities to kickstart my career. I have hands-on
              experience with modern technologies like <strong>React</strong>,{" "}
              <strong>JavaScript</strong>, <strong>HTML/CSS</strong>, and{" "}
              <strong>Node.js</strong>.
           <br />
           <br />
              I enjoy building responsive, user-friendly interfaces and
              continuously learning new skills to improve my craft. I'm open to
              internships, entry-level roles, and collaborative projects.
            </p>


            <a href="#contact" className="btn btn-outline-primary m-3 fw-bold fs-5 p-3 rounded-3 col-5">
              Get in Touch &nbsp;<i class="bi bi-telephone"></i>
            </a>
            <a href="#contact" className="btn btn-outline-primary m-3 fw-bold fs-5 p-3 rounded-3 col-5">
              Get My Resume &nbsp;<i class="bi bi-file-earmark-post-fill"></i>
              {/* <i class="bi bi-file-code"></i> */}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
