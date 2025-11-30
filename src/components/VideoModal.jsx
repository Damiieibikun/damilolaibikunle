import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';

const VideoModal = ({ videoSrc, isOpen, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.log('Autoplay prevented:', err);
        });
      }
    } else {
      document.body.style.overflow = 'unset';
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !videoSrc) return null;

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
        className="relative max-w-4xl w-full mx-4 my-8 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
          aria-label="Close video"
        >
          <IoMdClose size={28} />
        </button>

        {/* Video Player */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            autoPlay
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default VideoModal;

