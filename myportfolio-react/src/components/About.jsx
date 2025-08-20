import '../assets/css/base.css';
import "../assets/css/about.css";
import useDarkMode from "../hooks/useDarkMode";

export default function About() {
  useDarkMode();
  
  return (
  <section className="more-about-section" id="more-about">
      <div className="more-about-content">
        <h2 className="more-about-title" id="more-about-title">About Me</h2>
        <p className="more-about-text">
          QA Tester & Web Developer with experience in both manual testing and web development. Passionate about building clean, functional user experiences and ensuring software quality through detailed testing and documentation.
        </p>
        <p className="more-about-text">
          I’m currently transitioning into tech after years of working in fast-paced, people-focused roles.  
          What started with curiosity about software testing turned into a growing interest in how things are built — and how to break them (on purpose).
        </p>
        <p className="more-about-text">
          I’m a hands-on learner. I like tinkering, googling things at 2 a.m., and making messy code a little cleaner each time.  
          I’m especially drawn to projects that mix logic with creativity — whether it’s coding, designing, or editing.
        </p>
        <p className="more-about-text">
          I’m now studying FullStack development at BIOS and completing a mid-term project for the Certified Tech Developer program at Digital House,  
          where I get to combine my testing background with front-end and back-end experience.
        </p>
      </div>
    </section>
        );
}