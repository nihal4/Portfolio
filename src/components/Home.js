import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const textToType = "HI, I'm Nihal Ahmed "; // Full text to type
  const alwaysVisibleText = "HI"; // Always visible text

  const handleNavigate = () => {
    navigate('/specialization');
  };

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 425) {
        setIsSmallScreen(true); // Disable typewriter effect for small screens
      } else {
        setIsSmallScreen(false); // Enable typewriter effect for larger screens
      }
    };

    checkScreenSize(); // Check size on initial load
    window.addEventListener('resize', checkScreenSize); // Recheck size on window resize

    return () => {
      window.removeEventListener('resize', checkScreenSize); // Cleanup listener
    };
  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
      const typeWriterEffect = () => {
        let i = 0; // Start from the character after "HI"
        const typingSpeed = 100; // Speed of typing
        const erasingSpeed = 50; // Speed of erasing
        const pauseTime = 500; // Pause before erasing
        const element = textRef.current;

        const type = () => {
          if (i < textToType.length) {
            // Make sure the alwaysVisibleText is not affected
            element.innerHTML = alwaysVisibleText + textToType.substring(alwaysVisibleText.length, i + 1);
            i++;
            setTimeout(type, typingSpeed);
          } else {
            setTimeout(erase, pauseTime);
          }
        };

        const erase = () => {
          if (i > alwaysVisibleText.length) {
            element.innerHTML = alwaysVisibleText + textToType.substring(alwaysVisibleText.length, i - 1);
            i--;
            setTimeout(erase, erasingSpeed);
          } else {
            setTimeout(type, pauseTime); // Restart the typing effect
          }
        };

        type(); // Start the typing effect when the component mounts
      };

      typeWriterEffect(); // Run the effect
    }
  }, [isSmallScreen]);

  return (
    <div className="container">
      <div className="page">
        <div className="typewriter-container">
          <h1 ref={textRef}></h1> {/* Text will be typed here */}
        </div>
        
        <p className="quote">"If you're unsure about the outcome, give it a try. Like Schrödinger's cat, you won't know until you take a look."</p>
        
        <button className="styled-button" onClick={handleNavigate}>Learn More</button>
      </div>
    </div>
  );
};

export default Home;
