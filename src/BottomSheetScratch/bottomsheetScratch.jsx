import React, { useState, useRef } from 'react';
import './BottomSheet.css'; // Asegúrate de tener tus estilos CSS

const BottomSheet = ({ isOpen, onClose, children }) => {
  const [startY, setStartY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const bottomSheetRef = useRef(null);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
    setDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;

    const deltaY = e.touches[0].clientY - startY;
    bottomSheetRef.current.style.transform = `translateY(${deltaY}px)`;
  };

  const handleTouchEnd = () => {
    if (!dragging) return;

    const deltaY = bottomSheetRef.current.getBoundingClientRect().top;
    if (deltaY > 100) {
      onClose && onClose();
    }
    
    setDragging(false);
    bottomSheetRef.current.style.transform = '';
  };

  return (
    <div
      className={`bottom-sheet ${isOpen ? 'open' : ''}`}
      ref={bottomSheetRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="bottom-sheet-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
