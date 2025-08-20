import '../assets/css/base.css';
import '../assets/css/socials.css';

import useDarkMode from '../hooks/useDarkMode';

import skinIcon from '../assets/ico/skinIcon.svg';
import linkedinIcon from '../assets/ico/linkedin.svg';
import githubIcon from '../assets/ico/githubIcon.svg';
import upIcon from '../assets/ico/up.svg';

export default function SocialIcons() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
  <section className="social-icons" id="social-icons">
  <a 
  onClick={toggleDarkMode} 
  className="social-icon-btn" 
  id="dark-mode-toggle" 
  title="change-it"
  >
    <img
      src={skinIcon}
      alt="Toggle Dark Mode"
      loading="lazy"
      className="social-icon"
    />
    {isDark ? "" : ""}
  </a>
  <a href="https://www.linkedin.com/in/luciana-rossi-figueroa/" 
  title="get-in" 
  target="_blank"
  rel="noreferrer"
  >
    <img
      src={linkedinIcon}
      alt="LinkedIn"
      loading="lazy"
      className="social-icon"
    />
  </a>
  <a href="https://github.com/sambuchito" 
  title="git-in" 
  target="_blank"
  rel="noreferrer"
  >
    <img
      src={githubIcon}
      alt="Github"
      className="social-icon"
    />
  </a>
  <a href="#top" title="up" className="scroll-top">
    <img
      src={upIcon}
      alt="go-up"
      loading="lazy"
      className="social-icon"
    />
  </a>
</section>
);
}