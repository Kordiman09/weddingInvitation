import React, { useState, useEffect } from 'react';

const familyNames = ["Familia Graneros", "Familia Petrines"];

const Data = () => {
  const [familyNameIndex, setFamilyNameIndex] = useState(0);

  return (
    <div>
      <div className="bg-wedding-lightBrown p-8 text-center h-500 flex flex-col justify-center">
        <h1 className='text-6xl text-wedding-white font-parisienne font-extralight mb-2'>Nos vamos a casar!</h1>
        <h2 className="text-6xl text-wedding-white font-andada font-semibold  mb-0">Comparte este gran dia con nosotros</h2>
        <p className="mt-6 text-2xl text-wedding-white text- font-andada font-thin mt-0">
          estamos encantados de invitarte a ser parte de nuestra alegria 
        </p>
      </div>
    </div>
  );
};

export default Data;
