import React, { useState } from 'react';
import BottomSheet from 'react-bottom-sheet';


const BottomSheet1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Abrir Hoja Inferior</button>
      <BottomSheet
        open={isOpen}
        onClose={handleClose}
        title="Título de la Hoja Inferior"
        backdrop={true}
      >
        {/* Contenido de la hoja inferior */}
        <div>
          <h2>Contenido de la Hoja Inferior</h2>
          <p>Aquí puedes poner cualquier cosa que quieras mostrar en la hoja inferior.</p>
        </div>
      </BottomSheet>
    </div>
  );
};

export default BottomSheet1;
