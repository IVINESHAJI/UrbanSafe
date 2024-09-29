import React, { useEffect, useState } from 'react';
import '../css/Overlay.css'; // CSS for overlay styling

const Overlay = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to detect mobile devices based on screen width or user agent
  const detectMobileDevice = () => {
    if (window.innerWidth < 1150) {
      setIsMobile(true);
    } else {
        setIsMobile(false);
    }
  };

  // Call the detection function when the component mounts
  useEffect(() => {
    detectMobileDevice();
    window.addEventListener('resize', detectMobileDevice); // Update on window resize

    return () => {
      window.removeEventListener('resize', detectMobileDevice); // Cleanup
    };
  }, []);

  return (
    <>
      {isMobile && (
        <div className="overlay">
          <div className="overlay-content" style={{fontFamily: 'Playfair Display SC'}}>
            <h2>For the best experience, view on a wider screen</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Overlay;
