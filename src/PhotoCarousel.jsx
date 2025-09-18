import React, { useState, useEffect } from "react";

// const photos = [
//   "https://via.placeholder.com/600x300?text=Photo+1",
//   "https://via.placeholder.com/600x300?text=Photo+2",
//   "https://via.placeholder.com/600x300?text=Photo+3",
//   "https://via.placeholder.com/600x300?text=Photo+4",
// ];

const PhotoCarousel = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [photos.length]);


  return (
    <div className="w-screen overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out">
        <img
          src={photos[currentIndex]}
          alt={`photo 1`}
          className="w-full h-full object-cover transition-opacity duration-5000 ease-in-out opacity-100"
        />
      </div>
    </div>
  );
};

export default PhotoCarousel;
