import React, { useState } from 'react';
import OfertaAcademica from './pages/OfertaAcademica';
import PortalAdmisiones from './pages/PortalAdmisiones';
import SeleccionPrograma from './pages/SeleccionPrograma';
import MisDatos from './pages/MisDatos';
import Documentos from './pages/Documentos';

export default function App() {
  const [pantallaActual, setPantallaActual] = useState('oferta');
  const [programaElegido, setProgramaElegido] = useState(null);
  const [datosGuardados, setDatosGuardados] = useState(null);

  const listaProgramas = [
    { id: 1, nombre: 'Administración de Empresas', facultad: 'Ciencias Administrativas y Contables' },
    { id: 2, nombre: 'Contaduría Pública', facultad: 'Ciencias Administrativas y Contables' },
    { id: 3, nombre: 'Marketing y Comunicación Digital', facultad: 'Ciencias Administrativas y Contables' },
    { id: 4, nombre: 'Actividad Física y Deporte', facultad: 'Ciencias Humanas y de la Educación' },
    { id: 5, nombre: 'Licenciatura en Español e Inglés', facultad: 'Ciencias Humanas y de la Educación' },
    { id: 6, nombre: 'Licenciatura en Educación Infantil', facultad: 'Ciencias Humanas y de la Educación' },
    { id: 7, nombre: 'Licenciatura en Música', facultad: 'Ciencias Humanas y de la Educación' },
    { id: 8, nombre: 'Enfermería', facultad: 'Ciencias de la Salud' },
    { id: 9, nombre: 'Tecnología en Atención Prehospitalaria (Medellín)', facultad: 'Ciencias de la Salud' },
    { id: 10, nombre: 'Tecnología en Atención Prehospitalaria (Bucaramanga)', facultad: 'Ciencias de la Salud' },
    { id: 11, nombre: 'Ingeniería Industrial', facultad: 'Ingeniería' },
    { id: 12, nombre: 'Ingeniería de Sistemas', facultad: 'Ingeniería' },
    { id: 13, nombre: 'Licenciatura en Educación Religiosa', facultad: 'Facultad de Teología y Religión' },
    { id: 14, nombre: 'Teología', facultad: 'Facultad de Teología y Religión' }
  ];

  return (
    <div>
      {pantallaActual === 'oferta' && (
        <OfertaAcademica onIrAlPortal={() => setPantallaActual('portal')} />
      )}
      
      {pantallaActual === 'portal' && (
        <PortalAdmisiones 
          onVolver={() => setPantallaActual('oferta')} 
          onIrASeleccionPrograma={() => setPantallaActual('seleccion-programa')} 
        />
      )}

      {pantallaActual === 'seleccion-programa' && (
        <SeleccionPrograma 
          onVolver={() => setPantallaActual('portal')}
          onContinuar={(programaId) => {
            const progEncontrado = listaProgramas.find(p => p.id === programaId);
            setProgramaElegido(progEncontrado);
            setPantallaActual('mis-datos');
          }} 
        />
      )}

      {pantallaActual === 'mis-datos' && (
        <MisDatos 
          programaSeleccionado={programaElegido}
          onVolver={() => setPantallaActual('seleccion-programa')}
          onContinuar={(datosPersonales) => {
            setDatosGuardados(datosPersonales);
            setPantallaActual('documentos');
          }}
        />
      )}

      {pantallaActual === 'documentos' && (
        <Documentos 
          programaSeleccionado={programaElegido}
          datosPersonales={datosGuardados}
          onVolver={() => setPantallaActual('mis-datos')}
          onFinalizar={(archivos) => {
            console.log("Inscripción completa con archivos:", archivos);
          }}
        />
      )}
    </div>
  );
}