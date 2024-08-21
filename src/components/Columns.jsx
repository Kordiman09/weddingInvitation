import React from 'react';
import locationImage from "../assets/location.png";
import timeImage from "../assets/time.png";
import dressCodeImage from "../assets/dress-code.png";
import campoVidaImage from "../assets/campoVida.png";

const Columns = () => {
  return (
    <div className="bg-yellow-600 p-8 text-center text-white h-96 flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
        <div className='flex flex-col items-center justify-center'>
        <img src={locationImage} alt="Location" className="w-16 h-16 mb-4 justify-center" />
          <h2 className="text-2xl font-bold mb-4">Place</h2>
          <img src={campoVidaImage} alt="Camp" className='w-27 h-27 mb-4 justify-center'/>
          <p>Location details here.</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img src={timeImage} alt="Time" className="w-16 h-16 mb-4 justify-center" />
          <h2 className="text-2xl font-bold mb-4">Time</h2>
          <p>Event timing details here.</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img src={dressCodeImage} alt="Dress Code" className="w-16 h-16 mb-4 justify-center" />
          <h2 className="text-2xl font-bold mb-4">Dress Code</h2>
          <p>Dress code details here.</p>
        </div>
      </div>
    </div>
  );
};

export default Columns;
