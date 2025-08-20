import './assets/css/base.css';
import './assets/css/about.css';
import './assets/css/navigation.css';
import './assets/css/hero.css';
import './assets/css/skills.css';
import './assets/css/contact.css';
import './assets/css/socials.css';
import './assets/css/modal-project.css';
import './assets/css/modal-skills.css';
import './assets/css/project.css';
import './assets/css/login.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import FunFacts from "./pages/FunFacts"; 
import PrivateRoute from "./components/PrivateRoute";

import useModal from "./hooks/useModal";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ModalProjects from './components/ModalProject';
import ModalSkills from './components/ModalSkills';
import SocialIcons from './components/SocialIcons';

function App() {
  const { isOpen, modalData, modalType, openModal, closeModal } = useModal();


  return (
    
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects onOpenModal={(data) => openModal('projects', data)} />
                <Skills onOpenModal={(data) => openModal('skills', data)} />
                <ContactForm />
                <Footer />
                {modalType === 'projects' && (
                  <ModalProjects isOpen={isOpen} onClose={closeModal} data={modalData} />
                )}
                {modalType === 'skills' && (
                  <ModalSkills isOpen={isOpen} onClose={closeModal} data={modalData} />
                )}
                <SocialIcons />
              </>
            }
          />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* FunFacts protegido */}
          <Route
            path="/FunFacts"
            element={
              <PrivateRoute>
                <FunFacts />
              </PrivateRoute>
            }
          />
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    
  );
}

export default App;
