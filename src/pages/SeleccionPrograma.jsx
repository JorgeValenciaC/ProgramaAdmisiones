import React, { useState } from 'react';
import { Search, GraduationCap, User, FileText, ChevronRight, Check } from 'lucide-react';

export default function SeleccionPrograma({ onContinuar, onVolver }) {
  const [programaSeleccionado, setProgramaSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [facultadFiltro, setFacultadFiltro] = useState('Todas las facultades');

  const listaProgramas = [
    { id: 1, nombre: 'Administración de Empresas', facultad: 'Ciencias Administrativas y Contables', semestres: 'Presencial y Virtual', snies: 'SNIES 2009 / 110865', badge: null },
    { id: 2, nombre: 'Contaduría Pública', facultad: 'Ciencias Administrativas y Contables', semestres: 'Presencial y Virtual', snies: 'SNIES 4565 / 110025', badge: null },
    { id: 3, nombre: 'Marketing y Comunicación Digital', facultad: 'Ciencias Administrativas y Contables', semestres: '100% Virtual', snies: 'SNIES 116513', badge: 'Beca 30%' },
    { id: 4, nombre: 'Actividad Física y Deporte', facultad: 'Ciencias Humanas y de la Educación', semestres: 'Presencial', snies: 'SNIES 117693', badge: null },
    { id: 5, nombre: 'Licenciatura en Español e Inglés', facultad: 'Ciencias Humanas y de la Educación', semestres: '100% Virtual', snies: 'SNIES 106315', badge: null },
    { id: 6, nombre: 'Licenciatura en Educación Infantil', facultad: 'Ciencias Humanas y de la Educación', semestres: 'Presencial', snies: 'SNIES 106660', badge: null },
    { id: 7, nombre: 'Licenciatura en Música', facultad: 'Ciencias Humanas y de la Educación', semestres: 'Presencial', snies: 'SNIES 19601', badge: 'Alta Calidad' },
    { id: 8, nombre: 'Enfermería', facultad: 'Ciencias de la Salud', semestres: 'Presencial', snies: 'SNIES 54061', badge: null },
    { id: 9, nombre: 'Tecnología en Atención Prehospitalaria (Medellín)', facultad: 'Ciencias de la Salud', semestres: 'Presencial', snies: 'SNIES 103852', badge: null },
    { id: 10, nombre: 'Tecnología en Atención Prehospitalaria (Bucaramanga)', facultad: 'Ciencias de la Salud', semestres: 'Presencial', snies: 'SNIES 108870', badge: null },
    { id: 11, nombre: 'Ingeniería Industrial', facultad: 'Ingeniería', semestres: 'Presencial', snies: 'SNIES 107290', badge: null },
    { id: 12, nombre: 'Ingeniería de Sistemas', facultad: 'Ingeniería', semestres: 'Presencial', snies: 'SNIES 101756', badge: null },
    { id: 13, nombre: 'Licenciatura en Educación Religiosa', facultad: 'Facultad de Teología y Religión', semestres: 'Presencial', snies: 'SNIES 106845', badge: 'Alta Calidad' },
    { id: 14, nombre: 'Teología', facultad: 'Facultad de Teología y Religión', semestres: 'Presencial', snies: 'SNIES 104295', badge: null }
  ];

  const programasFiltrados = listaProgramas.filter((prog) => {
    const coincideBusqueda = prog.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
                             prog.snies.toLowerCase().includes(busqueda.toLowerCase());
    const coincideFacultad = facultadFiltro === 'Todas las facultades' || prog.facultad === facultadFiltro;
    return coincideBusqueda && coincideFacultad;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      
      {/* ================= INDICADOR DE PASOS SUPERIOR ================= */}
      <div className="w-full max-w-2xl flex items-center justify-center mb-6">
        <div className="flex items-center w-full max-w-xs justify-between relative px-4">
          <div className="absolute left-8 right-8 top-4 h-[2px] bg-slate-200 -z-0"></div>
          
          <div className="flex flex-col items-center z-10">
            <div className="w-8 h-8 rounded-full bg-[#0b132b] text-white flex items-center justify-center text-xs font-bold shadow-sm">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-[#0b132b] mt-1">Programa</span>
          </div>

          <div className="flex flex-col items-center z-10 opacity-40">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-300 text-slate-500 flex items-center justify-center text-xs">
              <User className="w-4 h-4" />
            </div>
            <span className="text-[11px] text-slate-500 mt-1">Datos</span>
          </div>

          <div className="flex flex-col items-center z-10 opacity-40">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-300 text-slate-500 flex items-center justify-center text-xs">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-[11px] text-slate-500 mt-1">Docs</span>
          </div>
        </div>
      </div>

      {/* ================= TARJETA PRINCIPAL CENTRADA ================= */}
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 flex flex-col items-center">
        
        {/* Encabezado */}
        <div className="w-full text-left mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-1">Selecciona tu programa</h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Elige el programa de pregrado al que deseas inscribirte para el período <span className="font-bold text-slate-800">2026-II</span>.
          </p>
        </div>

        {/* Buscador y Filtro */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar programa o SNIES..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0b132b] transition"
            />
          </div>

          <div>
            <select 
              value={facultadFiltro}
              onChange={(e) => setFacultadFiltro(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#0b132b] transition cursor-pointer font-medium"
            >
              <option>Todas las facultades</option>
              <option>Ciencias Administrativas y Contables</option>
              <option>Ciencias Humanas y de la Educación</option>
              <option>Ciencias de la Salud</option>
              <option>Ingeniería</option>
              <option>Facultad de Teología y Religión</option>
            </select>
          </div>
        </div>

        {/* Listado en una sola columna vertical limpia y centrada */}
        <div className="w-full flex flex-col gap-3 max-h-[380px] overflow-y-auto pr-1 mb-6">
          {programasFiltrados.length > 0 ? (
            programasFiltrados.map((prog) => {
              const isSelected = programaSeleccionado === prog.id;
              return (
                <div 
                  key={prog.id}
                  onClick={() => setProgramaSeleccionado(prog.id)}
                  className={`w-full border-2 rounded-2xl p-4 cursor-pointer transition-all flex items-center justify-between ${
                    isSelected 
                      ? 'border-[#0b132b] bg-blue-50/40 shadow-sm' 
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex flex-col text-left pr-4">
                    <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-0.5">
                      {prog.facultad}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug">
                      {prog.nombre}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
                      <span>{prog.semestres}</span>
                      <span>•</span>
                      <span className="font-medium">{prog.snies}</span>
                      {prog.badge && (
                        <>
                          <span>•</span>
                          <span className="text-amber-700 font-bold bg-amber-100 px-2 py-0.5 rounded text-[10px]">
                            {prog.badge}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    isSelected ? 'border-[#0b132b] bg-[#0b132b] text-white' : 'border-slate-300'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-slate-400 text-xs">
              No se encontraron programas con los filtros seleccionados.
            </div>
          )}
        </div>

        {/* Botones de navegación inferiores */}
        <div className="w-full flex items-center justify-between pt-4 border-t border-slate-100">
          <button 
            type="button"
            onClick={onVolver}
            className="text-xs font-medium text-slate-500 hover:text-slate-800 transition cursor-pointer"
          >
            &larr; Volver
          </button>

          <button 
            type="button"
            disabled={!programaSeleccionado}
            onClick={() => {
              if (programaSeleccionado && onContinuar) {
                onContinuar(programaSeleccionado);
              }
            }}
            className={`px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-2 transition shadow-sm ${
              programaSeleccionado 
                ? 'bg-[#0b132b] hover:bg-[#152238] text-white cursor-pointer' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            }`}
          >
            <span>Continuar</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}