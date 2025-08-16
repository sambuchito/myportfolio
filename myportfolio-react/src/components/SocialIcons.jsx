import '../assets/css/base.css';
import '../assets/css/socials.css';

import skinIcon from '../assets/ico/costado-red-1443-svgrepo-com.svg';
import linkedinIcon from '../assets/ico/linkedin.svg';
import githubIcon from '../assets/ico/costado-github-142-svgrepo-com.svg';
import upIcon from '../assets/ico/up.svg';

export default function SocialIcons() {

  return (
  <section className="social-icons" id="social-icons">
  <a href="javascript:void(0);" id="dark-mode-toggle" title="change-it">
    <img
      src={skinIcon}
      alt="Toggle Dark Mode"
      loading="lazy"
      className="social-icon"
      onclick="initDarkMode()"
    />
  </a>
  <a href="https://www.linkedin.com/in/luciana-rossi-figueroa/" title="get-in" target="_blank">
    <img
      src={linkedinIcon}
      alt="LinkedIn"
      loading="lazy"
      className="social-icon"
    />
  </a>
  <a href="https://github.com/sambuchito" title="git-in" target="_blank">
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