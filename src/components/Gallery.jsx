import React, { useState } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="bg-wedding-lightGreen py-8 px-4 flex flex-col items-center">
      {/* Large Image Display */}
      <h3 className="mt-6 text-center text-6xl md:text-7xl lg:text-8xl font-parisienne text-wedding-white">
        Galería de Fotos
      </h3>
      <div className="mt-4 mb-6 md:mb-10 w-full max-w-lg">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-auto object-cover rounded-lg border-4 border-wedding-white"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-6 md:mb-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            className={`cursor-pointer w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg border-2 ${
              selectedImage === image ? 'border-wedding-darkBrown' : 'border-wedding-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
