import './custom.scss';


import Manu from "./components/Manu";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate"
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer"
// import Education from './components/Education';

export default function App() {
  return (
    <>
      <div className="container-fluid bg-dark text-light">
        <Manu /> {/*This is Header*/}
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificate />
        <Contact />
        <Footer /> {/* This is Header */}
      </div>
    </>
  );
}
