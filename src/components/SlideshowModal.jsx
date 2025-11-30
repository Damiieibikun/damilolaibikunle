import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SlideshowModal = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !images || images.length === 0) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose]);

  if (!isOpen || !images || images.length === 0) return null;

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const modalContent = (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center dark:bg-black bg-[#dedede] bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full mx-4 my-8 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
          aria-label="Close slideshow"
        >
          <IoMdClose size={28} />
        </button>

        {/* Main Image */}
        <div className="relative w-full flex items-center justify-center mb-4 min-h-[300px]">
          <button
            onClick={handlePrevious}
            className="absolute left-2 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-3"
            aria-label="Previous image"
          >
            <IoIosArrowBack size={24} />
          </button>

          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1} of ${images.length}`}
            className="max-w-full max-h-[65vh] object-contain rounded-lg"
          />

          <button
            onClick={handleNext}
            className="absolute right-2 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-3"
            aria-label="Next image"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>

        {/* Image Counter */}
        <div className="text-white text-center mb-2 text-sm">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex gap-2 justify-center overflow-x-auto pb-2 px-2 max-w-full">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => handleThumbnailClick(idx)}
                className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-blue-500 scale-110'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default SlideshowModal;

