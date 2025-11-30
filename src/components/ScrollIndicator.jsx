import React, { useState, useEffect } from 'react';
import { BsArrowDown } from "react-icons/bs";

const ScrollIndicator = ({ targetId, sectionId }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const isSectionInView = rect.top < window.innerHeight && rect.bottom > window.innerHeight * 0.3;
        const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150;
        const isScrolledPast = rect.bottom < window.innerHeight * 0.5;
        
        setIsVisible(isSectionInView && !isNearBottom && !isScrolledPast);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId]);

  if (!isVisible) return null;

  return (
    <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 animate-bounce z-10'>
      <a 
        href={`#${targetId}`} 
        className="flex flex-col items-center dark:text-[#FAF9F6] text-[#10141E] hover:text-[#1456ab] dark:hover:text-white dark:hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1456ab] rounded-full p-2"
        aria-label={`Scroll to ${targetId} section`}
      >
        <span className="text-sm mb-2 opacity-70 dark:opacity-70 dark:hover:opacity-100 transition-opacity duration-300">Scroll</span>
        <BsArrowDown size={24} className="opacity-70 dark:opacity-70 dark:hover:opacity-100 transition-opacity duration-300" />
      </a>
    </div>
  );
};

export default ScrollIndicator;

