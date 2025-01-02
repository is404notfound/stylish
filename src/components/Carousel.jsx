import React, { useState, useRef, useEffect } from 'react';
import '../styles/components/carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(null);

  const visibleImages = 2;
  const totalItems = images.length;
  const totalPages = Math.ceil(totalItems / visibleImages);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateY(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null); 
  };

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{ backgroundImage: `url(${image})`, height: `${100 / visibleImages}%` }}
            onClick={() => handleImageClick(image)} 
          ></div>
        ))}
      </div>
      <div className="carousel-indicators">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
      {isPopupOpen && (
        <div className="popup">
          <img src={selectedImage} alt="선택된 이미지" />
          <span className="close-button" onClick={closePopup}>close</span> 
        </div>
      )}
    </div>
  );
};

export default Carousel;