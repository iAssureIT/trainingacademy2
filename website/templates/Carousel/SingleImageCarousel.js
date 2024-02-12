"use client";

import React, { useState } from 'react';

const SingleImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center mb-4">
        <button
          className="bg-gray-300 p-2 rounded-full shadow-md mr-4"
          onClick={handlePrevSlide}
        >
          &lt;
        </button>
        <img
          src={images[currentIndex]}
          alt="Carousel Image"
          className="h-full object-cover rounded-lg w-full"
        />
        <button
          className="bg-gray-300 p-2 rounded-full shadow-md ml-4"
          onClick={handleNextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SingleImageCarousel;
