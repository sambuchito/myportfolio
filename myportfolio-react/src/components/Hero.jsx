import '../assets/css/base.css';
import "../assets/css/hero.css";
import heroImage from '../assets/img/cara-mia-new.webp';


export default function Hero() {
  return (
<section className="hero" id="about">
      <img src={heroImage} alt="lu-by-tity" loading="lazy" className="hero-img" />

      <div className="bio">
        <h2 className="bio-title" id="bio-title">Hello</h2>
        <p className="bio-text">
          Is it me you looking for?
        </p>
        <p className="bio-text">
          I hope you do. And if you don't, then stay and look around. Feedback is always welcome.
        </p>
        <p className="bio-text">
          This page is a work in progress in case you haven't noticed. This portfolio is part CV, part playground. So feel free to explore.
          I'm Lu btw. QA tester and web developer-in-progress based in Montevideo, for now.
        </p>
        <p className="bio-text">
          I started this site as a way to bring my ideas, projects, and odd skills together in one place.
        </p>
        <p className="bio-text">
          I hope you enjoy your stay and everything works as planned, and if not, please report!
        </p>
      </div>
    </section>

    );
}