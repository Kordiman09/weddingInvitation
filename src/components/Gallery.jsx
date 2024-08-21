import React, { useState } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
        <div className="flex flex-col items-center bg-wedding-lightGreen">
        {/* Large Image Display */}
        <h3 className='mt-6 text-center text-7xl font-parisienne text-wedding-white'>Galeria de Fotos</h3>
        <div className="mt-4 mb-10">
            <img
            src={selectedImage}
            alt="Selected"
            className="w-full max-w-lg h-96 object-cover rounded-lg border-4 border-wedding-white"
            />
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center space-x-2 mb-10">
            {images.map((image, index) => (
            <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(image)}
                className={`cursor-pointer w-20 h-20 object-cover rounded-lg border-2 ${
                selectedImage === image ? 'border-wedding-darkBrown' : 'border-wedding-white'
                }`}
            />
            ))}
        </div>
        </div>
    </div>
  );
};

export default Gallery;
