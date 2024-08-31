import React from 'react';
import backgroundImage from '../assets/donationBackground.jpg'; // Import the background image
import giftIcon from '../assets/email.jpg'; // Example icon for the "lluvia de sobres" section

const Donations = () => {
  return (
    <div
      className="relative p-8 text-center bg-cover bg-left-bottom sm:bg-left-bottom flex items-center justify-end"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        minHeight: '100vh', // Full viewport height
      }}
    >
      {/* White Overlay */}
      <div className="bg-wedding-white bg-opacity-80 p-8 md:w-1/2 w-12/12 rounded-lg shadow-lg">
        <p className="text-base text-gray-600 font-andada mb-1">
          El mejor regalo es tu presencia, pero si deseas obsequiarnos algo, te dejamos algunas opciones:
        </p>

        {/* Header */}
        <h2 className="text-4xl md:text-4xl lg:text-5xl font-parisienne text-gray-800 mt-3 mb-3 ">Mesa de Regalos</h2>
        
        {/* Link */}
        <a 
          href="https://www.amazon.com.mx/wedding/registry/SMBEQ0Z1LRP3" 
          className="text-xl text-wedding-lightBrown hover:underline mx-4 font-andada"
          target="_blank"
          rel="noopener noreferrer"
        >
          Obsequiar ahora
        </a>

        {/* Sub-header and Icon */}
        <h3 className="text-4xl font-parisienne text-gray-700 mt-4 mb-0">Lluvia de sobres</h3>

        {/* Text */}
        <p className="text-sm text-gray-600 font-andada mt-1 mb-4">
          esta es la tradicion de dar dinero en efectivo a los novios en un sobre el dia de el evento
        </p>
      
        <img src={giftIcon} alt="Gift Icon" className="mx-auto mb-4 w-auto h-11" />

        <p className="text-bse text-gray-600 font-andada mb-1">
          Si asi lo prefieres, puedes realizar transferencia
        </p>
        <p className="text-lg text-gray-600 font-andada mb-0">
          SANTANDER
        </p>
        <p className='text-base text-gray-600 font-andada mb-1'>RYAN STEVEN MONTGOMERY ENRIQUEZ</p>
        <p className='text-base text-gray-600 font-andada mb-1'>014320200143360241</p>
      </div>
    </div>
  );
};

export default Donations;
