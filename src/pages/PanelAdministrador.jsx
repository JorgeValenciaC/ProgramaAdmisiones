import React, { useState } from 'react';
import { Users, ShieldAlert, ArrowLeft, CheckCircle2, AlertTriangle, TrendingUp, Trash2, AlertCircle, Search } from 'lucide-react';

export default function PanelAdministrador({ inscritos = [], limitePorCarrera = 25, listaProgramas = [], onVolver, onEliminarInscrito }) {
  const [carreraSeleccionada, setCarreraSeleccionada] = useState('todas');
  const [busqueda, setBusqueda] = useState(''); // Estado para el buscador
  const [estudianteAEliminar, setEstudianteAEliminar] = useState(null);
  const MINIMO_POR_CARRERA = 8; // Mínimo requerido para abrir grupo

  // 1. Filtrar primero por carrera seleccionada
  const inscritosPorCarrera = carreraSeleccionada === 'todas' 
    ? inscritos 
    : inscritos.filter(est => est.programa === carreraSeleccionada);

  // 2. Filtrar luego por el texto de búsqueda (nombre, apellido o número de documento)
  const inscritosFiltrados = inscritosPorCarrera.filter(est => {
    const textoBusqueda = busqueda.toLowerCase();
    const nombreCompleto = `${est.nombres} ${est.apellidos}`.toLowerCase();
    const documento = est.numeroDocumento.toLowerCase();
    return nombreCompleto.includes(textoBusqueda) || documento.includes(textoBusqueda);
  });

  const confirmarEliminacion = () => {
    if (estudianteAEliminar && onEliminarInscrito) {
      onEliminarInscrito(estudianteAEliminar.numeroDocumento);
      setEstudianteAEliminar(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center p-4 sm:p-8 font-sans relative">
      
      {/* MODAL DE CONFIRMACIÓN */}
      {estudianteAEliminar && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 flex flex-col items-center text-center animate-fadeIn">
            
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-1">¿Anular inscripción?</h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Estás a punto de eliminar el registro de <span className="font-bold text-slate-800">{estudianteAEliminar.nombres} {estudianteAEliminar.apellidos}</span> en el programa de <span className="font-bold text-blue-600">{estudianteAEliminar.programa}</span>. Esta acción liberará un cupo de manera inmediata.
            </p>

            <div className="flex items-center gap-3 w-full">
              <button 
                onClick={() => setEstudianteAEliminar(null)}
                className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition cursor-pointer"
              >
                Cancelar
              </button>
              <button 
                onClick={confirmarEliminacion}
                className="flex-1 py-3 rounded-xl bg-red-600 text-white font-semibold text-xs hover:bg-red-700 transition shadow-sm cursor-pointer"
              >
                Sí, anular cupo
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Encabezado Principal */}
      <div className="w-full max-w-6xl flex items-center justify-between mb-6">
        <button 
          onClick={onVolver}
          className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-white transition flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Salir al Portal</span>
        </button>
        <div className="flex items-center gap-2">
          <span className="bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <ShieldAlert className="w-3.5 h-3.5" /> Panel de Control Administrativo (Mín. {MINIMO_POR_CARRERA} / Máx. {limitePorCarrera})
          </span>
        </div>
      </div>

      {/* Sección de Paneles Generales por Carrera */}
      <div className="w-full max-w-6xl mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Estado de Cupos y Viabilidad por Programa</h2>
            <p className="text-slate-500 text-xs">Control de umbral mínimo ({MINIMO_POR_CARRERA}) y límite máximo ({limitePorCarrera}) de matrículas.</p>
          </div>
          <button
            onClick={() => setCarreraSeleccionada('todas')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
              carreraSeleccionada === 'todas' 
                ? 'bg-[#0b132b] text-white shadow-md' 
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Ver Vista Global ({inscritos.length} inscritos)
          </button>
        </div>

        {/* Cuadrícula de Paneles Interactivos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {listaProgramas.map((prog) => {
            const inscritosEnCarrera = inscritos.filter(e => e.programa === prog.nombre);
            const totalInscritos = inscritosEnCarrera.length;
            const porcentaje = Math.min(Math.round((totalInscritos / limitePorCarrera) * 100), 100);
            const estaLleno = totalInscritos >= limitePorCarrera;
            const cumpleMinimo = totalInscritos >= MINIMO_POR_CARRERA;
            const esSeleccionado = carreraSeleccionada === prog.nombre;

            return (
              <div 
                key={prog.id}
                onClick={() => setCarreraSeleccionada(prog.nombre)}
                className={`bg-white rounded-3xl p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-md ${
                  esSeleccionado ? 'border-[#0b132b] ring-2 ring-[#0b132b]/20 bg-blue-50/20' : 'border-slate-100'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                      {prog.facultad}
                    </span>
                    
                    {estaLleno ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                        <AlertTriangle className="w-3 h-3" /> Cupo lleno
                      </span>
                    ) : cumpleMinimo ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" /> Grupo abierto
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                        <TrendingUp className="w-3 h-3" /> Faltan {MINIMO_POR_CARRERA - totalInscritos} para abrir
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 mb-1 line-clamp-2">{prog.nombre}</h3>
                  <p className="text-[11px] text-slate-500 mb-4">Mínimo: {MINIMO_POR_CARRERA} | Máximo: {limitePorCarrera}</p>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <span>Inscritos: {totalInscritos} / {limitePorCarrera}</span>
                    <span className="text-blue-600">{porcentaje}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${estaLleno ? 'bg-red-500' : cumpleMinimo ? 'bg-[#0b132b]' : 'bg-amber-400'}`}
                      style={{ width: `${porcentaje}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tabla Detallada con Buscador */}
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#0b132b]" /> 
              Listado de Aspirantes en: <span className="text-blue-600">{carreraSeleccionada === 'todas' ? 'Todas las carreras' : carreraSeleccionada}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Mostrando registros detallados y datos de contacto de los aspirantes.</p>
          </div>

          {/* BUSCADOR EN TIEMPO REAL */}
          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Buscar por nombre o cédula..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#0b132b] transition"
              />
            </div>
            <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-2 rounded-xl whitespace-nowrap">
              Total: {inscritosFiltrados.length}
            </span>
          </div>
        </div>

        {inscritosFiltrados.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-xs">
            No se encontraron aspirantes que coincidan con la búsqueda.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-semibold uppercase">
                  <th className="py-3 px-3">#</th>
                  <th className="py-3 px-3">Documento</th>
                  <th className="py-3 px-3">Nombre Completo</th>
                  <th className="py-3 px-3">Carrera / Programa</th>
                  <th className="py-3 px-3">Celular</th>
                  <th className="py-3 px-3">Fecha de Registro</th>
                  <th className="py-3 px-3 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {inscritosFiltrados.map((est, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition">
                    <td className="py-3 px-3 font-bold text-slate-900">{index + 1}</td>
                    <td className="py-3 px-3">{est.tipoDocumento}: {est.numeroDocumento}</td>
                    <td className="py-3 px-3 font-semibold">{est.nombres} {est.apellidos}</td>
                    <td className="py-3 px-3 text-blue-600 font-medium">{est.programa}</td>
                    <td className="py-3 px-3">{est.celular}</td>
                    <td className="py-3 px-3 text-slate-400 text-[11px]">{est.fechaInscripcion}</td>
                    <td className="py-3 px-3 text-center">
                      <button 
                        onClick={() => setEstudianteAEliminar(est)}
                        title="Anular inscripción"
                        className="p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition cursor-pointer inline-flex items-center justify-center"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}