import MKBU from "../assets/MKBU_Logo.jpg"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../App.css'


const educationData = [
  {
    institution: "Maharaja Krishnakumarsinhji Bhavnagar University (MKBU)",
    degree: "Bachelor's Degree in Computer Applications (BCA)",
    period: "2022 - 2025",
    description: "Pursuing a Bachelor's degree in Computer Applications with a focus on software development and programming languages.",
  },
  {
    institution: "Shree Swaminarayan Gurukul, Lathidad",
    degree: "Higher Secondary Certificate (HSC) in Arts",
    period: "2021 - 2022",
    description: "Completed Higher Secondary education with a focus on Arts, developing a strong foundation in critical thinking and communication skills.",
  },
   {
    institution: "Shree Swaminarayan Gurukul, Lathidad",
    degree: "Secondary School Certificate (SSC)",
    period: "2020 - 2021",
    description: "Completed Higher Secondary education with a focus on Arts, developing a strong foundation in critical thinking and communication skills.",
  },
];

export default function Education() {
  return (
     <section className="py-5 bg-white text-center" style={{ color: '#4c0bce', background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)' }} id="Education">
      <div className="container">
        <h2 className="mb-5 text-primary">Education <i className="bi bi-mortarboard-fill"></i></h2>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <ul className="timeline">
              {educationData.map((edu, index) => (
                <li
                  key={index}
                  className="timeline-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="timeline-content p-4 shadow rounded-2 m-1 bg-secondary text-white">
                    <h4 className="text-light">{edu.degree}</h4>
                    <h5 className="text-muted">{edu.institution}</h5>
                    <span className="text-dark">{edu.period}</span>
                    <p className="mt-2">{edu.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>







    // <section className="text-center border rounded-end-5 m-3  bg-dark text-white p-3" id="Education">
    //     <h2 className="m-3s text-center text-primary">Education <i className="bi bi-mortarboard-fill"></i></h2>
    //     <div className="row d-flex flex-column align-items-center w-100">
    //       <div className="col-md-4 mb-4 w-75 p-0">
    //         <div className="card h-100 shadow-lg bg-dark text-white m-3">
    //           <div className="card-body d-flex justify-content-center align-items-center m-3 p-3">
    //             <img src={MKBU} alt="MKBU_Logo" className="img-thumbnail float-start p-1 m-0 rounded-circle border border-3 border-primary "/>
    //             <h5 className="card-title d-flex text-center justify-content-center p-4">Bachelor's Degree in Computer Applications (BCA)</h5>
    //             <p className="card-text">MKBU University, 2022 - 2025</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    // </section>
  );
}