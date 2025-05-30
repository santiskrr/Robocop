import './Home.css';
import Navbar from '../components/Navbar';
import { FaCog } from 'react-icons/fa';
import React from "react";
import Card from '../Card.jsx';

function Home() {
  return (
    <>
      <main className="min-h-screen text-white relative overflow-hidden font-roboto">

        <div className="relative z-10 flex flex-col items-center justify-center mt-10 gap-10 px-4">
          <h1 className="text-4xl font-orbitron text-cyan-400 drop-shadow-lg flex items-center gap-2">
            <FaCog className="animate-spin-slow text-cyan-300" />
            Bienvenido a RoboCop Zone
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
            
            {/* Imagen izquierda */}
            <div className="w-64 h-96 neon-image" style={{
              backgroundImage: `url('https://i.pinimg.com/736x/05/93/a5/0593a5739e1faa5759d3dbb79c510a8a.jpg')`
            }} />


            <Card />

            {/* Imagen derecha */}
            <div className="w-64 h-96 neon-image" style={{
              backgroundImage: `url('https://bloody-disgusting.com/wp-content/uploads/2022/01/watch-robocop-the-series.png')`
            }} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
