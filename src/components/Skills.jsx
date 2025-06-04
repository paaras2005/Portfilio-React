//src/components/skill.js
// import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaPython} from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#e34c26' },    // HTML icon with color
  { name: 'CSS', icon: <FaCss3Alt />, color: '#264de4' }, // CSS icon with color
  { name: 'JavaScript', icon: <FaJs />, color: '#f0db4f' }, // JavaScript icon with color
  { name: 'React', icon: <FaReact />, color: '#61dafb' }, // React icon with color
  { name: 'Bootstrap', icon: <FaBootstrap />, color: '#563d7c' }, // Bootstrap icon with color
  { name: 'Python', icon: <FaPython />, color: '#3776ab' },  // Python icon with color
  { name: 'GitHub', icon: <FaGithub />, color: '#181717' }, // GitHub icon with color 
];

function Skills() {
  return (
    <section className="py-5 text-center bg-light" style={{ color: '#4c0bce', background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)' }}>
      <div className="container">
        <h2 className="mb-4 text-primary fw-bold">My Skills <i className="bi bi-tools"></i></h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card p-4 shadow-sm border-0" style={{ fontSize: '4rem', color: skill.color, textAlign: 'center' , backgroundColor: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)'}}>
                <div style={{ fontSize: '4rem', color: skill.color }}>{skill.icon}</div>
                <h5 className="mt-3">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;