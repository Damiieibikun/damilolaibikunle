import { useState, useEffect } from 'react';

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
        isMobile: window.matchMedia('(max-width: 1024px)').matches,
    isNotMobile: window.matchMedia('(min-width: 1025px').matches,
  });

   useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 1024px)');
    const desktopQuery = window.matchMedia('(min-width: 1025px)');

    const updateScreenSize = () => {
      setScreenSize({
        isMobile: mobileQuery.matches,
        isNotMobile: desktopQuery.matches,
       
      });
    };

    mobileQuery.addEventListener('change', updateScreenSize);
 
    desktopQuery.addEventListener('change', updateScreenSize);

    return () => {
      mobileQuery.removeEventListener('change', updateScreenSize);
  
      desktopQuery.removeEventListener('change', updateScreenSize);
    };
  }, []);

  return screenSize;
}

export default useScreenSize;
