import React, { useState } from 'react';

const programas = [
  { id: 1, nombre: "Administración de Empresas", semestres: "8 semestres", modalidad: "Presencial", snies: "SNIES 2099", categoria: "Adm. y Contables" },
  { id: 2, nombre: "Administración de Empresas", semestres: "8 semestres", modalidad: "Virtual", snies: "SNIES 115805", categoria: "Adm. y Contables" },
  { id: 3, nombre: "Contaduría Pública", semestres: "8 semestres", modalidad: "Presencial", snies: "SNIES 4565", categoria: "Adm. y Contables" },
  { id: 4, nombre: "Contaduría Pública", semestres: "8 semestres", modalidad: "Virtual", snies: "SNIES Res. 824035", categoria: "Adm. y Contables" },
  { id: 5, nombre: "Marketing y Comunicación Digital", semestres: "8 semestres", modalidad: "Presencial", snies: "SNIES 116513", categoria: "Adm. y Contables" },
  { id: 6, nombre: "Actividad Física y Deporte", semestres: "8 semestres", modalidad: "Presencial", snies: "SNIES 117593", categoria: "Ciencias Humanas" },
  { id: 7, nombre: "Licenciatura en Español e Inglés", semestres: "8 semestres", modalidad: "Presencial", snies: "SNIES 106315", categoria: "Ciencias Humanas" },
  { id: 8, nombre: "Licenciatura en Educación Infantil", semestres: "8 semestres", modalidad: "Presencial", snies: "SNIES 106650", categoria: "Ciencias Humanas" },
  { id: 9, nombre: "Licenciatura en Música", semestres: "8 semestres", modalidad: "Presencial", snies: "SNIES 19681", categoria: "Ciencias Humanas" },
  { id: 10, nombre: "Enfermería", semestres: "10 semestres", modalidad: "Presencial", snies: "SNIES 54861", categoria: "Ciencias de la Salud" },
  { id: 11, nombre: "Tecnología en Atención Prehospitalaria", semestres: "6 semestres", modalidad: "Presencial", snies: "SNIES 103852", categoria: "Ciencias de la Salud" },
  { id: 12, nombre: "Tecnología en Atención Prehospitalaria", semestres: "6 semestres", modalidad: "Presencial", snies: "SNIES 108870", categoria: "Ciencias de la Salud" },
  { id: 13, nombre: "Ingeniería Industrial", semestres: "10 semestres", modalidad: "Presencial", snies: "SNIES 107298", categoria: "Ingeniería" },
  { id: 14, nombre: "Ingeniería de Sistemas", semestres: "10 semestres", modalidad: "Presencial", snies: "SNIES 101756", categoria: "Ingeniería" },
  { id: 15, nombre: "Licenciatura en Educación Religiosa", semestres: "8 semestres", modalidad: "Presencial", snies: "SNIES 108645", categoria: "Teología y Religión" },
  { id: 16, nombre: "Teología", semestres: "8 semestres", modalidad: "Presencial", snies: "SNIES 108288", categoria: "Teología y Religión" }
];

const categorias = ['Todos', 'Ciencias de la Salud', 'Adm. y Contables', 'Ingeniería', 'Ciencias Humanas', 'Teología y Religión'];

export default function OfertaAcademica({ onIrAlPortal }) {
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  const programasFiltrados = filtroActivo === 'Todos' 
    ? programas 
    : programas.filter(p => p.categoria === filtroActivo);

  return (
    <div className="bg-[#0b132b] min-h-screen text-white font-sans">
      
      {/* SECCIÓN SUPERIOR (Hero) */}
      <section className="px-8 py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <span className="bg-[#b3882b]/20 text-[#f4d06f] text-xs px-3 py-1 rounded-full font-medium border border-[#b3882b]/40">
            • Inscripciones abiertas - Periodo 2026-II
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Tu futuro comienza aquí
          </h1>
          <p className="text-gray-300 mt-4 text-base max-w-xl">
            Descubre los programas de pregrado de la Universidad Adventista de Colombia y da el primer paso hacia tu formación profesional.
          </p>
          <div className="flex gap-4 mt-8">
            <button 
              onClick={onIrAlPortal}
              type="button"
              className="bg-[#e5a93b] hover:bg-[#d4982f] text-black font-semibold px-6 py-3 rounded-lg transition cursor-pointer"
            >
              Iniciar inscripción &rarr;
            </button>
            <button className="bg-[#1c2a4a] hover:bg-[#24355c] text-white font-semibold px-6 py-3 rounded-lg border border-white/10 transition">
              Más información
            </button>
          </div>
        </div>

        {/* Tarjetas de estadísticas */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="bg-[#152238] p-5 rounded-xl border border-white/5">
            <span className="text-2xl font-bold text-[#e5a93b]">9</span>
            <p className="text-sm text-white font-medium mt-1">Programas de pregrado</p>
            <span className="text-xs text-gray-400">Presenciales en Medellin</span>
          </div>
          <div className="bg-[#152238] p-5 rounded-xl border border-white/5">
            <span className="text-2xl font-bold text-[#e5a93b]">2026-II</span>
            <p className="text-sm text-white font-medium mt-1">Periodo activo</p>
            <span className="text-xs text-gray-400">Inscripciones hasta jul 31</span>
          </div>
          <div className="bg-[#152238] p-5 rounded-xl border border-white/5">
            <span className="text-2xl font-bold text-[#e5a93b]">40+</span>
            <p className="text-sm text-white font-medium mt-1">Años de excelencia</p>
            <span className="text-xs text-gray-400">Formando líderes desde 1981</span>
          </div>
          <div className="bg-[#152238] p-5 rounded-xl border border-white/5">
            <span className="text-2xl font-bold text-[#e5a93b]">95%</span>
            <p className="text-sm text-white font-medium mt-1">Empleabilidad</p>
            <span className="text-xs text-gray-400">Egresados vinculados al sector</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN INFERIOR (Listado de Programas con Filtros) */}
      <section className="bg-gray-100 text-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Oferta académica</p>
          <h2 className="text-3xl font-bold mt-1 mb-6">Programas de pregrado</h2>

          {/* Filtros Funcionales */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categorias.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setFiltroActivo(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${filtroActivo === cat ? 'bg-[#0b132b] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de Tarjetas Filtradas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programasFiltrados.map((prog) => (
              <div key={prog.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 font-bold">🎓</div>
                    <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-medium">{prog.categoria}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{prog.nombre}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">{prog.semestres}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">{prog.modalidad}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">{prog.snies}</span>
                  </div>
                </div>
                <button 
                  onClick={onIrAlPortal}
                  type="button"
                  className="w-full py-2.5 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  Inscribirme &rsaquo;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: CALENDARIO Y REQUISITOS */}
      <section className="bg-gray-100 text-gray-900 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Calendario Académico */}
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Fechas importantes</p>
            <h3 className="text-2xl font-bold mb-6">Calendario académico 2026–II</h3>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-sm font-medium text-gray-800">Apertura de inscripciones</span>
                </div>
                <span className="text-sm font-semibold text-emerald-600">1 jul 2026</span>
              </div>
              
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-amber-50/40">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="text-sm font-medium text-gray-800">Cierre de inscripciones</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">Hoy</span>
                  <span className="text-sm font-semibold text-amber-600">31 jul 2026</span>
                </div>
              </div>

              <div className="p-4 border-b border-gray-100 flex justify-between items-center text-gray-500">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                  <span className="text-sm">Revisión de documentos</span>
                </div>
                <span className="text-sm font-medium text-gray-700">1 – 10 ago 2026</span>
              </div>

              <div className="p-4 border-b border-gray-100 flex justify-between items-center text-gray-500">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                  <span className="text-sm">Publicación de resultados</span>
                </div>
                <span className="text-sm font-medium text-gray-700">15 ago 2026</span>
              </div>

              <div className="p-4 border-b border-gray-100 flex justify-between items-center text-gray-500">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                  <span className="text-sm">Legalización y pago de matrícula</span>
                </div>
                <span className="text-sm font-medium text-gray-700">16 – 23 ago 2026</span>
              </div>

              <div className="p-4 flex justify-between items-center text-gray-500">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                  <span className="text-sm">Inicio de clases</span>
                </div>
                <span className="text-sm font-medium text-gray-700">2 sep 2026</span>
              </div>
            </div>
          </div>

          {/* Requisitos de Inscripción */}
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Documentación</p>
            <h3 className="text-2xl font-bold mb-6">Requisitos de inscripción</h3>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
              <div className="flex items-center gap-4 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600">📄</div>
                <span className="text-sm font-medium text-gray-800">Documento de identidad vigente (ambas caras)</span>
              </div>
              <div className="flex items-center gap-4 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600">🎓</div>
                <span className="text-sm font-medium text-gray-800">Diploma o certificado de bachiller</span>
              </div>
              <div className="flex items-center gap-4 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600">📜</div>
                <span className="text-sm font-medium text-gray-800">Acta de grado de bachiller</span>
              </div>
              <div className="flex items-center gap-4 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600">📊</div>
                <span className="text-sm font-medium text-gray-800">Resultados ICFES / Saber 11</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600">👤</div>
                <span className="text-sm font-medium text-gray-800">Foto tamaño cédula (fondo blanco)</span>
              </div>
            </div>

            {/* Alerta de Ciencias de la Salud */}
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-900 text-sm">
              <span>ℹ️</span>
              <p>Para programas de <strong className="font-semibold text-amber-950">Ciencias de la Salud</strong> se requiere adicionalmente un certificado médico de aptitud física expedido por médico titulado.</p>
            </div>

            {/* Tarjeta de Acción CTA */}
            <div className="mt-6 bg-[#152238] rounded-2xl p-6 text-center text-white border border-white/10">
              <h4 className="font-bold text-lg mb-1">¿Listo para inscribirte?</h4>
              <p className="text-xs text-gray-300 mb-5">Ingresa con tu código institucional para comenzar el proceso.</p>
              <button 
                onClick={onIrAlPortal}
                type="button"
                className="w-full bg-[#e5a93b] hover:bg-[#d4982f] text-black font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
              >
                Ingresar con código institucional &rarr;
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER INSTITUCIONAL */}
      <footer className="bg-white text-gray-600 border-t border-gray-200 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0b132b] flex items-center justify-center text-white font-bold text-xs">U</div>
            <div>
              <p className="font-bold text-gray-900 leading-tight">UNAC</p>
              <p className="text-xs text-gray-500">Universidad Adventista de Colombia</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500">
            <span>admisiones@unac.edu.co</span>
            <span>•</span>
            <span>(601) 861 0000 Ext. 201</span>
            <span>•</span>
            <span>Chía, Cundinamarca</span>
          </div>
          <p className="text-xs text-gray-400">&copy; 2024 UNAC</p>
        </div>
      </footer>

    </div>
  );
}