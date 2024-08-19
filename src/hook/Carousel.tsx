import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="carousel">
      <img 
        src={images[currentImageIndex]} 
        alt={`Carousel image ${currentImageIndex + 1}`} 
      />
    </div>
  );
};

export default Carousel;