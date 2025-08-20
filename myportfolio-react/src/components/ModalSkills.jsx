import { useEffect, useState } from "react";
import '../assets/css/base.css';
import '../assets/css/modal-skills.css';

export default function ModalSkills({ isOpen, onClose, data }) {
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
      className={`modal-skills ${isOpen ? "modal-skills--show" : "modal-skills--hide"}`}
      onClick={onClose}
      id="modal-skills"
    >
      <div className="modal-skills__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-skills__header">
          <h2>{data.company}</h2>
          <span className="modal-skills__close-btn" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-skills__body">
          <p>
            <strong>Position:</strong> {data.position}
          </p>
          <p>
            <strong>Dates:</strong> {data.dates}
          </p>
          <div
            className="modal-skills__description"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <div className="modal-skills__tools">
            <strong>Skills:</strong> {data.tools && data.tools.map((tool, idx) => <span key={idx}>{tool}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
