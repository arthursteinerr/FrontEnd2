// Modal.js
import React from "react";
import "./Modal.css";

function Modal({ onClose, children }) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
