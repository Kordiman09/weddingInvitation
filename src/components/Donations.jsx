import React from 'react';
import backgroundImage from '../assets/donationBackground.jpg'; // Import the background image
import giftIcon from '../assets/email.png'; // Example icon for the "lluvia de sobres" section

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
      <div className="bg-wedding-white bg-opacity-80 p-8 md:w-1/2 w-11/12 rounded-lg shadow-lg">
        {/* Header */}
        <h2 className="text-4xl font-andada text-gray-800 mb-2">Mesa de Regalos</h2>
        
        {/* Line */}
        <hr className="border-t-2 border-gray-300 w-1/2 mx-auto mb-6" />

        {/* Sub-header and Icon */}
        <h3 className="text-7xl font-parisienne text-gray-700 mb-4">Lluvia de sobres</h3>
        <img src={giftIcon} alt="Gift Icon" className="mx-auto mb-4 w-16 h-16" />

        {/* Text */}
        <p className="text-lg text-gray-600 font-andada mb-1">
          Estamos profundamente agradecidos por tu amor y apoyo,
        </p>
      
        <p className="text-lg text-gray-600 font-andada mb-1">
          todo lo que salga de tu corazon, sera recibido en el nuestro.
        </p>
        <p className="text-lg text-gray-600 font-andada mb-10">
          Hemos preparado una mesa de regalos y una lluvia de sobres para nuestra boda.
        </p>

        {/* Link */}
        <a 
          href="https://www.amazon.com.mx/wedding/registry/SMBEQ0Z1LRP3" 
          className="text-xl text-wedding-lightBrown hover:underline mt-8 font-andada"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribuir ahora
        </a>
        <p className='text-lg text-gray-600 font-andada mb-1'>O</p>
        <p className='text-lg text-gray-600 font-andada mb-1'>Puedes transferir a la siguiente cuenta</p>
        <p className='text-lg text-gray-600 font-andada mb-1'>014320200143360241</p>
      </div>
    </div>
  );
};

export default Donations;
