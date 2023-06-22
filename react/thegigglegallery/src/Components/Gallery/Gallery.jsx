import React, { useState } from 'react';
import { GalleryStyle } from './Gallery.style';

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <GalleryStyle>
    <div className="gallery">
      <button className="arrow" onClick={previousImage}>{'<'}</button>
      <img className="image" src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button className="arrow" onClick={nextImage}>{'>'}</button>
    </div>
    </GalleryStyle>

  );
};

export default Gallery;
