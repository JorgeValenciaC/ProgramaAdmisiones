import React, { useState } from 'react';
import { User, FileText, ChevronRight, ChevronLeft, MapPin, BookOpen, Users, Check, CreditCard, Phone, ShieldCheck, HeartPulse, Wallet, ChevronDown } from 'lucide-react';

export default function MisDatos({ programaSeleccionado, onContinuar, onVolver }) {
  const [formData, setFormData] = useState({
    tipoDocumento: '',
    numeroDocumento: '',
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    genero: '',
    estadoCivil: '',
    celular: '',
    correoAlternativo: '',
    contactoEmergencia: '',
    telefonoEmergencia: '',
    direccion: '',
    departamento: '',
    municipio: '',
    estrato: '',
    colegio: '',
    ciudadColegio: '',
    modalidadColegio: '',
    anioGraduacion: '',
    promedio: '',
    icfes: '',
    eps: '',
    tipoAfiliacion: '',
    condicionMedica: '',
    fuenteFinanciacion: '',
    ingresosFamiliares: '',
    grupoEtnico: '',
    discapacidad: 'No',
    hermanos: '',
    situacionLaboral: '',
    aceptaHabeasData: false,
    aceptaVeracidad: false
  });

  const [abrirMenuDep, setAbrirMenuDep] = useState(false);

  const listaCompletaDepartamentos = [
    "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bogotá D.C.", "Bolívar", 
    "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", 
    "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", 
    "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", 
    "Risaralda", "San Andrés y Providencia", "Santander", "Sucre", "Tolima", 
    "Valle del Cauca", "Vaupés", "Vichada"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const seleccionarDep = (dep) => {
    setFormData({ ...formData, departamento: dep });
    setAbrirMenuDep(false);
  };

  const handleContinuarClick = (e) => {
    e.preventDefault();
    
    // Validación básica de campos clave para evitar vacíos
    if (!formData.tipoDocumento || !formData.numeroDocumento || !formData.nombres || !formData.apellidos) {
      alert("Por favor completa los datos básicos de identificación.");
      return;
    }
    if (!formData.departamento) {
      alert("Por favor selecciona un departamento de residencia.");
      return;
    }
    if (!formData.aceptaHabeasData || !formData.aceptaVeracidad) {
      alert("Debes aceptar las autorizaciones legales para continuar.");
      return;
    }

    // Ejecuta la función del componente padre para pasar al paso de Documentos
    if (onContinuar) {
      onContinuar(formData);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      
      {/* ================= INDICADOR DE PASOS SUPERIOR ================= */}
      <div className="w-full max-w-2xl flex items-center justify-center mb-6">
        <div className="flex items-center w-full max-w-xs justify-between relative px-4">
          <div className="absolute left-8 right-8 top-4 h-[2px] bg-[#0b132b] -z-0"></div>
          
          <div className="flex flex-col items-center z-10">
            <div className="w-8 h-8 rounded-full bg-[#0b132b] text-white flex items-center justify-center text-xs font-bold shadow-sm">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-medium text-slate-500 mt-1">Programa</span>
          </div>

          <div className="flex flex-col items-center z-10">
            <div className="w-8 h-8 rounded-full bg-[#0b132b] text-white flex items-center justify-center text-xs font-bold shadow-sm ring-4 ring-blue-50">
              <User className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-[#0b132b] mt-1">Mis datos</span>
          </div>

          <div className="flex flex-col items-center z-10 opacity-40">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-300 text-slate-500 flex items-center justify-center text-xs">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-[11px] text-slate-500 mt-1">Docs</span>
          </div>
        </div>
      </div>

      {/* ================= TARJETA PRINCIPAL ================= */}
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 flex flex-col">
        
        <div className="mb-6 pb-4 border-b border-slate-100">
          <span className="inline-block bg-blue-50 text-[#0b132b] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-1.5">
            Programa seleccionado: {programaSeleccionado ? programaSeleccionado.nombre : 'Pregrado'}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Formulario de Admisión Integral</h2>
          <p className="text-slate-500 text-xs mt-0.5">
            Diligencia todos los campos obligatorios marcados con <span className="text-red-500">*</span>.
          </p>
        </div>

        <div className="flex flex-col gap-6 max-h-[520px] overflow-y-auto pr-2 custom-scrollbar">
          
          {/* 1. IDENTIFICACIÓN */}
          <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-slate-50/50">
            <div className="flex items-center gap-2 mb-4 text-[#0b132b]">
              <CreditCard className="w-4 h-4" />
              <h3 className="font-bold text-sm">1. Información de identificación</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Tipo de documento <span className="text-red-500">*</span></label>
                <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]">
                  <option value="">Seleccionar...</option>
                  <option value="CC">Cédula de Ciudadanía</option>
                  <option value="TI">Tarjeta de Identidad</option>
                  <option value="CE">Cédula de Extranjería</option>
                  <option value="Pasaporte">Pasaporte</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Número de documento <span className="text-red-500">*</span></label>
                <input type="text" name="numeroDocumento" value={formData.numeroDocumento} onChange={handleChange} placeholder="Ej. 1023456789" className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nombres <span className="text-red-500">*</span></label>
                <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} placeholder="María Camila" className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Apellidos <span className="text-red-500">*</span></label>
                <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} placeholder="Torres Restrepo" className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Fecha de nacimiento <span className="text-red-500">*</span></label>
                <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Género <span className="text-red-500">*</span></label>
                  <select name="genero" value={formData.genero} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]">
                    <option value="">Seleccionar...</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Estado civil <span className="text-red-500">*</span></label>
                  <select name="estadoCivil" value={formData.estadoCivil} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]">
                    <option value="">Seleccionar...</option>
                    <option value="Soltero">Soltero/a</option>
                    <option value="Casado">Casado/a</option>
                    <option value="Unión Libre">Unión Libre</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* 2. CONTACTO Y EMERGENCIA */}
          <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-slate-50/50">
            <div className="flex items-center gap-2 mb-4 text-[#0b132b]">
              <Phone className="w-4 h-4" />
              <h3 className="font-bold text-sm">2. Contacto y Emergencia</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Celular <span className="text-red-500">*</span></label>
                <input type="tel" name="celular" value={formData.celular} onChange={handleChange} placeholder="300 123 4567" className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Correo electrónico alternativo</label>
                <input type="email" name="correoAlternativo" value={formData.correoAlternativo} onChange={handleChange} placeholder="personal@gmail.com" className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Contacto de emergencia (Nombre) <span className="text-red-500">*</span></label>
                <input type="text" name="contactoEmergencia" value={formData.contactoEmergencia} onChange={handleChange} placeholder="Familiar o acudiente" className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Teléfono de emergencia <span className="text-red-500">*</span></label>
                <input type="tel" name="telefonoEmergencia" value={formData.telefonoEmergencia} onChange={handleChange} placeholder="310 987 6543" className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
              </div>
            </div>
          </div>

          {/* 3. RESIDENCIA */}
          <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-slate-50/50">
            <div className="flex items-center gap-2 mb-4 text-[#0b132b]">
              <MapPin className="w-4 h-4" />
              <h3 className="font-bold text-sm">3. Datos de residencia</h3>
            </div>
            <div className="grid grid-cols-1 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Dirección de residencia <span className="text-red-500">*</span></label>
                <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Calle 45 # 23-10, Apto 301" className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* SELECTOR PERSONALIZADO CON LOS 33 DEPARTAMENTOS */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Departamento <span className="text-red-500">*</span></label>
                  
                  <div 
                    onClick={() => setAbrirMenuDep(!abrirMenuDep)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 flex items-center justify-between cursor-pointer select-none"
                  >
                    <span className={formData.departamento ? 'text-slate-900 font-semibold' : 'text-slate-400'}>
                      {formData.departamento || 'Seleccionar departamento...'}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                  </div>

                  {abrirMenuDep && (
                    <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-2xl max-h-60 overflow-y-auto z-50 p-1.5">
                      {listaCompletaDepartamentos.map((departamento, index) => (
                        <div 
                          key={index}
                          onClick={() => seleccionarDep(departamento)}
                          className="px-3 py-2 text-xs text-slate-700 hover:bg-slate-100 hover:text-[#0b132b] rounded-xl cursor-pointer transition font-medium"
                        >
                          {departamento}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Municipio / Ciudad <span className="text-red-500">*</span></label>
                  <input type="text" name="municipio" value={formData.municipio} onChange={handleChange} placeholder="Ej. Medellín" className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Estrato socioeconómico <span className="text-red-500">*</span></label>
                <select name="estrato" value={formData.estrato} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]">
                  <option value="">Seleccionar...</option>
                  <option value="1">Estrato 1</option>
                  <option value="2">Estrato 2</option>
                  <option value="3">Estrato 3</option>
                  <option value="4">Estrato 4</option>
                  <option value="5">Estrato 5</option>
                  <option value="6">Estrato 6</option>
                </select>
              </div>
            </div>
          </div>

          {/* 4. BACHILLERATO */}
          <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-slate-50/50">
            <div className="flex items-center gap-2 mb-4 text-[#0b132b]">
              <BookOpen className="w-4 h-4" />
              <h3 className="font-bold text-sm">4. Información académica del bachillerato</h3>
            </div>
            <div className="grid grid-cols-1 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre del colegio de graduación <span className="text-red-500">*</span></label>
                <input type="text" name="colegio" value={formData.colegio} onChange={handleChange} placeholder="Institución Educativa..." className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Ciudad del colegio <span className="text-red-500">*</span></label>
                  <input type="text" name="ciudadColegio" value={formData.ciudadColegio} onChange={handleChange} placeholder="Ej. Medellín" className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Modalidad <span className="text-red-500">*</span></label>
                  <select name="modalidadColegio" value={formData.modalidadColegio} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]">
                    <option value="">Seleccionar...</option>
                    <option value="Academico">Académico</option>
                    <option value="Tecnico">Técnico</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Año de graduación <span className="text-red-500">*</span></label>
                  <select name="anioGraduacion" value={formData.anioGraduacion} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]">
                    <option value="">Seleccionar...</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="Anterior">Anterior</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Promedio académico <span className="text-red-500">*</span></label>
                  <input type="text" name="promedio" value={formData.promedio} onChange={handleChange} placeholder="4.2" className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Puntaje global ICFES / Saber 11</label>
                <input type="text" name="icfes" value={formData.icfes} onChange={handleChange} placeholder="Ej. 312" className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
              </div>
            </div>
          </div>

          {/* 5. SALUD Y EPS */}
          <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-slate-50/50">
            <div className="flex items-center gap-2 mb-4 text-[#0b132b]">
              <HeartPulse className="w-4 h-4" />
              <h3 className="font-bold text-sm">5. Información de Salud y EPS</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">EPS a la que pertenece <span className="text-red-500">*</span></label>
                <input type="text" name="eps" value={formData.eps} onChange={handleChange} placeholder="Ej. Sura, Nueva EPS, etc." className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Tipo de afiliación <span className="text-red-500">*</span></label>
                <select name="tipoAfiliacion" value={formData.tipoAfiliacion} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]">
                  <option value="">Seleccionar...</option>
                  <option value="Contributivo">Contributivo</option>
                  <option value="Subsidiado">Subsidiado</option>
                  <option value="Beneficiario">Beneficiario</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">¿Padece alguna condición médica o alergia importante?</label>
                <input type="text" name="condicionMedica" value={formData.condicionMedica} onChange={handleChange} placeholder="Ninguna o especifique..." className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]" />
              </div>
            </div>
          </div>

          {/* 6. INFORMACIÓN ECONÓMICA */}
          <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-slate-50/50">
            <div className="flex items-center gap-2 mb-4 text-[#0b132b]">
              <Wallet className="w-4 h-4" />
              <h3 className="font-bold text-sm">6. Información Económica / Financiación</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Fuente principal de financiación <span className="text-red-500">*</span></label>
                <select name="fuenteFinanciacion" value={formData.fuenteFinanciacion} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]">
                  <option value="">Seleccionar...</option>
                  <option value="Recursos propios / Familiares">Recursos propios / Familiares</option>
                  <option value="Crédito educativo (ICETEX / Otro)">Crédito educativo (ICETEX / Otro)</option>
                  <option value="Becas o Convenios">Becas o Convenios</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Ingresos familiares aproximados <span className="text-red-500">*</span></label>
                <select name="ingresosFamiliares" value={formData.ingresosFamiliares} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]">
                  <option value="">Seleccionar...</option>
                  <option value="Menos de 1 SMLV">Menos de 1 SMLV</option>
                  <option value="Entre 1 y 2 SMLV">Entre 1 y 2 SMLV</option>
                  <option value="Entre 2 y 4 SMLV">Entre 2 y 4 SMLV</option>
                  <option value="Más de 4 SMLV">Más de 4 SMLV</option>
                </select>
              </div>
            </div>
          </div>

          {/* 7. DEMOGRÁFICA Y COMPLEMENTARIA */}
          <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-slate-50/50">
            <div className="flex items-center gap-2 mb-4 text-[#0b132b]">
              <Users className="w-4 h-4" />
              <h3 className="font-bold text-sm">7. Información complementaria</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Grupo étnico</label>
                <select name="grupoEtnico" value={formData.grupoEtnico} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]">
                  <option value="">Ninguno</option>
                  <option value="Indigena">Indígena</option>
                  <option value="Afrodescendiente">Afrodescendiente</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Situación laboral actual <span className="text-red-500">*</span></label>
                <select name="situacionLaboral" value={formData.situacionLaboral} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b]">
                  <option value="">Seleccionar...</option>
                  <option value="No trabaja">No trabaja</option>
                  <option value="Tiempo completo">Tiempo completo</option>
                  <option value="Medio tiempo">Medio tiempo</option>
                </select>
              </div>
            </div>
          </div>

          {/* 8. AUTORIZACIONES LEGALES */}
          <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-blue-50/40">
            <div className="flex items-center gap-2 mb-3 text-[#0b132b]">
              <ShieldCheck className="w-4 h-4" />
              <h3 className="font-bold text-sm">8. Declaraciones y Autorizaciones Legales</h3>
            </div>
            <div className="flex flex-col gap-3 text-xs text-slate-700">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="aceptaHabeasData" 
                  checked={formData.aceptaHabeasData} 
                  onChange={handleChange}
                  className="mt-0.5 rounded border-slate-300 text-[#0b132b] focus:ring-[#0b132b]"
                />
                <span>Autorizo el tratamiento de mis datos personales según la política de Habeas Data institucional para fines del proceso de admisión. <span className="text-red-500">*</span></span>
              </label>

              <label className="flex items-start gap-2.5 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="aceptaVeracidad" 
                  checked={formData.aceptaVeracidad} 
                  onChange={handleChange}
                  className="mt-0.5 rounded border-slate-300 text-[#0b132b] focus:ring-[#0b132b]"
                />
                <span>Declaro bajo gravedad de juramento que toda la información suministrada en este formulario es verídica y comprobable. <span className="text-red-500">*</span></span>
              </label>
            </div>
          </div>

          {/* Botones de acción inferiores */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button 
              type="button"
              onClick={onVolver}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer flex items-center gap-1.5"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Atrás</span>
            </button>

            <button 
              type="button"
              onClick={handleContinuarClick}
              className="px-6 py-2.5 rounded-xl bg-[#0b132b] hover:bg-[#152238] text-white font-semibold text-xs flex items-center gap-1.5 transition shadow-sm cursor-pointer"
            >
              <span>Continuar a Documentos</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}