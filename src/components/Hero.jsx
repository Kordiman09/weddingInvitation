import React from 'react';
import backgroundImage from '../assets/wedding.jpg';

const Hero = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        WebkitBackgroundAttachment: 'fixed',
        WebkitBackgroundPosition: 'center',
        WebkitBackgroundSize: 'cover'
      }}
    >
      {/* Spacing adjustment for h1 */}
      <h1 className="text-xs font-parisienne text-white lg:mb-24 md:mb-1 mb-16">
          .
      </h1>

      {/* Fixed height for h1 with responsive font size */}
      <h1 
        className="text-6xl md:text-8xl lg:text-9xl font-parisienne text-white lg:mt-1 md: sm:mt-2 mb-8" 
        style={{ height: 'auto' }}
      >
        Ryan & Alicia
      </h1>

      {/* Fixed height for p with responsive font size */}
      <p 
        className="text-3xl md:text-2xl lg:text-3xl font-extralight text-white font-andada" 
        style={{ height: 'auto' }}
      >
        01/12/2024
      </p>
      
      <style>
        {`
          @supports (-webkit-backdrop-filter: none) or (--webkit-appearance: none) {
            /* Target Safari */
            .hero-background {
              background-attachment: scroll;
              background-position: center;
              background-size: cover;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
