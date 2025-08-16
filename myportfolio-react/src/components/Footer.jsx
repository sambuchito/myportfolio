import '../assets/css/base.css';
import '../assets/css/socials.css';
import horseIcon1 from '../assets/ico/horse-svgrepo-com.svg';
import horseIcon2 from '../assets/ico/horse-face-svgrepo-com.svg';
import horseIcon3 from '../assets/ico/horse-svgrepo-com-2.svg';

export default function Footer() {
    
    return (
    <section className="footer-icons" id="footer-icons">
    <footer className="page-footer">
      <p>Bye</p>      
        <div className="footer-icons-container">
          <div className="first-set-footer-icons">
            <a href="indexPost.html" target="_blank">
              <img
                src={horseIcon1}
                alt="hey"
                title="hey"
                loading="lazy"
                className="footer-icon"
              />
            </a>
            <a href="indexPost.html" target="_blank">
              <img
                src={horseIcon2}
                alt="guey"
                title="guey"
                loading="lazy"
                className="footer-icon"
              />
            </a>
            <a href="indexPost.html" target="_blank">
              <img
                src={horseIcon3}
                alt="neigh"
                title="bai"
                loading="lazy"
                className="footer-icon"
              />
            </a>
          </div>
        </div>
      
    </footer>
    </section>
    );
}