import React, { useState, useRef, useEffect } from 'react';
import { Lock, Check, ChevronLeft, Mail, X } from 'lucide-react';

export default function PortalAdmisiones({ onVolver, onIrASeleccionPrograma }) {
  const [codigo, setCodigo] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);

  // Estados específicos para el modal de verificación de 6 dígitos
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(47);
  const inputRefs = useRef([]);

  // Temporizador para el código
  useEffect(() => {
    if (mostrarModal && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [mostrarModal, timeLeft]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (codigo.trim() !== '') {
      setMostrarModal(true);
    }
  };

  const handleVerificationChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f8fafc] font-sans relative overflow-x-hidden">
      
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
          <button className="hover:text-gray-800 transition flex items-center gap-1.5 cursor-pointer">
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

      {/* ================= VENTANA MODAL FLOTANTE ================= */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 transition-all duration-300 ${
          mostrarModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-7 flex flex-col items-center relative transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) ${
            mostrarModal ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-6 opacity-0'
          }`}
        >
          
          {/* Botón de cerrar (X) */}
          <button 
            type="button"
            onClick={() => setMostrarModal(false)}
            className="absolute top-5 right-5 w-9 h-9 bg-slate-100 hover:bg-slate-900 text-slate-700 hover:text-white flex items-center justify-center rounded-full shadow-sm border border-slate-200 transition-all duration-200 cursor-pointer z-10 group"
            title="Cerrar ventana"
          >
            <X className="w-4 h-4 transition-transform group-hover:scale-110" />
          </button>

          {/* Banner superior de usuario */}
          <div className="w-full bg-[#16224f] rounded-2xl p-3.5 flex items-center space-x-3 mb-5 shadow-inner">
            <div className="w-10 h-10 rounded-full bg-[#d99b26] flex items-center justify-center text-white font-bold text-sm tracking-wider flex-shrink-0">
              MC
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-medium text-sm">María Camila Torres Restrepo</span>
              <span className="text-emerald-400 text-[11px] flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                Aspirante habilitada para 2024-II
              </span>
            </div>
          </div>

          {/* Icono de candado */}
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#16224f] mb-2.5">
            <Lock className="w-5 h-5" />
          </div>

          {/* Títulos */}
          <h2 className="text-xl font-bold text-slate-900 mb-1">Código de verificación</h2>
          <p className="text-slate-500 text-xs text-center max-w-xs mb-5 leading-relaxed">
            Ingresa el código de 6 dígitos enviado al correo registrado:<br />
            <span className="font-bold text-slate-900">mc****@gmail.com</span>
          </p>

          {/* Inputs para los 6 dígitos */}
          <div className="flex space-x-2.5 mb-5">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleVerificationChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-10 h-14 text-center text-lg font-bold text-slate-800 bg-white border-2 border-slate-200 rounded-xl focus:border-[#16224f] focus:outline-none transition-all shadow-sm"
              />
            ))}
          </div>

          {/* Botón de confirmar vinculado para avanzar a la siguiente pantalla */}
          <button 
            type="button"
            onClick={() => {
              if (onIrASeleccionPrograma) {
                onIrASeleccionPrograma();
              }
            }}
            className="w-full bg-[#16224f] hover:bg-[#111a3d] text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-md mb-3.5 text-sm cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Confirmar y acceder</span>
          </button>

          {/* Reenviar código */}
          <div className="text-xs text-slate-500 mb-5">
            Reenviar código en <span className="font-bold text-slate-800">{formatTime(timeLeft)}</span>
          </div>

          {/* Línea divisoria */}
          <div className="w-full border-t border-slate-200 mb-3.5"></div>

          {/* Enlaces inferiores */}
          <div className="w-full flex justify-between items-center text-xs font-medium text-slate-500 px-1">
            <button 
              type="button"
              onClick={() => setMostrarModal(false)}
              className="flex items-center hover:text-slate-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5 mr-1" />
              Ingresar otro código
            </button>
            
            <button 
              type="button"
              className="flex items-center hover:text-slate-800 transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 mr-1 text-slate-400" />
              No recibí el código
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}