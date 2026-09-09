import React, { useState, useRef, useEffect } from 'react';
import { Lock, Check, ChevronLeft, Mail, X } from 'lucide-react';

export default function VerificacionCodigo({ onVolver }) {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(47);
  const inputRefs = useRef([]);

  // Temporizador para el código
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

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
    <div className="min-h-screen bg-slate-900/50 backdrop-blur-md flex items-center justify-center p-4 font-sans relative overflow-x-hidden">
      
      {/* Contenedor principal de la ventana modal */}
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-7 flex flex-col items-center relative transition-all duration-300">
        
        {/* Botón de cerrar (X) profesional y altamente visible */}
        <button 
          type="button"
          onClick={onVolver}
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

        {/* Botón de confirmar */}
        <button 
          type="button"
          onClick={() => alert(`Código ingresado: ${verificationCode.join('')}`)}
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
            onClick={onVolver}
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
  );
}