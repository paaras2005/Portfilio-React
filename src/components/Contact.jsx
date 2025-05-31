export default function Contact() {
  return (
    <section
      className="text-center border rounded-end-5 m-3 p-4 bg-dark text-white"
      id="projects"
    >
      <div className="container py-5 align-items-center text-center">
        <h1 className="text-primary fw-bold capitalize mb-4">
          Contact Me <i className="bi bi-telephone-fill"></i>
        </h1>
        <div className="row col-12 justify-content-center m-3 p-3 text-start">
          {/* Left Side - Contact Details */}
          <div className="col-md-6 mb-4 mb-md-0 text-wrap">
            <h2 className="capitalize fw-bold">My Contact Details</h2>
            <p className="m-3 fs-4 mt-5">
              <i className="bi bi-person text-primary"></i> Paras Dhadhal
            </p>
            <p className="m-3 fs-4">
              <i className="bi bi-envelope text-primary"></i> paarasdhadhal@gmail.com
            </p>
            <p className="m-3 fs-4">
              <i className="bi bi-telephone text-primary"></i> +91 1234567890
            </p>
            <p className="m-3 fs-4">
              <i className="bi bi-geo-alt text-primary"></i> Dhinkwali, Botad, India, 364710
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-md-6">
            <h2 className="capitalize fw-bold">Send Your Message</h2>
            <form className="m-3 p-3 text-center">
              <div>
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control text-center"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control text-center"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control text-center"
                  id="message"
                  rows="4"
                  placeholder="Type your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-outline-primary col-12 justify-content-center align-items-center m-3 p-2 text-center"
              >
                Send Message <i className="bi bi-send"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
