import '../assets/css/base.css';
import '../assets/css/modal-skills.css';

export default function ModalSkills({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  return (
    <section className="modal-skills" id="modal-skills">
      <div className="modal-skills__content">
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
            {data.tools && data.tools.map((tool, idx) => <span key={idx}>{tool}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
