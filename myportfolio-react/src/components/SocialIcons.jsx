import '../assets/css/base.css';
import '../assets/css/socials.css';

import { useContext, useState } from 'react';
import { SkinContext } from '../context/SkinContext';
import { useAuth } from '../context/AuthContext';
import ConfirmModal from './ModalLogout';

import logoutIcon from '../assets/ico/orca2.svg';
import skinIcon from '../assets/ico/skinIcon.svg';
import linkedinIcon from '../assets/ico/linkedin.svg';
import githubIcon from '../assets/ico/githubIcon.svg';
import upIcon from '../assets/ico/up.svg';

export default function SocialIcons() {
  const { darkMode, setDarkMode } = useContext(SkinContext);
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const { logout, isAuthenticated } = useAuth();

  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setModalOpen(true);
  };

  const confirmLogout = () => {
    logout();
    setModalOpen(false);
  };

  return (
    <>
    <section className="social-icons" id="social-icons">
      {isAuthenticated && (
          <a onClick={handleLogoutClick} className="social-icon-btn" title="Cerrar sesión">
            <img src={logoutIcon} alt="Cerrar sesión" className="social-icon" />
          </a>
        )}
  <a 
    onClick={toggleDarkMode} 
    className="social-icon-btn" 
    id="dark-mode-toggle" 
    title="change-it"
  >
    <img
      src={skinIcon}
      alt="toggle-me"
      loading="lazy"
      className="social-icon"
    />
    {darkMode ? "" : ""}
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
<ConfirmModal
        isOpen={isModalOpen}
        onConfirm={confirmLogout}
        onCancel={() => setModalOpen(false)}
      />
    </>
);
}