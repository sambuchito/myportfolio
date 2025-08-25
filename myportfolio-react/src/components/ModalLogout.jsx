import '../assets/css/base.css'
import '../assets/css/modal-logout.css';

export default function ConfirmModal({ isOpen, message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>¿Cerrar sesión?</h2>
        <p>{message}</p>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onCancel}>Cancelar</button>
          <button className="btn-confirm" onClick={onConfirm}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
}
