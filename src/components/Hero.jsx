import React from 'react';
import backgroundImage from '../assets/wedding.jpg';

const Hero = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Spacing adjustment for h1 */}
      <h1 className="text-xs font-parisienne text-white mb-24">
          .
      </h1>

      {/* Fixed height for h1 with responsive font size */}
      <h1 
        className="text-6xl md:text-8xl lg:text-9xl font-parisienne text-white mt-1 mb-7" 
        style={{ height: 'auto' }}
      >
        Ryan & Alicia
      </h1>

      {/* Fixed height for p with responsive font size */}
      <p 
        className="text-xl md:text-2xl lg:text-3xl text-white font-andada" 
        style={{ height: 'auto' }}
      >
        01/12/2024
      </p>
    </div>
  );
};

export default Hero;
