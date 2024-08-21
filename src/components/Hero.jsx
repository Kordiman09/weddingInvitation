import React from 'react';
import backgroundImage from '../assets/wedding.jpg';

const Hero = () => {
  return (
    <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center"style={{backgroundImage: `url(${backgroundImage})`, 
        backgroundAttachment: 'fixed',
      }}
    >
      <h1 className="text-xs font-parisienne text-white mb-24">
          .
      </h1>
      {/* Fixed height for h1 */}
      <h1 className="text-9xl font-parisienne text-white mt-1 mb-7" style={{height: '150px' }}>
        Ryan & Alicia
      </h1>

      {/* Fixed height for p */}
      <p className="text-3xl text-white font-andada" style={{height: '0px' }}>
        01/12/2024
      </p></div>
  );
};
export default Hero;

