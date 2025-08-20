import { useEffect, useState } from "react";
import '../assets/css/base.css';
import "../assets/css/modal-project.css";

export default function ModalProjects({ isOpen, onClose, data }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <section
      className={`modal-projects ${isOpen ? "modal-projects--show" : "modal-projects--hide"}`}
      onClick={onClose}
      id="modal-projects"
    >
      <div className="modal-projects__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-projects__header">
          <h2>{data.company}</h2>
          <span
            className="modal-projects__close-btn"
            onClick={onClose}
            role="button"
            aria-label="Close"
          >
            &times;
          </span>
        </div>

        <div className="modal-projects__body">
          <p>
            <strong>Position:</strong> <span>{data.position}</span>
          </p>
          <p>
            <strong>Dates:</strong> <span>{data.dates}</span>
          </p>
          <div className="modal-projects__description">
            {data.description}
          </div>
          <div className="modal-projects__tools">
            <strong>Skills:</strong> {data.tools &&
              data.tools.map((tool, index) => (
                <span key={index} className="tool-item">
                  {tool}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
