import React, { useState } from 'react';
import OfertaAcademica from './pages/OfertaAcademica';
import PortalAdmisiones from './pages/PortalAdmisiones';
import SeleccionPrograma from './pages/SeleccionPrograma';
import MisDatos from './pages/MisDatos';
import Documentos from './pages/Documentos';
import PanelAdministrador from './pages/PanelAdministrador';

export default function App() {
  const [pantallaActual, setPantallaActual] = useState('oferta');
  const [programaElegido, setProgramaElegido] = useState(null);
  const [datosGuardados, setDatosGuardados] = useState(null);
  
  const [inscritos, setInscritos] = useState([
    // --- Ingeniería de Sistemas (25 inscritos = 100% - CUPOS LLENOS) ---
    { tipoDocumento: 'CC', numeroDocumento: '20212019290', nombres: 'Esteban', apellidos: 'Giraldo Vásquez', celular: '300 987 6543', programa: 'Ingeniería de Sistemas', fechaInscripcion: '25/09/2026, 08:00 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1023456789', nombres: 'Juan David', apellidos: 'Pérez Gómez', celular: '300 123 4567', programa: 'Ingeniería de Sistemas', fechaInscripcion: '25/09/2026, 09:15 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1034567891', nombres: 'Mateo', apellidos: 'Uribe Echeverri', celular: '301 321 6549', programa: 'Ingeniería de Sistemas', fechaInscripcion: '25/09/2026, 10:30 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1045678912', nombres: 'Valentina', apellidos: 'Ochoa Ruiz', celular: '302 456 7891', programa: 'Ingeniería de Sistemas', fechaInscripcion: '25/09/2026, 11:45 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1056789123', nombres: 'Andrés Felipe', apellidos: 'Giraldo Cano', celular: '303 567 8912', programa: 'Ingeniería de Sistemas', fechaInscripcion: '26/09/2026, 08:20 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1067891234', nombres: 'Daniela', apellidos: 'Restrepo Mesa', celular: '304 678 9123', programa: 'Ingeniería de Sistemas', fechaInscripcion: '26/09/2026, 09:10 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1078912345', nombres: 'Esteban', apellidos: 'Jaramillo Villa', celular: '305 789 1234', programa: 'Ingeniería de Sistemas', fechaInscripcion: '26/09/2026, 11:00 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1089123456', nombres: 'Manuela', apellidos: 'Correa Marín', celular: '306 891 2345', programa: 'Ingeniería de Sistemas', fechaInscripcion: '26/09/2026, 02:15 p. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1090234567', nombres: 'Tomás', apellidos: 'Mejía Zapata', celular: '307 901 2346', programa: 'Ingeniería de Sistemas', fechaInscripcion: '26/09/2026, 03:40 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1001345678', nombres: 'Isabel', apellidos: 'Lopera Osorio', celular: '308 012 3457', programa: 'Ingeniería de Sistemas', fechaInscripcion: '27/09/2026, 08:05 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1012456789', nombres: 'Samuel', apellidos: 'Betancur', celular: '309 123 4568', programa: 'Ingeniería de Sistemas', fechaInscripcion: '27/09/2026, 09:00 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1023567890', nombres: 'Sofia', apellidos: 'Henao', celular: '310 234 5679', programa: 'Ingeniería de Sistemas', fechaInscripcion: '27/09/2026, 10:11 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1034678901', nombres: 'Lucas', apellidos: 'Cardona', celular: '311 345 6780', programa: 'Ingeniería de Sistemas', fechaInscripcion: '27/09/2026, 11:22 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1045789012', nombres: 'Camila', apellidos: 'Gómez', celular: '312 456 7891', programa: 'Ingeniería de Sistemas', fechaInscripcion: '27/09/2026, 01:33 p. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1056890123', nombres: 'Jerónimo', apellidos: 'Ríos', celular: '313 567 8902', programa: 'Ingeniería de Sistemas', fechaInscripcion: '27/09/2026, 02:44 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1067901234', nombres: 'Valeria', apellidos: 'Muñoz', celular: '314 678 9013', programa: 'Ingeniería de Sistemas', fechaInscripcion: '28/09/2026, 08:15 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1078012345', nombres: 'Emiliano', apellidos: 'Suárez', celular: '315 789 0124', programa: 'Ingeniería de Sistemas', fechaInscripcion: '28/09/2026, 09:25 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1089123457', nombres: 'Antonia', apellidos: 'Ospina', celular: '316 890 1235', programa: 'Ingeniería de Sistemas', fechaInscripcion: '28/09/2026, 10:35 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1090234568', nombres: 'Matías', apellidos: 'Gil', celular: '317 901 2346', programa: 'Ingeniería de Sistemas', fechaInscripcion: '28/09/2026, 11:45 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1001345679', nombres: 'Salomé', apellidos: 'Cano', celular: '318 012 3457', programa: 'Ingeniería de Sistemas', fechaInscripcion: '28/09/2026, 02:55 p. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1012456780', nombres: 'Simón', apellidos: 'Arias', celular: '319 123 4568', programa: 'Ingeniería de Sistemas', fechaInscripcion: '29/09/2026, 08:30 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1023567891', nombres: 'Luciana', apellidos: 'Piedrahíta', celular: '320 234 5679', programa: 'Ingeniería de Sistemas', fechaInscripcion: '29/09/2026, 09:40 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1034678902', nombres: 'Emmanuel', apellidos: 'Zapata', celular: '321 345 6780', programa: 'Ingeniería de Sistemas', fechaInscripcion: '29/09/2026, 10:50 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1045789013', nombres: 'Mariana', apellidos: 'Londoño', celular: '322 456 7891', programa: 'Ingeniería de Sistemas', fechaInscripcion: '29/09/2026, 11:00 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1056890124', nombres: 'Felipe', apellidos: 'Valencia', celular: '323 567 8902', programa: 'Ingeniería de Sistemas', fechaInscripcion: '29/09/2026, 12:00 p. m.' },

    // --- Licenciatura en Música (25 inscritos = 100% - CUPOS LLENOS) ---
    { tipoDocumento: 'CC', numeroDocumento: '1070001001', nombres: 'Melody', apellidos: 'Sarmiento', celular: '300 111 2233', programa: 'Licenciatura en Música', fechaInscripcion: '25/09/2026, 09:00 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1070001002', nombres: 'Aria', apellidos: 'Castillo', celular: '300 222 3344', programa: 'Licenciatura en Música', fechaInscripcion: '25/09/2026, 10:00 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001003', nombres: 'Bruno', apellidos: 'Duarte', celular: '300 333 4455', programa: 'Licenciatura en Música', fechaInscripcion: '25/09/2026, 11:00 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001004', nombres: 'Cecilia', apellidos: 'Benítez', celular: '300 444 5566', programa: 'Licenciatura en Música', fechaInscripcion: '26/09/2026, 08:30 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1070001005', nombres: 'Dante', apellidos: 'Alighieri', celular: '300 555 6677', programa: 'Licenciatura en Música', fechaInscripcion: '26/09/2026, 09:30 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001006', nombres: 'Elena', apellidos: 'Nogueira', celular: '300 666 7788', programa: 'Licenciatura en Música', fechaInscripcion: '26/09/2026, 10:30 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001007', nombres: 'Franco', apellidos: 'Escobar', celular: '300 777 8899', programa: 'Licenciatura en Música', fechaInscripcion: '26/09/2026, 11:30 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1070001008', nombres: 'Gina', apellidos: 'Morales', celular: '300 888 9900', programa: 'Licenciatura en Música', fechaInscripcion: '26/09/2026, 02:00 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001009', nombres: 'Héctor', apellidos: 'Lavoe', celular: '300 999 0011', programa: 'Licenciatura en Música', fechaInscripcion: '27/09/2026, 08:15 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001010', nombres: 'Iris', apellidos: 'Chacón', celular: '301 111 2233', programa: 'Licenciatura en Música', fechaInscripcion: '27/09/2026, 09:15 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1070001011', nombres: 'Joaquín', apellidos: 'Sabina', celular: '301 222 3344', programa: 'Licenciatura en Música', fechaInscripcion: '27/09/2026, 10:15 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001012', nombres: 'Karla', apellidos: 'Guerra', celular: '301 333 4455', programa: 'Licenciatura en Música', fechaInscripcion: '27/09/2026, 11:15 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001013', nombres: 'Lorenzo', apellidos: 'Medici', celular: '301 444 5566', programa: 'Licenciatura en Música', fechaInscripcion: '27/09/2026, 01:00 p. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1070001014', nombres: 'Mónica', apellidos: 'Naranjo', celular: '301 555 6677', programa: 'Licenciatura en Música', fechaInscripcion: '27/09/2026, 02:00 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001015', nombres: 'Néstor', apellidos: 'Kirchner', celular: '301 666 7788', programa: 'Licenciatura en Música', fechaInscripcion: '28/09/2026, 08:00 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001016', nombres: 'Ofelia', apellidos: 'Medina', celular: '301 777 8899', programa: 'Licenciatura en Música', fechaInscripcion: '28/09/2026, 09:00 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1070001017', nombres: 'Pablo', apellidos: 'Milanés', celular: '301 888 9900', programa: 'Licenciatura en Música', fechaInscripcion: '28/09/2026, 10:00 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001018', nombres: 'Quique', apellidos: 'Neira', celular: '301 999 0011', programa: 'Licenciatura en Música', fechaInscripcion: '28/09/2026, 11:00 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001019', nombres: 'Rosa', apellidos: 'Passos', celular: '302 111 2233', programa: 'Licenciatura en Música', fechaInscripcion: '28/09/2026, 02:30 p. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1070001020', nombres: 'Sergio', apellidos: 'Vargas', celular: '302 222 3344', programa: 'Licenciatura en Música', fechaInscripcion: '29/09/2026, 08:30 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001021', nombres: 'Tatiana', apellidos: 'Salazar', celular: '302 333 4455', programa: 'Licenciatura en Música', fechaInscripcion: '29/09/2026, 09:30 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001022', nombres: 'Ulises', apellidos: 'Fariña', celular: '302 444 5566', programa: 'Licenciatura en Música', fechaInscripcion: '29/09/2026, 10:30 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1070001023', nombres: 'Vanesa', apellidos: 'Martín', celular: '302 555 6677', programa: 'Licenciatura en Música', fechaInscripcion: '29/09/2026, 11:30 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001024', nombres: 'Walter', apellidos: 'Rasta', celular: '302 666 7788', programa: 'Licenciatura en Música', fechaInscripcion: '29/09/2026, 12:00 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1070001025', nombres: 'Yolanda', apellidos: 'Ray', celular: '302 777 8899', programa: 'Licenciatura en Música', fechaInscripcion: '29/09/2026, 01:00 p. m.' },

    // --- Enfermería (18 inscritos = 72%) ---
    { tipoDocumento: 'CC', numeroDocumento: '1098765432', nombres: 'Carlos Andrés', apellidos: 'Rodríguez Silva', celular: '320 456 7890', programa: 'Enfermería', fechaInscripcion: '28/09/2026, 08:20 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1041122334', nombres: 'Sara', apellidos: 'Jiménez Vargas', celular: '311 222 3344', programa: 'Enfermería', fechaInscripcion: '28/09/2026, 09:50 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1042233445', nombres: 'Samuel', apellidos: 'Díaz Restrepo', celular: '312 333 4455', programa: 'Enfermería', fechaInscripcion: '28/09/2026, 01:20 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1043344556', nombres: 'Mariana', apellidos: 'Piedrahíta Londoño', celular: '313 444 5566', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 09:10 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1044455667', nombres: 'Felipe', apellidos: 'Arango Tobón', celular: '314 555 6677', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 10:30 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1045566778', nombres: 'Juliana', apellidos: 'Rojas', celular: '315 666 7788', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 11:00 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1046677889', nombres: 'Esteban', apellidos: 'Morales', celular: '316 777 8899', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 11:30 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1047788990', nombres: 'Gabriela', apellidos: 'Castro', celular: '317 888 9900', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 12:15 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1048899001', nombres: 'Nicolás', apellidos: 'Herrera', celular: '318 999 0011', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 01:00 p. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1049900112', nombres: 'Camila', apellidos: 'Vargas', celular: '319 000 1122', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 01:45 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1050011223', nombres: 'Alejandro', apellidos: 'Pérez', celular: '320 111 2233', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 02:20 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1051122334', nombres: 'Daniela', apellidos: 'Sánchez', celular: '321 222 3344', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 03:00 p. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1052233445', nombres: 'Juan', apellidos: 'Ramírez', celular: '322 333 4455', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 03:30 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1053344556', nombres: 'Valentina', apellidos: 'Torres', celular: '323 444 5566', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 04:00 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1054455667', nombres: 'David', apellidos: 'Gómez', celular: '324 555 6677', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 04:30 p. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1055566778', nombres: 'Sara', apellidos: 'López', celular: '325 666 7788', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 05:00 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1056677889', nombres: 'Mateo', apellidos: 'Díaz', celular: '326 777 8899', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 05:15 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1057788990', nombres: 'Manuela', apellidos: 'Ríos', celular: '327 888 9900', programa: 'Enfermería', fechaInscripcion: '29/09/2026, 05:30 p. m.' },

    // --- Administración de Empresas (12 inscritos = 48%) ---
    { tipoDocumento: 'TI', numeroDocumento: '1056789123', nombres: 'Ana Sofía', apellidos: 'Londoño Mejia', celular: '315 789 1234', programa: 'Administración de Empresas', fechaInscripcion: '28/09/2026, 09:45 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1051112233', nombres: 'Julian', apellidos: 'Pérez Henao', celular: '316 111 2233', programa: 'Administración de Empresas', fechaInscripcion: '28/09/2026, 11:20 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1052223344', nombres: 'Natalia', apellidos: 'Cardona Gómez', celular: '317 222 3344', programa: 'Administración de Empresas', fechaInscripcion: '29/09/2026, 08:45 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1053334455', nombres: 'Carlos', apellidos: 'Restrepo', celular: '318 333 4455', programa: 'Administración de Empresas', fechaInscripcion: '29/09/2026, 09:15 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1054445566', nombres: 'Laura', apellidos: 'Jiménez', celular: '319 444 5566', programa: 'Administración de Empresas', fechaInscripcion: '29/09/2026, 10:00 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1055556677', nombres: 'Santiago', apellidos: 'Orozco', celular: '320 555 6677', programa: 'Administración de Empresas', fechaInscripcion: '29/09/2026, 10:45 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1056667788', nombres: 'Isabella', apellidos: 'Mejía', celular: '321 666 7788', programa: 'Administración de Empresas', fechaInscripcion: '29/09/2026, 11:15 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1057778899', nombres: 'Felipe', apellidos: 'Betancur', celular: '322 777 8899', programa: 'Administración de Empresas', fechaInscripcion: '29/09/2026, 11:45 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1058889900', nombres: 'Valeria', apellidos: 'Zapata', celular: '323 888 9900', programa: 'Administración de Empresas', fechaInscripcion: '29/09/2026, 12:30 p. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1059990011', nombres: 'Tomás', apellidos: 'Henao', celular: '324 999 0011', programa: 'Administración de Empresas', fechaInscripcion: '29/09/2026, 01:15 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1060001122', nombres: 'Mariana', apellidos: 'Ospina', celular: '325 000 1122', programa: 'Administración de Empresas', fechaInscripcion: '29/09/2026, 02:00 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1061112233', nombres: 'Daniel', apellidos: 'Giraldo', celular: '326 111 2233', programa: 'Administración de Empresas', fechaInscripcion: '29/09/2026, 02:45 p. m.' },

    // --- Contaduría Pública (8 inscritos = 32%) ---
    { tipoDocumento: 'TI', numeroDocumento: '1011122233', nombres: 'María Camila', apellidos: 'Torres Restrepo', celular: '310 987 6543', programa: 'Contaduría Pública', fechaInscripcion: '28/09/2026, 11:30 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1033344556', nombres: 'David', apellidos: 'Orozco Silva', celular: '318 444 5566', programa: 'Contaduría Pública', fechaInscripcion: '29/09/2026, 10:15 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1034455667', nombres: 'Paula', apellidos: 'Rojas', celular: '319 555 6677', programa: 'Contaduría Pública', fechaInscripcion: '29/09/2026, 11:00 a. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1035566778', nombres: 'Camilo', apellidos: 'Vásquez', celular: '320 666 7788', programa: 'Contaduría Pública', fechaInscripcion: '29/09/2026, 11:30 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1036677889', nombres: 'Sofia', apellidos: 'Morales', celular: '321 777 8899', programa: 'Contaduría Pública', fechaInscripcion: '29/09/2026, 12:10 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1037788990', nombres: 'Mateo', apellidos: 'Castillo', celular: '322 888 9900', programa: 'Contaduría Pública', fechaInscripcion: '29/09/2026, 01:00 p. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1038899001', nombres: 'Lucía', apellidos: 'Navarro', celular: '323 999 0011', programa: 'Contaduría Pública', fechaInscripcion: '29/09/2026, 01:45 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1039900112', nombres: 'Andrés', apellidos: 'Silva', celular: '324 000 1122', programa: 'Contaduría Pública', fechaInscripcion: '29/09/2026, 02:30 p. m.' },

    // --- Marketing y Comunicación Digital (6 inscritos = 24%) ---
    { tipoDocumento: 'CC', numeroDocumento: '1088776655', nombres: 'Valeria', apellidos: 'Ríos Castro', celular: '312 444 5566', programa: 'Marketing y Comunicación Digital', fechaInscripcion: '28/09/2026, 12:00 p. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1089988776', nombres: 'Cristian', apellidos: 'Vásquez Pérez', celular: '319 555 6677', programa: 'Marketing y Comunicación Digital', fechaInscripcion: '29/09/2026, 11:25 a. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1081122334', nombres: 'Manuela', apellidos: 'Gómez', celular: '320 666 7788', programa: 'Marketing y Comunicación Digital', fechaInscripcion: '29/09/2026, 12:15 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1082233445', nombres: 'Esteban', apellidos: 'Londoño', celular: '321 777 8899', programa: 'Marketing y Comunicación Digital', fechaInscripcion: '29/09/2026, 01:00 p. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1083344556', nombres: 'Camila', apellidos: 'Restrepo', celular: '322 888 9900', programa: 'Marketing y Comunicación Digital', fechaInscripcion: '29/09/2026, 01:50 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1084455667', nombres: 'Julian', apellidos: 'Piedrahíta', celular: '323 999 0011', programa: 'Marketing y Comunicación Digital', fechaInscripcion: '29/09/2026, 02:40 p. m.' },

    // --- Teología (4 inscritos = 16%) ---
    { tipoDocumento: 'CC', numeroDocumento: '1055443322', nombres: 'Alejandro', apellidos: 'Valencia Castrillón', celular: '316 555 7788', programa: 'Teología', fechaInscripcion: '29/09/2026, 03:40 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1056655443', nombres: 'Samuel', apellidos: 'Medina', celular: '317 666 8899', programa: 'Teología', fechaInscripcion: '29/09/2026, 04:00 p. m.' },
    { tipoDocumento: 'TI', numeroDocumento: '1057766554', nombres: 'Daniela', apellidos: 'Quintero', celular: '318 777 9900', programa: 'Teología', fechaInscripcion: '29/09/2026, 04:30 p. m.' },
    { tipoDocumento: 'CC', numeroDocumento: '1058877665', nombres: 'Mateo', apellidos: 'Betancur', celular: '319 888 0011', programa: 'Teología', fechaInscripcion: '29/09/2026, 05:00 p. m.' }
  ]);
  
  const LIMITE_POR_CARRERA = 25;

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

  // Función para eliminar un inscrito desde el panel de administrador
  const handleEliminarInscrito = (numeroDocumento) => {
    const nuevosInscritos = inscritos.filter(est => est.numeroDocumento !== numeroDocumento);
    setInscritos(nuevosInscritos);
  };

  return (
    <div className="animate-fadeIn">
      {pantallaActual === 'oferta' && (
        <OfertaAcademica 
          onIrAlPortal={() => setPantallaActual('portal')} 
          onVerAdmin={() => setPantallaActual('panel-admin')}
        />
      )}
      
      {pantallaActual === 'portal' && (
        <PortalAdmisiones 
          inscritos={inscritos}
          onVolver={() => setPantallaActual('oferta')} 
          onIrASeleccionPrograma={() => {
            setPantallaActual('seleccion-programa');
          }} 
          onVerificarAdmin={(codigo) => {
            if (codigo === 'ADMIN2026') {
              setPantallaActual('panel-admin');
              return true;
            }
            return false;
          }}
        />
      )}

      {pantallaActual === 'seleccion-programa' && (
        <SeleccionPrograma 
          onVolver={() => setPantallaActual('portal')}
          onContinuar={(programaId) => {
            const progEncontrado = listaProgramas.find(p => p.id === programaId);
            
            const inscritosEnCarrera = inscritos.filter(i => i.programa === progEncontrado?.nombre).length;
            if (inscritosEnCarrera >= LIMITE_POR_CARRERA) {
              alert(`Lo sentimos, el programa de ${progEncontrado?.nombre} ya alcanzó el límite máximo de 25 personas inscritas.`);
              return;
            }

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
            const documentoYaExiste = inscritos.some(
              (est) => est.numeroDocumento === datosPersonales.numeroDocumento
            );

            if (documentoYaExiste) {
              alert(`Atención: El número de documento "${datosPersonales.numeroDocumento}" ya cuenta con una inscripción activa en el sistema.`);
              return;
            }

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
            const nombrePrograma = programaElegido ? programaElegido.nombre : 'General';
            
            const documentoYaExiste = inscritos.some(
              (est) => est.numeroDocumento === datosGuardados.numeroDocumento
            );
            if (documentoYaExiste) {
              alert("Error: Este número de documento ya fue registrado previamente.");
              setPantallaActual('portal');
              return;
            }

            const inscritosEnCarrera = inscritos.filter(i => i.programa === nombrePrograma).length;
            if (inscritosEnCarrera >= LIMITE_POR_CARRERA) {
              alert("Cupo lleno en esta carrera en el último segundo. No se pudo procesar la inscripción.");
              setPantallaActual('portal');
              return;
            }

            const nuevoInscrito = {
              ...datosGuardados,
              programa: nombrePrograma,
              fechaInscripcion: new Date().toLocaleString()
            };

            setInscritos([...inscritos, nuevoInscrito]);
            alert("¡Inscripción completada con éxito!");
            setPantallaActual('portal');
          }}
        />
      )}

      {pantallaActual === 'panel-admin' && (
        <PanelAdministrador 
          inscritos={inscritos}
          limitePorCarrera={LIMITE_POR_CARRERA}
          listaProgramas={listaProgramas}
          onVolver={() => setPantallaActual('portal')}
          onEliminarInscrito={handleEliminarInscrito}
        />
      )}
    </div>
  );
}