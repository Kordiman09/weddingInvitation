import React, { useState } from 'react';
import linea1 from "../assets/lineasDecoracion.png";
import linea2 from "../assets/lineasDecoracionVolteadas.png";

const familyNames = ["Familia Graneros", "Familia Petrines"];

const Data = () => {
  const [familyNameIndex, setFamilyNameIndex] = useState(0);

  return (
    <div>
      <div className="bg-wedding-lightBrown p-4 md:p-8 text-center flex flex-col justify-center items-center h-auto ">
        <img
          src={linea1}
          alt="Decorative Line"
          className="mt-0 sm:w-1/4 md:w-3/4 lg:w-3/5 "
        />
        <h1 className="mt-0 text-5xl md:text-6xl lg:text-8xl text-wedding-white font-parisienne font-extralight mb-2">
          ¡Nos vamos a casar!
        </h1>
        <img
          src={linea2}
          alt="Decorative"
          className="mt-0 sm:w-1/4 md:w-3/4 lg:w-3/5 h-auto"
        />
        <h2 className="mt-1 text-2xl md:text-4xl lg:text-5xl text-wedding-white font-andada font-semibold mb-0">
          Comparte este gran día con nosotros
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-wedding-white font-andada font-thin mt-1 text-center">
          Estamos encantados de invitarte a ser parte de nuestra alegría.
        </p>
      </div>
    </div>
  );
};

export default Data;
