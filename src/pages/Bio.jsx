import './bio.css';
import Navbar from '../components/Navbar';
import { FaUser } from 'react-icons/fa';
import React from "react";

function Bio() {
  return (
    <>
      <main className="min-h-screen bg-black text-white font-roboto">
        <section className="flex flex-col md:flex-row items-center justify-center p-8 gap-8">
          <div className="md:w-1/2 text-shadow">
            <div className="flex items-center gap-4 mb-4">
              <FaUser className="text-5xl text-cyan-400 neon-icon" />
              <h2 className="text-4xl font-orbitron text-cyan-300 tracking-wider">
                RoboCop: Alex Murphy
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed tracking-wide mb-4">
              Alex J. Murphy era un oficial de policía dedicado que patrullaba las peligrosas calles de Detroit.
              Su vida cambió trágicamente cuando fue brutalmente asesinado por una pandilla mientras estaba de servicio.
              Sin embargo, la mega corporación Omni Consumer Products (OCP) vio en su cuerpo destruido una oportunidad.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed tracking-wide mb-4">
              Fue reconstruido como RoboCop: un cíborg con armamento de alta tecnología, fuerza sobrehumana
              y programación para hacer cumplir la ley. Aunque su memoria fue borrada, fragmentos de su humanidad persisten,
              lo que lo lleva a cuestionar su identidad, su propósito y la corporación que lo creó.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed tracking-wide mb-4">
              La historia de RoboCop trasciende la acción: explora temas como la deshumanización por la tecnología, la privatización de la seguridad,
              el control de los medios, la gentrificación y la lucha por conservar el alma en un cuerpo mecánico.
            </p>

            <p className="text-lg text-cyan-300 italic mt-2 border-l-4 border-cyan-500 pl-4">
              “Tu vida fue robada. Tu cuerpo fue usado. Pero tu alma sigue luchando.”
            </p>
          </div>
          <div className="md:w-1/2 h-96 rounded-xl border-4 neon-border-cyan relative overflow-hidden robocop-image-bio"></div>
        </section>
      </main>
    </>
  );
}

export default Bio;
