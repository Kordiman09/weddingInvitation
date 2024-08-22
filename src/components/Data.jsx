import React, { useState } from 'react';

const familyNames = ["Familia Graneros", "Familia Petrines"];

const Data = () => {
  const [familyNameIndex, setFamilyNameIndex] = useState(0);

  return (
    <div>
      <div className="bg-wedding-lightBrown p-4 md:p-8 text-center flex flex-col justify-center h-auto min-h-[50vh]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-wedding-white font-parisienne font-extralight mb-2">
          ¡Nos vamos a casar!
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-wedding-white font-andada font-semibold mb-2">
          Comparte este gran día con nosotros
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-wedding-white font-andada font-thin mt-4">
          Estamos encantados de invitarte a ser parte de nuestra alegría.
        </p>
      </div>
    </div>
  );
};

export default Data;
