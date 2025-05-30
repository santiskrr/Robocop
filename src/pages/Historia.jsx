import React from 'react';
import Navbar from '../components/Navbar';
import { FaBook } from 'react-icons/fa';
import './Historia.css';
import Checkbox from '../components/Checkbox';
function Historia() {
  return (
    <>
      <main className="min-h-screen bg-black text-white font-roboto">
        <section className="flex flex-col md:flex-row items-center justify-center p-8 gap-8">
          <div className="md:w-1/2 text-shadow">
            <div className="flex items-center gap-4 mb-4">
              <FaBook className="text-5xl text-red-600 neon-icon" />
              <h2 className="text-4xl font-orbitron text-red-500 tracking-wider glitch">
  La Historia de RoboCop
</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed tracking-wide mb-4">
              En un futuro distópico, la ciudad de Detroit está sumida en el caos y la criminalidad.
              El oficial Alex Murphy, brutalmente asesinado en servicio, es transformado en RoboCop por la mega corporación OCP (Omni Consumer Products),
              con el objetivo de imponer el orden mientras desarrollan su utopía privada: Ciudad Delta.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed tracking-wide mb-4">
              RoboCop, atrapado entre su programación cibernética y los recuerdos persistentes de su vida humana,
              comienza a cuestionar su propósito, enfrentar a sus creadores y buscar justicia por su asesinato.
              Su historia se convierte en una lucha entre el control corporativo y la humanidad que sobrevive dentro del metal.
            </p>
            <p className="text-lg text-gray-400 italic mt-2 border-l-4 border-red-600 pl-4">
              “Parte hombre. Parte máquina. Todo policía.”
            </p>
          </div>
          <Checkbox></Checkbox>
          <div className="md:w-1/2 h-96 rounded-xl border-4 neon-border relative overflow-hidden robocop-bg">
            
          </div>
        </section>
      </main>
      
    </>
  );
}

export default Historia;
