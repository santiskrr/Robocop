import React from 'react';
import styled from 'styled-components';
import { FaCog } from 'react-icons/fa';
import { useState, useEffect } from 'react';
const Card = () => {
  return (
    <>
    
    <StyledWrapper>
      <div className="card">
        <div className="card__border"></div>
        <main className="flex flex-col items-center text-cyan-300">
          <div className="flex flex-col items-center text-center">
            <FaCog className="text-6xl mb-4 animate-spin-slow" />
            <h2 className="text-4xl font-orbitron mb-4">Bienvenido al Archivo RoboCop</h2>
            <p className="font-roboto max-w-md mb-8">
              Explora el legado de RoboCop, el defensor cibernético de Detroit. Conoce su origen y misiones.
            </p>
            <div className="robocop-visor-container relative">
                <div className="visor-oficial"></div> 
              <div className="visor-oficial-container">
              </div>
              <img
                src="https://pngimg.com/uploads/robocop/robocop_PNG28.png"
                alt="Cabeza de RoboCop"
                className="w-80 h-auto"
              />
            </div>
          </div>
        </main>
      </div>
    </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 19rem;
    background-color: hsla(240, 15%, 9%, 1);
    background-image: radial-gradient(
        at 88% 40%,
        rgba(255, 0, 0, 0.31) 0px,
        transparent 85%
      ),
      radial-gradient(at 49% 30%, rgba(255, 0, 0, 0.69) 0px, transparent 85%),
      radial-gradient(at 14% 26%, rgb(0, 0, 255) 0px, transparent 85%),
      radial-gradient(at 100% 64%, hsl(0, 100.00%, 36.70%) 0px, transparent 85%),
      radial-gradient(at 41% 94%, hsl(236, 100.00%, 62.70%) 0px, transparent 85%),
      radial-gradient(at 100% 99%, hsl(234, 96.30%, 31.60%) 0px, transparent 85%);
    border-radius: 1rem;
    box-shadow: 0px -16px 24px 0px rgb(11, 0, 110) inset;
    overflow: visible;
  }

  .card .card__border {
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: -10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 5px);
    height: calc(100% + 5px);
    background-image: linear-gradient(
      0deg,
      hsl(244, 100.00%, 50.00%) -50%,
      hsl(246, 100.00%, 50.00%) 100%
    );
    border-radius: 1rem;
  }

  .card .card__border::before {
    content: '';
    pointer-events: none;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    transform-origin: center;
    width: calc(100% + 4px); // Ligeramente más grande para cubrir el borde
    height: calc(100% + 4px);
    background-image: linear-gradient(
      0deg,
      hsla(0, 0.00%, 100.00%, 0.00) 0%,
      hsl(0, 100.00%, 50.00%) 40%,
      hsl(0, 100.00%, 50.00%) 60%,
      hsla(0, 0.00%, 100.00%, 0.00) 100%
    );
    animation: rotate 3s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(45deg);
    
    }
      
  }
`;

export default Card;