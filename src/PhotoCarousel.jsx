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
      console.log(currentIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length]);


  return (
    <div className="relative w-120 max-w-sm mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out">
        <img
          src={photos[currentIndex]}
          alt={`photo 1`}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default PhotoCarousel;
