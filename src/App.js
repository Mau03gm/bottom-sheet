import BottomSheet from './BottomSheetScratch/bottomsheetScratch';
import BottomSheet1 from './bottomsheet1';
import { useState } from 'react';

function App() {

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenBottomSheet}>Abrir Hoja Inferior</button>
      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet}>
        {/* Contenido de la hoja inferior */}
        <h2>Contenido de la Hoja Inferior</h2>
        <p>Aquí puedes poner cualquier cosa que quieras mostrar en la hoja inferior.</p>
      </BottomSheet>
    </div>
  );
}

export default App;
