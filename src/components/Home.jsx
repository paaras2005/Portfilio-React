import React from "react";
import "../App.css"



function Home() {
  return (
    <div className="welcome-landing d-flex justify-content-center align-items-center vh-100 text-center text-white bg-dark">
      <div>
        <h1 className="animate-fade-in display-3 mb-3 fw-bold">
        👨‍💻 Welcome To My Profile
        </h1>
        <p className="animate-slide-up lead mb-4">
        I'm a passionate developer who loves to build powerful apps with React, Bootstrap, Django, and more.
        </p>
        <a href="/about" className="btn btn-primary btn-lg animate-bounce">
        🚀 About Me
        </a>
      </div>
    </div>
  );
}

export default Home;
