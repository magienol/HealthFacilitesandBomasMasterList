
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Style/ImageSlider.css';

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/placeholder.svg?height=400&width=800',
    '/placeholder.svg?height=400&width=800',
    '/placeholder.svg?height=400&width=800',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className='slider-container'>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`slider-image ${index === currentImage ? 'visible' : 'hidden'}`}
        />
      ))}
      <button onClick={prevImage} className='slider-nav prev'>
        <ChevronLeft />
      </button>
      <button onClick={nextImage} className='slider-nav next'>
        <ChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
