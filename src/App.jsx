import React, { useState } from 'react';
import OfertaAcademica from './pages/OfertaAcademica';
import PortalAdmisiones from './pages/PortalAdmisiones';

export default function App() {
  const [pantallaActual, setPantallaActual] = useState('oferta');

  return (
    <div>
      {pantallaActual === 'oferta' ? (
        <OfertaAcademica onIrAlPortal={() => setPantallaActual('portal')} />
      ) : (
        <PortalAdmisiones onVolver={() => setPantallaActual('oferta')} />
      )}
    </div>
  );
}