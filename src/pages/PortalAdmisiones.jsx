import React, { useState } from 'react';

export default function PortalAdmisiones({ onVolver }) {
  const [codigo, setCodigo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Código ingresado:", codigo);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f8fafc] font-sans">
      
      {/* PANEL IZQUIERDO: Información institucional */}
      <div className="lg:w-5/12 bg-[#0b132b] text-white p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
        
        <div>
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                🎓
              </div>
              <div>
                <h2 className="font-bold text-base leading-tight">UNAC</h2>
                <p className="text-xs text-gray-400">Universidad Adventista de Colombia</p>
              </div>
            </div>

            {/* Botón para regresar a la oferta académica */}
            <button 
              onClick={onVolver}
              type="button"
              className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition border border-white/10 cursor-pointer"
            >
              &larr; Volver
            </button>
          </div>

          <div className="mb-8">
            <span className="inline-block w-8 h-1 bg-[#e5a93b] mb-4"></span>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              Portal de<br />Admisiones<br />
              <span className="text-[#e5a93b]">2026-II</span>
            </h1>
            <p className="text-gray-300 text-sm mt-4 leading-relaxed max-w-sm">
              Accede con tu código institucional único asignado por la UNAC. El sistema verificará automáticamente tu habilitación en la base de datos sin necesidad de crear una cuenta.
            </p>
          </div>
        </div>

        {/* Tarjetas de períodos activos */}
        <div>
          <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-3">Períodos activos</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#152238] border border-white/10 p-4 rounded-xl">
              <span className="text-sm font-bold text-[#e5a93b]">2026-II</span>
              <p className="text-xs text-gray-300 mt-1">Inscripciones abiertas</p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-[11px] text-emerald-400 font-medium">Activo</span>
              </div>
            </div>
            <div className="bg-[#152238]/50 border border-white/5 p-4 rounded-xl opacity-60">
              <span className="text-sm font-bold text-gray-400">2027-I</span>
              <p className="text-xs text-gray-400 mt-1">Próximo período</p>
            </div>
          </div>
        </div>
      </div>

      {/* PANEL DERECHO: Formulario de Ingreso */}
      <div className="lg:w-7/12 flex flex-col justify-between p-8 lg:p-16">
        
        <div className="flex justify-between items-center text-xs text-gray-500 mb-12">
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span>Conexión segura · TLS 1.3</span>
          </div>
          <button className="hover:text-gray-800 transition flex items-center gap-1.5">
            <span>🛡️</span>
            <span>Acceso administrativo</span>
          </button>
        </div>

        <div className="max-w-md w-full mx-auto my-auto">
          <span className="inline-block bg-gray-200/70 text-gray-700 text-xs px-3 py-1 rounded-full font-medium mb-4">
            ✨ Período 2026-II • Inscripciones abiertas
          </span>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Ingresa tu código institucional</h2>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            Usa el código único de inscripción asignado por la UNAC. El sistema verificará directamente en la base de datos si estás habilitado para el proceso de admisión.
          </p>

          <form onSubmit={handleSubmit}>
            <label className="block text-xs font-bold text-gray-700 mb-2">
              Código institucional / Código de aspirante <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input 
                type="text"
                maxLength={13}
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                placeholder="EJ. 2024201934205"
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b132b]/20 focus:border-[#0b132b] transition"
              />
            </div>
            <div className="flex justify-between items-center mt-1.5 text-xs text-gray-400 mb-6">
              <span>Solo números. Sin espacios.</span>
              <span>{codigo.length}/13</span>
            </div>

            <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 mb-6 flex gap-3 text-xs text-blue-900">
              <span className="text-blue-500 text-base">ℹ️</span>
              <div>
                <strong className="font-semibold block mb-0.5 text-blue-950">¿Dónde encuentro mi código?</strong>
                Fue enviado al correo con el que te pre-inscribiste, o está en tu volante de inscripción de la UNAC para el período <strong className="font-semibold text-blue-950">2026-II</strong>.
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#0b132b] hover:bg-[#152238] text-white font-semibold py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-sm text-sm cursor-pointer"
            >
              <span>Ingresar</span>
              <span>&rarr;</span>
            </button>
          </form>

          <div className="text-center mt-8 text-xs text-gray-500">
            ¿No tienes tu código?{' '}
            <a href="#contacto" className="font-bold text-[#0b132b] hover:underline">
              Contacta a admisiones
            </a>
            <p className="mt-1 text-gray-400">
              o comunícate al <span className="font-medium text-gray-600">(601) 861 0000 Ext. 201</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-400 pt-8 mt-12 border-t border-gray-200 gap-2">
          <span>&copy; 2026 UNAC</span>
          <span>Sistema de Admisiones v2.4.1</span>
          <a href="#privacidad" className="hover:underline">Política de privacidad</a>
        </div>

      </div>

    </div>
  );
}