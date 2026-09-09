import React, { useState } from 'react';
import { FileText, Check, ChevronLeft, Upload, AlertCircle, FileCheck, X } from 'lucide-react';

export default function Documentos({ formData, programaSeleccionado, onFinalizar, onVolver }) {
  const [archivos, setArchivos] = useState({
    documentoIdentidad: null,
    actaGrado: null,
    icfes: null,
    eps: null
  });

  const [cargando, setCargando] = useState(false);

  const handleFileChange = (e, tipo) => {
    const file = e.target.files[0];
    if (file) {
      setArchivos({
        ...archivos,
        [tipo]: file
      });
    }
  };

  const eliminarArchivo = (tipo) => {
    setArchivos({
      ...archivos,
      [tipo]: null
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!archivos.documentoIdentidad || !archivos.actaGrado) {
      alert("Por favor carga al menos el Documento de Identidad y el Acta de Grado.");
      return;
    }

    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      if (onFinalizar) {
        onFinalizar(archivos);
      }
    }, 1500);
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
            <div className="w-8 h-8 rounded-full bg-[#0b132b] text-white flex items-center justify-center text-xs font-bold shadow-sm">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-medium text-slate-500 mt-1">Mis datos</span>
          </div>

          <div className="flex flex-col items-center z-10">
            <div className="w-8 h-8 rounded-full bg-[#0b132b] text-white flex items-center justify-center text-xs font-bold shadow-sm ring-4 ring-blue-50">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-[#0b132b] mt-1">Docs</span>
          </div>
        </div>
      </div>

      {/* ================= TARJETA PRINCIPAL ================= */}
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 flex flex-col">
        
        <div className="mb-6 pb-4 border-b border-slate-100">
          <span className="inline-block bg-blue-50 text-[#0b132b] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-1.5">
            Proceso para: {programaSeleccionado ? programaSeleccionado.nombre : 'Pregrado'}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Cargue de Documentos</h2>
          <p className="text-slate-500 text-xs mt-0.5">
            Sube los archivos requeridos en formato PDF o imagen (máx. 5MB por archivo).
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Alerta informativa */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-800">
              <span className="font-bold block mb-0.5">Requisitos importantes:</span>
              Asegúrate de que los documentos sean legibles, estén completos y correspondan a la información suministrada en el paso anterior.
            </div>
          </div>

          {/* SECCIÓN DE CARGA DE ARCHIVOS */}
          <div className="grid grid-cols-1 gap-4">
            
            {/* 1. Documento de Identidad */}
            <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-slate-800 block">Documento de Identidad (CC / TI / Pasaporte) <span className="text-red-500">*</span></span>
                <span className="text-[11px] text-slate-500">Amby cara o formato extendido en PDF.</span>
              </div>
              
              {archivos.documentoIdentidad ? (
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs text-emerald-800 font-medium truncate max-w-[160px]">{archivos.documentoIdentidad.name}</span>
                  <button type="button" onClick={() => eliminarArchivo('documentoIdentidad')} className="text-slate-400 hover:text-red-500 ml-1">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold px-4 py-2 rounded-xl transition flex items-center gap-2 self-start sm:self-auto">
                  <Upload className="w-3.5 h-3.5 text-slate-500" />
                  <span>Examinar archivo</span>
                  <input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={(e) => handleFileChange(e, 'documentoIdentidad')} className="hidden" />
                </label>
              )}
            </div>

            {/* 2. Acta de grado o Diploma */}
            <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-slate-800 block">Acta de Grado o Diploma de Bachiller <span className="text-red-500">*</span></span>
                <span className="text-[11px] text-slate-500">Certificado oficial de finalización de estudios.</span>
              </div>
              
              {archivos.actaGrado ? (
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs text-emerald-800 font-medium truncate max-w-[160px]">{archivos.actaGrado.name}</span>
                  <button type="button" onClick={() => eliminarArchivo('actaGrado')} className="text-slate-400 hover:text-red-500 ml-1">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold px-4 py-2 rounded-xl transition flex items-center gap-2 self-start sm:self-auto">
                  <Upload className="w-3.5 h-3.5 text-slate-500" />
                  <span>Examinar archivo</span>
                  <input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={(e) => handleFileChange(e, 'actaGrado')} className="hidden" />
                </label>
              )}
            </div>

            {/* 3. Resultados ICFES */}
            <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-slate-800 block">Resultados ICFES / Saber 11</span>
                <span className="text-[11px] text-slate-500">Reporte oficial de puntaje (Opcional).</span>
              </div>
              
              {archivos.icfes ? (
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs text-emerald-800 font-medium truncate max-w-[160px]">{archivos.icfes.name}</span>
                  <button type="button" onClick={() => eliminarArchivo('icfes')} className="text-slate-400 hover:text-red-500 ml-1">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold px-4 py-2 rounded-xl transition flex items-center gap-2 self-start sm:self-auto">
                  <Upload className="w-3.5 h-3.5 text-slate-500" />
                  <span>Examinar archivo</span>
                  <input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={(e) => handleFileChange(e, 'icfes')} className="hidden" />
                </label>
              )}
            </div>

            {/* 4. Certificado EPS */}
            <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-slate-800 block">Certificado de afiliación EPS</span>
                <span className="text-[11px] text-slate-500">Generado recientemente (Opcional).</span>
              </div>
              
              {archivos.eps ? (
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs text-emerald-800 font-medium truncate max-w-[160px]">{archivos.eps.name}</span>
                  <button type="button" onClick={() => eliminarArchivo('eps')} className="text-slate-400 hover:text-red-500 ml-1">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold px-4 py-2 rounded-xl transition flex items-center gap-2 self-start sm:self-auto">
                  <Upload className="w-3.5 h-3.5 text-slate-500" />
                  <span>Examinar archivo</span>
                  <input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={(e) => handleFileChange(e, 'eps')} className="hidden" />
                </label>
              )}
            </div>

          </div>

          {/* Botones de acción inferiores */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-4">
            <button 
              type="button"
              onClick={onVolver}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer flex items-center gap-1.5"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Atrás</span>
            </button>

            <button 
              type="submit"
              disabled={cargando}
              className="px-6 py-2.5 rounded-xl bg-[#0b132b] hover:bg-[#152238] text-white font-semibold text-xs flex items-center gap-1.5 transition shadow-sm cursor-pointer disabled:opacity-50"
            >
              <span>{cargando ? 'Enviando postulación...' : 'Finalizar y Enviar Admisión'}</span>
              {!cargando && <Check className="w-3.5 h-3.5" />}
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}