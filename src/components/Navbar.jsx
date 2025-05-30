import { Link } from 'react-router-dom';
import { FaRobot } from 'react-icons/fa';
import React from "react";

function Navbar() {
  return (
    <nav className="rounded-2xl bg-black p-4 flex items-center justify-between border-2 border-[#00f7ff] shadow-[0_0_10px_#00f7ff]">
      <div className="flex items-center">
        <FaRobot className="text-3xl text-white mr-2" />
        <h1 className="text-2xl text-white font-orbitron">Archivo RoboCop</h1>
      </div>
      <ul className="flex gap-10">
        <li>
          <Link to="/" className="text-white hover:text-red-600">Inicio</Link>
        </li>
        <li>
          <Link to="/historia" className="text-white hover:text-red-600">Historia</Link>
        </li>
        <li>
          <Link to="/bio" className="text-white hover:text-red-600">Biografía</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;