import React from 'react';
import campoVidaImage from '../assets/campoVida.png';

const Description = () => {
  return (
    <div className="bg-white p-8 flex flex-col md:flex-row items-center">
      {/* Left Side: Text and Link */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 flex flex-col justify-between">
        <div>
          <h2 className="text-8xl font-parisienne font-normal text-wedding-darkBrown mb-4">Lugar</h2>
          <p className="text-2xl font-andada">
            La boda se llevara acabo en el Campo Vida en Arandas. Para consultar la ubicacion, haz click en el link de abajo
          </p>
        </div>
        <div className="mt-4">
          <a 
            href="https://maps.app.goo.gl/2uohnT9iQk1ASGx99" 
            className="text-blue-500 hover:underline text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Direccion Google Maps
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center">
        <img src={campoVidaImage} alt="Campo Vida" className="w-full h-auto max-w-md rounded-lg" />
      </div>
    </div>
  );
};

export default Description;
