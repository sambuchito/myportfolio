import { Link } from "react-router-dom";
import "../assets/css/base.css";
import "../assets/css/navigation.css";

export default function Navbar() {
  return (
    <nav className="nav" id="nav">
      <div className="nav-title-group">
        <Link to="/" className="header-title">Lu Rossi</Link>
        <span className="tagline">QA Tester - Web Dev Learner - Orca Lover</span>
      </div>
      <button className="hamburger" id="hamburger-menu" aria-label="Toggle Menu">
        ☰
      </button>
      <ul className="navigation">
        <li><a href="#more-about" className="nav-link">About Me</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#skills" className="nav-link">Skills</a></li>
        <li><a href="#contact-me" className="nav-link">Contact</a></li>
        <li><Link to="/FunFacts" className="nav-link">Fun Facts</Link></li>
      </ul>
    </nav>
  );
}
