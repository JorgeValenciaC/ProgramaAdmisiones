import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, AlertCircle } from 'lucide-react';

export default function PortalAdmisiones({ onVolver, onIrASeleccionPrograma, onVerificarAdmin, inscritos = [] }) {
  const [codigoIngresado, setCodigoIngresado] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const handleIngresar = (e) => {
    e.preventDefault();
    const codigoLimpio = codigoIngresado.trim().toUpperCase();
    setMensajeError(''); // Limpiar errores previos

    if (codigoLimpio === '') {
      setMensajeError("Por favor ingresa tu código institucional o número de documento.");
      return;
    }

    // 1. Validar si es el administrador
    if (codigoLimpio === 'ADMIN2026') {
      if (onVerificarAdmin) {
        onVerificarAdmin('ADMIN2026');
      }
      return;
    }

    // 2. NUEVA VALIDACIÓN: Verificar si el código / documento ya está inscrito
    const yaInscrito = inscritos.find(
      (est) => est.numeroDocumento.toUpperCase() === codigoLimpio
    );

    if (yaInscrito) {
      setMensajeError(`El código o documento "${codigoLimpio}" ya cuenta con una inscripción activa en el programa: ${yaInscrito.programa}.`);
      return;
    }

    // 3. Si no es admin y no está inscrito, continúa con el proceso normal
    onIrASeleccionPrograma();
  };

  return (
    <div className="min-h-screen bg-[#0b132b] flex flex-col lg:flex-row font-sans animate-fadeIn">
      
      {/* Columna Izquierda */}
      <div className="lg:w-5/12 p-8 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <button 
              onClick={onVolver}
              className="text-slate-400 hover:text-white transition flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver</span>
            </button>
          </div>

          <span className="inline-block bg-[#d99b26]/20 text-[#d99b26] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-4">
            Universidad Adventista de Colombia
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            Portal de Admisiones <span className="text-[#d99b26]">2026-II</span>
          </h1>
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            Accede con tu código institucional único asignado por la UNAC. El sistema verificará automáticamente tu habilitación en la base de datos.
          </p>
        </div>

        <div className="mt-12 lg:mt-0">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
            Periodos activos
          </span>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 max-w-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-white">2026-II</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            <span className="text-[11px] text-slate-400">Inscripciones abiertas</span>
          </div>
        </div>
      </div>

      {/* Columna Derecha */}
      <div className="lg:w-7/12 bg-white p-8 lg:p-16 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          
          <div className="mb-8">
            <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-md mb-2">
              Periodo 2026-II • Inscripciones abiertas
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Ingresa tu código institucional</h2>
            <p className="text-slate-500 text-xs">
              Usa tu código único o prueba con <span className="font-bold text-slate-700">20212019290</span> para verificar el bloqueo.
            </p>
          </div>

          {/* ALERTA VISUAL MODERNA EN VEZ DE UN ALERT() */}
          {mensajeError && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-800 p-4 rounded-2xl flex items-start gap-3 shadow-sm animate-fadeIn">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed">
                <span className="font-bold block mb-0.5">Acceso denegado</span>
                {mensajeError}
              </div>
            </div>
          )}

          <form onSubmit={handleIngresar} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Código institucional / Código de aspirante <span className="text-red-500">*</span>
              </label>
              <input 
                type="text"
                placeholder="Ej. 201020291920"
                value={codigoIngresado}
                onChange={(e) => {
                  setCodigoIngresado(e.target.value);
                  setMensajeError(''); // Se oculta la alerta al escribir de nuevo
                }}
                className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-xs font-bold text-slate-800 uppercase focus:outline-none transition ${
                  mensajeError ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-[#0b132b]'
                }`}
              />
            </div>

            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex items-start gap-3 my-2">
              <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                i
              </div>
              <div className="text-[11px] text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-800 block mb-0.5">¿Dónde encuentro mi código?</span>
                Fue enviado al correo con el que te pre-inscribiste o asignado por la institución.
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#0b132b] hover:bg-[#152238] text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-sm cursor-pointer mt-2"
            >
              <span>Ingresar</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center mt-6">
            <span className="text-[11px] text-slate-400">
              ¿No tienes tu código? Contacta a admisiones <br />o comunícate al (601) 861 0000 Ext. 201
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}