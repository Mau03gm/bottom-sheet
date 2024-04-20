import React, { useState } from 'react';
import './BottomSheet.css'; // Asegúrate de tener tus estilos CSS

const BottomSheet = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <div className={`bottom-sheet ${isOpen ? 'open' : ''}`}>
      <div className="bottom-sheet-content">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
